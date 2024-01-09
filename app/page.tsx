import { Overview } from "../components/Overview";
import { icons } from "@/components/icons";
import { PaymentsTable } from "../components/PaymentsTable";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="w-full px-8 pt-9 ">
      <Overview />
      <Suspense
        fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}
      >
        <PaymentsTable />
      </Suspense>
    </div>
  );
}
