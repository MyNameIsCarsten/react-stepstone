import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useDispatch } from 'react-redux';  
import CurrentFiltersWrapper from './CurrentFiltersWrapper';
import { applyFilter, resetAllFilters, resetFilter } from '../../store/jobsSlice';


// Mocking the useSelector and useDispatch hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore([]);

describe('CurrentFiltersWrapper', () => {
  let store;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Initial state for the Redux store
    const initialState = {
      jobs: {
        currentFilters: {
            Erscheinungsdatum:"Neuer als 24h"
        }
      },
    };

    // Create a new Redux store with the initial state
    store = mockStore(initialState);

  });

  it('renders CurrentFiltersWrapper with filters', () => {

    render(
      <Provider store={store}>
        <CurrentFiltersWrapper />
      </Provider>
    );

    expect(screen.getByTestId('currentFilters')).toBeInTheDocument();
  });

  it('handles filter deletion', async () => {
    // Mock the dispatch function
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    // Render the component within a Redux Provider with the mock store
    render(
      <Provider store={store}>
        <CurrentFiltersWrapper />
      </Provider>
    );

    // Trigger the handleDeleteFilter function, for example, by clicking on the delete button
    fireEvent.click(screen.getByTestId('deleteSVG'));

    // Add your assertions based on how your component should behave after a filter deletion
    expect(dispatchMock).toHaveBeenCalledWith(resetFilter({ filterKey: 'Erscheinungsdatum' }));
    expect(dispatchMock).toHaveBeenCalledWith(applyFilter());
  });

  it('handles resetting all filters', () => {
    
    // Mock the dispatch function
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    // Render the component within a Redux Provider with the mock store
    render(
      <Provider store={store}>
        <CurrentFiltersWrapper />
      </Provider>
    );

    // Trigger the resetAllFilters function, for example, by clicking on the "Alle Filter entfernen" link
    fireEvent.click(screen.getByText('Alle Filter entfernen'));

    // Add your assertions based on how your component should behave after resetting all filters
    expect(dispatchMock).toHaveBeenCalledWith(resetAllFilters());

  });
});
