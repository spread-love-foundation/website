import React from "React"
import styled from "@emotion/styled";
import arrow from "../../icons/Vector.svg"
import { Link } from "gatsby"

const Background = styled("div")`
    position: relative;
    width: 100%;
    height: 100vh;
    
    background: url(${props => props.background}) no-repeat;
    background-size: cover;
`

// position: relative;
// z-index = 1;
// padding-top: 3em;
//     padding-bottom: 3em;
//     margin: auto auto;
//     max-width: 830px;

//    margin: 0 auto;
//
const ContentContainer = styled("div")`
    position: relative;
    top: 220px;
    left: 195px;
    max-width: 830px;
    height: 90%;
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    max-width: 300px;
    display: flex;

    :hover{
        text-decoration: none;
    }
`

//max-width: 830px;
const Content = styled("div")`
    padding-top: 3em;
    padding-bottom: 2em;

    h1 {
        font-family: DM Serif Text;
        font-style: normal;
        font-weight: normal;
        font-size: 58px;
        line-height: 77px;
        color: #FFFFFF
    }

`
const LearnMore = styled.p`
        font-family: DM Serif Display;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 66px;
        background: linear-gradient(180deg,rgba(255,255,255,0) 91%, rgba(85, 224, 226, 0.6) 50%);

        color: #FFFFFF;

        :hover{
            text-decoration: none;
        }
`

const coverPhoto = (props) => {
    return <Background background = {props.url}>
                <ContentContainer>
                    <Content>
                        <h1>Invest in your youth, and watch as the love you give to them is spread onto others.</h1>
                    </Content>
                    <StyledLink to="/about-us">
                        <LearnMore>Learn More</LearnMore>
                        <img style={{paddingLeft: "25px"}} src={arrow} alt=''/>
                    </StyledLink>
                </ContentContainer>
        </Background>
}

export default coverPhoto