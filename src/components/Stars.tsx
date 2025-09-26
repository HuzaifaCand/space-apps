"use client";

import { useEffect } from "react";

const NUM_STARS = 1000;

export default function Stars() {
  useEffect(() => {
    const starContainer = document.getElementById("stars-container");
    if (!starContainer) return;

    const generateStars = () => {
      starContainer.innerHTML = "";
      const pageHeight = document.documentElement.scrollHeight;

      const colorWeights = [
        { color: "#ffffff", weight: 70 },
        { color: "#a5d1ff", weight: 10 },
        { color: "#99ccff", weight: 10 },
        { color: "#cceeff", weight: 5 },
        { color: "#fff8e7", weight: 3 },
        { color: "#fff1c2", weight: 3 },
        { color: "#ffd1a5", weight: 2 },
        { color: "#ffb380", weight: 2 },
        { color: "#d9ccff", weight: 2 },
        { color: "#c2b3ff", weight: 3 },
      ];

      function pickColor() {
        const total = 100;
        let r = Math.random() * total;
        for (const c of colorWeights) {
          if (r < c.weight) return c.color;
          r -= c.weight;
        }
        return "#ffffff"; // fallback
      }

      for (let i = 0; i < NUM_STARS; i++) {
        const star = document.createElement("div");
        star.className = "star";

        // random position
        star.style.top = `${Math.random() * pageHeight}px`;
        star.style.left = `${Math.random() * 100}vw`;

        // size
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // color: mostly white, occasional blue
        star.style.background = pickColor();

        // opacity / brightness based on size
        const brightness = Math.min(1, 0.6 + size / 3);
        star.style.opacity = brightness.toString();

        // twinkle speed / delay
        const duration = (Math.random() * 2 + 1).toFixed(2); // 1-3s
        const delay = (Math.random() * 5).toFixed(2); // stagger
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        starContainer.appendChild(star);
      }
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return <div id="stars-container" className="stars"></div>;
}
