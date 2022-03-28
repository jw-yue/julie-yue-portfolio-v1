import { useEffect, useRef } from 'react'
import Portrait from '../../images/portrait.jpg'
import './about.scss'
import { init } from 'ityped'

const About = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['Enthusiastic', 'Detail-oriented', 'Diligent'],
      backDelay: 1500,
      backSpeed: 60,
    })
  }, [])
  return (
    <div className="intro" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src={Portrait} alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi Everyone! I'm</h2>
          <h1>Julie Yue</h1>
          <h3>
            <span ref={textRef}></span>
            <span> Front-End Developer</span>
          </h3>
          <h5>
            I'm a graduating Senior with a Bachelor's degree in computer science
            from The University of Texas at Dallas with experience in{' '}
            <span>HTML, CSS, JavaScript, React, Redux, and REST APIs.</span>
          </h5>
          <h5>
            I also have extensive knowledge practicing the Agile methodology
            through Atlassian Jira, and using Git.
          </h5>
          <h5>
            Finally, I programmed in college with backend languages and know
            C++, Java, and Unix Shell Scripts. I also took Algorithms and
            Databases classes.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default About
