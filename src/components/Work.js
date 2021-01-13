import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './atoms/Card';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

const Work = ({ work }) => {
  const [projectsGroup, setGroupProjects] = React.useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  useState(() => {
    var i, j, chunk = 6;
    let pjGroup = [];
    for (i = 0, j = work.length; i < j; i += chunk) {
      pjGroup.push(work.slice(i, i + chunk));
    }

    setGroupProjects(pjGroup);
  });

  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <Fade bottom cascade>
            <Slider {...sliderSettings}>
              {projectsGroup.map((projects, index) => (
                <div key={index} style={{ display: 'grid' }}>
                  <div className="grid">
                  {projects.map((project, id) => (
                    <Card
                      key={id}
                      heading={project.title}
                      paragraph={project.para}
                      imgUrl={project.imageSrc}
                      projectLink={project.url}
                    ></Card>
                  ))}
                  </div>
                </div>
              ))}
            </Slider>
          </Fade>
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.array.isRequired
};

export default Work;
