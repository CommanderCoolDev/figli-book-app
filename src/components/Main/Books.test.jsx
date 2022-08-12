import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Books from './Books';

jest.mock('react-redux');

describe('Book Component', () => {
  it('Books renders with redux', () => {
    useSelector.mockReturnValue([]);

    render(<Books />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('Books')).toBeInTheDocument();
  });
});
