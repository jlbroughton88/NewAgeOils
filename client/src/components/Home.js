import React, { Component } from 'react'
import styled from "styled-components";
import Footer from "./Footer.js"
import JarsOfOil from "./images/jarsOfOil.jpg"

class Home extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                <Banner>
                    <BHeader>New Age Oils</BHeader>
                    <BSub>Never Settle. Partner with the best.</BSub>
                    <BSub2>Crafting modern solutions for an ever growing industry.</BSub2>
                    <CallToAction>Learn More</CallToAction>
                </Banner>
                <hr />
                    
                <OurMission>
                    Our mission at New Age Oils is to 
                </OurMission>
                </MainDiv>
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

const MainDiv = styled.div`
    height: 100%    
    display: flex;
    flex-direction: column;
    background: #808080;
background: -moz-linear-gradient(-45deg, #808080 0%, #C4C4C4 50%, #E4E4E4 100%);
background: -webkit-linear-gradient(-45deg, #808080 0%, #C4C4C4 50%, #E4E4E4 100%);
background: linear-gradient(135deg, #808080 0%, #C4C4C4 50%, #E4E4E4 100%);
`

// BANNER

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 439px;
    padding: 3%;
    margin: 0;
    margin-bottom: -1%;


    @media only screen and (max-width: 657px) {
        height: 292px;
    }

    @media only screen and (max-height: 627px) {
        min-height: 365px;
    }

    @media screen and (win-width: 658px) {
        min-height: 402px;
    }

`

const BHeader = styled.h1`
    align-self: center;
    margin: 0;
    margin-bottom: 33px;
    font-size: 5rem;

    @media only screen and (max-width: 657px) {
        font-size: 4.5rem
        margin-bottom: 21px;
    }

    @media only screen and (max-width: 554px) {
        font-size: 4.2rem
        margin-bottom: 19px;
    }
`

const BSub = styled.h4`
    margin: 0;
    margin-bottom: 33px;
    font-size: 2.5rem;

    @media only screen and (max-width: 657px) {
        font-size: 2.2rem
        margin-bottom: 21px;
    }

    @media only screen and (max-width: 554px) {
        font-size: 1.8rem
        margin-bottom: 19px;
    }
`

const BSub2 = styled.h5`
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 33px;

    @media only screen and (max-width: 657px) {
        font-size: 1.2rem
        margin-bottom: 21px;
    }

    @media only screen and (max-width: 554px) {
        font-size: 1rem
        margin-bottom: 19px;
    }

`
const CallToAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a9a9a9;
    padding: 1.5%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    min-width: 133px;
    min-height: 57px;
    max-width: 133px;
    max-height: 57px;
    border: solid 1px #179D1C;  
`

// OUR MISSION

const OurMission = styled.div`
    height: 30%;
    width: 100%;
    padding: 5%;
    margin: 0;
`


// OUR MISSION


// TRAITS
