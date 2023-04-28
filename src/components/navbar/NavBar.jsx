import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

import mealimg from "../../assets/mealdb.png";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.left}>
          Esteban Pastor Recipe Store
        </Link>
        <ul className={classes.center}>
          <Link to="/" className={classes.listItem}>
            Home
          </Link>
          <Link
            to="https://www.themealdb.com/about.php"
            className={classes.listItem}
          >
            About
          </Link>
          <Link
            to="https://www.themealdb.com/contact.php"
            className={classes.listItem}
          >
            Contact
          </Link>
        </ul>
        <div className={classes.right}>
          <img src={mealimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
