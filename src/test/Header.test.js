import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('Header displays the correct title', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const titleElement = screen.getByText('Math Magician');
  expect(titleElement).toBeInTheDocument();
});

test('Header displays the correct navigation links', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const homeLink = screen.getByText('Home');
  const calculatorLink = screen.getByText('Calculator');
  const quoteLink = screen.getByText('Qoute'); // Note the typo in the component (should be "Quote")

  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();
});

test('Header navigation links have the correct URLs', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const homeLink = screen.getByText('Home');
  const calculatorLink = screen.getByText('Calculator');
  const quoteLink = screen.getByText('Qoute'); // Note the typo in the component (should be "Quote")

  expect(homeLink.getAttribute('href')).toBe('/');
  expect(calculatorLink.getAttribute('href')).toBe('/calculator');
  expect(quoteLink.getAttribute('href')).toBe('/quots'); // Note the typo in the component (should be "/quotes")
});
