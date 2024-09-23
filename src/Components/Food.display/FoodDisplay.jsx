import "./Food.display.css";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => {
          if (category=="ALL" || category === item.category){
            
            return (
              <FoodItem
                key={i}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
