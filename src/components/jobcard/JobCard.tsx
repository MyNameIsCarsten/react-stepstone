import React, { useState } from 'react'
import styled from 'styled-components';
import TopCardWrapper from './TopCardWrapper';
import BottomCardWrapper from './BottomCardWrapper';
import CitiesCardWrapper from './CitiesCardWrapper';
import OfficeSalaryCardWrapper from './OfficeSalaryCardWrapper';

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 2px solid #CFD6E7;
    border-radius: 16px;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    color: rgb(12, 37, 119);
    margin-bottom: 16px;
    padding: 24px;
    &:hover {
      box-shadow: 0 0 0 3px;
      color: #006981;
      border: 2px solid transparent;
    }
`;

const BadgeWrapper = styled.p`
    color: #0C2577;
    background-color: #E8ECF3;
    border-radius: 999px;
    width: fit-content;
    padding: 0 8px;
    font-size: 12px;
`;

type Props = {
    title: string; 
    employer: string;
    cities: string[];
    homeOffice: string;
    minSalary: number;
    maxSalary: number;
    fastApplication: boolean;
    date: string;
  }

const JobCard: React.FC<Props>  = ( {title, employer, cities, homeOffice, minSalary, maxSalary, fastApplication, date} ) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const clickLike = () => {
        setIsLiked(!isLiked);
    };

  return (
    <CardWrapper data-testid='cardWrapper'>
        <TopCardWrapper title={title} employer={employer} />
        <CitiesCardWrapper cities={cities}/>
        <OfficeSalaryCardWrapper homeOffice={homeOffice} minSalary={minSalary} maxSalary={maxSalary}/>
        {fastApplication ? <BadgeWrapper>Schnelle Bewerbung</BadgeWrapper> : <BadgeWrapper>Auf Unternehmenswebsite</BadgeWrapper>}
        <BottomCardWrapper date={date} isLiked={isLiked} clickLike={clickLike}/>
    </CardWrapper>
  )
}

export default JobCard
