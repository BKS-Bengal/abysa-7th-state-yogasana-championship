"use client";

import { logo } from "@/lib/media";

const links = [
  { href: "#gathering", label: "Gathering" },
  { href: "#details", label: "Details" },
  { href: "#hall", label: "Hall" },
  { href: "#practice", label: "Practice" },
  { href: "#archive", label: "Archive" },
  { href: "#identity", label: "Identity" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="skip" href="#gathering">
        Skip to the gathering
      </a>
      <a className="seal" href="#top" aria-label="Yogasana Bharat">
        <img src={logo.src} alt={logo.alt} width={447} height={447} />
      </a>
      <nav aria-label="Event">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
