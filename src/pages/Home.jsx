import React, { useState } from "react";
import TabbedInterfaces from '../components/TabbedInterfaces';

const Home = () => {
  const [url, setUrl] = useState("home");

  return (
    <>
      <TabbedInterfaces url={url} />
    </>
    );
};

export default Home;