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
`Want to work together, offer me a high-paying job?`;

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

  a {
    text-decoration: none;
  }

  img{
    margin-left: .4em;
    height: 1.5em;
    vertical-align: bottom;
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  span {
    line-height: 1.5em;
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
                {contactMethods.map(({name, url, icon}) => {
                  return url 
                  ?
                    <ExternalLink key={name} href={name}>
                      <p key={name}>
                        <span>
                          {name}
                        </span>
                        <img src={icon} alt="link" />
                      </p>
                    </ExternalLink>
                  :
                    <ExternalLink key={name} href={`mailto:`+name}>
                      <p key={name}>
                        <span>
                          {name}
                        </span>
                        <img src={icon} alt="link" />
                      </p>
                    </ExternalLink>
                  })
                }
              </ContactMethods>
            </div>
            <Art>
              <Img fluid={data.photo_ron.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Art = styled.figure`
  margin: 0;
  // max-width: 480px;
  width: 100%;
`;

export default Contact;