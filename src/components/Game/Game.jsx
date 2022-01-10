import { useState } from 'react';
import { Board } from '../Board/Board';
import './Game.scss';

export const Game = ({ namePlayerOne, namePlayerTwo }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [winsPlayerOne, setWinsPlayerOne] = useState(0);
  const [winsPlayerTwo, setWinsPlayerTwo] = useState(0);
  const [preventWinner, setPreventWinner] = useState('playerOne');

  // const draw = () => {
  //   alert('Ничья');
  //   setBoard(Array(9).fill(null));
  // };

  const checkWinner = (squares) => {
    let winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // let isDraw = false;
    
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      
      if (
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
      ) {
        if (preventWinner === 'playerOne' && squares[a] ==='X') {
          setWinsPlayerOne(winsPlayerOne + 1)
          setPreventWinner('playerOne');
        } else if (preventWinner === 'playerOne' && squares[a] ==='O') {
          setWinsPlayerTwo(winsPlayerTwo + 1)
          setPreventWinner('playerTwo');
        } else if (preventWinner === 'playerTwo' && squares[a] ==='X') {
          setWinsPlayerTwo(winsPlayerTwo + 1)
          setPreventWinner('playerTwo');
        } else if (preventWinner === 'playerTwo' && squares[a] ==='O') {
          setWinsPlayerTwo(winsPlayerOne + 1)
          setPreventWinner('playerOne');
        }

        setBoard(Array(9).fill(null));

        return squares[a];
      }
      // ни 1 из элементов в массивах если не содержит null, обнулить - вывести ничью
      // squares[i].includes('')
      // ? isDraw = false
      // : isDraw = true;

    }

    // isDraw && draw();
    
    return null;
  }

  const handlerClick = (index) => {
    const boardCopy = [...board];
    
    if (checkWinner(boardCopy) || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setXIsNext(!xIsNext);
    setBoard(boardCopy);
  };

  return (
    <div className='game'>
      <Board squares={board} click={handlerClick} />
      <div className="game__score">
        <span>Score</span>
        <span>{namePlayerOne}: {winsPlayerOne}</span>
        <span>{namePlayerTwo}: {winsPlayerTwo}</span>
      </div>
    </div>
  );
}
