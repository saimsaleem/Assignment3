import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpdateTransport from '../Components/UpdateTransport';

test('Testing Update Search Box', () => {
  render(<UpdateTransport/>);
  const linkElement = screen.getByTestId("SearchBox");
  expect(linkElement).toBeInTheDocument();
});

test('Testing Update Form', () => {
    render(<UpdateTransport/>);
    const linkElement = screen.getByTestId("UpdateForm");
    expect(linkElement).toBeInTheDocument();
  });

  test('Testing Update Button', () => {
    render(<UpdateTransport/>);
    const linkElement = screen.getByTestId("Updatebtn");
    expect(linkElement).toBeInTheDocument();
  });