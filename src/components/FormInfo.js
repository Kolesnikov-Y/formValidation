import React from 'react'
import Massage from './Massage'
import {useSelector} from 'react-redux'

export default function FormInfo({state}) {

const cardMassage = useSelector(({massages}) => massages );                              

    console.log(state.cardNumber.length === 16)

    return (
        <div className="form-info">
            <div className="form-header">
                <div className="form-header__info">
                    - Введите номер карты.
                </div>
                {!cardMassage.showCardNumberMassage || state.cardNumber  ?  null : <Massage text="Проверьте номер карты"/> }
                 
            </div>
            <div className="form-verify">
                <div className="form-header__info">
                    - Укажите срок действия карты.
                </div>
               {!cardMassage.showVerifyCardMassage || state.validCard ?  null : <Massage text="Проверьте срок действия карты"/>}

            </div>
            <div className="form-C">
                <div className="form-header__info">
                    - Введите 3-х значный CVV2 код.
                </div>
               {!cardMassage.showCVV2Massage || state.CVV2  ? null : <Massage text="Проверьте код безопаснти. Он должен быть указан на обратной стороне карты"/> }
            </div>
        </div>
    )
}