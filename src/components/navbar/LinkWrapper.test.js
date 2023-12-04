import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import LinksWrapper from './LinksWrapper';

describe('LinksWrapper', () =>{
  it('renders NavLinks', () => {
    render(
      <Provider store={store}>
        <LinksWrapper />
      </Provider>
    );

    const navLinks = ['Für Arbeitgeber', 'Magazin', 'Meine Karriere', 'Meine Jobs']
    
    navLinks.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
})
