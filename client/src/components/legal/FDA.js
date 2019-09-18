import React, { Component } from 'react'
import Footer from "../Footer"
import styled from "styled-components"
import { Col, Row } from "react-materialize"

 class FDA extends Component {
    render() {
        return (
            <MotherDiv>
                <FHeadDiv>
                    <FHead>FDA Disclaimer</FHead>
                </FHeadDiv>
                    

                
                <FBodyDiv>
                     <FBody></FBody>
                </FBodyDiv>
                   
                <Footer/>
            </MotherDiv>
        )
    }
}
export default FDA;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: lightgreen; 
`

const FHeadDiv = styled.div`
width: 100%;
height: 80%;
padding: 5%;
`

const FBodyDiv = styled.div`
width: 100%;
height: 80%;
padding: 5%;
`

const FHead = styled.h1`
    margin: 0;
`

const FBody = styled.p`

`