"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function FileUploadCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    } else {
      setSelectedFile(null)
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name)
      // Simulate file upload
      alert(`File "${selectedFile.name}" uploaded successfully! (Simulated)`)
      setSelectedFile(null)
    } else {
      alert("Please select a file to upload.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Feature Usage Data (CSV)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="file-upload">Upload CSV File</Label>
          <Input id="file-upload" type="file" accept=".csv" onChange={handleFileChange} />
        </div>
        {selectedFile && <p className="text-sm text-muted-foreground">Selected file: {selectedFile.name}</p>}
        <Button onClick={handleUpload} disabled={!selectedFile} className="w-full">
          Upload Data
        </Button>
      </CardContent>
    </Card>
  )
}
