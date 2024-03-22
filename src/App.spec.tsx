import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
it('should renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("Dio Bank")).toBeInTheDocument();
});
