import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CitiesCardWrapper from './CitiesCardWrapper';

describe('CitiesCardWrapper', () => {
  it('renders CitiesWrapper', () => {
    render(
      <Provider store={store}>
        <CitiesCardWrapper 
          cities={['Minden', 'Köln']}
        />
      </Provider>
    );
    const wrapperElement = screen.getByTestId('citiesWrapper');
    expect(wrapperElement).toBeInTheDocument();
  });
  it('renders cities', () => {
    const cities=['Minden', 'Köln']
    render(
      <Provider store={store}>
        <CitiesCardWrapper 
          cities={cities}
        />
      </Provider>
    );

    const citiesElement = screen.getByText(cities.join(', '));
    expect(citiesElement).toBeInTheDocument();
  });
});
