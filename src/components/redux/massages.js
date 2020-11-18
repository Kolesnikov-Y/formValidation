import { CARD_MASSAGE, ERROR_MASSAGE, HIDE_ERROR_MASSAGE, VERIFY_MASSAGE, CVV2_MASSAGE, HIDE_CARD_MASSAGE, HIDE_VERIFY_MASSAGE, HIDE_CVV2_MASSAGE, TODEFAULT} from "./types/MassagesTypes";

const initialState = {
    showCardNumberMassage: false, 
    showVerifyCardMassage: false, 
    showCVV2Massage: false, 
    showErrorMassage: false
}; 

export default function massages (state = initialState, action){
    switch(action.type) {
        case CARD_MASSAGE: 
            return state =  {...state, showCardNumberMassage: true }; 
        case HIDE_CARD_MASSAGE : 
            return state ={ ...state, showCardNumberMassage: false}

        case VERIFY_MASSAGE: 
            return state =  {...state,  showVerifyCardMassage: true}; 
        case HIDE_VERIFY_MASSAGE: 
            return state = {...state, showVerifyCardMassage: false} 

        case CVV2_MASSAGE: 
            return state =  {...state,  showCVV2Massage: true}; 
        case HIDE_CVV2_MASSAGE: 
            return state = {...state, showCVV2Massage: false}

        case ERROR_MASSAGE: 
            return state = {...state, showErrorMassage: true}; 
        case HIDE_ERROR_MASSAGE: 
            return state = {...state, showErrorMassage: false}; 
        case TODEFAULT: 
            return state = {...state, showCardNumberMassage: false, showCVV2Massage: false, showVerifyCardMassage: false}

        default:
            return state
    }
}