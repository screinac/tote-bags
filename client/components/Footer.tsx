import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 max-w-7xl mx-auto py-12">
      <div>Totebags</div>

      <ul className="flex flex-col gap-3">
        <li>PRODUCTOS</li>
        <li>CONTACTO</li>
        <li>PROMOCIONES</li>
      </ul>

      <ul className="flex flex-col gap-3">
        <li>
          <span className="flex items-center gap-2">
            <AiFillInstagram className="inline text-2xl" />
            Instagram_1
          </span>
        </li>
        <li>
          <span className="flex items-center gap-2">
            <AiFillInstagram className="inline text-2xl" />
            Instagram_1
          </span>
        </li>
      </ul>

      <ul className="flex flex-col gap-3">
        <li>
          <span className="flex items-center gap-2">
            <AiFillInstagram className="inline text-2xl" />
            Instagram_1
          </span>
        </li>
        <li>
          <span className="flex items-center gap-2">
            <AiFillInstagram className="inline text-2xl" />
            Instagram_1
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
