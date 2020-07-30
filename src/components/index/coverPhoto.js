import React from "React"
import styled from "@emotion/styled";
import arrow from "../../icons/Vector.svg"
import { Link } from "gatsby"

const Background = styled("div")`
    width: 100%;
    height: 680px;

    @media screen and (min-height:675px){
        height: 100vh;
    }

    @media screen and (min-height:850px){
        height: 850px;
    }
    
    background: url(${props => props.background}) no-repeat;
`

const ContentContainer = styled("div")`
    position: relative;
    top: 40px;
    left: 40px;
    width: 270px;

    display: flex;
    flex-direction: column;

    @media screen and (min-width:350px){
        width: 300px;
    }

    @media screen and (min-width:386px){
        left: 60px;
    }

    @media screen and (min-width:483px){
        top: 60px;
        left: 80px;
        width: 400px;
    }

    @media screen and (min-width:600px){
        top: 120px;
        left: 80px;
        width: 500px;
        margin-right: none;
    }

    @media screen and (min-width:730px){
        left: 195px;
    }

    @media screen and (min-width:992px){
        top: 268px;
        width: 750px;
    }
    
    @media screen and (min-width:1040px){
        width: 830px;
    }
`

const StyledLink = styled(Link)`
    display: flex;

    :hover{
        text-decoration: none;
    }
`

const Content = styled("div")`

    @media screen and (min-width:600px){
        padding-bottom: 2em;
    }
    

    h1 {
        font-family: DM Serif Text;
        font-style: normal;
        font-weight: normal;
        font-size: 46px;

        @media screen and (min-width:483px){
            font-size: 58px;
        }

        line-height: 77px;
        color: #FFFFFF
    }

`
const LearnMore = styled.p`
        font-family: DM Serif Display;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;

        @media screen and (min-width:483px){
            font-size: 48px;
        }

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