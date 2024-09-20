import Head from "@/app/components/Head";
import Hero from "@/app/components/Hero";
import { CalendarDaysIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Calendix = () => {
  return (
    <main className="container">
      <Head />
      <Hero />

      <div className="flex justify-evenly">
        <Link className="Link" href="/content/DailyRoutine">
          Back
        </Link>
      </div>
    </main>
  );
};

export default Calendix;
