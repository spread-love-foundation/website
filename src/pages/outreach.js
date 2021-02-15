import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleTag from "../components/titleTag"
import styled from "@emotion/styled"
import styles from "../components/headings.module.css"
import "@fontsource/red-hat-display"

const Section = styled("div")`
  margin-top: 2em;
  margin-left: 2em;
  margin-bottom: 3em;
  margin-right: 2em;

  @media screen and (min-width: 509px) {
    margin-left: 5em;
    margin-right: 5em;
  }
`

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

const Description = styled("div")`
  margin-top: 1em;
  margin-bottom: 2em;
  margin-right: 1em;

  @media screen and (min-width: 450px) {
    margin-right: 2em;
  }

  font-family: Red Hat Display;
  font-size: 26px;
  line-height: 34px;

  color: #000000;
`

const ActionImage = styled("img")`
  width: 220px;
  height: 220px;

  @media screen and (min-width: 390px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1040px) {
    width: 350px;
    height: 350px;
  }

  border-radius: 50%;
  object-fit: cover;
`

const QuoteSection = styled("div")`
  background: #107e7e;
`

const Quote = styled("div")`
  font-family: DM Serif Display;
  font-size: 48px;
  line-height: 66px;

  padding-top: 80px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;

  color: #ffffff;
`

const QuoteAuthor = styled("div")`
  font-family: DM Serif Display;
  font-size: 36px;
  line-height: 49px;
  text-align: center;

  padding-bottom: 40px;

  color: #ffffff;
`

const EventImage = styled("img")`
  margin-left: 50px;
  margin-bottom: 30px;
  width: 180px;
  height: 180px;

  @media screen and (min-width: 970px) {
    margin-left: 80px;
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1030px) {
    width: 244px;
    height: 244px;
  }
`

const EventText = styled("div")`
  margin-left: 50px;
  flex-basis: 100%;

  @media screen and (min-width: 700px) {
    flex-basis: 60%;
  }

  @media screen and (min-width: 970px) {
    margin-left: 80px;
  }
`

const OutreachEvent = ({ title, desc, image_url }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: "40px",
    }}
  >
    <EventImage src={image_url} />
    <EventText>
      <h2 className={styles.smallHeadingPrimary}>{title}</h2>
      <Description>{desc}</Description>
    </EventText>
  </div>
)

const Outreach = ({ data }) => {
  if (!data) {
    return null
  }

  const page_data = data.allPrismicOutreach.nodes[0].data

  return (
    <Layout>
      <SEO title="Outreach" />
      <TitleTag
        title={page_data.outreach_title.text}
        tagline={page_data.tagline}
      />
      <Section>
        <FlexContainer>
          <TextSection>
            <h2 className={styles.mediumHeadingSecondary}>
              {page_data.section_title}
            </h2>
            <Description>{page_data.section_description}</Description>
          </TextSection>
          <ActionImage src={page_data.section_image.url}></ActionImage>
        </FlexContainer>
      </Section>
      <QuoteSection>
        <Quote>{page_data.quote}</Quote>
        <QuoteAuthor>{page_data.quote_author}</QuoteAuthor>
      </QuoteSection>
      <div style={{ marginTop: "100px", marginBottom: "120px" }}>
        {page_data.outreach_events.map(event => (
          <OutreachEvent
            title={event.event_title}
            desc={event.description}
            image_url={event.image.url}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicOutreach {
      nodes {
        data {
          tagline
          section_title
          section_image {
            url
          }
          section_description
          quote_author
          quote
          outreach_title {
            text
          }
          outreach_events {
            event_title
            image {
              url
            }
            description
          }
        }
      }
    }
  }
`

export default Outreach
