"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "./globals.css";



export default function RootLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [theme, setTheme] = useState("dark"); // Start with dark theme

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Apply the theme class to <html> on mount and when theme changes
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    // Persist theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground min-h-screen">
        <nav className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-lg font-bold text-black no-underline">
              LunarNest Capital 🌙
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="lg:hidden"
                onClick={toggleNavbar}
                aria-label="Toggle navigation"
              >
                <span className="material-icons">menu</span>
              </Button>
              <div
                className={cn(
                  "lg:flex lg:flex-row lg:items-center lg:gap-4",
                  isCollapsed
                    ? "hidden"
                    : "flex flex-col absolute top-16 left-0 w-full bg-background p-4 lg:static lg:p-0"
                )}
              >
                <Link href="/" className="text-sm font-medium hover:text-primary py-2 no-underline text-black">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary py-2 no-underline text-black">
                  About
                </Link>
                <Link href="/philosophy" className="text-sm font-medium hover:text-primary py-2 no-underline text-black">
                  Philosophy
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary py-2 no-underline text-black">
                  Contact
                </Link>
                <Link href="/services" className="text-sm font-medium hover:text-primary py-2 no-underline text-black">
                  Services
                </Link>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-auto"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>

      </body>
    </html>
  );
}