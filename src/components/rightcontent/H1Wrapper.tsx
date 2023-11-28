import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import styled from 'styled-components';

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

const H1Wrapper: React.FC = () => {

    const jobs = useSelector((state: RootState) => state.jobs.currentJobs)
    const searchKeyword = useSelector((state: RootState) => state.jobs.app.searchKeyword)
    const searchLocation = useSelector((state: RootState) => state.jobs.app.searchLocation)
    const searchDistance = useSelector((state: RootState) => state.jobs.app.searchDistance)

  return (
    jobs.length > 0 || searchKeyword !== '' || searchLocation !== '' ? 
        <H1>
            {jobs.length} Treffer für <LinkWrapper>{searchKeyword}</LinkWrapper> Jobs{' '}
            {searchLocation !== '' && (
            <>
                {'in '}
                <LinkWrapper>{searchLocation}</LinkWrapper>
            </>
            )} im Umkreis von {searchDistance} km
        </H1>
    : 
    <H1>Suche nach einem <TextHighlight>Jobtitel, Kompetenz oder Firmenname</TextHighlight> und wähle einen bevorzugten <TextHighlight>Arbeitsort</TextHighlight>.</H1>
  )
}

export default H1Wrapper
