import React from "react";

import Layout from "../../components/Layouts/Layout.js";
import "../../styles/HomeStyles.css";

import "../../styles/HeaderStyles.css";

import Section1 from "./Section1.js";

function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />
      </Layout>
    </>
  );
}

export default Home;
