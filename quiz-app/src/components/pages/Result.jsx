import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function Result({score, name}) {
  
  useEffect(() => {
    if (!name) {
      Navigate('/')
    }

  }, [name, Navigate])
  return (
    <div className='flex flex-col m-auto items-center justify-center h-[80%] w-fit gap-10 mt-10'>
      <h1 className='text-4xl '> Final Score : {score}</h1>

      <Button variant="contained" color="secondary" size="large" href='/'> HomePage</Button>
    </div>
  )
}

export default Result