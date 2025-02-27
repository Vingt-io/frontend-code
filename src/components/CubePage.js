import { useEffect } from "react";
import Script from "next/script";

export default function CubePage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.init3DCube) {
      window.init3DCube(); // Call the function if available
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div id="cube-container" className="w-96 h-96"></div>
      <Script
        src="/js/3DCube-Bundle.js"
        strategy="lazyOnload"
        onLoad={() => {
          // console.log("3DCube script loaded!");
          if (typeof window !== "undefined" && window.init3DCube) {
            window.init3DCube(); // Ensure the script initializes properly
          }
        }}
      />
    </div>
  );
}
