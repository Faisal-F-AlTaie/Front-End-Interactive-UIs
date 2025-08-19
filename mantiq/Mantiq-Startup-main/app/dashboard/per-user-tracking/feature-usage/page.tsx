"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"
import { BarChart3, TrendingUp, TrendingDown, Minus } from "lucide-react"

export default function FeatureUsagePage() {
  const mostUsedFeatures = [
    { name: "Dashboard View", usage: 95, trend: "up", change: "+5%" },
    { name: "Report Generation", usage: 78, trend: "up", change: "+12%" },
    { name: "Data Visualization", usage: 65, trend: "stable", change: "0%" },
    { name: "User Analytics", usage: 52, trend: "up", change: "+8%" },
    { name: "Export Tools", usage: 45, trend: "down", change: "-3%" },
  ]

  const leastUsedFeatures = [
    { name: "API Documentation", usage: 8, trend: "down", change: "-2%" },
    { name: "Advanced Filters", usage: 12, trend: "up", change: "+1%" },
    { name: "Bulk Operations", usage: 18, trend: "stable", change: "0%" },
    { name: "Custom Themes", usage: 22, trend: "up", change: "+4%" },
    { name: "Integration Hub", usage: 28, trend: "down", change: "-1%" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <PageTransition>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white min-h-screen">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Feature Usage Analysis</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Updated Daily
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Most Used Feature</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">Dashboard View</div>
              <p className="text-xs text-gray-500">95% adoption rate</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Least Used Feature</CardTitle>
              <BarChart3 className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">API Docs</div>
              <p className="text-xs text-gray-500">8% adoption rate</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Average Usage</CardTitle>
              <BarChart3 className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">42%</div>
              <p className="text-xs text-gray-500">Across all features</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Growth Trend</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">+7%</div>
              <p className="text-xs text-gray-500">Overall increase</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Most Used Features
              </CardTitle>
              <CardDescription className="text-gray-600">Features with highest adoption rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mostUsedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                    <p className="text-xs text-gray-500">{feature.usage}% adoption</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(feature.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(feature.trend)}`}>{feature.change}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-600" />
                Least Used Features
              </CardTitle>
              <CardDescription className="text-gray-600">Features that need attention or improvement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {leastUsedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                    <p className="text-xs text-gray-500">{feature.usage}% adoption</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(feature.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(feature.trend)}`}>{feature.change}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Feature Usage Recommendations</CardTitle>
            <CardDescription className="text-gray-600">AI-powered insights to improve feature adoption</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">💡 Opportunity: API Documentation</h4>
              <p className="text-sm text-blue-800">
                Only 8% of users access API documentation. Consider adding in-app tutorials or contextual help to
                increase adoption.
              </p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">✅ Success: Report Generation</h4>
              <p className="text-sm text-green-800">
                Report generation saw a 12% increase this month. Users are finding value in data export capabilities.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-yellow-900 mb-2">⚠️ Watch: Export Tools</h4>
              <p className="text-sm text-yellow-800">
                Export tools usage declined by 3%. Monitor user feedback and consider UX improvements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}
