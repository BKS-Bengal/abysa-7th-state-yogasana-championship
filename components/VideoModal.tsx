"use client";

type Track = { src: string; srcLang: string; label: string };

type Props = {
  src: string;
  poster: string;
  title: string;
  tracks?: Track[];
};

export function VideoModal({ src, poster, title, tracks = [] }: Props) {
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
      {tracks.map((track) => (
        <track key={track.src} src={track.src} kind="captions" srcLang={track.srcLang} label={track.label} />
      ))}
    </video>
  );
}
