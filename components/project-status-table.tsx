"use client"

import { useState } from "react"
import { ArrowUpDown, MoreHorizontal, Eye, FileEdit, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "PRJ001",
    name: "Gold Mountain Extraction",
    location: "Nevada, USA",
    status: "Active",
    progress: 65,
    lastUpdate: "2 hours ago",
  },
  {
    id: "PRJ002",
    name: "Silver Creek Mining",
    location: "Colorado, USA",
    status: "Active",
    progress: 42,
    lastUpdate: "1 day ago",
  },
  {
    id: "PRJ003",
    name: "Copper Valley Operations",
    location: "Arizona, USA",
    status: "Active",
    progress: 78,
    lastUpdate: "5 hours ago",
  },
  {
    id: "PRJ004",
    name: "Diamond Ridge Exploration",
    location: "Montana, USA",
    status: "Active",
    progress: 23,
    lastUpdate: "3 days ago",
  },
  {
    id: "PRJ005",
    name: "Emerald Basin Project",
    location: "Washington, USA",
    status: "Active",
    progress: 91,
    lastUpdate: "12 hours ago",
  },
]

export function ProjectStatusTable() {
  const [sorting, setSorting] = useState({ column: "progress", direction: "desc" })

  const sortedProjects = [...projects].sort((a, b) => {
    const direction = sorting.direction === "asc" ? 1 : -1
    if (sorting.column === "progress") {
      return (a.progress - b.progress) * direction
    }
    return 0
  })

  const handleSort = (column) => {
    setSorting((prev) => ({
      column,
      direction: prev.column === column && prev.direction === "asc" ? "desc" : "asc",
    }))
  }

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("progress")}>
              <div className="flex items-center">
                Progress
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Last Update</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  {project.location}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700">
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1">{project.progress}%</span>
              </TableCell>
              <TableCell>{project.lastUpdate}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileEdit className="mr-2 h-4 w-4" />
                      Edit Project
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Reports</DropdownMenuItem>
                    <DropdownMenuItem>View Team</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

