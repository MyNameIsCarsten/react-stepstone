import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import OfficeSalaryCardWrapper from './OfficeSalaryCardWrapper';

describe('OfficeSalaryCardWrapper', () => {
  it('renders OfficeSalaryCardWrapper', () => {
    render(
      <Provider store={store}>
        <OfficeSalaryCardWrapper 
          homeOffice={'Teilweise Home-Office'}
          minSalary={50000}
          maxSalary={80000}
        />
      </Provider>
    );
    const wrapperElement = screen.getByTestId('officeSalaryWrapper');
    expect(wrapperElement).toBeInTheDocument();
  });
  it('renders homeOffice and salary', () => {
    const homeOffice='Teilweise Home-Office';
    const minSalary = 50000;
    const maxSalary = 80000;
    render(
      <Provider store={store}>
        <OfficeSalaryCardWrapper 
          homeOffice={homeOffice}
          minSalary={minSalary}
          maxSalary={maxSalary}
        />
      </Provider>
    );

    const homeOfficeElement = screen.getByText(homeOffice);
    expect(homeOfficeElement).toBeInTheDocument();

    const salaryElement = screen.getByText(`${minSalary.toLocaleString()}€ - ${maxSalary.toLocaleString()}€/Jahr (geschätz für Vollzeit)`);
    expect(salaryElement).toBeInTheDocument();
  });
});
