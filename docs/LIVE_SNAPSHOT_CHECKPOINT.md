# Preserved live snapshot and execution checkpoint

## Source provenance

The existing hosted game implementation was imported into this repository with its available Git history intact. The original import failure was missing parent commit objects in a shallow checkout, not missing game source files. Fetching the available history resolved that import failure without rewriting commits.

- Preserved revision: `2d8e3640651190f53922a03058e7102a5ac37322`.
- Preserved tag: `live-snapshot-v2` (verified on GitHub).
- Parent revision: `657499ad033c55c5966ab58f6137f29ec11b8771`.
- Existing game entry: https://handshake-dawn-jj.chalkyfinch36.chatgpt.site/play
- Portfolio baseline: https://jj-the-prompt-architect.chalkyfinch36.chatgpt.site (unchanged).

The frozen Handshake design baseline remains distinct from this live implementation snapshot. The complete historical frozen specification and old engine source were not available in this execution workspace; that does not establish that they are lost. Deployment does not establish approval of every implemented rule.

## Latest authorized scope

Keep tonight's existing mobile layout. Prioritize timer correctness, sound, and the two-player test. Keep timer repair, sound repair, solo bot progression, and the optional Twitch-inspired presentation in separate commits. Trim presentation work before verification if time is short. Bot takeover, new resources, messaging rules, rankings, agent integration, and custom domain purchase remain deferred.

Solo with companions: advance when all decisions are accepted by the server, rather than merely selected in the UI. Treat any required solo progression change separately from multiplayer timer repair.

## Evidence and investigation status

JJ reported countdown jumps, freezes, late transitions, and a sound issue. No independent reproduction, failing runtime trace, repair, or two-session pass has been established in this execution increment.

Static source inspection identified candidates requiring reproduction:

- The client countdown uses wall-clock time and replaces its received-time reference after each room response. That may produce display discontinuities; it is not a confirmed diagnosis.
- The API returns a deadline and server time but does not expose the committed database state version or a distinct phase-instance identifier for response comparison.
- Sound playback creates a fresh AudioContext during a later network response. The toggle does not unlock/resume audio directly during the user's gesture. The sound trigger compares phase labels, so a live-to-live round transition alone does not trigger it. Physical phone audio output remains unverified.
- Server transitions are request-driven. Autonomous progression without connected clients has not been implemented or authorized by this checkpoint.

## Required verification before a new test deployment

1. Capture the failing scenario with displayed countdown, server phase/round, deadline, response state version, and request/response timing together. Preserve a sanitized trace without seat tokens.
2. Apply a focused timer fix, then repeat that same scenario. Check delayed responses, a changed device clock, and background/resume recovery.
3. In two independent browser sessions, join the same room, verify aligned phase/deadline, submit actions, and verify one accepted action per submission and consistent resolution.
4. Verify sound toggle, loading/readiness, playback after a gesture, and mute behavior in a browser; identify physical phone audio testing separately.
5. Build successfully before publishing a selected test version. Do not present a flow recording or solo run as proof of multiplayer synchronization.

Proposed numerical checks discussed in review were countdowns within one second and phase updates within four seconds under the named test conditions. These are targets, not measured results or unconditional guarantees.

## Execution blocker

The execution environment became unavailable and shell calls failed with a disconnected execution transport. The source import and preserved tag were verified independently through GitHub after the disconnect. No runtime fixes or skin changes were made, and no new test deployment was published.

Resume requires a usable execution environment. Existing public deployment remains unchanged and has known reported timer symptoms. A new release remains blocked on reproduction, repair, build, and the two-session checks above.

The recorded session boundary is 11:40 PM Phoenix time on October 30, 2026; that ends work rather than initiating implementation.
