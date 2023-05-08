import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Genres from "./genres";

const Layout = ({ children }) => {
  return (
    <html>
      <title>Movies</title>
      <body>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <aside className="col-auto px-0 m-0">
              <Genres />
            </aside>
            <section className="col p-0">{children}</section>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
