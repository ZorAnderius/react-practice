import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound from "./pages/NotFound/NotFound";

import styles from "./App.module.css";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Reviews from "./components/Reviews/Reviews";
import { Toaster } from "react-hot-toast";
import Detail from "./components/Detail/Detail";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const App = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />}>
          <Route path="details" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
