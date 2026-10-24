
import React from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

const Aboutme = () => {
  return (
    <section className="relative min-h-screen py-20">
      {/* Section Heading */}
      <div className="text-center mb-20">
        <p className="text-violet-400 uppercase tracking-[0.4em] text-sm mb-4">
          About Me
        </p>

        <h1 className="text-5xl md:text-7xl font-bold"></h1>

        <div className="w-24 h-1 bg-violet-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-violet-400 text-sm mb-4">
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm Manasi.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm an Artificial Intelligence & Data Science undergraduate
              passionate about Data Engineering, Machine Learning, and
              Agentic AI. I enjoy building intelligent applications,
              scalable data pipelines, and data-driven solutions using
              Python, SQL, FastAPI, LangChain, and LangGraph.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My work spans multi-agent AI systems, RAG-powered assistants,
              end-to-end machine learning solutions, and cloud-based
              ETL pipelines. I have hands-on experience with data
              transformation, SQL-based analytics, data warehousing,
              and BigQuery, while expanding my expertise in Apache Spark
              and PySpark. I love transforming raw data and complex
              ideas into meaningful, real-world solutions.
            </p>

            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-3xl font-bold">5</h3>
                <p className="text-gray-500">Projects Built</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">AI/ML</h3>
                <p className="text-gray-500">
                  AI & Data Engineering
                </p>
              </div>

              <div>
                <LinkPreview
                  url="https://drive.google.com/file/d/1_8LssM_Ux2MF8llK_O9JEQ0knKHgsNU4/view?usp=sharing"
                  className="text-3xl font-bold text-white"
                >
                  Resume
                </LinkPreview>
                <p className="text-gray-500">Check it out!</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/manasi.png"
                alt="Manasi"
                width={450}
                height={450}
                className="rounded-3xl object-cover border border-white/10"
              />

              <div className="absolute -inset-4 bg-violet-500/20 blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
