import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import KeywordSearchWrapper from './KeywordSearchWrapper';

describe('KeywordSearchWrapper', () =>{
  it('renders', () => {
    render(
      <Provider store={store}>
        <KeywordSearchWrapper 
            searchKeyword={'React'} 
            setSearchKeyword={() =>{}}
        />
      </Provider>
    );
    const element = screen.getByTestId('keywordSearch');
    expect(element).toBeInTheDocument();
  });
  it('calls setSearchKeyword when value changes', () => {
    const setSearchKeywordMock = jest.fn();
    render(
      <Provider store={store}>
        <KeywordSearchWrapper 
            searchKeyword={'React'} 
            setSearchKeyword={setSearchKeywordMock}
        />
      </Provider>
    );
    const element = screen.getByTestId('searchBarKeyword');
    expect(element.value).toBe('React');

    fireEvent.change(element, { target: { value: 'Angular' } });

    expect(setSearchKeywordMock).toHaveBeenCalledWith('Angular');
  });
  it('clears value when x svg is clicked', () => {
    const setSearchKeywordMock = jest.fn();
    render(
      <Provider store={store}>
        <KeywordSearchWrapper 
            searchKeyword={'React'} 
            setSearchKeyword={setSearchKeywordMock}
        />
      </Provider>
    );

    const xButton = screen.getByTestId('keywordSVGdelete')

    fireEvent.click(xButton);

    expect(setSearchKeywordMock).toHaveBeenCalledWith('');

  });
})
