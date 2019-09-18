import React, { Component } from 'react'
import Footer from "../Footer"
import styled from "styled-components"
import { Col, Row } from "react-materialize"

class Policy extends Component {
    render() {
        return (
            <MotherDiv>
                <PHeadDiv>
                    <FHead>Privacy Policy</FHead>
                </PHeadDiv>

                <PBodyDiv>
                    <PBody></PBody>
                </PBodyDiv>
                <Footer />
            </MotherDiv>
        )
    }
}

export default Policy;

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: lightgreen;
`

const PHeadDiv = styled.div`
width: 100%;
height: 10%;
padding: 5%;
`

const PBodyDiv = styled.div`
width: 100%;
height: 80%;
padding: 5%;
`

const FHead = styled.h1`
    margin: 0;
`

const PBody = styled.p`

`