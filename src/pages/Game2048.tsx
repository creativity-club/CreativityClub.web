import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Game2048 = () => {
  const [grid, setGrid] = useState<number[][]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const touchStart = useRef({ x: 0, y: 0 });

  // Helper functions for grid manipulation
  const rotateGrid = (currentGrid: number[][]) => currentGrid[0].map((_, i) => currentGrid.map(row => row[i]));
  const reverseGrid = (currentGrid: number[][]) => currentGrid.map(row => [...row].reverse()); // Create a new array for reverse

  const addRandomTile = useCallback((currentGrid: number[][]) => {
    const emptySpots = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === 0) emptySpots.push({ x: i, y: j });
      }
    }
    if (emptySpots.length > 0) {
      const spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
      currentGrid[spot.x][spot.y] = Math.random() < 0.9 ? 2 : 4;
    }
    return currentGrid;
  }, []);

  const checkGameOver = useCallback((currentGrid: number[][], currentScore: number) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === 0 ||
          (j < 3 && currentGrid[i][j] === currentGrid[i][j + 1]) ||
          (i < 3 && currentGrid[i][j] === currentGrid[i + 1][j])) {
          return; // Game is not over
        }
      }
    }
    setGameOver(true);
    toast({ title: "Game Over", description: `Your score: ${currentScore}` });
  }, []);

  const resetGame = useCallback(() => {
    const newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    addRandomTile(addRandomTile(newGrid));
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
    setWon(false);
  }, [addRandomTile]);

  const move = useCallback((direction: 'left' | 'right' | 'up' | 'down') => {
    setGrid(prevGrid => {
      let cloneGrid = JSON.parse(JSON.stringify(prevGrid));
      let changed = false;
      let newScore = score; // Use the latest score directly

      const operate = (grid: number[][]) => {
        let operatedGrid = grid.map(row => [...row]); // Deep copy for immutability
        for (let i = 0; i < 4; i++) {
          let row = operatedGrid[i].filter(val => val !== 0); // Filter out zeros

          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              newScore += row[j];
              row[j + 1] = 0;
              if (row[j] === 2048) setWon(true);
            }
          }
          row = row.filter(val => val !== 0); // Filter out merged zeros
          while (row.length < 4) row.push(0);

          if (JSON.stringify(row) !== JSON.stringify(operatedGrid[i])) {
            changed = true;
          }
          operatedGrid[i] = row;
        }
        return operatedGrid;
      };

      let tempGrid = cloneGrid;
      if (direction === 'up') {
        tempGrid = rotateGrid(operate(rotateGrid(tempGrid)));
      } else if (direction === 'down') {
        tempGrid = rotateGrid(reverseGrid(operate(reverseGrid(rotateGrid(tempGrid)))));
      } else if (direction === 'left') {
        tempGrid = operate(tempGrid);
      } else if (direction === 'right') {
        tempGrid = reverseGrid(operate(reverseGrid(tempGrid)));
      }

      if (changed) {
        setScore(newScore);
        const newGridWithTile = addRandomTile(tempGrid);
        checkGameOver(newGridWithTile, newScore); // Pass current score for checkGameOver
        return newGridWithTile;
      }
      return prevGrid; // No change, return previous grid
    });
  }, [addRandomTile, checkGameOver, score]); // Include score in dependencies for `newScore`

  const moveLeft = useCallback(() => move('left'), [move]);
  const moveRight = useCallback(() => move('right'), [move]);
  const moveUp = useCallback(() => move('up'), [move]);
  const moveDown = useCallback(() => move('down'), [move]);

  useEffect(() => {
    resetGame();
  }, [resetGame]); // Call resetGame only once on mount

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Use the current state values directly from the closures
      if (gameOver || won) return;
      switch (e.key) {
        case 'ArrowUp': moveUp(); break;
        case 'ArrowDown': moveDown(); break;
        case 'ArrowLeft': moveLeft(); break;
        case 'ArrowRight': moveRight(); break;
        default: return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveUp, moveDown, moveLeft, moveRight, gameOver, won]); // These functions are now stable due to useCallback

  const getTileColor = (value: number): string => {
    const colors: Record<number, string> = {
      2: 'bg-[#eee4da]', 4: 'bg-[#ede0c8]', 8: 'bg-[#f2b179]',
      16: 'bg-[#f59563]', 32: 'bg-[#f67c5f]', 64: 'bg-[#f65e3b]',
      128: 'bg-[#edcf72]', 256: 'bg-[#edcc61]', 512: 'bg-[#edc850]',
      1024: 'bg-[#edc53f]', 2048: 'bg-[#edc22e]'
    };
    return colors[value] || 'bg-[#cdc1b4]';
  };

  const getTextColor = (value: number): string => value <= 4 ? 'text-gray-800' : 'text-white';

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 30) {
      if (absDx > absDy) dx > 0 ? moveRight() : moveLeft();
      else dy > 0 ? moveDown() : moveUp();
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-md">
        <Link to="/" className="self-start flex items-center text-muted-foreground hover:text-white transition-all group mb-6">
          <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          <span className="text-gradient-primary">2048</span>
        </h1>

        <div className="flex items-center justify-between w-full mb-6">
          <Card className="p-4 bg-card/50 backdrop-blur-sm">
            <p className="text-muted-foreground">Score</p>
            <p className="text-2xl font-bold">{score}</p>
          </Card>

          <Button onClick={resetGame} className="bg-accent hover:bg-accent/90">New Game</Button>
        </div>

        {(gameOver || won) && (
          <div className="mb-6 p-4 bg-card/50 backdrop-blur-sm rounded-lg text-center w-full">
            <h2 className="text-2xl font-bold mb-2">{won ? "You Win! 🎉" : "Game Over!"}</h2>
            <p className="mb-4">Final Score: {score}</p>
            <Button onClick={resetGame} className="bg-accent hover:bg-accent/90">Play Again</Button>
          </div>
        )}

        <div
          className="grid grid-cols-4 gap-2 bg-[#bbada0] p-2 rounded-lg w-full aspect-square"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`flex items-center justify-center rounded-md ${cell === 0 ? 'bg-[#cdc1b4]' : getTileColor(cell)} ${getTextColor(cell)} font-bold aspect-square`}
              >
                {cell !== 0 && (
                  <span className={`text-${cell < 1000 ? 'xl' : 'lg'} font-bold`}>
                    {cell}
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        <div className="mt-6 text-sm text-muted-foreground text-center">
          <p className="mb-2">Use arrow keys to play, or swipe on mobile. Combine identical tiles to reach 2048!</p>
          <div className="mt-2 grid grid-cols-3 gap-1 md:hidden">
            <div></div>
            <Button onClick={moveUp} className="p-1 h-10 aspect-square">↑</Button>
            <div></div>
            <Button onClick={moveLeft} className="p-1 h-10 aspect-square">←</Button>
            <div></div>
            <Button onClick={moveRight} className="p-1 h-10 aspect-square">→</Button>
            <div></div>
            <Button onClick={moveDown} className="p-1 h-10 aspect-square">↓</Button>
            <div></div>
          </div>
          <p className="mt-2">
            This is a clone of the original <a href="https://play2048.co/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">2048 game</a> by Gabriele Cirulli.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game2048;
