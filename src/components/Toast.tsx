'use client';

import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Toast.scss"

export default function Toast({ message, href }: { message: string, href: string }) {
  
  const [show, setShow] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 0)

    return () => clearTimeout(timer);
  }, [])

  return (
    <div 
      className={`toast ${fadeIn ? "fade-in" : ""}`} 
      style={{ display: show ? "flex" : "none" }}
    >
      <FaEnvelope />
      <a
        href={href}
        className="message"
        target="_blank"
        rel="noreferrer noopener"
      >{message}</a>
      <span 
        className="close"
        onClick={() => {
          setShow(false);
        }}  
      >×</span>
    </div>
  )
}