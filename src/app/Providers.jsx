"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300  min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
