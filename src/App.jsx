import './App.scss';
import { useState } from 'react';
import { Game } from './components/Game/Game';
import { Inputnames } from './components/InputNames';

const App = () => {
  const [namePlayerOne, setNamePlayerOne] = useState('');
  const [namePlayerTwo, setNamePlayerTwo] = useState('');
  const [isVisibleGame, setIsVisibleGame] = useState(false);
  const [isVisibleInputnames, setIsVisibleInputnames] = useState(true);

  const handlerVisible = () => {
    setIsVisibleGame(!isVisibleGame);
    setIsVisibleInputnames(!isVisibleInputnames);
  };

  return (
    <div className="App">
      {isVisibleInputnames && 
        <Inputnames
          namePlayerOne={namePlayerOne}
          namePlayerTwo={namePlayerTwo}
          inputNameOne={(event) => setNamePlayerOne(event.target.value)}
          inputNameTwo={(event) => setNamePlayerTwo(event.target.value)}
          handlerVisible={handlerVisible}
        />
      }
      
      {isVisibleGame &&
        <Game namePlayerOne={namePlayerOne} namePlayerTwo={namePlayerTwo} />}
    </div>
  );
}

export default App;
