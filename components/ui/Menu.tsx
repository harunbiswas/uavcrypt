"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {
  const items = [
    { link: "#home", title: "Home" },
    { link: "#about", title: "About" },
    { link: "#service", title: "Services" },
    { link: "#portfolio", title: "Portfolio" },
    { link: "#testimonials", title: "Testimonials" },
    { link: "#contact", title: "Contact" },
  ];

  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Adjust this threshold to suit your needs
    });

    items.forEach((item) => {
      const section = document.querySelector(item.link) as HTMLElement;
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      items.forEach((item) => {
        const section = document.querySelector(item.link) as HTMLElement;
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [items]);

  return (
    <ul className="nav-menu flex-col md:flex-row flex gap-4 items-center justify-end w-full">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            className={`text-md font-bold capitalize ${
              active === item.link ? "text-purple-600" : "text-gray-200"
            } hover:text-purple-600`}
            href={item.link}
            onClick={() => setActive(item.link)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
