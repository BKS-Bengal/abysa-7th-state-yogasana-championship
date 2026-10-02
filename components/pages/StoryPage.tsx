"use client";

import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { SiteFrame } from "@/components/SiteFrame";
import { StorySection } from "@/components/StorySection";

const interviewIds = ["interview-seated", "interview-camera"];

export function StoryPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SiteFrame>
      <StorySection onOpen={setOpenId} />
      <Lightbox openId={openId} onClose={() => setOpenId(null)} ids={interviewIds} />
    </SiteFrame>
  );
}
