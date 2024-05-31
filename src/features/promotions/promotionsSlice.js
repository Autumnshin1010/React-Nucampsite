import { createSlice } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

const initialState = {
     promotionsArray: PROMOTIONS
};

const promotionsSlice = createSlice({
     name: 'promotions',
     initialState
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
     return state.promtions.promotionsArray.find(
          (promtion) => promtion.featured
     );
};