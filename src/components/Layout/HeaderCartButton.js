import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const onClickHandler = () => {
    props.onClick();
  };
  const { items } = cartCtx;
  const [btnOn, setButtonOn] = useState(false);
  const btnClasses = `${classes.button} ${btnOn ? classes.bump : ""} `;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonOn(true);
    const timer = setTimeout(() => {
      setButtonOn(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const redusedItem = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={btnClasses} onClick={onClickHandler}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{redusedItem}</span>
    </button>
  );
};

export default HeaderCartButton;
