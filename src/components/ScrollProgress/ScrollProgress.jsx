import { useState, useEffect } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = Math.min(
        (currentScroll / scrollHeight) * 100,
        100
        );

      setScrollProgress(progress);

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className="scroll-progress">
        <div
            className="scroll-progress-bar"
            style={{
                width: `${scrollProgress}%`,
            }}
        ></div>
    </div>
  );
}

export default ScrollProgress;