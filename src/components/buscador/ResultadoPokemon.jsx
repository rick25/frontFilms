import { useSelector } from "react-redux"

const ResultadoPokemon = () => {
  const {loading, error, pokemon} = useSelector((state) => state.buscador)

  return (
    <div>
      <h3>Resultado: </h3>
      {
        pokemon.length >= 1 &&
          <div className="text-success">
            <img src={pokemon[0].sprites.front_default} alt=""/><span>{pokemon.name}</span>
          </div>
      }
      {loading && <div className="text-warning">Buscando...</div>}
      {error && <span className="text-danger">{error}</span>}
    </div>
  )
}

export default ResultadoPokemon