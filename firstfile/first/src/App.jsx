import Nav from "./components/nav";
import Hero from "./components/hero";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

import React from "react";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Hero />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            position:"absolute",
            top:"40px",
            left:"60%"
          }}
        >
          <Sidebar/>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
