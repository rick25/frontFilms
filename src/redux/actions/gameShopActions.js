export const BUY_POKEMON = "BUY_POKEMON";
export const RETURN_POKEMON = "RETURN_POKEMON";

export const buyPokemon = (qty) => ({
  type: BUY_POKEMON,
  payload: qty,
});

export const returnPokemon = (qty) => ({
  type: RETURN_POKEMON,
  payload: qty,
});
