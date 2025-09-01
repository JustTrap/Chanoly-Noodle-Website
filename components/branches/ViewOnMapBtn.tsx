"use client";

import React from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { Branch } from "./types";

export default function ViewOnMapBtn({ branch }: { branch: Branch }) {
  return (
    <Button
      className="w-full text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 rounded-none flex items-center justify-center"
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
      onClick={() => window.open(branch.mapLink, "_blank")}
    >
      VIEW ON MAP
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
}
