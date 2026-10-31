# Handshake Crucible — recap, calibration, and next sequence

Reconciled October 31, 2026, after submission and Showcase confirmation. Source: this session's requests, repository commits, release evidence, and the supplied concept artwork and email screenshot. These are repository ticket keys suitable for later Jira import; no external Jira issue creation is claimed.

## Current baseline

- **Public version 4:** deployed successfully. Runtime source `455ac22e74c5afe231ab3843f2e605af834c77da`; later documentation commits do not alter it.
- **Landing:** https://handshake-crucible.chalkyfinch36.chatgpt.site/landing.html
- **Game:** https://handshake-crucible.chalkyfinch36.chatgpt.site/play
- **Repository:** https://github.com/gosupark27/handshake_crucible
- **Portfolio:** https://jj-the-prompt-architect.chalkyfinch36.chatgpt.site — stays unchanged.
- Native hosting success and fresh public entry/landing text were confirmed. Interaction tests ran against the locally built Worker and local D1 in independent Chromium contexts. Physical phone layout/audio and public negative tests remain separate evidence gaps.
- JJ reported another human successfully joining during the latest walkthrough. That is partial human evidence; the full two-phone phase/action/background/audio checklist has not been recorded as passed.
- JJ reported submitting at 12:03. The supplied email says the project is approved and live in Showcase; that is the specific approval evidenced by the screenshot.
- The dusk cover supplied by JJ is **concept artwork**, separate from the actual gameplay capture. The delegated dawn generation never started, so no dawn revision is claimed.
- No code build or image generation is active during this documentation reconciliation.

## What shipped

| Area | Approved | Implemented | Verified | Deployed |
|---|---|---|---|---|
| Create/join, code and invite copying, clipboard fallback | Yes | Yes | Local two-session, duplicate-tap, pasted-code, bad/full-room checks | v4, inherited from v3 |
| Timer repair | Yes | Monotonic elapsed-time display; coherent phase/deadline/state-version responses; reconnect refresh | Controlled forward/back clock, delayed response, offline/reconnect, background tests | v4; not proof every reported production symptom is fixed |
| Sound cues | Yes | Half-second electronic cues; gesture unlock, actual state labels, retry/dismiss failure, no sound success banner | Local forced failure/retry and rapid-toggle mute checks | v4; audible phone output and deployed forced-failure test pending |
| Theme | Yes | System / Light / Dark controls, cross-page saved preference | Local narrow-screen light/dark, seat/phase/vote/promise preservation | v4; latest binary-toggle refinement below is unimplemented |
| Cosmetic character picker | Yes | Four icons with visible names; per-seat server persistence; gameplay role remains separate | Local distinct selections, refresh, authority, two humans plus two bots | v4; unique characters and special abilities are not implemented |
| Companions | Yes | Fill only missing seats to four; active-polling commits due after 1–1.5 seconds; public-observation decision policy | Engine checks and one local observed commitment at 1540 ms | v4; request-driven, no unattended scheduler or guaranteed latency |
| Voting | Yes | Separate centered panel, pending disable, server-confirmed participation/counts, no public vote targets, timer and action link | Local failure/retry, rapid taps, reconnect, concurrent action access | v4; latest collapsible/drawer revision below is unimplemented |
| Player-facing landing | Yes | Start instructions, four actions from current rules, repeated Play links, prototype status and build link | Local mobile light/dark and link checks; fresh public text | v4; supplied cover is not integrated |
| Stream presentation | Yes | Event ledger skin and collapsible supporting information | Local browser/build checks | v4; no Twitch-like directory, human chat, DMs, or spectators |

Detailed evidence and source revisions: [release verification](RELEASE_VERIFICATION.md), [staged delivery log](STAGED_DELIVERY.md), and [reports](evidence/).

## Diffs that change the next work

| Earlier direction / current v4 | Latest request | Reconciled decision |
|---|---|---|
| Three visible System / Light / Dark controls | Compact Light/Dark toggle in an intentional position | Replace the three-choice UI. Use device preference for an unset initial choice; remember explicit Light/Dark selection. No state reset. |
| Voting centered in a large independent panel | Voting as an icon plus dropdown/tray, similar to room details | Latest compact treatment supersedes the large-panel preference. Keep count, pending/confirmed/failure states, and action access. |
| Countdown near scene and repeated in voting | Timer follows the player while scrolling | Add a sticky shared timer; never restart the authoritative deadline when navigating panels. |
| Full game header with controls visible | Handshake branding, compact theme toggle, hamburger navigation | Collapse secondary controls into an accessible menu. |
| Flat create/join cards with arrow glyphs and round-time selection in Create | Rounded cards, minimal buttons, creation separate from configuration | Remove decorative CTA arrows. Move round-time configuration to the host's lobby settings. |
| Fixed maximum eight seats; four needed to begin | Ability to choose room size | Add explicit maximum-seat configuration with server enforcement. Preserve the four-seat start rule until separately changed. |
| Character choices are cosmetic and may repeat | Question about character advantages and duplicate picks | Decision needed. Do not infer hidden advantages or exclusivity from the question. Explain current cosmetic behavior. |
| Abstract landscape landing | Landing inspired by supplied four-traveler dusk cover | Use dusk/lantern palette and central helping gesture, intentional mobile crops, legible HTML and one clear primary action. Keep artwork labeled concept art. |
| Stream-like event ledger only | Game should feel like a familiar stream interface | Design composition first; actual chat, directory, discovery, spectators, bots, and narration remain distinct capabilities. |

## Ticket-style backlog

Priority is recommended order, not a claim of completion. Approved implementation items still need their stated contracts and acceptance evidence. JJ Corpus is excluded from this backlog.

### HC-001 — Complete live phone evidence (P0)

**Status:** approved; partially reported; full verification pending. **Depends on:** v4 baseline.

On two phones open the same deployed revision, create/share/join distinct seats, confirm exactly two bots when filling to four, submit one action each, compare phases/countdowns and unique ledger outcomes, background/return, and test cue on/mute plus actual output. Record devices, browsers, revision, results, and any failures. A concept image or solo recording does not pass this ticket.

### HC-002 — Compact controls and game layout (P1)

**Status:** approved, unimplemented. **Depends on:** HC-001 feedback.

Binary Light/Dark toggle; device default only when no choice is saved; persistent choice across landing/game. Compact branded header with accessible hamburger. Voting icon/dropdown/tray, sticky countdown, clear pending-action route. Rounded create/join cards and minimal buttons without decorative arrows. Preserve actions and voting in parallel. Test phone widths, keyboard focus/escape, scroll, theme switching, pending/failed/confirmed vote, reconnect, and no seat/promise/action reset.

### HC-003 — Host lobby configuration (P1)

**Status:** approved, unimplemented. **Depends on:** explicit capacity/default labels.

Create/join stays simple; configure round length in the lobby. Offer maximum seats within the existing 4–8 range, store/enforce it on the server, and explain that four seats begin a game. Fill companions only where needed; retain human choices and host authority. Test concurrent joins at capacity, non-host edits, settings after start, and the two-human/two-bot case.

### HC-004 — Cover-led landing and traveler identity (P1)

**Status:** approved visual direction; cover available in chat; integration unimplemented. **Depends on:** source image asset availability and HC-002 layout.

Use the supplied dusk concept as the visual reference: warm horizon, dark mountain/forest, amber lantern, four travelers, central helping hands. Avoid duplicate title over baked-in image text. Preserve hands/lantern on phone crops. Keep Play in hero, navigation, and after instructions; keep technical details in README. Character portraits/badges can borrow the four-traveler identity. Any extraction/edit of the artwork is image work, distinct from evidence screenshots. Test readability, image loading, crop, performance, and every Play route.

### HC-005 — Character rules decision (P2)

**Status:** question open; no new mechanics approved by implication. **Depends on:** frozen-rule comparison.

Confirm whether multiple travelers may select the same character and whether appearance should remain cosmetic. If character-specific or hidden advantages are selected, specify abilities, authorized visibility, balance, and versioned tests before implementation. Current code permits duplicate visual identities and does not grant advantages.

### HC-006 — Original instrumental music and audio controls (P2)

**Status:** approved, unimplemented. **Depends on:** stable cue controls.

Original hopeful journey music: warm strings, rising brass, gentle percussion; Civ IV is a scale/mood reference, not a melody to copy. Separate music enable/volume from cue enable/volume. Respect user gesture requirements and muted state. Test mobile failure/retry, rapid toggles, background/return, asset loading and loops. Current version contains cue tones only; no music track or music volume control.

### HC-007 — Presets, human chat, and narration (P3)

**Status:** implementation approved; contracts and code pending.

Start with bounded preset questions/messages; later free text or unlocks require explicit rules. Define recipients, who can read answers, persistence, rate limits, moderation and failure/reconnect handling. Label accepted server events, human chat, and system narration distinctly. Game-playing bots act through authorized actions; chat appearance grants no access to sealed choices.

### HC-008 — Room directory, discovery, and spectators (P3)

**Status:** implementation approved; contracts and code pending. **Depends on:** HC-007 visibility decisions.

Separate invitation-only rooms from opt-in public discovery and spectator views. Specify what appears in a room/channel listing. No hidden roles, sealed actions, or seat credentials in discovery, chat, or spectator payloads. Eligibility does not expand hidden-state permissions.

### HC-009 — Companion continuity and autonomous participation (P4)

**Status:** implementation approved; contracts and code pending.

Define leaving/seat forfeiture before bot takeover; current Leave discards the local resume key rather than removing the server seat. Adaptive continuation based on action history is unimplemented. Define permitted observations, identity, boundaries, stopping conditions, audit versions and recovery. External Claude/MCP integration, credentials and tool permissions are not established. Independent room scheduling is separate from an agent that polls.

### HC-010 — Experimental Secret Elo and progression (P4)

**Status:** implementation approved, unimplemented. **Depends on:** persistent identity, scoring and visibility contracts.

Record JJ's proposed rank/division vocabulary, Wood V, X/XX concepts, same-or-lower badge visibility, cross-room rating and fresh room-specific scores. Choose a rating model before calling it Elo. Use original visual assets. Define which values are private, award authority, corrections/versioning, explanation, rollback, and spectator eligibility. Existing end-of-journey consistency rating is not persistent Elo or a measure of personal worth.

### HC-011 — Research extensions and governance (P5)

**Status:** implementation approved; design hypotheses, not implemented.

Bounded one-way branches from protected origins, depth limits, versioned event/state lineage, and incident snapshots for drift. Multiple branches from one person are not independent human playtests; unchosen alternatives do not establish motives. Define consent, logging, stopping triggers, retention duration/access/deletion, and validation with new people. No claim of a deployed discernment system or autonomous research workflow.

### HC-012 — Publishing, provenance, and project communication (ongoing)

**Status:** partly complete.

Keep README approved/implemented/verified/deployed fields current with exact revisions and limits. Preserve frozen baseline separately from implementation; historical full frozen spec/code remains unavailable here. Share Showcase approval as the evidenced milestone. Use actual gameplay capture for a gameplay screenshot; label the supplied dusk cover concept artwork. LinkedIn first is a recommendation; no social post has been published by this session. Named hosting URLs are live; `handshakecrucible.app` is a future preference with no domain purchase/migration authorized. Portfolio remains a separate, frozen personal-site baseline.

## Recommended next sequence

1. Close HC-001 or turn observed failures into focused reproduction tickets.
2. Ship HC-002 as one coherent layout pass; do not add new gameplay capabilities during that pass.
3. Ship HC-003 lobby configuration and HC-004 cover/identity presentation as bounded increments with separate evidence.
4. Resolve HC-005 before adding character mechanics; add HC-006 music separately from cue correctness.
5. Implement HC-007, then HC-008 once visibility contracts are complete.
6. Address HC-009 and HC-010 after identity/governance decisions, then HC-011 research.
7. Maintain HC-012 at every release. Each ticket records approval, implementation commit, test environment/results, deployment revision, and remaining limits.

This reconciliation does not itself alter the public application or execute the backlog.
