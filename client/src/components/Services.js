import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"
import Extractor from "./images/extractor.png"
import OilBowl from "./images/oilBowl.png"

class Services extends Component {
    render() {
        return (
            <MotherDiv>
                <ServicesDiv>
                    <HServicesDiv>
                        <HServices>Services</HServices>
                    </HServicesDiv>
                    <hr />
                    <OneServiceDiv>
                        <OneServiceHead>CO2 Extraction</OneServiceHead>
                        <OneServicePara>We extract CBD oil by using the latest, safest, and cleanest technology. <br /><br /> All of our Extraction Technicians have been certified in the CO2 extraction process. This program covered lab safety, CO2 solvent properties, system troubleshooting, best practices for operation, and standard operating procedures development. <br /><br />
                            CO2 extracting creates an environment by controlling temperature and pressure which allows us to extract only the molecules that we want to from a plant.  Using this method we do not have to get all of the oils and other materials mixed into a finished product like some of the other processes allow. We can concentrate only on compounds and molecules for extraction that have the largest monetary and health values to the open market.  CO2 extraction is also considered the safest and cleanest method for extracting the highest quality oil from plants. New Age Oils uses only state of the art equipment that takes dry Hemp and processes it into the purest form of CBD oil. <br /><br />
                            CO2 extraction is preferred over the Butane gas method and the Ethanol method because Butane gas and Ethanol are highly flammable and dangerous solvents. Unlike those methods, CO2 leaves no residual material thus requiring no purge of solvent contaminate after the extraction process has completed. The CO2 extraction method also uses less energy for higher yields.
                        </OneServicePara>
                        <br/>
                        <ImageDiv>
                            <ExtractorDiv>
                                <Img src={Extractor}></Img>
                            </ExtractorDiv>
                            <OilBowlDiv>
                                <Img src={OilBowl}></Img>
                            </OilBowlDiv>
                        </ImageDiv>
                    </OneServiceDiv>
                    <TwoServiceDiv>
                        <OneServiceHead>Need Seeds?</OneServiceHead>
                        <TwoServicePara>
                            We can also help you acquire seeds if you need a quality supplier. We look forward to earning your business! If you have any questions please feel free to give us a call at (864) 909-1964.
                        </TwoServicePara>
                    </TwoServiceDiv>
                </ServicesDiv>
                <FooterDiv>
                    <Footer />
                </FooterDiv>
            </MotherDiv>
        )
    }
}

export default Services;

const MotherDiv = styled.div`
    min-height: 100vh;
    background: #e4e4e4;
`

const ServicesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 12%;
    padding-right: 12%;
    
    @media only screen and (max-width: 1093px) {
        padding-left: 8%;
        padding-right: 8%;
    }

    @media only screen and (max-width: 795px) {
        padding-left: 6%;
        padding-right: 6%;
    }

`

const HServicesDiv = styled.div`
    margin-top: 8%;
`

const HServices = styled.h2`
    margin: 0;
    margin-bottom: 5%;
`

const OneServiceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5%;
    padding: 12%;
    padding-top: 5%;
    padding-bottom: 5%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);

    @media only screen and (max-width: 993px) {
        font-size: 0.95rem;
        padding-left: 12%;
        padding-right: 12%;
    }

    @media only screen and (max-width: 857px) {
        font-size: 0.90rem;
        padding-left: 10%;
        padding-right: 10%;
    }

    @media only screen and (max-width: 663px) {
        font-size: 0.85rem;
        padding-left: 8%;
        padding-right: 8%;
    }
`

const OneServiceHead = styled.h4`
    margin: 0;
`

const OneServicePara = styled.p`
    align-self: center;
`

const ImageDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    min-height: 140px;

    @media (min-width: 1000px) {
        justify-content: space-evenly;
    }

`

const ExtractorDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 295px;
z
`

const OilBowlDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    max-width: 235px;

`

const Img = styled.img`
    width: 100%;
    height: auto;
`

const TwoServiceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5%;
    padding: 12%;
    padding-bottom: 5%;
    padding-top: 5%;
    margin-bottom: 8%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);

    @media only screen and (max-width: 993px) {
        font-size: 0.95rem;
    }

    @media only screen and (max-width: 857px) {
        font-size: 0.95rem;
        padding-left: 8%;
        padding-right: 8%;
    }

    @media only screen and (max-width: 663px) {
        font-size: 0.90rem;
        padding-left: 5%;
        padding-right: 5%;
    }
`

const TwoServicePara = styled.p`
    align-self: center;
`

const FooterDiv = styled.div`
width: 100%;
height: 145px;
`