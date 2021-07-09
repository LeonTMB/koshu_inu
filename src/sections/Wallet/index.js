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
          <Col className="lg-5 md-4 xs-12">
            <Box className="wallet-image">
              {/* <Image src={walletImage} alt="cryptik wallet image" /> */}
              <Image src={walletImage} alt="cryptik wallet image" />
            </Box>
          </Col>
          <Col className="lg-6 offset-lg-1 md-8 xs-12">
            <Box className="wallet-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading> Cryptocurrency Environment </Heading>
                </SectionBackground>
                <Text>
                  Cryptos are used for transactions such as buying and selling goods and
                  services, as store of value, as ecosystem tokens and many other purposes.
                  This is made possible with the use of an online ledger with strong
                  cryptography. The use of cryptography makes it difficult to double-spend
                  or counterfeit. One defining feature is that it is not regulated by any
                  central authority, making it a tax-free operation system.
                  Cryptocurrencies wor by using Blockchain technology spread across
                  various computers.
                </Text>
                <Text>
                The blockchain is a digital record for transactions made with
                cryptocurrencies. It uses an E-wallet where these transactions are stored.
                The transactions are well secure and managed and to be a part of this
                network, platforms such as exchanges and peer-to-peer transactions are
                available. There are over 6,700 cryptocurrencies traded globally. The
                rising giant player in the cryptocurrency market is the decentralized
                crypto exchange system. It allows new coins to get listed for free,
                invariably allowing users new investment opportunities, friction-less and
                almost gas-free. DEX exchanges are fast, reliable, and easy to use.
                Another perk is that they come with amazing liquidity benefits,
                including users’ rewarding for helping the platform thrive. In this
                environment, SafeBTC is coming to the market combining the best
                benefits for institutional and retail investors. With the skyrocketing
                adoption of blockchain, delving into trending opportunities is a smart
                move for any investor
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
