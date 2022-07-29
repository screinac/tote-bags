import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
