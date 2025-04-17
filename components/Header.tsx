import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-16 w-16"
            src="/logo.png"
            alt="Logo"
          />
        </Link>
        <nav className="flex gap-6">
          {["About", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
