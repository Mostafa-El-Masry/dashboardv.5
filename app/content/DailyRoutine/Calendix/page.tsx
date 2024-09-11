import { CalendarDaysIcon } from 'lucide-react';
import Link from "next/link";
import React from "react";

const Calendix = () => {
  return (
    <main className="container">
      <header className="flex gap-6 justify-between p-4 text-gray-600 font-normal" >
        <div className="flex gap-6 justify-between items-end">
          <div className="text-blue-600 font-bold text-3xl">
            <Link href="/">M</Link>
          </div>
          <div className="flex  items-center text-cyan-700 font-bold text-3xl gap-2"> 
          <CalendarDaysIcon size={26} strokeWidth={1.75}/>
            <Link href="/content/DailyRoutine/Calendix">Calendix</Link>
          </div>
          <nav className="flex gap-4">
            <Link href="">Features</Link>
            <Link href="">About</Link>
          </nav>
        </div>
        <nav className="flex gap-4 items-end">
          <Link href="">Sign In</Link>
          <Link href="">Get Started</Link>
        </nav>
      </header>

      <div className="flex justify-evenly">
        <Link className="Link" href="/content/DailyRoutine">
          Back
        </Link>
      </div>


    </main>
  );
};

export default Calendix;
