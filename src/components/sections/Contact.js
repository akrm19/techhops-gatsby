import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';


const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
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

const Contact = () => {
  return ( 
    <Section id="contact">
      <Container>
        <Grid>
          <div>
            <h2>Contact</h2>
            <p>
              Test
            </p>
          </div>
          {/* <Art>
            <Img fluid={data.photo_ron.childImageSharp.fluid} />
          </Art> */}
        </Grid>
      </Container>
    </Section>
  )
}
 
export default Contact;