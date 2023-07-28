import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Qoutes from '../components/Qoutes';

test('Qoutes component displays the loading state', async () => {
  render(<Qoutes />);
  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();

  // Using Jest snapshot for the loading state
  expect(screen.getByTestId('loadingState')).toMatchSnapshot();
});

test('Qoutes component displays an error message on fetch failure', async () => {
  jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch'));
  render(<Qoutes />);
  await waitFor(() => {
    screen.getByText('Error: Failed to fetch quote.');
  });

  // Using Jest snapshot for the error state
  expect(screen.getByTestId('errorState')).toMatchSnapshot();
});

test('Qoutes component displays the fetched quote correctly', async () => {
  const mockedData = {
    quote: 'Mocked quote text',
    author: 'Mocked author',
  };
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => [mockedData],
    ok: true,
  });
  render(<Qoutes />);
  await waitFor(() => {
    screen.getByText('Mocked quote text - Mocked author');
  });

  // Using Jest snapshot for the fetched quote
  expect(screen.getByTestId('quote')).toMatchSnapshot();
});
