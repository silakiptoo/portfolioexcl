import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler=(screen)=>{
    if(screen.fadeInScreen !== props.id)
    return
  Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREEN_CONSTANTS ={
    description: "Hello there, I'm Sila Ng'etich, a seasoned wordsmith with a passion for crafting compelling narratives.With over half a decade of experience under my pen, I've earned my stripes as an award-winning writer. My journey in the realm of words has led me through the intricacies of academic writing, the art of engaging articles, and the magic of blogging. But what truly sets me apart? It's not just the ink-stained pages of my portfolio; it's my knack for weaving stories that captivate, educate, and resonate. Plus, I've got a secret weapon up my writer's sleeve: SEO best practices. So, whether you're diving into academia, exploring the blogosphere, or seeking content that not only shines but also ranks, I've got your back.",
    highlights: {
      bullets:[
        "Full Stack Web Development",
        "Search Engine Optimization and Copywriting",
        "UI Design",
        "Help Desk and Ticketing System",
        "MERN and Flutter Develoment",

      ],
      heading: "Here are a few Highlights"

    }
  }

  const renderHighlights= () =>{
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
        <div className= 'highlight' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }
  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}></ScreenHeading>
        <div className='about-me-card'>
          <div className='about-me-profile'>

          </div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span> {SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>

            <div className='about-me-options'>
            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me {""}
                        </button>
                        <a href='sila.pdf' download='Sila sila.pdf'>
                            <button className='btn highlighted-btn'> Get Resume</button>
                        </a>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
