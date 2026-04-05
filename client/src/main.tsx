import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import EntryPage from "./pages/EntryPage";

const SimulationPage = lazy(() => import("./pages/SimulationPage"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <p className="text-zinc-500 text-sm">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/simulation" element={<SimulationPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
