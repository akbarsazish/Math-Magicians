import React from 'react';
import { render } from '@testing-library/react';
import ResultArea from '..components/ResultArea';

describe('ResultArea Component', () => {
  test('should render the result correctly', () => {
    // Mock the result prop
    const result = '42';

    // Render the component with the mock result prop
    const { getByText } = render(<ResultArea result={result} />);

    // Check if the result is displayed correctly
    const resultElement = getByText(result);
    expect(resultElement).toBeInTheDocument();
  });

  test('should display "0" if no result is provided', () => {
    // Render the component without providing the result prop
    const { getByText } = render(<ResultArea />);

    // Check if "0" is displayed when no result is provided
    const defaultResultElement = getByText(/0/i);
    expect(defaultResultElement).toBeInTheDocument();
  });
});
