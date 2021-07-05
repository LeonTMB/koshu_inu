import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";

// import cryptikFooterLogo from "assets/images/logo-white.png";
import cryptikFooterLogo from "assets/images/kinu.jpg";
import data from "assets/data/footer";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets company-desc">
                <Image src={cryptikFooterLogo} alt="Koshu footer logo" />
                <Text>
                </Text>

                {/* <Box className="contact-info">
                  <Link href="#">
                    <a>
                      {" "}
                      <FaPhoneAlt /> contact@{" "}
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope /> +88 {" "}
                    </a>
                  </Link>
                </Box> */}
              </Box>
            </Col>
            {/* <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Service</Heading>
                <List>
                  <ListItem>
                    SYMBOL: KOSHU
                    // <Link href="#">
                    //   <a>Web Design</a>
                    // </Link>
                  </ListItem>
                  <ListItem>
                    NETWORK: BINANCE SMARTCHAIN
                    // <Link href="#">
                    //   <a>Web Development</a>
                    // </Link>
                  </ListItem>
                  <ListItem>
                    DECIMAL: 9
                    // <Link href="#">
                    //   <a>UXUI Design</a>
                    // </Link>
                  </ListItem>
                  // <ListItem>
                  //   <Link href="#">
                  //     <a>Graphics Design</a>
                  //   </Link>
                  // </ListItem>
                  // <ListItem>
                  //   <Link href="#">
                  //     <a>Software development</a>
                  //   </Link>
                  // </ListItem>
                  // <ListItem>
                  //   <Link href="#">
                  //     <a>Content</a>
                  //   </Link>
                  // </ListItem>
                </List>
              </Box>
            </Col> */}
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Quick Links</Heading>
                <List>
                  <ListItem>
                    <Link href="https://www.hotbit.io/exchange?symbol=KOSHU_USDT">
                      <a>Buy KOSHU</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.hotbit.io/exchange?symbol=KOSHU_USDT">
                      <a>Buy HOTBIT</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Lbank</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbf5957be42917e3f3b4fe214421c0571d21ad254">
                      <a>Pancakeswap v2</a>
                    </Link>
                  </ListItem>
                  {/* <ListItem>
                    <Link href="#">
                      <a>Team</a>
                    </Link>
                  </ListItem> */}
                  {/* <ListItem>
                    <Link href="#">
                      <a>Plan & Pricing</a>
                    </Link>
                  </ListItem> */}
                  {/* <ListItem>
                    <Link href="#">
                      <a>Content</a>
                    </Link>
                  </ListItem> */}
                  {/* <ListItem>
                    <Link href="#">
                      <a>Company News</a>
                    </Link>
                  </ListItem> */}
                </List>
              </Box>
            </Col>
            <Col className="lg-5 sm-6">
              <Box className="footer-widgets address">
                <Heading as="h2">Our Address</Heading>
                <Text id="wordbreak">
                  0xbf5957be42917e3f3b4fe214421c0571d21ad254
                </Text>
                <Text> SYMBOL: KOSHU</Text>
                <Text>NETWORK: BINANCE SMARTCHAIN</Text>
                <Text>DECIMAL: 9</Text>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <a> {item.icon} </a>
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy;2017 - {new Date().getFullYear()} Koshu Inu | All right reserved. </Text>
                {/* <Text as="span">
                  Designed By{" "}
                  <Link href="#">
                    <a></a>
                  </Link>
                </Text> */}
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
