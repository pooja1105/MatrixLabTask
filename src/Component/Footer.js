import React from "react";
import "../Component/Footer.css";
export default function Footer() {
  const footerdiv = {
    height: "390px",
    width: "100%",
    background: "#000",
  };
 
  return (
    <footer>
      <div class="footer">
        <div class="contain">
          <div class="col">
            <h2>WEATHERAPP</h2>
          </div>
          <div class="col">
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="col">
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li>Home</li>
              <li>Cities</li>
              <li>News</li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li>Contact us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </footer>
  );
}
