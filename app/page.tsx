
import { Overview } from "../components/Overview";


import { icons } from "@/components/icons";
import { PaymentsTable } from "./PaymentsTable";




export default function Home() {
  return (
    <div className="w-full px-8 pt-9 ">
      <Overview />
      <PaymentsTable />
    </div>
  );
}
