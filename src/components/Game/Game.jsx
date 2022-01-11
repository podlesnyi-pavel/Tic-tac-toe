import classNames from 'classnames';
import { useState } from 'react';
import { Board } from '../Board/Board';
import './Game.scss';

export const Game = ({ namePlayerOne, namePlayerTwo }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [winsPlayerOne, setWinsPlayerOne] = useState(0);
  const [winsPlayerTwo, setWinsPlayerTwo] = useState(0);
  const [preventWinner, setPreventWinner] = useState('playerOne');
  const [winnerLine, setWinnerLine] = useState(null);
  const [isVisibleWinnerModal, setIsVisibleWinnerModal] = useState(false);
  const [isVisibleDrowModal, setIsVisibleDrowModal] = useState(false);

  const startNewGame = () => {
    setIsVisibleWinnerModal(false);
    setIsVisibleDrowModal(false);
    setBoard(Array(9).fill(''));
    setWinnerLine(null);
    setXIsNext(true);
  };

  const win = (index) => {
    setWinnerLine(index);
    setIsVisibleWinnerModal(true);

    setTimeout(() => {
      startNewGame();
    }, 2000);
  };

  const draw = () => {
    setIsVisibleDrowModal(true);

    setTimeout(() => {
      startNewGame();
    }, 2000);
  };

  const checkWinner = (boardCopy) => {
    console.log(boardCopy);

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
      console.log(invalidLines);
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
          win(i);
        } else if (preventWinner === 'playerOne' && boardCopy[a] ==='O') {
          setWinsPlayerTwo(winsPlayerTwo + 1)
          setPreventWinner('playerTwo');
          win(i);
        } else if (preventWinner === 'playerTwo' && boardCopy[a] ==='X') {
          setWinsPlayerTwo(winsPlayerTwo + 1)
          setPreventWinner('playerTwo');
          win(i);
        } else if (preventWinner === 'playerTwo' && boardCopy[a] ==='O') {
          setWinsPlayerTwo(winsPlayerOne + 1)
          setPreventWinner('playerOne');
          win(i);
        }
      }
    }
  }

  const handlerClick = (index) => {
    const boardCopy = [...board];

    if (boardCopy[index] || winnerLine) {
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

      <div className={classNames(
        "resultModal",
        isVisibleWinnerModal && 'resultModal--visible'
      )}>
        {preventWinner === 'playerOne'
          ? `${namePlayerOne} win!`
          : `${namePlayerTwo} win!`} 
      </div>

      <div className={classNames(
        "resultModal",
        isVisibleDrowModal && 'resultModal--visible'
      )}>Drow</div>
    </>
  );
}
