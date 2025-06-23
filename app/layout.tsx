// app/layout.tsx
"use client";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Always scroll to top on initial load
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        router.replace(pathname); // Remove the hash if present
      }
      window.scrollTo(0, 0); // Scroll to top no matter what
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
