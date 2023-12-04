import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import LogoWrapper from './LogoWrapper';

describe('LogoWrapper', () =>{
  it('renders Logo', () => {
    render(
      <Provider store={store}>
        <LogoWrapper />
      </Provider>
    );
    
    const logo = screen.getByTestId('logoWrapper')
    expect(logo).toBeInTheDocument();
  });
})
