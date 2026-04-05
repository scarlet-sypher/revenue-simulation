import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EntryPage() {
  const navigate = useNavigate();

  const [backendReady, setBackendReady] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        await fetch(import.meta.env.VITE_API_URL);
      } catch {
        //enter even on failure
      } finally {
        setBackendReady(true);
        setChecking(false);
      }
    };

    wakeUpBackend();
  }, []);

  useEffect(() => {
    if (!backendReady) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        navigate("/simulation");
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [backendReady, navigate]);

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold text-white tracking-tight">
        Revenue Simulator
      </h1>

      <p className="text-zinc-500 text-sm">
        Model Q3 projections by adjusting conversion, deal size, and cycle time.
      </p>

      {checking && (
        <div className="text-center space-y-1">
          <p className="text-zinc-400 text-sm">
            Starting the app, please wait...
          </p>

          <p className="text-zinc-600 text-xs">
            If running locally, make sure the backend is running as per README.
          </p>
        </div>
      )}

      <button
        onClick={() => navigate("/simulation")}
        disabled={!backendReady}
        className="mt-2 px-6 py-2.5 text-sm font-semibold rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Enter
      </button>

      {backendReady && <p className="text-zinc-600 text-xs">or press Enter</p>}
    </div>
  );
}

export default EntryPage;
