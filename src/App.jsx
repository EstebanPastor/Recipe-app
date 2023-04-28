import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import RecipeDetails from "./components/recipe_details/RecipeDetails";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" exact={true} element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
