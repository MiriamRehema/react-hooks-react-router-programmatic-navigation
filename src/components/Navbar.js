import React from "react";
import {  useHistory } from "react-router-dom";

/*const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};*/

function Navbar({ onLogout }) {
  const history = useHistory();

  function handleClick() {
    onLogout();
    history.push("/login");
  }

  return (
    <nav>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
}
export default Navbar;