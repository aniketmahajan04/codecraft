"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  ArrowRight,
  Code2,
  Layers,
  Globe,
  Share2,
  CheckCircle2,
  ChevronRight,
  X,
  Star,
  Play,
  Sparkles,
  Shield,
  Cpu,
} from "lucide-react";
import Github from "@/public/github-logo.svg";

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

const PRICING = [
  {
    name: "Hobby",
    price: "Free",
    period: "",
    desc: "Perfect for side projects and experimentation.",
    features: [
      "5 public projects",
      "Community components",
      "Basic live preview",
      "Share links",
    ],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    desc: "For developers who ship production-quality work.",
    features: [
      "Unlimited projects",
      "Private projects",
      "AI autocomplete",
      "Custom domains",
      "Priority support",
      "Team collaboration (3 seats)",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    desc: "For engineering teams building at scale.",
    features: [
      "Everything in Pro",
      "Unlimited seats",
      "SSO / SAML",
      "Audit logs",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Eng · Vercel",
    avatar: "SC",
    avatarGrad: "linear-gradient(135deg, #7C3AED, #4F46E5)",
    quote:
      "CodeCraft replaced CodeSandbox for our entire team. The editor performance is unmatched and the share links just work.",
    stars: 5,
  },
  {
    name: "Marcus Webb",
    role: "Design Engineer · Linear",
    avatar: "MW",
    avatarGrad: "linear-gradient(135deg, #06B6D4, #0284C7)",
    quote:
      "I've tried every playground. None come close to the polish and speed of CodeCraft. It's the tool I wish existed years ago.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Staff Eng · Stripe",
    avatar: "PN",
    avatarGrad: "linear-gradient(135deg, #10B981, #059669)",
    quote:
      "The live preview is instant. The AI autocomplete saves me 30 minutes a day. The team collaboration is seamless. Just use it.",
    stars: 5,
  },
];

const CODE_DEMO = [
  {
    line: 1,
    tokens: [
      { t: "import", c: "text-[#C084FC]" },
      { t: " { useState } ", c: "text-[#E2E8F0]" },
      { t: "from", c: "text-[#C084FC]" },
      { t: " 'react'", c: "text-[#86EFAC]" },
    ],
  },
  { line: 2, tokens: [] as { t: string; c: string }[] },
  {
    line: 3,
    tokens: [
      { t: "export default function", c: "text-[#C084FC]" },
      { t: " Counter", c: "text-[#93C5FD]" },
      { t: "() {", c: "text-[#E2E8F0]" },
    ],
  },
  {
    line: 4,
    tokens: [
      { t: "  const", c: "text-[#C084FC]" },
      { t: " [n, setN] = ", c: "text-[#E2E8F0]" },
      { t: "useState", c: "text-[#60A5FA]" },
      { t: "(", c: "text-[#E2E8F0]" },
      { t: "0", c: "text-[#FB923C]" },
      { t: ")", c: "text-[#E2E8F0]" },
    ],
  },
  {
    line: 5,
    tokens: [
      { t: "  return", c: "text-[#C084FC]" },
      { t: " (", c: "text-[#E2E8F0]" },
    ],
  },
  {
    line: 6,
    tokens: [
      { t: "    <button", c: "text-[#F87171]" },
      { t: " onClick", c: "text-[#93C5FD]" },
      { t: "={() => setN(n+1)}>", c: "text-[#E2E8F0]" },
    ],
  },
  {
    line: 7,
    tokens: [
      { t: "      Clicked ", c: "text-[#E2E8F0]" },
      { t: "{n}", c: "text-[#FCD34D]" },
      { t: " times", c: "text-[#E2E8F0]" },
    ],
  },
  { line: 8, tokens: [{ t: "    </button>", c: "text-[#F87171]" }] },
  { line: 9, tokens: [{ t: "  )", c: "text-[#E2E8F0]" }] },
  { line: 10, tokens: [{ t: "}", c: "text-[#E2E8F0]" }] },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#080B12]/92 backdrop-blur-xl border-white/6"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[60px]">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-linear-to-br from-[#7C3AED] to-[#4F46E5] shadow-[0_0_12px_rgba(124,58,237,0.5)]">
            <Zap size={13} fill="white" stroke="none" />
          </div>
          <span className="text-white font-mono text-[15px] font-bold tracking-[-0.03em]">
            Code<span className="text-[#7C3AED]">Craft</span>
          </span>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[#6B7280] text-[13px] font-medium no-underline transition-colors hover:text-[#E5E7EB]"
            >
              {l}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/signin")}
            className="bg-transparent border-none cursor-pointer text-[#9CA3AF] text-[13px] font-medium transition-colors hover:text-[#E5E7EB]"
          >
            Sign in
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-shadow border-none text-white text-[13px] font-semibold cursor-pointer bg-linear-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_0_16px_rgba(124,58,237,0.35)] hover:shadow-[0_0_24px_rgba(124,58,237,0.55)]"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function LandingPage() {
  const router = useRouter();
  const [activeLine, setActiveLine] = useState(3);

  useEffect(() => {
    const t = setInterval(() => setActiveLine((l) => (l % 10) + 1), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#080B12] text-[#E2E8F0] min-h-screen overflow-x-hidden">
      <NavBar />

      {/* ── HERO ── */}
      <section className="relative pt-[140px] pb-[100px]">
        {/* BG glow */}
        <div className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(124,58,237,0.12)_0%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25">
              <Sparkles size={12} className="text-[#A78BFA]" />
              <span className="text-[#A78BFA] text-xs font-semibold tracking-[0.04em]">
                Now with AI autocomplete — try it free
              </span>
              <ChevronRight size={12} className="text-[#7C3AED]" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center mx-auto mb-6 max-w-[820px] text-[clamp(40px,6vw,72px)] font-extrabold tracking-[-0.04em] leading-[1.08] bg-linear-to-b from-white from-30% to-[#A78BFA]/80 bg-clip-text text-transparent">
            The code playground built for modern React
          </h1>

          <p className="text-center mx-auto max-w-[560px] text-lg text-[#6B7280] leading-[1.65] mb-11">
            Write, preview, and share React components instantly. No setup, no
            config, no friction. Just open and build.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl transition-shadow border-none text-white text-[15px] font-semibold cursor-pointer bg-linear-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_0_24px_rgba(124,58,237,0.4),0_1px_0_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_36px_rgba(124,58,237,0.6),0_1px_0_rgba(255,255,255,0.1)_inset]"
            >
              <Play size={15} fill="white" stroke="none" />
              Start coding — it&apos;s free
            </button>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl transition-colors text-[#E2E8F0] text-[15px] font-semibold cursor-pointer no-underline bg-white/5 border border-white/10 hover:bg-white/8"
            >
              <Image src={Github} alt="github" className="w-5 h-6" />
              Star on GitHub
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex justify-center mt-10 gap-6 flex-wrap">
            {[
              { label: "Active users", value: "32,000+" },
              { label: "Projects created", value: "180,000+" },
              { label: "Uptime SLA", value: "99.98%" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="m-0 text-[22px] font-bold text-[#E2E8F0]">
                  {s.value}
                </p>
                <p className="mt-0.5 mb-0 text-xs text-[#4B5563]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT DEMO ── */}
      <section className="px-0 pt-10 pb-[100px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_0_1px_rgba(0,0,0,0.5),0_40px_80px_rgba(0,0,0,0.6),0_0_120px_rgba(124,58,237,0.1)]">
            {/* Mock app chrome */}
            <div className="bg-[#0B0F19] border-b border-white/6 px-4 py-2.5 flex items-center gap-2">
              {["#EF4444", "#F59E0B", "#10B981"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: c, boxShadow: `0 0 6px ${c}80` }}
                />
              ))}
              <div className="flex-1 h-[22px] rounded-md bg-white/4 border border-white/6 flex items-center pl-2.5 mx-2">
                <span className="text-[#4B5563] text-[11px] font-mono">
                  localhost:3000
                </span>
              </div>
            </div>

            <div className="flex h-[380px]">
              {/* Editor pane */}
              <div className="flex-1 bg-[#0D1117] py-5">
                {/* Tab */}
                <div className="border-b border-white/6 mb-3 flex">
                  <div className="px-4 py-1.5 border-t border-[#7C3AED] bg-[#0D1117] text-[11px] font-mono text-[#E2E8F0] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] inline-block" />
                    Counter.jsx
                  </div>
                </div>
                <div className="flex">
                  {/* Line numbers */}
                  <div className="w-10 pr-3 flex flex-col">
                    {CODE_DEMO.map((l) => (
                      <div
                        key={l.line}
                        className={`h-[22px] flex items-center justify-end text-xs font-mono ${
                          activeLine === l.line
                            ? "text-[#7C3AED]"
                            : "text-[#2D3748]"
                        }`}
                      >
                        {l.line}
                      </div>
                    ))}
                  </div>
                  {/* Code */}
                  <div className="pl-1">
                    {CODE_DEMO.map((l) => (
                      <div
                        key={l.line}
                        className={`h-[22px] flex items-center pr-5 ${
                          activeLine === l.line
                            ? "bg-[#7C3AED]/[0.07]"
                            : "bg-transparent"
                        }`}
                      >
                        {l.tokens.map((t, i) => (
                          <span
                            key={i}
                            className={`${t.c} text-[13px] font-mono whitespace-pre`}
                          >
                            {t.t}
                          </span>
                        ))}
                        {activeLine === l.line && l.tokens.length > 0 && (
                          <span className="inline-block w-0.5 h-3.5 bg-[#A78BFA] align-middle animate-[blink_1s_step-end_infinite] ml-px" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview pane */}
              <div className="w-[280px] border-l border-white/6 bg-linear-to-br from-[#f8faff] to-[#f0f4ff] flex items-center justify-center">
                <div className="bg-white rounded-2xl px-6 py-8 text-center shadow-[0_8px_32px_rgba(124,58,237,0.15)] border border-[#7C3AED]/10 min-w-[180px]">
                  <div className="text-[13px] text-[#6B7280] mb-3">Clicked</div>
                  <div className="text-5xl font-extrabold text-[#7C3AED] leading-none">
                    7
                  </div>
                  <div className="text-[13px] text-[#6B7280] mt-2">times</div>
                  <div className="mt-5 px-6 py-2.5 bg-linear-to-br from-[#7C3AED] to-[#5B21B6] rounded-[10px] text-white text-[13px] font-semibold cursor-pointer shadow-[0_4px_12px_rgba(124,58,237,0.4)]">
                    Click me
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.1em] uppercase mb-3">
              Everything you need
            </p>
            <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em] text-[#F1F5F9]">
              Built for the way developers actually work
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-[#0D1117] border border-white/[0.06] rounded-2xl p-7 transition-all duration-200 cursor-default hover:-translate-y-0.5"
                  style={
                    {
                      "--hover-border": `${f.color}40`,
                      "--hover-glow": f.glow,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${f.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${f.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${f.color}18`,
                      border: `1px solid ${f.color}30`,
                    }}
                  >
                    <Icon size={20} style={{ color: f.color }} />
                  </div>
                  <h3 className="m-0 mb-2.5 text-base font-bold text-[#F1F5F9]">
                    {f.title}
                  </h3>
                  <p className="m-0 text-sm text-[#6B7280] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.1em] uppercase mb-3">
              Loved by engineers
            </p>
            <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em] text-[#F1F5F9]">
              What developers are saying
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-[#0D1117] border border-white/[0.06] rounded-2xl p-7"
              >
                <div className="flex gap-[3px] mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                  ))}
                </div>
                <p className="m-0 mb-6 text-sm text-[#9CA3AF] leading-[1.65] italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                    style={{ background: t.avatarGrad }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="m-0 text-[13px] font-semibold text-[#E2E8F0]">
                      {t.name}
                    </p>
                    <p className="mt-0.5 mb-0 text-[11px] text-[#4B5563]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.1em] uppercase mb-3">
              Pricing
            </p>
            <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em] text-[#F1F5F9]">
              Simple, transparent pricing
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 items-start">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[20px] p-8 ${
                  plan.highlight
                    ? "bg-[#7C3AED]/[0.08] border border-[#7C3AED]/40 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                    : "bg-[#0D1117] border border-white/[0.06]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-full px-3.5 py-[3px] text-[11px] font-bold text-white tracking-[0.05em] whitespace-nowrap">
                    Most popular
                  </div>
                )}
                <p
                  className={`m-0 mb-1.5 text-sm font-semibold ${plan.highlight ? "text-[#A78BFA]" : "text-[#9CA3AF]"}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-0.5 mb-2.5">
                  <span className="text-4xl font-extrabold text-[#F1F5F9] tracking-[-0.04em]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#4B5563] text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="m-0 mb-6 text-[13px] text-[#6B7280]">
                  {plan.desc}
                </p>
                <ul className="m-0 mb-7 p-0 list-none flex flex-col gap-2.5">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-[13px] text-[#9CA3AF]"
                    >
                      <CheckCircle2
                        size={14}
                        className={`shrink-0 ${plan.highlight ? "text-[#A78BFA]" : "text-[#374151]"}`}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => router.push("/dashboard")}
                  className={`w-full py-3 rounded-[10px] text-white text-[13px] font-semibold cursor-pointer transition-shadow ${
                    plan.highlight
                      ? "border-none bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_4px_14px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]"
                      : "border border-white/10 bg-white/[0.04]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="pt-20 pb-[100px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="relative overflow-hidden rounded-3xl px-12 py-[60px] bg-gradient-to-br from-[#7C3AED]/15 to-[#4F46E5]/[0.08] border border-[#7C3AED]/25">
            <div className="pointer-events-none absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(rgba(124,58,237,0.2),transparent_70%)]" />
            <h2 className="m-0 mb-4 text-[clamp(24px,4vw,38px)] font-extrabold tracking-[-0.03em] text-[#F1F5F9]">
              Ready to build something great?
            </h2>
            <p className="m-0 mb-9 text-base text-[#6B7280] leading-relaxed">
              Join 32,000+ developers who ship faster with CodeCraft.
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2.5 mx-auto px-7 py-4 rounded-xl border-none text-white text-[15px] font-bold cursor-pointer transition-shadow bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_0_28px_rgba(124,58,237,0.45)] hover:shadow-[0_0_40px_rgba(124,58,237,0.65)]"
            >
              Start building for free
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
              <Zap size={11} fill="white" stroke="none" />
            </div>
            <span className="text-[#6B7280] text-[13px]">
              © 2026 CodeCraft. Open source under MIT.
            </span>
          </div>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Status", "Docs"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[#4B5563] text-[13px] no-underline transition-colors hover:text-[#9CA3AF]"
              >
                {l}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <Link href="#">
                <Image src={Github} alt="github" className="w-5 h-5" />
              </Link>
              <X size={16} className="text-[#4B5563] cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
