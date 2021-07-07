import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

// import BannerImage from "assets/images/banners/banner-two/cryptik-banner-two-thumb.svg";
import BannerImage from "assets/images/banners/koshu_hero.png";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import {FaGithub} from 'react-icons/fa'

import keyIcon from 'assets/images/banners/banner-two/cryptik-banner-key-icon.svg';
import watchIcon from 'assets/images/banners/banner-two/cryptik-banner-watch-icon.svg';
import heartIcon from 'assets/images/banners/banner-two/cryptik-banner-heart-icon.svg';

import BannerWrapper from "./banner.style";

const BannerTwo = () => {
  return (
    <BannerWrapper>
      <img src={particleTopLeft} className="section__particle top-left" alt="koshu Inu particles"/>
      <img src={particleUnderLogo} className="section__particle two" alt="koshu Inu particles"/>
      <img src={prticleTopRight} className="section__particle top-right" alt="koshu Inu particles"/>
      <img src={particleBottomLeft} className="section__particle bottom-left" alt="koshu Inu particles"/>
      <img src={particleBottomRight} className="section__particle bottom-right" alt="koshu Inu particles"/>
      <Container>
      
        <Row>
          <Col className="lg-5 md-8 xs-12 order-md-2">
            <img src={BannerImage} className="anner__thumb" alt="koshu Inu hero Logo"/>
          </Col>
          <Col className="lg-7 md-10 xs-12 order-md-1">
            <Box className="banner-content"> 
              <Heading>
                Koshu Inu,<br/>
                Father of Shib and Akita
              </Heading>
              <Text as="span" className="description">
                KOSHU is an experiment in a decentralized spontaneous community building.
                KOSHU token is our first token and allows users to hold Billions or even Trillions of them.
                BEP_20 ONLY token can remain well under a penny and still outpace in a small amount of time
                Popular worldwide, and already up thousands of percent.
              </Text>

              <Box className="coin-info">
                <Box>
                  <Image src={keyIcon} alt="crypto banner icon" />
                  <Text>Accessible</Text>
                </Box>
                <Box>
                  <Image src={watchIcon} alt="crypto banner icon" />
                  <Text>Growth</Text>
                </Box>
                <Box>
                  <Image src={heartIcon} alt="crypto banner icon" />
                  <Text>Trustworthy</Text>
                </Box>
              </Box>

              <Box className="banner-btn">
                <Link href="#">
                  <a className="btn btn-fill"> 
                  {/* <FaGithub />  */}
                  Buy Koshu</a>
                </Link> 
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

export default BannerTwo;
