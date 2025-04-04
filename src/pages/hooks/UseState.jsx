import Footer from "@/components/Footer";
import { ArrowLeft, ArrowLeftCircle, ArrowRight } from "lucide-react";
import UsestateIntro from "@/components/intro/UsestateIntro";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseState() {
  const [step, useStep] = useState(0);
  return (
    <>
      <Navbar />

      <div className=" w-full max-w-screen-xl mx-auto p-4">
        <div className="flex gap-5 flex-col w-full justify-center">
          <div className="grid  gap-2 w-full  grid-cols-6 grid-rows-3 grid-flow-col ">
            <div className="relative col-span-4 row-span-2 p-4  border border-gray-900">
              <div className="flex gap-2 absolute right-4">
                <Button className="rounded-full" variant="outline" size="icon">
                  <ArrowLeft />
                </Button>
                <Button className="rounded-full" variant="outline" size="icon">
                  <ArrowRight />
                </Button>
              </div>
              <UsestateIntro />
            </div>
            <div className=" col-span-4 p-4 border border-gray-900">
              <div className="flex justify-center gap-4">
                <Button className="w-[6rem]" variant="secondary">
                  Click Me
                </Button>
              </div>
            </div>
            <div className=" col-span-2 p-4 border border-gray-900 row-span-3">
              <div className="flex flex-col">
                <div className="">
                  <SyntaxHighlighter language="javascript" style={atomDark}>
                    const [temp, setTemp] = useState(0);
                  </SyntaxHighlighter>
                </div>
                <div className="border">O/P</div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center">Explanation box</div>
          <div className="flex justify-center ">
            <ShinyButton className="">Next State</ShinyButton>
          </div>
        </div>
      </div>
      <Footer position={"relative"} />
    </>
  );
}
