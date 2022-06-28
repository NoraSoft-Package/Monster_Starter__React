import React from "react";
import { images } from "../constants";
import PagesParent from "./Container/PagesParent";

const Home: React.FC = () => {
  return (
    <PagesParent>
      <img alt="React Developer" src={images.react} className="react" />
    </PagesParent>
  );
};

export default Home;
