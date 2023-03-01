import { createSlice } from "@reduxjs/toolkit";

export const netflixslice: any = createSlice({
    name: 'rohit',
    initialState: {
        value: [],
        trending: [],
        toprated: [],
        actionmovie: [],
        comedy: [],
        horror:[],
        romance:[],
        documentaries:[],
        details:[],
        search:[]
    },
    reducers: {
        netflixdata: (state, action) => {
            state.value = action.payload
            console.log("action.payload", state.value);

        },
        trending: (state, action) => {
            state.trending = action.payload
            console.log("action.payload", state.value);

        },
        toprated: (state, action) => {
            state.toprated = action.payload
            console.log("action.payload", state.value);

        },
        actionmovie: (state, action) => {
            state.actionmovie = action.payload
            console.log("action.payload", state.value);

        },
        comedy: (state, action) => {
            state.comedy = action.payload
            console.log("action.payload", state.value);

        },
        horror: (state, action) => {
            state.horror = action.payload
            console.log("action.payload", state.value);

        },
        romance: (state, action) => {
            state.romance = action.payload
            console.log("action.payload", state.value);

        },
        documentaries: (state, action) => {
            state.documentaries = action.payload
            console.log("action.payload", state.value);

        },
        details:(state, action)=>{
               state.details = action.payload
            console.log("kkkkkkkkkkkkkk",action);
            
        },
        search:(state,action)=>{
            // console.log("jjjjjjjjjjjjjjjjj",action);
            state.search =action.payload
            
        }

    },

})

export const { netflixdata, trending, toprated, actionmovie,comedy,horror,romance,documentaries,details,search} = netflixslice.actions
export default netflixslice.reducer