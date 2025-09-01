import Image from "next/image";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import React from "react";
import Link from "next/link";

export function HomeFooter() {
  return (
    <footer
      className="text-white py-8 md:py-12 px-4 md:px-6"
      style={{ background: "rgba(45, 75, 75, 1)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-32 h-16 md:w-40 md:h-20 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
                <Image
                  src="/images/chanoly-noodle-center-logo21.png"
                  alt="Chanoly Noodle Logo"
                  width={160}
                  height={64}
                  className="object-contain transition-all duration-300 hover:brightness-110"
                />
              </div>
            </div>
            <p className="text-gray-400 text-base mb-4 leading-relaxed hover:text-gray-300 transition-colors duration-300">
              FRESH NOODLES, BOLD FLAVORS
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://web.facebook.com/p/Chanoly-Noodle-Official-61555720320412/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-gray-400 hover:text-chanoly cursor-pointer transition-all duration-300 hover:scale-110" />
              </Link>
              <Link
                href="https://www.tiktok.com/@chanoly_noodles_official?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-chanoly cursor-pointer transition-all duration-300 hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/chanoly_noodle_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-gray-400 hover:text-chanoly cursor-pointer transition-all duration-300 hover:scale-110" />
              </Link>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white font-showg">
              {" "}
              MAIN OFFICE LOCATION
            </h4>
            <div className="space-y-1 text-gray-400 text-sm">
              <p className="text-white font-medium mb-1">
                Meskel Flower, Sinoma building
              </p>
              <p className="text-sm hover:text-white transition-colors duration-300">
                Gabon St, around Meskel Flower
              </p>
              <p className="text-sm hover:text-white transition-colors duration-300">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white font-showg">
              OPENING HOURS
            </h4>
            <div className="text-gray-400 text-sm">
              <p className="hover:text-white transition-colors duration-300">
                Monday - Sunday
              </p>
            </div>
          </div>

          {/* Order Us */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white font-showg">
              ORDER US
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center hover:text-white transition-colors duration-300 cursor-pointer">
                <Phone className="w-5 h-5 mr-3" />
                <span>601</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white font-showg">
              CONTACT US
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <Link
                href="mailto:chanolymarketing@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-all duration-300 cursor-pointer font-medium group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:text-chanoly transition-colors duration-300" />
                <span className="group-hover:text-chanoly transition-colors duration-300">
                  Email Us
                </span>
              </Link>
            </div>
          </div>

          {/* QR Code and Comments Section */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white font-showg">
              FEEDBACK
            </h4>
            <div className="space-y-4">
              {/* QR Code Container - Left-aligned to match header */}
              <div className="flex justify-start">
                <div className="relative">
                  {/* QR Code - Direct display without white background */}
                  <div className="w-48 h-48 rounded-xl shadow-lg">
                    <Image
                      src="/images/Chanoly-QR.png"
                      alt="Chanoly QR Code for Feedback"
                      width={192}
                      height={192}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>

                  {/* Subtle accent corner */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-chanoly rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Text Section - Left-aligned to match header */}
              <div className="space-y-2 text-left">
                <p className="text-white text-sm font-semibold leading-tight">
                  For any Comments and Recommendations
                </p>
                <p className="text-gray-300 text-xs font-medium">
                  Scan to provide feedback
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="hover:text-white transition-colors duration-300 mb-4">
            &copy; Copyright Chanoly
          </p>
          <div className="flex flex-wrap justify-center space-x-8">
            <Link
              href="/about"
              className="hover:text-chanoly transition-colors duration-300"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="hover:text-chanoly transition-colors duration-300"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/contact"
              className="hover:text-chanoly transition-colors duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
