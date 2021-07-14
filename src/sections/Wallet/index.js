import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Counter from "reusecore/Counter";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

// import walletImage from "assets/images/wallet-image.svg";
import walletImage from "assets/images/kinu_assets/stat.jpg";
import SectionParticle from "assets/images/particles/crypto-managment-wallet.svg";

import data from "assets/data/wallet";
import WalletSectionWrapper from "./wallet.style";

import awardsdata from "assets/data/awards";

const Wallet = () => {
  return (
    <WalletSectionWrapper>
      <Container>
        <img
          src={SectionParticle}
          className="section__particle"
          alt="cryptik"
        />
        <Row>
          <Col className="md-10 offset-md-1">
            <Box className="text-center">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">Our Vision</Heading>
                </SectionBackground>
              </SectionTitle>

              <Text>
                According to many Japanese use these types of dog for their different uses so our team decide to
                have a market of selling these types of Dogs like Akita,Shiba Inu and others. 
              </Text>
              <Text>
                We are not an NGO, so we are only working towards the interest of our community and making
                sure every holder of our token gets rewarded with profits at the long run 
              </Text>
            </Box>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col className="md-6">
            <Box className="awards-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">Community</Heading>
                </SectionBackground>
                <Text>
                  We are a community Driven token, which means that we are nothing 
                  without our community. The development team have burnt all of their 
                  tokens and participated like everyone else. Every trade contributes 
                  towards automatically generating liquidity that goes into multiple 
                  pools used by exchanges. 
                </Text> 
                
              </SectionTitle>
            </Box>
          </Col>
          <Col className="md-6">
            <Box>
                <Text as="p">Token Name: - KOSHU INU </Text>
                <Text as="p">Token Symbol: - KOSHU </Text>
                <Text as="p">Token type: - Bep20 (BSC Chain) </Text>
                <Text as="p">Decimals: - 9 </Text>
                <Text className="smaller-p" as="p">Contract Address: 0xbf5957be<span>42917</span>e3f3b4fe<span>214421</span>c0571d21ad254 </Text>
                <Text as="p">Token type: - Bep20 (BSC Chain)  </Text>
                <Text as="p">Total supply: - 100,000,000,000 </Text>
                <Text as="p">Burned: 6,000,000,000 </Text>
            </Box>
          </Col>

          {/* <Col className="md-6 awards-col">
            <Box className="awards-item-wrapper">
              {awardsdata.awards.map((item, index) => (
                <Box
                  className={`awards-item ${index === 3 ? `active` : ""}`}
                  key={index}
                >
                  <Text as="span" className="award-icon">
                    {" "}
                    {item.icon}{" "}
                  </Text>
                  <Box className="counter-text">
                    {" "}
                    <Counter end={item.count} suffix="+" />{" "}
                    <Text as="span">{item.body}</Text>{" "}
                  </Box>
                </Box>
              ))}
            </Box>
          </Col> */}
        </Row>

        <Row>
          <Col className="lg-5 md-4 xs-12">
            <Box className="wallet-image">
            </Box>
            <Box>
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">KNOW MORE ABOUT KOSHU INU</Heading>
                </SectionBackground>
              </SectionTitle>
              <Text>Consider other costs as you factor out the KOSHU INU price</Text>
              <Text>
                In addition to the initial fee plus food and vet expenses, there are many other costs to consider
                when looking at the Koshu Inu price. For starters, a Koshu Inu needs more training than other 
                breeds. It’s no secret that the breed is strong-willed and stubborn. A common phrase among
                Koshu parents is, “A Koshu will do what a Koshu wants.” 
              </Text>
              <Text></Text>
              <Text></Text>
            </Box>
          </Col>
          <Col className="lg-6 offset-lg-1 md-8 xs-12">
            <Box className="wallet-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading> How much are vet expenses? </Heading>
                </SectionBackground>
                <Text>
                  Overall, the Koshu is a healthy breed. This is an important thing to consider if you’re taking into
                  account the full Koshu Inu price. After all, vet bills aren’t cheap. 
                </Text>
                <Text>
                  If your dog isn’t spayed or neutered, you should definitely do that right away, unless you have
                  plans for breeding. This costs anywhere from $250-$500. 
                </Text>
                <Text>
                  Long-term, the most common health issues for the Koshu Inu are allergies, glaucoma, cataracts,
                  hip dysplasia, entropion and luxating patella 
                </Text>
                <Text>
                  The KOSHU INU is a breed of hunting dog from Japan. A small-to-medium breed, it is the
                  smallest of the six original and distinct spitz breeds of dog native to Japan. A small, alert, and
                  agile dog that copes very well with mountainous terrain and hiking trails, the KOSHU INU was
                  originally bred for hunting 
                </Text>
              </SectionTitle>

              {/* <Box className="wallet-info">
                {data.wallet.map((item, index) => (
                  <Box className="counter-item" key={index}>
                    <Counter end={item.count} suffix={item.suffixText} />
                    <Text>{item.body}</Text>
                  </Box>
                ))}
              </Box> */}
            </Box>
          </Col>
        </Row>
      </Container>
    </WalletSectionWrapper>
  );
};

export default Wallet;
