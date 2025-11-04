"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { reviews } from "@/lib/data/portfolio";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export function Reviews() {
  return (
    <Section id="reviews" className="bg-linear-to-b from-gray-950 via-gray-800 to-gray-700">
      <SectionHeader
        title="Client Reviews"
        description="What people say about working with me"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {reviews.map((review) => (
          <motion.div key={review.id} variants={item}>
            <Card className="h-full bg-gray-900 border-gray-800 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-500 ease-out">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Avatar placeholder */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-linear-to-r from-orange-500/20 to-rose-500/20 flex items-center justify-center border-2 border-orange-500/30">
                        <span className="text-lg font-bold text-orange-300">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <p className="text-sm text-gray-400">
                          {review.role}
                        </p>
                        <p className="text-xs text-gray-500">
                          {review.company}
                        </p>
                      </div>
                    </div>
                    {/* Rating */}
                    {review.rating && (
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-orange-400 text-orange-400"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <Quote className="h-8 w-8 text-orange-400/20" />
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-400 italic leading-relaxed">
                  "{review.content}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
