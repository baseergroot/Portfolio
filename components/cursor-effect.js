"use client"

import { useEffect, useState } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) return // Don't show custom cursor on mobile

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    // Add hover effect for links and buttons
    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, [role="button"]')

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true))
        link.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()
    setHidden(false)

    return () => {
      removeEventListeners()
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-50" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-75" : "scale-100"} ${linkHovered ? "cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

