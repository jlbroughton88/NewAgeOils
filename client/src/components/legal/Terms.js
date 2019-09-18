import React, { Component } from 'react'
import Footer from "../Footer"
import styled from "styled-components"
import { Col, Row } from "react-materialize"

class Terms extends Component {
    render() {
        return (
            <MotherDiv>
                <THeadDiv>
                    <THead>Terms and Conditions</THead>
                </THeadDiv>
                <TBodyDiv>
                    <TBody>Hello</TBody>
                </TBodyDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Terms;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
`

const THeadDiv = styled.div`
width: 100%;
height: 10%;
padding: 5%;
`

const TBodyDiv = styled.div`
width: 100%;
height: 80%;
padding: 5%;
`

const THead = styled.h1`
    margin: 0;
`

const TBody = styled.p`

`