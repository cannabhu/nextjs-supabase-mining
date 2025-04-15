import React from "react";
import { motion } from "framer-motion";

function FeatureCard({ feature, index }: { feature: string; index: number }) {
  return (
    <motion.div
      key={feature}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{feature}</h3>
      <p className="text-secondary-foreground">
        Detailed information about {feature.toLowerCase()} and how it benefits
        your mining operations.
      </p>
    </motion.div>
  );
}

export default FeatureCard;
