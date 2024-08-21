import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const { paddingX, heroHeadText, heroSubText } = styles;

  const containerStyle = useMemo(() => ({
    className: `absolute inset-0 top-[120px] max-w-7xl mx-auto ${paddingX} flex flex-row items-start gap-5`,
  }), [paddingX]);

  const circleStyle = useMemo(() => ({
    className: "w-5 h-5 rounded-full bg-[#915EFF]",
  }), []);

  const lineStyle = useMemo(() => ({
    className: "w-1 sm:h-80 h-40 violet-gradient",
  }), []);

  const headTextStyle = useMemo(() => ({
    className: `${heroHeadText} text-white`,
  }), [heroHeadText]);

  const subTextStyle = useMemo(() => ({
    className: `${heroSubText} mt-2 text-white-100`,
  }), [heroSubText]);

  const motionDivAnimation = useCallback(() => ({
    animate: { y: [0, 24, 0] },
    transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
  }), []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div {...containerStyle}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div {...circleStyle} />
          <div {...lineStyle} />
        </div>

        <div>
          <h1 {...headTextStyle}>
            Hi, I'm <span className="text-[#915EFF]">Bichitra</span>
          </h1>
          <p {...subTextStyle}>
            Your very own MERN Stack<br className="sm:block hidden" />
            &nbsp;&&nbsp;Full Stack Developer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              {...motionDivAnimation()}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default React.memo(Hero);