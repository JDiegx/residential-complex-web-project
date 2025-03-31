import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1 className='not-found__tittle'>404 - NotFound</h1>
        <Link to={"/home"} className='not-found__back'>Back to Home</Link>
    </div>
  )
}

export default NotFound