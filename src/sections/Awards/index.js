import React from "react";

import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Counter from "reusecore/Counter";

import data from "assets/data/awards";
import AwardsSectionWrapper from "./awards.style";

const Awards = () => {
  return (
    <AwardsSectionWrapper>
      <Box className="awards-section">
        <Container>
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
                  
                  <Text as="h4">Token Name: - KOSHU INU </Text>
                  <Text as="h4">Token Symbol: - KOSHU </Text>
                  <Text as="h4">Token type: - Bep20 (BSC Chain) </Text>
                </SectionTitle>
              </Box>
            </Col>

            <Col className="md-6 awards-col">
              <Box className="awards-item-wrapper">
                {data.awards.map((item, index) => (
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
            </Col>
          </Row>
        </Container>
      </Box>
    </AwardsSectionWrapper>
  );
};

export default Awards;
