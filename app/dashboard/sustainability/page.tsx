import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const sustainabilityInitiatives = [
  {
    id: "SI001",
    title: "Renewable Energy Implementation",
    description: "Installing solar panels and wind turbines to power mining operations.",
    budget: 1250000,
    spent: 750000,
    progress: 60,
    status: "In Progress",
    impact: "High",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    location: "Gold Mountain Extraction",
  },
  {
    id: "SI002",
    title: "Water Recycling System",
    description: "Advanced water treatment and recycling to minimize freshwater usage.",
    budget: 850000,
    spent: 720000,
    progress: 85,
    status: "In Progress",
    impact: "High",
    startDate: "Mar 2023",
    endDate: "Oct 2023",
    location: "Silver Creek Mining",
  },
  {
    id: "SI003",
    title: "Community Education Program",
    description: "Educational initiatives for local communities on sustainable mining practices.",
    budget: 350000,
    spent: 200000,
    progress: 57,
    status: "In Progress",
    impact: "Medium",
    startDate: "Feb 2023",
    endDate: "Nov 2023",
    location: "Multiple Locations",
  },
  {
    id: "SI004",
    title: "Reforestation Project",
    description: "Planting trees and restoring natural habitats in previously mined areas.",
    budget: 500000,
    spent: 150000,
    progress: 30,
    status: "In Progress",
    impact: "High",
    startDate: "Apr 2023",
    endDate: "Mar 2024",
    location: "Copper Valley Operations",
  },
  {
    id: "SI005",
    title: "Zero-Waste Initiative",
    description: "Implementing comprehensive waste reduction and recycling programs.",
    budget: 400000,
    spent: 380000,
    progress: 95,
    status: "Near Completion",
    impact: "Medium",
    startDate: "Jan 2023",
    endDate: "Sep 2023",
    location: "Emerald Basin Project",
  },
]

export default function SustainabilityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Sustainability Initiatives</h2>
        <p className="text-muted-foreground">
          Track and manage community sustainability plans and environmental initiatives.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${sustainabilityInitiatives.reduce((acc, curr) => acc + curr.budget, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Allocated for sustainability initiatives</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spent to Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${sustainabilityInitiatives.reduce((acc, curr) => acc + curr.spent, 0).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round(
                (sustainabilityInitiatives.reduce((acc, curr) => acc + curr.spent, 0) /
                  sustainabilityInitiatives.reduce((acc, curr) => acc + curr.budget, 0)) *
                  100,
              )}
              % of total budget
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sustainabilityInitiatives.length}</div>
            <p className="text-xs text-muted-foreground">
              Across {new Set(sustainabilityInitiatives.map((i) => i.location)).size} locations
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                sustainabilityInitiatives.reduce((acc, curr) => acc + curr.progress, 0) /
                  sustainabilityInitiatives.length,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Average across all initiatives</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Initiatives</TabsTrigger>
          <TabsTrigger value="high-impact">High Impact</TabsTrigger>
          <TabsTrigger value="near-completion">Near Completion</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4">
            {sustainabilityInitiatives.map((initiative) => (
              <Card key={initiative.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{initiative.title}</CardTitle>
                      <CardDescription>{initiative.description}</CardDescription>
                    </div>
                    <Badge
                      variant={initiative.impact === "High" ? "default" : "outline"}
                      className={initiative.impact === "High" ? "bg-green-500" : ""}
                    >
                      {initiative.impact} Impact
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{initiative.location}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Timeline</p>
                        <p className="text-sm text-muted-foreground">
                          {initiative.startDate} - {initiative.endDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Budget</p>
                        <p className="text-sm text-muted-foreground">${initiative.budget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Spent</p>
                        <p className="text-sm text-muted-foreground">
                          ${initiative.spent.toLocaleString()} (
                          {Math.round((initiative.spent / initiative.budget) * 100)}%)
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Progress</p>
                        <p className="text-sm font-medium">{initiative.progress}%</p>
                      </div>
                      <Progress value={initiative.progress} className="h-2" />
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button size="sm">Update Status</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="high-impact" className="mt-4">
          <div className="grid gap-4">
            {sustainabilityInitiatives
              .filter((initiative) => initiative.impact === "High")
              .map((initiative) => (
                <Card key={initiative.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{initiative.title}</CardTitle>
                        <CardDescription>{initiative.description}</CardDescription>
                      </div>
                      <Badge variant="default" className="bg-green-500">
                        High Impact
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">{initiative.location}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Timeline</p>
                          <p className="text-sm text-muted-foreground">
                            {initiative.startDate} - {initiative.endDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Budget</p>
                          <p className="text-sm text-muted-foreground">${initiative.budget.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Spent</p>
                          <p className="text-sm text-muted-foreground">
                            ${initiative.spent.toLocaleString()} (
                            {Math.round((initiative.spent / initiative.budget) * 100)}%)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">Progress</p>
                          <p className="text-sm font-medium">{initiative.progress}%</p>
                        </div>
                        <Progress value={initiative.progress} className="h-2" />
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="mr-2">
                          View Details
                        </Button>
                        <Button size="sm">Update Status</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="near-completion" className="mt-4">
          <div className="grid gap-4">
            {sustainabilityInitiatives
              .filter((initiative) => initiative.status === "Near Completion")
              .map((initiative) => (
                <Card key={initiative.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{initiative.title}</CardTitle>
                        <CardDescription>{initiative.description}</CardDescription>
                      </div>
                      <Badge
                        variant={initiative.impact === "High" ? "default" : "outline"}
                        className={initiative.impact === "High" ? "bg-green-500" : ""}
                      >
                        {initiative.impact} Impact
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">{initiative.location}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Timeline</p>
                          <p className="text-sm text-muted-foreground">
                            {initiative.startDate} - {initiative.endDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Budget</p>
                          <p className="text-sm text-muted-foreground">${initiative.budget.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Spent</p>
                          <p className="text-sm text-muted-foreground">
                            ${initiative.spent.toLocaleString()} (
                            {Math.round((initiative.spent / initiative.budget) * 100)}%)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">Progress</p>
                          <p className="text-sm font-medium">{initiative.progress}%</p>
                        </div>
                        <Progress value={initiative.progress} className="h-2" />
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="mr-2">
                          View Details
                        </Button>
                        <Button size="sm">Update Status</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

