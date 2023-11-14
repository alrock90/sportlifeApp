import { createSlice, createAsyncThunk,createSelector } from "@reduxjs/toolkit";

const initialState={
    players : new Array(11).fill(''),
     positions : Array.from({ length: 11 }, () => new Array(2).fill(0).map(() => Math.floor(Math.random() * 100))),


}




export const fieldSlice = createSlice({
    name:'field',
    initialState,
    reducers:{
        putInPlayer: (state,action) => {
            //TODO
        },
        changePositionPlayer: (state,action) => {
           // console.log(action.payload);
            const {index,x,y} = action.payload;
            state.positions[index][0]=x;
            state.positions[index][1]=y;
        },
    }
});


export const { putInPlayer,changePositionPlayer } = fieldSlice.actions; //reducers

//send info
const selectPlayers = (state) => state.field.players;
export const selectPositions = (state) => state.field.positions;

export default fieldSlice.reducer;