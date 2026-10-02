"use client";

import { EventDetails } from "@/components/EventDetails";
import { EventIntro } from "@/components/EventIntro";
import { SiteFrame } from "@/components/SiteFrame";

export function EventPage() {
  return (
    <SiteFrame>
      <EventIntro />
      <EventDetails />
    </SiteFrame>
  );
}
