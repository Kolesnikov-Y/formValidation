import {  CARD_MASSAGE, VERIFY_MASSAGE, CVV2_MASSAGE, ERROR_MASSAGE, HIDE_ERROR_MASSAGE ,HIDE_CARD_MASSAGE, HIDE_VERIFY_MASSAGE, HIDE_CVV2_MASSAGE, TODEFAULT } from "../types/MassagesTypes";

export function hideVerifyMassage() {
    return({
        type: HIDE_VERIFY_MASSAGE
    })
}
export function hideCardMassage() {
    return({
        type: HIDE_CARD_MASSAGE
    })
}
export function hideCVMassage() {
    return({
        type: HIDE_CVV2_MASSAGE
    })
}


export function cardMassage() {
    return({
        type: CARD_MASSAGE
    })
}
export function verifyMassage() {
    return({
        type: VERIFY_MASSAGE
    })
}
export function cvvMassage() {
    return({
        type: CVV2_MASSAGE
    })
}

export function errorMassage() {
    return ({
        type: ERROR_MASSAGE
    })
}

export function hideErrorMassage() {
    return ({
        type: HIDE_ERROR_MASSAGE
    })
}

export function toDefault() {
    return ({
        type: TODEFAULT
    })
}