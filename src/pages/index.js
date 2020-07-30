import React from "react"
import { graphql } from "gatsby"
import MissionText from "../components/index/missionText"
import CoverPhoto from "../components/index/coverPhoto"
import ActionShot from "../components/index/actionShot"
import Layout from "../components/layout"
import "../components/dummyStyle.css";
import styled from "@emotion/styled";
import styles from "../components/headings.module.css"

const Section = styled("div")`
    margin-top: 2em;
    margin-left: 2em;
    margin-bottom: 3em;

    @media screen and (min-width:350px){
      margin-right: 2em;
    }

    @media screen and (min-width:509px){
      margin-left: 5em;
      margin-right: 5em;
    }

    @media screen and (min-width:1320px){
      margin-top: 6em;
      margin-left: 10em;
      margin-right: 10em;
      margin-bottom: 6em;
    }
`

// flex-wrap prevents action shot image from compressing in a smaller screen
const FlexThing = styled("div")`    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

const TextSection = styled("div")`
  flex-basis: 100%;

  @media screen and (min-width:350px){
    padding: 1em;
  }

  @media screen and (min-width:910px){
    flex-basis: 60%;
  }

  @media screen and (min-width:1320px){
    flex-basis: 70%;
  }
`

const IndexPage = ({data}) => {
  const ourMissionHeading = data.prismic.allHomepages.edges[0].node.home_page_heading[0].text;
  const ourMissionDescription = data.prismic.allHomepages.edges[0].node.home_page_description[0].text
  const cover_url = data.prismic.allHomepages.edges[0].node.cover_photo.url
  const action_url =  data.prismic.allHomepages.edges[0].node.action_shot.url

  return  <Layout>
            <CoverPhoto url = {cover_url}></CoverPhoto>
            <Section>
                <FlexThing>
                  <TextSection>
                    <h1 className = {styles.bigHeading}> {ourMissionHeading} </h1>
                    <MissionText>{ourMissionDescription}</MissionText>
                  </TextSection>
                  <ActionShot url = {action_url}></ActionShot>
                </FlexThing>
            </Section>
          </Layout>
}

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
          }
        }
      }
    }
  }
`

export default IndexPage
