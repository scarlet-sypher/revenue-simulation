type Props = {
  label: string;
  value: string;
  highlight?: "green" | "red" | "none";
  sub?: string;
};

function StatCard({ label, value, highlight = "none", sub }: Props) {
  const clean = (v: string) => v.replace("+", "").replace("-", "");

  const isZero = clean(value) === "₹0" || clean(value) === "0";

  const valueColor = isZero
    ? "text-white"
    : highlight === "green"
      ? "text-green-400"
      : highlight === "red"
        ? "text-red-400"
        : "text-white";

  const arrow = isZero
    ? ""
    : highlight === "green"
      ? "↑"
      : highlight === "red"
        ? "↓"
        : "";

  const borderColor = isZero
    ? "border-zinc-700"
    : highlight === "green"
      ? "border-green-700"
      : highlight === "red"
        ? "border-red-700"
        : "border-zinc-700";

  return (
    <div className={`border ${borderColor} rounded-lg p-4`}>
      <p className="text-zinc-400 text-sm mb-1">{label}</p>

      <p
        className={`text-xl font-semibold ${valueColor} flex items-center gap-1`}
      >
        {clean(value)}
        {arrow && <span>{arrow}</span>}
      </p>

      {sub && (
        <p className={`text-sm mt-1 ${valueColor} flex items-center gap-1`}>
          {clean(sub)}
          {arrow && <span>{arrow}</span>}
        </p>
      )}
    </div>
  );
}

export default StatCard;
