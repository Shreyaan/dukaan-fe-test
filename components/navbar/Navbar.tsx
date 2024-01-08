import { CompanyInfo } from "./CompanyInfo";
import { NavItems } from "./NavItems";
import Link from "next/link";
import { icons } from "../icons";

//this is a react server component so no need for state.
export let compnayData = {
  name: "Nishyan",
  logo: "/assets/companylogo.png",
  link: "#",
  AvailableCredits: "222.10",
};

export function Navbar() {
  return (
    <nav className="shrink-0 flex flex-col justify-between bg-[#1E2640] text-white h-screen w-56 px-2.5 py-4">
      <div className="">
        <CompanyInfo />
        <NavItems />
      </div>
      <div className="m-2 px-3 py-1.5 flex justify-normal items-center gap-3 bg-[#353C53] rounded-sm">
        <div className="bg-[#ffffff1a] rounded-sm">
          {" "}
          <div className="m-1.5 ">
            {" "}
            <icons.wallet />
          </div>{" "}
        </div>
        <div className="w-[108px] ">
          <p className="text-sm font-normal opacity-80 ">Available credits</p>
          <p>{compnayData.AvailableCredits}</p>
        </div>
      </div>
    </nav>
  );
}
