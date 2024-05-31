import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = { //set up an initialState object that was passed to createSlice
    campsitesArray: CAMPSITES 
};

const campsitesSlice = createSlice({
    name: 'campsites', //a key of name and a value of a string campsites
    initialState //one of the key of initialState and its value will be the initial state object. //object name=the key name
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.featured
    );
};