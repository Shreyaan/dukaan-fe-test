"use client";
import { icons } from "../icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "../ui/button";

export function PageName() {
  //usually this would be a prop or more likely a router query/route but for the sake of this demo it's a static string. if i have time ill add react context to make it dynamic
  let page = "Payments";

  return (
    <div className="w-1/3 flex gap-4 items-center content-center">
      <p className="text-[#1A181E] text-15 font-normal">{page}</p>
      <div className="flex gap-1.5 items-center content-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <icons.help />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {" "}
                <a
                  href="#"
                  className={buttonVariants({
                    variant: "link",
                  })}
                >
                  {" "}
                  here is a tutorial
                </a>{" "}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-4D4D4D text-xs font-normal">How it works</p>
      </div>
    </div>
  );
}
