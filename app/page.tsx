"use client";

import { useEffect, useState } from "react";
import { ClosingSection } from "@/components/ClosingSection";
import { EventDetails } from "@/components/EventDetails";
import { EventIntro } from "@/components/EventIntro";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IdentityIntro } from "@/components/IdentityIntro";
import { IdentitySection } from "@/components/IdentitySection";
import { Lightbox } from "@/components/Lightbox";
import { MediaGallery } from "@/components/MediaGallery";
import { StorySection } from "@/components/StorySection";

export default function Page() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [siteReady, setSiteReady] = useState(false);
  const [introOn, setIntroOn] = useState(true);

  useEffect(() => {
    const show = () => setSiteReady(true);
    window.addEventListener("pjm-intro-arrive", show);
    return () => window.removeEventListener("pjm-intro-arrive", show);
  }, []);

  return (
    <>
      {introOn ? (
        <IdentityIntro
          onDone={() => {
            setSiteReady(true);
            setIntroOn(false);
          }}
        />
      ) : null}
      <Header ready={siteReady} />
      <main className={siteReady ? "is-ready" : "is-held"}>
        <Hero play={siteReady} />
        <EventIntro />
        <EventDetails />
        <StorySection />
        <MediaGallery onOpen={setOpenId} />
        <div id="information">
          <IdentitySection />
          <ClosingSection />
        </div>
      </main>
      <footer className="colophon">
        <p>All Bengal Yogasana Sports Association · Affiliated to Yogasana Bharat, New Delhi, and World Yogasana</p>
      </footer>
      <Lightbox openId={openId} onClose={() => setOpenId(null)} />
    </>
  );
}
