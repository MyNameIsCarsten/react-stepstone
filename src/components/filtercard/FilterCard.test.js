import { Provider } from 'react-redux';
import store from '../../store/store';
import FilterCard from './FilterCard';
import jobsReducer, { addFilter, applyFilter } from '../../store/jobsSlice';
import { render, screen } from '@testing-library/react';


const initialState = {
  app: {
    username: 'Carsten',
    searchKeyword: 'React',
    searchLocation: '',
    searchDistance: 5,
    searchSort: 'Relevanz',
  },
  currentFilters: {
    Städte: 'Minden',
  },
  currentJobs: [
    {
      title:
        'IT Dozent / Trainer / Programmierer / Software-Entwickler / Developer (m/w/d) bundesweit',
      employer: 'INTEW - Institut für technische Weiterbildung',
      cities: [
        'Berlin',
        'Dresden',
        'Dortmund',
        'Düsseldorf',
        'Frankfurt',
        'Hamburg',
        'Hannover',
        'Kassel',
        'Köln',
        'München',
        'Nürnberg',
        'Stuttgart',
      ],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: '2023-12-01T13:45:02.139Z',
    },
  ],
};

describe('FilterCard', () =>{
  it('renders <CardWrapper>', () => {
    render(
      <Provider store={store}>
        <FilterCard topic='Erscheinungsdatum' filters={['Neuer als 24h', 'Neuer als 7 Tage' ]}/>
      </Provider>
    );
    const linkElement = screen.getByTestId('cardWrapper');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders topic and filters', () => {
    const topic = 'Erscheinungsdatum'
    const filters = ['Neuer als 24h', 'Neuer als 7 Tage' ]
    render(
      <Provider store={store}>
        <FilterCard topic={topic} filters={filters}/>
      </Provider>
    );
    const topicElement = screen.getByText(topic);
    const filterElement1 = screen.getByText(filters[0]);
    const filterElement2 = screen.getByText(filters[1]);
    expect(topicElement).toBeInTheDocument();
    expect(filterElement1).toBeInTheDocument();
    expect(filterElement2).toBeInTheDocument();
  });
  it('should handle applyFilter', () => {
    const nextState = jobsReducer(initialState, applyFilter());
    // Add your assertions based on the expected state
    expect(nextState.currentJobs).toStrictEqual([]);
  });
  it('should handle addFilter', () => {
    const nextState = jobsReducer(initialState, addFilter({
      filterKeyword: 'Erscheinungsdatum', 
      filterValue: 'Neuer als 24h'
    }));
    // Add your assertions based on the expected state
    expect(nextState.currentFilters).toStrictEqual({
      Städte: 'Minden',
      Erscheinungsdatum: 'Neuer als 24h'
    });
  });
});