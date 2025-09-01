import React from "react";
import ReviewButtons from "./ReviewButtons";

type Review = {
  name: string;
  initial: string;
  date: string;
  stars: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Yoash",
    initial: "Y",
    date: "Mar 15, 2024",
    stars: 5,
    text: "Me and my friends stopped here for lunch and we're greeted and treated very good, would definitely eat here again I also wanted to add I used to work in the area and always enjoyed eating here at that time as well",
  },
  {
    name: "Opher D.",
    initial: "O",
    date: "Jun 22, 2024",
    stars: 5,
    text: "Usually I was ordering takeaway from this place, now our first time eating in. We came during the busiest time of lunch, but still the service was impeccable... We order the house speciality bug tasty salad (amazing and satisfying) Then a few noodles dishes and chicken. Service is fast and efficient, waiters know their job well....",
  },
  {
    name: "Hanan S.",
    initial: "H",
    date: "Sep 18, 2024",
    stars: 5,
    text: "LOVE. THIS. PLACE. Easily one of my favourite restaurants in Addis. Their salad is just sooo gooood. I like the noodles too (too bad the price almost doubled tho 😭)",
  },
  {
    name: "Raniya T.",
    initial: "R",
    date: "Dec 5, 2024",
    stars: 4,
    text: "It's definitely a place to visit. Great food and great ambience. The service is good but during the rush hour, things might get a little out of hand... Other than that, it's a nice friendly spot to have lunch. Plus, people who don't drink alcohol like myself, have the option to not add rum to their mojitos and they make...",
  },
  {
    name: "Birhanu M.",
    initial: "B",
    date: "Jan 12, 2025",
    stars: 3,
    text: "With my friend, we order half salad and Stir fry veg noddle. The salad is great. But the veg noddle is too oily. We can't eat it. The test is ok. The service is great.",
  },
  {
    name: "ዳግማዊ",
    initial: "ዳ",
    date: "Feb 28, 2025",
    stars: 4,
    text: "A known place, mostly by their noodles and salads. It was my first time to go there. We had chicken noodles and chicken sizzling. The foods are yummy and with large portion. I heared that their service is not good but, we got a nice service. We also tried lemon mojito with double rum and strawberry mojito with single rum, it was so great.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex text-chanoly mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < count ? "fill-current" : "text-gray-300 fill-current"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function HomeReviews({
  onOpenFullMenu,
}: {
  onOpenFullMenu: () => void;
}) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="chanoly-heading text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wider hover:text-chanoly transition-colors duration-500 font-showg">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from our valued customers on Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r) => (
            <div
              key={r.name + r.date}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Stars count={r.stars} />
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed italic">
                "{r.text}"
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "rgb(249, 115, 22)" }}
                >
                  <span className="text-white font-semibold text-lg">
                    {r.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="col-span-full text-center mt-16 md:mt-20 mb-8">
            <div className="max-w-4xl mx-auto px-4">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-800 mb-6 tracking-wide font-showg">
                Ready to Create Your Own Experience?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who have made Chanoly
                their favorite dining destination.
              </p>
              <ReviewButtons onOpenFullMenu={onOpenFullMenu} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
