import { useState, useEffect } from 'react';
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

  // Initialize game
  useEffect(() => {
    resetGame();
    // Add keyboard event listeners
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const resetGame = () => {
    // Initialize empty grid
    const newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    // Add two initial tiles
    addRandomTile(addRandomTile(newGrid));
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
    setWon(false);
  };

  const addRandomTile = (currentGrid: number[][]) => {
    const emptySpots = [];
    
    // Find all empty spots
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === 0) {
          emptySpots.push({ x: i, y: j });
        }
      }
    }
    
    if (emptySpots.length > 0) {
      // Choose a random empty spot
      const spot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
      // 90% chance for a 2, 10% chance for a 4
      currentGrid[spot.x][spot.y] = Math.random() < 0.9 ? 2 : 4;
    }
    
    return currentGrid;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (gameOver || won) return;

    // Process keyboard inputs
    switch (e.key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      default:
        return;
    }
  };

  const moveLeft = () => {
    // Create a deep copy of the grid
    let newGrid = JSON.parse(JSON.stringify(grid));
    let changed = false;
    let newScore = score;

    for (let i = 0; i < 4; i++) {
      // Skip empty rows
      if (!newGrid[i]) continue;
      
      // Filter out zeros
      const row = newGrid[i].filter(val => val !== 0);
      
      // Merge tiles
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          row[j + 1] = 0;
          if (row[j] === 2048) setWon(true);
          changed = true;
        }
      }
      
      const filteredRow = row.filter(val => val !== 0);
      
      // Fill with zeros
      while (filteredRow.length < 4) {
        filteredRow.push(0);
      }
      
      if (JSON.stringify(newGrid[i]) !== JSON.stringify(filteredRow)) {
        changed = true;
      }
      
      newGrid[i] = filteredRow;
    }
    
    if (changed) {
      setScore(newScore);
      addRandomTile(newGrid);
      setGrid(newGrid);
      checkGameOver(newGrid);
    }
  };

  const moveRight = () => {
    // Create a deep copy of the grid
    let newGrid = JSON.parse(JSON.stringify(grid));
    let changed = false;
    let newScore = score;

    for (let i = 0; i < 4; i++) {
      // Skip empty rows
      if (!newGrid[i]) continue;
      
      // Filter out zeros
      const row = newGrid[i].filter(val => val !== 0);
      
      // Reverse, merge, then reverse back
      row.reverse();
      
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          row[j + 1] = 0;
          if (row[j] === 2048) setWon(true);
          changed = true;
        }
      }
      
      const filteredRow = row.filter(val => val !== 0);
      
      while (filteredRow.length < 4) {
        filteredRow.push(0);
      }
      
      filteredRow.reverse();
      
      if (JSON.stringify(newGrid[i]) !== JSON.stringify(filteredRow)) {
        changed = true;
      }
      
      newGrid[i] = filteredRow;
    }
    
    if (changed) {
      setScore(newScore);
      addRandomTile(newGrid);
      setGrid(newGrid);
      checkGameOver(newGrid);
    }
  };

  const moveUp = () => {
    // Create a deep copy of the grid
    let newGrid = JSON.parse(JSON.stringify(grid));
    
    // Transpose the grid
    let transposed = Array(4).fill(null).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (newGrid[j] && newGrid[j][i] !== undefined) {
          transposed[i][j] = newGrid[j][i];
        }
      }
    }
    
    let changed = false;
    let newScore = score;

    // Process each column as a row
    for (let i = 0; i < 4; i++) {
      // Filter out zeros
      const row = transposed[i].filter(val => val !== 0);
      
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          row[j + 1] = 0;
          if (row[j] === 2048) setWon(true);
          changed = true;
        }
      }
      
      const filteredRow = row.filter(val => val !== 0);
      
      while (filteredRow.length < 4) {
        filteredRow.push(0);
      }
      
      if (JSON.stringify(transposed[i]) !== JSON.stringify(filteredRow)) {
        changed = true;
      }
      
      transposed[i] = filteredRow;
    }
    
    // Transpose back
    let finalGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        finalGrid[i][j] = transposed[j][i];
      }
    }
    
    if (changed) {
      setScore(newScore);
      addRandomTile(finalGrid);
      setGrid(finalGrid);
      checkGameOver(finalGrid);
    }
  };

  const moveDown = () => {
    // Create a deep copy of the grid
    let newGrid = JSON.parse(JSON.stringify(grid));
    
    // Transpose the grid
    let transposed = Array(4).fill(null).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (newGrid[j] && newGrid[j][i] !== undefined) {
          transposed[i][j] = newGrid[j][i];
        }
      }
    }
    
    let changed = false;
    let newScore = score;

    // Process each column as a row (reversed)
    for (let i = 0; i < 4; i++) {
      // Filter out zeros
      const row = transposed[i].filter(val => val !== 0);
      
      row.reverse();
      
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          row[j + 1] = 0;
          if (row[j] === 2048) setWon(true);
          changed = true;
        }
      }
      
      const filteredRow = row.filter(val => val !== 0);
      
      while (filteredRow.length < 4) {
        filteredRow.push(0);
      }
      
      filteredRow.reverse();
      
      if (JSON.stringify(transposed[i]) !== JSON.stringify(filteredRow)) {
        changed = true;
      }
      
      transposed[i] = filteredRow;
    }
    
    // Transpose back
    let finalGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        finalGrid[i][j] = transposed[j][i];
      }
    }
    
    if (changed) {
      setScore(newScore);
      addRandomTile(finalGrid);
      setGrid(finalGrid);
      checkGameOver(finalGrid);
    }
  };

  const checkGameOver = (currentGrid: number[][]) => {
    // Check if there are any empty cells
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === 0) return;
      }
    }
    
    // Check if there are any adjacent cells with the same value
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (currentGrid[i][j] === currentGrid[i][j + 1]) return;
      }
    }
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === currentGrid[i + 1][j]) return;
      }
    }
    
    setGameOver(true);
    toast({
      title: "Game Over",
      description: Your score: ${score},
    });
  };

  // Function to get background color based on tile value
  const getTileColor = (value: number): string => {
    switch (value) {
      case 2: return 'bg-[#eee4da]';
      case 4: return 'bg-[#ede0c8]';
      case 8: return 'bg-[#f2b179]';
      case 16: return 'bg-[#f59563]';
      case 32: return 'bg-[#f67c5f]';
      case 64: return 'bg-[#f65e3b]';
      case 128: return 'bg-[#edcf72]';
      case 256: return 'bg-[#edcc61]';
      case 512: return 'bg-[#edc850]';
      case 1024: return 'bg-[#edc53f]';
      case 2048: return 'bg-[#edc22e]';
      default: return 'bg-[#cdc1b4]';
    }
  };

  // Function to get text color based on tile value
  const getTextColor = (value: number): string => {
    return value <= 4 ? 'text-gray-800' : 'text-white';
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      // Determine swipe direction if it's a substantial movement (over 30px)
      if (Math.max(absDx, absDy) > 30) {
        if (absDx > absDy) {
          // Horizontal swipe
          if (dx > 0) {
            moveRight();
          } else {
            moveLeft();
          }
        } else {
          // Vertical swipe
          if (dy > 0) {
            moveDown();
          } else {
            moveUp();
          }
        }
      }

      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-md">
        <Link
          to="/"
          className="self-start flex items-center text-muted-foreground hover:text-white transition-all group mb-6"
        >
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
          
          <Button onClick={resetGame} className="bg-accent hover:bg-accent/90">
            New Game
          </Button>
        </div>
        
        {(gameOver || won) && (
          <div className="mb-6 p-4 bg-card/50 backdrop-blur-sm rounded-lg text-center w-full">
            <h2 className="text-2xl font-bold mb-2">{won ? "You Win! 🎉" : "Game Over!"}</h2>
            <p className="mb-4">Final Score: {score}</p>
            <Button onClick={resetGame} className="bg-accent hover:bg-accent/90">
              Play Again
            </Button>
          </div>
        )}
        
        {/* Game grid with touch support */}
        <div 
          className="grid grid-cols-4 gap-2 bg-[#bbada0] p-2 rounded-lg w-full aspect-square"
          onTouchStart={handleTouchStart}
        >
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={${i}-${j}}
                className={flex items-center justify-center rounded-md 
                          ${cell === 0 ? 'bg-[#cdc1b4]' : getTileColor(cell)} 
                          ${getTextColor(cell)} font-bold aspect-square}
              >
                {cell !== 0 && (
                  <span className={text-${cell < 1000 ? 'xl' : 'lg'} font-bold}>
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
            This is a clone of the original{" "}
            <a
              href="https://play2048.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              2048 game
            </a>
            {" "}by Gabriele Cirulli.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game2048;
