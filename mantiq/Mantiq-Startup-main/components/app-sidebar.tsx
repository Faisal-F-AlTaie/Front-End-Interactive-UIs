"use client"

import type * as React from "react"
import { BarChart3, Brain, ChevronRight, Home, Settings, TrendingUp, User, Users } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: false,
    },
    {
      title: "Core Tracking",
      url: "#",
      icon: BarChart3,
      isActive: false,
      items: [
        {
          title: "Overview",
          url: "/dashboard/core-tracking",
        },
        {
          title: "Feature Usage",
          url: "/dashboard/core-tracking/feature-usage",
        },
      ],
    },
    {
      title: "Per User Tracking",
      url: "#",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "Feature Tracking",
          url: "/dashboard/per-user-tracking/feature-tracking",
        },
        {
          title: "Feature Usage",
          url: "/dashboard/per-user-tracking/feature-usage",
        },
        {
          title: "Time To Use",
          url: "/dashboard/per-user-tracking/time-to-use",
        },
      ],
    },
    {
      title: "AI Agent Layer",
      url: "#",
      icon: Brain,
      isActive: false,
      items: [
        {
          title: "General Assistant",
          url: "/dashboard/ai-agent/general-assistant",
        },
        {
          title: "Chatbot",
          url: "/dashboard/ai-agent/chatbot",
        },
      ],
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
      isActive: false,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      isActive: false,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" className="bg-slate-800 border-slate-700" {...props}>
      <SidebarHeader className="border-b border-slate-700 bg-slate-800">
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-white">Insightlytics</span>
            <span className="truncate text-xs text-slate-400">Analytics Platform</span>
          </div>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="bg-slate-800">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs font-medium uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <Collapsible asChild defaultOpen={item.isActive} className="group/collapsible">
                      <div>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            className="text-slate-300 hover:text-white hover:bg-slate-700 data-[state=open]:bg-slate-700 data-[state=open]:text-white"
                          >
                            {item.icon && <item.icon className="h-4 w-4" />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className="text-slate-400 hover:text-white hover:bg-slate-700"
                                >
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className="text-slate-300 hover:text-white hover:bg-slate-700 data-[active=true]:bg-red-600 data-[active=true]:text-white"
                    >
                      <a href={item.url}>
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-700 bg-slate-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-slate-600 text-white">
                <User className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-white">John Doe</span>
                <span className="truncate text-xs text-slate-400">john@example.com</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
