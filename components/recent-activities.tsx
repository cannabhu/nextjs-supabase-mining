import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MJ",
    },
    action: "updated the safety report for",
    project: "Gold Mountain Extraction",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
    action: "added a new sustainability initiative to",
    project: "Silver Creek Mining",
    time: "5 hours ago",
  },
  {
    id: 3,
    user: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DC",
    },
    action: "uploaded new site photos for",
    project: "Copper Valley Operations",
    time: "Yesterday",
  },
  {
    id: 4,
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ER",
    },
    action: "updated the regulatory compliance status for",
    project: "Diamond Ridge Exploration",
    time: "2 days ago",
  },
  {
    id: 5,
    user: {
      name: "Robert Kim",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "RK",
    },
    action: "added new investment details to",
    project: "Emerald Basin Project",
    time: "3 days ago",
  },
]

export function RecentActivities() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.project}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

