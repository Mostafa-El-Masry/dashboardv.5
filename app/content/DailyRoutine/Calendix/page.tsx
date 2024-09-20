import Head from "@/app/components/Head";
import { CalendarDaysIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Calendix = () => {
  return (
    <main className="container">
      <Head />
      <section className="text-center mt-36">
        <h1 className="text-5xl font-bold mb-20 ">Schedule Only <span className="text-blue-600 cool-underline">The Hard</span></h1>
        <p className="text-gray-600">
          Login Schedule it and get it out of your mind.
        </p>
      </section>

      <div className="flex justify-evenly">
        <Link className="Link" href="/content/DailyRoutine">
          Back
        </Link>
      </div>
    </main>
  );
};

export default Calendix;
