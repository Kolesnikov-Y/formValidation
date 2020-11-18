import { combineReducers } from "redux";
import cards from "./cards";
import massages from "./massages";

export const rootReducer = combineReducers({
    cards: cards, 
    massages: massages
})
