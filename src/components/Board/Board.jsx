import './Board.scss';
import { Square } from '../Square';

export const Board = ({ squares, click }) => {
  return (
    <div className='board'>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
}
