import { useState } from "react"
import { useDispatch } from "react-redux"
import fetchPokemon from "../../redux/actions/buscadorActions"

const BuscadorPokemon = () => {
  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState('')

  return (
    <div className="form-group">
      <label htmlFor="buscar-pokemon" className="text-white">Buscar Pokemon</label>
      <input
        type="text"
        className="form-control"
        id="buscar-pokemon"
        onChange={(event) => {setPokemonName(event.target.value)}}
        value={pokemonName} />
      <button
        className="btn btn-primary mt-3"
        onClick={() => { dispatch(fetchPokemon(pokemonName)) }}
      >
        Enviar
      </button>
    </div>
    )
}

export default BuscadorPokemon