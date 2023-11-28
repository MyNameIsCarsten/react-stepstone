import React, { useState } from 'react'
import styled from 'styled-components'
import TopicWrapper from './TopicWrapper';
import OptionsWrapper from './OptionsWrapper';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #CFD6E7;
    border-radius: 16px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    color: rgb(12, 37, 119);
    margin-bottom: 16px;
`;


type Props = {
  topic: string; 
  filters: string[];
}

const FilterCard: React.FC<Props> = ({topic, filters}) => {

  const [expanded, setExpanded] = useState<boolean>(true);
  
  return (
    <CardWrapper>
      <TopicWrapper topic={topic} expanded={expanded} setExpanded={{setExpanded}}/>
      <OptionsWrapper topic={topic}  expanded={expanded} filters={filters}/>
    </CardWrapper>
  )
}

export default FilterCard
