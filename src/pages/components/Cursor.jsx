import React, { useState, useEffect } from "react";

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".cursor2");

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      cursor.classList.add("click");
      cursorInner.classList.add("cursorinnerhover");
    };

    const handleMouseUp = () => {
      setIsClicked(false);
      cursor.classList.remove("click");
      cursorInner.classList.remove("cursorinnerhover");
    };

    const handleMouseOver = () => {
      setIsHovered(true);
      cursor.classList.add("hover");
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      cursor.classList.remove("hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
}

export default Cursor;