import React from "react";
import { graphql } from "gatsby";
import MissionText from "../components/index/missionText";
import CoverPhoto from "../components/index/coverPhoto";
import ActionShot from "../components/index/actionShot";
import Layout from "../components/layout";
import "../components/dummyStyle.css";
import styled from "@emotion/styled";
import styles from "../components/headings.module.css";
import SEO from "../components/seo";

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
`;

// flex-wrap prevents action shot image from compressing in a smaller screen
const FlexContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

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
`;

const GetInvolvedIcon = styled("img")`
  width: 153px;
  height: 127px;
`;

const GetInvolvedContainer = styled("div")`
  width: 100%;
  height: 680px;
  background: #107e7e;

  h1 {
    font-family: DM Serif Text;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 88px;
    text-align: center;
    color: #ffffff;
  }

  p {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    color: #ffffff;
  }
`;
// const GetInvolvedRow = styled("div")``;

// TODO:
//    (1) Make element to hold flex column of icon and description
//    (2) Add icon to prismic
//    (3) Add description to prismic
//    (4) Fix padding of elements

const LearnMoreButton = styled("div")``;

const GetInvolvedCell = ({ icon, persona, story }) => (
  <div>
    <GetInvolvedIcon src = {icon} alt = {"Get involved as a " + persona}/>
    <p>
      <span style={{ fontWeight: "bold" }}>{persona + ": "}</span>
      {story}
    </p>
  </div>
);

const IndexPage = ({ data }) => {
  const page_data = data.prismic.allHomepages.edges[0].node;
  const homePageHeading = page_data.home_page_heading[0].text;
  const homePageDescription = page_data.home_page_description[0].text;
  const cover_url = page_data.cover_photo.url;
  const action_url = page_data.action_shot.url;

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
        <FlexContainer>
          {page_data.get_involved.map((narrative) => (
            <GetInvolvedCell
              icon={narrative.icon.url}
              persona={narrative.persona}
              story={narrative.story}
            />
          ))}
        </FlexContainer>
      </GetInvolvedContainer>
    </Layout>
  );
};

// page_data.get_involved.map(

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            cover_photo
            home_page_heading
            home_page_description
            action_shot
            get_involved {
              icon
              persona
              story
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
