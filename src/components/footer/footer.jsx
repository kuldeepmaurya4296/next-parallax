"use client";
import { useRef, useState } from "react";
import styles from "./footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <Anmi>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </Anmi>
        <Anmi>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNvbnN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </Anmi>
        <Anmi>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </Anmi>
        <Anmi>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNvbnN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </Anmi>

      </div>
    </footer>
  );
}

function Anmi({ children }) {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    console.log(clientX,"-------",clientY)
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    console.log(x,'------',y)
    setPosition({ x: x, y: y });
  };
  const mouseLeave = (e) => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      style={{ width: "100px", height: "100px",overflow:'hidden',borderRadius:'50%', cursor:'pointer' }}
    >
      {children}
    </motion.div>
  );
}
