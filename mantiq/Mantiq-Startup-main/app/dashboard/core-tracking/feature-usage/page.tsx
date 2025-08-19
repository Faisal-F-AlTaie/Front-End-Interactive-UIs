"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileUploadCard } from "@/components/file-upload-card"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FeatureUsagePage() {
  const [featureName, setFeatureName] = useState("")
  const [userId, setUserId] = useState("")

  const handleTrackEvent = () => {
    if (featureName && userId) {
      console.log(`Tracking event: Feature "${featureName}" used by User "${userId}"`)
      // In a real application, you would send this data to your backend/analytics service
      alert(`Event tracked: Feature "${featureName}" used by User "${userId}"`)
      setFeatureName("")
      setUserId("")
    } else {
      alert("Please enter both Feature Name and User ID.")
    }
  }

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-3xl font-bold mb-6">Track Feature Usage</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Manually Track Feature Event</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="feature-name">Feature Name</Label>
              <Input
                id="feature-name"
                placeholder="e.g., 'Dashboard_View', 'Report_Generated'"
                value={featureName}
                onChange={(e) => setFeatureName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="user-id">User ID</Label>
              <Input
                id="user-id"
                placeholder="e.g., 'user_123', 'john.doe@example.com'"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <Button onClick={handleTrackEvent} className="w-full">
              Track Event
            </Button>
          </CardContent>
        </Card>
        <FileUploadCard />
      </div>
    </div>
  )
}
