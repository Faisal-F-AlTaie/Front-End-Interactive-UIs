"use client"

import { useState } from "react"
import { Bot, Send, Sparkles, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"
import { AnimatedButton } from "@/components/animated-button"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  messageType?: "insight" | "recommendation" | "alert" | "text"
}

export default function GeneralAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hello! I'm your AI assistant. I can help you with onboarding, data analysis, support tickets, and more. What would you like to know?",
      timestamp: new Date(),
      messageType: "text",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const { toast } = useToast()

  const quickActions = [
    { label: "Analyze User Behavior", icon: TrendingUp, action: "analyze-behavior" },
    { label: "Create Support Ticket", icon: Users, action: "create-ticket" },
    { label: "Feature Recommendations", icon: Sparkles, action: "recommendations" },
    { label: "Onboarding Help", icon: Zap, action: "onboarding" },
  ]

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      "analyze-behavior":
        "Based on your recent data, I notice that 73% of users are engaging with the core tracking features, but only 45% are using the per-user tracking. Would you like me to create a strategy to improve adoption?",
      "create-ticket":
        "I can help you create a support ticket. What issue are you experiencing? Please provide details about the problem, steps to reproduce, and any error messages.",
      recommendations:
        "Here are my top recommendations: 1) Implement user onboarding tooltips for new features, 2) Add email notifications for important metrics, 3) Create a dashboard widget for quick insights. Which would you like to explore first?",
      onboarding:
        "I'm here to help you get started! Let me guide you through the key features: Dashboard Overview, Core Tracking for general metrics, Per User Tracking for individual analysis, and this AI Assistant for ongoing support. What would you like to learn about first?",
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: quickActions.find((qa) => qa.action === action)?.label || "",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setIsTyping(true)

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: actionMessages[action],
        timestamp: new Date(),
        messageType:
          action === "analyze-behavior" ? "insight" : action === "recommendations" ? "recommendation" : "text",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)

    toast({
      title: "Action Initiated",
      description: `Processing your request for ${quickActions.find((qa) => qa.action === action)?.label}`,
    })
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand your question. Let me analyze the data and provide you with insights.",
        "That's a great question! Based on your current metrics, I recommend focusing on user engagement strategies.",
        "I can help you with that. Let me pull up the relevant information from your dashboard.",
        "Excellent point! This relates to your user retention metrics. Would you like me to create a detailed report?",
      ]

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        messageType: "text",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 2000)
  }

  const getMessageTypeColor = (messageType?: string) => {
    switch (messageType) {
      case "insight":
        return "bg-blue-100 border-blue-300 text-blue-800"
      case "recommendation":
        return "bg-green-100 border-green-300 text-green-800"
      case "alert":
        return "bg-red-100 border-red-300 text-red-800"
      default:
        return "bg-slate-100 border-slate-300 text-slate-800"
    }
  }

  return (
    <PageTransition>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">AI General Assistant</h2>
            <p className="text-slate-600">Get help with onboarding, data analysis, and support</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {quickActions.map((action, index) => (
            <AnimatedButton
              key={action.action}
              onClick={() => handleQuickAction(action.action)}
              className="h-auto p-4 justify-start"
              variant="outline"
              delay={index * 0.1}
            >
              <action.icon className="h-5 w-5 mr-2 text-red-600" />
              <span className="text-sm font-medium">{action.label}</span>
            </AnimatedButton>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-red-600" />
                Chat Assistant
              </CardTitle>
              <CardDescription>Ask questions, get insights, and receive personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === "user"
                            ? "bg-red-600 text-white"
                            : `border ${getMessageTypeColor(message.messageType)}`
                        }`}
                      >
                        {message.type === "assistant" && message.messageType && message.messageType !== "text" && (
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {message.messageType === "insight"
                              ? "💡 Insight"
                              : message.messageType === "recommendation"
                                ? "🎯 Recommendation"
                                : "⚠️ Alert"}
                          </Badge>
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.type === "user" ? "text-red-100" : "text-slate-500"}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-100 border border-slate-300 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything about your analytics..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-red-600 hover:bg-red-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Data Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm">User Behavior Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Smart Recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Onboarding Support</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">User engagement increased by 23% this week</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">Feature adoption rate is above target</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">3 users at risk of churning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
