"use client";

import React from "react";
import { ContactBranch } from "./BranchContactsGrid";
import { Button } from "../ui/button";

export default function CallNow({ branch }: { branch: ContactBranch }) {
  return (
    <Button
      className="w-full text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 rounded-none"
      style={{
        backgroundColor: "rgb(249, 115, 22)",
        color: "rgba(45, 75, 75, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(45, 75, 75, 1)";
        e.currentTarget.style.color = "rgb(249, 115, 22)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgb(249, 115, 22)";
        e.currentTarget.style.color = "rgba(45, 75, 75, 1)";
      }}
      onClick={() => window.open(`tel:${branch.phone}`)}
    >
      CALL NOW
    </Button>
  );
}
