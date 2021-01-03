import React, { useEffect, useState } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

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
import Activities from '../components/activities';

const IndexPage = () => {
  const [view] = useQueryParam('view', StringParam);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (view === 'card') {
      queryBusiness().then(response => setData(response.data));
    } else {
      queryHome().then(response => setData(response.data));
    }
  }, [data]);
  
  if (data) {
    switch (view) {
      case 'card':
        return (
          <>
            <SEO title="Roger's Portfolio" />
            <BusinessCard contact={data.contact} header={data.header} />
          </>
        );
      case 'activities':
        return (
          <>
            <SEO title="Roger's Portfolio" />
            <Activities header={data.header} />
          </>
        );
      default:
        return (
          <Layout>
            <SEO title="Roger's Portfolio" />
            <Header header={data.header} />
            <Work work={data.work} />
            <About about={data.about} />
            <Skills skills={data.skills} />
            <Footer contact={data.contact} header={data.header} />
          </Layout>);
    }
  }
  
  return <SEO title="Roger's Portfolio" />;
};

export default IndexPage;
