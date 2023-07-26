import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import Header from './Header';

const ResultArea = ({ result }) => <div type="text" className="resultArea">{result}</div>;
ResultArea.propTypes = {
  result: PropTypes.string.isRequired,
};

const CalcButtons = ({ handlButton }) => (
  <div className="calcContainer">
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('AC')}>AC</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('+/-')}>+/-</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('%')}>%</button>
    <button type="button" className="calcItem btn-sign" onClick={() => handlButton('÷')}> ÷ </button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('7')}>7</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('8')}>8</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('9')}>9</button>
    <button type="button" className="calcItem btn-sign" onClick={() => handlButton('x')}>X</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('4')}>4</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('5')}>5</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('6')}>6</button>
    <button type="button" className="calcItem btn-sign" onClick={() => handlButton('-')}>-</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('1')}>1</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('2')}>2</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('3')}>3</button>
    <button type="button" className="calcItem btn-sign" onClick={() => handlButton('+')}>+</button>
    <button type="button" className="calcItem btn-number btn-zero" onClick={() => handlButton('0')}>0</button>
    <button type="button" className="calcItem btn-number" onClick={() => handlButton('.')}>.</button>
    <button type="button" className="calcItem btn-sign" onClick={() => handlButton('=')}> = </button>
  </div>
);

CalcButtons.propTypes = {
  handlButton: PropTypes.func.isRequired,
};

const Calculator = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };

  return (
    <>
      <Header />
      <div className="caclPage">
        <div className="calcText">
          <h1>
            {'Let\'s Do Some Math! '}
          </h1>
        </div>
        <div className="calculator">
          <ResultArea result={data.next || data.total || '0'} />
          <CalcButtons handlButton={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
