import React from "react"
import styled from "@emotion/styled"
import insta from "../icons/insta-logo.png"

const Barney = styled("div")`
    margin-top: 400px;
    width: 100%;
    height: 20vh;

    background-color: #3B2A83;
`

const FooterContainer = styled("div")`
    padding-top: 80px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const SubscriptionContainer = styled("form")`
    display: flex;
    flex-wrap: wrap;
    padding-left: 55px;

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
`

const EmailInput = styled("input")`
    background: rgba(255, 255, 255, 0.1);
    border: 1.5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 12px;

    color: white;
    padding-left: 12px;
    padding-right: 12px;

    width: 435px;
    height: 44px;
`

const JoinButton = styled("input")`
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;

    font-family: Red Hat Text;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #5E7D66;

    width: 121px;
    height: 44px;

`

const JoinText = styled("p")`
    font-family: Red Hat Text;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;

    padding: 10px;
    margin: auto;

    color: #5E7D66;
`

const SocialList = styled("div")`
    display: flex;

    padding-right: 20px;
`

const SocialIcon = ({src}) => (
    <a style={{marginRight:"20px"}} href="https://www.instagram.com/spread.love.foundation/">
        <img width="25" height="25" alt="Instagram Link" src={src}/>
    </a>
);

const Footer = () => (
    <Barney>
        <FooterContainer>
            <SubscriptionContainer action="https://gmail.us17.list-manage.com/subscribe/post" method="POST" target="_blank">
                <input type="hidden" name="u" value="606170b66eed272715dfb6802"/>
	            <input type="hidden" name="id" value="348ea0e3d0"/>
                <EmailInput type="email" placeholder="Your email address" name="MERGE0" id = "MERGE0"/>
                <JoinButton type="submit" name = "submit" value="JOIN US"/>
                <input type="hidden" name="mc_signupsource" value="hosted"/>
            </SubscriptionContainer>
            <SocialList>
                <SocialIcon src={insta}/>
            </SocialList>
        </FooterContainer>
    </Barney>
);

export default Footer;