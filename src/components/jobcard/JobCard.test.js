import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import JobCard from './JobCard';


describe('Jobcard', () =>{
  it('renders <CardWrapper>', () => {
    render(
      <Provider store={store}>
        <JobCard 
            key={1}
            title={'Test Title'}
            employer={'Test Employer'}
            cities={['Test City 1', 'Test City 2']}
            homeOffice={'Teilweise Home-Office'}
            minSalary={50000}
            maxSalary={80000}
            fastApplication={true}
            date={"2023-12-04T11:12:59.429Z"}
        />
      </Provider>
    );
    const cardElement = screen.getByTestId('cardWrapper');
    expect(cardElement).toBeInTheDocument();
  });
})
