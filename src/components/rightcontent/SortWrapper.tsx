import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';
import SortSelectWrapper from './SortSelectWrapper';
import SortPopUpWrapper from './SortPopUpWrapper';

const ButtonWrapper = styled.button`
    border: none;
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    background-color: rgb(225, 246, 247);
    color: rgb(12, 37, 119);
    border-radius: 999px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const SortWrapper: React.FC = () => {
    const jobs = useSelector((state: RootState) => state.jobs.currentJobs)
    const [isActive, setIsActive] = useState<boolean>(false);
    const [sorting, setSorting ] = useState<string>('Relevanz');
    
    const handleClick = () => {
        setIsActive(!isActive);
      };

  return (
    jobs.length > 0 ? 
        <ButtonWrapper onClick={handleClick}>
          <SortSelectWrapper sorting={sorting} isActive={isActive} />
          <SortPopUpWrapper isActive={isActive} setSorting={setSorting} />
        </ButtonWrapper>
          :
        ''
    )
}

export default SortWrapper
