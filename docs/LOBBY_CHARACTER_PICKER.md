> Update: Implemented in the release-4 candidate and verified locally. See [release evidence](RELEASE_VERIFICATION.md) for exact tests and deployment status. The original request below is retained as history. Physical/deployed checks remain separate.

# Lobby character picker — approved, not implemented

Josh approved this addition during the October 30 session. The request arrived at approximately 11:39 PM Phoenix, immediately before the explicit 11:40 PM hard stop. It has not been implemented, tested, or deployed. Version 3 remains the public release.

## Required behavior

- Show four character choices in the lobby, each with an icon and a visible name.
- Make selection explicit with an accessible selected state; do not rely on color or hover alone. Names remain visible on phones; optional hover detail is supplemental.
- Keep each human's choice attached to their own seat and persist it in server room state so both phones see the same roster and a returning original tab retains its selection.
- With two human seats, fill only the two missing seats with bots. Repeated fill requests must not add extra bots or replace humans.
- Both phones must display the same four-person roster, with exactly two seats visibly identified as bots.
- Preserve the current URL until any replacement is connected and tested. Preferred future domain: handshakecrucible.app; no purchase, account setup, or migration is authorized by this task.

## Implementation boundary

Keep character presentation separate from hidden state and game rules. If the four existing archetype names/icons are reused, distinguish visual identity from any gameplay role assignment. Do not silently alter frozen role rules or infer exclusive character ownership. The room server validates selection, the owning seat alone changes its choice, and lobby-only changes are rejected after the game starts.

The existing host-only fill-to-four loop already fills missing seats. Reuse it and verify its behavior with two human browsers rather than replacing it.

## Acceptance test

1. Create a room on phone A; share the invite with phone B and join distinct seats.
2. Choose different characters on A and B. Confirm each phone shows the same selections and names without hover.
3. Refresh each original tab. Confirm its seat and choice survive.
4. Host fills to four. Both phones show the same four seats: two humans and exactly two bots.
5. Repeat filling and confirm no extra seats or changed human choices. Confirm a non-host cannot fill the table or change another seat's choice.
6. Check selection controls and names at narrow phone widths, then begin the game and confirm picker locking without seat reset.
7. Build, publish a selected tested version, and identify its revision before Josh and Joseph perform the physical two-phone check.

## Evidence status

No character-picker evidence exists yet. Version 3 local tests cover the prior invitation flow and two-human-plus-two-bot setup, not this new selection behavior. Previous tests must not be counted as verification of an unimplemented feature.
