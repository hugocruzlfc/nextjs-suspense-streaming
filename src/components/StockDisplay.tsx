import { StockInfo } from "@/types";
import { use } from "react";

export function StockDisplay({
  stockPromise,
}: {
  stockPromise: Promise<StockInfo>;
}) {
  const { name, ui } = use(stockPromise);
  return (
    <div>
      <div className="font-bold text-3xl">{name}</div>
      <div>{ui}</div>
    </div>
  );
}
