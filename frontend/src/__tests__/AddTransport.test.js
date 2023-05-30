import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTransport from '../Components/AddTransport';

test('Testing Add Transport Button', () => {
  render(<AddTransport/>);
  const linkElement = screen.getByTestId("SubmitToAdd");
  expect(linkElement).toBeInTheDocument();
});

test('Testing Sub Menu', () => {
  render(<AddTransport/>);
  const linkElement = screen.getByTestId("SubMenu");
  expect(linkElement).toBeInTheDocument();
});

test('Testing Add Form', () => {
  render(<AddTransport/>);
  const linkElement = screen.getByTestId("AddForm");
  expect(linkElement).toBeInTheDocument();
});