import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

// Components
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/about';
import Skills from '../components/skills';
import Footer from '../components/Footer';

// Service
import { queryHome } from '../service/api';

const IndexPage = () => {
  const [data, setData] = useState(undefined);

  useState(() => {
    queryHome().then(response => {
      setData(response.data);
    });
  });
  
  return (
    <Layout>
      <SEO title="Roger's Portfolio" />
      {data ?
        <div>
          <Header header={data.header} />
          <Work work={data.work} />
          <About about={data.about} />
          <Skills skills={data.skills} />
          <Footer contact={data.contact} header={data.header} />
        </div>
      : ''}
    </Layout>
  );
};

export default IndexPage;
