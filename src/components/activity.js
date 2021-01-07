import React, { useRef, useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Slider from 'react-slick';

import loadingSvg from '../images/loading.svg';
import { queryActivity } from '../service/api';

import 'slick-carousel/slick/slick.scss'; 
import 'slick-carousel/slick/slick-theme.scss';

const MAX_PAGE = 1;

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const [activityOrigin, setActivityOrigin] = useState([]);
  const [tags, setTags] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  let activitiesPanel = useRef();
  let prevBtn = useRef();
  let nextBtn = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - MAX_PAGE);
      scrollTo('#activity-container');
    }

    setPaginationVisibility(page - 2);
  };

  const nextPage = () => {
    if (page < activity.length) {
      setPage(page + MAX_PAGE);
      scrollTo('#activity-container');
    }

    setPaginationVisibility(page + MAX_PAGE);
  };

  const setPaginationVisibility = (currentPage) => {
    setLoading(true);
    prevBtn.current.className = currentPage > 0 ? 'btn' : 'btn-disable';
    nextBtn.current.className = currentPage + MAX_PAGE < activity.length ? 'btn' : 'btn-disable';
  };

  const viewPage = () => {
    return activity.slice(page, page + MAX_PAGE);
  };

  const onFilterActivity = (e, tag) => {
    e.preventDefault();
    
    const result = activityOrigin.filter(a => a.tags.includes(tag));
    setActivity(result);
    setPage(0);
    
    prevBtn.current.className ='btn-disable';
    nextBtn.current.className = result.length > MAX_PAGE ? 'btn' : 'btn-disable';
  };

  useState(() => {
    queryActivity().then(response => {
      setActivity(response.data.portfolio.activity);
      setActivityOrigin(response.data.portfolio.activity);
      setTags([...new Set(response.data.portfolio.activity
        .map(activity => activity.tags)
        .flat())]);

      nextBtn.current.className = 
        response.data.portfolio.activity.length > 2 ? 'btn' : 'btn-disable';
    });
  });

  return (
    <div id="activity-container" className="container">
      <div className="activity-wrapper">
        <h1>Activity</h1>
        <hr />
        <div id="slider">
          <Slider {...sliderSettings}>
            {tags && tags.map((tag, i) =>
              <div key={i} className="topic">
                <a href="/" onClick={(e) => onFilterActivity(e, tag)}>{tag}</a>
              </div>
              )}
          </Slider>
        </div>
        {loading && <img src={loadingSvg}></img>}
        {activity &&
          <div ref={activitiesPanel} className={`activity ${!loading && 'show'}`}>
            {viewPage().map((activity, i) =>
              <div className="post" key={i}>
                <iframe src={activity.url} width="500" height="500" onLoad={() => setLoading(false)} />
                <br />{activity.tags.map((tag, i) => <span key={i}>#{tag}</span>)}
                <p />
              </div>
            )}
          </div>
        }
        <div id="activity-pagination">
          <a ref={prevBtn} className="btn-disable" onClick={() => prevPage()}>Previous</a>
          <a ref={nextBtn} className="btn-disable" onClick={() => nextPage()}>Next</a>
        </div>
      </div>
    </div>
  );
};

export default Activity;
