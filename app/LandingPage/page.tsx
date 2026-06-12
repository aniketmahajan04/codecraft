"use client";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Github from "@/public/github-logo.svg";
import Image from "next/image";

const NAV_LINKS = ["Features", "Pricing", "Docs", "Blog", "Changelog"];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(8,11,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{
          height: "60px",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Code<span style={{ color: "#7C3AED" }}>Craft</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`${link.toLowerCase()}`}
              className="text-[#6b7280] text-[13px] font-semibold"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E5E7EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
            >
              {link}
            </a>
          ))}
        </div>
        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#9CA3AF",
              fontSize: "13px",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E5E7EB")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all 
            "
            style={{
              background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
              border: "none",
              color: "#FFF",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 0 16px rgba(124,58,237,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 24px rgba(124,58,237,0.55)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 16px rgba(124,58,237,0.35)")
            }
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function LandingPage() {
  return (
    <div className="bg-[#080B12] text-[#E2E8F0] min-h-screen w-full flex flex-col">
      <NavBar />

      {/* Hero Section  */}
      <section className="relative pt-[140px] pb-[140px] w-full">
        <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2  h-[500px] w-[700px] bg-[radial-gradient(ellipse, rgba(124, 58, 237, 0.12) 0%, transparent 70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center mb-7 transform duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed1a]  border border-[#7c3aed40]">
              <Sparkles size={12} className="text-[#A78BFA]" />
              <span className="text-[#A78BFA] text-sm font-semibold tracking-tighter">
                Now with AI autocomplete — try it free
              </span>
              <ChevronRight size={12} style={{ color: "#7C3AED" }} />
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-center"
            style={{
              margin: "0 auto 24px",
              maxWidth: "820px",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              background:
                "linear-gradient(160deg, #FFFFFF 30%, rgba(167,139,250,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The code playground built for modern React
          </h1>

          <p
            className="text-center mx-auto"
            style={{
              maxWidth: "560px",
              fontSize: "18px",
              color: "#6B7280",
              lineHeight: 1.65,
              marginBottom: "44px",
            }}
          >
            Write, preview, and share React components instantly. No setup, no
            config, no friction. Just open and build.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/dashboard"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl transition-all ease-in-out duration-300 hover:-translate-y-2"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
                border: "none",
                color: "#FFF",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.4), 0 1px 0 rgba(255,255,255,0.1) inset",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 36px rgba(124,58,237,0.6), 0 1px 0 rgba(255,255,255,0.1) inset")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 24px rgba(124,58,237,0.4), 0 1px 0 rgba(255,255,255,0.1) inset")
              }
            >
              <Play
                size={15}
                fill="white"
                stroke="none"
                className="group-hover:animate-spin"
              />
              Start coding — it's free
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 text-[#E2E8F0] rounded-xl transition-all ease-in-out hover:-translate-y-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#E2E8F0",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)")
              }
            >
              <Image src={Github} alt="github" className="w-5 h-5" />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
