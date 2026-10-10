# ABYSA source reconciliation — 10 October 2026

**Final state (release pass).** The gaps in section 1 below were the state at `d54629e`, before implementation. They are kept as the record of what was found. The public site now uses interview `hdyJD2A38dY`, chapter title Prakriti Jagran Yajna / প্রকৃতি জাগরণ যজ্ঞ, and route `/prakriti-jagaran-mancha`. Resolution, withheld allegations, and QA are in `ABYSA_PHASE2_PENDING_APPROVAL_2026-10-10.md`.

Read-only audit of `dev` at `d54629e45ce1d171073d0933784b103562029797`. No application code was changed by that first audit.

The earlier audit `C:\Users\asits\Downloads\ABYSA_Website_Content_and_Implementation_Audit_2026-10-10.md` was read as a technical recommendation, then checked against the repository. Where that audit is wrong about the current tree, this report says so.

## 1. Executive summary

The site is a working bilingual documentary of the **7th State Yogasana Sports Championship 2026–27**, 1–4 October 2026, at Bharat Sevashram Sangha, Muluk. Amit Shil is already spelled correctly in public English and Bengali. The four-day chronology is in place. Seven YouTube recordings and four local films are wired through one media list.

Three gaps block the next editorial pass:

1. The Shyamal Ta interview still uses YouTube ID `p6AdZy0HIi4`. The supplied canonical URL is `https://youtu.be/hdyJD2A38dY` (`hdyJD2A38dY`). That ID does not appear in any transcript file. It is a user-supplied replacement, not something the transcripts themselves print. The live homepage still embeds `p6AdZy0HIi4`.
2. The public chapter title is still **Prakriti Jagran Yatra / প্রকৃতি জাগরণ যাত্রা**. The latest instruction is that this programme is **Prakriti Jagran Yajna / প্রকৃতি জাগরণ যজ্ঞ**. English spelling is not settled: this prompt uses **Jagran**; the Yajna guide and the morning audit file use **Jagaran**, which is closer to **জাগরণ**. Do not global-replace until that English form is chosen. Do not replace ordinary uses of “journey” / **যাত্রাটা**.
3. “Yatra” inside the Yajna sources is a welcome line in the same recording (“Welcome to the Prakriti Jagaran Yatra”), not a second programme with its own evidence. The site promoted that line to the chapter title and then wrote that the Yatra is not the fire. The 3 October courtyard fire should stay a photographed offering. It should not be retitled just because the chapter name changes.

Already done, and not to be redone: Amit Shil / অমিত শীল (no public `সিংহ` or “Amit Singh” remains); scoring, artistic-pair, and Deepayan/Nazmul captions; Sourabh/Reena lower-third film `J5WbntnJwng` kept separate from the Vedic film `_p_k4tdwbeU`; “Beyond the mat / মাদুরের বাইরে” removed; event title is “7th State”, not “Seven State”.

Do not import from older guides: “Seven State”, “7-State”, “Amit Singh”, “Shyamal Da/Das”, a three-day plan, athlete names and medal years, or job, cash-award, and fraud claims as established facts.

## 2. Source inventory

`docs/editorial-source/` does not exist in the repository. Sources below were read from `C:\Users\asits\Downloads\`.

### Primary transcript or directly supplied evidence

| File | What it is |
| --- | --- |
| `yogasana-govt-jobs-transcript-and-summary.md` | English transcript of the Shyamal Ta interview at Muluk. Host is named only “Amit”. This is the content the new video is meant to carry. It does not contain `hdyJD2A38dY`. |
| `abysa-voice-message-transcript-english.md` | Amit Shil’s voice review of the eight navigation columns, 9 October 2026. Primary for captions he could see, and for his own name. He also misremembers frames. |
| `prakriti-jagaran-yajna-transcript-summary.md` | Structured transcript of the recording titled Prakriti Jagaran Yajna, speakers MahAcharya and Gunomata. Part 1 welcomes listeners to “Prakriti Jagaran Yatra”. |
| `karmyog-yajna-transcript.md`, `karmyog-yajna-transcript-v2.md`, `karmyog-yajna-transcript-v3.md` | Earlier English transcriptions of the same 15-step Karmyog film. v2/v3 say “pilgrimage”, not a separate event. |
| `vedic-wisdom-yagna-complete-guide.md` | Long guide to the Vedic-yajna discourse (chili, “highest work”, health figures). Treat as attributed speech. |
| `yoga-festival-content.md` | Opening-hall transcript (Part 2). Part 3 is a generated press suite and is not evidence. Title line says “7-State”. |
| `yoga-career-abhay-barman-guide.md` | Abhay Barman interview guide. Medals, cash, and forces jobs are his statements. |

### Confirmed naming or editorial decision

The decisions in force for the next pass are the latest user instruction in this audit request, checked against `content/people.ts` (internal, not rendered):

- Event: **7th State Yogasana Sports Championship 2026–27**. Never “Seven State” or “7-State”.
- Shyamal Ta / শ্যামল তা. Not Das, Da, or Mahashaya on the public site.
- Interviewer: Amit Shil / অমিত শীল. Not Singh, Singha, or সিংহ.
- Programme title to apply: Prakriti Jagran Yajna / প্রকৃতি জাগরণ যজ্ঞ, with the English transliteration conflict recorded in section 7.
- Interview video to apply: `hdyJD2A38dY`.
- Keep `_p_k4tdwbeU` (Vedic discourse) and `J5WbntnJwng` (Sourabh J. Sarkar and Reena J. Sarkar) as different films.
- Do not invent names, roles, results, awards, or jobs.

`content/people.ts` still says not to retitle the 3 October courtyard photograph as Prakriti Jagaran Yajna. That rule is about the photograph, not the chapter title. It remains in force.

### Previous content brief or requirement

| File | Standing |
| --- | --- |
| `ABYSA_Website_Content_and_Implementation_Audit_2026-10-10.md` | Morning technical audit. Useful map. Wrong on two current facts: public Bengali no longer contains অমিত সিংহ; its Vercel “no project” note was that environment’s limit. This checkout’s `dev` is what production was serving when checked during this audit. |
| `yogasana-site-content-brief-v2.md` | Page plan. Its “three days” structure is superseded by 1–4 October. |
| `yogasana_championship_audio_content_brief.md` | Early audio brief. Still says “Amit Singh” once. Do not copy names from it. |
| `Yogasana_FINAL_CONTENT_PACKAGE_for_Cursor.md` | Short content package. Its “keep copy concise” rule does not override the later request to keep transcript detail on inner pages. |
| `karmyog-yajna-summary.md` | Summary of the 15-step film. Section 2 is explicitly “Pilgrimage of the 15 Elements (Prakriti Jagran Yatra)”. |

### Earlier draft or summary

| File | Standing |
| --- | --- |
| `abysa-exclusive-interview-career-guide.md` | Bengali/English rewrite of the Shyamal interview, plus SEO boilerplate. Contains “Amit Singh” (1) and “Shyamal Da” (2). Does not outrank the English transcript or the Amit Shil spelling. |
| `Seven_State_Yogasana_Championship_2026_27_Website_Event_Story_Brief.md` | Day narrative. Title is “Seven State” (7). Also “Shyamal Da” (2) and “Shyamal Das” (2). Uses “Yajna” (12) for ceremonial passages. Do not copy the title or the Das/Da spellings. |

### Technical audit or implementation recommendation

The morning audit listed above. `yogasana_content_editorial_implementation_spec.md`, cited by that audit, is **not** in Downloads and is **not** in the repository. Unavailable.

### Explicit conflicts (no silent resolution)

| Topic | Sources | What not to do |
| --- | --- | --- |
| Programme name | Site and voice line 01: যাত্রা. User instruction, voice line 70, YouTube lower third, and the Yajna guide title: যজ্ঞ. The same Yajna guide then says “Welcome to the Prakriti Jagaran Yatra.” | Do not treat every “Yatra” as a typo, and do not treat every fire as the named programme. |
| English transliteration | This prompt: Jagran. Yajna guide and morning audit: Jagaran. Bengali: জাগরণ. | Do not pick one English form inside a blind replace. |
| Athlete count | Opening chair, in `content/en.ts` day 01: about 300 last year, past 600 this year, as his words. Interview transcript: approximately 550–600. `content/people.ts` says do not publish the interview totals; the event page already publishes “roughly six hundred” as interview speech. | Do not merge 300, 600, and 550–600 into one official roll. |
| Courtyard photos | Voice note calls frames pranayama, “Korme”, Hiranmoy with gold medalists, and a dawn Yajna. Prior frame review and `people.ts` do not match Hiranmoy or Kartik to a photograph. “Korme” is a speech-to-text error for Karmyog. | Do not relabel `children-verandah` or `practice-rise` from the voice note alone. |
| Dance | Voice: “ashram girls”. Current caption, after looking at the frame: “Inaugural dance in the hall.” | Do not restore “ashram girls” without a new look at the frame. |
| Interview subject on Home | Voice line 06 calls the second film a gold-medalist interview. The site’s second embed is Abhay Barman (`RLgAz4onoSM`). | Do not retitle Abhay’s film as a generic gold-medalist reel. |
| Jobs and awards | Interview transcript names Ritu Mondal, Oliva, Nabanna sums, railways, police, and private-event allegations. `people.ts` forbids publishing Suvendu Adhikari and forbids treating Abhay’s medals and jobs as facts. The public pages do not currently name Ritu or Oliva. | Do not add these as site facts in the next pass without a separate editorial decision. Attribute or omit. |

## 3. Repository status

- Branch: `dev`, tracking `origin/dev`.
- HEAD: `d54629e45ce1d171073d0933784b103562029797` — “brand: keep homepage social metadata on the new production domain”.
- Working tree before this report: clean. This audit adds only this Markdown file.
- Remote: `https://github.com/BKS-Bengal/abysa-7th-state-yogasana-championship.git`.
- `package.json` name: `abysa-7th-state-yogasana-championship`.
- `app/layout.tsx` `metadataBase`: `https://abysa-7th-state-yogasana-championship.vercel.app`.
- Local `master` is `1510556`, behind `origin/master` by 17, message “style: refine content imagery and event colour system”. It is not the branch under audit. Do not merge it to “fix” branding.
- Scripts: `dev`, `build`, `start`. No lint script.
- A read of the production homepage during this audit returned 200 and still contained `p6AdZy0HIi4` and “Prakriti Jagran Yatra”. It did not contain `hdyJD2A38dY` or a Yajna chapter title. Deployment ID was not re-fetched. The last deployment recorded for this SHA in the prior rename work was `dpl_79HvwzthvfEwVpaUcm9VN96WP4Zc`.

### Routes

| Path | Page module | Title in `app/*/page.tsx` |
| --- | --- | --- |
| `/` | `components/pages/HomePage.tsx` | Absolute title in `app/page.tsx`: ABYSA 7th State Yogasana Sports Championship 2026–27 |
| `/event` | `EventPage.tsx` | The championship |
| `/story` | `StoryPage.tsx` | The four days |
| `/gallery` | `GalleryPage.tsx` | Gallery |
| `/media` | `MediaPage.tsx` | Films |
| `/organisation` | `OrganisationPage.tsx` | People |
| `/prakriti-jagaran-mancha` | `PrakritiPage.tsx` | Prakriti Jagran Yatra |
| `/information` | `InformationPage.tsx` | About |
| `/yogasana` | `YogasanaPage.tsx` | Yogasana |

Navigation is `lib/contents.ts`. The Prakriti item is still `href: "/prakriti-jagaran-mancha"`. Keep that path unless a redirect is separately approved.

Copy: `content/en.ts`, `content/bn.ts`, typed by `content/types.ts`. Facts: `content/facts.ts`. People registry: `content/people.ts` (comments only; not imported by pages). Photos: `content/photos.ts` plus the archive in `lib/media.ts`. Language cookie: `pjm-lang`.

## 4. Page-by-page implementation matrix

| Page | Current state | Evidence | Problem or gap | Required change | Priority | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| Home `/` | Eyebrow “ABYSA” / “এবিওয়াইএসএ”. H1 is the event name without “Seven State”. Three embeds: `yt-shyamal`, `yt-abhay`, `yt-yajna`. Four poster cards. Three home photos: scoring, artistic pair, Deepayan and Nazmul. | `HomePage.tsx` lines 11–81; `content/en.ts` `home.filmsLead`, `feature*`; `lib/media.ts` `remoteFilms` | `yt-shyamal` is still `p6AdZy0HIi4`. Footer and copy do not say Yajna. Home does not need the full interview transcript. | Point `yt-shyamal` at `hdyJD2A38dY` once, so Home, About, and Films move together. Keep one player here. Link onward to Event, Story, Yogasana, the Prakriti route, and Films. | P0 | Browser: first iframe `src` contains `hdyJD2A38dY`; Abhay and Vedic IDs unchanged; both languages. |
| Event `/event` | Judging paragraph attributes “roughly six hundred” athletes and “sixty-four or sixty-five” judges to the Muluk interview. Opening 300-then-600 stays on the story page as the chair’s words. Dance caption is “Inaugural dance”, not “ashram girls”. | `content/en.ts` `event.judging` around line 81; day 01 around line 128 | The interview transcript’s band is 550–600, and it also says the sum can be read over three or four days. Fees (₹50 registration versus ₹1,500–2,000 stay), named jobs, and allegations are not on this page. Voice note asked for a dawn-Yajna caption on a championship photo; that identification is not secure. | Keep attributed scale. Do not add rupee figures, Ritu Mondal, Oliva, Nabanna, or private-tournament allegations in this pass unless editorial approval says to, and then only as Shyamal Ta’s account. Do not caption a frame “Prakriti Jagaran Yajna” from the voice note alone. | P1 | Read judging in EN and BN side by side. Confirm no new proper names. |
| Yogasana `/yogasana` | Abhay’s medals, cash, CRPF/CISF/BSF, and “government work can follow” are written as his speech, not as championship results. | `content/en.ts` around line 218; `content/bn.ts` matching block, including “যাত্রাটা ছিল কেবল স্বাস্থ্য” | “যাত্রাটা” is his metaphor for a journey from health to a career. A global Yatra-to-Yajna replace would corrupt this sentence. Medal years are not independently listed. | Keep the attributed account. Do not replace “journey / যাত্রাটা”. Do not add a medal table. | P1 | Search the Yogasana strings after any rename. The health-journey sentence must survive. |
| Story `/story` | Days 1–4 October 2026, with hall, verandah, field, courtyard fire, evening hall. Day 03 names Shyamal Ta at the address and the fire, and does not call the fire Prakriti Jagaran Yajna. | `content/en.ts` lines 115–169 | Voice note wants pranayama, “Korme”, post-yajna teaching, and Hiranmoy-with-gold-medalists on story frames. Those IDs were not matched. `people.ts` still forbids those labels. | Leave day structure. Do not retitle the 3 October fire. Do not add Hiranmoy or Kartik to a frame. | P1 | Story EN/BN dates 1–4 October. Fire caption has no programme title. |
| Prakriti `/prakriti-jagaran-mancha` | Full chapter under Yatra: 15-step pilgrimage, Vedic film, courtyard morning, Krishi Ratna conversation, Mahacharya film. Hard-coded watch link `p6AdZy0HIi4`. Vedic link `_p_k4tdwbeU`. Mahacharya link `J5WbntnJwng`. Metadata title “Prakriti Jagran Yatra”. | `app/prakriti-jagaran-mancha/page.tsx`; `content/en.ts` `prakriti` from about line 280; `PrakritiPage.tsx` renders `section.link` as a text link, not an iframe | Chapter title contradicts the latest instruction. The 15-step text is the Yajna recording’s own opening, currently presented as a separate “Yatra” doctrine. Interview link is a second URL, not `lib/media.ts`. | Rename the visible title, nav label, and metadata to the approved Yajna form after the English spelling is chosen. Quote “Yatra” only as the recording’s welcome, or drop it from the title and keep the fifteen steps as the film’s opening. Replace the watch href with the canonical interview URL. Do not add a second large player beside the Vedic and Mahacharya links. Keep the route slug. | P0 | Page H1, nav, and `<title>` in both languages. Three different video IDs still distinct. Route still 200. |
| Gallery `/gallery` | Groups in `MediaGallery.tsx`: recorded portraits, recognition, hall. Captions come from `copy.captions` or the base still. `ImageReveal` hides the figcaption when `caption` is empty, but the gallery passes `text?.caption ?? item.caption`, so an empty override falls back to the English base caption. | `MediaGallery.tsx` `Shot`; `ImageReveal.tsx` lines 86–90 | Athlete portraits have no verified names. Voice note asked Deepayan for names and medal years; those were never supplied. Several captions describe recording activity. | For unidentified people, clear the visible caption and keep a neutral alt. Change the fallback so an intentional empty caption does not reappear from `lib/media.ts`. Do not invent roster lines. | P0 | Gallery in EN and BN: no empty figcaption gap; unnamed portraits have no editorial caption. |
| Media `/media` | Four local mp4s and seven `remoteFilms`, click-to-play. | `lib/media.ts` lines 104–157; `MediaGallery.tsx` `RemoteFilmCard` | Shyamal entry is the old ID. Shorts are not watched end to end here; titles follow existing oEmbed-era captions. | Update only `yt-shyamal`. Leave `RLgAz4onoSM`, `_p_k4tdwbeU`, `J5WbntnJwng`, `i2cGyhSS1kU`, `BpFFbFtfCFw`, `-RJ1Lq8OUtk`. | P0 | Films page: one new ID, six unchanged IDs, local films still play. |
| People `/organisation` | Banner offices for Shyamal Ta, Papiya Bhattacharya (Roy), Udit Seth, Jaideep Arya. No attendance claim for Udit or Jaideep. | `content/en.ts` organisation block; `people.ts` lines 51–80 | Voice note asks to re-check posts and to label a Kartik photo. Kartik is not in the public roster and is not matched to a frame. | Do not add Kartik, Hiranmoy, or unverified committee titles. A “watch the interview” link may point at `hdyJD2A38dY`. No extra player required on this page if About and Home already embed it. | P2 | Organisation EN/BN: same four public names; no new faces named. |
| About `/information` | Featured interview: nameplate MR. SHYAMAL TA / STATE PRESIDENT – WEST BENGAL / ALL BENGAL YOGASANA SPORTS ASSOCIATION, embed of `yt-shyamal`, then the fact rows and three logos. | `InformationPage.tsx` lines 11–27 | Player follows the old ID. Fact sheet does not repeat the new transcript’s fee and job passages. That omission is correct until those claims are approved. | Keep one player fed by `yt-shyamal` after the ID change. Do not paste the government-jobs transcript onto this page. | P0 | About EN/BN: nameplate unchanged; iframe ID is `hdyJD2A38dY`. |
| Shared metadata | Site title is the ABYSA championship title. Canonical and Open Graph use the new production host. | `app/layout.tsx` lines 38–64; `app/page.tsx` | Prakriti metadata and `prakritiArt` alt still say Yatra (`lib/media.ts` lines 36–40). | Update those strings with the chapter rename. Do not change `metadataBase` in the content pass. | P1 | View source: canonical host unchanged; Prakriti title updated. |

`IdentitySection.tsx` and `ClosingSection.tsx` exist and are not imported. Leave them.

## 5. English–Bengali comparison

Public Amit Shil strings use **শীল**. A search of `content/bn.ts` found no **সিংহ**. The morning audit’s “Bengali still says সিংহ” finding is stale.

| Section | English | Bengali | Gap |
| --- | --- | --- | --- |
| Nav Prakriti | Prakriti Jagran Yatra | প্রকৃতি জাগরণ যাত্রা | Same wrong programme title. Bengali যজ্ঞ already appears for the Mahacharya film title and for the Vedic rite. |
| Home films lead | Amit Shil, Abhay, Vedic recording | Same three, natural enough | Aligned. Both will follow the new video ID only if they do not hard-code it. They do not; the player does. |
| Event judging | “roughly six hundred”, “sixty-four or sixty-five”, marked as his words | Matching attributed paragraph | Aligned. Neither has the 550 floor or the rupee split. |
| Day 01 speeches | Sourabh, Shanti, Kalyan, Supriyo, Rina-ji, Major Saheb, Papiya | Same sequence | Aligned in substance. Chair is “the chair”, not renamed Shyamal on 1 October. |
| Day 02–04 | Verandah, field, 3 October address and fire, 4 October close | Same dates and restraint | Aligned. Voice-note relabels are in neither language. |
| Yogasana / Abhay | Medals and forces jobs as his account | “যাত্রাটা ছিল কেবল স্বাস্থ্য” plus the same caution | Keep যাত্রাটা. Do not “fix” it to যজ্ঞ. |
| Prakriti lead | “not the name of the fire offering” | “এটি আহুতির নাম নয়” | Both deny that the chapter name is the fire. After a Yajna rename, rewrite this sentence so it does not say the Yajna is not a yajna. The fifteen steps can stay as the film’s opening sequence. |
| Prakriti physiology | Volts, grams, oxygen, haemoglobin framed as his film, not medicine | Same hedges, including “এখানে শারীরবিজ্ঞান হিসেবে প্রতিষ্ঠিত নয়” | Aligned and should stay hedged. Do not shorten. |
| interview-banner | Ex-army doctor, heart, name not on the frame | Same | Role comes only from Amit Shil’s voice. See caption audit. |
| Feature nameplate | English nameplate lines | Same English lines inside the Bengali page | Intentional: the graphic is English. |
| Captions | Override map in `en.ts` `captions` | Override map in `bn.ts` `captions` | Keys match for the plates that were edited. A caption wipe must clear both maps and the `lib/media.ts` base, or the `??` fallback will show English under Bengali. |

No section should be replaced by a shorter summary. The Prakriti page and the four-day opening are the detailed accounts. Home should stay a way in.

## 6. Shyamal Ta interview video map

Canonical interview: `https://youtu.be/hdyJD2A38dY`, ID `hdyJD2A38dY`, embed `https://www.youtube-nocookie.com/embed/hdyJD2A38dY`.

One record: `lib/media.ts` `yt-shyamal`. Home (`homeFilmIds`), About (`InformationPage.tsx`), and Films (`remoteFilms`) all read it. Changing that ID updates the three players. The Prakriti watch link does not read it.

| Location | What it does now | Treatment |
| --- | --- | --- |
| `lib/media.ts` lines 112–118 | `yt-shyamal` → `p6AdZy0HIi4` | **Canonical embed.** Replace the ID only. |
| `HomePage.tsx` first of `yt-shyamal`, `yt-abhay`, `yt-yajna` | Eager iframe | **Canonical embed.** No second player. |
| `InformationPage.tsx` | Featured iframe of `yt-shyamal` | **Canonical embed.** |
| Films page via `remoteFilms` | Click-to-play card | **Canonical embed** on play. |
| `content/en.ts` line 300 and `content/bn.ts` line 300 | Text link `https://www.youtube.com/watch?v=p6AdZy0HIi4` | **Contextual link.** Point at `hdyJD2A38dY`. Do not add an iframe; the Vedic and Mahacharya links already sit on that page. |
| `content/en.ts` / `bn.ts` captions `yt-shyamal` | Poster title “Shyamal Ta with Amit Shil…” | Keep the description. It already matches the interview topic Amit Shil stated (work, present activity, plans). |
| Home `filmsLead`, About `featureBody`, Prakriti section that narrates the Krishi Ratna question | Prose about that conversation | **Contextual link** where the sentence is about the interview. No extra player. |
| `yt-yajna` `_p_k4tdwbeU` | Vedic discourse with Shyamal Ta and others | **No change of video.** Different recording. |
| `yt-mahacharya` `J5WbntnJwng` | Public title প্রকৃতি জাগরণ যজ্ঞ, Sourabh and Reena | **No change of video.** |
| `yt-abhay` `RLgAz4onoSM` | Abhay Barman | **No change.** Not the gold-medalist reel the voice note thought it saw. |
| Shorts `i2cGyhSS1kU`, `BpFFbFtfCFw`, `-RJ1Lq8OUtk` | Separate | **No change.** |
| `interview-banner` still | Older man before the named banner; not Shyamal’s face (`people.ts`) | **No interview embed.** Different recording. |
| `interview-sofa`, `interview-corridor` | Unidentified conversations | **No interview embed.** |
| Story mornings, courtyard fire | Shyamal’s spoken order of the day, and a photograph | **No player.** The fire is not the interview. A link is optional only where the sentence quotes the interview. |

`hdyJD2A38dY` was not found inside the transcript files. Playback still has to be checked in a browser after the ID is changed. This audit did not play the new film.

## 7. Prakriti Jagran Yajna naming audit

### What the words refer to

- **প্রকৃতি জাগরণ যজ্ঞ** is the public title of the Mahacharya/Gunomata recording (`J5WbntnJwng`) and the title of `prakriti-jagaran-yajna-transcript-summary.md`. Amit Shil’s voice, line 70, calls column 7 by this name. Line 72: he does not himself know the rite in depth and asks that the page be checked with someone who does.
- **Prakriti Jagaran Yatra** is the welcome sentence inside that same summary (Part 1) and the heading of the 15-element pilgrimage in `karmyog-yajna-summary.md` section 2. It is not a second dated event in the four-day record.
- The site made “Prakriti Jagran Yatra” the nav label, H1, metadata, banner alts, and a closing line, then wrote that it is not the fire offering (`content/en.ts` line 283).
- **Vedic yajna** in `_p_k4tdwbeU` is Shyamal Ta’s discourse (flag, offering, food, breath). The page already says this film is not a caption for the courtyard photograph.
- **3 October courtyard fire** is `morning-address` and `morning-havan`. Dated from the photographs. `people.ts` lines 40–41: do not retitle that photograph.

### Where “Yatra / যাত্রা” is the programme title (change after spelling is chosen)

- `content/en.ts` nav, `programmeLead`, `closeTitle`, `closeName`, `prakriti.title`, `prakriti.lead`, and the fifteen-step section that defines the name.
- `content/bn.ts` the same fields, currently প্রকৃতি জাগরণ যাত্রা.
- `app/prakriti-jagaran-mancha/page.tsx` metadata.
- `lib/media.ts` `prakritiArt.alt`, `children-banner`, `interview-banner`, `film-corridor` alt.
- Caption overrides in both languages for `children-banner`, `interview-banner`, and the corridor film.

### Where “যাত্রা / journey” must stay

- Abhay, Yogasana page: the journey from health to a career (`যাত্রাটা`).
- Any sentence that means a route from district to state.

### English spelling, unresolved

| Form | Where |
| --- | --- |
| Prakriti **Jagran** Yajna | This audit’s user instruction; current site style for “Jagran” |
| Prakriti **Jagaran** Yajna | Yajna transcript title; morning audit; closer to জাগরণ |
| প্রকৃতি জাগরণ যজ্ঞ | Settled Bengali public form |

Recommendation: lock Bengali as **প্রকৃতি জাগরণ যজ্ঞ**. Pause the English replace until Jagran or Jagaran is confirmed. Do not rename the route.

### Voice-note uses that are not safe labels

- “Prakriti Jagaran Yajna — dawn assembly” on an unspecified championship photo.
- “Korme and Bharat Sevashram Sangha” (Karmyog).
- Pranayama on the first story photo. `children-verandah` is athletes sitting; `practice-rise` is 2 October morning, not the 3 October fire.

## 8. Gallery caption audit

Rule used: Amit Shil’s voice is evidence for frames he identifies and for his own name. It is not evidence for a name he says he does not remember, or for a person `people.ts` says was not matched to a frame. Appearance is not an identity.

`EditorialFigure.tsx` always renders a `<figcaption>` with plate and text (`components/EditorialFigure.tsx` lines 33–43). Story and home figures use it. An empty caption still leaves the plate line. `ImageReveal` (gallery and lightbox path) omits the figcaption when caption is missing, but gallery code falls back to the base caption.

| ID | Current caption (base or override) | Recommendation |
| --- | --- | --- |
| `yt-verandah-table` | Scoring. | **Retain.** Voice line 11. |
| `yt-standing-balance` | Artistic pair yoga demonstration. | **Retain.** Voice line 12. No athlete name. |
| `hall-crew` | Media and technical broadcast setup. Deepayan and Nazmul. | **Retain.** Voice line 13. |
| `dance` | Inaugural dance in the hall. | **Retain** this neutral line. Do not add “ashram girls”. |
| `table-address` | Sourabh J. Sarkar addressing the gathering. | **Retain.** Matches the lower-third still already used. Do not name the seated woman as Reena from this frame. |
| `remembrance` | Portraits of Rabindranath Tagore brought to the long table. | **Retain** the portraits. Voice line 49 says they were gifts. The frame was not clearly a gifting moment. Do not add “gifted to guests”. |
| `morning-address`, `morning-havan` | Shyamal Ta, 3 October, address and fire. | **Retain.** Do not add the programme title. |
| `organisers-court`, `day-crew` | Shyamal Ta, named office. | **Retain.** `people.ts` allows these frames only. |
| `interview-banner` | Career conversation, ex-army cardiologist, before the Yatra banner. | **Neutralise.** Amit Shil said he does not remember the name (voice line 40). The role is only his recollection. Visible caption should not state a job. Alt: a man speaking and a younger man listening, before the banner. |
| `portrait-blue`, `portrait-yellow`, `portrait-braid`, `portrait-navy`, `portrait-jersey` | “An athlete … recorded / speaks” | **Remove the recording-activity caption.** Keep the photo. Alt: an athlete before the championship banner. No name, medal, or year. |
| `interview-sofa` | A conversation recorded before the championship banner. | **Remove caption.** Two unidentified men. |
| `interview-corridor` | A recorded conversation in a corridor. | **Remove caption.** Unidentified. Alt may say a woman and camera equipment if that is what is visible. |
| `dais-address` | An address from the dais. | **Neutralise** if it implies a known speaker. “A speaker at the dais” is enough. |
| `children-banner` | Children before the championship banner and the Yatra banner. | **Keep the photo.** After the naming decision, say which words are printed on the banner, or describe “a second banner” if the print is not legible in the file. Do not call the children gold medalists. |
| `children-verandah` | Young athletes along the verandah. | **Retain** neutral seating caption. Do not relabel pranayama. |
| `practice-low`, `practice-rise`, `field-circle` | Morning practice. | **Retain** as practice. Do not relabel as post-yajna teaching. |
| `night-officials` | Evening activity under the banner. | **Neutralise** if “activity” is vague production. Prefer “People seated under the championship banner.” |
| `night-floor`, `night-mats`, `night-asana` | Participants, kits, standing balance, judges behind. | **Retain** neutral sport captions. No names. |
| Recognition plates (`recognition-*`, `medal-placed`, `certificate-youth`) | Officials placing medals and holding certificates. | **Retain** that action. No winner names. |
| `hall-athletes`, `hall-wide`, `indoor-session` | Athletes in the hall. | **Retain.** |

Watermarks: the voice note requires removal. Clean originals are not in the repository. Do not inpaint or reconstruct faces. Leave the stamps and record that limit.

## 9. Factual uncertainty register

### Independently supported enough to keep

- Event name, season, dates 1–4 October 2026, venue, hall name, ABYSA as presenter, Yogasana Bharat and World Yogasana as names on the banner.
- Shyamal Ta, State President, ABYSA; also named on the banner as an executive committee member of Yogasana Bharat. Papiya Bhattacharya (Roy), General Secretary, on the banner.
- Udit Seth and Jaideep Arya as banner offices, not as people shown attending.
- Sourabh J. Sarkar and Reena J. Sarkar as printed on the `J5WbntnJwng` lower third.
- Amit Shil as interviewer, from his own voice note and the corrected site.
- Deepayan and Nazmul on the broadcast-setup frame, from Amit Shil’s voice.
- 3 October courtyard address and fire, from the photographs plus the existing captions.
- Four local hall films and the seven YouTube IDs as separate recordings.

### Transcript claims, not site facts

From `yogasana-govt-jobs-transcript-and-summary.md`, spoken by Shyamal Ta unless noted:

- About 550–600 athletes from 23 districts; 64–65 judges; comparison with one-day meets of 1,000–1,500 and 20–25 judges.
- Four nights, four meals, attached bathrooms; registration ₹50 versus stay charges ₹1,500–2,000; judges’ pay and medals.
- Jobs and cash: railways, Ritu Mondal in the police, Nabanna awards on 28 August (3 lakh and 5 lakh), three further gold medalists awaiting letters, Oliva of Hooghly.
- Allegations about private banners, Nepal/Sri Lanka banquet medals, coach bargaining, Bengal Olympic Association affiliation, meetings with a sports minister, Vande Mataram at a prime-ministerial visit, a Mann ki Baat economic figure.
- Kartik Maharaj addressed “500 children”; Hiranmoy Swami expected that evening; Dudhkumar Mondal as agriculture minister; Krishi Ratna League.

The site already attributes a shortened 600 / 64–65 judging account and the opening chair’s 300-then-600. It does not publish the names, rupees, or allegations above. Leave them out until a later decision.

From the Vedic film and the Yajna guide: chili multiplication, volts, grams, oxygen, haemoglobin, disease, and “no one fell ill” are speaker illustrations. The Prakriti page already frames them that way. Do not move them into the fact sheet.

From Abhay’s guide and the Yogasana page: world and Asian gold, cash, CRPF/CISF/BSF. Already marked as his account. Not a results list.

### Not established

- Athlete portrait names, categories, medal years.
- Hiranmoy Maharaj or Kartik Maharaj in a specific photograph.
- The ex-army cardiologist’s name.
- That the courtyard fire’s title is Prakriti Jagran Yajna.
- That Udit Seth or Jaideep Arya attended.
- Any winner of this championship.
- That `hdyJD2A38dY` is the same edit as `p6AdZy0HIi4`. The user supplied it as the canonical interview. The transcripts do not print either ID.

## 10. Implementation plan (do not start until approved)

Order is dependency and risk, not a rewrite.

1. **Confirm English spelling** Jagran or Jagaran. Bengali যজ্ঞ can be decided now. Without the English form, a replace will be done twice.
2. **P0 video.** Change `yt-shyamal` in `lib/media.ts` to `hdyJD2A38dY`. Update the two hard-coded watch links in `content/en.ts` and `content/bn.ts`. Search for `p6AdZy0HIi4`. Play the new embed once in the browser. Do not touch the other six IDs.
3. **P0 title.** Replace the programme title in nav, Prakriti H1, metadata, banner alts, and captions. Rewrite the lead that currently says the name is not the fire. Keep fifteen-step detail as the recording’s opening. Keep `/prakriti-jagaran-mancha`. Keep যাত্রাটা on the Yogasana page.
4. **P0 captions.** Neutralise or remove the rows in section 8, in both languages and in `lib/media.ts`. Teach `EditorialFigure` and `MediaGallery`’s `??` fallback to allow a missing caption without an empty plate. Check gallery, story, home, and the lightbox.
5. **P1 proofread.** EN/BN pass on Event, Story, and Prakriti for grammar only. Do not shorten. Do not add Ritu, Oliva, fees, or allegations in this pass.
6. **P2 optional links.** People page may link to the interview. No new player.
7. **QA, then stop for deploy approval.** Typecheck and `next build`. No lint script exists. Do not push or deploy until the diff is reviewed.

Out of scope: visual redesign, watermark inpainting, new CMS, merging `master`, renaming the route, custom YouTube thumbnails.

## 11. QA checklist (for the later implementation, not this audit)

### Identity

- [ ] No public “Amit Singh”, “Singha”, or অমিত সিংহ.
- [ ] Shyamal Ta / শ্যামল তা. No Das or Da.
- [ ] Programme title is the approved Yajna form in nav, H1, metadata, and alts.
- [ ] “Journey / যাত্রাটা” on the Yogasana page unchanged.
- [ ] Event title remains 7th State Yogasana Sports Championship 2026–27.
- [ ] Dates on Story are 1, 2, 3, and 4 October 2026 in both languages.
- [ ] No new winner, job, fee, or allegation unless this plan is amended.

### Video

- [ ] Home, About, and Films use `hdyJD2A38dY` for the Shyamal interview.
- [ ] Prakriti watch link uses the same ID and is not a second iframe.
- [ ] `_p_k4tdwbeU`, `J5WbntnJwng`, `RLgAz4onoSM`, and the three Shorts are unchanged.
- [ ] New embed actually plays.

### Photos and both languages

- [ ] Unnamed portraits have no editorial caption and no empty figcaption hole.
- [ ] `interview-banner` does not state a medical specialty.
- [ ] 3 October fire captions do not gain the programme title.
- [ ] Prakriti fifteen-step text and day-01 speeches still present in Bengali at the same length.
- [ ] Language switch on Home, Story, Prakriti, Gallery, and About.

### Routes and build

- [ ] `/`, `/event`, `/yogasana`, `/story`, `/gallery`, `/media`, `/organisation`, `/prakriti-jagaran-mancha`, `/information` return 200.
- [ ] Mobile width: no horizontal overflow on Home, Gallery, and About.
- [ ] `npx tsc --noEmit` and `npx next build` pass.
- [ ] Deploy only after that, to the existing project, pinned SHA. Confirm canonical host and that `prakriti-jagaran-mancha.vercel.app` still answers.

## 12. What this audit did not do

- Did not edit `content/`, `app/`, `components/`, `lib/`, or `package.json`.
- Did not commit, push, or deploy.
- Did not play `hdyJD2A38dY`.
- Did not listen again to the WhatsApp audio. The voice findings are from the written transcript.
- Did not locate `yogasana_content_editorial_implementation_spec.md`.
