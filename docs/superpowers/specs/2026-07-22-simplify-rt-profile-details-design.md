# Simplify RT Candidate Profile Details

## Goal

Limit every RT candidate modal to essential identity information while keeping the complete RW candidate profiles unchanged.

## RT Modal Content

RT candidate modals will display only:

- Candidate photo
- Role, area, and name
- Verification status and source
- Profile summary
- Profile facts: domicile, profession, category, and RT/RW area

The following extended content will not render for RT candidates:

- Campaign identity
- Reasons or main ideas
- Focus areas
- Vision
- Introduction video
- Mission
- Program
- Values or commitments
- Election information
- Campaign slogans
- Experience
- Quote

## Data Handling

No RT candidate data will be removed from `data.js`. The modal renderer will decide which content to show based on `candidate.category`. This preserves the source data and allows the complete profile to be restored later without re-entering content.

## RW Behavior

RW candidates continue to use the existing complete and structured profile rendering, including candidate numbers and optional campaign sections. Candidate cards for both RT and RW remain unchanged.

## Implementation

The modal renderer will normalize the category value and compute whether extended detail is allowed. The common photo, identity, summary, and fact markup remains shared. All markup after the facts will be conditionally emitted only for non-RT candidates.

## Verification

- Confirm all four RT candidate modals show photo, identity, summary, and facts.
- Confirm none of the extended section headings or quote content appears in any RT modal.
- Confirm Tom and Roy retain their complete structured RW profiles.
- Confirm the third RW candidate retains the existing legacy fallback sections.
- Confirm RT source data remains unchanged.
- Confirm JavaScript syntax and the resulting diff are valid.
