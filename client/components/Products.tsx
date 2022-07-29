import React from "react";
import { products } from "../data/products";

const Products = () => {
  return (
    <section className="py-10 pb-16 max-w-7xl mx-auto">
      <h2 className="text-5xl mb-10 text-center ">Encuentra tu Tote Bag</h2>
      <div className="grid grid-cols-4 justify-around">
        {products.map((product) => {
          return (
            <div className="text-center">
              <img
                className="w-auto mx-auto"
                src={product.image.toteImage_URL}
                alt={product.name}
              />
              <h3 className="text-2xl mt-3">{product.name}</h3>
              <p className="my-3 text-base w-2/3 mx-auto">
                {product.description}
              </p>
              <p className="text-2xl">{product.price} COP</p>
              <button className="inline-block py-3 px-7 mt-5 bg-mainGreen text-white">
                Comprar ahora
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
