import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import LocationSearchWrapper from './LocationSearchWrapper';


describe('KeywordSearchWrapper', () =>{
  it('renders', () => {
    const setSearchLocationMock = jest.fn();
    const setSearchDistanceMock = jest.fn();
    render(
      <Provider store={store}>
        <LocationSearchWrapper 
            searchLocation={'Minden'} 
            setSearchLocation={setSearchLocationMock} 
            searchDistance={5}
            setSearchDistance={setSearchDistanceMock}
        />
      </Provider>
    );
    const element = screen.getByTestId('locationSearchBar');
    expect(element).toBeInTheDocument();
  });
  it('calls setSearchLocation when value changes', () => {
    const setSearchLocationMock = jest.fn();
    const setSearchDistanceMock = jest.fn();
    render(
      <Provider store={store}>
        <LocationSearchWrapper 
            searchLocation={'Minden'} 
            setSearchLocation={setSearchLocationMock} 
            searchDistance={5}
            setSearchDistance={setSearchDistanceMock}
        />
      </Provider>
    );

    const element = screen.getByTestId('searchBarLocation');
    expect(element.value).toBe('Minden');

    fireEvent.change(element, { target: { value: 'Bad Essen' } });

    expect(setSearchLocationMock).toHaveBeenCalledWith('Bad Essen');
  });
  it('clears value when x svg is clicked', () => {
    const setSearchLocationMock = jest.fn();
    const setSearchDistanceMock = jest.fn();
    render(
        <Provider store={store}>
        <LocationSearchWrapper 
            searchLocation={'Minden'} 
            setSearchLocation={setSearchLocationMock} 
            searchDistance={5}
            setSearchDistance={setSearchDistanceMock}
        />
      </Provider>
    );

    const xButton = screen.getByTestId('locationSVGdelete')

    fireEvent.click(xButton);

    expect(setSearchLocationMock).toHaveBeenCalledWith('');

  });
})
