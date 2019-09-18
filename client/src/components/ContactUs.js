import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"
class ContactUs extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <ContactUsDiv>
                        <HContact>Contact Us</HContact>
                        <hr />
                        <Address>
                            <Company>NEW AGE OILS, LLC</Company>
                            <Street> 914 CHAMPION FERRY ROAD</Street>
                            <CityState>GAFFNEY, SC 29341</CityState>
                            <PhoneNum>(864) 909-1964</PhoneNum>
                            <Email>info@newageoilsllc.com</Email>
                        </Address>
                    </ContactUsDiv>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default ContactUs;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
    background: #808080;
    background: -moz-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
    background: -webkit-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
    background: linear-gradient(135deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
`

const ContactUsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 5%;
`

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`

// const MapDiv = styled.div`
// width: '100%';
// height: '100%';
// display: flex;
// justify-content: flex-start;
// align-items: center;
// `

const HContact = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
`

const Address = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Company = styled.p`

`

const Street = styled.p``

const CityState = styled.p``

const PhoneNum = styled.p``

const Email = styled.p``