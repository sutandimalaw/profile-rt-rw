# Update Roy Fernando K. Manihuruk's Candidate Profile

## Goal

Replace the placeholder profile for Roy Fernando K. Manihuruk with the supplied campaign material for candidate number 2 for RW 19, while preserving his existing verified personal and media data.

## Preserved Data

- House: `Blok SB 1 No 25`
- Profession: `Lead QA Engineer di perusahaan sekuritas`
- Existing photo path
- Existing introduction-video URL
- Source and verification status

## Updated Candidate Data

- Set the role to `Calon Ketua RW 19`, represented area to `RW 19`, and candidate number to `2`.
- Use `Siap Mendengarkan, Siap Melayani, dan Transparan.` as both the card tagline and profile motto.
- Use the supplied candidacy purpose as the profile summary.
- Add the three focus areas: communicative, transparent, and responsive to residents' needs.
- Replace the placeholder vision with the supplied vision.
- Use the six supplied mission statements after removing invisible formatting characters.
- Add the five supplied commitments with their icons.
- Do not show program or experience sections because no such data was supplied.

## Rendering

The existing candidate-number behavior will display `Nomor 2` on the card and `Nomor Urut 2` in the modal facts.

Two optional reusable arrays will be supported:

- `focusAreas`, rendered under `Fokus Utama`.
- `commitments`, rendered under `Komitmen`.

These fields also identify Roy's profile as structured, so empty program and experience sections will not render. Candidates without these fields retain their current rendering and fallbacks. All new strings continue through the existing HTML-escaping path.

## Styling

The new sections reuse the existing list and modal styles. No new page layout or candidate-card styling is required.

## Verification

- Confirm Roy remains the second RW candidate and displays candidate number 2.
- Confirm the existing house, profession, photo, and video remain unchanged.
- Confirm the motto, purpose, three focus areas, vision, six missions, and five commitments are present.
- Confirm no stale placeholder or misspelled motto remains in Roy's data.
- Confirm empty program and experience sections do not render for Roy.
- Confirm other candidate profiles keep their existing rendering.
- Confirm supplied text is escaped in the generated modal.
- Confirm JavaScript syntax and the resulting diff are valid.
