import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopCardWrapper from './TopCardWrapper';

describe('TopCardWrapper', () => {
  const mockTitle = 'Mock Title';
  const mockEmployer = 'Mock Employer';

  it('renders TopCardWrapper component with title and employer', () => {
    render(<TopCardWrapper title={mockTitle} employer={mockEmployer} />);
    
    const titleElement = screen.getByText(mockTitle);
    const employerElement = screen.getByText(mockEmployer);
    const logoElement = screen.getByAltText('Logo');

    expect(titleElement).toBeInTheDocument();
    expect(employerElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
  });

  it('calls the alert function when title is clicked', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<TopCardWrapper title={mockTitle} employer={mockEmployer} />);
    
    const titleElement = screen.getByText(mockTitle);
    userEvent.click(titleElement);

    expect(mockAlert).toHaveBeenCalledWith("Thanks for testing the website. This feature is not implemented.");
  });

  it('handles logo hover correctly', () => {
    render(<TopCardWrapper title={mockTitle} employer={mockEmployer} />);
    
    const logoElement = screen.getByAltText('Logo');

    userEvent.hover(logoElement);
    expect(logoElement).toHaveStyle('border: 2px solid #006981;');

  });
});
