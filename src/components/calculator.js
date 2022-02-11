import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setstate] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => setstate(calculate(state, e.target.textContent));
  const { total, next, operation } = state;
  const disp = `${total || ''}${operation || ''}${next || ''}`;
  return (
    <div className="calc">
      <span>{disp}</span>
      <button onClick={handleClick} type="button">AC</button>
      <button onClick={handleClick} type="button">+/-</button>
      <button onClick={handleClick} type="button">%</button>
      <button onClick={handleClick} type="button" className="colored">÷</button>
      <button onClick={handleClick} type="button">7</button>
      <button onClick={handleClick} type="button">8</button>
      <button onClick={handleClick} type="button">9</button>
      <button onClick={handleClick} type="button" className="colored">x</button>
      <button onClick={handleClick} type="button">4</button>
      <button onClick={handleClick} type="button">5</button>
      <button onClick={handleClick} type="button">6</button>
      <button onClick={handleClick} type="button" className="colored">-</button>
      <button onClick={handleClick} type="button">1</button>
      <button onClick={handleClick} type="button">2</button>
      <button onClick={handleClick} type="button">3</button>
      <button onClick={handleClick} type="button" className="colored">+</button>
      <button onClick={handleClick} type="button" className="double">0</button>
      <button onClick={handleClick} type="button">.</button>
      <button onClick={handleClick} type="button" className="colored">=</button>
    </div>
  );
};

export default Calculator;
