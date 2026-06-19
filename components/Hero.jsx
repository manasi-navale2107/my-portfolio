"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TextType from "@/components/bloc/TextAnimations/TextType/TextType";
import { HiAcademicCap } from "react-icons/hi2";
import LightPillar from "./(components)/LightPillar";
import Lightning from "./(components)/Lightning";
import TrueFocus from "./(components)/TrueFocus";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effect - Only inside Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-8">
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          Somewhere Between
        </h2>

        <TrueFocus
          sentence="AI Code Design"
          manualMode={false}
          blurAmount={5}
          borderColor="#5227FF"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />

        <h3 className="mt-6 text-2xl font-bold text-white">You'll find me.</h3>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-3">
          Scroll to know me!
        </p>

        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l-6-6m6 6l6-6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
