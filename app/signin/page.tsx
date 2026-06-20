import { Zap } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
	return (
		<div className="h-screen bg-[#080B12] flex relative overflow-hidden">
			<div
				className="absolute top-[-10%] left-[30%] w-[600px] h-[600%] rounded-full 
      bg-[linear-gradient(ellipse,rgba(124,58,237,0.1) 0%,transparent 65%)]"
			/>
			<div
				className="absolute top-[-10%] left-[30%] w-[600px] h-[600%] rounded-full 
        bg-[linear-gradient(ellipse,rgba(124,58,237,0.1) 0%,transparent 65%)]"
			/>

			{/* left decorative panel */}
			<div
				className="hidden lg:flex w-[45%] bg-[linear-gradient(160deg,#0D1117 0%,#0B0F19 100%)] 
      border border-[#ffffff0f] flex flex-col justify-between p-11 relative overflow-hidden"
			>
				{/* Grid Pattern */}
				<div
					className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
        bg-size-[42px_42px]"
				/>

				<Link
					href="/"
					className="bg-none border-none flex items-center gap-2.5 w-fit relative"
				>
					<div
						className="w-[34px] h-[34px] rounded-lg bg-[linear-gradient(135deg,#7C3AED,#4F46E5)]
          flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.5)]"
					>
						<Zap size={16} fill="white" stroke="none" />
					</div>
					<span className="font-mono text-lg text-white font-bold tracking-tight">
						Code<span className="text-[#7C3AED]">Craft</span>
					</span>
				</Link>

				{/* Center feature */}
				<div className="relative">
					<div
						className="bg-[#111827] border border-[#ffffff14] rounded-2xl
         px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.08)] mb-12"
					>
						<div className="flex items-center gap-2 mb-2 border-b-[#ffffff0f] pb-3">
							{["#EF4444", "#F59E0B", "#10B981"].map((c) => (
								<div
									key={c}
									className={`w-[9px] h-[9px] rounded-full bg-[${c}]`}
								/>
							))}
							<span className="ml-4 text-[#4B5563] text-[11px] font-mono">
								Counter.jsx
							</span>
						</div>
						{[
							[
								{ t: "import", c: "#C084FC" },
								{ t: " { useState } from ", c: "#6B7280" },
								{ t: "'react'", c: "#86EFAC" },
							],
							[],
							[
								{ t: "export default", c: "#C084FC" },
								{ t: " function ", c: "#6B7280" },
								{ t: "App", c: "#93C5FD" },
								{ t: "() {", c: "#6B7280" },
							],
							[
								{ t: "  const", c: "#C084FC" },
								{ t: " [n, setN] = useState(", c: "#6B7280" },
								{ t: "0", c: "#FB923C" },
								{ t: ")", c: "#6B7280" },
							],
							[
								{ t: "  return", c: "#C084FC" },
								{ t: " <button onClick={...}>", c: "#F87171" },
							],
							[
								{ t: "    Clicked ", c: "#6B7280" },
								{ t: "{n}", c: "#FCD34D" },
								{ t: " times", c: "#6B7280" },
							],
							[{ t: "  </button>", c: "#F87171" }],
							[{ t: "}", c: "#6B7280" }],
						].map((line, i) => (
							<div
								key={i}
								style={{
									height: "20px",
									display: "flex",
									alignItems: "center",
								}}
							>
								{line.map((tok, j) => (
									<span
										key={j}
										style={{
											color: (tok as any).c,
											fontSize: "12px",
											fontFamily: "monospace",
											whiteSpace: "pre",
										}}
									>
										{(tok as any).t}
									</span>
								))}
							</div>
						))}
					</div>

					<h2
						className="text-[28px] font-extrabold text-[#F1F5F9]
							tracking-tighter leading-[1.15]
						"
						style={{
							margin: "0 0 12px",
							fontSize: "28px",
							fontWeight: 800,
							color: "#F1F5F9",
							letterSpacing: "-0.04em",
							lineHeight: 1.15,
						}}
					>
						Build React components
						<br />
						<span
							style={{
								background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							in seconds, not hours.
						</span>
					</h2>
					<p
						style={{
							margin: 0,
							fontSize: "14px",
							color: "#4B5563",
							lineHeight: 1.65,
						}}
					>
						Join 32,000+ developers who use CodeCraft to prototype, share, and
						ship React components faster than ever before.
					</p>
				</div>
				{/* Testimonial */}
				<div
					style={{
						backgroundColor: "rgba(255,255,255,0.03)",
						border: "1px solid rgba(255,255,255,0.07)",
						borderRadius: "12px",
						padding: "18px 20px",
					}}
				>
					<p
						style={{
							margin: "0 0 14px",
							fontSize: "13px",
							color: "#6B7280",
							lineHeight: 1.6,
							fontStyle: "italic",
						}}
					>
						"CodeCraft is the tool I wish existed 5 years ago. The live preview
						alone saves me hours every week."
					</p>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<div
							style={{
								width: "32px",
								height: "32px",
								borderRadius: "50%",
								background: "linear-gradient(135deg,#7C3AED,#2563EB)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "11px",
								fontWeight: 700,
								color: "#FFF",
							}}
						>
							SC
						</div>
						<div>
							<div
								style={{ fontSize: "12px", fontWeight: 600, color: "#E2E8F0" }}
							>
								Sarah Chen
							</div>
							<div style={{ fontSize: "11px", color: "#374151" }}>
								Senior Eng · Vercel
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* right side signin form */}
		</div>
	);
}
