import React from "react"
import Layout from "../components/layout"
import styles from "../components/headings.module.css"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import TitleTag from "../components/titleTag"
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

const Subtitle = styled("div")`
  font-family: DM Serif Text;
  font-size: 48px;
  line-height: 66px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const OurVisionSection = styled("div")`
  width: 100%;
  background: #983872;
  background-image: url(${props => props.background});
  background-position: 630px 80%;
  background-repeat: no-repeat;

  padding-top: 130px;
  padding-bottom: 150px;
  padding-left: 100px;
`

const OurVisionText = styled("div")`
  font-family: Red Hat Text;
  font-size: 26px;
  line-height: 34px;

  max-width: 460px;
  margin-right: 40px;

  color: #ffffff;
`

const Quote = styled("div")`
  font-family: DM Serif Display;
  font-size: 48px;
  line-height: 66px;

  margin-top: 80px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;

  color: #464646;
`

const QuoteAuthor = styled("div")`
  font-family: DM Serif Display;
  font-size: 36px;
  line-height: 49px;
  text-align: center;

  margin-bottom: 40px;

  color: #464646;
`

const InfoColumnsSection = styled("div")`
  background: #55e0e2;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  p {
    font-family: Red Hat Display;
    font-size: 26px;
    line-height: 34px;
    text-align: center;
  }
`

const InfoColumns = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin-left: 3rem;
`

const InfoCell = ({ text, icon_url }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "21rem",
      marginRight: "3rem",
      paddingBottom: "3rem",
    }}
  >
    <p>{text}</p>
    <br />
    <img src={icon_url} alt="asdfa" />
  </div>
)

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

  const page_data = data.allPrismicAboutUs.nodes[0].data

  return (
    <Layout>
      <SEO title="About Us" />
      <Section>
        <TitleTag
          title={page_data.about_us_title.text}
          tagline={page_data.about_us_description.text}
        />
      </Section>
      <OurVisionSection background={page_data.vision_image.url}>
        <Subtitle>{page_data.vision_title}</Subtitle>
        <br />
        <br />
        <OurVisionText>{page_data.vision_description}</OurVisionText>
      </OurVisionSection>
      <Quote>{page_data.quote}</Quote>
      <QuoteAuthor>{page_data.quote_author}</QuoteAuthor>
      <InfoColumnsSection>
        <InfoColumns>
          {page_data.info_column.map(info_column => (
            <InfoCell text={info_column.text} icon_url={info_column.icon.url} />
          ))}
        </InfoColumns>
      </InfoColumnsSection>
      <Body>
        <Section>
          <h2 className={styles.mediumHeadingSecondary}>
            {page_data.meet_our_team_title.text}
          </h2>
          <ProfileSection>
            {page_data.profile.map(profile => (
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
          vision_title
          vision_image {
            url
          }
          vision_description
          quote_author
          quote
          profile {
            headshot {
              url
            }
            name {
              text
            }
            position {
              text
            }
          }
          meet_our_team_title {
            text
          }
          about_us_title {
            text
          }
          about_us_description {
            text
          }
          info_column {
            icon {
              url
            }
            text
          }
        }
      }
    }
  }
`

export default AboutUs
