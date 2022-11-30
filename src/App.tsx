import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetchPokemonsQuery } from './features/pokemon/pokemonApiSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { receivedPokemon } from './features/pokemon/pokemonSlice';

function App() {

  const dispatch = useAppDispatch();
  const poke = useAppSelector(state => state.pokemon)

  useEffect(() => {
    if (data)
      dispatch(receivedPokemon(data))
  }, [])
  const { data } = useFetchPokemonsQuery();
  console.log(data)
  return (
    <div className="App">
      Hello World!
      <div>
        {/* {data?.results.map(item => <li>{item.name}</li>)} */}
        {poke.name}
        {poke.height}
      </div>
    </div>
  );
}

export default App;
