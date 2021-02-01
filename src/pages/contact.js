import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import "@fontsource/red-hat-text";
import "@fontsource/dm-serif-text";

const Heading = styled("div")`
  font-family: DM Serif Text;
  font-size: 64px;
  line-height: 88px;

  color: #54504e;
`;

const NewsletterBox = styled("div")`
  width: 100%;
  height: 340px;
  background: #107e7e;
`;

const NewsletterText = styled("div")`
  font-family: Red Hat Text;
  font-size: 24px;
  line-height: 32px;

  color: #ffffff;
`;

// TODO: make a reusable button for sign-up

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Heading>{"Contact Us"}</Heading>
      <img src="/icons/mail_icon.png"></img>
      <div style={{ fontFamily: "Red Hat Text", fontSize: "24px" }}>
        {"info@spreadlovefoundation.com"}
      </div>
      <NewsletterBox>
        <Heading style={{ color: "#FFFFFF" }}>
          {"Keep up with our initiatives"}
        </Heading>
        <NewsletterText>
          {
            "Sign up for our newsletter to stay up to date with our current projects and initiatives. Feel free to contact us with any questions with the information listed above."
          }
        </NewsletterText>
      </NewsletterBox>
    </Layout>
  );
};

export default Contact;
