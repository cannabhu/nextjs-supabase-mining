import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InvestmentDetailChart } from "@/components/investment-detail-chart"
import { InvestmentAllocationChart } from "@/components/investment-allocation-chart"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function InvestmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Investment Dashboard</h2>
        <p className="text-muted-foreground">Track your investments, ROI projections, and financial insights.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231,890</div>
            <p className="text-xs text-muted-foreground">+20.1% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">+2.3% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projected Annual Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$11.2M</div>
            <p className="text-xs text-muted-foreground">Based on current performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investment Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+18.2%</div>
            <p className="text-xs text-muted-foreground">Year-to-date increase</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Investment Performance</CardTitle>
            <CardDescription>Track your investment growth over time</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <InvestmentDetailChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Investment Allocation</CardTitle>
            <CardDescription>Distribution across projects</CardDescription>
          </CardHeader>
          <CardContent>
            <InvestmentAllocationChart />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Investments</TabsTrigger>
          <TabsTrigger value="high-performing">High Performing</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
              <CardDescription>Overview of all your mining investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    id: "INV001",
                    project: "Gold Mountain Extraction",
                    amount: 12500000,
                    date: "Jan 15, 2023",
                    roi: 26.8,
                    status: "Performing",
                  },
                  {
                    id: "INV002",
                    project: "Silver Creek Mining",
                    amount: 8750000,
                    date: "Mar 22, 2023",
                    roi: 18.5,
                    status: "Performing",
                  },
                  {
                    id: "INV003",
                    project: "Copper Valley Operations",
                    amount: 15000000,
                    date: "Feb 10, 2023",
                    roi: 32.1,
                    status: "High Performing",
                  },
                  {
                    id: "INV004",
                    project: "Diamond Ridge Exploration",
                    amount: 5000000,
                    date: "Apr 05, 2023",
                    roi: 12.4,
                    status: "Developing",
                  },
                  {
                    id: "INV005",
                    project: "Emerald Basin Project",
                    amount: 3981890,
                    date: "May 18, 2023",
                    roi: 22.7,
                    status: "Performing",
                  },
                ].map((investment) => (
                  <div key={investment.id} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{investment.project}</h3>
                        <p className="text-sm text-muted-foreground">Investment ID: {investment.id}</p>
                      </div>
                      <Badge
                        variant={investment.status === "High Performing" ? "default" : "outline"}
                        className={investment.status === "High Performing" ? "bg-green-500" : ""}
                      >
                        {investment.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium">Investment Amount</p>
                        <p className="text-sm text-muted-foreground">${investment.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Investment Date</p>
                        <p className="text-sm text-muted-foreground">{investment.date}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Current ROI</p>
                        <p className="text-sm text-muted-foreground">{investment.roi}%</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button size="sm">Manage Investment</Button>
                    </div>
                    <div className="border-t mt-2 pt-2"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="high-performing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>High Performing Investments</CardTitle>
              <CardDescription>Investments with ROI above 25%</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    id: "INV001",
                    project: "Gold Mountain Extraction",
                    amount: 12500000,
                    date: "Jan 15, 2023",
                    roi: 26.8,
                    status: "Performing",
                  },
                  {
                    id: "INV003",
                    project: "Copper Valley Operations",
                    amount: 15000000,
                    date: "Feb 10, 2023",
                    roi: 32.1,
                    status: "High Performing",
                  },
                ].map((investment) => (
                  <div key={investment.id} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{investment.project}</h3>
                        <p className="text-sm text-muted-foreground">Investment ID: {investment.id}</p>
                      </div>
                      <Badge
                        variant={investment.status === "High Performing" ? "default" : "outline"}
                        className={investment.status === "High Performing" ? "bg-green-500" : ""}
                      >
                        {investment.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium">Investment Amount</p>
                        <p className="text-sm text-muted-foreground">${investment.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Investment Date</p>
                        <p className="text-sm text-muted-foreground">{investment.date}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Current ROI</p>
                        <p className="text-sm text-muted-foreground">{investment.roi}%</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button size="sm">Manage Investment</Button>
                    </div>
                    <div className="border-t mt-2 pt-2"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Investments</CardTitle>
              <CardDescription>Investments made in the last 3 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    id: "INV004",
                    project: "Diamond Ridge Exploration",
                    amount: 5000000,
                    date: "Apr 05, 2023",
                    roi: 12.4,
                    status: "Developing",
                  },
                  {
                    id: "INV005",
                    project: "Emerald Basin Project",
                    amount: 3981890,
                    date: "May 18, 2023",
                    roi: 22.7,
                    status: "Performing",
                  },
                ].map((investment) => (
                  <div key={investment.id} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{investment.project}</h3>
                        <p className="text-sm text-muted-foreground">Investment ID: {investment.id}</p>
                      </div>
                      <Badge variant="outline">{investment.status}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium">Investment Amount</p>
                        <p className="text-sm text-muted-foreground">${investment.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Investment Date</p>
                        <p className="text-sm text-muted-foreground">{investment.date}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Current ROI</p>
                        <p className="text-sm text-muted-foreground">{investment.roi}%</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button size="sm">Manage Investment</Button>
                    </div>
                    <div className="border-t mt-2 pt-2"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

