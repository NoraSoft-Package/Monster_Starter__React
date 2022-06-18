import React, { Fragment } from "react";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      {/* Routes Or Components */}
      <Footer />
    </Fragment>
  );
};

export default App;
