"use client";

export function Journey() {
  const items = [
    {
      year: "2012",
      title: "The Beginning",
      text: "Chanoly opened its first location with a simple mission: to bring authentic Asian flavors to Addis Ababa with a local touch.",
    },
    {
      year: "2015",
      title: "Growing Recognition",
      text: "Our unique fusion approach gained popularity, leading to our first expansion and recognition as a premier dining destination.",
    },
    {
      year: "2020",
      title: "Multiple Locations",
      text: "Expanded to multiple branches across Addis Ababa, each maintaining our commitment to quality and authenticity.",
    },
    {
      year: "2024",
      title: "Continued Excellence",
      text: "Today, we continue to innovate while staying true to our roots, serving thousands of satisfied customers across our locations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="chanoly-heading text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wider hover:text-chanoly transition-colors duration-500 font-showg">
            OUR JOURNEY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming Addis Ababa's favorite Asian
            cuisine destination
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {items.map((item) => (
            <div className="flex items-start" key={item.year}>
              <div className="flex-shrink-0 w-20 h-20 bg-chanoly rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold text-lg">
                  {item.year}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-showg">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
