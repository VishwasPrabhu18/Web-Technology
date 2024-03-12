import React, { useState } from 'react';
import "../App.css";
import Square from './Square';

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (idx) => {
    // console.log("Clicked: " + idx + " " + xIsNext);
    if (squares[idx] != null) return;

    squares[idx] = xIsNext ? "X" : "O";
    setSquares([...squares]);
    setXIsNext(!xIsNext);

    const status = document.getElementById('status');
    const winner = calculateWinner(squares);
    if (winner) {
      status.innerHTML = 'Winner: ' + winner;
    } else {
      status.innerHTML = 'Next player: ' + (xIsNext ? 'O' : 'X');
    }
  }

  const calculateWinner = (squares) => {

    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <>
      <div id="status" className='status'></div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
};

export default Board;