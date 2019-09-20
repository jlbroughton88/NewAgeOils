import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"
class ContactUs extends Component {
    render() {
        return (
            <MotherDiv>
                    <ContactUsDiv>
                        <HContact>Contact Us</HContact>
                        <hr />
                        <Address>
                            <CompanyDiv>
                               <Company>New Age Oils, llc</Company> 
                            </CompanyDiv>
                                <AddressDiv>
                                    <VisitUs>Visit Us!</VisitUs>
                                    <Street> 914 CHAMPION FERRY ROAD</Street>
                            <CityState>GAFFNEY, SC 29341</CityState>
                                </AddressDiv>
                            <PhoneEmailDiv>
                                <GetInTouch>Get In Touch!</GetInTouch>
                            <PhoneNum>(864) 909-1964</PhoneNum>
                            <EmailLink href="mailto:name@email.com">
                                <Email>info@newageoilsllc.com</Email>
                            </EmailLink>
                            </PhoneEmailDiv>

                        </Address>
                    </ContactUsDiv>
                <FooterDiv>
                    <Footer />
                </FooterDiv>
            </MotherDiv>
        )
    }
}

export default ContactUs;

const MotherDiv = styled.div`
    height: auto;
    width: 100%;
    background: #e4e4e4;
`

const ContactUsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 5%;    

    @media (max-width: 500px) {
        justify-content: center;
        min-height: 75vh;
    }

    @media (max-width: 400px) {
        justify-content: center;
        min-height: 75vh;
    }
`


const HContact = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
`

const Address = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10%;
    margin-top: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`

const CompanyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 105%;
    margin-bottom: 30px
`

const Company = styled.h4`
    margin: 0;
    align-self: flex-start

    @media only screen and (max-width: 500px) {
        font-size: 2.0rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.6rem;
    }
`

const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: flex-start;
    width: 105%;
    margin-bottom: 15px

    @media only screen and (max-width: 500px) {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 400px) {
        margin-bottom: 0;
    }
`

const VisitUs = styled.p`
    margin: 0;
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 1.50rem;
    font-weight: bold;

    @media only screen and (max-width: 500px) {
        font-size: 1.40rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.30rem;
    }
`

const Street = styled.p`
    margin-top: 3px;
    margin-bottom: 0;
    font-size: 1rem;
    margin-bottom: 0;

    @media only screen and (max-width: 500px) {
        font-size: 0.95rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.85rem;
    }
`

const CityState = styled.p`
    margin-top: 0;
    font-size: 1rem;

    @media only screen and (max-width: 500px) {
        font-size: 0.95rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.85rem;
    }
`

const PhoneEmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: flex-start;
    margin-top:0;
    width: 105%;

    @media only screen and (max-width: 500px) {
        margin-top: 0;
    }

    @media only screen and (max-width: 400px) {
        margin-top: 0;
    }
`

const GetInTouch = styled.p`
    margin: 0;
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 1.50rem;
    font-weight: bold;

    @media only screen and (max-width: 500px) {
        font-size: 1.40rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 1.30rem;
    }
`

const PhoneNum = styled.p`
    font-size: 1.05rem;
    margin-top: 3px;
    margin-bottom: 0;

    @media only screen and (max-width: 500px) {
        font-size: 0.95rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.85rem;
    }
`

const EmailLink = styled.a``

const Email = styled.p`
    margin-top: 0;
    font-size: 1.05rem;

    @media only screen and (max-width: 500px) {
        font-size: 0.95rem;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.85rem;
    }
`

const FooterDiv = styled.div`
    width: 100%;
    height: 143px;
`