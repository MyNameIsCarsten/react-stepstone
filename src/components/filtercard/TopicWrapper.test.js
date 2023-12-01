import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import TopicWrapper from './TopicWrapper';
import { act } from 'react-dom/test-utils';


describe('TopicWrapper', () => {
    it('renders <TWrapper>', () => {
        const topic = 'Erscheinungsdatum'
        let expanded = true;
        const setExpanded = () => {
            expanded = !expanded;
        }
        render(
          <Provider store={store}>
            <TopicWrapper topic={topic} expanded={expanded} setExpanded={setExpanded}/>
          </Provider>
        );
        const element = screen.getByTestId('topicWrapper');
        expect(element).toBeInTheDocument();

        const topicElement = screen.getByText(topic);
        expect(topicElement).toBeInTheDocument();
    });
    it('Button triggers onClick', async () => {
        const topic = 'Erscheinungsdatum'
        let expanded = true;
        const mockSetExpanded = jest.fn(() => {
            expanded = !expanded;
        })
        render(
          <Provider store={store}>
            <TopicWrapper topic={topic} expanded={expanded} setExpanded={mockSetExpanded}/>
          </Provider>
        );
        const buttonElement = screen.getByTestId('topicButton');

        fireEvent.click(buttonElement);

        expect(mockSetExpanded).toHaveBeenCalledTimes(1);
        expect(expanded).toEqual(false);
    });
});