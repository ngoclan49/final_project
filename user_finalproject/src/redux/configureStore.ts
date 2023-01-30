import { configureStore } from '@reduxjs/toolkit'
import positionReducer from './positionReducer/positionReducer'
import roomReducer from './roomReducer/roomReducer'
export const store = configureStore({
    reducer: {
        positionReducer,
        roomReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 

export type AppDispatch = typeof store.dispatch