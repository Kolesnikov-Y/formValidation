import { VERIFY_CARD, CANCEL_VERIFY } from "../types/cardsType";

export function verifyCard() {
    return({
        type: VERIFY_CARD, 
    })
}

export function canselVerify() {
    return({
        type: CANCEL_VERIFY, 
    })
}