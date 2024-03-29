import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const title = 'Hi I am Ron';
const aboutMeText = 
`I am an avid traveler, runner, and a past homebrewer.

I am also a goal-oriented software engineer and highly skilled professional with more than twelve years of experience in software development including mobile, web, and in Azure. 

I had the opportunity to have hands-on experience in the entire software development life cycle, including design, development, and maintenance. I am constantely learning and I am eager to work with cutting-edge technologies.`;

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        photo_ron: file(
          sourceInstanceName: { eq: "photos" }
          name: { eq: "ron" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          {/* <Grid>
            <div>
              <h2>{title}</h2>
              <p>
                {aboutMeText}
              </p>
            </div>
            <Art>
              <Img fluid={data.photo_ron.childImageSharp.fluid} />
            </Art>
          </Grid> */}
          <Grid inverse>
            <Art>
              <Img fluid={data.photo_ron.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>{title}</h2>
              <p>
                {aboutMeText}
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  p {
    white-space: pre-wrap;
  }

  img {
    ${props => props.theme.image.border_radius}
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
