import React from "react"
import { graphql } from "gatsby"
import MissionHeader from "../components/index/missionHeader"
import MissionText from "../components/index/missionText"
import CoverPhoto from "../components/index/coverPhoto"
import ActionShot from "../components/index/actionShot"
import Layout from "../components/layout"
import "../components/dummyStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "@emotion/styled";


const Section = styled("div")`
    margin-top: 6em;
    margin-left: 10em;
    margin-right: 10em;
    margin-bottom: 6em;
`

// flex-wrap prevents action shot image from compressing in a smaller screen
const FlexThing = styled("div")`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`


const IndexPage = ({data}) => {
  const ourMissionHeading = data.prismic.allHomepages.edges[0].node.home_page_heading[0].text;
  const ourMissionDescription = data.prismic.allHomepages.edges[0].node.home_page_description[0].text
  const cover_url = data.prismic.allHomepages.edges[0].node.cover_photo.url
  const action_url =  data.prismic.allHomepages.edges[0].node.action_shot.url

  return <Layout>
    <CoverPhoto url = {cover_url}></CoverPhoto>
    <Section>
        <FlexThing>
          <div style={{flexBasis: "70%", padding: "1em"}}>
            <MissionHeader>{ourMissionHeading}</MissionHeader>
            <MissionText>{ourMissionDescription}</MissionText>
          </div>
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
