import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer"

class AboutUs extends Component {
    render() {
        return (
            <MotherDiv>
                <AboutUsDiv>
                    <HAbout>About Us</HAbout>
                </AboutUsDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default AboutUs;

const MotherDiv = styled.div`
            height: 100%;
            width: 100%;
        `

const AboutUsDiv = styled.div`
            height: 100%;
            background-color: #568557;
            padding: 5%;
`

const HAbout = styled.h1`
    margin: 0;
`