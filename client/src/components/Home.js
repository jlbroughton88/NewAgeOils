import React, { Component } from 'react'
import styled from "styled-components";
import Footer from "./Footer.js"
import { Col, Row } from "react-materialize"
import JarsOfOil from "./images/jarsOfOil.jpg"

class Home extends Component {
    render() {
        return (
            <MotherDiv>
                <Banner>
                    <BHeader>New Age Oils</BHeader>
                    <BSub>Discover the new age experience.</BSub>
                </Banner>
                <OurMission>
                    <MHeader>Our Mission</MHeader>
                    <MPara>New Age Oils, LLC is a Hemp Extraction Company located in Cherokee County, South Carolina.  We process industrial Hemp by extracting essential oils. New Age Oils occupies an 80,000 square ft. facility under one roof that has been repurposed for the use as a Hemp processing facility.

                            We are a growing Hemp processing company looking to the future to double our capacity in less than a year.  Your biomass will always be safely and securely stored in a climate controlled environment. The whole facility is covered with multiple cameras and a state of the art security system to insure the safety of your product.  We at New Age Oils, LLC know how much time and effort you have placed on growing a superior crop and we would love to be a part of your journey. Our whole team has 0oted the last few months of their lives to making sure that we have the safest, cleanest, and best facility in South Carolina.

                            We extract CBD oil by using the latest, safest, and cleanest technology. All of our Extraction Technicians have been certified in the CO2 extraction process. This program covered lab safety, CO2 solvent properties, system troubleshooting, best practices for operation, and standard operating procedures development.</MPara>
                <Img1 src={JarsOfOil}/>
                {/* <Img2 src={}></Img2> */}
                </OurMission>
                <Traits>
                    <Row className="row">
                        <Col className="col" s={4}>
                            <TraitDiv>
                                <TraitHeading>Extraction</TraitHeading>
                                <TraitPara>Our industrial scale extraction facility is one of the only legal operations to run both volatile and non volatile methods.</TraitPara>
                            </TraitDiv>
                        </Col>
                        <Col className="col" s={4}>
                            <TraitDiv>
                                <TraitHeading>Innovative</TraitHeading>
                                <TraitPara>Innovation is what drives us. Our state of the art genetics and organic refinement allow us to pursue the exceptional.</TraitPara>
                            </TraitDiv>
                        </Col>
                        <Col className="col" s={4}>
                            <TraitDiv>
                                <TraitHeading>Modern</TraitHeading>
                                <TraitPara>A fresh take on the Traditional. Crafting modern solutions for an ever growing industry. Set a higher standard for quality.</TraitPara>
                            </TraitDiv>
                        </Col>
                    </Row>
                </Traits>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Home;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
`
// BANNER
const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 30%;
    padding: 5%;
    // background-color: #416c3f;
    background: #0A610A;
    background: -moz-linear-gradient(-45deg, #0A610A 0%, #11A811 71%, #18F018 100%);
    background: -webkit-linear-gradient(-45deg, #0A610A 0%, #11A811 71%, #18F018 100%);
    background: linear-gradient(135deg, #0A610A 0%, #11A811 71%, #18F018 100%);
`

const BHeader = styled.h1`
    margin: 0;
    margin-bottom: 2.5%;
`

const BSub = styled.h4`
    margin: 0;
`

// OUR MISSION
const OurMission = styled.div`
    height: 70%;
    width: 100%;
    background-color: #11A811;
    padding: 5%;
    overflow: hidden;

`

const MHeader = styled.h2`
    margin: 0;
`

const MPara = styled.p``

const Img1 = styled.img`
height: 100%;
`

const Img2 = styled.img``

// TRAITS
const Traits = styled.div`
    height: 20%;
    width: 100%;
    background-color: #568557;
    color:white;
`
const TraitDiv = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
padding: 5%;
`
const TraitHeading = styled.h4`
    margin: 0;
`

const TraitPara = styled.p`

`