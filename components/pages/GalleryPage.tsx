"use client";

import { useState } from "react";
import { GalleryView, galleryGroups } from "@/components/MediaGallery";
import { Lightbox } from "@/components/Lightbox";
import { SiteFrame } from "@/components/SiteFrame";

const galleryIds = galleryGroups.flatMap((group) => group.ids);

export function GalleryPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SiteFrame>
      <GalleryView onOpen={setOpenId} />
      <Lightbox openId={openId} onClose={() => setOpenId(null)} ids={galleryIds} />
    </SiteFrame>
  );
}
