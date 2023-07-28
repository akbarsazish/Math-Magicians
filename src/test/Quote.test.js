import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Qoutes from '../components/Qoutes';
test('Qoutes component displays the loading state', async () => {
  render(<Qoutes />);
  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});
test('Qoutes component displays an error message on fetch failure', async () => {
  jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch'));
  render(<Qoutes />);
  await waitFor(() => {
    const errorElement = screen.getByText('Error: Failed to fetch quote.');
    expect(errorElement).toBeInTheDocument();
  });
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
    const quoteElement = screen.getByText('Mocked quote text - Mocked author');
    expect(quoteElement).toBeInTheDocument();
  });
});