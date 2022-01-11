import './Square.scss';
import classNames from 'classnames';

export const Square = ({ value, index, onClick }) => (
  <button className={classNames(
    'square',
    index === 4 && 'square--center'
  )} onClick={onClick}>{value}</button>
);
