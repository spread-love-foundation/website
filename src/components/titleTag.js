import React from "React"
import styled from "@emotion/styled"
import styles from "../components/headings.module.css"
import "@fontsource/red-hat-display"

const Section = styled("div")`
    margin-bottom: 80px;

    display: flex
    flex-direction: column
`

const TaglineText = styled("div")`
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;

  text-align: center;

  font-family: Red Hat Display;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 34px;
`

const titleTag = ({ title, tagline }) => (
  <Section>
    <h2 className={styles.titleHeading}>{title}</h2>
    <TaglineText>{tagline}</TaglineText>
  </Section>
)

export default titleTag
