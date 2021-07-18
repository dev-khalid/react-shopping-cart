import classes from './HeaderCartButton.module.css'; 
import { useContext,useState,useEffect } from 'react';
import CartContext from '../../Store/cart-context';
const HeaderCartButton = (props) => { 
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false); 
  
  const cartCtx = useContext(CartContext); 
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount; //curNumber will start with 0 and will remember the result of a certain operation and ultimately return 
    //the value to the reduce function 
  },0); 
  const {items} = cartCtx; 

  const btnClasses = `${classes.button} ${btnIsHighlighted?classes.bump:''}`; 
  useEffect(()=>{
    if(items.length===0) {
      return; 
    } 
    setBtnIsHighlighted(true); 
    const timer = setTimeout(()=> {
      setBtnIsHighlighted(false); 
    },300); 
    return () => {
      clearTimeout(timer); 
    }
  },[items]); 
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>  

      </button> 
  )
}
export default HeaderCartButton; 