# Release verification

## Candidate tested locally

Runtime code revision: `5730d04` (invitation, monotonic timer, audio, solo progression, ledger skin). Later documentation/test-source cleanup does not change runtime behavior.

Environment: built Vinext Cloudflare Worker through local Wrangler, local D1, headless Chromium, independent browser contexts. These results do not establish physical phone behavior or public-origin synchronization.

- Production build passed.
- Engine regression checks passed: sacrifice outcomes, duplicate-action guard, filtered private state, timeout and stale round, voting/confession, host authority.
- Room creation and invite checks passed: two independent contexts, code prefill, distinct seats, double-tap guard, original-tab reload, clipboard and manual fallback, pasted lowercase/spaced codes, invalid and full-room errors.
- Layout checks passed at 320, 360, 390, and 430 pixels: no horizontal overflow, invitation controls at least 44 pixels tall.
- Clock test reproduced the forward clock-jump failure before repair. The same browser scenario after repair remained at a valid countdown, with the same server phase/deadline.
- Additional controlled checks passed: forward/backward wall-clock changes, offline/reconnect, 1.5-second delayed responses, a frozen background guest recovering after phase transition, and two sessions displaying the same phase with countdowns within one second at sampled checkpoints.
- Sound context entered running state on a toggle gesture and suspended when muted. This does not prove audible output on a physical phone.
- Solo engine check passed: the promise alone did not advance; accepted human action caused companion decisions and resolution.
- Concurrent four-seat API integration check passed through local D1, including persistent peace outcome and filtered snapshot.

Evidence: [sanitized reports and timer traces](evidence/). Browser runs used the available executor Chromium/Playwright tools. No seat tokens are included in the reports.

## Public release and remaining checks

Publication is pending at this documentation revision. Check the deployment record for the selected saved version before describing the candidate as live.

Physical test for Josh and Joseph: create room, copy invite, open on the second phone, verify prefill and distinct seats; then check shared phase, one action per submission, background/rejoin recovery, and audible/muted sound. A manual flow recording is optional and does not replace this test.

Known unresolved scope: persistent Secret Elo, new resources, chat/DMs, directory/spectators, autonomous scheduling and external agent integration. Approval is recorded; implementation is not claimed. The existing public URL is retained; no domain was purchased. The portfolio is unchanged.
