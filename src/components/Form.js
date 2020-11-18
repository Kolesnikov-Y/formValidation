import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { verifyCard } from './redux/actions/cardMassage';
import { cardMassage, verifyMassage, cvvMassage, hideVerifyMassage, hideCardMassage, hideCVMassage, errorMassage, toDefault} from './redux/actions/MassageAction';

export default function Form ({state, setState}) {

    const dispatch = useDispatch(); 
    const allCards = useSelector(({cards}) => cards.cards)

    const verifyHandler = (cards, card) => {
        const needCard = cards.find(c => c.id === card.id); 
        if(cards.includes(needCard)){
            return true
        }else{
            return false
        }
    }

    const checkFunk = (name, length, func1, func2) => {
        if( name.length < length || name.length > length || !name) {
            dispatch(func1()); 
            console.log("ошибка из второй проверки", state)
            return false
        } else {
            dispatch(func2())
            return true
        }
    }

    function checkNumber () {
        checkFunk(state.cardNumber, 16, cardMassage, hideCardMassage)
    }
    function checkDate () {
        checkFunk(state.validCard, 4, verifyMassage, hideVerifyMassage)
    }
    function checkCV () {
        checkFunk(state.CVV2, 3, cvvMassage, hideCVMassage)
    }
    
    const submitHandler = e => {
        e.preventDefault(); 
        if(!state.cardNumber || !state.validCard || !state.CVV2 || state.cardNumber.length !== 16 || state.validCard.length !== 4){
            return false
        }
        if(state.cardNumber.length === 16 || state.validCard.length === 4 || state.CVV2.length === 3) {
            const card = {
                cardNumber: state.cardNumber, 
                validCard: state.validCard, 
                CVV2: state.CVV2, 
                id: +state.cardNumber + +state.validCard + +state.CVV2 
            }

            setState({...state, cardNumber: "",
                                validCard: "",
                                CVV2: ""})

            const verifyResult = verifyHandler(allCards, card); 

            if(verifyResult){
                dispatch(toDefault()); 
                dispatch(verifyCard()); 
                
            }else{
                dispatch(toDefault()); 
                dispatch(errorMassage())
            } 
        }
        else  {
            return false
        }
    }

    const funcHandler = e => {
        e.target.value = e.target.value.replace(/[^\d]/g,'')
    }

    const changeHandler = e => {
        setState({...state, [e.target.name]: e.target.value}); 
    } 

    return( 
        <form className="form" onSubmit={submitHandler}>
            <div className="input-container">
                <label htmlFor="cardNumber">Номер карты</label>
                <input className="cardNumberInput"
                type="text" 
                id='cardNumber'
                maxLength="16"
                onKeyUp={funcHandler}
                onClick={checkNumber} 
                onChange={changeHandler} 
                name="cardNumber" 
                placeholder="0000 0000 0000 0000" 
                value={state.cardNumber}/>
            </div>
            <div className="input-container">
                <label htmlFor="validCard">Срок действия</label>
                <div className="validCardInput__wrap">
                    <input className="validCardInput" 
                    type="text" 
                    id="validCard" 
                    maxLength="4"
                    onClick={checkDate} 
                    onKeyUp={funcHandler}
                    onChange={changeHandler} 
                    placeholder="00 00" 
                    name="validCard" 
                    value={state.validCard}/>
                    <span> мм/гг</span>
                </div> 
            </div>
            <div className="input-container last">
                <label htmlFor="CVV2">CVV2</label>
                <input  className="CVV2Input" 
                type="text" 
                id="CVV2" 
                maxLength='3' 
                onClick={checkCV} 
                onKeyUp={funcHandler}
                onChange={changeHandler} 
                name="CVV2" 
                placeholder="000" 
                value={state.CVV2}/>
            </div>

            <button className="btn btn-submit" type="submit" >Подтвердить</button>
      </form>
      )
}
