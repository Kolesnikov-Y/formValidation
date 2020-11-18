import React from 'react'
import classNames from "classnames"
import { useDispatch } from 'react-redux'
import { canselVerify } from './redux/actions/cardMassage';
import { hideErrorMassage } from './redux/actions/MassageAction';


export default function Massage({success, notFound, text}) {
    const dispatch = useDispatch(); 

    const clickHandler = () => {
        dispatch(canselVerify()); 
    }
 
    const hideMassaegHandeler = () => {
        dispatch(hideErrorMassage()); 
    }
    

    if(notFound){
        return(
            <div className={classNames('massage', {
                "not-found": notFound
            } )}>
                <p>{text}</p>

                <button onClick={hideMassaegHandeler} className='btn btn-close'>закрыть</button>

            </div>
        )
    }

    if(success){
        return(
            <div className={classNames('massage', {
                "success": success
            } )}>
                <p>{text}</p>

                <button onClick={clickHandler} className='btn btn-close'>закрыть</button>

            </div>
        )
    }
    return (
        <div className={classNames('massage', {
            "success": success
        } )}>
            {text}
        </div>
    )
}