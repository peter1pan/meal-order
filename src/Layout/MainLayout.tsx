import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./_mainLayout.scss";

const MainLayout = () => {
  return (
    <section className="nav-section">
      <nav className="NavLink">
        <Link to="/">AnaSayfa</Link>
        <Link to="/restoranlar">Restoranlar</Link>
        <Link to="/sepet">Sepet</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
