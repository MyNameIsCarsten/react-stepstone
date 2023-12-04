import React from 'react'
import FilterCard from '../filtercard/FilterCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CurrentFiltersWrapper from './CurrentFiltersWrapper';


const LeftContent: React.FC = () => {

  const currentjobs = useSelector((state: RootState) => state.jobs.currentJobs)
  const jobsArray: string[][] = currentjobs ? currentjobs.map((j) => j.cities) : [];

  const concatenatedJobsArray: string[] = ([] as string[]).concat(...jobsArray);  
  const uniqueJobArray: string[] = [...new Set(concatenatedJobsArray)];

  const employerArray: string[] = currentjobs ? currentjobs.map((j) => j.employer) : [];

  const concatenatedEmployerArray: string[] = ([] as string[]).concat(...employerArray);
  const uniqueEmployerArray: string[] = [...new Set(concatenatedEmployerArray)];

  return (
    <>
      <CurrentFiltersWrapper data-testid='currentFilters' />
      
      <FilterCard topic='Erscheinungsdatum' filters={['Neuer als 24h', 'Neuer als 7 Tage' ]}/>
      <FilterCard topic='Home-Office Optionen' filters={['Teilweise Home-Office', 'Nur Home-Office' ]}/>
      <FilterCard topic='Bewerbungsart' filters={['Auf Unternehmenswebsite', 'Schnelle Bewerbung' ]}/>
      <FilterCard topic='Städte' filters={uniqueJobArray}/>
      <FilterCard topic='Arbeitgeber' filters={uniqueEmployerArray}/>
    </>
  )
}

export default LeftContent
