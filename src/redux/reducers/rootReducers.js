import { combineReducers } from "redux";
import gameShop from "./gameShopReducer";

const rootReducers = combineReducers({
  gameShop,
});

export default rootReducers;
