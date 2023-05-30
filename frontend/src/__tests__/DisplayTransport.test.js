import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DisplayTransport from '../Components/DisplayTransport';

test('Testing Display SubMenu', () => {
    render(<DisplayTransport/>);
    const linkElement = screen.getByTestId("DisplaySubMenu");
    expect(linkElement).toBeInTheDocument();
  });

  test('Testing Display Cards', ()=> {
    render(<DisplayTransport/>);
    const linkElement = screen.getByTestId("Display");
    expect(linkElement).toBeInTheDocument();
  })
