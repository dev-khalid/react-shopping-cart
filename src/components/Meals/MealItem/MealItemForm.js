import { useRef,useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input'; 
const MealItemForm = (props) => {
  const [amountIsValid,setAmoutnIsValid] = useState(true); 
  const amountInputRef = useRef(); 
  const submitHandler = (e) => { 
    e.preventDefault(); 
    const enterdAmount = Number(amountInputRef.current.value); 
    if(
      enterdAmount.length === 0 ||
      enterdAmount < 1 ||
      enterdAmount > 5 ||
      enterdAmount === NaN
    ) {
      setAmoutnIsValid(false); 
      return; 
    }
    props.onAddToCart(enterdAmount); 
  }; 
  return (
    <form className={classes.form} onSubmit={submitHandler}> 
      <Input 
        ref={amountInputRef}
        label = "Amount"
        input = {
          {
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
          }
        }
      /> 
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form> 
  ); 
}
export default MealItemForm; 