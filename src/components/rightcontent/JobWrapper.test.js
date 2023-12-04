import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import JobWrapper from './JobWrapper';

describe('JobWrapper', () =>{
  it('renders', () => {

    render(
      <Provider store={store}>
        <JobWrapper/>
      </Provider>
    );
    const element = screen.getByTestId('jobWrapper');
    expect(element).toBeInTheDocument();
  });
})
