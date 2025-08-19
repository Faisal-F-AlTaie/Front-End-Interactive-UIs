import Image from "next/image"

export function DashboardShowcaseSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See Postora in Action</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into your ultimate social media management hub.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-xl">
            <Image
              src="/placeholder.svg?height=700&width=1200"
              width="1200"
              height="700"
              alt="Postora Dashboard Preview"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white/50 to-transparent">
              {/* Optional: Add play button or interactive elements here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
