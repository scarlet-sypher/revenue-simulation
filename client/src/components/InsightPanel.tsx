type Props = {
  insight: string;
  drivers: string[];
  positive: boolean;
};

function InsightPanel({ insight, drivers, positive }: Props) {
  return (
    <div className="border border-zinc-700 rounded-lg p-4">
      <p className={`font-medium mb-3 ${positive ? "text-green-400" : "text-red-400"}`}>
        {insight}
      </p>

      <div className="text-sm text-zinc-400 space-y-1">
        {drivers.map((d, i) => (
          <p key={i}>• {d}</p>
        ))}
      </div>
    </div>
  );
}

export default InsightPanel;