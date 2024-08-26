
'use client';

import Styles from './styles.module.css';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
const images = [
  'https://plus.unsplash.com/premium_photo-1673736136121-227cab583e22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmNlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1566550569459-be4f296b1f98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1678167657994-5b96138b6abb?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1630349575347-89fde96c7e4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1620554602881-db6829bbc167?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673736136121-227cab583e22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmNlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1566550569459-be4f296b1f98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1678167657994-5b96138b6abb?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1630349575347-89fde96c7e4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1620554602881-db6829bbc167?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1566550569459-be4f296b1f98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

export default function Paralax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [800, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const y4 = useTransform(scrollYProgress, [0, 1], [700, 0]);

  return (
    <main className='w-full h-screen' >
      {/* <div style={{ height: '100vh' }}></div> */}
      <div
        ref={container}
        className={Styles.gallery}
        style={{ width: '100%', display: 'flex', flexDirection: 'row',overflow:'hidden' }}
      >
        <Column image={[images[0], images[1], images[2]]} y={y1} />
        <Column image={[images[6], images[8], images[9]]}  y={y2}/>
        <Column image={[images[3], images[4], images[5]]}  y={y3}/>
        <Column image={[images[3], images[4], images[5]]}  y={y4}/>
      </div>
      {/* <div style={{ height: '100vh' }}></div> */}
    </main>
  );
}

const Column = ({ image, y=0 }) => {
  return (
    <motion.div className={Styles.column} style={{ y }}>
      {image.map((src, index) => (
        <div key={index} style={{overflow:'hidden', border:'2px solid gray', height:'50%',width:'100%',borderRadius:'15px'}}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={src}
            alt='image'
          />
        </div>
      ))}
    </motion.div>
  );
};
