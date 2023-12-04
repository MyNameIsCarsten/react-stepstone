import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../../store/store';
import SortWrapper from './SortWrapper';

const mockStore = configureStore();

describe('SortWrapper', () =>{
  it('renders', () => {

    render(
      <Provider store={store}>
        <SortWrapper/>
      </Provider>
    );
    const element = screen.getByTestId('sortButtonWrapper');
    expect(element).toBeInTheDocument();
  });
  it('toggles isActive state on button click', () => {
    const mStore = mockStore({
      jobs: {
        currentJobs: [{ /* mock job data */ }],
      },
    });

    render(
      <Provider store={mStore}>
        <SortWrapper />
      </Provider>
    );

    // Initial state check
    expect(screen.getByTestId('sortButtonWrapper')).toBeInTheDocument();
    expect(getComputedStyle(screen.queryByTestId('sortPopUp')).display).toBe('none');

    // Trigger a click event on the ButtonWrapper
    fireEvent.click(screen.getByTestId('sortButtonWrapper'));

    expect(getComputedStyle(screen.queryByTestId('sortPopUp')).display).toBe('flex');
  });
})
