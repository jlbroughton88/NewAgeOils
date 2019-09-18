import React, { Component } from 'react'
import Footer from "../Footer"
import styled from "styled-components"
import { Col, Row } from "react-materialize"

class FDA extends Component {
    render() {
        return (
            <MotherDiv>
                <MainDiv>
                    <FHeadDiv>
                        <FHead>FDA Disclaimer</FHead>
                    </FHeadDiv>
                    <hr/>
                    <FBodyDiv>
                        <FBody></FBody>
                    </FBodyDiv>
                </MainDiv>
                <Footer />
            </MotherDiv>
        )
    }
}
export default FDA;

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

const FHeadDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const FBodyDiv = styled.div`
`

const FHead = styled.h3`
margin: 0;
margin-bottom: 2.5%;
`

const FBody = styled.p`

`