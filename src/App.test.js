import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

describe('App', () =>{
  it('renders <HeaderWrapper>', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByTestId('headerWrapper');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders <ContentWrapper>', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByTestId('contentWrapper');
    expect(linkElement).toBeInTheDocument();
  });
})
