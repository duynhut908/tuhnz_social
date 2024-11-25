import React, { useState, useRef, useEffect } from "react";
import Notifications from "../Notifications/Notifications";
import "./FloatingIcon.css";

export default function FloatingIcon() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 500 });
  const floatingIconRef = useRef(null);
  const isDragging = useRef(false);
  useEffect(() => {
    const savedPosition = localStorage.getItem("floatingIconPosition");
    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      setPosition({ x, y });
    }
  }, []);
  const toggleTab = () => {
    if (!isDragging.current) {
      setIsTabOpen((prev) => !prev);
    }
  };

  // Handle dragging
  const handleMouseDown = (e) => {
    e.preventDefault();
    const icon = floatingIconRef.current;
    const shiftX = e.clientX - icon.getBoundingClientRect().left;
    const shiftY = e.clientY - icon.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      const viewportWidth = window.innerWidth; // Chiều rộng màn hình
      const viewportHeight = window.innerHeight; // Chiều cao màn hình
      const iconWidth = icon.offsetWidth; // Chiều rộng của icon
      const iconHeight = icon.offsetHeight; // Chiều cao của icon

      const newX = Math.max(0, Math.min(pageX - shiftX, viewportWidth - iconWidth));
      const newY = Math.max(0, Math.min(pageY - shiftY, viewportHeight - iconHeight));
      const newPosition = {
        x: newX,
        y: newY,
      };
      setPosition(newPosition);

      localStorage.setItem("floatingIconPosition", JSON.stringify(newPosition));
    };

    const onMouseMove = (e) => {
      isDragging.current = true;
      moveAt(e.pageX, e.pageY);
    };

    document.addEventListener("mousemove", onMouseMove);

    const onMouseUp = () => {
      setTimeout(() => {
        isDragging.current = false;
      }, 0);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    const icon = floatingIconRef.current;
    icon.addEventListener("mousedown", handleMouseDown);

    return () => {
      icon.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div>
      <div
        ref={floatingIconRef}
        className="floating-icon"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        onClick={toggleTab}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="25" height="25" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={`${isTabOpen ? 'clicked' : ''}`}>
          <g><g><path d="M128.1,246c15.9,0,29.5-9.3,35.9-22.7H92.2C98.5,236.7,112.2,246,128.1,246L128.1,246z" />
            <path d="M224.7,189.1L224.7,189.1c-9.9-2.7-17.1-11.6-17.1-22.3c0-0.2,0-0.3,0-0.5h0v-62.6h-0.1c-1.3-39.4-30.3-71.7-68.1-78.3v-1.3c0-7.9-6.4-14.2-14.2-14.2c-7.9,0-14.2,6.4-14.2,14.2v1.3c-37.8,6.6-66.8,38.9-68.1,78.3h-0.1v62.5h-0.1c0,0.4,0.1,0.8,0.1,1.3c0,9.7-5.8,18.1-14.2,21.8c-4.9,1.3-8.6,5.7-8.6,11c0,6.3,5.1,11.4,11.4,11.4h193.4c6.3,0,11.4-5.1,11.4-11.4C236.1,194.2,231,189.1,224.7,189.1L224.7,189.1z" /></g></g>
        </svg>
      </div>
      {isTabOpen && <Notifications toggleNotifications={toggleTab}/>}
    </div>
  );
}
