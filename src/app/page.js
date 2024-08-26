
'use client';

import { useEffect } from 'react';
import Paralax from '../components/paralax'
import Paralaxx from '../components/paralaxx'
import Lenis from '@studio-freight/lenis';


export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])
 
  return (
    <main style={{marginTop:'0vh',marginBottom:'0vh'}} >
       <div style={{ height: '100vh',display:'flex',alignItems:'center',justifyContent:'center' }}> <img style={{width:'30vw',height:'30vw'}} src="https://gifdb.com/images/high/animated-man-hello-hi-there-waving-lg9egcpzjrykwh4l.gif" alt="" /></div>
      <Paralax/>
      {/* <div style={{width:'100%', height:'100vh',backgroundColor:'red'}}></div> */}
      <Paralaxx/>
      
      <Paralax/>
    
      <div style={{ height: '100vh',display:'flex',alignItems:'center',justifyContent:'center'  }}> <img style={{width:'30vw',height:'30vw'}} src="https://gifdb.com/images/high/animated-waving-hand-bye-q8giiwv3kb5p7zxg.gif" alt="" /> </div>
    </main>
  );
}
