import Dashboard from "@/components/Dashboard";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="text-2xl max-w-3xl mx-auto">
      <Dashboard />
      <div className="flex flex-row justify-between my-10">
        <Link
          href="/all-data-with-suspense"
          className="underline hover:text-blue-500"
        >
          All data with Suspense
        </Link>
        <Link
          href="/granular-suspense"
          className="underline hover:text-blue-500"
        >
          Granular Suspense
        </Link>
        <Link
          href="/server-action-suspense"
          className="underline hover:text-blue-500"
        >
          Server Action Suspense
        </Link>
      </div>
    </main>
  );
}
