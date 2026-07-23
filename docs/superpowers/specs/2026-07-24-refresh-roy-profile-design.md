# Refresh Roy Fernando K. Manihuruk's Candidate Profile

## Goal

Replace Roy Fernando K. Manihuruk's shorter campaign profile with the latest detailed purpose, vision, missions, commitments, values, and main message while preserving his existing identity and motto.

## Preserved Data

- Candidate number `2`
- RT/RW fact value `5 / 19`
- House `Blok SB 1 No 25`
- Profession `IT QA Lead`
- Existing photo and introduction-video URL
- Existing motto `Siap Mendengarkan, Siap Melayani, dan Transparan.` as both the candidate-card tagline and closing quote

## Updated Content

- Replace the summary with the latest candidacy purpose: serving as a bridge among residents, the developer, and related parties while building open, transparent, responsive communication.
- Keep the supplied vision and add its explanatory paragraph.
- Replace the six mission entries with the latest detailed wording.
- Replace the short commitment list with five titled commitment entries and their explanations.
- Add five titled leadership values and their explanations.
- Add the supplied resident invitation as a separate `Pesan Utama` section.
- Keep programs and experience empty because the supplied material does not define them.

## Data Structure

The profile will use these additional optional fields:

- `visionDescription`: explanatory text shown with the vision.
- `commitmentDetails`: titled commitment objects with `title` and `description`.
- `valueDetails`: titled value objects with `title` and `description`.
- `mainMessage`: the separate resident invitation.

The earlier `focusAreas`, short `commitments`, and short value arrays will be removed from Roy's record to prevent duplicate content.

## Rendering

The vision renderer will show the vision statement and optional explanatory paragraph in one section. Titled reusable sections will render `Komitmen Utama` and `Nilai-Nilai yang Diusung`. An optional text section will render `Pesan Utama` before the preserved motto quote.

The new optional fields count as structured-profile data so empty program and experience sections remain hidden. All strings continue through the existing HTML-escaping helpers. Tom's profile, the third RW candidate, and simplified RT profiles remain unchanged.

## Verification

- Confirm Roy remains candidate number 2 and all preserved identity/media values remain unchanged.
- Confirm the old motto remains both the card tagline and closing quote.
- Confirm the latest purpose, vision explanation, six missions, five detailed commitments, five detailed values, and main message render.
- Confirm short duplicate focus, commitment, and value sections do not render.
- Confirm empty program and experience sections remain hidden for Roy.
- Confirm Tom, the third RW candidate, and all RT profiles retain their current behavior.
- Confirm new structured text is HTML-escaped.
- Confirm JavaScript syntax and the resulting diff are valid.
