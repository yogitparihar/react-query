import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/album">Album</Link>
          <Link to="/rq-album">RQ Album</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
