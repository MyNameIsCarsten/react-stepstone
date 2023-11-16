import React from 'react'
import Card from '../card/Card'

const LeftContent = () => {
  return (
    <div>
      <Card topic='Erscheinungsdatum' filters={['Neuer als 24h', 'Neuer als 7 Tage' ]}/>
      <Card topic='Home-Office Optionen' filters={['Teilweise Home-Office', 'Nur Home-Office' ]}/>
      <Card topic='Bewerbungsart' filters={['Auf Unternehmenswebsite', 'Auf Unternehmenswebsite' ]}/>
      <Card topic='Sprache' filters={['Deutsch', 'Englisch' ]}/>
    </div>
  )
}

export default LeftContent
