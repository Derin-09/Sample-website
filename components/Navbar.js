import React from "react";
import {useState } from 'react';
function Navbar() {
    // adding the states 
      const [isActive, setIsActive]= useState(false);
    // adding the active class
      const toggleActiveClass = () => {
        setIsActive(!isActive);
      };
    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }
return(
    <body>
      
    <header>
      
          <div class="derin">Derin</div>
          <div class="others">
          <div class="them">Home</div>
          <div class="them" onClick={removeActive}><a href="#About">About</a></div>
          <div class="them" onClick={removeActive}><a href="#Portfolio">Portfolio</a></div>
          <div class="them" onClick={removeActive}><a href="#Contact">Contact </a></div>
      <div></div>
      </div>
    </header>
    </body>   
)
}
export default Navbar;