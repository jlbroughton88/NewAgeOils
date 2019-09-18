import React, { Component } from 'react'
import styled from "styled-components";
import { Col, Row } from "react-materialize"
import linkedIn from "./images/socialMediaIcons/linkedin.png";
import gitHub from "./images/socialMediaIcons/githubLogoBlack.png";
import faceBook from "./images/socialMediaIcons/facebook.png";
import email from "./images/socialMediaIcons/email.png";
import instagram from "./images/socialMediaIcons/instagram.png";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <MotherDiv>
                <InfoRow>
                    <StayConnectedCol>
                        {/* <InfoHeaders>Stay Connected</InfoHeaders> */}
                        <SocialDiv>
                            
                                <ImgLink href=""><Img src={email} alt="" /></ImgLink>

                            <ImgLink href=""><Img src={faceBook} alt="" /></ImgLink>

                            <ImgLink href=""><Img src={linkedIn} alt="" /></ImgLink>

                            <ImgLink href=""><Img src={instagram} alt="" /></ImgLink>

                        </SocialDiv>
                    </StayConnectedCol>

                    <NavigateCol>
                        {/* <InfoHeaders>Navigate</InfoHeaders> */}
                        <LinkDiv>
                            <Link className="footerLink" to="/">Home</Link>
                            <Link className="footerLink" to="/about">About</Link>
                            <Link className="footerLink" to="/services">Services</Link>
                            <Link className="footerLink" id="footerContactBtn" to="/contact">Contact</Link>
                        </LinkDiv>
                    </NavigateCol>


                </InfoRow>
                <hr />
                <PolicyStuffRow>
                    <PolicyStuffCol>
                        <Link className="legalFooterLink" to="/policy">Privacy Policy</Link>
                    </PolicyStuffCol>
                    <PolicyStuffCol>
                        <Link className="legalFooterLink" to="/terms">Terms and Conditions</Link>
                    </PolicyStuffCol>
                    <PolicyStuffCol>
                        <Link className="legalFooterLink" to="/fda">FDA Disclaimer</Link>
                    </PolicyStuffCol>
                </PolicyStuffRow>


                <hr />
                <LegalStuffRow>
                    <LegalStuffCol>
                        <PLegal>New Age Oils LLC</PLegal>
                    </LegalStuffCol>
                    <LegalStuffCol>
                        <PLegal>All Rights Reserved 2019 ©</PLegal>
                    </LegalStuffCol>
                </LegalStuffRow>
            </MotherDiv>
        )
    }
}

export default Footer;

const MotherDiv = styled.div`
    height: 17%;
    width: 100%;
    background-color: #A9A9A9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 145px;
    border-top: #179D1C solid 1px;
`

const InfoRow = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const PolicyStuffRow = styled.div`
    width: 100%;
    height: 12%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LegalStuffRow = styled.div`
    width: 100%;
    height: 12%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StayConnectedCol = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
`

const NavigateCol = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const LinkDiv = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;    
    align-self: flex-start;

    @media only screen and (max-width: 660px) {
        width: 250px;
    }
`

const PolicyStuffCol = styled.div`
    margin: 3%;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
`

const LegalStuffCol = styled.div`
    margin: 3%;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
`

const PLegal = styled.p`
    margin: 0;
    align-self: center;
`

const SocialDiv = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;    
    align-self: flex-end;

    @media only screen and (max-width: 660px) {
        width: 250px;
    }
`

const ImgLink = styled.a`
    height: 100%
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;   
    margin-top: 0;
    margin-bottom: 0;
    align-self: center;

    @media only screen and (max-width: 660px) {
        width: 15%;
        margin: -3%;
        margin-top: 0;
        margin-bottom: 0;
    }

    @media only screen and (max-width: 525px) {
        width: 15%;
        margin: -3%;
        margin-top: 0;
        margin-bottom: 0;
    }
`

const Img = styled.img`
    height: 100%;
    width: auto;
   @media only screen and (max-width: 550px) {
        height: 85%;
    }
`