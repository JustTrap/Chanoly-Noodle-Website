"use client";

import { Mail } from "lucide-react";
import React from "react";

export default function OpenEmail() {
  return (
    <button
      onClick={() => window.open("https://mail.google.com/mail/u/0/#compose?to=chanolymarketing@gmail.com", "_blank")}
      className="flex items-center hover:text-white transition-all duration-300 cursor-pointer font-medium group"
    >
      <Mail className="w-5 h-5 mr-3 group-hover:text-chanoly transition-colors duration-300" />
      <span className="group-hover:text-chanoly transition-colors duration-300">
        Email Us
      </span>
    </button>
  );
}
