import { CompanyInfo } from "./CompanyInfo";

export let compnayData = {
  name: "Nishyan",
  logo: "/assets/companylogo.png",
  link: "#",
};

export function Navbar() {
  return (
    <nav className="shrink-0 bg-[#1E2640] text-white h-screen w-56 px-2.5 py-4">
      <div className="nav_top">
        <CompanyInfo />
        <div
          className="
        "
        >
          menu items
        </div>
      </div>
    </nav>
  );
}
