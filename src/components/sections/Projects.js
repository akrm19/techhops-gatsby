import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

const Portfolio = [
  {
    name: 'Write 2 Congress - Android App',
    description: 'Android App to view bills, legislators, their vote history, sponsored bills, committees, and contact info.',
    image: 'write2Congress_android.jpg', 
    url: 'https://play.google.com/store/apps/details?id=com.ron.write2congress',
  },
  {
    name: 'Write 2 Congress - Web',
    description: 'Write 2 Congress version written in React.',
    image: 'write2Congress_react.png',
    url: 'http://www.write2congress.com/',
  },
  {
    name: 'Drum Kit Game',
    description: 'A drum kit game created in React and inspired by the vanilla JS Drum Kit from JavaScript 30.',
    image: 'DrumKitGame.png', 
    url: 'http://drum-kit-game.azurewebsites.net/',
  },
];

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      // <Section id="projects" accent="secondary">
      <Section id="projects">
        <Container style={{ position: 'relative' }}>
          <h1>Recent Projects</h1>
          <TeamGrid>
            {Portfolio.map(({ name, description, image, url }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <ExternalLink key={name} href={url}>
                  <ProjCard>
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                    <Title>{name}</Title>
                    <Subtitle>{description}</Subtitle>
                  </ProjCard>
                </ExternalLink>
              );
            })}
          </TeamGrid>
        </Container>
      </Section>
    )}
  />
);

const ProjCard = styled.div`
  border: 1px solid rgb(233, 233, 233);
  ${props => props.theme.image.border_radius}
  box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  height: 35em;

  :hover {
    box-shadow: 0 25px 35px rgba(0,0,0,0.3);
  }
  
  :active {
    border: 3px solid rgba(0,0,0,0.0);
    box-shadow: 0 25px 35px rgba(0,0,0,0.4);
  }

  img {
    ${props => props.theme.image.border_radius}
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    height: auto;
    max-height: 35em;

    img {
      // max-height: 25em;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2.5em;

  a:link {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: .8em;
  text-align: center;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
  padding-bottom: 1em;
  padding-top: .5em;
  padding-left: .5em;
  padding-right: .5em;
`;

export default Projects;
