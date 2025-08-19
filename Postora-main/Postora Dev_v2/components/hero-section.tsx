import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  InstagramIcon as Tiktok,
  X,
  PinIcon as Pinterest,
  DiscIcon as Discord,
  RssIcon as Reddit,
  SnailIcon as Snapchat,
  Twitch,
  TextIcon as Telegram,
  VibrateIcon as Vk,
} from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Plan. Script. Schedule. All Your Social Content in One Place.
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                AI-powered scheduling and content tools for creators and teams.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90">Get Started Free</Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100 bg-transparent">
                See It in Action
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 py-4">
              <Instagram className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Youtube className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Facebook className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Linkedin className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Tiktok className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <X className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Pinterest className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Discord className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Reddit className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Snapchat className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Twitch className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Telegram className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
              <Vk className="h-8 w-8 text-gray-700 hover:text-turquoise transition-colors cursor-pointer" />
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            width="600"
            height="400"
            alt="Dashboard Mockup"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
