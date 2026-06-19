import Link from "next/link";
import { Sparkle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Github from "@/public/github-logo.svg";

export default function SignUp() {
  return (
    <div className="min-[100vh] bg-[#080B12] flex relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-[-10] right-[-25] w-125 h-125
     rounded-full bg-[linear-gradient(ellipse,rgba(124,58,237,0.1) 0%,transparent 65%)] pointer-events-none "
      />

      <div className="absolute bottom-[5%] left-[15%] w-87.5 h-87.5 rounded-full bg-[linear-gradient(ellipse,rgba(79,70,229,0.06)) 0%, transparent 65%] pointer-events-none" />

      {/* Left form */}
      <div className="flex-1 flex items-center justify-center pt-6 pb-6 pr-12 pl-12">
        <div className="w-full max-w-105">
          <Link
            href="/"
            className="bg-none cursor-pointer flex items-center border-none gap-2.5 mb-9"
          >
            <div
              style={{
                boxShadow: "0 0 14px rgba(124,58,237,0.5)",
              }}
              className="w-7.5 h-7.5 rounded-[9px] bg-[linear-gradient(135deg,#7C3AED,#4F46E5)] flex items-center justify-center"
            >
              <Zap size={14} fill="white" stroke="none" />
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "17px",
                fontWeight: 700,
                color: "#FFF",
                letterSpacing: "-0.03em",
              }}
            >
              Code<span style={{ color: "#7C3AED" }}>Craft</span>
            </span>
          </Link>
        </div>
        {/* Header */}
        <div className="mb-7">
          <div className="flex items-center gap-7 mb-2">
            <Sparkle size={16} className="text-[#7C3AED]" />
            <span className="text-[11px] font-semibold tracking-[0.06rem] text-[#7C3AED] uppercase">
              Free forever · No credit card
            </span>
          </div>
          <h1 className="mt-2 mb-2 text-[#F1F5F9] text-[26px] font-extrabold tracking-tighter">
            Create your account
          </h1>
          <p className="m-0 text-sm text-[#6B7280]">
            Start building and sharing React components in seconds.
          </p>
        </div>

        {/* Social */}
        <div className="flex gap-2.5 mb-[22px]">
          <Button
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-5 px-7 rounded-[10px] bg-[#ffffff66] border-[#ffffffe6] text-[#E2E8F0] text-sm font-medium transition-all duration-150",
            )}
          >
            <Image src={Github} alt="github" className="h-5 w-5" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
