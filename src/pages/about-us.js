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
  margin-bottom: 80px;
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
`

const Name = styled("div")`
  font-family: Red Hat Text;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  color: #54504e;
`

const ProfilePicture = styled("img")`
  width: 150px;
  height: 150px;
  margin-right: 50px;
  margin-bottom: 20px;

  @media screen and (min-width: 1051px) {
    width: 200px;
    height: 200px;
  }
`

const Position = styled("div")`
  font-family: Red Hat Text;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: #54504e;
`

const Bio = styled("div")`
  font-family: Red Hat Display;
  font-size: 14px;
  line-height: 19px;
`

const ProfileText = styled("div")`
  flex-basis: 100%;

  @media screen and (min-width: 761px) {
    flex-basis: 70%;
  }
`

const Profile = ({ headshot, name, position, bio }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: "40px",
      marginBottom: "60px",
    }}
  >
    <ProfilePicture src={headshot} />
    <ProfileText>
      <Name>{name}</Name> <Position>{position}</Position>
      <Bio>{bio}</Bio>
    </ProfileText>
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
        <h2 className={styles.mediumHeadingSecondary}>
          {page_data.meet_our_team_title.text}
        </h2>
        <ProfileSection>
          {page_data.profile.map(profile => (
            <Profile
              key={profile.name.text}
              headshot={profile.headshot.url}
              name={profile.name.text}
              position={profile.position.text}
              bio={profile.bio}
            />
          ))}
        </ProfileSection>
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
            bio
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
