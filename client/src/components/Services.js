import React, { Component } from 'react'
import styled from "styled-components"
import Footer from "./Footer.js"

 class Services extends Component {
    render() {
        return (
            <MotherDiv>
                <ServicesDiv>
                    <HServicesDiv>
                       <HServices>Services</HServices> 
                    </HServicesDiv>
                    
                    <hr />
                    <PServicesDiv>
                        <PServices>What we offer.</PServices>
                    </PServicesDiv>
                    
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
    padding: 3%;
    background: #808080;
    background: -moz-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
    background: -webkit-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
    background: linear-gradient(135deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
`

const ServicesDiv = styled.div`
    height: 100%;
    padding: 8%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HServicesDiv = styled.div``

const HServices = styled.h3`
    margin: 0;
    margin-bottom: 2.5%;
`

const PServicesDiv = styled.div``

const PServices = styled.h5`

`