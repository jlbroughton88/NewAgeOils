import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"

 class ContactUs extends Component {
    render() {
        return (
            <MotherDiv>
                <ContactUsDiv>
                    <HContact>Contact Us</HContact>
                    <Address>NEW AGE OILS, LLC
914 CHAMPION FERRY ROAD
GAFFNEY, SC 29341
(864) 909-1964
info@newageoilsllc.com</Address>
                </ContactUsDiv>
                <Footer/>
            </MotherDiv>
        )
    }
}

export default ContactUs;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
`

const ContactUsDiv = styled.div`
    height: 100%;
    background-color: #568557;
    padding: 5%;
`

const HContact = styled.h1`
    margin: 0;
`

const Address = styled.p`
    
`