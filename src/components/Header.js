import React from "react"
import Fade from "react-reveal/Fade"

const Header = (props) => {
  const { header } = props.data

  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2> Hi, I'm {header.name}</h2>
            <img id="avatar" src={header.avatarImg}  alt="avatar"></img>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {header.headerTagline[0]}
              </h1>
              <h1>
                {header.headerTagline[1]}
              </h1>
              <h1>
                {header.headerTagline[2]}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{header.headerParagraph}</p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
