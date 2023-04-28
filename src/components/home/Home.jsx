import Hero from "../hero/Hero";
import FavoriteFoods from "../favorite_foods/FavoriteFoods";
import Categories from "../categories/Categories";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <FavoriteFoods />
      <Categories />
    </div>
  );
};

export default Home;
