import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import SortPopUpWrapper from './SortPopUpWrapper';
import configureStore from 'redux-mock-store';
import { applyFilter, setSort } from '../../store/jobsSlice';

const mockStore = configureStore([]);

describe('SortPopUpWrapper', () =>{
  it('renders', () => {
    render(
      <Provider store={store}>
        <SortPopUpWrapper
            isActive={true}
            setSorting={() => {}}
        />
      </Provider>
    );
    const element = screen.getByTestId('sortPopUp');
    expect(element).toBeInTheDocument();

    const datumElement = screen.getByText('Datum');
    expect(datumElement).toBeInTheDocument();

    const relevanzElement = screen.getByText('Relevanz');
    expect(relevanzElement).toBeInTheDocument();
  });
  it('dispatches setSort() and applyFilter()', () => {

    const mStore = mockStore({ jobs: { app: { searchSort: 'Relevanz'} } });
    render(
      <Provider store={mStore}>
        <SortPopUpWrapper
            isActive={true}
            setSorting={() => {}}
        />
      </Provider>
    );
    const element = screen.getByText('Datum');

    fireEvent.click(element);

    const actions = mStore.getActions();
    expect(actions).toEqual([setSort('Datum'), applyFilter()]);
  });
})
