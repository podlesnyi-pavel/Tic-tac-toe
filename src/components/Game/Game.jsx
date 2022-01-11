import { useState, useEffect } from 'react';
import { Board } from '../Board/Board';
import './Game.scss';

export const Game = ({ namePlayerOne, namePlayerTwo }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [winsPlayerOne, setWinsPlayerOne] = useState(0);
  const [winsPlayerTwo, setWinsPlayerTwo] = useState(0);
  const [preventWinner, setPreventWinner] = useState('playerOne');
  const [winnerLine, setWinnerLine] = useState(null);

  const win = (winner) => {
    alert(`${winner} win`);
  };

  const draw = () => {
    setBoard(Array(9).fill(''));
    setXIsNext(true);
    alert('Draw');
  };

  const checkWinner = (boardCopy) => {
    let winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let invalidLines = 0;
    
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];

      if (
        (boardCopy[a] === 'X'
        || boardCopy[b] === 'X'
        || boardCopy[c] === 'X')
        && (boardCopy[a] === 'O'
        || boardCopy[b] === 'O'
        || boardCopy[c] === 'O')
      ) {
        invalidLines += 1;
        
        invalidLines === 8 && draw();
      }
      
      if (boardCopy[a]
        && (boardCopy[a] === boardCopy[b])
        && (boardCopy[a] === boardCopy[c])) {
        if (preventWinner === 'playerOne' && boardCopy[a] ==='X') {
          setWinsPlayerOne(winsPlayerOne + 1)
          setPreventWinner('playerOne');
          win(namePlayerOne);
        } else if (preventWinner === 'playerOne' && boardCopy[a] ==='O') {
          setWinsPlayerTwo(winsPlayerTwo + 1)
          setPreventWinner('playerTwo');
          win(namePlayerTwo);
        } else if (preventWinner === 'playerTwo' && boardCopy[a] ==='X') {
          setWinsPlayerTwo(winsPlayerTwo + 1)
          setPreventWinner('playerTwo');
          win(namePlayerTwo);
        } else if (preventWinner === 'playerTwo' && boardCopy[a] ==='O') {
          setWinsPlayerTwo(winsPlayerOne + 1)
          setPreventWinner('playerOne');
          win(namePlayerOne);
        }

        setWinnerLine(i);
      }
    }
  }

  const handlerClick = (index) => {
    const boardCopy = [...board];

    if (boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    checkWinner(boardCopy);
  };

  return (
    <>
      <div className='game'>
      <Board
        squares={board}
        click={handlerClick}
        winnerLine={winnerLine}
        win={win}
      />
      <div className="game__score">
        <span>Score</span>
        <span>{namePlayerOne}: {winsPlayerOne}</span>
        <span>{namePlayerTwo}: {winsPlayerTwo}</span>
      </div>
    </div>
    <button className='game__button' onClick={() => {
      setBoard(Array(9).fill(''));
      setWinnerLine(null);
      setXIsNext(true);
    }}>
      Новая игра
    </button>
    </>
  );
}
