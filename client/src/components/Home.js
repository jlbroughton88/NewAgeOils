import React, { Component } from 'react'
import styled from "styled-components";
import Footer from "./Footer.js"
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <Banner id="banner">
                        <BHeader>New Age Oils</BHeader>
                        <BSub>Never Settle. Partner with the best.</BSub>
                        <BSub2>Crafting modern solutions for an ever growing industry.</BSub2>
                        <Link className="callToActionLink" to="/services">
                            <CallToAction className="callToAction">Learn More</CallToAction>
                        </Link>
                        
                    </Banner>
                    <hr />
                    <OurMission>
                        <WhoDiv>
                            <WhoWeAreHeader>Who are we?</WhoWeAreHeader>
                            <WhoPara>
                                New Age Oils, LLC is a Hemp Extraction Company located in Cherokee County, South Carolina.  We process industrial Hemp by extracting essential oils.
                            We are a growing company looking to the future to double our capacity in less than a year. New Age Oils occupies an 80,000 square ft. facility under one roof that has been repurposed for the use as a Hemp processing facility.
                        </WhoPara>
                        </WhoDiv>
                        <MissionDiv>
                            <MissionHeader>Our Mission?</MissionHeader>
                            <MissionPara>
                                We extract CBD oil by using the latest, safest, and cleanest technology. All of our Extraction Technicians have been certified in the CO2 extraction process.
                                This program covered lab safety, CO2 solvent properties, system troubleshooting, best practices for operation, and standard operating procedures development.
                            </MissionPara>
                            <InitialDescription>
                                <br />
                                Your biomass will always be safely and securely
                                  stored in a climate controlled environment. The whole facility is covered with multiple cameras and a state of the art security system to insure the safety of your product.
                                <br />
                                <br />
                                We at New Age Oils, LLC know how much time and effort you have placed on growing a superior crop and we would love to be a part of your journey. Our whole team has 0oted the
                                last few months of their lives to making sure that we have the safest, cleanest, and best facility in South Carolina.
                            </InitialDescription>
                        </MissionDiv>
                        <WhyDiv>
                            <WhyHeader>Why Choose <br className="whyBreak" /> New Age Oils?</WhyHeader>
                            <WhyPara>New Age Oils LLC produces custom medicinal-grade cannabis extracts for cultivators, marijuana-infused product manufactures and dispensaries that do not have the will, capacity or proper licensing to produce their own concentrates.
                                <br/><br/>
                                Utilizing industry-leading techniques, our industrial scale extraction facility is one of the only legal operations to run both volatile and non volatile methods.
                            </WhyPara>
                        </WhyDiv>
                    </OurMission>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Home;

const MotherDiv = styled.div`
    height: 100vh;
    min-height: 100vh;

`

const MainDiv = styled.div`
    min-height: 100vh;
    min-width: 305px;
    display: flex;
    flex-direction: column;
    background: #c2c2c2;
    // background: -moz-linear-gradient(-45deg, #808080 0%, #C4C4C4 50%, #E4E4E4 100%);
    // background: -webkit-linear-gradient(-45deg, #808080 0%, #C4C4C4 50%, #E4E4E4 100%);
    // background: linear-gradient(135deg, #808080 0%, #C4C4C4 50%, #E4E4E4 100%);
`
// ------------
// ------------
// ------------
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
    color:#0f2027;

   font-family: 'Open Sans', sans-serif;
    


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

    @media only screen and (max-width: 693px) {
        font-size: 4.5rem
        margin-bottom: 21px;
    }

    @media only screen and (max-width: 582px) {
        font-size: 4.2rem
        margin-bottom: 19px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 3.8rem
        margin-bottom: 19px;
    }

    @media only screen and (max-width: 419px) {
        font-size: 3.4rem
    }

    @media only screen and (max-width: 362px) {
        font-size: 3.2rem
    }

    @media only screen and (max-width: 339px) {
        font-size: 2.9rem
    }
`

const BSub = styled.h4`
    margin: 0;
    margin-bottom: 33px;
    font-size: 2.5rem;

    @media only screen and (max-width: 693px) {
        font-size: 2.1rem
        margin-bottom: 21px;
    }

    @media only screen and (max-width: 582px) {
        font-size: 1.8rem
        margin-bottom: 19px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 1.5rem
    }

    @media only screen and (max-width: 419px) {
        font-size: 1.3rem
    }

    @media only screen and (max-width: 362px) {
        font-size: 1.22rem
    }

    @media only screen and (max-width: 339px) {
        font-size: 1.07rem
    }
`

const BSub2 = styled.h5`
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 33px;

    @media only screen and (max-width: 663px) {
        font-size: 1.2rem
        margin-bottom: 21px;
    }

    @media only screen and (max-width: 582px) {
        font-size: 1rem
        margin-bottom: 19px;
    }

    @media only screen and (max-width: 460px) {
        font-size: 0.9rem
        margin-bottom: 19px;
    }

    @media only screen and (max-width: 419px) {
        font-size: 0.8rem
    }

    @media only screen and (max-width: 362px) {
        font-size: 0.75rem
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.68rem
    }

`
const CallToAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0f2027;;
    color: #c2c2c2;
    padding: 1.5%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    min-width: 133px;
    min-height: 57px;
    max-width: 133px;
    max-height: 57px;
    border: solid 1px #179D1C;  


    @media only screen and (max-width: 460px) {
        min-width: 120px;
        min-height: 45px;
        max-width: 120px;
        max-height: 45px;
    }
`

// ------------
// ------------
// ------------
// OUR MISSION

const OurMission = styled.div`
    height: 30%;
    width: 100%;
    padding: 5%;
    margin: 0;
`

const WhoDiv = styled.div`
    margin-bottom: 5%;
    padding: 5%;
    padding-left: 10%;
    padding-right: 10%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    color:#0f2027;
 
 `

const WhoWeAreHeader = styled.h3`
    margin:0;
    margin-bottom: 5%;

    @media only screen and (max-width: 713px) {
        font-size: 2.5rem
    }

    @media only screen and (max-width: 420px) {
        font-size: 2.25rem;
    }

    @media only screen and (max-width: 339px) {
        font-size: 2.1rem;
    }
`

const WhoPara = styled.p`
    @media only screen and (max-width: 713px) {
        font-size: 0.95rem
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.90rem;
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.85rem;
    }
`

const MissionDiv = styled.div`
    margin-bottom: 5%;
    padding: 5%;
    padding-left: 10%;
    padding-right: 10%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    color:#0f2027;
`

const MissionHeader = styled.h3`
    margin: 0;
    margin-bottom: 5%;

    @media only screen and (max-width: 713px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 420px) {
        font-size: 2.25rem;
    }

    @media only screen and (max-width: 339px) {
        font-size: 2.1rem;
    }
`

const MissionPara = styled.p`
    margin: 0;

    @media only screen and (max-width: 713px) {
        font-size: 0.95rem
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.90rem;
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.85rem;
    }
`

const InitialDescription = styled.p`
    @media only screen and (max-width: 713px) {
        font-size: 0.95rem
    }

    @media only screen and (max-width: 420px) {
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.85rem;
    }
`

const WhyDiv = styled.div`
    margin-bottom: 5%;
    padding: 5%;
    padding-left: 10%;
    padding-right: 10%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    color:#0f2027;
`

const WhyHeader = styled.h3`
    margin: 0;
    margin-bottom: 5%;
    @media only screen and (max-width: 713px) {
        font-size: 2.5rem
    }

    @media only screen and (max-width: 420px) {
        font-size: 2.25rem;
    }

    @media only screen and (max-width: 364px) {
        font-size: 2.1rem;
    }
`

const WhyPara = styled.p`
    margin: 0;
    @media only screen and (max-width: 713px) {
        font-size: 0.95rem
    }

        @media only screen and (max-width: 339px) {
        font-size: 0.90rem;
    }

    @media only screen and (max-width: 339px) {
        font-size: 0.85rem;
    }
`


// TRAITS
