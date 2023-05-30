import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('Testing App.js', ()=> {
  render(<App/>);
  const linkElement = screen.getByTestId("AppTest");
  expect(linkElement).toBeInTheDocument();
})
