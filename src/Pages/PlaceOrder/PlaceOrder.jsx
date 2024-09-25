import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Components/Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-oreder">
      <div className="place-order-left">
        <p className="title">delivery information</p>
        <div className="multi-field">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email Addres" />
        <input type="text" placeholder="Street" />
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder=" State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder=" Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <p>delivery free</p>
              <p>${getTotalCartAmount() === 0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>total</p>
              <p>${getTotalCartAmount() === 0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>proced to payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
