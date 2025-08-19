"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { trackClick } from "@/actions/track-click"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface TrackButtonProps {
  featureName: string
  userId: string
  children: React.ReactNode
}

export function TrackButton({ featureName, userId, children }: TrackButtonProps) {
  const { toast } = useToast()
  const [isTracking, setIsTracking] = useState(false)

  const handleClick = async () => {
    setIsTracking(true)
    try {
      const result = await trackClick({ featureName, userId })
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to track click.",
        variant: "destructive",
      })
      console.error("Error tracking click:", error)
    } finally {
      setIsTracking(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isTracking}>
      {isTracking ? "Tracking..." : children}
    </Button>
  )
}
