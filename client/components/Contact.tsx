import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="py-14 bg-bgGreen text-white ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl">Contáctanos</h2>
        <div className="flex">
          <form className="py-10 w-1/2" action="">
            <div className="flex items-center">
              <label
                htmlFor="name"
                className="w-24 px-6 py-1 bg-white text-black border-2 border-white rounded-bl-full rounded-tl-full"
              >
                nombre
              </label>
              <input
                className="py-1 px-5 w-full bg-transparent border-2 border-white rounded-tr-full rounded-br-full outline-none"
                type="text"
                name="name"
              />
            </div>
            <div className="flex items-center ">
              <label
                htmlFor="email"
                className="w-24 my-6 px-6 py-1 bg-white text-black border-2 border-white rounded-bl-full rounded-tl-full"
              >
                e-mail
              </label>
              <input
                className="py-1 px-5 w-full bg-transparent border-2 border-white rounded-tr-full rounded-br-full outline-none"
                type="email"
                name="email"
              />
            </div>
            <textarea
              className="w-full py-2 px-5 h-40 bg-transparent border-2 border-white resize-none outline-none placeholder:text-white rounded-tr-xl rounded-br-xl rounded-bl-xl"
              placeholder="Escribe tu mensaje..."
            ></textarea>
            <button className="w-24 block mt-5  px-6 py-1 bg-white text-black border-2 border-white rounded-full">
              Enviar
            </button>
          </form>

          {/* 2 section */}
          <div className="mx-auto text-center my-auto">
            <span className="mb-3 flex items-center gap-2">
              <AiFillInstagram className="inline text-2xl" />
              correo@gmail.com
            </span>
            <span className="mb-14 flex items-center gap-2">
              <AiFillInstagram className="inline text-2xl" />
              Instagram_1
            </span>
            <span className="mb-3 flex items-center gap-2">
              <AiFillInstagram className="inline text-2xl" />
              correo@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <AiFillInstagram className="inline text-2xl" />
              Instagram_1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
