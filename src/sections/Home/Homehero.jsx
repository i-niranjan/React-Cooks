import { RetroGrid } from "@/components/magicui/retro-grid";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Homehero() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-20 bg-background overflow-hidden ">
        <div className="flex flex-col gap-10 justify-center items-center">
          <p>Master React hooks with simple examples and clear explanations.</p>

          <h1 className="pointer-events-none  whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            Cooking Up With <br></br> React Hooks
          </h1>
          <ShinyButton className="text-white">Get Started</ShinyButton>
          <RetroGrid />
        </div>
      </div>
    </>
  );
}
