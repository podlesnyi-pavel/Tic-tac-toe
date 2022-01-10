import './InputNames.scss';
import React from 'react';

export const Inputnames = ({
    inputNameOne, inputNameTwo, namePlayerOne, namePlayerTwo, handlerVisible
}) => {
  return (
    <form className='inputnames' onSubmit={handlerVisible}>
      <label className='inputnames__label' htmlFor="playerOne">
        Player 1:
        <input
          className='inputnames__input'
          type="text"
          id='playerOne'
          placeholder='input name'
          required
          value={namePlayerOne}
          onChange={inputNameOne}
        />
      </label>

      <label className='inputnames__label' htmlFor="playerTwo">
        Player 2:
        <input
          className='inputnames__input'
          type="text"
          id='playerTwo'
          placeholder='input name'
          required
          value={namePlayerTwo}
          onChange={inputNameTwo}
        />
      </label>

      <button className='inputnames__button' type='submit'>
        Start game
      </button>
    </form>
  );
}
