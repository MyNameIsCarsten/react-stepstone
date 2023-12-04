import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import BottomCardWrapper from './BottomCardWrapper';

describe('BottomCardWrapper', () => {
  it('renders <BottomWrapper>', () => {
    render(
      <Provider store={store}>
        <BottomCardWrapper 
          date={"2023-12-04T11:12:59.429Z"}
          isLiked={false}
          clickLike={() => {}}
        />
      </Provider>
    );
    const wrapperElement = screen.getByTestId('bottomWrapper');
    expect(wrapperElement).toBeInTheDocument();
  });

  it('click changes state', () => {
    let isLiked = false;  // Initialize isLiked in the test scope

    render(
      <Provider store={store}>
        <BottomCardWrapper 
          date={"2023-12-04T11:12:59.429Z"}
          isLiked={isLiked}
          clickLike={() => { isLiked = !isLiked; }}
        />
      </Provider>
    );

    const svg = screen.getByTestId('svg');
    expect(svg).toBeInTheDocument();

    fireEvent.click(svg);

    expect(isLiked).toBe(true);
  });
});
