"use client";
import React from "react";
import { Button } from "../ui/button";

export default function ReviewButtons({
  onOpenFullMenu,
}: {
  onOpenFullMenu: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Button
        className="border border-transparent px-8 py-4 tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-sm font-bold min-w-[200px]"
        style={{
          backgroundColor: "rgba(45, 75, 75, 1)",
          color: "white",
        }}
        onClick={() => (window.location.href = "/branches")}
      >
        FIND A LOCATION
      </Button>
      <Button
        variant="outline"
        className="border-chanoly text-chanoly bg-transparent px-8 py-4 tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-sm font-bold min-w-[200px]"
        style={{
          borderColor: "rgb(249, 115, 22)",
          color: "rgb(249, 115, 22)",
        }}
        onClick={onOpenFullMenu}
      >
        VIEW MENU
      </Button>
    </div>
  );
}
