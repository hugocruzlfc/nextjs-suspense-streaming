import Dashboard from "@/components/Dashboard";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-2xl max-w-3xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </main>
  );
}
