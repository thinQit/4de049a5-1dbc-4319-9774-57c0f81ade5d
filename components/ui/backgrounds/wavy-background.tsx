"use client";
import * as React from "react";

export function WavyBackground({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

