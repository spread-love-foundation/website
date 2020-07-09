import React from "React"
import styled from "@emotion/styled";

const Background = styled("div")`
    content: '';
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: -1;
    
    background: url(${props => props.background}) no-repeat;
    background-size: cover;
`
const Content = styled("div")`
    position: relative;
    padding-top: 3em;
    padding-bottom: 3em;
    margin: 0 auto;
    max-width: 830px;
`


const coverPhoto = (props) => {
    return <Background background = {props.url}>
                    <Content>
                        <h1>Hello World</h1>
                    </Content>
        </Background>
}

export default coverPhoto