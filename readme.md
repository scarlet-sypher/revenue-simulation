# 📊 Revenue Simulation Engine

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/scarlet-sypher/revenue-simulation?style=for-the-badge&logo=github&logoColor=white)](https://github.com/scarlet-sypher/revenue-simulation/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/scarlet-sypher/revenue-simulation?style=for-the-badge&logo=github&logoColor=white)](https://github.com/scarlet-sypher/revenue-simulation/network)
[![GitHub repo size](https://img.shields.io/github/repo-size/scarlet-sypher/revenue-simulation?style=for-the-badge&logo=github&logoColor=white)](https://github.com/scarlet-sypher/revenue-simulation)
[![GitHub last commit](https://img.shields.io/github/last-commit/scarlet-sypher/revenue-simulation?style=for-the-badge&logo=github&logoColor=white)](https://github.com/scarlet-sypher/revenue-simulation/commits)

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-4CAF50?style=for-the-badge)](https://revenue-simulation.vercel.app/)

*Run "what-if" scenarios on your Q3 revenue — powered by real Q1 & Q2 sales data* 🚀

</div>

---

## 📋 What Problem Does It Solve?

Sales teams often ask questions like: *"If we close deals 20% faster, how much more do we earn?"* or *"What happens to revenue if average deal size drops by 10%?"*

This engine answers those questions. It reads your historical deal data, builds a Q3 baseline projection from Q1 & Q2 patterns, and lets you apply scenario changes — seeing the revenue impact week by week, instantly.

### 🌟 What Makes It Useful
- **Real data-driven projections** — no hardcoded assumptions, everything comes from your CSV
- **Three levers to pull** — conversion rate, deal size, and sales cycle
- **Instant visual feedback** — baseline vs scenario chart updates on demand
- **Plain-English insights** — explains *why* revenue changed, not just by how much

---

## ✨ Features

<table>
<tr>
<td>

### 📐 Simulation Engine
- Reads and parses deal data from CSV at runtime
- Splits deals into Q1, Q2, Q3 automatically
- Computes baseline metrics from Q1 + Q2 history
- Groups Q3 pipeline into 12 weekly buckets

</td>
<td>

### 🔧 Scenario Controls
- Conversion rate slider (±20%)
- Average deal size slider (±20%)
- Sales cycle slider (±5 days)
- All inputs validated and clamped server-side

</td>
</tr>
<tr>
<td>

### 📈 Visual Output
- Side-by-side weekly revenue line chart
- Baseline vs scenario comparison
- Absolute and percentage impact cards
- 12-week Q3 revenue breakdown

</td>
<td>

### 💡 Insight Generation
- Auto-generated plain-English explanation
- Lists which drivers caused the change
- Shows direction: increased / decreased
- Updates with every simulation run

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://recharts.org/)

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

### 📦 Key Dependencies

| Frontend | Backend |
|----------|---------|
| `react` `react-dom` | `express` `cors` |
| `react-router-dom` | `typescript` `ts-node` |
| `axios` | `csv-parser` |
| `recharts` | `dotenv` |
| `tailwindcss` | `nodemon` |

---

## 🗂️ Project Structure

```
revenue-simulation/
├── client/                          # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DealCard.tsx
│   │   │   ├── InsightPanel.tsx
│   │   │   ├── RevenueChart.tsx
│   │   │   ├── SliderControl.tsx
│   │   │   └── StatCard.tsx
│   │   ├── pages/
│   │   │   └── SimulationPage.tsx   # Main UI page with sliders
│   │   ├── services/
│   │   │   └── api.ts               # Axios calls to backend
│   │   ├── types/
│   │   │   ├── deal.ts
│   │   │   └── simulation.ts
│   │   └── App.tsx
│   ├── .env
│   └── vite.config.ts
│
└── server/                          # Node.js + Express backend
    ├── src/
    │   ├── controllers/
    │   │   └── simulation.ts        # Request handler
    │   ├── routes/
    │   │   └── simulation.ts        # POST /api/simulate
    │   ├── services/
    │   │   ├── data.ts              # Load + split deals into Q1/Q2/Q3
    │   │   ├── metrics.ts           # Compute conversion rate, deal size, cycle
    │   │   ├── bucket.ts            # Group Q3 deals into 12 weekly buckets
    │   │   └── simulation.ts        # Core simulation logic
    │   ├── utils/
    │   │   ├── csv.ts               # CSV reader
    │   │   └── date.ts              # Date helpers (getMonth, diffDays)
    │   ├── types/
    │   │   └── deal.ts
    │   └── server.ts                # Express app entry point
    ├── deals.csv                    # Input data
    └── .env
```

---

## ⚙️ How It Works

Here's the full flow from raw CSV to revenue insight:

### 1️⃣ Load & Split Data
All deals are read from `deals.csv`. Each deal is classified into Q1, Q2, or Q3 based on its `closed_date` (or `created_date` for open deals).

- **Q1** → January to March
- **Q2** → April to June
- **Q3** → July to September *(open deals without a close date)*

### 2️⃣ Compute Historical Metrics (from Q1 + Q2)

| Metric | Formula |
|---|---|
| **Conversion Rate** | `Won Deals / (Won + Lost Deals)` |
| **Avg Deal Size** | `Total Value of Won Deals / Won Deal Count` |
| **Avg Sales Cycle** | `Average days from created_date to closed_date` |

### 3️⃣ Build Q3 Weekly Buckets
Q3 pipeline deals are grouped into **12 weekly buckets** — 4 weeks each for July, August, and September.

### 4️⃣ Run Simulation
For each of the 12 weeks:

```
Baseline Revenue  = deals_in_bucket × conversion_rate × avg_deal_size

Scenario Revenue  = deals_in_bucket
                  × cycle_multiplier      ← from sales cycle change
                  × new_conversion_rate   ← from conversion change
                  × new_deal_size         ← from deal size change
```

> `cycle_multiplier = original_cycle / new_cycle` — a shorter cycle increases revenue velocity.

### 5️⃣ Compute Impact
```
Absolute Impact   = Scenario Total - Baseline Total
Percentage Impact = (Absolute Impact / Baseline Total) × 100
```

### 6️⃣ Generate Insight
> *"Revenue increased by 58.2% due to higher conversion rate (+10%), larger average deal size (+15%), and shorter sales cycle (-5 days)"*

---

## 📐 Key Metrics Explained

**Conversion Rate**
The share of deals ending as "Closed Won" out of all closed deals. Higher conversion = more pipeline turning into actual revenue.

**Average Deal Size**
The mean value of all won deals. Even a small increase compounds significantly across the entire Q3 pipeline.

**Sales Cycle**
Average days from deal creation to close. A shorter cycle means deals resolve faster — same deal count, more revenue velocity. Modelled as a ratio multiplier.

---

## 🧮 Example Calculation

Assume Q1/Q2 gives us these baseline metrics:

| Metric | Value |
|---|---|
| Conversion Rate | 40% (0.4) |
| Avg Deal Size | ₹50,000 |
| Avg Sales Cycle | 30 days |

Week 1 of Q3 has **20 deals in the bucket**.

**Baseline Revenue (Week 1):**
```
20 × 0.4 × 50,000 = ₹4,00,000
```

Apply: Conversion +10%, Deal Size +5%, Sales Cycle -3 days

```
New Conversion Rate  = 0.4 × 1.10  = 0.44
New Deal Size        = 50,000 × 1.05 = ₹52,500
Cycle Multiplier     = 30 / 27      = 1.111

Scenario Revenue:
20 × 1.111 × 0.44 × 52,500 = ₹5,13,513
```

**Week 1 Impact: +₹1,13,513 (+28.4%)**

---

## 🔌 API Overview

### `POST /api/simulate`

**Request Body:**
```json
{
  "conversionChange": 10,
  "dealSizeChange": 15,
  "salesCycleChange": -5
}
```

> Ranges: `conversionChange` and `dealSizeChange` → `-20` to `+20` (%). `salesCycleChange` → `-5` to `+5` (days).

**Response:**
```json
{
  "baseline": {
    "weekly_revenue": [
      114777.88, 114777.88, 65587.36, 114777.88,
      49190.52,  122976.3,  81984.2,  139373.14,
      114777.88, 98381.04,  90182.62, 122976.3
    ],
    "total_revenue": 1229763
  },
  "scenario": {
    "weekly_revenue": [
      181577.42, 181577.42, 103758.52, 181577.42,
      77818.89,  194547.23, 129698.16, 220486.86,
      181577.42, 155637.79, 142667.97, 194547.23
    ],
    "total_revenue": 1945472.33
  },
  "impact": {
    "absolute": 715709.33,
    "percentage": 58.2
  },
  "drivers": [
    "higher conversion rate (+10%)",
    "larger average deal size (+15%)",
    "shorter sales cycle (-5 days)"
  ]
}
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** v18+
- **npm** or yarn
- **Git**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/scarlet-sypher/revenue-simulation.git
cd revenue-simulation
```

### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in `server/`:
```env
PORT=5000
```

Place your `deals.csv` file inside the `server/` directory, then start:
```bash
npm run dev
```

API runs at → `http://localhost:5000`

### 3️⃣ Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file in `client/`:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```

Open → `http://localhost:5173`

### 4️⃣ Access the App

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| Simulate Endpoint | http://localhost:5000/api/simulate |

---

## 🗄️ Environment Variables

| Variable | Location | Description |
|---|---|---|
| `PORT` | `server/.env` | Port for the Express server |
| `VITE_API_URL` | `client/.env` | Base URL pointing to the backend |

---

## 📋 deals.csv Format

```
deal_id, created_date, closed_date, stage, deal_value, region, source
```

- `stage` → `"Closed Won"` or `"Closed Lost"` for closed deals
- `closed_date` → can be empty for open/in-progress deals
- Dates → parseable format (e.g. `YYYY-MM-DD`)

---

## 📌 Assumptions Made

- Q3 is July–September. Open deals (no `closed_date`) created in this window are treated as Q3 pipeline.
- Baseline metrics are computed from Q1 + Q2 closed deals only.
- The cycle multiplier models a linear relationship between cycle length and revenue velocity.
- Invalid or missing date rows are silently skipped.
- Slider inputs are clamped server-side regardless of frontend values.

---

## 🔀 Key Decisions & Trade-offs

**CSV over a database** — Keeps the project portable and dependency-free. A production version would pull live from a CRM API.

**Weekly buckets instead of daily** — Daily is too noisy on Q3 pipeline data. Weekly gives cleaner signal without losing meaningful granularity.

**Cycle multiplier as a ratio** — Converts sales cycle change into a velocity factor instead of adjusting deal counts directly, capturing throughput effects without simulating individual timelines.

**Server-side clamping** — Inputs are validated on the backend regardless of what the UI sends, keeping the simulation model within realistic bounds.

---

## ⚠️ Limitations

- Single CSV data source only — no live CRM integration
- Linear model — doesn't account for seasonality or pipeline decay
- Q3 bucketing uses `created_date`, not projected close dates
- No auth or user sessions — single shared dataset
- Chart covers Q3 only (12 weeks) — no historical quarter view

---

## 🔮 Future Improvements

- [ ] Connect to HubSpot / Salesforce API instead of CSV
- [ ] Region and source-level filtering for segment simulations
- [ ] Multi-quarter historical chart view
- [ ] Export simulation results as PDF or CSV
- [ ] Save and compare multiple scenarios side by side
- [ ] Confidence intervals based on historical variance

---

## 📸 Screenshots

<div align="center">

### 🟢 Initial State (Before Running Simulation)
Default UI before any changes are applied.

![Initial Simulation](https://github.com/user-attachments/assets/2adda510-0c94-4a7c-847c-acb35c13d225)

</div>
<div align="center">

### 📊 Simulation Results

<table>
<tr>
<td width="50%">

<p align="center"><b>📉 Negative Impact Scenario</b></p>
Lower deal size and a slower sales cycle.

<img src="https://github.com/user-attachments/assets/bc45fd39-7ef3-4d88-9e9f-2f728b3f928c" alt="Negative Scenario">

</td>
<td width="50%">

<p align="center"><b>📈 Positive Impact Scenario</b></p>
Improved conversion rate + reduced sales cycle.

<img src="https://github.com/user-attachments/assets/d11c0d72-bdc4-4248-b097-2e5bfc4d0dc7" alt="Positive Scenario">

</td>
</tr>
</table>

</div>

<div align="center">

### ⚪ Neutral Scenario (Baseline Projection)
Q3 forecast from Q1 & Q2 data — no adjustments applied.

![Neutral Scenario](https://github.com/user-attachments/assets/31d4ff61-0334-441d-a187-1e2b3927a0c4)



*Dark-themed interface with real-time chart updates and plain-English insights* ✨

</div>

---

## 🎬 Video Walkthrough

> 📽️ [Watch the demo on Google Drive / Loom](#)
>
> *(Replace `#` with your actual link)*

---

## 🔗 Useful Links

- 🌐 **Live Demo**: [Visit App](#)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/scarlet-sypher/revenue-simulation/issues)
- 💡 **Feature Requests**: [Discussions](https://github.com/scarlet-sypher/revenue-simulation/discussions)
- 📧 **Contact**: ayushjha002@gmail.com

---

## 👤 Author

Built as part of a revenue simulation assignment.

- GitHub: [@scarlet-sypher](https://github.com/scarlet-sypher)
- Email: ayushjha002@gmail.com

---

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Try_It_Now-Visit_App-4CAF50?style=for-the-badge)](https://revenue-simulation.vercel.app/)
[![Contribute](https://img.shields.io/badge/🤝_Contribute-Fork_Repo-FF6B6B?style=for-the-badge)](https://github.com/scarlet-sypher/revenue-simulation/fork)

---

⭐ **Star this repo if you found it useful!** ⭐

</div>