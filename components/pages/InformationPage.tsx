"use client";

import { ClosingSection } from "@/components/ClosingSection";
import { IdentitySection } from "@/components/IdentitySection";
import { SiteFrame } from "@/components/SiteFrame";

export function InformationPage() {
  return (
    <SiteFrame>
      <IdentitySection />
      <ClosingSection />
    </SiteFrame>
  );
}
