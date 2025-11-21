import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ParallaxGallery.scss";

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
            scrub: 1,
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
            scrub: 1,
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

  return (
    <div id="home" ref={pinRef}>
      <header className="b--header-a">
        <div className="f--container">
          <div className="f--row">
            <div className="f--col-12">
              <div className="b--header-a__wrapper">
                <p className="b--header-a__wrapper__title">
                  Placeholder's Hall Of Fame
                </p>
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
        <h2 className="b--hero-a__title js--hero-a-title">
          Check out our selected works
        </h2>
        <div
          className="b--hero-a__wrapper js--hero-a"
          ref={containerRef}
          data-horizontal-section
        >
          <div className="b--hero-a__wrapper__content">
            <a
              ref={addToRefs}
              className="b--card-b"
              href="#"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1671561009644-3d2459190774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIxMzUxMTQ&ixlib=rb-4.0.3&q=80&w=400')",
                backgroundPositionX: "50%",
              }}
            ></a>
          </div>
          <div className="b--hero-a__wrapper__content">
            <a
              ref={addToRefs}
              className="b--card-b"
              href="#"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1671394507023-76c50b824053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIxMzUxMTQ&ixlib=rb-4.0.3&q=80&w=400')",
                backgroundPositionX: "50%",
              }}
            ></a>
          </div>
          <div className="b--hero-a__wrapper__content">
            <a
              ref={addToRefs}
              className="b--card-b"
              href="#"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1671036810802-379ec0c402d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIxMzYyMjk&ixlib=rb-4.0.3&q=80&w=400')",
                backgroundPositionX: "50%",
              }}
            ></a>
          </div>
          <div className="b--hero-a__wrapper__content">
            <a
              ref={addToRefs}
              className="b--card-b"
              href="#"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1671459618991-fd2f37781ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIxMzYyNTY&ixlib=rb-4.0.3&q=80&w=400')",
                backgroundPositionX: "50%",
              }}
            ></a>
          </div>
          <div className="b--hero-a__wrapper__content">
            <a
              ref={addToRefs}
              className="b--card-b"
              href="#"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1670679897756-c086f8d26f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIxMzYyNTY&ixlib=rb-4.0.3&q=80&w=400')",
                backgroundPositionX: "50%",
              }}
            ></a>
          </div>
          <div className="b--hero-a__wrapper__content">
            <a
              ref={addToRefs}
              className="b--card-b"
              href="#"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1671124594962-3b8ab41e5b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIxMzYyNTY&ixlib=rb-4.0.3&q=80&w=400')",
                backgroundPositionX: "50%",
              }}
            ></a>
          </div>
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
