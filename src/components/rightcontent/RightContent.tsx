import React, { useState } from 'react'
import styled from 'styled-components'
import JobCard from '../jobcard/JobCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { applyFilter, setSort } from '../jobcard/jobsSlice';

const RightContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const JobWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    color: #0C2577;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
`;

const TextHighlight = styled.a`
  color: rgb(0, 153, 176);
`;


const LinkWrapper = styled(TextHighlight)`
    cursor: pointer;
`;

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

const StyledSpan = styled.span`
    display: flex;
    align-items: center;
  `;

const StyledSvg = styled.svg`
    width: 2em;
    height: 2em;
    display: block;
  `;

  interface PopUpProps {
    $depth?: number;
    $length?: string;
    $isClicked: boolean;
    $hasLinks: boolean;
  }

  const PopUp = styled.div<PopUpProps>`
    position: absolute;
    transform: ${props => `translate3d(${props.$length || '0px'}, ${`${props.$depth}px` || '0px'}, 0px)`};
    display: ${props => props.$isClicked && props.$hasLinks ? 'flex' : 'none'};
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px;
    background-color: rgb(255, 255, 255);
    outline: rgb(207, 214, 231) solid 1px;
    border-radius: 16px;
    width: max-content;
    padding: 16px 0;
`;

  const PopUpSpan = styled.span`
      padding: 16px;
      &:hover {
        color: black;
        cursor: pointer;
        background-color: rgb(244, 244, 237);
      }
  `;

  interface ArrowProps {
    $isClicked: boolean;
  }
  const ArrowWrapper = styled.svg<ArrowProps>`
    transform: translate3d(36px, -35px, 0px);
    z-index: 10;
    display: block; /* Ensure the SVG is always displayed */
    visibility: ${props => props.$isClicked ? 'visible' : 'hidden'};
    height: 20px;
    position: absolute;
  `;

const RightContent: React.FC  = () => {
  const links: string[] = ['Datum', 'Relevanz'];
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sorting, setSorting ] = useState<string>('Relevanz');
  const dispatch = useDispatch();

  const searchKeyword = useSelector((state: RootState) => state.jobs.app.searchKeyword)
  const searchLocation = useSelector((state: RootState) => state.jobs.app.searchLocation)
  const searchDistance = useSelector((state: RootState) => state.jobs.app.searchDistance)

  const jobs = useSelector((state: RootState) => state.jobs.currentJobs)


  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <RightContentWrapper>
        {searchKeyword !== '' && searchLocation !=='' ? 
        <H1>{jobs.length} Treffer für <LinkWrapper>{searchKeyword}</LinkWrapper> Jobs in <LinkWrapper>{searchLocation}</LinkWrapper> im Umkreis von {searchDistance} km</H1>
        : 
        <H1>Suche nach einem <TextHighlight>Jobtitel, Kompetenz oder Firmenname</TextHighlight> und wähle einen bevorzugten <TextHighlight>Arbeitsort</TextHighlight>.</H1>
        }

        {searchKeyword !== '' && searchLocation !=='' ? 
        <ButtonWrapper 
          onClick={handleClick}
        >
          <StyledSpan>
              {sorting}
              <StyledSvg 
                style={{transform: `rotate(${isActive ? '180deg' : '0deg'})`}} 
                aria-hidden="true" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                fill="none" 
                viewBox="0 0 20 20" 
                aria-labelledby="ChevronBottomIcon-608">
                  <title id="ChevronBottomIcon-608">Chevron bottom icon</title>
                  <path 
                    fill="currentColor" 
                    d="M10 12.208a.864.864 0 01-.292-.052.64.64 0 01-.27-.198L5.75 8.292a.668.668 0 01-.177-.49.672.672 0 01.198-.469c.153-.139.312-.205.48-.198a.72.72 0 01.457.198L10 10.646l3.312-3.292a.574.574 0 01.438-.208c.167 0 .326.07.48.208a.66.66 0 01.208.479c0 .18-.07.334-.209.459l-3.667 3.666a.64.64 0 01-.27.198.864.864 0 01-.292.052z"
                    ></path>
              </StyledSvg>
          </StyledSpan>
          
          <PopUp $length={'-6px'} $depth={107} $hasLinks={true} $isClicked={isActive}>
            <ArrowWrapper $isClicked={isActive} viewBox="0 0 30 30">
              <path className="stroke" style={{ fill: 'rgb(207, 214, 231)'}} d="M23.7,27.1L17,19.9C16.5,19.3,15.8,19,15,19s-1.6,0.3-2.1,0.9l-6.6,7.2C5.3,28.1,3.4,29,2,29h26 C26.7,29,24.6,28.1,23.7,27.1z"></path>
              <path className="fill" style={{ fill: 'rgb(255, 255, 255)'}} d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path>
            </ArrowWrapper>
            {links.map((l, index) => (
              <PopUpSpan key={index} onClick={() => {
                setSorting(l);
                dispatch(setSort(l));
                dispatch(applyFilter());
              }}>{l}</PopUpSpan>
            ))}
          </PopUp>
        </ButtonWrapper>
          :
        ''}
      </RightContentWrapper>
      {searchKeyword !== '' && searchLocation !=='' ? 
        <JobWrapper>
          {jobs.map((job, index) => 
            <JobCard 
              key={index}
              title={job.title}
              employer={job.employer}
              cities={job.cities}
              homeOffice={job.homeOffice}
              minSalary={job.minSalary}
              maxSalary={job.maxSalary}
              fastApplication={job.fastApplication}
              date={job.date}
            />)}
        </JobWrapper>
        :
        ''
      }
    </>
  )
}

export default RightContent
