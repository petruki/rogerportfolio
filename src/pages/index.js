import React, { useState } from 'react';
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
import Activity from '../components/activity';

const IndexPage = () => {
  const [viewParam] = useQueryParam('view', StringParam);
  const [view, setView] = useState(viewParam);
  const [data, setData] = useState(undefined);

  useState(() => {
    if (view === 'card') {
      queryBusiness().then(response => setData(response.data));
    } else {
      queryHome().then(response => setData(response.data));
    }
  });
  
  if (data) {
    const { portfolio } = data;
    
    switch (view) {
      case 'card':
        return (
          <>
            <SEO title="Roger's Portfolio" />
            <BusinessCard contact={portfolio.contact} header={portfolio.header} />
          </>
        );
      case 'activity':
        return (
          <Layout setView={setView} view={view}>
            <SEO title="Roger's Portfolio" />
            <Activity />
          </Layout>
        );
      default:
        return (
          <Layout setView={setView} view={view}>
            <SEO title="Roger's Portfolio" />
            <Header header={portfolio.header} />
            <Work work={portfolio.work} />
            <About about={portfolio.about} />
            <Skills skills={portfolio.skills} />
            <Footer contact={portfolio.contact} header={portfolio.header} />
          </Layout>);
    }
  }
  
  return <SEO title="Roger's Portfolio" />;
};

export default IndexPage;
