import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import DistanceSelectWrapper from './DistanceSelectWrapper';

describe('DistanceSelectWrapper', () =>{
  it('renders', () => {
    render(
      <Provider store={store}>
        <DistanceSelectWrapper 
            searchDistance={5}
            setSearchDistance={ ()=>{} }
        />
      </Provider>
    );
    const element = screen.getByTestId('distanceSelectWrapper');
    expect(element).toBeInTheDocument();
    
    const selectWrapper = screen.getByTestId('selectWrapper');
    expect(selectWrapper).toBeInTheDocument();
    expect(selectWrapper).toHaveValue('5'); // Updated line
  });
  it('renders select element with options', async () => {
    render(
      <Provider store={store}>
        <DistanceSelectWrapper 
            searchDistance={5}
            setSearchDistance={ ()=>{} }
        />
      </Provider>
    );

    const selectWrapper = screen.getByTestId('selectWrapper');
    expect(selectWrapper).toBeInTheDocument();

    const option5 = screen.getByText('5 km');
    const option10 = screen.getByText('10 km');
    const option20 = screen.getByText('20 km');

    expect(option5).toBeInTheDocument();
    expect(option10).toBeInTheDocument();
    expect(option20).toBeInTheDocument();
  });
  it('calls setSearchDistance when select value changes', () => {
    const setSearchDistanceMock = jest.fn();
    render(
        <Provider store={store}>
          <DistanceSelectWrapper 
              searchDistance={5}
              setSearchDistance={setSearchDistanceMock}
          />
        </Provider>
      );

    const selectWrapper = screen.getByTestId('selectWrapper');

    fireEvent.change(selectWrapper, { target: { value: '20' } });

    expect(setSearchDistanceMock).toHaveBeenCalledWith(20);
  });
})
