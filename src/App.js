import React from 'react'
import './App.scss';
import Form from './components/Form';
import FormInfo from './components/FormInfo';
import Massage from './components/Massage';
import { useSelector } from 'react-redux';

function App() {
  const [state, setState] = React.useState({
    cardNumber: "",
    validCard: "",
    CVV2: ""
}); 

  const isChecked = useSelector(({cards}) => cards.isChecked); 
  const isFound = useSelector(({massages}) => massages.showErrorMassage); 

  return (
    <div className="container">
        <div className="form_wrap">
          <Form state={state} setState={setState}/>
          <div className="fake_div"></div>
        </div>
        <FormInfo state={state}/>
       { isChecked ? <Massage success text="Вы ввели верный номер карты"/> : null}
       {isFound ?  <Massage notFound text="Такой карты нет!"/> : null}
    </div>
  );
}

export default App;
