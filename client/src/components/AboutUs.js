import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer"

class AboutUs extends Component {
    render() {
        return (
            <MotherDiv>
                <AboutUsDiv>
                    <HAbout>Our Story, Our Mission</HAbout>
                    <SubHead1>New Age Oils, LLC is a Hemp Extraction Company located in Cherokee County, South Carolina. </SubHead1>
                    <Para1>We process industrial Hemp by extracting essential oils. New Age Oils occupies an 80,000 square ft. facility under one roof that has been repurposed for the use as a Hemp processing facility.  We extract CBD oil by using the latest, safest, and cleanest technology. All of our Extraction Technicians have been certified in the CO2 extraction process. This program covered lab safety, CO2 solvent properties, system troubleshooting, best practices for operation, and standard operating procedures development.</Para1>
                    <SubHead2>“New Age Oils is an Innovator in a limitless market with opportunity for all.”</SubHead2>
                    <Para2>We are a growing Hemp processing company looking to the future to double our capacity in less than a year.  Your biomass will always be safely and securely stored in a climate controlled environment. The whole facility is covered with multiple cameras and a state of the art security system to insure the safety of your product.  We at New Age Oils, LLC know how much time and effort you have placed on growing a superior crop and we would love to be a part of your journey. Our whole team has 0oted the last few months of their lives to making sure that we have the safest, cleanest, and best facility in South Carolina.  </Para2>
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

const SubHead1 = styled.h3``

const SubHead2 = styled.h3``

const Para1 = styled.p``

const Para2 = styled.p``