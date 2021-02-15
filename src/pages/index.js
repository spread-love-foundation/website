import React from "react"
import { graphql } from "gatsby"
import MissionText from "../components/index/missionText"
import CoverPhoto from "../components/index/coverPhoto"
import ActionShot from "../components/index/actionShot"
import Layout from "../components/layout"
import "../components/dummyStyle.css"
import styled from "@emotion/styled"
import styles from "../components/headings.module.css"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Section = styled("div")`
  margin-top: 2em;
  margin-left: 2em;
  margin-bottom: 3em;

  @media screen and (min-width: 350px) {
    margin-right: 2em;
  }

  @media screen and (min-width: 509px) {
    margin-left: 5em;
    margin-right: 5em;
  }

  @media screen and (min-width: 1320px) {
    margin-top: 6em;
    margin-left: 10em;
    margin-right: 10em;
    margin-bottom: 6em;
  }
`

// flex-wrap prevents action shot image from compressing in a smaller screen
const FlexContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const TextSection = styled("div")`
  flex-basis: 100%;

  @media screen and (min-width: 350px) {
    padding: 1em;
  }

  @media screen and (min-width: 910px) {
    flex-basis: 60%;
  }

  @media screen and (min-width: 1320px) {
    flex-basis: 70%;
  }
`

const GetInvolvedIcon = styled("img")`
  width: 153px;
  height: 127px;
  margin-bottom: 40px;
`

const GetInvolvedContainer = styled("div")`
  width: 100%;
  background: #107e7e;
  padding-top: 50px;
  padding-bottom: 100px;

  h1 {
    font-family: DM Serif Text;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 88px;
    text-align: center;
    color: #ffffff;

    margin-bottom: 100px;
  }

  p {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    color: #ffffff;
  }
`
const GetInvolvedRow = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin-left: 3rem;
`

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`

const GetInvolvedCell = ({ icon, persona, story }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "18rem",
      marginRight: "3rem",
    }}
  >
    <GetInvolvedIcon src={icon} alt={"Get involved as a " + persona} />
    <p>
      <span style={{ fontWeight: "bold" }}>{persona + ": "}</span>
      {story}
    </p>
  </div>
)

const LearnMoreButton = styled("div")`
  background: #3b2a83;
  border-radius: 31px;
  margin-top: 52px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;

  p {
    text-align: center;

    font-family: Red Hat Text;
    font-size: 16px;
    line-height: 50px;
    font-weight: bold;
    color: #ffffff;

    @media screen and (min-width: 450px) {
      font-size: 24px;
    }
  }
`

const IndexPage = ({ data }) => {
  if (!data) {
    return null
  }

  const page_data = data.allPrismicHomepage.nodes[0].data
  const homePageHeading = page_data.home_page_heading.text
  const homePageDescription = page_data.home_page_description.text
  const cover_url = page_data.cover_photo.url
  const action_url = page_data.action_shot.url

  return (
    <Layout>
      <SEO title="Home" />
      <CoverPhoto url={cover_url}></CoverPhoto>
      <Section>
        <FlexContainer>
          <TextSection>
            <h1 className={styles.bigHeading}> {homePageHeading} </h1>
            <MissionText>{homePageDescription}</MissionText>
          </TextSection>
          <ActionShot url={action_url}></ActionShot>
        </FlexContainer>
      </Section>
      <GetInvolvedContainer>
        <h1>Get Involved</h1>
        <GetInvolvedRow>
          {page_data.get_involved.map(narrative => (
            <GetInvolvedCell
              icon={narrative.icon.url}
              persona={narrative.persona}
              story={narrative.story}
            />
          ))}
        </GetInvolvedRow>
        <StyledLink to="/about-us">
          <LearnMoreButton>
            <p>{page_data.learn_more_button_text}</p>
          </LearnMoreButton>
        </StyledLink>
      </GetInvolvedContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicHomepage {
      nodes {
        data {
          home_page_heading {
            text
          }
          learn_more_button_text
          title
          home_page_description {
            text
          }
          get_involved {
            persona
            story
            icon {
              url
            }
          }
          cover_photo {
            url
          }
          action_shot {
            url
          }
        }
      }
    }
  }
`

export default IndexPage
