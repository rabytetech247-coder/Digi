"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "./Icon";

const slides = [
  {
    kicker: "FEATURED AI RESOURCES",
    title: "Master AI Workflows in 2026",
    desc: "Unlock the ultimate AI creator playbook. Automate your tasks and scale your content instantly.",
    bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    link: "/categories/ai-tools"
  },
  {
    kicker: "PREMIUM TEMPLATES",
    title: "Organize Your Life with Notion",
    desc: "Complete life OS templates to track your habits, goals, and daily tasks seamlessly.",
    bg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop",
    link: "/categories/templates"
  },
  {
    kicker: "GROWTH GUIDES",
    title: "The Freelancer Playbook",
    desc: "A step-by-step guide to finding high-paying clients and building a sustainable career.",
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    link: "/products"
  },
  {
    kicker: "CREATIVE ASSETS",
    title: "Ultimate Social Media Kit",
    desc: "500+ customizable Canva templates designed to boost engagement and followers.",
    bg: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop",
    link: "/categories"
  },
  {
    kicker: "DEVELOPMENT COURSES",
    title: "Full-Stack Web Mastery",
    desc: "Go from beginner to pro with comprehensive modern web development courses.",
    bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    link: "/categories/courses"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds per slide for cinematic feel
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider-wrapper">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === current ? "active" : ""}`}>
          <img src={slide.bg} alt="Background" className="slide-bg" />
          <div className="slide-overlay"></div>
          
          <div className="slide-content">
            <span className="slide-kicker">
              <Icon name="star" size={14} /> {slide.kicker}
            </span>
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-desc">{slide.desc}</p>
            <div className="slide-actions">
              <Link href={slide.link} className="btn-slide-primary">
                Explore Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
