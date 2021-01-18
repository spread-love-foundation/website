import React from "react";
import Layout from "../components/layout";
import styles from "../components/headings.module.css";
import styled from "@emotion/styled";
import SEO from "../components/seo";
import ActionShot from "../components/donate/actionShot";
import "@fontsource/red-hat-text";
import "@fontsource/dm-serif-text";
import { graphql } from "gatsby";

const FlexContainer = styled("div")`
  margin-bottom: 80px;
  padding-left: 5%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const TextSection = styled("div")`
  flex-basis: 60%;
  padding-left: 5%;
  padding-top: 20px;

  font-family: Red Hat Text;
  font-size: 26px;
  line-height: 32px;
`;

const Heading = styled("div")`
  font-family: DM Serif Text;
  font-size: 48px;
  line-height: 66px;

  color: #54504e;
`;

const Donate = ({ data }) => {
  const page_data = data.prismic.allDonates.edges[0].node;
  return (
    <Layout>
      <SEO title="Donate" />
      <FlexContainer>
        <ActionShot url={page_data.action_shot.url} />
        <TextSection>
          <Heading>
            {page_data.title[0].text}
          </Heading>
          <div>{page_data.tagline[0].text}</div>
          <br/>
          <div>{page_data.description}</div>
        </TextSection>
      </FlexContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allDonates {
        edges {
          node {
            title
            action_shot
            tagline
            description
            button_description
            _linkType
          }
        }
      }
    }
  }
`;

export default Donate;
