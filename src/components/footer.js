import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "@fontsource/red-hat-text";

const Barney = styled("div")`
  width: 100%;

  background-color: #3b2a83;
`;

const FooterContainer = styled("div")`
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 55px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SubscriptionContainer = styled("form")`
  display: flex;
  flex-wrap: wrap;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

const EmailInput = styled("input")`
  background: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 12px;

  color: white;
  padding-left: 12px;
  padding-right: 12px;

  width: 220px;
  height: 44px;
  margin-bottom: 20px;

  @media screen and (min-width: 400px) {
    width: 320px;
  }

  @media screen and (min-width: 505px) {
    width: 435px;
  }

  @media screen and (min-width: 795px) {
    margin-bottom: 0px;
  }
`;

const JoinButton = styled("input")`
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 20px;
  margin-right: 20px;

  font-family: Red Hat Text;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #5e7d66;

  width: 121px;
  height: 44px;

  @media screen and (min-width: 643px) {
    margin-bottom: 0px;
  }
`;

const SocialList = styled("div")`
  display: flex;

  padding-right: 20px;
`;

const SocialIcon = ({ icon, link }) => (
  <a
    style={{ marginRight: "20px", fontSize: "25px" }}
    href={link}
    target="_blank"
  >
    <FontAwesomeIcon color="white" icon={icon} />
  </a>
);

const Footer = () => (
  <Barney>
    <FooterContainer>
      <SubscriptionContainer
        action="https://gmail.us17.list-manage.com/subscribe/post"
        method="POST"
        target="_blank"
      >
        <input type="hidden" name="u" value="606170b66eed272715dfb6802" />
        <input type="hidden" name="id" value="348ea0e3d0" />
        <EmailInput
          type="email"
          placeholder="Your email address"
          name="MERGE0"
          id="MERGE0"
        />
        <JoinButton type="submit" name="submit" value="JOIN US" />
        <input type="hidden" name="mc_signupsource" value="hosted" />
      </SubscriptionContainer>
      <SocialList>
        <SocialIcon
          icon={faFacebook}
          link="https://www.facebook.com/SLForganization"
        />
        <SocialIcon
          icon={faGithub}
          link="https://github.com/spread-love-foundation/website"
        />
        <SocialIcon
          icon={faInstagram}
          link="https://www.instagram.com/spread.love.foundation/"
        />
      </SocialList>
    </FooterContainer>
  </Barney>
);

export default Footer;
