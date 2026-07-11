import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from './features/searchSlice'
import CollectionReducer from './features/collectionSlice'
export const store = configureStore({
    reducer:{
      search:SearchReducer,
      collection:CollectionReducer
    }
})