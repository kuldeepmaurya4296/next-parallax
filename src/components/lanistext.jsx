"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../components/lanistext.module.css";
import { useRef } from "react";

export default function Lanistext() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.8], [1, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.8], [0, 15]);
  const scale3 = useTransform(scrollYProgress, [0, 0.8], [1, 1]);
  const scale4 = useTransform(scrollYProgress, [0, 0.8], [1, 3]);

  const tLeft = useTransform(scrollYProgress, [0, 0.8], [380, 241]);

  const positionY1 = useTransform(scrollYProgress,[0,0.8],[200,-400])
  const positionY2 = useTransform(scrollYProgress,[0,0.8],[150,600])
  const positionY3 = useTransform(scrollYProgress,[0,0.8],[250,800])

  const width = useTransform(scrollYProgress,[0.7,1],[0,1400])
  const zIndex = useTransform(scrollYProgress,[0.7,1],[ 1,1])
  
  return (
    <main ref={container} className={styles.main}>
      <div className={styles.sticky}>
        <motion.div style={{width:width,opacity:zIndex}} className={styles.nextpage}></motion.div>
        <div className={styles.texts}>
          <motion.div>
            <div
              className={styles.textbox}
              style={{ top: "-33vh", left: "-30vh" }}
            >
              <motion.h1 style={{ scale: scale1,top:positionY1,left:positionY1}}>
                SO WE BUILT WEB
                <span style={{ color: "lightpink" }}>SCROLLING</span>
              </motion.h1>
            </div>
            <div className={styles.textbox}>
              <motion.h1 style={{fontWeight:900, textAlign: "center", scale: scale2,top:positionY2,left:tLeft }}>
                ENTER <br /> LANISH
              </motion.h1>
            </div>
            <div
              className={styles.textbox}
              style={{ top: "33vh", left: "43vh" }}
            >
              <motion.h1 style={{ scale: scale3,top:positionY3,left:positionY3 }}>ASHIT SHOULD BE</motion.h1>
            </div>
          </motion.div>
        </div>
        
      </div>
    </main>
  );
}
