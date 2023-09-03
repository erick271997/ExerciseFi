import { Box } from '@mui/material'
import React from 'react'
import Exercises from '../componets/Exercises'
import SearchExercises from '../componets/SearchExercises'

import HeroBanner from './HeroBanner'

function Home() {
  return (
    <Box>
      <HeroBanner>
      <SearchExercises/>
         <Exercises/>
      </HeroBanner>
    </Box>
  )
}

export default Home
