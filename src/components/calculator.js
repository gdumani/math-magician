import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 0 };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calc">
        <span>{display}</span>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="colored">+</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="colored">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="colored">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="colored">+</button>
        <button type="button" className="double">0</button>
        <button type="button">.</button>
        <button type="button" className="colored">=</button>
      </div>
    );
  }
}
