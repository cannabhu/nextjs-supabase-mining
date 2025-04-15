"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundLines } from "@/components/ui/background-lines";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section>
          <BackgroundLines className="container mx-auto px-4 flex flex-col py-20 lg:flex-row items-center w-full">
            <motion.div
              className="md:w-1/2 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Connecting <br /> <FlipWords words={words} />
              </h1>
              <p className="text-lg text-secondary-foreground max-w-2xl py-2">
                A modern platform for real-time project updates, investment
                tracking, and seamless communication.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground"
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 py-20"
            >
              {/* Placeholder for hero image or additional content */}

              <Image
                src="/hero.png"
                alt="hero"
                className=" border rounded-[75%_25%_64%_36%_/_14%_49%_51%_86%]"
                width={1000}
                height={700}
              />
            </motion.div>
          </BackgroundLines>
        </section>

        {/* Reviews Section */}
        <section className="bg-secondary/10 py-20">
          <p className="font-bold text-3xl text-center">Testimonials</p>
          <div className="container mx-auto px-4">
            <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </section>

        {/* Periodic Table Section */}
        <section className=" bg-secondary/10">
          <div className="container mx-auto px-4">
            <ContainerScroll titleComponent={<></>}>
              <Image
                src={`/periodic.png`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-secondary-foreground max-w-2xl mx-auto">
                Everything you need to manage your mining investments and
                projects efficiently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Real-time Updates",
                "Investment Tracking",
                "Project Management",
                "Safety Reports",
                "Community Impact",
                "Supply Chain",
              ].map((feature, i) => (
                <FeatureCard key={feature} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const words = ["Investors", "Miners", "Contractors"];
