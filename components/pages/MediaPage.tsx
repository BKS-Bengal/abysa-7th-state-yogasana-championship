"use client";

import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { MediaView } from "@/components/MediaGallery";
import { SiteFrame } from "@/components/SiteFrame";

const filmIds = ["film-corridor", "film-athletes", "film-dais", "film-ceremony"];

export function MediaPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SiteFrame>
      <MediaView onOpen={setOpenId} />
      <Lightbox openId={openId} onClose={() => setOpenId(null)} ids={filmIds} />
    </SiteFrame>
  );
}
