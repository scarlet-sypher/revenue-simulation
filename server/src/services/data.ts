import { loadDeals } from "../utils/csv.ts";
import type { Deal } from "../types/deal.ts";

export const getAllDeals = async () : Promise <Deal[]> => {

  const deals = await loadDeals();

  return deals;
} ;