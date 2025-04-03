import React, { useRef, useEffect } from "react";
import { TypingAnimation } from "@/registry/magicui/typing-animation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function UsestateIntro() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          {`
          🚀 Welcome to  `}
          <span className="bg-gray-700 p-1 rounded-xl"> useState!</span>
        </div>
        <div>
          React is cool, but it has a tiny problem—it doesn’t remember things
          inside a function. 😬
        </div>
        <div>Let's take a following code as a example</div>
        <div>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {` let count = 0;
    function handleClick() {
    count++;
    console.log(count);
 }`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
