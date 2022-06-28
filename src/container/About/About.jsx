import React, {useState, useEffect} from 'react';

import {motion} from 'framer-motion'

import './About.scss';

// import {images} from "../../constants";

import {urlFor, client} from '../../client';

import { AppWrap } from '../../wrapper';

import {MotionWrap} from '../../wrapper'

// mapping over demo items
// const about =[
//   {title: "Web Development", desciption: "I am a good website developer in Lagos", imgUrl: images.about01},
//   {title: "Frontend Development", desciption: "I am a good website developer in Lagos", imgUrl: images.about02},
//   {title: "UI/UX Design", desciption: "I am a good website developer in Lagos",  imgUrl: images.about03},
//   {title: "Full Stack Web Designer", desciption: "I am a good website developer in Lagos",  imgUrl: images.about04},

// ];


const About = () => {

  // connecting react with sanity to fetch data
    const [abouts, setAbouts] = useState([]);

    useEffect(() =>{
        const query = '*[_type == "abouts"]';

        client.fetch(query)
        .then((data) => setAbouts(data))
    },[])

  return (
    <>
    <h2 className="head-text">
      I  know that <span>Good Apps</span><br/> means <span>Good Business</span>
    </h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
        whileinview={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "tween"}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt="about_img" />
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
    
  )
}

// wrape component with motionwrap

export default AppWrap (
  MotionWrap(About, 'app__about'), 
    'about',
    "app__whitebg"
    );
