import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import AustinImg from '../../images/austin3.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Grid>
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
  )
}

const HeaderWrapper = styled.header`
  background-image: url('${AustinImg}');
  background: linear-gradient(to right, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.2)), url('${AustinImg}');
  background-size: cover;
  padding-top: 96px;
  padding-bottom: 2em;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

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
