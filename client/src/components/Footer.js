import React, { Component } from 'react'
import styled from "styled-components";
import { Col, Row } from "react-materialize"
import linkedIn from "./images/socialMediaIcons/linkedin.png";
import gitHub from "./images/socialMediaIcons/githubLogoBlack.png";
import faceBook from "./images/socialMediaIcons/facebook.png";
import email from "./images/socialMediaIcons/email.png";

class Footer extends Component {
    render() {
        return (
            <MotherDiv>
                <Row className="InfoRow">
                    <Col s={4} className="stayConnectedCol">
                        <InfoHeaders>Stay Connected</InfoHeaders>
                        <SocialDiv>
                            <Img src={email} alt="" />
                            <Img src={faceBook} alt="" />
                        </SocialDiv>

                    </Col>
                    <Col s={4} className="shortOfferCol">
                        <InfoHeaders>Committed to helping</InfoHeaders>
                    </Col>
                    <Col s={4} className="navigateCol">
                        <InfoHeaders>Navigate</InfoHeaders>
                    </Col>
                </Row>
                <hr />
                <Row className="copyrightStuffRow">
                    <Col className="copyrightStuffCol">
                        <PCopy>Privacy Policy</PCopy>
                    </Col>
                    <Col className="copyrightStuffCol">
                        <PCopy>Terms and Conditions</PCopy>
                    </Col>
                    <Col className="copyrightStuffCol">
                        <PCopy>FDA Disclaimer</PCopy>
                    </Col>
                    <Col className="copyrightStuffCol">
                        <PCopy>Contact Us</PCopy>
                    </Col>
                </Row>
                <hr />
                <Row className="legalStuffRow">
                    <Col className="legalStuffCol">
                        <PLegal>New Age Oils LLC</PLegal>
                    </Col>
                    <Col className="legalStuffCol">
                        <PLegal>|</PLegal>
                    </Col>
                    <Col className="legalStuffCol">
                        <PLegal>All Rights Reserved 2019 ©</PLegal>
                    </Col>
                </Row>
            </MotherDiv>
        )
    }
}

export default Footer;

const MotherDiv = styled.div`
    height: 25%;
    width: 100%;
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InfoHeaders = styled.p`
    font-weight: bold;
`

const PCopy = styled.p`
    margin: 0;
    align-self: center;
`

const PLegal = styled.p`
    margin: 0;
    align-self: center;
`

const SocialDiv = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Img = styled.img`
    height: 100%;
    width: auto;
`