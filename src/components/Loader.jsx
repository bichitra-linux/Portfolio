import React, { useMemo } from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const loaderStyle = useMemo(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }), []);

  const textStyle = useMemo(() => ({
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 40,
  }), []);

  return (
    <Html as='div' center style={loaderStyle}>
      <span className='canvas-loader'></span>
      <p style={textStyle}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default React.memo(CanvasLoader);