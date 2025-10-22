"use client";

import React from "react";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";

function MainPage() {
  return (
    <>
      <main className={cn("bg-transparent")}>
        <div className="w-full h-screen">
          <AnimatedBackground />
        </div>
      </main>
    </>
  );
}

export default MainPage;
