import React, { useState, useEffect } from 'react';

const GRID_SIZE = 4;

const Game2048 = () => {
  const [grid, setGrid] = useState<number[][]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    initializeGame();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver || won) return;
      switch (e.key) {
        case 'ArrowUp':
          handleMove('up');
          break;
        case 'ArrowDown':
          handleMove('down');
          break;
        case 'ArrowLeft':
          handleMove('left');
          break;
        case 'ArrowRight':
          handleMove('right');
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [grid, gameOver, won]);

  const initializeGame = () => {
    const newGrid = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(0));
    addRandomTile(newGrid);
    addRandomTile(newGrid);
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
    setWon(false);
  };

  const addRandomTile = (grid: number[][]) => {
    const emptyCells: { x: number; y: number }[] = [];
    grid.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (cell === 0) emptyCells.push({ x: i, y: j });
      })
    );
    if (emptyCells.length === 0) return;
    const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    grid[x][y] = Math.random() < 0.9 ? 2 : 4;
  };

  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    let rotatedGrid = rotateGrid(grid, direction);
    let { newGrid, moved, newScore } = moveLeft(rotatedGrid);
    newGrid = rotateGrid(newGrid, getOppositeDirection(direction));
    if (moved) {
      addRandomTile(newGrid);
      setGrid(newGrid);
      setScore(prev => prev + newScore);
      if (checkGameOver(newGrid)) setGameOver(true);
      if (checkWin(newGrid)) setWon(true);
    }
  };

  const rotateGrid = (grid: number[][], direction: string) => {
    const newGrid = grid.map(row => [...row]);
    for (let i = 0; i < directionToRotationCount(direction); i++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        for (let y = x; y < GRID_SIZE; y++) {
          [newGrid[x][y], newGrid[y][x]] = [newGrid[y][x], newGrid[x][y]];
        }
      }
      newGrid.forEach(row => row.reverse());
    }
    return newGrid;
  };

  const directionToRotationCount = (direction: string) => {
    switch (direction) {
      case 'up':
        return 0;
      case 'right':
        return 1;
      case 'down':
        return 2;
      case 'left':
        return 3;
      default:
        return 0;
    }
  };

  const getOppositeDirection = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'down';
      case 'down':
        return 'up';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      default:
        return '';
    }
  };

  const moveLeft = (grid: number[][]) => {
    const newGrid = grid.map(row => [...row]);
    let moved = false;
    let newScore = 0;
    for (let i = 0; i < GRID_SIZE; i++) {
      let row = newGrid[i].filter(val => val !== 0);
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          row[j + 1] = 0;
          j++;
        }
      }
      row = row.filter(val => val !== 0);
      while (row.length < GRID_SIZE) {
        row.push(0);
      }
      if (!arraysEqual(newGrid[i], row)) {
        moved = true;
        newGrid[i] = row;
      }
    }
    return { newGrid, moved, newScore };
  };

  const arraysEqual = (a: number[], b: number[]) => {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  };

  const checkGameOver = (grid: number[][]) => {
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (grid[i][j] === 0) return false;
        if (j < GRID_SIZE - 1 && grid[i][j] === grid[i][j + 1]) return false;
        if (i < GRID_SIZE - 1 && grid[i][j] === grid[i + 1][j]) return false;
      }
    }
    return true;
  };

  const checkWin = (grid: number[][]) => {
    return grid.some(row => row.includes(2048));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>2048 Game</h1>
      <p>Score: {score}</p>
      {gameOver && <p>Game Over!</p>}
      {won && <p>You've won!</p>}
      <button onClick={initializeGame}>New Game</button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, 100px)`,
          gap: '5px',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: cell === 0 ? '#ccc0b3' : '#eee4da',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              {cell !== 0 ? cell : ''}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Game2048;
