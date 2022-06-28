import React from 'react';

import './Header.scss';

import { motion } from 'framer-motion';

import { images } from '../../constants';

// importing app wrap for social meida and using react higher order components

import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileinview:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easInOut'
    }
  }
}


const Header = () => {
  return (
    <div id='home' className='app__header app__flex' >
      <motion.div
      whileinview={{ x: [-100, 0], opacity: [0, 1]}}
      transition = {{duration: 0.5}}
      className = 'app__header-info'
      >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          {/* add wav mog below */}
          <span></span>
          <div style={{marginLeft: 20}}>
            <p className='p-text'>Hello I am</p>
            <h1 className="head-text">Samuel</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
        <p className='p-text'>Full Stack</p>
        <p className='p-text'>Web Designer</p>
        </div>

      </div>
      </motion.div>

      <motion.div
        whileinview={{ opacity: [0, 1]}}
        transition = {{duration: 0.5, DelayChildren: 0.5}}
        className = 'app__header-img'>
          <img src={images.profile} alt="profile" />
          <motion.img 
          whileinview={{scale: [0, 1]}}
          transition = {{duration: 1, ease: 'easeInOut'}}
          src={images.circle} 
          alt="profile_circle"  
          className="overlay_circle"
          />
      </motion.div>
      
      <div
      variants={scaleVariants}
      whileinview={scaleVariants.whileInView}
      className='app__header-circles'
      >
  {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={circle-index}>
            <img src={circle} alt="circle" />
          </div>
        ))}

      </div>
      
    </div>
  )
}

// wrap each section with the appwrap for react higher order components

export default AppWrap (Header, 'home')  ;
