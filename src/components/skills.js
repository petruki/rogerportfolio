import React from "react"

const Skills = (props) => {
  const { skills } = props.data
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill select" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
