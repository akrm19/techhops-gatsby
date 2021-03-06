import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import Img from 'gatsby-image';
// import GifPlayer from 'react-gif-player';
import DrumKitGameGif from '../../images/projects/DrumKitOptimized.gif';
import DrumKitGamePng from '../../images/projects/DrumKitGame.png';
import Write2CongressAndroidGif from '../../images/projects/write2congressAndroidG.gif';
import Write2CongressAndroidJpg from '../../images/projects/write2congressAndroid.jpg';
import Write2CongressReactGif from '../../images/projects/write2congressReactG.gif';
import Write2CongressReactPng from '../../images/projects/write2congressReact.png';
import VisualCongressGif from '../../images/projects/visual_congress.gif';

const Portfolio = [
  {
    name: 'Write 2 Congress - Android App',
    description: 'Android App to view bills, legislators, their vote history, sponsored bills, committees, and contact info.',
    url: 'https://play.google.com/store/apps/details?id=com.ron.write2congress',
    imageDesc: 'Write2Congress Android app demo',
    image: Write2CongressAndroidJpg,
    gif: Write2CongressAndroidGif
  },
  {
    name: 'Drum Kit Game',
    description: 'A drum kit game created in React and inspired by the vanilla JS Drum Kit from JavaScript 30.',
    url: 'http://drum-kit-game.azurewebsites.net/',
    imageDesc: 'Drum Kit game demo',
    image: DrumKitGamePng,
    gif: DrumKitGameGif
  },
  {
    name: 'Write 2 Congress - Web',
    description: 'Write 2 Congress version written in React.',
    url: 'http://www.write2congress.com/',
    imageDesc: 'Write 2 Congress web demo',
    image: Write2CongressReactPng,
    gif: Write2CongressReactGif
  },
  {
    name: 'Congress Visualized (WiP)',
    description: 'A visualization of congress members by gender. The pie charts are generated programmatically using D3.js and React.',
    url: 'https://visual-congress.netlify.com/',
    imageDesc: 'Congress Visualized demo',
    image: DrumKitGamePng,
    gif: VisualCongressGif
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
      <Section id="projects">
        <Container style={{ position: 'relative' }}>
          <h1>Recent Projects</h1>
          <TeamGrid>
            {Portfolio.map(({ name, description, imageDesc, image, url, gif }) => {
              const img = gif ? image : data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <ExternalLink key={name} href={url}>
                  <ProjCard>
                    <Title>{name}</Title>
                    {gif ?
                    (
                      <img src={gif} alt={imageDesc} />
                    ) : 
                    (
                      <Img fluid={img.childImageSharp.fluid} alt={imageDesc} />
                    )}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  :hover {
    box-shadow: 0 25px 35px rgba(0,0,0,0.3);
  }
  
  :active {
    border: 3px solid rgba(0,0,0,0.0);
    box-shadow: 0 25px 35px rgba(0,0,0,0.4);
  }

  img {
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    max-height:25em;
    ${props => props.theme.image.border_radius}
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    height: auto;
    // max-height: 35em;
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

  grid-auto-rows: 1fr;

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

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-auto-rows: auto;
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
