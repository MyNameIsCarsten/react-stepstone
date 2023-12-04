import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import H1Wrapper from './H1Wrapper';

describe('H1Wrapper', () =>{
  it('renders', () => {
    render(
      <Provider store={store}>
        <H1Wrapper/>
      </Provider>
    );
    const element = screen.getByTestId('h1Wrapper');
    expect(element).toBeInTheDocument();
  });
})
