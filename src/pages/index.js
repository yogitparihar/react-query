import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/album'>Album</Link>
            </li>
            <li>
              <Link to='/rq-album'>RQ Album</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};
