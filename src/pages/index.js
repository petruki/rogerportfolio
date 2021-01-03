import React, { useEffect, useState } from 'react';
import { useQueryParam, BooleanParam } from 'use-query-params';

import Layout from '../components/layout';
import SEO from '../components/seo';

// Components
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/about';
import Skills from '../components/skills';
import Footer from '../components/Footer';

// Service
import { queryBusiness, queryHome } from '../service/api';
import BusinessCard from '../components/business-card';

const IndexPage = () => {
  const [card] = useQueryParam('card', BooleanParam);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (card) {
      queryBusiness().then(response => setData(response.data));
    } else {
      queryHome().then(response => setData(response.data));
    }
  }, [data]);
  
  return (
    <div>
      {data ? card ?
      <BusinessCard contact={data.contact} header={data.header} /> :
      <Layout>
        <SEO title="Roger's Portfolio" />
        <Header header={data.header} />
        <Work work={data.work} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Footer contact={data.contact} header={data.header} />
      </Layout> : ''}
    </div>
  );
};

export default IndexPage;
