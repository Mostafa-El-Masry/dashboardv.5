import Link from "next/link";
import React from "react";

const DailyRoutine = () => {
  return (
    <>
      <h1>Daily Routine</h1>
      <div className="flex justify-evenly">
        <Link className="Link" href="/">Home</Link>
      </div>

      <ul>
      <li>1 - Wake Uli at 7.50 A.M</li>
        <li>2 - Go To Work at 9.00 A.M</li>
        <li>3 - Come Home At 6.00 li.M</li>
        <li>4 - Shower</li>
        <li>5- Work on 2014 Resolution</li> 
        <li>6- Work on 2024 Resolution</li>
      </ul>
    </>
  );
};

export default DailyRoutine;
