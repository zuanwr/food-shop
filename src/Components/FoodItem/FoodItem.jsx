import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext} from "react";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems,addCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="a">
    <div className="food-item">
      <div className="food-item-container">
        <img className="food-item-img" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick = {() => addCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (

          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
    </div>
  );
};

export default FoodItem;
