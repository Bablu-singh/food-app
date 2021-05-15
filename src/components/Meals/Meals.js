import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary></MealSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
