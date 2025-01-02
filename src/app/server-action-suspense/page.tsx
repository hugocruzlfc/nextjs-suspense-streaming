import DashboardServerAction from "@/components/DashboardServerAction";
import { StockWithCounter } from "@/components/StockWithCounter";

const foo = StockWithCounter;
// this solve the problem: "[ Server ] Error: Could not find the module "[project]/src/components/StockWithCounter.tsx#StockWithCounter" in the React Client Manifest. This is probably a bug in the React Server Components bundler."
// delete this line and the error will come back

export default async function Page() {
  return (
    <main className="text-2xl max-w-3xl mx-auto">
      <DashboardServerAction />
    </main>
  );
}
