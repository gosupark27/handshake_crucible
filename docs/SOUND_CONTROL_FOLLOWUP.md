# Sound control refinement — current status and historical intake

**Current:** implemented, verified locally, and deployed in version 4 (`455ac22`). Physical/deployed checks remain bounded by [release evidence](RELEASE_VERIFICATION.md). Later refinements are tracked in [the session reconciliation](SESSION_RECONCILIATION.md).

## Historical intake before the original hard stop

The following text describes the state at intake, before the deadline extension and version-4 execution. It is retained as history and is superseded by the current status above.

Keep the existing public URL. This follow-up was received immediately before the 11:40 PM Phoenix session hard stop. No new sound-control release or deployed failure test is claimed.

- Button text and accessible pressed state match actual audio state: Sound off, a brief Enabling state when needed, then Sound on only after successful start.
- Remove the persistent success banner. Any transient notice disappears after approximately three seconds and occupies a reserved area or overlay so it does not shift layout.
- If audio fails to start, return to Sound off. Provide a clear retry action and a dismissible error. Do not leave a success state visible.
- Repeated rapid on/off taps must converge on the user's latest intent; asynchronous context resume must not enable audio after a later mute.
- Test normal start/mute, rapid repeated taps, forced audio-start failure, retry, and dismissal on the selected deployed build. Record revision, browser/device, and actual output. Earlier local context lifecycle tests do not verify these new behaviors.

Version 3 remains live. It currently has persistent sound notices; this request is recorded separately from the already-deployed audio context repair. Physical phone audio and this follow-up's deployed verification remain pending.
