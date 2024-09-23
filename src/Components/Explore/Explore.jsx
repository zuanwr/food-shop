import "./Explore.css";
import { menu_list } from "../../assets/assets";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>explore our menu</h1>
      <p className="menu-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, a.
        Error delectus illum eos corrupti asperiores deserunt quasi, excepturi
        deleniti.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (

            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "ALL" : item.menu_name
                )
              }
              key={index}
              className="menu-list-item"
            >
              
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Explore;
