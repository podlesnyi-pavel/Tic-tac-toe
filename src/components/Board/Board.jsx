import './Board.scss';
import { Square } from '../Square';
import classNames from 'classnames';

export const Board = ({ squares, click }) => {
  return (
    <div className='board'>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
       <div className={classNames(
          'board__line',
          'board__line--horizontal',
          'board__line--horizontal--1'
        )}></div>
       <div className={classNames(
          'board__line',
          'board__line--horizontal',
          'board__line--horizontal--2'
        )}></div>
       <div className={classNames(
          'board__line',
          'board__line--horizontal',
          'board__line--horizontal--3'
        )}></div>

       <div className={classNames(
          'board__line',
          'board__line--vertical',
          'board__line--vertical--1'
        )}></div>
       <div className={classNames(
          'board__line',
          'board__line--vertical',
          'board__line--vertical--2'
        )}></div>
       <div className={classNames(
          'board__line',
          'board__line--vertical',
          'board__line--vertical--3'
        )}></div>

       <div className={classNames(
          'board__line',
          'board__line--oblique',
          'board__line--oblique--1'
        )}></div>

       <div className={classNames(
          'board__line',
          'board__line--oblique',
          'board__line--oblique--2'
        )}></div>
    </div>
  );
}
