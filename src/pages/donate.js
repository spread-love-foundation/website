import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import ActionShot from "../components/donate/actionShot"
import "@fontsource/red-hat-text"
import "@fontsource/dm-serif-text"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import useWindowDimensions from "../components/windowDimensions"

const FlexContainer = styled("div")`
  margin-top: 80px;
  margin-bottom: 80px;
  padding-left: 10%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const TextSection = styled("div")`
  flex-basis: 60%;
  padding-left: 5%;
  padding-top: 20px;

  font-family: Red Hat Text;
  font-size: 26px;
  line-height: 32px;
`

const Heading = styled("div")`
  font-family: DM Serif Text;
  font-size: 48px;
  line-height: 66px;

  color: #54504e;
`

const DonateButton = styled("div")`
  height: 50px;
  width: 85%;
  background: #3b2a83;
  border-radius: 31px;

  :hover {
    background: #983872;
  }

  p {
    text-align: center;

    font-family: DM Serif Display;
    font-size: 24px;
    line-height: 50px;
    text-decoration-line: underline;
    color: #ffffff;
  }
`

const Donate = ({ data }) => {
  const { _, width } = useWindowDimensions()
  if (!data) {
    return null
  }

  const page_data = data.allPrismicDonate.nodes[0].data
  const useAllButtonText = width > 1100

  return (
    <Layout>
      <SEO title="Donate" />
      <FlexContainer>
        <ActionShot url={page_data.action_shot.url} />
        <TextSection>
          <Heading>{page_data.title.text}</Heading>
          <div>{page_data.tagline.text}</div>
          <br />
          <div>{page_data.description}</div>
          <br />
          <a
            href="https://charity.gofundme.com/o/en/campaign/spread-love-foundation"
            target="_blank"
          >
            <DonateButton>
              <p>
                {useAllButtonText
                  ? page_data.button_description.text
                  : "Donate"}
              </p>
            </DonateButton>
          </a>
        </TextSection>
      </FlexContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicDonate {
      nodes {
        data {
          title {
            text
          }
          tagline {
            text
          }
          button_description {
            text
          }
          action_shot {
            url
          }
          description
        }
      }
    }
  }
`

export default Donate
