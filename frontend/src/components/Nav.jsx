import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="nav-bar">
      <ul style={{ textAlign: auth?.name ? "right" : "left" }}>
        {auth ? (
          <li>
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/add-product"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/update-product/:id"}>Update Product</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <Link to={"/logout"} onClick={logout}>
              Logout {`(${JSON.parse(auth)?.name})`}
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/signup"}> Signup</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
