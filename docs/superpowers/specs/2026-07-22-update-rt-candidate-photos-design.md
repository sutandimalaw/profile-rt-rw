# Update RT Candidate Photos

## Goal

Replace the four RT candidate photo references with the latest numbered PNG assets supplied for RT 01–04.

## Mapping

- RT 01: `assets/rt01.png`
- RT 02: `assets/rt02.png`
- RT 03: `assets/rt03.png`
- RT 04: `assets/rt04.png`

## Design

Only each RT candidate's `photo` field in `data.js` will change. The existing rendering path will continue to use that field for both candidate cards and profile modals. Candidate names, IDs, profile content, RW photos, layout, and image-rendering behavior remain unchanged.

Static explicit paths are preferred because the candidate list is data-driven and contains only four RT records. No automatic filename lookup or asset renaming is needed.

## Error Handling

The existing photo fallback remains unchanged. Before completion, every configured RT photo path must resolve to an existing, valid image file.

## Verification

- Confirm all four mapped PNG assets exist.
- Confirm all four assets are valid images with matching dimensions.
- Confirm every RT candidate references its matching numbered PNG.
- Confirm no RW candidate photo reference changes.
- Confirm `data.js` remains valid JavaScript and the resulting diff contains no whitespace errors.
