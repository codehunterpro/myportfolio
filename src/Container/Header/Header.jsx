import React from "react";
import "./_Header.scss";
import { motion } from "framer-motion";
import { images } from "../../Constants";
import AppWrap from "../../Wrapper/AppWrap";





const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: "20px" }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Tanvir</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">
              <span>🧑🏻‍💻</span>Webdeveloper
            </p>
            <p className="p-text">Freelancer</p>
          </div>

          <div className="about-cmp app__flex">
            <p className="p-text">
              <span>ABOUT</span>
            </p>
            <p className="p-text">Beautiful, Full-featured  and functioality website that provides your business too high. My target is unique and attractive feature creation in your website.Perfect project with perfect design at good hand. Then Wellcome here to Join with me to do new something. immedeatly message here  </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="tanvir" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle "
          src={images.circle}
          alt="Profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}

        
      </motion.div>
      
    </div>
  );
};

export default AppWrap(Header, 'home');
