import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import pdf from '../../images/Julie_Yue_Resume.pdf'
import { Button, Button2 } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'
import '.'
const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Julie Yue</HeroH1>
        <HeroP>Front-End Developer</HeroP>
        <HeroBtnWrapper>
          <Button
            to="projects"
            smooth={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            offset={0}
          >
            See Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <HeroBtnWrapper>
          <Button2
            href={pdf}
            target="_blank"
            smooth={true}
            primary="true"
            offset={-80}
          >
            Résumé
          </Button2>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
