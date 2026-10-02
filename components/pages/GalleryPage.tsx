"use client";

import { useState } from "react";
import { GalleryView } from "@/components/MediaGallery";
import { Lightbox } from "@/components/Lightbox";
import { SiteFrame } from "@/components/SiteFrame";

const galleryIds = [
  "interview-seated",
  "interview-camera",
  "championship-dais",
  "address",
  "dais-speaker",
  "dance-pair",
  "dance-record",
  "dance-turn",
  "remembrance",
  "ceremony-table",
  "offering",
  "hall-assembly",
  "athletes-hall",
  "young-athletes",
  "from-the-floor",
  "hall-wide",
  "crossing-dais",
  "practice-ground",
  "practice-warrior",
  "practice-squat",
  "practice-open",
  "practice-rise",
  "practice-lead",
  "field-circle",
  "courtyard",
];

export function GalleryPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SiteFrame>
      <GalleryView onOpen={setOpenId} />
      <Lightbox openId={openId} onClose={() => setOpenId(null)} ids={galleryIds} />
    </SiteFrame>
  );
}
