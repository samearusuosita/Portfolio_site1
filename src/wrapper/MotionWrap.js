// implementing higher order component on evry section of the page to implement a motion div

import React from "react";
import { motion } from "framer-motion";



const MotionWrap = (Component, classNames) => function HOC(){
  return (
    <motion.div
    whileinview={{y: [100, 50, 0], opacity: [0, 0, 1]}}
    transition={{duration: 0.5}}
    className={`${classNames} app__flex`}>
      
      <Component/>
    </motion.div>
  )
}

export default MotionWrap
