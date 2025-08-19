import { Brain, CalendarDays, BarChart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Scripting",
      description: "Generate engaging posts, captions, and hashtags in seconds, tailored to your tone and personality.",
    },
    {
      icon: CalendarDays,
      title: "Advanced Scheduling Suite",
      description: "Drag-and-drop calendar, queue manager, AI-suggested best posting times, and bulk upload options.",
    },
    {
      icon: BarChart,
      title: "Comprehensive Analytics",
      description:
        "Track post-level performance metrics and account growth across all your social platforms with exportable reports.",
    },
    {
      icon: Users,
      title: "Seamless Team Collaboration",
      description: "Add team members and assign roles (Admin, Editor, Viewer) to streamline your content workflow.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Every Creator</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Postora provides all the tools you need to manage, create, and optimize your social media presence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-gray-200 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <feature.icon className="h-8 w-8 text-turquoise" />
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
