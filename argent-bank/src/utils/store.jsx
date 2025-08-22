import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.jsx"; // Réducer pour gérer l'authentification
import profileReducer  from "./slices/profileSlice.jsx"
const store = configureStore({
  reducer: {
    auth: authReducer, // Le slice 'auth' gère l'état d'authentification
    user: profileReducer
  },
});

export default store;