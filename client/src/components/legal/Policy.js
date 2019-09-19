import React, { Component } from 'react'
import Footer from "../Footer"
import styled from "styled-components"
import { Col, Row } from "react-materialize"

class Policy extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <PHeadDiv>
                    <FHead>Privacy Policy</FHead>
                </PHeadDiv>
                <hr/>

                <PBodyDiv>
                    <PBody></PBody>
                </PBodyDiv> 
                </MainDiv>

                <Footer />
            </MotherDiv>
        )
    }
}

export default Policy;

const MotherDiv = styled.div`
height: 100%;
min-height: 100vh;
background: #c2c2c2;
`

const MainDiv = styled.div`
height: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
padding: 5%;
flex:1;
`

const PHeadDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const PBodyDiv = styled.div`
`

const FHead = styled.h3`
margin: 0;
margin-bottom: 2.5%;
`

const PBody = styled.p`

`