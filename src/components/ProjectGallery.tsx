import React, { useEffect, useRef } from "react";
import "./ProjectGallery.css";

const portfolioImages = [
  "NDS-Portfolio-01-01-Bravura.jpg",
  "NDS-Portfolio-01-02-Twinglo.jpg",
  "NDS-Portfolio-01-03-SME-Cafe.jpg",
  "NDS-Portfolio-01-04-Uju-Email.jpg",
  "NDS-Portfolio-01-05--Centre-for-Memories.jpg",
  "NDS-Portfolio-01-06-Zhymma.jpg",
  "NDS-Portfolio-01-07-Crystal-Paints.jpg",
  "NDS-Portfolio-01-08-AHOD.jpg",
];

const ProjectGallery = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ballMessageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const projectGallery = document.querySelector("body");
    if (!projectGallery) return;

    const parallaxEffect = () => {
      const scrollPosition = window.pageYOffset;
      const projects = projectGallery.querySelectorAll(".parallax");
      projects.forEach((project) => {
        const speed = parseFloat(project.getAttribute("data-speed") || "0");
        const yPos = -(scrollPosition * speed);
        (project as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        window.addEventListener("scroll", parallaxEffect);
      } else {
        window.removeEventListener("scroll", parallaxEffect);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const cursorTag = cursorRef.current;
    if (!cursorTag) return;
    const balls = cursorTag.querySelectorAll("div");
    const ballMessage = ballMessageRef.current;
    if (!ballMessage) return;
    const images = document.querySelectorAll("img[data-hover]");
    const links = document.querySelectorAll("a");

    let aimX = 0;
    let aimY = 0;

    balls.forEach((ball, index) => {
      let currentX = 0;
      let currentY = 0;
      let speed = 0.3 - index * 0.015;

      const animate = () => {
        currentX += (aimX - currentX) * speed;
        currentY += (aimY - currentY) * speed;
        ball.style.left = `${currentX}px`;
        ball.style.top = `${currentY}px`;

        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const distanceFromRight = windowWidth - currentX;
        if (distanceFromRight < 350) {
          cursorTag.classList.add("left");
        } else {
          cursorTag.classList.remove("left");
        }

        requestAnimationFrame(animate);
      };
      animate();
    });

    const handleMouseMove = (event: MouseEvent) => {
      aimX = event.pageX;
      aimY = event.pageY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    const handleImageMouseOver = (e: Event) => {
      ballMessage.classList.add("visible");
      ballMessage.innerHTML = (e.target as HTMLElement).getAttribute("data-hover") || "";
    };

    const handleImageMouseOut = () => {
      ballMessage.classList.remove("visible");
    };

    images.forEach((image) => {
      image.addEventListener("mouseover", handleImageMouseOver);
      image.addEventListener("mouseout", handleImageMouseOut);
    });

    const toggleTheme = (isHovering: boolean) => {
      const cursorBall = cursorTag.querySelector("div");
      if (cursorBall) {
        if (isHovering) {
          cursorBall.classList.add("solid-fill");
        } else {
          cursorBall.classList.remove("solid-fill");
        }
      }
    };

    links.forEach((link) => {
      link.addEventListener("mouseover", () => toggleTheme(true));
      link.addEventListener("mouseout", () => toggleTheme(false));
      link.addEventListener("click", () => toggleTheme(false));
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", parallaxEffect);
      document.removeEventListener("mousemove", handleMouseMove);
      images.forEach((image) => {
        image.removeEventListener("mouseover", handleImageMouseOver);
        image.removeEventListener("mouseout", handleImageMouseOut);
      });
      links.forEach((link) => {
        link.removeEventListener("mouseover", () => toggleTheme(true));
        link.removeEventListener("mouseout", () => toggleTheme(false));
        link.removeEventListener("click", () => toggleTheme(false));
      });
    };
  }, []);

  return (
    <>
      <div className="project-gallery">
        <a id="work"></a>
        <div className="project-left-small parallax" data-speed="0.5">
          <a href="#">
            <img src={`/src/assets/Portfolio/${portfolioImages[0]}`} data-hover="<h2>SPARK, Metal Fabrications Branding</h2>" />
          </a>
          <div className="text-on-hover">Photoshop, illustrator, Branding, Logo Design.</div>
        </div>
        <div className="project-right-large parallax" data-speed="0.4">
          <a href="#">
            <img src={`/src/assets/Portfolio/${portfolioImages[1]}`} data-hover="<h2>Buckminster Gliding Club Visual Identaty</h2>" />
          </a>
          <div className="text-on-hover">illustrator, InDesign, Word Press, Brand Design, Branding.</div>
        </div>
        <div className="project-left-large parallax" data-speed="0.4">
          <a href="#">
            <img src={`/src/assets/Portfolio/${portfolioImages[2]}`} data-hover="<h2>Big Blue Sea Visual Identity</h2>" />
          </a>
          <div className="text-on-hover">iPhotoshop, illustrator, Logo Design.</div>
        </div>
        <div className="project-right-small parallax" data-speed="0.3">
          <a href="#">
            <img src={`/src/assets/Portfolio/${portfolioImages[3]}`} data-hover="<h2>Operating Manual for Spaceship Earth, Book & Type Design</h2>" />
          </a>
          <div className="text-on-hover">Photoshop, illustrator, Branding, Logo Design.</div>
        </div>
        <div className="project-left-small parallax" data-speed="0.2">
          <img src={`/src/assets/Portfolio/${portfolioImages[4]}`} data-hover="<h2>In Cold Blood, Penguin Random House Design Award Finalists 2017</h2>" />
          <div className="text-on-hover">Photoshop, illustrator, Book, Cover Desgin, Type Design</div>
        </div>
        <div className="project-right-large parallax" data-speed="0.3">
          <img src={`/src/assets/Portfolio/${portfolioImages[5]}`} data-hover="<h2>Paper Plane Flight Logging System for GA & Glider.</h2>" />
          <div className="text-on-hover">Adobe Xd, Figma, Website Design, UI / UX.</div>
        </div>
        <div className="project-left-large parallax" data-speed="0.2">
          <img src={`/src/assets/Portfolio/${portfolioImages[6]}`} data-hover="<h2>Motion Graphics & Animation</h2>" />
          <div className="text-on-hover">Motion Desgin, Animation, After Effect, illustraton.</div>
        </div>
        <div className="project-right-small parallax" data-speed="0.1">
          <img src={`/src/assets/Portfolio/${portfolioImages[7]}`} data-hover="<h2>Swim.io, Swimming App UI and UX Design Concept</h2>" />
          <div className="text-on-hover">Adobe Xd, UI/UX Design</div>
        </div>
      </div>
      <div className="cursor" ref={cursorRef}>
        <div>
          <span ref={ballMessageRef}></span>
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
