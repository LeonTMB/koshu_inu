import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Button from "reusecore/Button";
import Input from "reusecore/Form/Input";
import { SectionTitle } from "reusecore/SectionTitle";

import SubscribeWrapper from "./subscribe.style";

const Subscribe = () => {
  return (
    <SubscribeWrapper id="contact">
      <Container>
        <Row>
          <Col className="col-12">
            <Box className="subscribe-box-bg">
              <Row>
                <Col className="lg-6 offset-lg-3 xs-12">
                  <SectionTitle>
                    <Heading> Don’t miss out, Stay updated </Heading>
                    <Text>
                      Sign up for updates and market news. Subscribe to our
                      newsletter and receive update about Koshu and crypto tips.
                    </Text>
                  </SectionTitle>
                </Col>
              </Row>
              <Row>
                <Col className="lg-8 offset-lg-2 xs-12">
                  <Box className="form-box">
                    <Input
                      type="text"
                      placeholder="Enter your email address . . ."
                    />
                    <Button>
                      <a href="https://eloshines.us6.list-manage.com/subscribe/post?u=ca579a4ea45be6f429ef3e412&amp;id=c739f77aca">
                        Subscribe</a>
                    </Button>
                  </Box>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Container>
    </SubscribeWrapper>
  );
};

export default Subscribe;
