import React, { Component } from 'react'
import Footer from "../Footer"
import styled from "styled-components"
import { Col, Row } from "react-materialize"

class Terms extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                                    <THeadDiv>
                    <THead>Terms and Conditions</THead>
                </THeadDiv>
                <hr/>
                <TBodyDiv>
                    <TBody></TBody>
                </TBodyDiv>
                </MainDiv>

                <Footer />
            </MotherDiv>
        )
    }
}

export default Terms;

const MotherDiv = styled.div`
height: 100%;
min-height: 100vh;
background: #808080;
background: -moz-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
background: -webkit-linear-gradient(-45deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
background: linear-gradient(135deg, #808080 0%, #BDBDBD 42%, #FFFFFF 100%);
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

const THeadDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const TBodyDiv = styled.div`

`

const THead = styled.h3`
margin: 0;
margin-bottom: 2.5%;
`

const TBody = styled.p`

`