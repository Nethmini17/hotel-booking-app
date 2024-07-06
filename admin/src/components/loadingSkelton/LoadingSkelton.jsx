import React from 'react'
import { Skeleton } from '@mui/material'

const LoadingSkelton = () => {
  return (
    <>
      <Skeleton variant="text" width={210} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="text" width={210} height={40} />
    </>
  )
}

export default LoadingSkelton;