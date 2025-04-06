import React from 'react'
import Header from '../../common/Header/Header'
import './Dashboard.css'
import Calendar from '../../common/Calendar/Calendar'
import { zones } from '../../../data/data'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='dashboard'>
        {
          zones.map((zone) =>
            <div key={zone.id}>
              <Calendar zoneObject={zone} />
            </div>)
        }
      </div>
    </>
  )
}

export default Dashboard