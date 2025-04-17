"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function ContactPage() {
  return (
    <>
      <Header />
      <div className=" bg-gradient-to-b from-gray-100 to-gray-200 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BackgroundGradient className="rounded-[22px] p-8 sm:p-10">
            <div className="space-y-8">
              <div className="text-center">
                <TextGenerateEffect
                  words="Get in Touch"
                  className="text-4xl font-bold text-[hsl(215,50%,23%)]"
                />
                <p className="mt-4 text-[hsl(220,13%,69%)]">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </p>
              </div>

              <motion.form
                className="mt-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[hsl(215,50%,23%)]"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[hsl(215,50%,23%)]"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[hsl(215,50%,23%)]"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-[hsl(215,50%,23%)] hover:bg-[hsl(215,50%,30%)] text-white px-6 py-2 rounded-md transition-colors"
                  >
                    Send Message
                  </Button>
                </div>
              </motion.form>
            </div>
          </BackgroundGradient>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
