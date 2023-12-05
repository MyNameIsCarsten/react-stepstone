import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import H1Wrapper from './H1Wrapper';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('H1Wrapper', () =>{
  it('renders', () => {
    const mStore = mockStore({ jobs: { currentJobs: [], app: { searchKeyword: 'React' }}});
    render(
      <Provider store={mStore}>
        <H1Wrapper/>
      </Provider>
    );
    const element = screen.getByTestId('h1Wrapper');
    expect(element).toBeInTheDocument();
  });
})
