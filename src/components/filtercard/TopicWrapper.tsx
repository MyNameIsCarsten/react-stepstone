import React from 'react'
import styled from 'styled-components';
import { StyledSvg } from '../../styles/CommonStyles';

const TWrapper = styled.div`
    font-weight: bold;
    padding: 0.7em 0 0.7em  16px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled.button`
  border:none;
  background: none;
  color: rgb(12, 37, 119);
  display: flex;
  &:hover {
    cursor: pointer;
  }
  &:focus-visible {
    outline: transparent;
  }
`;

type Props = {
    topic: string; 
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  }

const TopicWrapper: React.FC<Props> = ({topic, expanded, setExpanded}) => {
  return (
    <TWrapper data-testid='topicWrapper'>
        {topic}
        <StyledButton onClick={()=> setExpanded(!expanded)}  data-testid='topicButton'>
            <StyledSvg $isVisible={expanded} data-genesis-element="ChevronBottomIcon" aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M10 12.208a.864.864 0 0 1-.292-.052.64.64 0 0 1-.27-.198L5.75 8.292a.668.668 0 0 1-.177-.49.672.672 0 0 1 .198-.469c.153-.139.312-.205.48-.198a.72.72 0 0 1 .457.198L10 10.646l3.312-3.292a.574.574 0 0 1 .438-.208c.167 0 .326.07.48.208a.66.66 0 0 1 .208.479c0 .18-.07.334-.209.459l-3.667 3.666a.64.64 0 0 1-.27.198.864.864 0 0 1-.292.052Z"></path></StyledSvg>
        </StyledButton>
    </TWrapper>
  )
}

export default TopicWrapper
