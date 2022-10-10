import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../styles/global.scss";
import "../../styles/content.scss";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="layout">
      <div className="main-container">
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}