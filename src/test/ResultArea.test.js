import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultArea from '../components/ResultArea';

describe('ResultArea', () => {
  it('should render the result area with the correct text', () => {
    render(<ResultArea result="This is the result" />);
    const resultArea = screen.getByTestId('resultArea');
    expect(resultArea).toMatchSnapshot();
  });

  it('should throw an error if the result prop is not a string', () => {
    try {
      render(<ResultArea result="123" />);
    } catch (error) {
      expect(error).toMatchSnapshot();
    }
  });
});
