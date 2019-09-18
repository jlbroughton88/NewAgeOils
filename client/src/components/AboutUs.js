import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer"

class AboutUs extends Component {
    render() {
        return (
            <MotherDiv>
                <AboutUsDiv>
                    <HAbout>Our Story, Our Mission</HAbout>
                    <hr />
                    <SubHead1Div>
                        <SubHead1>So, what is New Age Oils?</SubHead1>
                    </SubHead1Div>
                    <Para1Div>
                        <Para1></Para1>
                    </Para1Div>
                    <SubHead2Div>
                        <SubHead2></SubHead2>
                    </SubHead2Div>
                    <Para2Div>
                        <Para2></Para2>
                    </Para2Div>

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
            background: #808080;
        background: -moz-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
        background: -webkit-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
        background: linear-gradient(135deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
        `

const AboutUsDiv = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            height: 100%;
            padding: 5%;

`

const HAbout = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
`

const SubHead1Div = styled.div``

const SubHead2Div = styled.div``

const Para1Div = styled.div``

const Para2Div = styled.div``

const SubHead1 = styled.h5``

const SubHead2 = styled.h5``

const Para1 = styled.p``

const Para2 = styled.p``