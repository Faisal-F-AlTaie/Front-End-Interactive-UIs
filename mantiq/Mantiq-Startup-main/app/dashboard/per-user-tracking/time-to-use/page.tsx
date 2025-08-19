"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PageTransition } from "@/components/page-transition"
import { Clock, Timer, Zap, Target } from "lucide-react"

export default function TimeToUsePage() {
  const timeToFirstUse = [
    { feature: "Dashboard View", avgTime: "2 minutes", category: "Excellent", percentage: 95 },
    { feature: "Profile Setup", avgTime: "5 minutes", category: "Good", percentage: 78 },
    { feature: "Report Generation", avgTime: "12 minutes", category: "Average", percentage: 65 },
    { feature: "Data Export", avgTime: "25 minutes", category: "Slow", percentage: 45 },
    { feature: "API Integration", avgTime: "2.5 hours", category: "Very Slow", percentage: 15 },
  ]

  const onboardingFunnel = [
    { step: "Account Creation", users: 1500, percentage: 100, avgTime: "30 seconds" },
    { step: "Email Verification", users: 1425, percentage: 95, avgTime: "2 minutes" },
    { step: "Profile Setup", users: 1350, percentage: 90, avgTime: "5 minutes" },
    { step: "First Feature Use", users: 1200, percentage: 80, avgTime: "8 minutes" },
    { step: "Second Feature Use", users: 900, percentage: 60, avgTime: "15 minutes" },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Excellent":
        return "bg-green-100 text-green-800 border-green-200"
      case "Good":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Average":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Slow":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Very Slow":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <PageTransition>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white min-h-screen">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Time To Use Analysis</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Real-time Tracking
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Fastest Adoption</CardTitle>
              <Zap className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">2 min</div>
              <p className="text-xs text-gray-500">Dashboard View</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Average Time</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12 min</div>
              <p className="text-xs text-gray-500">Across all features</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Slowest Adoption</CardTitle>
              <Timer className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">2.5 hrs</div>
              <p className="text-xs text-gray-500">API Integration</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Quick Adopters</CardTitle>
              <Target className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">80%</div>
              <p className="text-xs text-gray-500">Use first feature within 10min</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Time to First Use by Feature</CardTitle>
              <CardDescription className="text-gray-600">
                How long users take to first interact with each feature
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {timeToFirstUse.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">{item.feature}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">Avg: {item.avgTime}</span>
                        <Badge variant="outline" className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{item.percentage}%</p>
                      <p className="text-xs text-gray-500">adoption</p>
                    </div>
                  </div>
                  <Progress
                    value={item.percentage}
                    className="h-2"
                    style={{
                      background: "#f3f4f6",
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">User Onboarding Funnel</CardTitle>
              <CardDescription className="text-gray-600">Time progression through onboarding steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {onboardingFunnel.map((step, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">{step.step}</p>
                      <p className="text-xs text-gray-500">
                        {step.users} users • Avg: {step.avgTime}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{step.percentage}%</p>
                    </div>
                  </div>
                  <Progress
                    value={step.percentage}
                    className="h-2"
                    style={{
                      background: "#f3f4f6",
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Time-to-Use Insights & Recommendations</CardTitle>
            <CardDescription className="text-gray-600">AI-powered analysis of user adoption patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🚀 Quick Wins</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Dashboard View: Excellent 2min adoption</li>
                  <li>• Profile Setup: Good 5min completion</li>
                  <li>• 80% of users engage within 10 minutes</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">⚠️ Areas for Improvement</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• API Integration: 2.5hrs is too slow</li>
                  <li>• Data Export: 25min needs optimization</li>
                  <li>• Consider guided tutorials for complex features</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">💡 Optimization Suggestions</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Add progressive disclosure for advanced features</li>
                <li>• Implement contextual onboarding tooltips</li>
                <li>• Create feature-specific quick start guides</li>
                <li>• Consider gamification for slower-adopting features</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}
