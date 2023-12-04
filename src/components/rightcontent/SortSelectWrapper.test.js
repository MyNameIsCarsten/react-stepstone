import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import SortSelectWrapper from './SortSelectWrapper';

describe('SortSelectWrapper', () =>{
  it('renders', () => {

    render(
      <Provider store={store}>
        <SortSelectWrapper
            sorting={'Relevanz'}
            isActive={true}
        />
      </Provider>
    );
    const element = screen.getByTestId('sortSpan');
    expect(element).toBeInTheDocument();
  });
})
