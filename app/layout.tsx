// app/layout.tsx
"use client";
import "./globals.css";
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
        router.replace(pathname); // Remove hash
      }
      window.scrollTo(0, 0); // Scroll to top
    }
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
