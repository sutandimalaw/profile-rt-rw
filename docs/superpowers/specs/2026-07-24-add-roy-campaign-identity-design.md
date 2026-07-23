# Add Roy's Campaign Identity

## Goal

Display Roy Fernando K. Manihuruk's existing motto as a prominent campaign identity in his profile modal.

## Data

Add a `campaignTheme` object to Roy's candidate record:

- `title`: `Siap Mendengarkan, Siap Melayani, dan Transparan`
- `description`: empty

The campaign identity title intentionally omits terminal punctuation. Roy's existing tagline and closing quote remain unchanged, including their current punctuation.

## Rendering

The existing reusable `campaignThemeSection()` renderer will display the title under `Identitas Kampanye`. Because the description is empty, no supporting paragraph will appear.

The section will use the existing campaign-identity styling and wrapping behavior. No renderer or CSS change is required.

## Scope

No other Roy profile content, candidate data, card behavior, or other candidate profile will change.

## Verification

- Confirm Roy's modal displays `Identitas Kampanye` with the exact approved title.
- Confirm no description paragraph appears in that section.
- Confirm Roy's existing tagline, closing quote, and main message remain unchanged.
- Confirm Tom's PAKULARAS identity and all other candidate behavior remain unchanged.
- Confirm JavaScript syntax and the resulting diff are valid.
