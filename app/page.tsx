"use client";

import { useState } from "react";
import { ClosingSection } from "@/components/ClosingSection";
import { EventDetails } from "@/components/EventDetails";
import { EventIntro } from "@/components/EventIntro";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IdentitySection } from "@/components/IdentitySection";
import { Lightbox } from "@/components/Lightbox";
import { MediaGallery } from "@/components/MediaGallery";
import { MotionChapter } from "@/components/MotionChapter";
import { StorySection } from "@/components/StorySection";

export default function Page() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <EventIntro onOpen={setOpenId} />
        <EventDetails />
        <StorySection onOpen={setOpenId} />
        <MotionChapter onOpen={setOpenId} />
        <MediaGallery onOpen={setOpenId} />
        <IdentitySection />
        <ClosingSection />
      </main>
      <footer className="colophon">
        <p>All Bengal Yogasana Sports Association · Affiliated to Yogasana Bharat, New Delhi, and World Yogasana</p>
      </footer>
      <Lightbox openId={openId} onClose={() => setOpenId(null)} />
    </>
  );
}
