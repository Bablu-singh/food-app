import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);
  const addToCartHandler = (event)=>{
     cartContext.addItem({...props,amount: event})
  }
  return (
    <li className={classes.meal}>
      <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.dis}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm id={props.id} onAddToCart={addToCartHandler}></MealItemForm></div>
    </li>
  );
};
export default MealItem;
