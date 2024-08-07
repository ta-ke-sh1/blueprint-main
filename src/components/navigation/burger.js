import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => <motion.path className="burger-path" strokeWidth={3} strokeLinecap="round" {...props} />;

export const BurgerToggle = ({ toggle }) => (
  <button onClick={toggle} className="burger-btn">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="black">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "black" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "black" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, stroke: "black" },
          open: { opacity: 0, stroke: "black" },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "black" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "black" },
        }}
      />
    </svg>
  </button>
);
