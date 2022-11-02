import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Terminal from "./Terminal";
import Menu from "./Menu";
import "../../styles/index.css";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="layout bg-primary-bg min-h-screen text-primary-text">
      <div className="flex justify-between min-h-full">
        <aside className="hidden xl:block xl:w-1/5 xl:h-screen">
          <Menu />
        </aside>
        <aside className="w-full xl:w-3/5">
          <Navbar />
          <main className="content p-6">{children}</main>
          <Footer />
        </aside>
        <aside className="hidden xl:block xl:w-1/5 xl:h-screen">
          <Terminal />
        </aside>
      </div>
    </div>
  );
}
