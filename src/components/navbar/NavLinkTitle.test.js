import {  render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import NavLinkTitle from './NavLinkTitle';


describe('NavLinkTitle', () =>{
  it('renders title', () => {
    const path = (
        <path 
          fill="currentColor" 
          d="M9.17 9.753a2.793 2.793 0 01-2.063-.865c-.57-.576-.854-1.26-.854-2.052 0-.805.285-1.493.854-2.062A2.81 2.81 0 019.17 3.92a2.81 2.81 0 012.062.854c.57.57.854 1.257.854 2.062 0 .792-.285 1.476-.854 2.052a2.792 2.792 0 01-2.062.865zm0-1.333a1.53 1.53 0 001.125-.459 1.53 1.53 0 00.458-1.125c0-.444-.153-.819-.458-1.125a1.531 1.531 0 00-1.125-.458c-.445 0-.82.153-1.125.458a1.53 1.53 0 00-.46 1.125c0 .445.154.82.46 1.125.305.306.68.459 1.125.459zm8.437 10.062l-2-2c-.277.18-.572.32-.885.417a3.242 3.242 0 01-.97.146c-.916 0-1.693-.32-2.332-.959-.64-.639-.96-1.416-.96-2.333 0-.917.32-1.694.96-2.333.639-.64 1.416-.959 2.333-.959.917 0 1.694.32 2.333.959.64.639.959 1.416.959 2.333 0 .333-.049.656-.146.969a3.544 3.544 0 01-.417.885l2 2a.611.611 0 01.188.448.545.545 0 01-.188.427.546.546 0 01-.427.188.612.612 0 01-.448-.188zm-3.854-2.771c.57 0 1.038-.184 1.406-.552.368-.368.552-.837.552-1.406 0-.57-.184-1.038-.552-1.406-.368-.368-.837-.552-1.406-.552-.57 0-1.038.184-1.406.552-.368.368-.552.837-.552 1.406 0 .57.184 1.038.552 1.406.368.368.837.552 1.406.552zm-4.458.375H4.274c-.375 0-.695-.132-.96-.395a1.284 1.284 0 01-.394-.938v-.5c0-.417.108-.799.323-1.146a2.18 2.18 0 01.906-.812c.653-.32 1.423-.601 2.312-.844.89-.243 1.883-.358 2.98-.344a3.374 3.374 0 00-.323.656c-.09.243-.164.476-.22.698-.916.028-1.718.143-2.405.344-.688.201-1.247.42-1.678.656a1.01 1.01 0 00-.416.334.78.78 0 00-.146.458v.5h4.542c.055.222.128.455.218.698.09.243.185.454.282.635z"
        ></path>
      );
    
    const title = 'Magazin'

    render(
      <Provider store={store}>
        <NavLinkTitle 
            path={path} 
            title={title}
        />
      </Provider>
    );
    
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument();

  });
})
