import React from "react";
import {
  Services,
  Domains,
  Header,
  Hero,
  Contact,
  Footer,
  DomainsPrices,
  Review,
  Common,
} from "../../export";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DomainsPrices />
      <Domains />
      <Services />
      {/* <Review /> */}
      <Common />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
