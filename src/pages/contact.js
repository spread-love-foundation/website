import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import "@fontsource/red-hat-text"
import "@fontsource/dm-serif-text"

const PageMargin = styled("div")`
  margin-left: 10%;
  padding-top: 5%;
`

const ContactUsSection = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;

  padding-bottom: 150px;
`

const ContactUsTextSection = styled("div")`
  flex-basis: 60%;
  padding-top: 20px;
`

const Heading = styled("div")`
  font-family: DM Serif Text;
  font-size: 48px;
  line-height: 64px;

  @media screen and (min-width: 1000px) {
    line-height: 88px;
    font-size: 64px;
  }

  color: #54504e;
`

const HeadingCaption = styled("div")`
  font-family: Red Hat Text;
  font-size: 18px;
  line-height: 24px;
`

const EmailRow = styled("div")`
  display: flex;
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
`

const NewsletterBox = styled("div")`
  width: 100%;
  padding-bottom: 72px;
  background: #107e7e;
`

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
`

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
`

// TODO: make a reusable button for sign-up

const Contact = ({ data }) => {
  if (!data) {
    return null
  }
  const page_data = data.allPrismicContactUs.nodes[0].data

  return (
    <Layout>
      <SEO title={page_data.title.text} />
      <PageMargin>
        <ContactUsSection>
          <ContactUsTextSection>
            <Heading>{page_data.title.text}</Heading>
            <HeadingCaption>{page_data.contact_caption}</HeadingCaption>
            <br />
            <br />
            <EmailRow>
              <img src="/icons/mail_icon.png"></img>
              <a href={"mailto: " + page_data.email}>
                <p>{page_data.email}</p>
              </a>
            </EmailRow>
          </ContactUsTextSection>
          <img src={page_data.image.url}></img>
        </ContactUsSection>
      </PageMargin>
      <NewsletterBox>
        <PageMargin>
          <Heading style={{ color: "#FFFFFF" }}>
            {page_data.newsletter_title}
          </Heading>
          <NewsletterText>{page_data.newsletter_text}</NewsletterText>
          <SignUpButton>
            <p>{page_data.sign_up_button_text}</p>
          </SignUpButton>
        </PageMargin>
      </NewsletterBox>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicContactUs {
      nodes {
        data {
          title {
            text
          }
          sign_up_button_text
          newsletter_title
          newsletter_text
          image {
            url
          }
          email
          contact_caption
        }
      }
    }
  }
`

export default Contact
