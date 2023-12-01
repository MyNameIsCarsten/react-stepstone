import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import OptionsWrapper from './OptionsWrapper';
import { addFilter, applyFilter } from '../../store/jobsSlice';

const mockStore = configureStore([]);

describe('OptionsWrapper', () => {
  const topic = 'Erscheinungsdatum';
  const filters = ['Neuer als 24h', 'Neuer als 7 Tage' ];

  it('renders <OWrapper>', () => {

    const store = mockStore({ jobs: { currentFilters: {} } });

    render(
      <Provider store={store}>
        <OptionsWrapper topic={topic} expanded={true} filters={filters} />
      </Provider>
    );
    const element = screen.getByTestId('optionsWrapper');
    expect(element).toBeInTheDocument();
});

  it('renders correctly when expanded', () => {
    const store = mockStore({ jobs: { currentFilters: {} } });

    render(
      <Provider store={store}>
        <OptionsWrapper topic={topic} expanded={true} filters={filters} />
      </Provider>
    );

    // Ensure that each filter is rendered
    filters.forEach((filter) => {
      const filterElement = screen.getByText(filter);
      expect(filterElement).toBeInTheDocument();
    });
  });

  it('does not render filters when collapsed', () => {
    const store = mockStore({ jobs: { currentFilters: {} } });
  
    render(
      <Provider store={store}>
        <OptionsWrapper topic={topic} expanded={false} filters={filters} />
      </Provider>
    );
  
    // Ensure that no filter is visible
    filters.forEach((filter) => {
      const filterElement = screen.getByText(filter);
      expect(filterElement).not.toBeVisible();
    });
  });
  

  it('applies filters on click', () => {
    const store = mockStore({ jobs: { currentFilters: {} } });

    render(
      <Provider store={store}>
        <OptionsWrapper topic={topic} expanded={true} filters={filters} />
      </Provider>
    );

    // Simulate a click on each filter
    filters.forEach((filter) => {
      const filterElement = screen.getByText(filter);
      fireEvent.click(filterElement);

      // Ensure that addFilter and applyFilter actions are dispatched
      const actions = store.getActions();
      expect(actions).toContainEqual(addFilter({ filterKeyword: topic, filterValue: filter }));
      expect(actions).toContainEqual(applyFilter());
    });
  });
});
