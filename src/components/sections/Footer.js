import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

// import GithubIcon from '@static/icons/github.svg';
// import InstagramIcon from '@static/icons/instagram.svg';
// import TwitterIcon from '@static/icons/twitter.svg';

// const SOCIAL = [
//   {
//     icon: GithubIcon,
//     link: 'https://github.com/ajayns/gatsby-absurd',
//   },
//   {
//     icon: InstagramIcon,
//     link: 'https://instagram.com/ajay_ns',
//   },
//   {
//     icon: TwitterIcon,
//     link: 'https://twitter.com/ajayns08',
//   },
// ];

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrapper>
        <StyledContainer>
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
          {/* <SocialIcons>
            {SOCIAL.map(({ icon, link }) => (
              <ExternalLink key={link} href={link}>
                <img src={icon} alt="link" />
              </ExternalLink>
            ))}
          </SocialIcons> */}
        </StyledContainer>
      </FooterWrapper>
    </React.Fragment>
  )
}

// const SocialIcons = styled.div`
//   display: flex;

//   img {
//     margin: 0 8px;
//     width: 24px;
//     height: 24px;
//   }

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-top: 40px;
//   }
// `;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
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
    padding-left: .3em;
    padding-right: .3em;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`;

const StyledContainer = styled(Container)`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    // flex-direction: column;
    // text-align: center;
  }
`;

export default Footer;
