import React from "react";

import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Counter from "reusecore/Counter";

import AwardsSectionWrapper from "./awards.style";

const Awards = () => {
  return (
    <AwardsSectionWrapper>
      <Box className="awards-section">
        <Container>
            
            <br /> <br />
          <Row>
            <Col className="lg-5 md-6">
              <Heading as="h2">HOW TO ADD KOSHU INU ON TRUST WALLET </Heading>
              <Box>
                <Text>
                  Pretty easy, Open your trust wallet, and click on that button beside 
                  collectibles at the right hand side of trust wallet home page. 
                  After that, paste your contract address. You are most likely not to
                  get anything in return, so just click on add custom tokens.
                </Text>

                <Text>
                  It will direct you to where you will add manually, then change the network 
                  to smart chain and then click paste. The remaining spaces will be filled 
                  automatically and then click on save.
                </Text>
              </Box>
            </Col>
            <Col className="lg-7 md-6">
              <Box>
                <Heading> HOW TO BUY KOSHU INU </Heading>

                <Text>
                  Currently we have several options, you can buy on hotbit, just deposit 
                  your funds and swap it for Koshu Inu
                </Text>

                <Heading as="h3">Using Pancakeswap</Heading>

                <Text>
                  Go to Pancakeswap, connect your wallet to Pancakeswap, and change it to V2. Don’t forget,
                  your wallet should be in smart chain and not Etherium because Koshu 
                  Inu is built on Bsc, and not Eth. 
                </Text>

                <Text>
                  Done with that? Cool, let’s move on. Copy the contract address and paste it on the 
                  search button V2 and add. Done, now use your Bnb and swap it for any amount of Koshu Inu you want.
                </Text>

                <Text>
                  Remember, you can use Pancakeswap on Trust Wallet, Safepal, and Metamask. 
                </Text>

                <Text>
                  Another and Newest way of buying is Poocoin app 
                </Text>

                <Text>
                  Go to poocoin.app. Click on connect, then connect through trust wallet, 
                  and accept the authorization on Trust Wallet. Easy pizzy 
                </Text>
                <Text></Text>
                <Text></Text>

              </Box>
            </Col>
          </Row>

        </Container>
      </Box>
    </AwardsSectionWrapper>
  );
};

export default Awards;
