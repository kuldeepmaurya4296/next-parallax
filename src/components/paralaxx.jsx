"use client";
import Image from "next/image";
import Image1 from "../../public/images/image1.jpg";
import Image2 from "../../public/images/image2.jpg";
import Image3 from "../../public/images/image3.jpg";
import Image4 from "../../public/images/image4.jpg";
import Image5 from "../../public/images/image5.jpg";
import Image6 from "../../public/images/image6.jpg";
import Image7 from "../../public/images/image7.jpg";
import { useScroll, useTransform, motion, color } from "framer-motion";
import Styles from "./paralaxx.module.css";
import { useRef } from "react";

export default function Paralaxx() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const pictures = [
    {
      src: Image1,
      scale: scale4,
    },
    {
      src: Image2,
      scale: scale5,
      top: "-20vh",
      left: "-50vh",
      width: "40vh",
      height: "30vh",
    },
    {
      src: Image3,
      scale: scale6,
      top: "-20vh",
      left: "60vh",
      width: "50vh",
      height: "30vh",
    },
    {
      src: Image4,
      scale: scale7,
      top: "15vh",
      left: "50vh",
      width: "35vh",
      height: "30vh",
    },
    {
      src: Image5,
      scale: scale5,
      top: "20vh",
      left: "-20vw",
      width: "35vh",
      height: "40vh",
    },
    {
      src: Image6,
      scale: scale9,
      top: "35vh",
      left: "10vh",
      width: "40vh",
      height: "20vh",
    },
    {
      src: Image7,
      scale: scale5,
      top: "10vh",
      left: "70vw",
      width: "25vh",
      height: "50vh",
    },
  ];

  return (
    <div ref={container} className={Styles.container}>
      <div className={Styles.sticky}>
        {pictures.map(({ src, scale, top, left, width, height }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={Styles.el}>
              <div
                style={{ top: top, left: left, width: width, height: height }}
                className={Styles.imagecontainer}
              >
                <Image
                  src={src}
                  fill
                  placeholder="blur"
                  className={Styles.image}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
