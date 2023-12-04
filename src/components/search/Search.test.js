import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Search from './Search';
import configureStore from 'redux-mock-store';
import { applyFilter, setSearch } from '../../store/jobsSlice';

const mockStore = configureStore([]);

describe('SearchBarsWrapper', () =>{
  it('renders', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const element = screen.getByTestId('searchBarsWrapper');
    expect(element).toBeInTheDocument();
  });
  it('renders submit button', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const element = screen.getByTestId('searchBarButton');
    expect(element).toBeInTheDocument();
  });
  it('click on submit button disptaches actions', () => {
    const mStore = mockStore({ })
    render(
      <Provider store={mStore}>
        <Search />
      </Provider>
    );
    const element = screen.getByTestId('searchBarButton');

    fireEvent.click(element);

    const actions = mStore.getActions();

    expect(actions).toEqual([
        {
            "payload": {"searchDistance": 5, "searchKeyword": "", "searchLocation": ""}, 
            "type": "jobs/setSearch"
        }, 
        {
            "payload": undefined, "type": "jobs/applyFilter"
        }
    ]);
  });
})
