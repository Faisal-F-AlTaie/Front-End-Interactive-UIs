"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PageTransition } from "@/components/page-transition"
import { Users, MousePointer, Activity, TrendingUp } from "lucide-react"

export default function FeatureTrackingPage() {
  const featureData = [
    { name: "Dashboard View", users: 1250, total: 1500, percentage: 83 },
    { name: "Report Generation", users: 890, total: 1500, percentage: 59 },
    { name: "Data Export", users: 675, total: 1500, percentage: 45 },
    { name: "User Management", users: 450, total: 1500, percentage: 30 },
    { name: "API Integration", users: 225, total: 1500, percentage: 15 },
  ]

  const recentActivity = [
    { user: "john.doe@example.com", feature: "Dashboard View", timestamp: "2 minutes ago" },
    { user: "jane.smith@example.com", feature: "Report Generation", timestamp: "5 minutes ago" },
    { user: "mike.johnson@example.com", feature: "Data Export", timestamp: "8 minutes ago" },
    { user: "sarah.wilson@example.com", feature: "User Management", timestamp: "12 minutes ago" },
  ]

  return (
    <PageTransition>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white min-h-screen">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Feature Tracking</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Live Data
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Features</CardTitle>
              <MousePointer className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <p className="text-xs text-gray-500">Available features</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">1,500</div>
              <p className="text-xs text-gray-500">Total registered users</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Feature Usage</CardTitle>
              <Activity className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <p className="text-xs text-gray-500">Average adoption rate</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">+12%</div>
              <p className="text-xs text-gray-500">From last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Feature Usage Overview</CardTitle>
              <CardDescription className="text-gray-600">
                Track which features are being used by your users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {featureData.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                      <p className="text-xs text-gray-500">
                        {feature.users} of {feature.total} users
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{feature.percentage}%</p>
                    </div>
                  </div>
                  <Progress
                    value={feature.percentage}
                    className="h-2"
                    style={{
                      background: "#f3f4f6",
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="col-span-3 border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Recent Activity</CardTitle>
              <CardDescription className="text-gray-600">Latest feature usage by users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-xs text-gray-500">Used {activity.feature}</p>
                    </div>
                    <div className="text-xs text-gray-400">{activity.timestamp}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  )
}
