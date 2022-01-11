import './Board.scss';
import { Square } from '../Square';
import classNames from 'classnames';

export const Board = ({ squares, click, winnerLine, win }) => {
  return (
    <div className='board'>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
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

    <svg className='board__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#9819ca">
        <path d="M1740 4790 c0 -5 -9 -10 -21 -10 -26 0 -49 -23 -49 -49 0 -12 -4 -21
        -10 -21 -7 0 -10 -217 -10 -630 l0 -630 -620 0 c-407 0 -620 -3 -620 -10 0 -5
        -11 -10 -25 -10 -16 0 -25 -6 -25 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -9 -10
        -20 0 -11 -4 -20 -10 -20 -5 0 -10 -18 -10 -40 0 -22 5 -40 10 -40 6 0 10 -9
        10 -21 0 -26 23 -49 49 -49 12 0 21 -4 21 -10 0 -7 213 -10 620 -10 l620 0 0
        -665 0 -665 -620 0 c-407 0 -620 -3 -620 -10 0 -5 -9 -10 -21 -10 -26 0 -49
        -23 -49 -49 0 -12 -4 -21 -10 -21 -5 0 -10 -18 -10 -40 0 -22 5 -40 10 -40 6
        0 10 -9 10 -20 0 -11 5 -20 10 -20 6 0 10 -7 10 -15 0 -9 9 -15 25 -15 14 0
        25 -4 25 -10 0 -7 213 -10 620 -10 l620 0 0 -595 c0 -390 3 -595 10 -595 6 0
        10 -9 10 -21 0 -26 23 -49 49 -49 12 0 21 -4 21 -10 0 -5 18 -10 40 -10 22 0
        40 5 40 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 9 0 15 9 15 25 0
        14 5 25 10 25 7 0 10 205 10 595 l0 595 640 0 640 0 0 -595 c0 -390 3 -595 10
        -595 6 0 10 -9 10 -21 0 -26 23 -49 49 -49 12 0 21 -4 21 -10 0 -5 18 -10 40
        -10 22 0 40 5 40 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 9 0 15 9
        15 25 0 14 5 25 10 25 7 0 10 205 10 595 l0 595 630 0 c413 0 630 3 630 10 0
        6 11 10 25 10 16 0 25 6 25 15 0 8 5 15 10 15 6 0 10 9 10 20 0 11 5 20 10 20
        6 0 10 18 10 40 0 22 -4 40 -10 40 -5 0 -10 9 -10 21 0 26 -23 49 -49 49 -12
        0 -21 5 -21 10 0 7 -217 10 -630 10 l-630 0 0 665 0 665 620 0 c407 0 620 3
        620 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 9 0 15 9 15 25 0 14 5
        25 10 25 6 0 10 18 10 40 0 22 -4 40 -10 40 -5 0 -10 9 -10 20 0 11 -7 20 -15
        20 -8 0 -15 7 -15 15 0 8 -9 15 -20 15 -11 0 -20 5 -20 10 0 7 -213 10 -620
        10 l-620 0 0 630 c0 413 -3 630 -10 630 -5 0 -10 11 -10 25 0 16 -6 25 -15 25
        -8 0 -15 5 -15 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -18 10 -40 10 -22
        0 -40 -4 -40 -10 0 -5 -9 -10 -21 -10 -26 0 -49 -23 -49 -49 0 -12 -4 -21 -10
        -21 -7 0 -10 -217 -10 -630 l0 -630 -640 0 -640 0 0 630 c0 413 -3 630 -10
        630 -5 0 -10 11 -10 25 0 16 -6 25 -15 25 -8 0 -15 5 -15 10 0 6 -9 10 -20 10
        -11 0 -20 5 -20 10 0 6 -18 10 -40 10 -22 0 -40 -4 -40 -10z m1450 -2265 l0
        -665 -640 0 -640 0 0 665 0 665 640 0 640 0 0 -665z"/>
      </g>
    </svg>
    </div>
  );
}
