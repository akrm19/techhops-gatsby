import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import AustinImg from '../../images/austin.jpg';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            {/* <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art> */}
            <Text>
              <h1>
                Developer
                <br />
                Traveler
                <br />
                Beer Lover
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://github.com/akrm19">
                  Check out my GitHub &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-image: url('${AustinImg}');
  // background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

// const Art = styled.figure`
//   width: 100%;
//   margin: 0;

//   > div {
//     @media (max-width: ${props => props.theme.screen.md}) {
//       width: 100%;
//     }
//   }
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;


  }
`;

const Text = styled.div`
  justify-self: center;
  color: ${props => props.theme.color.white.dark};

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: ${props => props.theme.color.black.lighter};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.white.regular};
  }
`;

export default Header;
