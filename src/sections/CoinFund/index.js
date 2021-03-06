import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import blockchain from "assets/images/kinu_assets/blockchain.jpg";

import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";

const CoinFund = () => {
  const settings = { 
    count: 5432560,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  };

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
                <Image src={blockchain} alt="Blockchain" />
            </Box>
          </Col>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                  BLOCK CHAIN TECHNOLOGY 
                  </Heading>
                </SectionBackground>
                <Text>
                  Decentralization is not a new concept. When building a technology solution, three primary
                  network architectures are typically considered: centralized, distributed, and decentralized. While
                  blockchain technologies often make use of decentralized networks, a blockchain application
                  itself cannot be categorized simply as being decentralized or not. Rather, decentralization is a
                  sliding scale and should be applied to all aspects of a blockchain application. By decentralizing
                  the management of and access to resources in an application, greater and fairer service can be
                  achieved. Decentralization typically has some tradeoffs such as lower transaction throughput, but
                  ideally, the tradeoffs are worth the improved stability and service levels they produce. 
                </Text>
              </SectionTitle>

              {/* <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaBitcoin />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcMastercard />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcVisa />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcDiscover />{" "}
              </Text>
              </Box> */}

              <Box className="btn-wrapper">
                <Link href="#">
                  <a className="btn btn-fill">Buy Token</a>
                </Link>
              </Box>
            </Box>
          </Col>
          <Col className="lg-6 md-12 ">
                  <Heading>
                  HISTORY OF SAFEBTC AND THE WAY FORWARD 
                  </Heading>
            <Box className="coin-fund-content-left">
              <Text>
                SafeBTC was established in March 2021, with its 50% of supply burned
                and ownership renounced. It listed on PancakeSwap shortly after and
                marketing started right away. Communities have grown to tens of
                thousands and there is no end in sight. Next developments include live
                charts, a dex pad, a multi-platform wallet, prices aggregator,
                merchandise, NFT launches and more.
              </Text>
            </Box>
          </Col>
          {/* <Col className="lg-6 md-12 ">
                  <Heading>
                  BLOCK CHAIN TECHNOLOGY 
                  </Heading>
            <Box className="coin-fund-content-left">
                <Image src={blockchain} alt="Blockchain" />
            </Box>
          </Col> */}
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text> Last moment to grab the token </Text>
              <CountdownTimer {...settings} />
            </Box>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$5,097</Text>
              </Box>
              <Text as="span">$11,931</Text>
            </Box>

          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  );
};

export default CoinFund;
