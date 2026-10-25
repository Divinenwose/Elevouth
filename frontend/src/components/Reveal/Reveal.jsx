import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Reveal.css";

/**
 * Adds scroll-reveal animations to every page without touching page markup.
 * Direct children of each <section> fade/slide in as they enter the viewport;
 * when a child is a row/grid of cards, the cards are staggered instead.
 * Uses the individual `translate` property so existing `transform`s are untouched.
 */
const SKIP_SECTION = /hero|sponsors|announcement/i;

const isLaidOut = (el) => {
  const cs = getComputedStyle(el);
  return (
    cs.display !== "none" &&
    cs.position !== "absolute" &&
    cs.position !== "fixed" &&
    el.offsetHeight > 0 &&
    el.getBoundingClientRect().left < window.innerWidth &&
    !SKIP_SECTION.test(el.className)
  );
};

const Reveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    const targets = [];
    const mark = (el, i = 0, kind = "up") => {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal", `reveal-${kind}`);
      el.style.setProperty("--reveal-delay", `${Math.min(i, 5) * 90}ms`);
      targets.push(el);
    };

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll("section, .academy-section").forEach((section) => {
        if (SKIP_SECTION.test(section.className)) return;
        [...section.children].filter(isLaidOut).forEach((child) => {
          const kids = [...child.children].filter(isLaidOut);
          const d = getComputedStyle(child).display;
          const isGroup =
            (d === "flex" || d === "grid") &&
            kids.length >= 2 &&
            kids.length <= 8 &&
            kids.every((k) => k.tagName !== "SPAN" && k.tagName !== "LI");
          if (isGroup) kids.forEach((k, i) => mark(k, i, "up"));
          else mark(child, 0, "up");
        });
      });
      targets.forEach((el) => io.observe(el));
    });

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      targets.forEach((el) => {
        el.classList.remove("reveal", "reveal-up", "reveal-in");
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
};

export default Reveal;
