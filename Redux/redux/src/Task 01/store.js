
import { configureStore } from '@reduxjs/toolkit'; 
import counterReducer from '.Task 01/reducers/counterReducer';


const store = configureStore({
  reducer: {
    counter: counterReducer,  
  },
});

export default store;
