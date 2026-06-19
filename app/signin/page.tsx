"use client";
import Image from "next/image";
import Github from "@/public/github-logo.svg";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@base-ui/react";
import { cn } from "@/lib/utils";

const PERKS = [
  "Unlimited public projects",
  "Live preview & hot reload",
  "One-click shareable links",
  "Community component library",
];

const PASSWORD_RULES = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  {
    label: "One number or symbol",
    test: (v: string) => /[0-9!@#$%^&*]/.test(v),
  },
];

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const strength = PASSWORD_RULES.filter((r) => r.test(password)).length;
  const strengthColors = ["bg-[#EF4444]", "bg-[#F59E0B]", "bg-[#10B981]"];
  const strengthTextColors = [
    "text-[#EF4444]",
    "text-[#F59E0B]",
    "text-[#10B981]",
  ];
  const strengthLabels = ["Weak", "Fair", "Strong"];

  return (
    <div className="relative min-h-screen flex bg-[#080B12] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-10%] right-[25%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(124,58,237,0.1)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[15%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(ellipse,rgba(79,70,229,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* Left: form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-[420px]">
          {/* Logo */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 mb-9 bg-none border-none cursor-pointer"
          >
            <div className="w-[30px] h-[30px] rounded-[9px] bg-linear-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center shadow-[0_0_14px_rgba(124,58,237,0.5)]">
              <Zap size={14} fill="white" stroke="none" />
            </div>
            <span className="font-mono text-[17px] font-bold text-white tracking-[-0.03em]">
              Code<span className="text-[#7C3AED]">Craft</span>
            </span>
          </Link>

          {/* Header */}
          <div className="mb-7">
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles size={16} className="text-[#7C3AED]" />
              <span className="text-[11px] font-semibold text-[#7C3AED] tracking-[0.06em] uppercase">
                Free forever · No credit card
              </span>
            </div>
            <h1 className="m-0 mb-2 text-[26px] font-extrabold text-[#F1F5F9] tracking-[-0.04em]">
              Create your account
            </h1>
            <p className="m-0 text-sm text-[#6B7280]">
              Start building and sharing React components in seconds.
            </p>
          </div>

          {/* Social Auth Providers */}
          <div className="flex gap-2.5 mb-[22px]">
            <Button
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-14 rounded-[10px] bg-[#ffffff0a] border border-[#ffffff17] text-[#E2E8F0] text-sm font-medium transition-all duration-150 hover:bg-[#ffffff12] hover:border-[#ffffff26]",
              )}
            >
              <Image src={Github} alt="github" className="h-5 w-5" />
              Github
            </Button>
            <Button
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-14 rounded-[10px] bg-[#ffffff0a] border border-[#ffffff17] text-[#E2E8F0] text-sm font-medium transition-all duration-150 hover:bg-[#ffffff12] hover:border-[#ffffff26]",
              )}
            >
              <Image src={Github} alt="github" className="h-5 w-5" />
              Github
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-[22px]">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="text-[11px] text-[#374151] font-medium tracking-wider">
              OR
            </span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          {/* Input Fields Wrapper */}
          <div className="flex flex-col gap-3.5 mb-5">
            {/* Full name */}
            <div>
              <label className="block text-[11px] font-semibold text-[#9CA3AF] mb-1.5 tracking-[0.04em]">
                FULL NAME
              </label>
              <div className="relative">
                <User
                  size={14}
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-150 ${
                    focusedField === "name"
                      ? "text-[#7C3AED]"
                      : "text-[#374151]"
                  }`}
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Jane Smith"
                  className={`w-full pl-[38px] pr-3.5 py-2.5 bg-white/4 rounded-xl text-[#F1F5F9] text-sm outline-none font-inherit box-border transition-all duration-150 border ${
                    focusedField === "name"
                      ? "border-[#7C3AED]/50 shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                      : "border-white/9"
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold text-[#9CA3AF] mb-1.5 tracking-[0.04em]">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail
                  size={14}
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-150 ${
                    focusedField === "email"
                      ? "text-[#7C3AED]"
                      : "text-[#374151]"
                  }`}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@example.com"
                  className={`w-full pl-[38px] pr-3.5 py-2.5 bg-white/4 rounded-xl text-[#F1F5F9] text-sm outline-none font-inherit box-border transition-all duration-150 border ${
                    focusedField === "email"
                      ? "border-[#7C3AED]/50 shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                      : "border-white/9"
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-semibold text-[#9CA3AF] mb-1.5 tracking-[0.04em]">
                PASSWORD
              </label>
              <div className="relative">
                <Lock
                  size={14}
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-150 ${
                    focusedField === "password"
                      ? "text-[#7C3AED]"
                      : "text-[#374151]"
                  }`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => {
                    setFocusedField("password");
                    setPasswordFocused(true);
                  }}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Create a strong password"
                  className={`w-full pl-[38px] pr-10 py-2.5 bg-white/4 rounded-xl text-[#F1F5F9] text-sm outline-none font-inherit box-border transition-all duration-150 border ${
                    focusedField === "password"
                      ? "border-[#7C3AED]/50 shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                      : "border-white/9"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-[#374151] hover:text-[#6B7280] flex items-center transition-colors duration-150"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>

              {/* Strength meter */}
              {(passwordFocused || password.length > 0) && (
                <div className="mt-2.5">
                  <div className="flex gap-1.5 mb-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`flex-1 h-0.5 rounded-full transition-colors duration-300 ease-in-out ${
                          i < strength
                            ? strengthColors[strength - 1]
                            : "bg-white/8"
                        }`}
                      />
                    ))}
                  </div>
                  {password.length > 0 && (
                    <p
                      className={`m-0 mb-2 text-[11px] font-medium ${strengthTextColors[strength - 1] ?? "text-[#374151]"}`}
                    >
                      {strength > 0
                        ? strengthLabels[strength - 1]
                        : "Too short"}
                    </p>
                  )}
                  <div className="flex flex-col gap-1">
                    {PASSWORD_RULES.map((rule) => {
                      const passed = password.length > 0 && rule.test(password);
                      return (
                        <div
                          key={rule.label}
                          className="flex items-center gap-1.5"
                        >
                          <CheckCircle2
                            size={11}
                            className={`shrink-0 transition-colors duration-200 ${
                              passed ? "text-[#10B981]" : "text-[#1F2937]"
                            }`}
                            fill={
                              passed ? "rgba(16,185,129,0.1)" : "transparent"
                            }
                          />
                          <span
                            className={`text-[11px] transition-colors duration-200 ${passed ? "text-[#6B7280]" : "text-[#374151]"}`}
                          >
                            {rule.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-2.5 mb-5">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`w-[18px] h-[18px] rounded-[5px] flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150 cursor-pointer ${
                agreed
                  ? "bg-[#7C3AED] border-none shadow-[0_0_10px_rgba(124,58,237,0.35)]"
                  : "bg-white/4 border border-white/15"
              }`}
            >
              {agreed && (
                <CheckCircle2 size={11} color="#FFF" strokeWidth={3} />
              )}
            </button>
            <p className="m-0 text-xs text-[#4B5563] leading-[1.55]">
              I agree to CodeCraft&apos;s{" "}
              <span className="text-[#7C3AED] cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#7C3AED] cursor-pointer">
                Privacy Policy
              </span>
              . I&apos;m okay with occasional product emails.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => router.push("/dashboard")}
            className="w-full p-3 rounded-xl bg-linear-to-br from-[#7C3AED] to-[#5B21B6] border-none text-white text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.35),_0_1px_0_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_30px_rgba(124,58,237,0.55),_0_1px_0_rgba(255,255,255,0.1)_inset] transition-shadow duration-200 font-inherit mb-5 cursor-pointer"
          >
            Create free account
            <ArrowRight size={15} />
          </button>

          {/* Sign in link */}
          <p className="m-0 text-center text-sm text-[#4B5563]">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="bg-none border-none cursor-pointer text-[#7C3AED] font-semibold text-sm font-inherit hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Feature Panel split */}
      <div className="hidden lg:flex w-[42%] bg-linear-to-br from-[#0D1117] to-[#0B0F19] border-l border-white/6 flex-col justify-center px-12 py-16 relative overflow-hidden gap-10">
        {/* Grid layout decoration pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

        {/* Center Glow orb */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(rgba(124,58,237,0.12),transparent_70%)] pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-linear-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center">
              <Zap size={13} fill="white" stroke="none" />
            </div>
            <span className="text-xs font-semibold text-[#A78BFA]">
              Everything free to start
            </span>
          </div>

          <h2 className="m-0 mb-3.5 text3xl font-extrabold text-[#F1F5F9] tracking-[-0.04em] leading-[1.15]">
            Your full React dev environment,
            <br />
            <span className="bg-linear-to-br from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">
              right in the browser.
            </span>
          </h2>
          <p className="m-0 mb-8 text-sm text-[#4B5563] leading-[1.65]">
            No installs. No config. Open CodeCraft and start writing React —
            your preview updates as you type.
          </p>

          {/* Perks list */}
          <div className="flex flex-col gap-3">
            {PERKS.map((perk) => (
              <div key={perk} className="flex items-center gap-2.5">
                <div className="w-[22px] h-[22px] rounded-md bg-[#10B981]/12 border border-[#10B981]/25 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={12} className="text-[#10B981]" />
                </div>
                <span className="text-sm text-[#9CA3AF]">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing/Plan tier context card */}
        <div className="bg-white/3 border border-white/[0.07] rounded-[14px] p-6 relative">
          <div className="flex items-start justify-between mb-3.5">
            <div>
              <p className="m-0 mb-0.5 text-xs text-[#4B5563]">Start on</p>
              <p className="m-0 text-lg font-extrabold text-[#F1F5F9]">
                Hobby Plan
              </p>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-bold text-[#10B981]">
              Free forever
            </div>
          </div>
          <div className="h-px bg-white/6 mb-3.5" />
          <p className="m-0 mb-2.5 text-xs text-[#4B5563]">
            Upgrade anytime to unlock:
          </p>
          <div className="flex gap-2 flex-wrap">
            {["Private projects", "AI autocomplete", "Team collab"].map(
              (feat) => (
                <span
                  key={feat}
                  className="text-[11px] font-medium text-[#7C3AED] bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-md px-2 py-0.5"
                >
                  {feat}
                </span>
              ),
            )}
          </div>
        </div>

        {/* User metrics social proof */}
        <div className="flex items-center gap-3 relative">
          <div className="flex">
            {[
              "from-[#7C3AED] to-[#4F46E5]",
              "from-[#06B6D4] to-[#0284C7]",
              "from-[#10B981] to-[#059669]",
              "from-[#F59E0B] to-[#D97706]",
            ].map((grad, i) => (
              <div
                key={i}
                style={{ zIndex: 4 - i }}
                className={`w-7 h-7 rounded-full bg-linear-to-br ${grad} border-2 border-[#0B0F19] -ml-2 first:ml-0 text-[9px] font-bold text-white flex items-center justify-center`}
              >
                {["JD", "SC", "MW", "+"][i]}
              </div>
            ))}
          </div>
          <div>
            <p className="m-0 text-xs font-semibold text-[#9CA3AF]">
              32,000+ developers signed up
            </p>
            <p className="m-0 mt-0.5 text-[11px] text-[#374151]">
              Join them today — takes 30 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
