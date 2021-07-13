import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import BannerThree from 'sections/BannerThree'
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Awards from "sections/Awards";
import UserMap from "sections/UserMap";
import Wallet from "sections/Wallet";
import Statistics from "sections/Statistics";
// import Stack from "sections/Stack"; 
// import Faq from "sections/Faq";
import Footer from "sections/Footer";

import FavIcon from "assets/images/fav-icon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>White Paper | Koshu Inu, Father of Shib and Akita</title>
        <meta name="Description" content="KOSHU is an experiment in a decentralized spontaneous community building. KOSHU token is our first token and allows users to hold Billions. BEP_20 ONLY token can remain well under a penny and still outpace in a small amount of time Popular worldwide, and already up thousands of percent." />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
      </Head>

      <GlobalStyle />
      <Navigation />
      <BannerThree />
      {/* <Service /> */}
      {/* <CoinFund /> */}
      {/* <About /> */}
      {/* <Awards /> */}
      {/* <UserMap /> */}
      <Wallet />
      {/* <Statistics /> */}
       {/* <Faq /> */}
      {/* <Stack /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default Home;