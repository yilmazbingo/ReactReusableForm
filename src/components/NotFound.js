import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div>
    404
    <NavLink to="/" activeClassName="is-active" exact={true}>
      GO Home
    </NavLink>
  </div>
);

export default NotFound;

let name = "tara";
if (true) {
  if (true) {
    let name = "ali";
    console.log(name);
  }
}
if (true) {
  console.log(name);
}
