# Refresh Tom Rizky Augustino's Candidate Profile

## Goal

Replace Tom Rizky Augustino's earlier campaign copy with the latest supplied material for candidate number 1 for RW 19 and the 2026–2031 term.

## Preserved Data

- Candidate number `1`
- Current RT/RW fact value `4 / 19`
- House `SA. 3 No 10`
- Profession `Wiraswasta`
- Existing photo and introduction-video URL

## Updated Campaign Data

- Add `term: "2026–2031"`.
- Keep `PAKULARAS` without whitespace as the campaign identity.
- Describe PAKU as building collaboration and togetherness among all residents.
- Describe LARAS as creating harmony among residents, the environment, and one another.
- Replace the candidacy reasons with the latest focus on governance renewal, facility and security innovation, and a clean, safe, healthy, comfortable environment.
- Remove the earlier separate mission list because the latest material supplies programs rather than missions.
- Replace the program list with five programs: technocratic development; communication and transparency; security and cleanliness; community empowerment; and BANK Tumbuh.
- Replace the values with the five latest plain-text values.
- Update election information to the supplied date, time, and `Lapangan Badminton Cluster Sriwijaya` location.
- Replace the two earlier slogan entries with the latest combined slogan.

## Rendering

An optional `term` fact will render as `Periode` in the profile facts. It will not be added to the candidate-card label.

The existing structured sections will render the updated campaign identity, reasons, main ideas, programs, values, and slogan. The optional `Informasi Pemilihan` section will be rendered from `electionInfo`. Because the mission array is empty, the mission section will not appear.

All new content will continue through the existing HTML-escaping helpers. RT detail behavior and other RW profiles remain unchanged.

## Verification

- Confirm Tom remains candidate number 1 and keeps the current personal and media data.
- Confirm the term fact displays `2026–2031` only in the modal.
- Confirm PAKULARAS, both component explanations, and all three candidacy-reason themes are present.
- Confirm all five latest programs appear, including BANK Tumbuh.
- Confirm the old four-program and mission copy no longer appears for Tom.
- Confirm the five values, election information, and combined slogan render.
- Confirm Roy, the third RW candidate, and all RT profiles retain their current behavior.
- Confirm JavaScript syntax and the resulting diff are valid.
