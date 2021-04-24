import { Fragment } from "react"
import { useSelector } from "react-redux"

const CantidadPokemon = () => {
    const gameShop = useSelector(state=>state.gameShop)
    return (
        <Fragment>
            Unidades: {gameShop.pokemon}
        </Fragment>
    )
}

export default CantidadPokemon
