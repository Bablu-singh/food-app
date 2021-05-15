import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  debugger;
  if (action.type === "ITEM_ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const item = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[item];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[item] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "ITEM_REMOVE") {
    debugger
    const item = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[item];
    const newTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems = [...state.items];

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id!==action.id);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems[item] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  return defaultCartState;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ITEM_ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "ITEM_REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
