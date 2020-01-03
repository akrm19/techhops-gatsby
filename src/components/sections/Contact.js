import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';
import { Section, Container } from '@components/global';

import GithubIcon from '@static/icons/github.svg';
import LinkedInIcon from '@static/icons/linkedin.svg';
import EmailIcon from '@static/icons/email.svg';


const title = 'Contact';
const contactText = 
`Ready to work together or have a question? Feel free to reach out:`;

const contactMethods = [
  {
    name: 'ron@techhops.com',
    url: '',
    icon: EmailIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ronmacedo/',
    icon: LinkedInIcon
  },
  {
    name: 'GitHub',
    url: 'https://github.com/akrm19',
    icon: GithubIcon
  },
]

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
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

  img {
    border-radius: 10px;
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
    `}
  }
`;

const ContactMethods = styled.div`
  padding-top: 4em;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  img{
    margin-left: .4em;
    height: 1.2em;
    vertical-align: bottom;
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  span {
    line-height: 1.2em;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    padding-top: 1em;

    p {
      margin-top: .5em;
      margin-bottom: .5em;
    }
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 1.5em;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: .3em;
    justify-content: space-evenly;

    span {
      display: none;
    }
  }
`;

const Contact = () => (
  <StaticQuery
    query={graphql`
      query {
        photo_ron: file(
          sourceInstanceName: { eq: "photos" }
          name: { eq: "austin_black_white" }
        ) {
          childImageSharp {
            fluid(maxWidth: 860) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="contact">
        <Container>
          <Grid>
            <div>
              <h2>{title}</h2>
              <p>
                {contactText}
              </p>
              <ContactMethods>
                {contactMethods.map(({name, url, icon}) =>
                    <ExternalLink key={name} href={url ? url : `mailto:` + name}>
                      <p key={name}>
                        <span>
                          {name}
                        </span>
                        <img src={icon} alt="link" />
                      </p>
                    </ExternalLink>
                )}
              </ContactMethods>
            </div>
            <Art>
              <Img fluid={data.photo_ron.childImageSharp.fluid} alt={'Austin Skyline - photo by Dwayne Hills'} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Art = styled.figure`
  margin: 0;
  width: 100%;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: inheirt;
  }
`;

export default Contact;