import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import SEO from '@common/SEO';
import { Container } from '@components/global';

const SecondPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export const Head = () => <SEO />;

export default SecondPage;
