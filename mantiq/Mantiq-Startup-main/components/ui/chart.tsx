"use client"

import * as React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend, // Added Legend import
} from "recharts"
import {
  type ChartConfig,
  ChartContainer as RechartsChartContainer,
  ChartTooltip as RechartsChartTooltip,
  ChartTooltipContent as RechartsChartTooltipContent,
} from "@/components/ui/chart" // Assuming this path is correct for your chart components

import { cn } from "@/lib/utils"

// Re-exporting the components from shadcn/ui/chart
export {
  RechartsChartContainer as ChartContainer,
  RechartsChartTooltip as ChartTooltip,
  RechartsChartTooltipContent as ChartTooltipContent,
}

// You can define your own chart components here using Recharts primitives
// For example, a simple LineChart component:
interface SimpleLineChartProps extends React.ComponentProps<typeof LineChart> {
  data: any[]
  config: ChartConfig
  className?: string
}

const SimpleLineChart = React.forwardRef<HTMLDivElement, SimpleLineChartProps>(
  ({ data, config, className, ...props }, ref) => (
    <div ref={ref} className={cn("h-[400px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} {...props}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <Tooltip content={<RechartsChartTooltipContent />} />
          <Legend /> {/* Added Legend component */}
          {Object.entries(config).map(([key, { color }]) => (
            <Line key={key} dataKey={key} stroke={`hsl(${color})`} dot={false} activeDot={{ r: 8 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  ),
)
SimpleLineChart.displayName = "SimpleLineChart"

// Example BarChart component
interface SimpleBarChartProps extends React.ComponentProps<typeof BarChart> {
  data: any[]
  config: ChartConfig
  className?: string
}

const SimpleBarChart = React.forwardRef<HTMLDivElement, SimpleBarChartProps>(
  ({ data, config, className, ...props }, ref) => (
    <div ref={ref} className={cn("h-[400px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} {...props}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <Tooltip content={<RechartsChartTooltipContent />} />
          <Legend />
          {Object.entries(config).map(([key, { color }]) => (
            <Bar key={key} dataKey={key} fill={`hsl(${color})`} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  ),
)
SimpleBarChart.displayName = "SimpleBarChart"

// Example AreaChart component
interface SimpleAreaChartProps extends React.ComponentProps<typeof AreaChart> {
  data: any[]
  config: ChartConfig
  className?: string
}

const SimpleAreaChart = React.forwardRef<HTMLDivElement, SimpleAreaChartProps>(
  ({ data, config, className, ...props }, ref) => (
    <div ref={ref} className={cn("h-[400px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} {...props}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <Tooltip content={<RechartsChartTooltipContent />} />
          <Legend />
          {Object.entries(config).map(([key, { color }]) => (
            <Area key={key} dataKey={key} fill={`hsl(${color})`} stroke={`hsl(${color})`} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  ),
)
SimpleAreaChart.displayName = "SimpleAreaChart"

export { SimpleLineChart, SimpleBarChart, SimpleAreaChart }
