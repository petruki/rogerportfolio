import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import Layout from '../components/layout';
import SEO from '../components/seo';

// Components
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/about';
import Skills from '../components/skills';
import Footer from '../components/Footer';

// Service
import queryData from '../service';

const IndexPage = () => {
  const [data, setData] = useState(undefined);

  useState(() => {
    queryData().then(response => {
      setData(response.data);
    });
  });
  
  return (
    <Layout>
      <SEO title="Roger's Portfolio" />
      {data ?
        <Fade big>
          <Header header={data.header}></Header>
          <Work work={data.work}></Work>
          <About about={data.about}></About>
          <Skills skills={data.skills}></Skills>
          <Footer contact={data.contact} header={data.header}></Footer>
        </Fade>
      : ''}
    </Layout>
  );
};

export default IndexPage;
