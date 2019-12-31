import React from 'react';
import styled from 'styled-components';

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
    logo: CSharpLogo,
    link: 'https://csharp.net',
  },
  {
    logo: JavaScriptLogo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  {
    logo: Css3Logo,
    link: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  {
    logo: Html5Logo,
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    logo: SqlLogo,
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  {
    logo: AndroidLogo,
    link: 'https://developer.android.com/',
  },
  {
    logo: XamarinLogo,
    link: 'https://dotnet.microsoft.com/apps/xamarin',
  },
  {
    logo: ReactLogo,
    link: 'https://reactjs.org/',
  },
  {
    logo: AzureLogo,
    link: 'https://www.azure.com/',
  },
  {
    logo: GitLogo,
    link: 'https://git-scm.com/',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: AspDotNetLogo,
    link: 'https://dotnet.microsoft.com/apps/aspnet',
  },
  {
    logo: JiraLogo,
    link: 'https://www.atlassian.com/software/jira',
  },
];

const Tech = () => {
    return (
      // <Section id="brands" accent="secondary" >
      <Section id="tech" >
        <StyledContainer>
            <h1>Technologies Used</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
        </StyledContainer>
      </Section>
    )
  }

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
  grid-template-rows: min-content;
  grid-gap: 2em;
  justify-items: center;
  width: 100%;
  margin-top: 3.5em;
  align-items: center;

  a {
    svg {
      // max-width: 10em;
      max-width: 10em;
      max-height: 6em;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Tech;
