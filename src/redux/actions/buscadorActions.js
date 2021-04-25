import axios from "axios";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (dataPokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: dataPokemon,
});

export const fetchPokemonFailure = (errorMessage) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: errorMessage,
});

const fetchPokemon = (pokemonName) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess([response.data]));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure("No se encontro el pokemon"));
      });
  };
};

export default fetchPokemon;
