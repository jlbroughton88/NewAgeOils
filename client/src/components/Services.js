import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"

 class Services extends Component {
    render() {
        return (
            <MotherDiv>
                <ServicesDiv>
                    <HServices>Services</HServices>
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