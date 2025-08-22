"use client";

export function Values() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="chanoly-heading text-3xl md:text-5xl font-bold text-gray-800 mb-4 hover:text-chanoly transition-colors duration-500">
            OUR VALUES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bold">
            The principles that guide everything we do at Chanoly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
            <div key={v.t} className="text-center group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(45, 75, 75, 1)" }}>
                <span className="text-chanoly text-2xl font-black">{v.k}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {v.t}
              </h3>
              <p className="text-gray-600 leading-relaxed font-bold">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
