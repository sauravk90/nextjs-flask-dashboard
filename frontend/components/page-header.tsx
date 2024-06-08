"use client";

import React from "react";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";

type Props = {
  title: string;
  action?: any;
};

export default function PageHeader({ title, action }: Props) {
  return (
    <>
      <div className="w-full flex gap-5 items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {action && (
          <Button
            variant={"ghost"}
            onClick={() => {
              action();
              console.log("called server action");
            }}
          >
            <RefreshCcw />
          </Button>
        )}
      </div>
    </>
  );
}
