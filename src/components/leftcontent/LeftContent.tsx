import React from 'react'
import FilterCard from '../filtercard/FilterCard';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { applyFilter, resetAllFilters, resetFilter } from '../jobcard/jobsSlice';

const CurrentFilters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const FilterButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  font-weight: 350;
  color: rgb(0, 153, 176);
  border-radius: 999px;
  background-color: rgb(225, 246, 247);
  box-shadow: 0px 0px 0px 1px inset;
  border: none;
  padding: 4px 16px;
  margin: 0px 0px 10px;
  &:hover {
    color: rgb(0, 105, 129);
    background-color: rgb(195, 236, 239);
  }
`;

const ResetLink = styled.a`
  color: rgb(0, 153, 176);
  cursor: pointer;
  &:hover {
    color: rgb(0, 105, 129);
    text-decoration: underline;
  }
`;

const StyledSvg = styled.svg`
    max-width: 1em;
    max-height: 1em;
    font-size: 16px;
    line-height: 24px;
    color: rgb(0, 153, 176);
  `;

const LeftContent: React.FC = () => {

  const currentFilters = useSelector((state: RootState) => state.jobs.currentFilters)
  const dispatch = useDispatch();

  const handleDeleteFilter = (filterKey: string) => {
    dispatch(resetFilter({filterKey: filterKey}));
    dispatch(applyFilter());
  };

  return (
    <div>
      {Object.keys(currentFilters).length > 0 ? <CurrentFilters>
        {Object.keys(currentFilters).map((f) => <FilterButton>{
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            {currentFilters[f]}
            <StyledSvg 
              aria-hidden="true" 
              role="img" xmlns="http://www.w3.org/2000/svg" 
              width="100%" 
              height="100%" 
              fill="none" 
              viewBox="0 0 20 20" 
              aria-labelledby="RemoveIcon-72"
              onClick={() => handleDeleteFilter(f)}
            ><title id="RemoveIcon-72">Remove icon</title>
            <path 
              fill="currentColor" 
              d="M10 10.938l-4.167 4.166a.61.61 0 01-.448.188.645.645 0 01-.468-.209.645.645 0 01-.209-.468c0-.174.07-.33.209-.469L9.062 10 4.896 5.833a.657.657 0 01.021-.937.647.647 0 01.468-.208c.174 0 .33.07.469.208L10 9.062l4.167-4.166a.657.657 0 01.458-.198c.18-.007.34.06.479.198a.648.648 0 01.208.469c0 .173-.07.33-.208.468L10.938 10l4.166 4.167a.647.647 0 01.198.448.61.61 0 01-.198.468.646.646 0 01-.469.209.645.645 0 01-.468-.209L10 10.938z"
            ></path></StyledSvg>
          </div>
        }</FilterButton>)}
        <ResetLink onClick={() => dispatch(resetAllFilters())}>Alle Filter entfernen</ResetLink>
      </CurrentFilters> 
      : 
      ' '}
      
      <FilterCard topic='Erscheinungsdatum' filters={['Neuer als 24h', 'Neuer als 7 Tage' ]}/>
      <FilterCard topic='Home-Office Optionen' filters={['Teilweise Home-Office', 'Nur Home-Office' ]}/>
      <FilterCard topic='Bewerbungsart' filters={['Auf Unternehmenswebsite', 'Schnelle Bewerbung' ]}/>
    </div>
  )
}

export default LeftContent
