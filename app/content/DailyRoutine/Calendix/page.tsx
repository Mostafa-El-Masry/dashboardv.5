import Head from "@/app/components/Head";
import Hero from "@/app/components/Hero";
import { Play } from "lucide-react";
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

      <div className="mt-4 flex gap-4 justify-center align-middle">
        <Link
          href={"/content/DailyRoutine/Calendix"}
          className="flex self-center bg-black text-white py-3 px-4 rounded-full"
        >
          Get Started Now
        </Link>
        <Link
          href={"/content/DailyRoutine/Calendix"}
          className="flex self-center gap-2 border rounded-full py-3 px-4"
        >
          <Play />
          Watch a Video
        </Link>
      </div>
    </main>
  );
};

export default Calendix;
