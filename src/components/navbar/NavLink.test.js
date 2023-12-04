import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import NavLink from './NavLink';

describe('NavLink', () =>{
  it('renders NavLink', () => {
    render(
      <Provider store={store}>
        <NavLink 
            title='Für Arbeitgeber' 
            links={[]} 
            svg='person' 
            depth={160}
            isClicked={true}
            onClick={() => {}}
        />
      </Provider>
    );
    
    const link = screen.getByTestId('navLink')
    expect(link).toBeInTheDocument();
  });
  it('click triggers onClick', () => {
    const mockOnClick = jest.fn();

    render(
      <Provider store={store}>
        <NavLink 
            title='Für Arbeitgeber' 
            links={[]} 
            svg='person' 
            depth={160}
            isClicked={true}
            onClick={mockOnClick}
        />
      </Provider>
    );
    
    const link = screen.getByTestId('navLink')

    fireEvent.click(link);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it('renders username if path is null / svg is not provided', () => {
    render(
      <Provider store={store}>
        <NavLink 
            title='Für Arbeitgeber' 
            links={[]} 
            svg='' 
            depth={160}
            isClicked={true}
            onClick={() => {}}
        />
      </Provider>
    );
    
    const username = screen.getByTestId('username')
    expect(username).toBeInTheDocument();
  });
})
