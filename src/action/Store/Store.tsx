import { configureStore } from '@reduxjs/toolkit'
import  netflixslice  from '../Action'


export const store = configureStore({
    reducer: {
        netflixval:netflixslice
        
    },
  })