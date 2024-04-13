import React from 'react'
import load from './load.jpg'
export default function Spinner() {
    return (
      <div className='text-center'>
        <img src={load} alt="loading" style={{width:"35px"}}></img> 
      </div>
    )
  }


