import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"

 class ContactUs extends Component {
    render() {
        return (
            <MotherDiv>
                <ContactUsDiv>
                    <HContact>Contact Us</HContact>
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