# Handshake Crucible

**Public game preview:** [Play Handshake](https://handshake-crucible.chalkyfinch36.chatgpt.site/play) · [Introduction](https://handshake-crucible.chalkyfinch36.chatgpt.site/landing.html)

A multiplayer social-decision prototype: travelers make a public promise, commit a sealed action, and see the accepted outcome in a shared ledger. Josh Park directs the experience and evaluates it through play feedback. AI assists with specification, implementation, testing, and review.

**Release status:** Version 3 was deployed successfully through Sites on October 30, 2026 (11:32 PM Phoenix). Deployed source: `79fa0e4cb2200de473b516e1138544f3c2ec0e16`. Automated checks ran locally against the built Cloudflare Worker; physical two-phone checks remain pending. Documentation after that source revision does not change the deployed runtime. Approval is authorization to attempt work, not evidence that it succeeded. See [the release evidence](docs/RELEASE_VERIFICATION.md) for the tested revision and deployment status.

## What to try

1. Choose **Create a room**, then **Copy invite link** or **Copy code**.
2. Open the invitation in another browser/phone. Confirm the code, then choose **Join room**. Each participant receives a distinct private seat credential; invitations contain only the room code.
3. Invite four travelers, or use **Fill to four with companions**. The host begins the journey.
4. Give your word, then commit an action. Follow the scene, countdown, and server event ledger into the next crossing.

Rooms allow 4–8 seats, expire after 24 hours, and keep the current seat in the original browser tab. The introduction includes a separate solo illustration; that illustration is not a multiplayer session. No recorded playthrough is supplied yet. A 45-second manual screen recording is a fallback; edited waiting should be labeled, and a recording does not prove multiplayer synchronization.

See the [staged delivery log](docs/STAGED_DELIVERY.md) for approved, implemented, verified, and deployed status by revision.

## Scope and evidence

| Feature | Approved | Implemented | Verified |
|---|---|---|---|
| Room creation, invite link/code, explicit joining | Yes | Yes | Local two-session room flow; physical phone check pending |
| Readable room code, copy fallback, pasted codes, lobby seat count | Yes | Yes | Local phone-width browser checks; see evidence |
| Timer stability and recovery | Yes | Monotonic elapsed-time display; response phase identity/state version; reconnect refresh | Controlled local clock, background, reconnect, delayed-response tests; production symptoms require follow-up |
| Sound toggle and round notifications | Yes | Confirmed audio state, transient notices, retryable failures; no sound success banner | Local failure/retry and rapid-toggle tests passed; deployed negative tests and audible phone output pending |
| Companion commits and progression | Yes, implementation approved | Public-observation policy, 1–1.5 second server due times with active polling; resolve only after all decisions or deadline | Engine tests and local two-session sample: companions committed at 1.54 seconds; not an unconditional latency guarantee |
| Stream-inspired ledger presentation | Yes | Yes; server events only | Build/browser check; no human chat implied |
| Lobby character picker, persisted choices, shared four-seat roster | Yes, implementation approved | Yes, cosmetic identity separate from gameplay role | Local two-session selection/reload passed with exactly two human and two companion seats; physical phones pending |
| Experimental Secret Elo and badges | Yes, implementation approved | Not implemented; no persistent ranking system | Not verified; existing private journey consistency score is not Elo matchmaking |
| New resources, messaging/DMs, directory/spectators | Yes, implementation approved | Not implemented | Contracts and tests pending |
| Claude/MCP participation, bot takeover, branching research | Yes, implementation approved | Not implemented | Integration, permissions, behavior contracts, and tests pending |
| System/light/dark theme, remembered preference | Yes, implementation approved | Yes, shared across landing and game | Local narrow-screen light/dark and state-preservation tests passed; physical phone visual review pending |
| Custom domain | Purchase/migration remain deferred under the no-spend constraint | Not implemented | Existing URL retained |

Approval in this table records Josh’s decision to implement the relevant game asides; unfinished features remain unimplemented, with contracts and verification still required. Approval and completion are separate states. The theme direction is design rationale inspired by Exodus, not a spiritual measure of players.

The frozen design baseline and live implementation are distinct. Crucible begins from the available live snapshot, preserved at `live-snapshot-v2`. The complete historical frozen specification and old engine source were unavailable in this workspace, so full conformance is not claimed. [Provenance and interruption checkpoint](docs/LIVE_SNAPSHOT_CHECKPOINT.md).

## Conversational development workflow

Josh supplies intent, constraints, creative direction, human play-test observations, and final decisions. AI supports written specifications, feasibility analysis, implementation, and evidence-based review. Voice dictation speeds input; written artifacts make decisions inspectable. Turn-taking conventions help coordinate the conversation but do not replace tests or source control.

Three documentation review rounds preceded execution:

1. **Source and timing:** distinguish the frozen design from the live snapshot, preserve origin, and identify server-owned deadlines. Result: import with history preserved and a snapshot tag.
2. **Interaction and privacy:** separate accepted events from chat, narration, and bots; distinguish shared room codes from private seat credentials. Result: bounded invitation flow; larger game-rule proposals remain separately labeled.
3. **Acceptance and release:** consolidate mobile feedback, timing symptoms, scope boundaries, and rollback. Result: separate commits for invitations, timer, sound, solo progression, and presentation, with explicit verification limits.

The development claim rests on inspectable code and recorded checks, not conversation alone. Detailed conversation transcripts are kept separate from this README.

## Challenges and findings

- **Incomplete checkout history:** the first import lacked parent commit objects. Available source files were intact. Fetching history resolved the import without rewriting commits; this is separate from unavailable historical frozen-engine material.
- **Timer jumps:** a controlled browser test changed the client clock forward by a minute. The displayed timer fell from 60 to zero while the server phase/deadline stayed unchanged. After the focused fix, the same scenario showed 60 to 59. This explains one reproduced failure, not every reported freeze or late transition. Sanitized traces are in [evidence](docs/evidence/).
- **Sound:** source inspection found audio context creation during network responses and phase-only triggering. The revised toggle unlocks audio during a gesture and round changes trigger cues. Physical phone output remains unverified.
- **Execution interruption:** the workspace disconnected after import. No fixes were claimed during that interruption; a checkpoint was saved through GitHub. Execution resumed only when access returned.
- **Build/preview restart:** rebuilding replaced asset filenames; restarting the local Worker was necessary before validating the new bundle. Stale asset failures are not counted as passing tests.

## Run locally

Requires Node.js 24+ (for direct TypeScript tests) and the pinned pnpm version in `package.json`.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_clammy_felicia_hardy.sql
corepack pnpm start
```

Use the printed local origin. For source development, `corepack pnpm dev` runs the existing Vinext preview. D1 room data stays in ignored `.wrangler/state`. Production bindings are supplied by the authorized Sites deployment; never commit credentials or local runtime data.

```sh
node --test tests/game.test.mjs tests/room-clock.test.mjs tests/solo.test.mjs
TEST_ORIGIN=http://localhost:8787 node tests/api.mjs
```

## Known limits

Server transitions are request-driven; unattended scheduling is not provided. Browser countdowns do not authorize outcomes. Seat recovery uses session storage in the original tab; there is no account-based recovery. Existing timeout/autopilot behavior is not adaptive bot takeover. Ratings describe in-game promise/action consistency, not a person's character. Current checks use local Chromium and a local D1 database; physical Safari/Android and public two-phone play remain distinct checks.

## Stack and attribution

React, TypeScript, Vinext/Vite, Cloudflare Workers, and D1. The retained Vinext starter and its authored Sites integration remain in the repository; dependency licenses apply to their respective packages. No new license grant or claim of ownership over dependencies is made here.
