import React from "react";

import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-9">
      <h2>Totebags</h2>

      <ul className="flex justify-between w-2/6">
        <li>PRODUCTOS</li>
        <li>CONTACTO</li>
        <li>PROMOCIONES</li>
      </ul>

      <div className="flex justify-between">
        <AiFillInstagram />
        <AiFillInstagram />
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default Navbar;
