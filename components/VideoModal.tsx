"use client";

type Props = {
  src: string;
  poster: string;
  title: string;
};

export function VideoModal({ src, poster, title }: Props) {
  return (
    <video
      key={src}
      controls
      playsInline
      preload="none"
      poster={poster}
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
