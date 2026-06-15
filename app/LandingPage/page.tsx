"use client";
import {
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  Play,
  Share2,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Github from "@/public/github-logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["Features", "Pricing", "Docs", "Blog", "Changelog"];
const FEATURES = [
  {
    icon: Code2,
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.25)",
    title: "Intelligent Editor",
    desc: "Full syntax highlighting, IntelliSense autocomplete, and live error detection powered by the Monaco engine.",
  },
  {
    icon: Globe,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.25)",
    title: "Live Preview",
    desc: "See your components render in real-time as you type. No build step. No waiting. Just instant feedback.",
  },
  {
    icon: Layers,
    color: "#10B981",
    glow: "rgba(16,185,129,0.25)",
    title: "Component Library",
    desc: "Browse and remix thousands of community components. Build faster by starting from what already works.",
  },
  {
    icon: Share2,
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.25)",
    title: "One-click Share",
    desc: "Generate a permanent shareable link for any project. Collaborate and get feedback without deployments.",
  },
  {
    icon: Shield,
    color: "#EF4444",
    glow: "rgba(239,68,68,0.25)",
    title: "Secure by Default",
    desc: "Projects run in isolated sandboxes. Your code and data are always private until you choose to share.",
  },
  {
    icon: Cpu,
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.25)",
    title: "AI Autocomplete",
    desc: "Describe what you want and let AI generate component boilerplate, tests, and documentation instantly.",
  },
];

const CODE_DEMO = [
  {
    line: 1,
    tokens: [
      { t: "import", c: "#C084FC" },
      { t: " { useState } ", c: "#E2E8F0" },
      { t: "from", c: "#C084FC" },
      { t: " 'react'", c: "#86EFAC" },
    ],
  },
  { line: 2, tokens: [] },
  {
    line: 3,
    tokens: [
      { t: "export default function", c: "#C084FC" },
      { t: " Counter", c: "#93C5FD" },
      { t: "() {", c: "#E2E8F0" },
    ],
  },
  {
    line: 4,
    tokens: [
      { t: "  const", c: "#C084FC" },
      { t: " [n, setN] = ", c: "#E2E8F0" },
      { t: "useState", c: "#60A5FA" },
      { t: "(", c: "#E2E8F0" },
      { t: "0", c: "#FB923C" },
      { t: ")", c: "#E2E8F0" },
    ],
  },
  {
    line: 5,
    tokens: [
      { t: "  return", c: "#C084FC" },
      { t: " (", c: "#E2E8F0" },
    ],
  },
  {
    line: 6,
    tokens: [
      { t: "    <button", c: "#F87171" },
      { t: " onClick", c: "#93C5FD" },
      { t: "={() => setN(n+1)}>", c: "#E2E8F0" },
    ],
  },
  {
    line: 7,
    tokens: [
      { t: "      Clicked ", c: "#E2E8F0" },
      { t: "{n}", c: "#FCD34D" },
      { t: " times", c: "#E2E8F0" },
    ],
  },
  { line: 8, tokens: [{ t: "    </button>", c: "#F87171" }] },
  { line: 9, tokens: [{ t: "  )", c: "#E2E8F0" }] },
  { line: 10, tokens: [{ t: "}", c: "#E2E8F0" }] },
];

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
  const [activeLine, setActiveLine] = useState(3);

  useEffect(() => {
    const t = setInterval(() => setActiveLine((l) => (l % 10) + 1), 900);
    return () => clearInterval(t);
  }, []);
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
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl transition-all ease-in-out
               duration-300 hover:-translate-y-2 text-white cursor-pointer border border-white/10"
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

        {/* Product Demo Section */}
        <section className="p-[120px]">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.5), 0 40px 80px rgba(0,0,0,0.6), 0 0 120px rgba(124,58,237,0.1)",
              }}
            >
              {/* Mock app chrome */}
              <div
                style={{
                  backgroundColor: "#0B0F19",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {["#EF4444", "#F59E0B", "#10B981"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: c,
                      boxShadow: `0 0 6px ${c}80`,
                    }}
                  />
                ))}
                <div
                  style={{
                    flex: 1,
                    height: "22px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                    marginLeft: "8px",
                    marginRight: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "#4B5563",
                      fontSize: "11px",
                      fontFamily: "monospace",
                    }}
                  >
                    localhost:3000
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", height: "380px" }}>
                {/* Editor pane */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#0D1117",
                    padding: "20px 0",
                  }}
                >
                  {/* Tab */}
                  <div
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      marginBottom: "12px",
                      paddingBottom: "0",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        padding: "6px 16px",
                        borderTop: "1px solid #7C3AED",
                        backgroundColor: "#0D1117",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        color: "#E2E8F0",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#60A5FA",
                          display: "inline-block",
                        }}
                      />
                      Counter.jsx
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    {/* Line numbers */}
                    <div
                      style={{
                        width: "40px",
                        paddingRight: "12px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {CODE_DEMO.map((l) => (
                        <div
                          key={l.line}
                          style={{
                            height: "22px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            fontSize: "12px",
                            fontFamily: "monospace",
                            color:
                              activeLine === l.line ? "#7C3AED" : "#2D3748",
                          }}
                        >
                          {l.line}
                        </div>
                      ))}
                    </div>
                    {/* Code */}
                    <div style={{ paddingLeft: "4px" }}>
                      {CODE_DEMO.map((l) => (
                        <div
                          key={l.line}
                          style={{
                            height: "22px",
                            display: "flex",
                            alignItems: "center",
                            backgroundColor:
                              activeLine === l.line
                                ? "rgba(124,58,237,0.07)"
                                : "transparent",
                            paddingRight: "20px",
                          }}
                        >
                          {l.tokens.map((t, i) => (
                            <span
                              key={i}
                              style={{
                                color: t.c,
                                fontSize: "13px",
                                fontFamily: "monospace",
                                whiteSpace: "pre",
                              }}
                            >
                              {t.t}
                            </span>
                          ))}
                          {activeLine === l.line && l.tokens.length > 0 && (
                            <span
                              style={{
                                display: "inline-block",
                                width: "2px",
                                height: "14px",
                                backgroundColor: "#A78BFA",
                                verticalAlign: "middle",
                                animation: "blink 1s step-end infinite",
                                marginLeft: "1px",
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Preview pane */}
                <div
                  style={{
                    width: "280px",
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    background: "linear-gradient(160deg, #f8faff, #f0f4ff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFF",
                      borderRadius: "16px",
                      padding: "32px 24px",
                      textAlign: "center",
                      boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.1)",
                      minWidth: "180px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        marginBottom: "12px",
                      }}
                    >
                      Clicked
                    </div>
                    <div
                      style={{
                        fontSize: "48px",
                        fontWeight: 800,
                        color: "#7C3AED",
                        lineHeight: 1,
                      }}
                    >
                      7
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        marginTop: "8px",
                      }}
                    >
                      times
                    </div>
                    <div
                      style={{
                        marginTop: "20px",
                        padding: "10px 24px",
                        background: "linear-gradient(135deg,#7C3AED,#5B21B6)",
                        borderRadius: "10px",
                        color: "#FFF",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(124,58,237,0.4)",
                      }}
                    >
                      Click me
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="p-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#7C3AED] text-sm font-semibold tracking-widest mb-3">
                Everything you need
              </p>
              <h2 className="tracking-[-0.03em] m-0 text-[clamp(28px,4vw,44px)] font-extrabold text-[#F1F5F9]">
                Built for the way developer actually work
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className={`group bg-[#0D1117] border-white/5 rounded-2xl p-7 transition-all ease-in cursor-default duration-300
                   hover:-translate-y-2 `}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${f.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${f.glow}`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-5 rounded-xl transition-all ease-in-out duration-300 group-hover:-rotate-12"
                    style={{
                      backgroundColor: `${f.color}`,
                      border: `1px solid ${f.color}30`,
                    }}
                  >
                    <f.icon size={20} className={`${f.color}`} />
                  </div>
                  <h3 className="mt-2.5 mb-2.5 text-[16px] font-bold text-[#F1F5F9]">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] m-0">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-[80px] pb-[100px]">
          <div className="max-w-3xl text-center mx-auto px-6">
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.08))",
              }}
              className="relative border border-[#7c3aed40] rounded-3xl
            pt-[60px] pb-[60px] pr-[48px] pl-[48px] overflow-hidden"
            >
              <div
                style={{
                  background:
                    "radial-gradient(rgba(124,58,237,0.2), transparent 70%)",
                }}
                className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full "
              />
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 34px)",
                }}
                className="mt-4 font-bold tracking-tight text-[#F1F5F9]"
              >
                Ready to build something great?
              </h2>

              <p className="mt-9 mb-9 text-[16px] text-[#6B7280] leading-[1.6]">
                Join 32,000+ developers who ship faster with CodeCrafts.
              </p>
              <Button
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #5B21B6)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.45)",
                }}
                className={cn(
                  "text-white text-[16px] font-bold cursor-pointer",
                  "flex items-center gap-2.5 mx-auto px-7 py-4 rounded-xl transition-all",
                )}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(124,58,237,0.65)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 28px rgba(124,58,237,0.45)")
                }
              >
                Start building now
              </Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
