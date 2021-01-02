import React, { useState } from 'react';
import BusinessCard from '../components/business-card';

import SEO from '../components/seo';

// Service
import { queryBusiness } from '../service/api';

const BusinessCardPage = () => {
    const [data, setData] = useState(undefined);

    useState(() => {
        queryBusiness().then(response => {
            setData(response.data);
        });
    });
  
    return (
        <div>
            <SEO title="Roger's Portfolio" />
            {data ?
                <BusinessCard contact={data.contact} header={data.header} /> : ''
            }
        </div>
    );
};

export default BusinessCardPage;
