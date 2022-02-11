import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    const disp = `${total || ''}${operation || ''}${next || ''}`;
    return (
      <div className="calc">
        <span>{disp}</span>
        <button onClick={this.handleClick} type="button">AC</button>
        <button onClick={this.handleClick} type="button">+/-</button>
        <button onClick={this.handleClick} type="button">%</button>
        <button onClick={this.handleClick} type="button" className="colored">÷</button>
        <button onClick={this.handleClick} type="button">7</button>
        <button onClick={this.handleClick} type="button">8</button>
        <button onClick={this.handleClick} type="button">9</button>
        <button onClick={this.handleClick} type="button" className="colored">x</button>
        <button onClick={this.handleClick} type="button">4</button>
        <button onClick={this.handleClick} type="button">5</button>
        <button onClick={this.handleClick} type="button">6</button>
        <button onClick={this.handleClick} type="button" className="colored">-</button>
        <button onClick={this.handleClick} type="button">1</button>
        <button onClick={this.handleClick} type="button">2</button>
        <button onClick={this.handleClick} type="button">3</button>
        <button onClick={this.handleClick} type="button" className="colored">+</button>
        <button onClick={this.handleClick} type="button" className="double">0</button>
        <button onClick={this.handleClick} type="button">.</button>
        <button onClick={this.handleClick} type="button" className="colored">=</button>
      </div>
    );
  }
}
