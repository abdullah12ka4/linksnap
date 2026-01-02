import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="logo flex items-center gap-2">
                <Logo className="h-12" />    <div><span className="">Link</span><span className="font-bold text-xl">Snap</span></div>
            </div>
            <p className="text-muted-foreground text-sm">
              Fast, reliable, and easy-to-use link shortening service.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link target="_blank" href="https://portfolio-drab-seven-64.vercel.app/" className="hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link target="_blank" href="https://github.com/abdullah12ka4" className="hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/abdullah-malik-769770309/" className="hover:text-foreground transition-colors">
                Linkedin
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} linkSnap by Abdullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
