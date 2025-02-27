// import React, { useEffect, useRef } from 'react';

// import VgtLogo from '@/assets/images/logo_cube.png';
// import VgtTitle from '@/assets/images/title.png';
// const CubeBox = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new CubeScene({
//       canvas: canvasRef.current,
//       paths: { logo: VgtLogo, title: VgtTitle },
//       textureScale: 0.5,
//       reflectionOpacity: 0.2,
//     });

//     return () => {
//       scene.dispose();
//     };
//   }, []);

//   return <canvas id="3DLogo" className="banner__thumb" ref={canvasRef} />;

// };

// export default CubeBox;
// import React, { useEffect, useRef, useState } from "react";
// import VgtLogo from "@/assets/images/logo_cube.png";
// import VgtTitle from "@/assets/images/title.png";

// const CubeBox = () => {
//   const canvasRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Wait until 3DCube-Bundle.js is loaded
//     const checkCubeScene = () => {
//       if (typeof window !== "undefined" && window.CubeScene) {
//         setIsLoaded(true);
//       } else {
//         setTimeout(checkCubeScene, 100); // Retry after 100ms
//       }
//     };

//     checkCubeScene();
//   }, []);

//   useEffect(() => {
//     if (!isLoaded || !canvasRef.current) return;

//     console.log("Initializing CubeScene...");

//     // Ensure CubeScene is defined
//     const scene = new window.CubeScene({
//       canvas: canvasRef.current,
//       paths: { logo: VgtLogo, title: VgtTitle },
//       textureScale: 0.5,
//       reflectionOpacity: 0.2,
//     });

//     return () => {
//       scene.dispose();
//     };
//   }, [isLoaded]); // Run when script is loaded

//   return <canvas id="3DLogo" className="banner__thumb" ref={canvasRef} />;
// };

// export default CubeBox;
import React, { useEffect, useRef, useState } from "react";
const CubeBox = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const VgtLogo = "/images/logo_cube.png"; // Direct path
const VgtTitle = "/images/title.png";
  useEffect(() => {
    // Wait until 3DCube-Bundle.js is loaded
    const checkCubeScene = () => {
      if (typeof window !== "undefined" && window.CubeScene) {
        setIsLoaded(true);
      } else {
        setTimeout(checkCubeScene, 100);
      }
    };

    checkCubeScene();
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    // console.log("Initializing CubeScene...");

    const scene = new window.CubeScene({
      canvas: canvasRef.current,
      paths: { logo: VgtLogo, title: VgtTitle }, 
      textureScale: 0.5,
      reflectionOpacity: 0.2,
    });

    return () => {
      scene.dispose();
    };
  }, [isLoaded]);

  return <canvas id="3DLogo" className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] " ref={canvasRef} />;
};

export default CubeBox;
