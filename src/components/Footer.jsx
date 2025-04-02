import React from "react";

export default function Footer({ position }) {
  return (
    <>
      <footer className={`flex ${position} bottom-0 border-t w-full`}>
        <div className="mx-auto max-w-screen-xl p-4">
          Made with ❤️, ☕, and way too many late 🌙.
        </div>
      </footer>
    </>
  );
}
