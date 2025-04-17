"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  const missionText =
    "We are a dynamic startup revolutionizing the mining industry through innovative communication and technology solutions.";

  const aboutContent = [
    {
      title: "Our Vision",
      content:
        "To transform the mining industry by creating seamless communication channels and fostering collaboration across the sector.",
    },
    {
      title: "Who We Are",
      content:
        "We are a forward-thinking mining technology company, leveraging cutting-edge solutions to bridge communication gaps in the mining industry. Our platform enables real-time collaboration, data sharing, and operational efficiency.",
    },
    {
      title: "Our Approach",
      content:
        "By combining industry expertise with innovative technology, we deliver solutions that address the unique challenges of modern mining operations. Our platform is built on the principles of reliability, security, and user-centric design.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[hsl(215,50%,23%)] relative overflow-hidden">
        <BackgroundBeams />

        {/* Hero Section */}
        <div className="relative z-10 pt-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              About Us
            </motion.h1>

            <div className="w-full h-[40px] relative">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#fff"
              />
            </div>

            <div className="mt-8">
              <TextGenerateEffect words={missionText} />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative z-10 mt-20 px-4 md:px-8 pb-20">
          <div className="max-w-4xl mx-auto grid gap-12">
            {aboutContent.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[hsla(220,13%,69%,0.1)] backdrop-blur-sm rounded-lg p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-[hsl(220,13%,69%)] leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
