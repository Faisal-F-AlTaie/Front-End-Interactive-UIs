"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"
import { Bot, Send, User, Sparkles, MessageCircle, HelpCircle, BarChart3 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  type?: "text" | "insight" | "recommendation"
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI assistant for Mantiq. I can help you with onboarding, answer questions about your data, create support tickets, and provide insights. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
      type: "text",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickActions = [
    { label: "Show Dashboard Overview", icon: BarChart3, action: "dashboard_overview" },
    { label: "Feature Usage Help", icon: HelpCircle, action: "feature_help" },
    { label: "Create Support Ticket", icon: MessageCircle, action: "support_ticket" },
    { label: "Data Insights", icon: Sparkles, action: "data_insights" },
  ]

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickAction = (action: string) => {
    const responses = {
      dashboard_overview: {
        content:
          "Here's your dashboard overview:\n\n📊 **Current Metrics:**\n• 1,500 active users (+12% this month)\n• 89% average feature adoption\n• 2.5 minutes average time to first use\n• 15% churn risk users identified\n\n🎯 **Key Insights:**\n• Dashboard View is your most popular feature (95% adoption)\n• API Documentation needs attention (8% adoption)\n• Report Generation trending up (+12%)\n\nWould you like me to dive deeper into any specific metric?",
        type: "insight" as const,
      },
      feature_help: {
        content:
          "I can help you understand and use Mantiq's features:\n\n🔧 **Core Features:**\n• **Feature Tracking** - Monitor which features users engage with\n• **Usage Analytics** - Identify most/least used features\n• **Time to Use** - Track adoption speed\n• **Churn Prediction** - AI-powered risk assessment\n\n📚 **Getting Started:**\n1. Start with the Dashboard for an overview\n2. Use Feature Tracking to see user behavior\n3. Check Time to Use for optimization opportunities\n\nWhich feature would you like to explore first?",
        type: "recommendation" as const,
      },
      support_ticket: {
        content:
          "I'll help you create a support ticket. Please provide:\n\n📝 **Required Information:**\n• Issue description\n• Priority level (Low/Medium/High/Critical)\n• Affected feature or area\n• Steps to reproduce (if applicable)\n\n🎫 **Ticket Categories:**\n• Bug Report\n• Feature Request\n• Account Issue\n• Data Question\n• Integration Help\n\nWhat type of support do you need?",
        type: "text" as const,
      },
      data_insights: {
        content:
          "Here are your latest data insights:\n\n🧠 **AI Analysis:**\n• **Power Users:** 15% of users drive 60% of feature usage\n• **Churn Risk:** 8% of users showing declining engagement\n• **Growth Opportunity:** API features have low adoption but high conversion correlation\n\n📈 **Trends:**\n• Mobile usage up 23% this quarter\n• Weekend engagement increased 15%\n• New user activation improved to 78%\n\n💡 **Recommendations:**\n• Focus onboarding on Dashboard and Reports\n• Create API tutorials to boost adoption\n• Implement re-engagement campaigns for at-risk users\n\nWant me to analyze any specific user segment?",
        type: "insight" as const,
      },
    }

    const response = responses[action as keyof typeof responses]
    if (response) {
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: response.content,
        sender: "ai",
        timestamp: new Date(),
        type: response.type,
      }
      setMessages((prev) => [...prev, aiMessage])
    }
  }

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase()

    let content = ""
    let type: "text" | "insight" | "recommendation" = "text"

    if (lowerInput.includes("churn") || lowerInput.includes("risk")) {
      content =
        "Based on your current data, I've identified 120 users (8%) at churn risk. These users show:\n\n⚠️ **Risk Indicators:**\n• Decreased session frequency (>50% drop)\n• No feature usage in 7+ days\n• Reduced time spent per session\n\n🎯 **Recommended Actions:**\n• Send re-engagement email campaigns\n• Offer personalized feature tutorials\n• Consider special offers or check-ins\n\nWould you like me to create a targeted intervention campaign?"
      type = "insight"
    } else if (lowerInput.includes("feature") || lowerInput.includes("usage")) {
      content =
        "Your feature usage analysis shows:\n\n📊 **Top Performers:**\n• Dashboard View: 95% adoption\n• Report Generation: 78% adoption (+12% growth)\n• Data Visualization: 65% adoption\n\n📉 **Needs Attention:**\n• API Documentation: 8% adoption\n• Advanced Filters: 12% adoption\n• Bulk Operations: 18% adoption\n\n💡 **Optimization Tips:**\n• Add contextual help for underused features\n• Create guided tutorials\n• Implement progressive disclosure\n\nShall I create an improvement plan for specific features?"
      type = "recommendation"
    } else if (lowerInput.includes("user") || lowerInput.includes("engagement")) {
      content =
        "Your user engagement metrics:\n\n👥 **User Segments:**\n• Power Users: 225 users (15%) - High engagement\n• Regular Users: 900 users (60%) - Moderate engagement\n• At-Risk Users: 375 users (25%) - Low engagement\n\n📈 **Engagement Trends:**\n• DAU/MAU Ratio: 0.34 (Good)\n• Average Session Length: 12 minutes\n• Features per User: 3.2 average\n\nWant me to analyze any specific user segment in detail?"
      type = "insight"
    } else {
      content =
        "I understand you're asking about: \"" +
        userInput +
        "\"\n\nI can help you with:\n• 📊 Data analysis and insights\n• 🔧 Feature usage optimization\n• ⚠️ Churn risk assessment\n• 🎫 Support ticket creation\n• 📚 Platform guidance\n\nCould you be more specific about what you'd like to know? Or try one of the quick actions below!"
    }

    return {
      id: Date.now().toString(),
      content,
      sender: "ai",
      timestamp: new Date(),
      type,
    }
  }

  const getMessageStyle = (type?: string) => {
    switch (type) {
      case "insight":
        return "bg-blue-50 border-blue-200"
      case "recommendation":
        return "bg-green-50 border-green-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <PageTransition>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white min-h-screen">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">AI Assistant</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Online
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-105"
              onClick={() => handleQuickAction(action.action)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <action.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">{action.label}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-600" />
              Chat with AI Assistant
            </CardTitle>
            <CardDescription className="text-gray-600">
              Get help with onboarding, data insights, and support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Messages */}
              <div className="h-96 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user" ? "bg-red-600 text-white" : `border ${getMessageStyle(message.type)}`
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "ai" && <Bot className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />}
                        {message.sender === "user" && <User className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />}
                        <div className="flex-1">
                          <div
                            className={`text-sm whitespace-pre-line ${
                              message.sender === "user" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {message.content}
                          </div>
                          <div
                            className={`text-xs mt-1 ${message.sender === "user" ? "text-red-100" : "text-gray-500"}`}
                          >
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 border border-gray-200 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about your data, features, or need help..."
                  className="flex-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-red-600 hover:bg-red-700 text-white"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">AI Capabilities</CardTitle>
            <CardDescription className="text-gray-600">What I can help you with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">📊 Data Analysis</h4>
                <p className="text-sm text-blue-800">
                  Get insights on user behavior, feature adoption, churn risk, and engagement metrics.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🚀 Onboarding Help</h4>
                <p className="text-sm text-green-800">Step-by-step guidance for new users and feature walkthroughs.</p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">🎫 Support Tickets</h4>
                <p className="text-sm text-purple-800">
                  Create and track support requests with automatic categorization.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">💡 Recommendations</h4>
                <p className="text-sm text-yellow-800">
                  AI-powered suggestions to improve user engagement and reduce churn.
                </p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">⚠️ Risk Alerts</h4>
                <p className="text-sm text-red-800">Real-time notifications about users at risk of churning.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">📚 Documentation</h4>
                <p className="text-sm text-gray-800">Quick access to feature guides, API docs, and best practices.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}
