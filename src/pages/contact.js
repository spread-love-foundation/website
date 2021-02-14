import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import "@fontsource/red-hat-text";
import "@fontsource/dm-serif-text";

const PageMargin = styled("div")`
  margin-left: 10%;
  padding-top: 5%;
`;

const Heading = styled("div")`
  font-family: DM Serif Text;
  font-size: 48px;
  line-height: 64px;

  @media screen and (min-width: 1000px) {
    line-height: 88px;
    font-size: 64px;
  }

  color: #54504e;
`;

const EmailRow = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  img {
    width: 22px;
    height: 22px;

    @media screen and (min-width: 450px) {
      width: 33px;
      height: 33px;
    }
  }

  p {
    font-family: Red Hat Text;
    font-size: 16px;
    flex-basis: 80%;
    padding-left: 22px;

    @media screen and (min-width: 450px) {
      font-size: 24px;
    }
  }
`;

const NewsletterBox = styled("div")`
  width: 100%;
  padding-bottom: 72px;
  background: #107e7e;
`;

const NewsletterText = styled("div")`
  font-family: Red Hat Text;
  font-size: 24px;
  line-height: 32px;

  margin-top: 52px;
  width: 70%;

  color: #ffffff;

  @media screen and (min-width: 450px) {
    font-size: 24px;
  }
`;

const SignUpButton = styled("div")`
  background: #3b2a83;
  border-radius: 31px;
  margin-top: 52px;
  width: 250px;

  @media screen and (min-width: 450px) {
    width: 320px;
  }

  p {
    text-align: center;

    font-family: Red Hat Text;
    font-size: 16px;
    line-height: 50px;
    color: #ffffff;

    @media screen and (min-width: 450px) {
        font-size: 24px;
      }
  }
`;

// TODO: make a reusable button for sign-up

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageMargin>
        <Heading>{"Contact Us"}</Heading>
        <br />
        <br />
        <br />
        <EmailRow>
          <img src="/icons/mail_icon.png"></img>
          <p>{"info@spreadlovefoundation.com"}</p>
        </EmailRow>
      </PageMargin>
      <NewsletterBox>
        <PageMargin>
          <Heading style={{ color: "#FFFFFF" }}>
            {"Keep up with our initiatives"}
          </Heading>
          <NewsletterText>
            {
              "Sign up for our newsletter to stay up to date with our current projects and initiatives. Feel free to contact us with any questions with the information listed above."
            }
          </NewsletterText>
          <SignUpButton>
            <p>{"NEWSLETTER SIGN UP"}</p>
          </SignUpButton>
        </PageMargin>
      </NewsletterBox>
    </Layout>
  );
};

export default Contact;
