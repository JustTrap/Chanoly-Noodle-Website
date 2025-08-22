import { BranchesHero } from "@/components/branches/BranchesHero";
import { BranchesGrid } from "@/components/branches/BranchesGrid";
import { BranchesCTA } from "@/components/branches/BranchesCTA";
import { BranchesFooter } from "@/components/branches/BranchesFooter";
import { Header } from "@/components/Header";

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <BranchesHero />

      <BranchesGrid />

      <BranchesCTA />

      <BranchesFooter />
    </div>
  );
}
