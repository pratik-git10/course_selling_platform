"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";

const LandingPage = () => {
  const currentImage = useCarousel({ totalImages: 3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-3/4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mt-12 h-[500px] rounded-lg bg-customgreys-secondarybg">
        <div className="basis-1/2 px-16 mx-auto">
          <h1 className="text-4xl font-bold mb-4">Courses</h1>
          <p className="text-lg text-gray-400 mb-8">
            This is Course selling platform
            <br />
            Courses When you need
          </p>
          <div className="w-fit">
            <Link href="/search">
              <div className="bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-md text-black">
                Search for Course
              </div>
            </Link>
          </div>
        </div>
        <div className="basis-1/2 h-full relative overflow-hidden rounded-r-lg">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              src={src}
              key={src}
              alt={`Hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
              className={`object-cover transition-opacity duration-500 opacity-0 ${
                index === currentImage ? "opacity-100" : ""
              }`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="mx-auto py-12 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Featured courses</h2>
        <p className="text-customgreys-dirtyGrey mb-8">
          All Couses from begining to advance
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            "Web Development",
            "React Js",
            "Data Science",
            "Java",
            "Python",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-customgreys-secondarybg rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <div>1</div>
      <div>2</div>
      <div>3</div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
