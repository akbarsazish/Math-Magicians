import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const ResultArea = ({ result }) => <div type="text" className="resultArea">{result}</div>;
ResultArea.propTypes = {
  result: PropTypes.string.isRequired,
};

const CalcButtons = () => (
  <div className="calcContainer">
    <button type="button" className="calcItem btn-number">AC</button>
    <button type="button" className="calcItem btn-number">+/-</button>
    <button type="button" className="calcItem btn-number">%</button>
    <button type="button" className="calcItem btn-sign"> ÷ </button>
    <button type="button" className="calcItem btn-number">7</button>
    <button type="button" className="calcItem btn-number">8</button>
    <button type="button" className="calcItem btn-number">9</button>
    <button type="button" className="calcItem btn-sign">X</button>
    <button type="button" className="calcItem btn-number">4</button>
    <button type="button" className="calcItem btn-number">5</button>
    <button type="button" className="calcItem btn-number">6</button>
    <button type="button" className="calcItem btn-sign">-</button>
    <button type="button" className="calcItem btn-number">1</button>
    <button type="button" className="calcItem btn-number">2</button>
    <button type="button" className="calcItem btn-number">3</button>
    <button type="button" className="calcItem btn-sign">+</button>
    <button type="button" className="calcItem btn-number btn-zero">0</button>
    <button type="button" className="calcItem btn-number">.</button>
    <button type="button" className="calcItem btn-sign"> = </button>
  </div>
);

const Calculator = () => {
  const [data, setData] = React.useState({ total: null, next: null, operation: null });
  const handleClick = (buttonName) => {
    setData(calculate(data, buttonName));
  };
    <section className="main">
      <ResultArea result={data.next || data.total || '0'} />
      <CalcButtons />
    </section>
};

export default Calculator;
