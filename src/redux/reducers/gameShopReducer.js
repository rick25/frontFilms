import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopActions";

const defaultShop = { pokemon: 20 };

const gameShop = (state = defaultShop, action) => {
  switch (action.type) {
    case BUY_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon - action.payload,
      };
    case RETURN_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon + action.payload,
      };
    default:
      return state;
  }
};

export default gameShop;
