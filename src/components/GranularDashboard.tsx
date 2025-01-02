import { Suspense } from "react";

import { getStocks } from "@/lib/get-stocks";
import { StockDisplay } from "./StockDisplay";

export default async function GranularDashboard() {
  const stocks = await getStocks();

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {stocks.map((stockPromise, index) => (
        <Suspense
          key={index}
          fallback={<div>Loading...</div>}
        >
          <StockDisplay stockPromise={stockPromise} />
        </Suspense>
      ))}
    </div>
  );
}
