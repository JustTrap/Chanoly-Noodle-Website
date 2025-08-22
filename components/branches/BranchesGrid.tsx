import { branches } from "@/lib/data";
import { BranchCard } from "./BranchCard";

export function BranchesGrid() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="chanoly-heading text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wider">
            VISIT US
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from any of our convenient locations across the city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
}
