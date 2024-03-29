import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/utils/seo';

// Sections
import Home from '../sections/home';
import About from '../sections/about';
import Portfolio from '../sections/portfolio';
import Contact from '../sections/contact';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
