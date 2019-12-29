import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as AndroidLogo } from '@images/logos/android.svg';
import { ReactComponent as CSharpLogo } from '@images/logos/cSharp.svg';
import { ReactComponent as Css3Logo } from '@images/logos/css3.svg';
import { ReactComponent as Html5Logo } from '@images/logos/html5.svg';
import { ReactComponent as JavaScriptLogo } from '@images/logos/javascript.svg';
import { ReactComponent as ReactLogo } from '@images/logos/react.svg';
import { ReactComponent as SqlLogo } from '@images/logos/sql.svg';
import { ReactComponent as XamarinLogo } from '@images/logos/xamarin.svg';
import { ReactComponent as JiraLogo } from '@images/logos/jira.svg';
import { ReactComponent as GitLogo } from '@images/logos/GitLogo.svg';
import { ReactComponent as AspDotNetLogo } from '@images/logos/AspNet.svg';
import { ReactComponent as AzureLogo } from '@images/logos/azure.svg';


const LOGOS = [
  {
    logo: AndroidLogo,
    link: 'https://airbnb.io',
  },
  {
    logo: AspDotNetLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: AzureLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: CSharpLogo,
    link: 'https://coca-cola.com',
  },
  {
    logo: Css3Logo,
    link: 'https://nike.com',
  },
  {
    logo: Html5Logo,
    link: 'https://instagram.com',
  },
  {
    logo: JavaScriptLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    logo: JiraLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    logo: GitLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: ReactLogo,
    link: 'https://reactjs.org/',
  },
  {
    logo: SqlLogo,
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  {
    logo: XamarinLogo,
    link: 'https://dotnet.microsoft.com/apps/xamarin',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <StyledContainer>
          <div>
            <h1>Technologies Used</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      max-width: 20em;
      max-height: 10em;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default UsedBy;
