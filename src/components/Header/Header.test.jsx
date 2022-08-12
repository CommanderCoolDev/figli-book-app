import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Header from './Header';

jest.mock('react-redux');

describe('Header component', () => {
  it('Header renders with redux', () => {
    useSelector.mockReturnValue('');
    render(<Header />);

    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
  it('Header contains list', () => {
    useSelector.mockReturnValue('');
    render(<Header />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
