import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import { apiSlice } from "../features/pokemon/pokemonApiSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
