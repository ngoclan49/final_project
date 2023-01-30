import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RoomModel } from '../../Models/RoomModel'
import { http } from '../../util/config'
import { AppDispatch } from '../configureStore'
export type RoomState = {
    rooms: RoomModel[],
    roomByPos: RoomModel[],
    roomPagination: RoomModel[]
}

const initialState: RoomState = {
    rooms: [],
    roomByPos: [],
    roomPagination: []
}

const roomReducer = createSlice({
    name: 'roomReducer',
    initialState,
    reducers: {
        getRoomAction: (state: RoomState, action: PayloadAction<RoomModel[]>) => {
            state.rooms = action.payload
        },
        getRoomByPosIdAction: (state: RoomState, action: PayloadAction<RoomModel[]>) => {
            state.roomByPos = action.payload
        },
        getRoomPaginationAction: (state: RoomState, action: PayloadAction<RoomModel[]>) => {
            state.roomPagination = action.payload
        }
    }
});

export const { getRoomAction, getRoomByPosIdAction, getRoomPaginationAction } = roomReducer.actions

export default roomReducer.reducer

// action async
export const getRoomApi = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await http.get('/api/phong-thue')
            const content: RoomModel[] = result.data.content
            const action: PayloadAction<RoomModel[]> = getRoomAction(content)
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const getRoomByPosIdApi = (id: number) => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
        const content: RoomModel[] = result.data.content
        const action: PayloadAction<RoomModel[]> = getRoomByPosIdAction(content)
        dispatch(action)
    }
}

export const getRoomPagination = (pageIndex: number, pageSize: number) => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get(`api/phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`)
        const content: RoomModel[] = result.data.content.data
        const action: PayloadAction<RoomModel[]> = getRoomPaginationAction(content)
        dispatch(action)
    }
}