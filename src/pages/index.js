import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Tech from '@sections/Tech';
import Projects from '@sections/Projects';
import Faq from '@sections/Faq';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Tech />
    <Faq />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
