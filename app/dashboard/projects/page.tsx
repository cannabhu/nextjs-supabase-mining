import Link from "next/link"
import { MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "PRJ001",
    name: "Gold Mountain Extraction",
    location: "Nevada, USA",
    status: "Active",
    progress: 65,
    description: "Large-scale gold mining operation with advanced extraction techniques and environmental safeguards.",
    permitNumber: "NV-2023-G45",
    minerals: ["Gold", "Silver"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "PRJ002",
    name: "Silver Creek Mining",
    location: "Colorado, USA",
    status: "Active",
    progress: 42,
    description: "Silver mining project with focus on sustainable practices and community engagement.",
    permitNumber: "CO-2022-S78",
    minerals: ["Silver", "Lead"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "PRJ003",
    name: "Copper Valley Operations",
    location: "Arizona, USA",
    status: "Active",
    progress: 78,
    description: "Copper extraction facility utilizing cutting-edge technology to minimize environmental impact.",
    permitNumber: "AZ-2023-C32",
    minerals: ["Copper"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "PRJ004",
    name: "Diamond Ridge Exploration",
    location: "Montana, USA",
    status: "Active",
    progress: 23,
    description: "Diamond exploration project in early stages with promising geological surveys.",
    permitNumber: "MT-2023-D17",
    minerals: ["Diamonds"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "PRJ005",
    name: "Emerald Basin Project",
    location: "Washington, USA",
    status: "Active",
    progress: 91,
    description: "Emerald mining operation with state-of-the-art facilities and strong community partnerships.",
    permitNumber: "WA-2022-E09",
    minerals: ["Emerald", "Beryl"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">View and manage all mining projects across different locations.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
            />
          </div>
          <Button>Add Project</Button>
        </div>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <span className="text-sm font-medium text-muted-foreground">{project.id}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {project.location}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Permit Number:</span>
                      <span>{project.permitNumber}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Minerals:</span>
                      <span>{project.minerals.join(", ")}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress:</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.status === "Active")
              .map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  {/* Same card content as above */}
                  <div className="relative h-48 w-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.name}</CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">{project.id}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {project.location}
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Permit Number:</span>
                        <span>{project.permitNumber}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Minerals:</span>
                        <span>{project.minerals.join(", ")}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress:</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <h3 className="mt-4 text-lg font-semibold">No pending projects</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                You don't have any pending projects at the moment. Add a new project to get started.
              </p>
              <Button>Add Project</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <h3 className="mt-4 text-lg font-semibold">No completed projects</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                You don't have any completed projects at the moment.
              </p>
              <Button>View Archive</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

