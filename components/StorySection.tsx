"use client";

import { groundStills, hallStills, type Still } from "@/lib/media";
import { ImageReveal } from "./ImageReveal";

type Props = { onOpen: (id: string) => void };

function Still({ item, className, onOpen }: { item: Still; className?: string; onOpen: (id: string) => void }) {
  return <ImageReveal {...item} className={className} onOpen={() => onOpen(item.id)} />;
}

export function StorySection({ onOpen }: Props) {
  const [assembly, dais, address, speaker, pair, record, turn, remembrance, table, offering, young, wide, floor, passage] =
    hallStills;

  return (
    <>
      <section className="hall" id="hall" aria-labelledby="hall-title">
        <header className="chapter-head">
          <p className="eyebrow">05 — In the hall</p>
          <h2 id="hall-title">
            Sri Sri Shiv Mandir
            <em> holds the championship.</em>
          </h2>
        </header>
        <Still item={assembly} className="bleed" onOpen={onOpen} />
        <div className="split uneven">
          <Still item={dais} onOpen={onOpen} />
          <Still item={address} onOpen={onOpen} />
        </div>
        <Still item={speaker} className="span-full" onOpen={onOpen} />
        <div className="trio">
          <Still item={pair} onOpen={onOpen} />
          <Still item={record} onOpen={onOpen} />
          <Still item={turn} onOpen={onOpen} />
        </div>
        <div className="split">
          <Still item={remembrance} onOpen={onOpen} />
          <Still item={table} onOpen={onOpen} />
        </div>
        <Still item={offering} className="span-full" onOpen={onOpen} />
        <Still item={wide} className="bleed" onOpen={onOpen} />
        <Still item={young} className="offset-still" onOpen={onOpen} />
        <div className="split quiet-pair">
          <Still item={floor} onOpen={onOpen} />
          <Still item={passage} className="quiet" onOpen={onOpen} />
        </div>
      </section>

      <section className="ground" id="ground" aria-labelledby="ground-title">
        <header className="chapter-head">
          <p className="eyebrow">06 — On the ground</p>
          <h2 id="ground-title">
            Muluk, after six
            <em> in the morning.</em>
          </h2>
        </header>
        <Still item={groundStills[0]} className="bleed" onOpen={onOpen} />
        <Still item={groundStills[1]} className="offset-still" onOpen={onOpen} />
      </section>
    </>
  );
}
