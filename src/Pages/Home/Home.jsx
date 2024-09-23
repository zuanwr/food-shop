import { useState } from "react";
import Explore from "../../Components/Explore/Explore";
import Header from "../../Components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../Components/Food.display/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div className="home">
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
