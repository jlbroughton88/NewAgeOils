import React, { Component } from 'react'
import styled from "styled-components";
import Footer from "./Footer.js"
import { Col, Row } from "react-materialize"

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
                    <MPara>Mission Paragraph</MPara>
                </OurMission>
                <Traits>
                    <Row className="row">
                        <Col className="col" s={4}>
                            <TraitDiv>
                                <TraitHeading>Extraction</TraitHeading>
                            </TraitDiv>
                        </Col>
                        <Col className="col" s={4}>
                            <TraitDiv>
                                <TraitHeading>Innovative</TraitHeading>
                            </TraitDiv>
                        </Col>
                        <Col className="col" s={4}>
                            <TraitDiv>
                                <TraitHeading>Modern</TraitHeading>
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
    width: 100%;
    height: 30%;
    padding: 5%;
    background-color: #416c3f;
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
    background-color: #568557;
    padding: 5%;
`

const MHeader = styled.h2`
    margin: 0;
`

const MPara = styled.p`

`

// TRAITS
const Traits = styled.div`
    height: 30%;
    width: 100%;
    background-color: #568557;
    color:white;
`
const TraitDiv = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: flex-start;
padding: 5%;
`
const TraitHeading = styled.h4`
    margin: 0;
`

