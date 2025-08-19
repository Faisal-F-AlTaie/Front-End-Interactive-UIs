import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrackButton } from "@/components/track-button"

export default function CoreTrackingPage() {
  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-3xl font-bold mb-6">Core Tracking</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Track Feature Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Monitor how users interact with specific features in your application.
            </p>
            <TrackButton featureName="Dashboard_View" userId="user_123">
              Track Dashboard View
            </TrackButton>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Understand the overall health and engagement of your users with an AI-generated score.
            </p>
            <Button>View User Health Scores</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Real-time Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access live data and insights into user behavior as it happens.
            </p>
            <Button>Go to Real-time Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
