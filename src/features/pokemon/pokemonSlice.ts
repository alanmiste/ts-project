import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemons } from "./pokemonApiSlice";
import { useFetchPokemonsQuery } from "./pokemonApiSlice";

export interface PokemonState {
  id: number;
  name: string;
  height: number;
  imgUrl: string;
}

const initialState: PokemonState = {
  id: 0,
  name: "",
  height: 0,
  imgUrl: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getResults(state) {
      // const { data, isFetching } = useFetchPokemonsQuery();
      return { ...state };
    },
    receivedPokemon(state, action: PayloadAction<Pokemons>) {
      const pokemons = action.payload;
      state.name = pokemons.results[0].name;
    },
  },
});

export const { getResults, receivedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
