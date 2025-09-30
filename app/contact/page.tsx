"use client";

import { ContactHero } from "@/components/contact/Hero";
import { BranchContactsGrid } from "@/components/contact/BranchContactsGrid";
import { GeneralContact } from "@/components/contact/GeneralContact";
import { ContactCTA } from "@/components/contact/CTA";
import { ContactFooter } from "@/components/contact/Footer";
import { contactBranches } from "@/lib/data";
import { Header } from "@/components/Header";
import { BeuDelivery } from "@/components/contact/BeuDelivery";
import { DeliveryApps } from "@/components/contact/DeliveryApps";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ContactHero />

      <BranchContactsGrid branches={contactBranches} />

      <DeliveryApps />

      <GeneralContact />

      <ContactCTA />

      <ContactFooter />
    </div>
  );
}
