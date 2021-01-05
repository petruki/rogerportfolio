import React, { useRef, useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import loadingSvg from '../images/loading.svg';
import { queryActivity } from '../service/api';

const Activity = () => {
  const [urls, setUrls] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  let activitiesPanel = useRef();
  let prevBtn = useRef();
  let nextBtn = useRef();

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 2);
      scrollTo('#activity-container', 'start');
    }

    setPaginationVisibility(page - 2);
  };

  const nextPage = () => {
    if (page < urls.length) {
      setPage(page + 2);
      scrollTo('#activity-container', 'start');
    }

    setPaginationVisibility(page + 2);
  };

  const setPaginationVisibility = (currentPage) => {
    setLoading(true);
    prevBtn.current.className = currentPage > 0 ? 'btn' : 'btn-disable';
    nextBtn.current.className = currentPage + 1 < urls.length ? 'btn' : 'btn-disable';
  };

  const viewPage = () => {
    return urls.slice(page, page + 2);
  };

  const showIframe = () => {
    setLoading(false);
  };

  useState(() => {
    queryActivity().then(response => setUrls(response.data.portfolio.activity.urls));
  });

  return (
    <div id="activity-container" className="container">
      <div className="activity-wrapper">
        <h1>Activity</h1>
        {loading && <img src={loadingSvg}></img>}
        {urls &&
          <div ref={activitiesPanel} className={`activity ${!loading && 'show'}`}>
            {viewPage().map((url, i) =>
              <div className="post" key={i}>
                <iframe src={url} width="500" height="500" onLoad={showIframe} />
                <p />
              </div>
            )}
          </div>
        }
        <div id="activity-pagination">
          <a ref={prevBtn} className="btn-disable" onClick={() => prevPage()}>Previous</a>
          <a ref={nextBtn} className="btn" onClick={() => nextPage()}>Next</a>
        </div>
      </div>
    </div>
  );
};

export default Activity;
