import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>

            <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={'/home'}
          >
            Home
          </NavLink>

            <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={'/review'}
          >
            review
          </NavLink>

            <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={'/dashboard'}
          >
            Dashboard
          </NavLink>

            <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={'/blog'}
          >
            blog
          </NavLink>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;