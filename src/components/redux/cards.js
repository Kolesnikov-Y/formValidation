import { VERIFY_CARD, CANCEL_VERIFY } from "./types/cardsType"

const initialState = {
    cards: [{
    cardNumber: 3333444455556666, 
    validCard: 2704, 
    CVV2: `090`, 
    id: 3333444455559460
}], 
    isChecked: false
}

export default function cards (state = initialState, action){
    switch(action.type){
        case VERIFY_CARD: 
            return state = {...state, isChecked: true}
        case CANCEL_VERIFY: 
            return state = {...state, isChecked: false}
        default: 
            return state
    }
}