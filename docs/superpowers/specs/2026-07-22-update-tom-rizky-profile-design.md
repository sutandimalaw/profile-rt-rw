# Update Tom Rizky Augustino's Candidate Profile

## Goal

Replace the placeholder profile for Tom Rizky Augustino with the complete supplied campaign material for candidate number 1 for RW 19, while keeping all other candidate profiles unchanged.

## Content Rules

- Use `Tom Rizky Augustino` as the display name.
- Use `Calon Ketua RW 19` as the role and `RW 19` as the represented area.
- Display candidate number `1` on the candidate card and in the modal facts.
- Write the campaign identity as `PAKULARAS` without a space everywhere it appears.
- Preserve both campaign slogans.
- Do not invent professional history or experience that was not supplied.

## Candidate Data

The existing fields will be populated as follows:

- `tagline`: PAKULARAS and its Paguyuban Kuat, Keselarasan & Harmoni description.
- `summary`: the motivation for transparent, responsive, modern governance and a clean, safe, healthy environment.
- `vision`: Paguyuban Kuat, Keselarasan & Harmoni untuk Sriwijaya yang Lebih Baik.
- `missions`: the four campaign pillars: communication and transparency, human-resource development, security and cleanliness, and community empowerment.
- `programs`: the concrete work plans under those four pillars.
- `experience`: empty because no experience history was supplied.
- `quote`: empty because both slogans will appear together in a dedicated section.

Optional structured fields will be added for:

- `candidateNumber`
- `campaignTheme`
- `reasons`
- `mainIdeas`
- `values`
- `electionInfo`
- `slogans`

Reasons and main ideas use titled entries so each heading and explanation remain visually connected. Election information stores the supplied date, time, and location.

## Rendering

The card will show a `Nomor 1` pill next to the existing data-status pill when `candidateNumber` is available.

The modal will render the candidate number as an optional profile fact. It will add optional reusable sections for campaign identity, reasons for candidacy, main ideas, values, election information, and campaign slogans. New content will pass through the existing HTML escaping helper.

The standard vision, mission, program, and experience sections will render only when their fields contain content. This hides the empty experience section for Tom while preserving every existing non-empty section for other candidates. The quote block will likewise render only when a real quote exists.

## Styling

Existing card, pill, fact-grid, section, and list styles will be reused. Titled list entries may receive a small focused rule for readable title-and-description spacing. No page layout redesign is included.

## Verification

- Confirm Tom remains the first RW candidate and has candidate number 1.
- Confirm every supplied campaign section and both slogans are present in the data.
- Confirm `PAKULARAS` has no whitespace in every occurrence.
- Confirm Tom's empty experience and quote placeholders do not render.
- Confirm candidate cards and modal content escape supplied strings.
- Confirm other candidate data is unchanged.
- Confirm JavaScript syntax and the resulting diff are valid.
