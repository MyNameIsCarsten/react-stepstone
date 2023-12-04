import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addFilter, applyFilter } from '../../store/jobsSlice';
import { RootState } from '../../store/store';

interface OptionsWrapperProps {
    $isVisible?: boolean;
  }
  
const OWrapper = styled.div<OptionsWrapperProps>`
  display: ${props => props.$isVisible ? 'flex' : 'none'};
  flex-direction: column;
  @media (max-width: 900px){
    display: ${props => props.$isVisible ? 'none' : 'flex'};
  }
`;

const FilterWrapper = styled.div`
  border-top: 2px solid #CFD6E7;
  padding: 0.7em 0 0.7em  32px ;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

type Props = {
    topic: string;
    expanded: boolean;
    filters: string[]
  }

const OptionsWrapper: React.FC<Props> = ({topic, expanded, filters}) => {

    const currentFilters = useSelector((state: RootState) => state.jobs.currentFilters)
    const dispatch = useDispatch();

    const clickHandler = (filterValue: string) => {
        dispatch(addFilter({
          filterKeyword: topic, 
          filterValue: filterValue
        }));
        dispatch(applyFilter());
      };

  return (
    <OWrapper $isVisible={expanded}  data-testid='optionsWrapper'>
      {filters.map((f: string) => (
          currentFilters && currentFilters[topic] !== f ? (
            <FilterWrapper key={f} onClick={() => clickHandler(f)}>
              {f}
            </FilterWrapper>
          ) : null
        ))}
      </OWrapper>
  )
}

export default OptionsWrapper
