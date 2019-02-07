import React, { useState, useEffect, useRef } from 'react';
import { random } from 'underscore';
import './app.scss';

const App = () => {
  const [randomNumber, setRandomNumber] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const getRandomNumber = (e) => {
    setRandomNumber(random(1, 20));
    (e.target.id === 'higher') ? setUserChoice('higher') : setUserChoice('lower');
  };

  // usePrevious Hook
  const usePrevious = (value) => {
    const REF = useRef();
    useEffect(() => {
      REF.current = value;
    });
    return REF.current;
  };
  const prevNumber = usePrevious(randomNumber);

  return (
    <div class='game game-wrapper'>
      <div class='game__card-wrapper'>
        <div className='card'>
          <p className='card__title'>{(randomNumber) ? randomNumber : '🤠'}</p>
          <p className='card__status'>New</p>
        </div>
        <div className='card'>
        <p className='card__title'>{(prevNumber ? prevNumber : '🤖')}</p>
          <p className='card__status'>Old</p>
        </div> 
      </div>
      <div className='game__result'>
        { prevNumber && (
          (userChoice === 'higher') 
            ? (randomNumber > prevNumber) ? <p class='result--win'>You Win 😎</p> : <p class='result--lost'>You Lost 😢</p> 
            : (randomNumber < prevNumber) ? <p class='result--win'>You Win 😎</p> : <p class='result--lost'>You Lost 😢</p> 
            ? (randomNumber === prevNumber) ? <p class='result--draw'>Draw 🤷‍♀️</p> : <p class='result--lost'>You Lost 😢</p>
          : ''
        )}
      </div>
      <div className='game__choice'>You Selected: <span class='choice--highlighted'>{userChoice}</span></div>
      <div class='game__controls'>
        <button className='controls-btn' onClick={ getRandomNumber } id='higher'>Higher 👆</button>
        <button className='controls-btn' onClick={ getRandomNumber } id='lower'>Lower 👇</button>
      </div>
    </div>
  );
}

export default App;
