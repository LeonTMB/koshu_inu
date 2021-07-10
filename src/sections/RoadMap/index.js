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
                            <Box>
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            SAFEBTC ROADMAP
                                        </Heading>
                                    </SectionBackground>
                                    <Text>
                                        The SafebBTC community and ecosystem aims at building a long-term,
                                        engaged, trusted and thriving play in the cryptocurrency world.
                                        Numerous developments have begun and SafeBTC intends to introduce
                                        constant updates as the community goes. The full roadmap is visible on
                                        our website and it’s constantly updated.
                                    </Text>
                                    <Text>
                                        SafeBtc is a community of upward-moving members geared towards
                                        excellence and maximum productivity. You can be a part of SafeBTC by
                                        joining its channels such as Twitter, Telegram and Medium.
                                    </Text>
                                </SectionTitle>
                            </Box>
                        </Col>
                        <Col className="lg-6 md-6 sm-12 order-md-1">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            KOSHU INU ROADMAP
                                        </Heading>
                                    </SectionBackground> 
                                </SectionTitle>

                                    <Box className="about-list">
                                        <Text as="span">Phase One</Text>
                                    </Box>
                                    
                                    <Text>
                                        1.  Website Development
                                        <br />
                                        2.  Presale
                                        <br />
                                        3.  Official launch on Pancake
                                        <br />
                                        4.  Listing on Hotbit
                                    </Text>

                                    <Box className="about-list">
                                        <Text as="span">Phase Two</Text>
                                    </Box>
                                    
                                    <Text>
                                        5.  Airdrop distribution to the first 10K airdrop members
                                        <br />
                                        6.  Website redesign and and upgraded
                                        <br />
                                        7.  Coingecko
                                        <br />
                                        8.  CoinMarketCap
                                    </Text> 

                                    <Box className="about-list">
                                        <Text as="span">Phase Three</Text>
                                    </Box>
                                    
                                    <Text>
                                        9.  Probit or Coinsbit Listing
                                        <br />
                                        10.  Product development
                                        <br />
                                    </Text> 
                                
                            </Box>
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        
                        <Col className="sm-12 md-10 offset-md-1">
                            <Box className="text-center">
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
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default RoadMap;