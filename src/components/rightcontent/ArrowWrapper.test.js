import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import ArrowWrapper from './ArrowWrapper';

describe('ArrowWrapper', () =>{
  it('renders', () => {
    render(
      <Provider store={store}>
        <ArrowWrapper
            isActive={true}
        />
      </Provider>
    );
    const element = screen.getByTestId('arrowWrapper');
    expect(element).toBeInTheDocument();
  });
})
