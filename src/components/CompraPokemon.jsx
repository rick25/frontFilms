import { useDispatch } from "react-redux"
import {buyPokemon, returnPokemon} from "../redux/actions/gameShopActions"

const CompraPokemon = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button
                className="btn btn-dark btn-sm mb-2"
                onClick={() =>{ dispatch(buyPokemon(1)) }}
            >
                Comprar Pokemon
            </button>
            <button
                className="btn btn-dark btn-sm"
                onClick={() => { dispatch(returnPokemon(1)) }}
            >
                Devolver Pokemon
            </button>
        </div>
    )
}

export default CompraPokemon
