import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../components/Home';

// Mock the Header component for testing
jest.mock('../components/Header', () => () => (
  <header role="banner">
    {/* Mocked Header content */}
  </header>
));

test('Home page displays welcome message', () => {
  render(<Home />);

  const welcomeMessage = screen.getByText('Welcome to our page!');
  expect(welcomeMessage).toBeInTheDocument();
});

test('Home page displays paragraphs', () => {
  render(<Home />);

  // Use container to query the paragraphs based on their text content
  const container = screen.getByTestId('homePageContainer');
  const paragraphs = container.querySelectorAll('p');

  expect(paragraphs).toHaveLength(2);

  expect(paragraphs[0]).toHaveTextContent('At our website, we aim to provide you with an intuitive');
  expect(paragraphs[1]).toHaveTextContent('For those who find inspiration in the world of mathematics');
});

test('Home page contains the Header component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});
