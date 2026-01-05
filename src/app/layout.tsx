import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/Theme/ThemProvider";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/sonner"

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LinkSnap - linkshortner where you memorize link created",
  description: "LinkSnap is a platform where you add any link and create a memorable link as you wish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={`${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange          
        >
          <Navbar />
          {children}
              <Toaster position="top-center" />
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
