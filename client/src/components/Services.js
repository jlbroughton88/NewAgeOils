import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"

 class Services extends Component {
    render() {
        return (
            <MotherDiv>
                <ServicesDiv>
                    <HServices>Services</HServices>
                    <PServices>We extract CBD oil by using the latest, safest, and cleanest technology. All of our Extraction Technicians have been certified in the CO2 extraction process. This program covered lab safety, CO2 solvent properties, system troubleshooting, best practices for operation, and standard operating procedures development.

CO2 extracting creates an environment by controlling temperature and pressure which allows us to extract only the molecules that we want to from a plant.  Using this method we do not have to get all of the oils and other materials mixed into a finished product like some of the other processes allow. We can concentrate only on compounds and molecules for extraction that have the largest monetary and health values to the open market.  CO2 extraction is also considered the safest and cleanest method for extracting the highest quality oil from plants. New Age Oils uses only state of the art equipment that takes dry Hemp and processes it into the purest form of CBD oil 

CO2 extraction is preferred over the Butane gas method and the Ethanol method because Butane gas and Ethanol are highly flammable and dangerous solvents. Unlike those methods, CO2 leaves no residual material thus requiring no purge of solvent contaminate after the extraction process has completed. The CO2 extraction method also uses less energy for higher yields.</PServices>
                </ServicesDiv>
                <Footer/>
            </MotherDiv>
        )
    }
}

export default Services;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
`

const ServicesDiv = styled.div`
    height: 100%;
    background-color: #568557;
    padding: 5%;
`

const HServices = styled.h1`
    margin: 0;
`

const PServices = styled.p`

`