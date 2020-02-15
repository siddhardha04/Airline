import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./common/Header";
import { Footer } from "./common/Footer";
import Layout from "./common/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Layout></Layout>
      <Footer></Footer>
    </BrowserRouter>
  );
}
