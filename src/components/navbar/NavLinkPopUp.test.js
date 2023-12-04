import {  fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import NavLinkPopUp from './NavLinkPopUp';

// Mocking the window.alert function
window.alert = jest.fn();

describe('NavLinkPopUp', () =>{
  it('renders PopUp', () => {
    const links = ['Aktuell', 'Gehalt', 'Karriere', 'Berufsleben'];
    render(
      <Provider store={store}>
        <NavLinkPopUp 
            depth={160} 
            isClicked={true} 
            links={links} 
            length={'-68px'}
        />
      </Provider>
    );
    
    const popUp = screen.getByTestId('popUp')
    expect(popUp).toBeInTheDocument();

    links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
  it('shows alert when popUp is clicked', () => {
    const links = ['Aktuell', 'Gehalt', 'Karriere', 'Berufsleben'];
    render(
      <Provider store={store}>
        <NavLinkPopUp 
            depth={160} 
            isClicked={true} 
            links={links} 
            length={'-68px'}
        />
      </Provider>
    );
    
    links.forEach((link) => {
        fireEvent.click(screen.getByText(link));
        expect(window.alert).toHaveBeenCalledWith(
            'Thanks for testing the website. This feature is not implemented.'
          );
    });
  });
})
