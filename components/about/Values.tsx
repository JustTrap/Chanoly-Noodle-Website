"use client";

export function Values() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="chanoly-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3 hover:text-chanoly transition-colors duration-500 font-showg">
            OUR VALUES
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto font-medium">
            The principles that guide everything we do at Chanoly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              k: "Q",
              t: "Quality",
              d: "We source only the finest ingredients and maintain the highest standards in every dish we serve.",
            },
            {
              k: "A",
              t: "Authenticity",
              d: "Our recipes honor traditional Asian cooking methods while embracing local Ethiopian flavors.",
            },
            {
              k: "I",
              t: "Innovation",
              d: "We continuously explore new flavor combinations and culinary techniques to surprise and delight our customers.",
            },
            {
              k: "C",
              t: "Customer Care",
              d: "Every guest is treated like family, with warm service and genuine care for their dining experience.",
            },
            {
              k: "S",
              t: "Sustainability",
              d: "We are committed to responsible sourcing and environmentally conscious practices.",
            },
            {
              k: "H",
              t: "Hospitality",
              d: "Creating welcoming environments where every customer feels valued and appreciated.",
            },
          ].map((v) => (
            <div key={v.t} className="text-center group p-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 bg-chanoly">
                <span className="text-white text-xl font-bold">{v.k}</span>
              </div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-showg">
                {v.t}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal max-w-xs mx-auto">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
