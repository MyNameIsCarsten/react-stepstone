import React from 'react'
import styled from 'styled-components';
import JobCard from '../jobcard/JobCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const JWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const JobWrapper: React.FC = () => {
    const jobs = useSelector((state: RootState) => state.jobs.currentJobs)

  return (
    <JWrapper>
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
    </JWrapper>
  )
}

export default JobWrapper
