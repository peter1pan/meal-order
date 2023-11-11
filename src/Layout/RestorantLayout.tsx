import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./_restorantLayout.scss";
import HomeRestorant from "../Components/RestoranlarComponent/HomeRestorant";
const RestorantLayout = () => {
  return (
    <>
      <div>
        <HomeRestorant />
      </div>
      <nav className="restorant-nav">
        <Link to="/restoranlar/burger">Burger</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RestorantLayout;
