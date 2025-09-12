"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  onOpenFullMenu: () => void;
};

export function HomeMenuSection({ onOpenFullMenu }: Props) {
  return (
    <section className="min-h-screen relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/menu-background.jpg"
          alt="Restaurant table with noodle dishes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="grid md:grid-cols-2 min-h-screen relative z-10">
        {/* Left Side - Title */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="text-center md:text-left max-w-lg">
            <h2 className="chanoly-title text-4xl sm:text-5xl md:text-7xl mb-4 tracking-wider font-showg">
              OUR
            </h2>
            <h3 className="chanoly-title text-3xl sm:text-4xl md:text-6xl font-normal tracking-widest text-chanoly font-showg">
              SELECTED
            </h3>
            <h3 className="chanoly-title text-3xl sm:text-4xl md:text-6xl font-normal tracking-widest font-showg">
              MENUS
            </h3>
            <p className="text-gray-300 mt-4 md:mt-8 text-base md:text-lg leading-relaxed">
              Discover our carefully curated selection of signature dishes, each
              crafted with passion and the finest ingredients.
            </p>
          </div>
        </div>

        {/* Right Side - Full Height Menu */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-lg">
            <div
              className="backdrop-blur-sm p-4 md:p-8 border h-full flex flex-col justify-between min-h-[500px] md:min-h-[600px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45, 75, 75, 0.9) 0%, rgba(35, 65, 65, 0.9) 100%)",
                borderColor: "rgba(45, 75, 75, 0.5)",
              }}
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "STIR FRY CHICKEN NOODLE",
                      desc: "Freshly homemade noodles with marinated fried chicken breast",
                    },
                    {
                      title: "CHICKEN FRIED RICE",
                      desc: "Steamed rice with marinated fried chicken breast",
                    },
                    {
                      title: "CHICKEN SIZZLING",
                      desc: "Marinated fried chicken breast served on hot sizzling plate",
                    },
                    {
                      title: "COMBO SPECIAL NOODLES",
                      desc: "Freshly homemade noodles with chicken and beef",
                    },
                    {
                      title: "SWEET & SOUR CHICKEN",
                      desc: "Sliced chicken marinated with sweet sauce",
                    },
                    {
                      title: "COMBO SALAD (FULL)",
                      desc: "Lettuce, cucumber, carrot with chicken, beef, fish",
                    },
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className={`border-b pb-3 md:pb-4 group hover:p-2 md:hover:p-4 transition-all duration-300 cursor-pointer ${
                        idx === 5 ? "border-b-0" : ""
                      }`}
                      style={{ borderColor: "rgba(45, 75, 75, 0.5)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(45, 75, 75, 0.3)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <h4 className="text-chanoly font-medium text-base md:text-lg group-hover:text-chanoly-dark transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-6 md:mt-8">
                <Button
                  onClick={onOpenFullMenu}
                  className="border tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-none px-3 py-0.5 md:px-6 md:py-2 font-black text-xs"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "rgb(249, 115, 22)",
                    color: "rgb(249, 115, 22)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(249, 115, 22)";
                    e.currentTarget.style.color = "rgba(45, 75, 75, 1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgb(249, 115, 22)";
                  }}
                >
                  VIEW FULL MENU
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
