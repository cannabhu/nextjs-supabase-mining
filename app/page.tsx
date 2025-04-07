import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <span className="font-bold text-xl">Africa-Onboard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connecting Investors, Miners, and Contractors
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A modern platform for real-time project updates, investment
                    tracking, and seamless communication.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg">Go to Dashboard</Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/0 to-background/0" />
                  <div className="flex h-full items-center justify-center">
                    <div className="grid gap-2 p-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-1">
                      <div className="flex flex-col gap-1 rounded-lg border bg-card p-3 text-card-foreground shadow">
                        <div className="text-sm font-medium">
                          Investment Growth
                        </div>
                        <div className="text-2xl font-bold">+24.5%</div>
                      </div>
                      <div className="flex flex-col gap-1 rounded-lg border bg-card p-3 text-card-foreground shadow">
                        <div className="text-sm font-medium">
                          Active Projects
                        </div>
                        <div className="text-2xl font-bold">12</div>
                      </div>
                      <div className="flex flex-col gap-1 rounded-lg border bg-card p-3 text-card-foreground shadow">
                        <div className="text-sm font-medium">
                          Sustainability Score
                        </div>
                        <div className="text-2xl font-bold">92/100</div>
                      </div>
                      <div className="flex flex-col gap-1 rounded-lg border bg-card p-3 text-card-foreground shadow">
                        <div className="text-sm font-medium">
                          Compliance Rate
                        </div>
                        <div className="text-2xl font-bold">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides comprehensive tools for all stakeholders
                  in the mining industry.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Investor Dashboard</h3>
                <p className="text-muted-foreground">
                  Track investments, ROI projections, and financial insights
                  with interactive charts.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Project Status</h3>
                <p className="text-muted-foreground">
                  Real-time updates on mining operations, permit details, and
                  regulatory compliance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Sustainability Plans</h3>
                <p className="text-muted-foreground">
                  Detailed execution plans for community initiatives with
                  progress tracking.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Africa-Onboard. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-xs hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
