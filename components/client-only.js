"use client"

import { useEffect, useState } from "react"
import CursorEffect from "@/components/cursor-effect"
import SplineModel from "@/components/spline-model"

export default function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // If the child is CursorEffectWrapper, render the actual CursorEffect
  if (children?.type?.name === "CursorEffectWrapper") {
    return <CursorEffect />
  }

  // If the child is SplineModelWrapper, render the actual SplineModel
  if (children?.type?.name === "SplineModelWrapper") {
    return <SplineModel />
  }

  return children
}

