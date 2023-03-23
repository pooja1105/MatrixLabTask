import React from "react";

export default function NavBar() {
  const name = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "45px",
    paddingTop: "20px",
  };
  const name1 = {
    fontSize: "22px",
    fontWeight: "14px",
    color:'#fff',
    borderBottom:'none',
  };
  return (
    <nav>
      <ul style={name}>
        <a href="#" style={name1}>Home</a>
        <a href="#" style={name1}>Cities</a>
        <a href="#" style={name1}>News</a>
      </ul>
    </nav>
  );
}
