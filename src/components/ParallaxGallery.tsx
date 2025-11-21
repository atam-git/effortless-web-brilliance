import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ParallaxGallery.scss";

import image1 from "@/assets/Portfolio/NDS-Portfolio-01-01-Bravura.jpg";
import image2 from "@/assets/Portfolio/NDS-Portfolio-01-02-Twinglo.jpg";
import image3 from "@/assets/Portfolio/NDS-Portfolio-01-03-SME-Cafe.jpg";
import image4 from "@/assets/Portfolio/NDS-Portfolio-01-04-Uju-Email.jpg";
import image5 from "@/assets/Portfolio/NDS-Portfolio-01-05--Centre-for-Memories.jpg";
import image6 from "@/assets/Portfolio/NDS-Portfolio-01-06-Zhymma.jpg";

gsap.registerPlugin(ScrollTrigger);

const ParallaxGallery: React.FC = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    const progress = progressRef.current;
    const cards = cardsRef.current;

    if (container && pin && progress && cards.length > 0) {
      const ctx = gsap.context(() => {
        gsap.to(container, {
          x: () =>
            -(container.scrollWidth - document.documentElement.clientWidth) +
            "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: pin,
            scrub: 0.5,
            start: "top top",
            end: () => "+=" + container.offsetWidth,
          },
        });

        // progress bar
        gsap.to(progress, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            scrub: 0.3,
            start: "top top",
            end: () => "+=" + container.offsetWidth,
          },
        });

        // card b parallax
        gsap.to(cards, {
          backgroundPositionX: "0%",
          ease: "Power2.out",
          scrollTrigger: {
            trigger: container,
            scrub: 0.5,
            start: "top top",
            end: () => "+=" + container.offsetWidth,
          },
        });
      }, pin); // scope the context to the pin element

      return () => ctx.revert(); // cleanup
    }
  }, []);

  const addToRefs = (el: HTMLAnchorElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div id="home" ref={pinRef}>
      <header className="b--header-a">
        <div className="f--container">
          <div className="f--row">
            <div className="f--col-12">
              <div className="b--header-a__wrapper">
                <p className="b--header-a__wrapper__title"></p>
                <div className="b--burger-a">
                  <span className="b--burger-a__dash"></span>
                  <span className="b--burger-a__dash"></span>
                  <span className="b--burger-a__dash"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="b--hero-a">
        <h2 className="b--hero-a__title js--hero-a-title">Featured works</h2>
        <div
          className="b--hero-a__wrapper js--hero-a"
          ref={containerRef}
          data-horizontal-section
        >
          {images.map((image, index) => (
            <div className="b--hero-a__wrapper__content" key={index}>
              <a
                ref={addToRefs}
                className="b--card-b"
                href="#"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPositionX: "50%",
                }}
              ></a>
            </div>
          ))}
        </div>
      </section>
      <div className="b--progress-a">
        <div className="b--progress-a__item">
          <div
            ref={progressRef}
            className="b--progress-a__item__artwork"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxGallery;
