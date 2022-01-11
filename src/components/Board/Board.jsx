import './Board.scss';
import { Square } from '../Square';
import classNames from 'classnames';

export const Board = ({ squares, click, winnerLine }) => {
  return (
    <div className='board'>
      {squares.map((square, i) => (
        <Square key={i} value={square} index={i} onClick={() => click(i)} />
      ))}

      <div className={classNames(
        'board__line',
        'board__line--horizontal',
        winnerLine === 0 && 'board__line--horizontal--1',
      )}></div>
      <div className={classNames(
        'board__line',
        'board__line--horizontal',
        winnerLine === 1 && 'board__line--horizontal--2',
      )}></div>
      <div className={classNames(
        'board__line',
        'board__line--horizontal',
        winnerLine === 2 && 'board__line--horizontal--3',
      )}></div>

      <div className={classNames(
        'board__line',
        'board__line--vertical',
        winnerLine === 3 && 'board__line--vertical--1',
      )}></div>
      <div className={classNames(
        'board__line',
        'board__line--vertical',
        winnerLine === 4 && 'board__line--vertical--2',
      )}></div>
      <div className={classNames(
        'board__line',
        'board__line--vertical',
        winnerLine === 5 && 'board__line--vertical--3',
      )}></div>

      <div className={classNames(
        'board__line',
        'board__line--oblique',
        winnerLine === 6 && 'board__line--oblique--1',
      )}></div>

      <div className={classNames(
        'board__line',
        'board__line--oblique',
        winnerLine === 7 && 'board__line--oblique--2',
      )}></div>
    </div>
  );
}
