import { Phone, Mail, Facebook, Instagram, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export function GeneralContact() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="chanoly-heading text-3xl md:text-5xl font-light text-gray-800 mb-8 tracking-wider font-showg">
          GENERAL INQUIRIES
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start text-start">
              <Phone className="w-6 h-6 text-chanoly mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-showg">
                  ORDER NOW
                </h3>
                <Link
                  href="tel:601"
                  className="text-gray-600 hover:text-chanoly transition-colors duration-300"
                >
                  601
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start text-start">
              <Mail className="w-6 h-6 text-chanoly mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-showg">
                  Email
                </h3>
                <Link
                  href="mailto:chanolymarketing@gmail.com"
                  target="_blank"
                  className="text-gray-600 hover:text-chanoly transition-colors duration-300"
                >
                  chanolymarketing@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start text-start">
              <Clock className="w-6 h-6 text-chanoly mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-showg">
                  Operating Hours
                </h3>
                <p className="text-gray-600">Monday - Sunday</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start text-start">
              <MapPin className="w-6 h-6 text-chanoly mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-showg">
                  MAIN OFFICE
                </h3>
                <p className="text-gray-600">Meskel Flower, Sinoma building</p>
                <p className="text-gray-600">
                  Gabon St, around Meskel Flower, Addis Ababa
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://web.facebook.com/p/Chanoly-Noodle-Official-61555720320412/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-8 h-8 text-gray-400 hover:text-chanoly cursor-pointer transition-all duration-300 hover:scale-110" />
          </Link>
          <Link
            href="https://www.tiktok.com/@chanoly_noodles_official?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg
              className="w-8 h-8 text-gray-400 hover:text-chanoly cursor-pointer transition-all duration-300 hover:scale-110"
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
            <Instagram className="w-8 h-8 text-gray-400 hover:text-chanoly cursor-pointer transition-all duration-300 hover:scale-110" />
          </Link>
        </div>
      </div>
    </section>
  );
}
