"use client";

import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import ShopifyIcon from "@/assets/icons/shopify.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png";


const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next",
    iconType: NextIcon,
  },
  {
    title: "Shopify",
    iconType: ShopifyIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,   
  },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎧",
    left: "5%",
    top: "5%",
  },
  {
    title: "Movie",
    emoji: "🍿",
    left: "50%",
    top: "5%",
  },
  {
    title: "Study",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Car",
    emoji: "🛞",
    left: "35%",
    top: "40%",
  },
  {
    title: "Languages",
    emoji: "🌎",
    left: "70%",
    top: "45%",
  },
  {
    title: "Hiking",
    emoji: "👟",
    left: "5%",
    top: "65%",
  },
  {
    title: "Puzzle Games",
    emoji: "🧩",
    left: "45%",
    top: "60%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section className="py-20" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My Work"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 grid gap-8 md:grid-cols-5">
          <Card className="md:col-span-2">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-[#8F5AF5]" />
                <h3 className="font-serif text-4xl">Who I am</h3>
              </div>
              <h2 className="text-lg font-semibold text-white/70 mt-2">
                Get to know me like an old friend.
              </h2>
              <hr className="border-t border-white/20 mt-2 mb-4 md:mt-5" />
              <p className="md:text-sm lg:text-xl text-white/80">
                Hey, I’m <span className="font-medium">Giovanna</span>, a
                developer passionate about technology and design. I love turning
                ideas into modern, interactive websites using React, Next.js,
                and Tailwind CSS. My goal is to grow into a Full Stack developer
                and build impactful digital solutions.
              </p>
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col md:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital environment."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-8 bg-gradient-to-r from-[#8F5AF5] to-[#B696F0] rounded-full py-4 absolute md:p-1 cursor-pointer" 
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-900 px-2">
                    {hobby.title}
                  </span>
                  <span className="pr-1.5">{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-3">
            <Image
              src={mapImage}
              alt="Map image"
              className="w-full h-auto md:h-full md:object-cover"
            />
            <div className="absolute size-16 top-1/2 left-1/2 -translate-x-20 -translate-y-16 rounded-full bg-gradient-to-r from-[#8F5AF5] to-[#B696F0] rounded-br-none after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-0 after:rounded-full after:rounded-br-none after:outline-gray-950/30 md:-translate-x-28 md:translate-y-1/2 md:rounded-full md:rounded-tr-none md:after:rounded-full md:after:rounded-tr-none">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8F5AF5] to-[#B696F0]from-[#8F5AF5] to-[#B696F0] -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8F5AF5] to-[#B696F0] -z-10">
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="mt-1"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
