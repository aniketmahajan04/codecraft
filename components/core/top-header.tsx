export default function TopHeader() {
  return (
    <header
      className="flex items-center justify-between shrink-0 z-50"
      style={{
        height: "48px",
        backgroundColor: "rgba(11, 15, 25, 0.95)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center gap-3">
        <div>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Code<span style={{ color: "#7C3AED" }}>Craft</span>
          </span>
        </div>
      </div>
    </header>
  );
}
