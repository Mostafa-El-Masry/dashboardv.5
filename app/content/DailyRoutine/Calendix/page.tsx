import Head from "@/app/components/Head";
import Hero from "@/app/components/Hero";
import Link from "next/link";
import React from "react";

const Calendix = () => {
  return (
    <main className="container">
      <div className="flex justify-evenly absolute left-0 top-0">
        <Link className="Link" href="/content/DailyRoutine">
          Back
        </Link>
      </div>
      <Head />
      <Hero />
    </main>
  );
};

export default Calendix;
