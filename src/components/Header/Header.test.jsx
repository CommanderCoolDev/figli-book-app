import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './Header';
const startingState = {
  isAuth: false,
  user: null,
};
// function reducer(state = startingState, action) {}
function renderWithRedux(children, { initialState, store } = []) {
  return {
    ...render(<Provider store={store}>{children}</Provider>),
  };
}

describe('Header component', () => {
  it('Header renders with redux', () => {
    const { getByRole } = renderWithRedux(<Header />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
