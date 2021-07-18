import HeaderCartButton from './HeaderCartButton'; 

import classes from "./Header.module.css";
const Header = (props) => {
  return (
      <header className={classes.header}>
        <h1>Foods </h1>
        <HeaderCartButton onShow={props.onShowCart}/> 
      </header>
  );
};
export default Header; 