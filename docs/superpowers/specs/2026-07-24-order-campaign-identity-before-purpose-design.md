# Order Campaign Identity Before Purpose Design

## Context

The RW candidate modal supports structured profile sections such as campaign identity, candidacy purpose, vision, mission, commitments, values, and election information.

Pak Roy now has a campaign identity:

> Siap Mendengarkan, Siap Melayani, dan Transparan

The user requested this identity to appear above "Tujuan Mencalonkan Diri". Pak Tom's current profile is already correct and must not be changed.

## Decision

Move the shared modal rendering order so `Identitas Kampanye` appears before `Tujuan Mencalonkan Diri`.

This is a renderer-order change only:

- Do not change Pak Tom's data.
- Do not change Pak Roy's motto text.
- Do not change RT detail behavior; RT profiles still omit extended vision/mission style sections.
- Keep the existing campaign identity component and styling.

## Alternatives Considered

1. Apply a Roy-only conditional order.
   This is narrowly scoped but adds candidate-specific branching to shared modal rendering.

2. Reorder with CSS.
   This would make the visual order differ from the HTML/source order, making the modal harder to maintain.

3. Reorder the shared renderer.
   This keeps the data model clean, keeps markup order honest, and currently affects only profiles that have both campaign identity and purpose content. This is the chosen approach.

## Implementation Notes

In `script.js`, change the `extendedProfileContent` template order from:

1. `Tujuan Mencalonkan Diri`
2. `Identitas Kampanye`

to:

1. `Identitas Kampanye`
2. `Tujuan Mencalonkan Diri`

## Verification

Verify that:

- Pak Roy's modal renders `Identitas Kampanye` before `Tujuan Mencalonkan Diri`.
- Pak Tom's profile content remains unchanged.
- RT modal details still omit extended profile sections.
- `data.js` and `script.js` pass JavaScript syntax checks.
