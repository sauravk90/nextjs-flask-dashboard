"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Axe, ChevronRight, LayoutDashboard, Settings } from "lucide-react";
import { Nav } from "./ui/nav";

export default function SideNavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const mobileWidth = false;

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            variant={"secondary"}
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Datasets",
            href: "/datasets",
            icon: Axe,
            variant: "ghost",
          },
          {
            title: "Nodes",
            href: "/nodes",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
