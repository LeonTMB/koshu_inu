import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'



import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import {SectionTitle, SectionBackground} from 'reusecore/SectionTitle';

import aboutImage from 'assets/images/about/about.svg';



import AboutSectionWrapper from './about.style';




const RoadMap = () => {
    return (
        <AboutSectionWrapper id="about"> 
                <Container>
                    <Row>
                        <Col className="lg-5 md-6 sm-12 order-md-2">
                            {/* <Image src={aboutImage} className="about-image" alt="cryptik about image" /> */}
                            
                            <Box className="">
                                <SectionTitle>
                                    <Heading as="h3"> MESSAGE FROM THE TEAM TO HOLDERS </Heading>
                                </SectionTitle>

                                <Text>
                                    We know the market is highly volatile, but always know that you lose only when you sell,
                                    holding means you’ve not lost your money, only the value of your money reduced. Once you
                                    sell, it means you are settling for the loss which is not good enough. 
                                </Text>
                                <Text>
                                    Trust us and Trust the process, KOSHU INU is here to stay 
                                </Text>
                            </Box>
                        </Col>
                        <Col className="lg-6 md-6 sm-12 order-md-1">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            ROADMAP
                                        </Heading>
                                    </SectionBackground> 
                                </SectionTitle>

                                    <Box className="about-list">
                                        <Text as="span">Phase One</Text>
                                    </Box>
                                    
                                    <Text>
                                        1.  Website Development
                                        <br />
                                        2.  Presale in bounce swap
                                        <br />
                                        3.  Official launch in Pancake swap
                                        <br />
                                        4.  Listing in Hotbit exchange
                                    </Text>

                                    <Box className="about-list">
                                        <Text as="span">Phase Two</Text>
                                    </Box>
                                    
                                    <Text>
                                        5.  Website, Roadmap and Whitepaper re-design and update.
                                        <br />
                                        6.  Airdrop distribution to first 10k airdrop members
                                    </Text> 

                                    <Box className="about-list">
                                        <Text as="span">Phase Three</Text>
                                    </Box>
                                    
                                    <Text>
                                        7.  Coingecko listing
                                        <br />
                                        8.  Trust Wallet Logo application
                                        9.  Probit or Coinsbit Listing
                                        <br />
                                        10.  CoinMarketCap listing
                                        <br />
                                        11.  Product Development.
                                    </Text> 
                                
                            </Box>
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        
                        <Col className="sm-12 md-10 offset-md-1">
                        </Col>
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default RoadMap;