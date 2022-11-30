import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface OnePokemon {
  name: string;
  url: string;
}
export interface Pokemons {
  count: number;
  next: string;
  previous: null;
  results: OnePokemon[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query<Pokemons, number | void>({
        query(limit = 10) {
          return `/pokemon?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchPokemonsQuery } = apiSlice;
