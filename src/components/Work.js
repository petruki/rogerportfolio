import React from 'react';
import PropTypes from 'prop-types';
import Card from './atoms/Card';
import Fade from 'react-reveal/Fade';

const Work = ({ work }) => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {work.map((project, id) => (
                <Card
                  key={id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.array.isRequired
};

export default Work;
