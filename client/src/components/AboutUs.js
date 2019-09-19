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
                <FooterDiv>
                    <Footer />
                </FooterDiv>
            </MotherDiv>
        )
    }
}

export default AboutUs;

const MotherDiv = styled.div`
        min-height: 100vh;
        background: #808080;
        background: -moz-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
        background: -webkit-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
        background: linear-gradient(135deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
        `

const AboutUsDiv = styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 5%;
        flex:1;

`

const HAbout = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
`

const SubHead1Div = styled.div``

const SubHead2Div = styled.div``

const Para1Div = styled.div`
box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`

const Para2Div = styled.div``

const SubHead1 = styled.h5``

const SubHead2 = styled.h5``

const Para1 = styled.p``

const Para2 = styled.p``

const FooterDiv = styled.div`
width: 100%;
height: 143px;
`