# Website Workflow And Quality Gates

This is the reusable operating system for building premium brochure and portfolio websites with an AI assistant.

## Phase 1: Discovery And Visual Direction

Goal: define what the site should feel like before implementation.

Lock:
- business type
- audience
- core conversion goal
- language(s)
- visual tone
- emotional target
- reference quality level

Outputs:
- 1 clear visual direction
- 1 clear structure direction
- 1 clear interaction direction
- 1 clear recommendation for the implementation stack if not already fixed

Gate:
- do not start implementation until the visual and structural direction are understandable in plain language

## Phase 2: Structured Planning And Approval

Goal: translate the idea into a decision-complete site spec.

Lock:
- section list and order
- primary CTA path
- supporting pages
- route strategy
- contact strategy
- media categories
- animation boundaries

Best practice:
- validate section direction one cluster at a time
- confirm high-impact decisions before implementation
- recommend defaults instead of waiting on every tiny preference
- separate "must decide now" from "can safely default later"

Gate:
- the implementation plan should leave no major design, route, or interaction decision open

## Phase 3: Implementation Architecture

Goal: build a maintainable system, not a one-off mockup.

Required structure:
- shared UI primitives
- modular page and section components
- centralized content and data files
- typed content models
- route-aware navigation
- helpers for repeated UI behavior

Preferred sequence:
1. homepage shell
2. section system
3. homepage sections
4. brochure and supporting routes
5. portfolio, archive, and detail routes
6. contact integration
7. content cleanup
8. real asset replacement

Gate:
- no critical content should be trapped inside hardcoded JSX islands if it belongs in structured content

## Phase 4: Responsive And Interaction QA

Goal: ensure the site behaves like a product, not just a screenshot.

Required checks:
- desktop viewport
- mobile viewport
- touch interactions
- anchor and route navigation
- drawer behavior
- tab behavior
- accordion behavior
- slider behavior
- floating CTA behavior
- section visibility

Mobile rule:
- if mobile feels bloated, fix spacing, radius, density, and composition before changing theme or copy

Failure-minimization checklist:
- avoid giant global responsive rewrites without visual verification
- prefer targeted compositional changes
- if mobile sections appear empty or black, suspect hydration, animation, or overlays first
- if touch interactions fail only on phone, suspect local preview and dev-origin issues before rewriting UI
- if the user cannot see local changes on phone, verify the exact URL, force-refresh, and rule out cached tabs

Gate:
- all elements that look interactive must be tested as interactive

## Phase 5: Asset Replacement And Content Finalization

Goal: swap polished real content into a stable system.

Rules:
- replace assets through the content model when possible
- keep naming stable and descriptive
- ensure replacements flow through homepage and secondary routes
- remove redundant labels, repeated content blocks, and filler copy
- make every section earn its place
- update archive and detail references when items are removed so no dead links remain

Good practice:
- use demo content to shape the site early
- use real assets later without re-architecting the page

Gate:
- final content should not require fragile one-off edits across multiple component files

## Phase 6: Deployment And Post-Deploy Verification

Goal: ship confidently and make future changes safe.

Required flow:
1. verify local behavior
2. verify git branch and account
3. push intentionally
4. deploy
5. verify production URL
6. document how future edits redeploy

Pre-push checklist:
- lint clean
- tests passing where relevant
- mobile checked
- contact path checked
- no accidental temporary debug code
- no stray screenshots, logs, or junk committed
- no local-only preview config confusion left undocumented

Deploy sanity checklist:
- correct GitHub account
- correct repository
- correct production branch
- Vercel import linked properly
- production URL loads
- key interactions work after deploy
- expected content and assets appear on the live domain, not just locally

Gate:
- deployment is not done until the live URL is manually checked

## Required QA Checklist For Future Sites

Run this before calling the site complete:

- desktop layout sanity
- mobile layout sanity
- no overlapping header and content
- no giant empty sections
- touch interactions work
- form submission works
- route navigation works
- portfolio and archive behavior works
- drawer, accordion, and tab behavior works
- local-vs-production differences are understood
- the team knows how future edits reach production

## Common Failure Patterns

- desktop-only composition with late mobile patching
- oversized mobile cards and overpadded sections
- duplicate review or helper sections
- fake buttons or dead affordances
- hidden content due to animation or hydration mismatch
- LAN mobile preview broken by dev-origin restrictions
- cached phone sessions hiding recent local changes
- wrong GitHub account pushing to the wrong owner or repo
- direct production pushes without branch or account verification

## Recovery Heuristics

When something breaks late in the process, recover in this order:

1. Verify what environment is actually being viewed: local desktop, local LAN phone preview, or production.
2. Verify whether the issue is visual-only or interaction and hydration-related.
3. Reproduce the issue on the smallest possible surface before changing multiple sections.
4. Prefer targeted fixes over wide responsive rewrites.
5. If a previous working state was never committed, reconstruct it deliberately from the approved direction rather than guessing with random reversions.

## Done Standard

A premium marketing or portfolio site is done when:
- direction is approved
- structure is approved
- implementation is modular
- real interactions are tested
- mobile feels intentional
- real contact path works
- deployment path is known
- live verification is complete
