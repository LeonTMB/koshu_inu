import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'



import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import {SectionTitle, SectionBackground} from 'reusecore/SectionTitle';

import { FaGooglePlay, FaApple } from "react-icons/fa";

import aboutImage from 'assets/images/about/about.svg';



import AboutSectionWrapper from './about.style';




const About = () => {
    return (
        <AboutSectionWrapper id="about"> 
                <Container>
                    <Row>
                        <Col className="lg-5 md-6 sm-12">
                            <Image src={aboutImage} className="about-image" alt="cryptik about image" />
                        </Col>
                        <Col className="lg-6 offset-lg-1 md-6 sm-12">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            Protecting investor with high security
                                        </Heading>
                                    </SectionBackground>
                                    
                                    <Text>
                                        Safety and protection of token holders is the number 1 priority for the
                                        SafeBTC community and development team and necessary security
                                        measures are in place to ensure this is achieved. Some of which are:
                                    </Text> 

                                    <Box className="about-list">
                                        <Text as="span">Ownership renounced</Text>
                                        <Text as="span">First Audit completed with to results</Text>
                                        <Text as="span">Second  Audit in progress</Text>
                                    </Box>
                                    
                                    <Text>
                                        These mechanisms are suitable as a way of giving users the needed
                                        assurance to invest in the network. More features are currently being
                                        developed for the efficacy of the platform.
                                    </Text>
                                </SectionTitle>

                                {/* <Box className="about-btn-wrapper">
                                    <Link href="#" ><a className="btn btn-fill"> <FaGooglePlay /> Google Play</a></Link>
                                    <Link href="#"><a className="btn"><FaApple /> Apple Store</a></Link>
                                </Box> */}
                            </Box>
                        </Col>
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default About;