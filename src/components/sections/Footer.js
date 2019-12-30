import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrapper>
        <Copyright>
          <span>
            Pictures by Some name
          </span>
          <span>
            Design modified from Absurd
          </span>
          <span>
            &copy; Copyright 2020, TechHops.
          </span>
        </Copyright>
      </FooterWrapper>
    </React.Fragment>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding-top: 4em;
  padding-bottom: 3em;


  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: 3em;
    padding-bottom: 1em;
  }
`;

const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.xsmall};
  color: ${props => props.theme.color.black.regular};

  span {
    padding-left: 2.5em;
    padding-right: 2.5em;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    span {
      padding-left: 1em;
      padding-right: 1em;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;

    span {

      &:last-child {
        padding-top: 2em;
      }
    } 
  }
`;

export default Footer;