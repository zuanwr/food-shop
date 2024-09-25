import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const Navigate = useNavigate();
    
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>items </p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={i}>
                <div className="cart-item-title cart-item-item" key={i}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <div className="icon">
                  <i onClick={()=> removeFromCart(item._id)} className='bx bx-x'></i>
                  </div>
                  {/* <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p> */}
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
        <button onClick={()=>Navigate("/order")} >proced to chekout</button>
        </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code. Enter it Here.</p>
          <div className="cart-promo-input">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
