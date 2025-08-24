"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Users,
  CalendarClock,
  FileCheck2,
  ClipboardList,
  ShieldCheck,
  LineChart,
  Rocket,
  Zap,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/next.svg" alt="CitrUX" width={28} height={28} className="dark:invert" />
            <span className="text-lg font-semibold tracking-tight">CitrUX HRMS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#roadmap" className="hover:underline underline-offset-4">
              Roadmap
            </Link>
            <Link href="#why" className="hover:underline underline-offset-4">
              Why CitrUX?
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="rounded-full">In Development</Badge>
            <Link href="/auth/sign-in">
              <Button size="sm" className="rounded-full">Sign in</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Building an awesome HRMS — stay tuned!</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Run HR like a product. <span className="text-primary">Fast.</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                CitrUX is crafting a modern, real‑time HRMS with clean UX, powerful workflows, and
                analytics you can act on. Development is underway — come along for the ride.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/waitlist">
                  <Button size="lg" className="rounded-xl">
                    <Rocket className="mr-2 h-4 w-4" /> Join the waitlist
                  </Button>
                </Link>
                <Link href="#roadmap">
                  <Button size="lg" variant="outline" className="rounded-xl">
                    <LineChart className="mr-2 h-4 w-4" /> View roadmap
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  <Image src="/avatar-1.png" alt="avatar" width={28} height={28} className="rounded-full ring-2 ring-background" />
                  <Image src="/avatar-2.png" alt="avatar" width={28} height={28} className="rounded-full ring-2 ring-background" />
                  <Image src="/avatar-3.png" alt="avatar" width={28} height={28} className="rounded-full ring-2 ring-background" />
                </div>
                <p className="text-sm text-muted-foreground">Early users already testing modules.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl border shadow-sm p-4 bg-card">
                <div className="grid grid-cols-2 gap-3">
                  <Card className="rounded-2xl">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Users className="h-4 w-4" /> People
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Profiles, roles, org chart
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <CalendarClock className="h-4 w-4" /> Attendance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Clock‑in/out, shifts, WFH
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <ClipboardList className="h-4 w-4" /> Leaves
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Policies, approvals, balance
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <FileCheck2 className="h-4 w-4" /> Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      Letters, e‑sign, storage
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl border p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Role‑based access & audit logs</span>
                  </div>
                  <Badge variant="outline" className="rounded-full">Private Alpha</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Designed for clarity, built for speed</h2>
            <p className="text-muted-foreground mt-3">
              A modern UI with thoughtful UX patterns — fewer clicks, clearer states, instant feedback.
            </p>
          </div>

          <Tabs defaultValue="hr" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="hr">HR</TabsTrigger>
              <TabsTrigger value="manager">Manager</TabsTrigger>
              <TabsTrigger value="employee">Employee</TabsTrigger>
            </TabsList>
            <TabsContent value="hr">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Feature title="Unified Master Data" icon={<Users className="h-5 w-5" />}>
                  Single source of truth for people, positions, and policies.
                </Feature>
                <Feature title="Automation" icon={<Zap className="h-5 w-5" />}>
                  Approvals, reminders, and escalations that just work.
                </Feature>
                <Feature title="Insights" icon={<LineChart className="h-5 w-5" />}>
                  Real‑time dashboards and exportable reports.
                </Feature>
              </div>
            </TabsContent>
            <TabsContent value="manager">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Feature title="Team Overview" icon={<Users className="h-5 w-5" />}>
                  Attendance, leave, and allocation — at a glance.
                </Feature>
                <Feature title="One‑click Actions" icon={<Zap className="h-5 w-5" />}>
                  Approve, reassign, and nudge without hunting screens.
                </Feature>
                <Feature title="Goal Tracking" icon={<ClipboardList className="h-5 w-5" />}>
                  Simple OKRs and reviews that don’t get in the way.
                </Feature>
              </div>
            </TabsContent>
            <TabsContent value="employee">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Feature title="Self‑Service" icon={<FileCheck2 className="h-5 w-5" />}>
                  Requests, letters, and docs in one place.
                </Feature>
                <Feature title="Transparent Status" icon={<ShieldCheck className="h-5 w-5" />}>
                  See what’s pending, who’s next, and SLAs.
                </Feature>
                <Feature title="Delightful UX" icon={<Sparkles className="h-5 w-5" />}>
                  Keyboard shortcuts, dark mode, mobile‑first.
                </Feature>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <RoadmapCard stage="Now" badge="Alpha" items={["Auth & RBAC", "Attendance & Leaves", "Announcements"]} />
            <RoadmapCard stage="Next" badge="Beta" items={["Documents & Letters", "Onboarding", "Basic Payroll hooks"]} />
            <RoadmapCard stage="Later" badge="GA" items={["Advanced Analytics", "Integrations (Slack, GDrive)", "HRIS API"]} />
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/changelog">
              <Button variant="outline" className="rounded-xl">Follow Changelog</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Crafted with a modern stack</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>• Next.js App Router, React Server Components</li>
                <li>• Tailwind + shadcn/ui for consistent, beautiful UI</li>
                <li>• Sonner for delightful toasts</li>
                <li>• Supabase for auth and real‑time data</li>
                <li>• Vercel for fast, global deployments</li>
              </ul>
            </div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" /> Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Project</span>
                  <Badge variant="secondary" className="rounded-full">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Release</span>
                  <Badge variant="outline" className="rounded-full">Private Alpha</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Uptime</span>
                  <span>—</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} CitrUX Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy" className="hover:underline underline-offset-4">Privacy</Link>
            <Link href="/terms" className="hover:underline underline-offset-4">Terms</Link>
            <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">{icon}{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{children}</CardContent>
    </Card>
  );
}

function RoadmapCard({ stage, badge, items }: { stage: string; badge: string; items: string[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">{stage}</CardTitle>
        <Badge className="rounded-full" variant="secondary">{badge}</Badge>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
