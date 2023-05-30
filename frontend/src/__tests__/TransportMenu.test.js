import { render, screen } from '@testing-library/react';
import TransportMenu from '../Components/TransportMenu';
import '@testing-library/jest-dom';

test('Testing Transport Menu', ()=> {
  render(<TransportMenu/>);
  const linkElement = screen.getByTestId("MenuT");
  expect(linkElement).toBeInTheDocument();
})

test('Testing Transport Menu Add Transport', ()=> {
  render(<TransportMenu/>);
  const linkElement = screen.getByTestId("Add");
  expect(linkElement).toBeInTheDocument();
})

test('Testing Transport Menu View Transport', ()=> {
  render(<TransportMenu/>);
  const linkElement = screen.getByTestId("View");
  expect(linkElement).toBeInTheDocument();
})

test('Testing Transport Menu Update Transport', ()=> {
  render(<TransportMenu/>);
  const linkElement = screen.getByTestId("Update");
  expect(linkElement).toBeInTheDocument();
})

test('Testing Transport Menu Delete Transport', ()=> {
  render(<TransportMenu/>);
  const linkElement = screen.getByTestId("Delete");
  expect(linkElement).toBeInTheDocument();
})