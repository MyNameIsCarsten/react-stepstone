import React from 'react'
import FilterCard from '../filtercard/FilterCard';

const LeftContent: React.FC = () => {
  return (
    <div>
      <FilterCard topic='Erscheinungsdatum' filters={['Neuer als 24h', 'Neuer als 7 Tage' ]}/>
      <FilterCard topic='Home-Office Optionen' filters={['Teilweise Home-Office', 'Nur Home-Office' ]}/>
      <FilterCard topic='Bewerbungsart' filters={['Auf Unternehmenswebsite', 'Schnelle Bewerbung' ]}/>
      <FilterCard topic='Sprache' filters={['Deutsch', 'Englisch' ]}/>
    </div>
  )
}

export default LeftContent
