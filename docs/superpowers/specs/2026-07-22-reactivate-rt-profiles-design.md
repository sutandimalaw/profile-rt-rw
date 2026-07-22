# Reactivate RT Profiles

## Goal

Restore the four RT candidate profiles (RT 01–04) that are currently hidden, while retaining the existing publication-control mechanism for future use.

## Scope

- Make RT candidates eligible for rendering by clearing the `publication.hiddenCategories` list in `data.js`.
- Update the hero copy, candidate summary, and candidate-section heading in `index.html` so the page consistently describes both RT and RW candidates.
- Keep the existing candidate data, filters, cards, modal behavior, and responsive styles unchanged.

## Design

`visibleCandidates()` remains the single publication filter. With no hidden categories configured, it returns all seven candidate records. The existing rendering flow then derives the visible filters from those records, renders RT 01–04 and RW filter buttons, and supplies the same visible candidate set to the card grid and mini-candidate strip.

No filtering logic will be deleted or bypassed. If a category needs to be hidden again, it can still be added to `publication.hiddenCategories` without changing application code.

## Content Changes

- Hero introduction will invite residents to learn about RT and RW candidates.
- The hero candidate fact will read `RT & RW`.
- The candidate section heading will read `Profil kandidat RT/RW`.
- The temporary message saying RT profiles are hidden will be replaced with neutral copy explaining that residents can filter profiles by RT/RW area.

## Error Handling

Existing fallbacks for incomplete candidate fields and missing photos remain in place. This restoration does not change candidate verification status or invent missing profile information.

## Verification

- Confirm `publication.hiddenCategories` contains no hidden category.
- Confirm all four RT filters and the RW filter are rendered.
- Confirm the page can render all seven candidate cards under the `Semua` filter.
- Confirm each RT filter shows its matching candidate and the RW filter shows the three RW candidates.
- Confirm candidate detail buttons still open the correct modal.
- Confirm no page copy says that RT profiles are hidden or that only RW candidates are available.
