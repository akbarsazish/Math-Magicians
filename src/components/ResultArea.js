import PropTypes from 'prop-types';

const ResultArea = ({ result }) => <div type="text" className="resultArea">{result}</div>;
ResultArea.propTypes = {
  result: PropTypes.string.isRequired,
};

export default ResultArea;
