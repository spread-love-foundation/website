import React from "react"
import Layout from "../components/layout"
import styles from "../components/headings.module.css"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import "@fontsource/red-hat-display"
import { graphql } from "gatsby"

const Body = styled("div")`
  margin-left: 47px;
  margin-right: 47px;
  margin-top: 65px;

  @media screen and (min-width: 500px) {
    margin-right: 170px;
  }
`

const Section = styled("div")`
    margin-bottom: 80px;

    display: flex
    flex-direction: column
`

const Text = styled("div")`
  margin-top: 40px;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;

  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 130.7%;
`

const ProfileSection = styled("div")`
  margin-top: 100px;

  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 500px) {
    margin-right: -60px;
  }
`

const Name = styled("div")`
  font-family: Red Hat Text;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;

  text-align: center;
`

const ProfilePicture = styled("img")`
  width: 200px;
  height: 200px;

  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 500px) {
    width: 327px;
    height: 327px;
  }
`

const Position = styled("div")`
  font-family: Red Hat Text;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;

  text-align: center;
`

const Profile = ({ headshot, name, position }) => (
  // marginRight works well, except it depends on the ProfileSection margin
  <div style={{ marginRight: "60px", marginBottom: "60px" }}>
    <ProfilePicture src={headshot} alt={name + "headshot"} />
    <Name> {name} </Name>
    <Position> {position} </Position>
  </div>
)

const AboutUs = ({ data }) => {
  if (!data) {
    return null
  }

  const title1 = data.allPrismicAboutUs.nodes[0].data.about_us_title.text
  const desc = data.allPrismicAboutUs.nodes[0].data.about_us_description.text
  const title2 = data.allPrismicAboutUs.nodes[0].data.meet_our_team_title.text

  return (
    <Layout>
      <SEO title="About Us" />
      <Section>
        <h2 className={styles.titleHeading}>{title1}</h2>
        <Text>{desc}</Text>
      </Section>
      <Body>
        <Section>
          <h2 className={styles.mediumHeadingSecondary}>{title2}</h2>
          <ProfileSection>
            {data.allPrismicAboutUs.nodes[0].data.profile.map(profile => (
              <Profile
                headshot={profile.headshot.url}
                key={profile.name.text}
                name={profile.name.text}
                position={profile.position.text}
              />
            ))}
          </ProfileSection>
        </Section>
      </Body>
    </Layout>
  )
}

export const query = graphql`
  query AboutUs {
    allPrismicAboutUs {
      nodes {
        data {
          about_us_description {
            text
          }
          about_us_title {
            text
          }
          meet_our_team_title {
            text
          }
          profile {
            position {
              text
            }
            name {
              text
            }
            headshot {
              url
            }
          }
        }
      }
    }
  }
`

export default AboutUs
