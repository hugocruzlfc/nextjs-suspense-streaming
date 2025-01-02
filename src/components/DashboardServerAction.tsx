"use client";
import { Suspense, useState, useEffect } from "react";

import { StockInfo } from "@/types";
import { getStocksAction } from "@/app/actions";
import { StockDisplay } from "./StockDisplay";

export default function DashboardServerAction() {
  const [stocks, setStocks] = useState<Promise<StockInfo>[]>([]);

  const callStocksActions = async () =>
    getStocksAction().then((stocks) => setStocks(stocks));

  useEffect(() => {
    callStocksActions();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setStocks([]);
          callStocksActions();
        }}
        className="px-3 py-1 rounded-full bg-blue-500 text-white font-semibold"
      >
        Refresh
      </button>
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
    </>
  );
}
