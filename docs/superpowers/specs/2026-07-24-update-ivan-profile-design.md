# Update Ivan RW Candidate Profile Design

## Context

The site already has an RW candidate record for Ivan Firman Panjaitan, but most of the profile content is still placeholder text.

The user provided updated campaign material for Pak Ivan and confirmed that "RW 03" should be treated as candidate number 3 for the RW election sequence.

## Decision

Update the existing `ivan-firman-panjaitan-rw` record in `data.js` instead of adding a new candidate.

The profile should present Pak Ivan as:

- Ivan Firman Panjaitan
- Calon Ketua RW 19
- Nomor Urut 3
- Period 2026-2031
- Photo: `assets/Ivan.jpeg`

## Content Structure

Use the existing structured profile fields so the modal stays consistent with Pak Tom and Pak Roy:

- `tagline`: use the flyer headline message.
- `summary`: summarize Ivan's campaign around experience, program continuity, positive RT competition, security, cleanliness, transparent communication, and resident togetherness.
- `reasons`: convert the two candidacy reasons into titled items.
- `programs`: use the three work-plan themes from the attachment.
- `commitmentDetails`: use the four main commitments.
- `valueDetails`: use the resident benefits as titled items.
- `mainMessage`: use the invitation for residents to build a guarded, clean, comfortable, open, and harmonious Cluster Sriwijaya.
- `electionInfo`: use the same election day, time, and location from the attachment.
- `slogans`: include "Ayo Bersama!" and "Satu suara, satu perubahan, untuk kita semua!"

Do not add `vision` or `missions` content that is not explicitly present in the provided material.

## Non-Goals

- Do not change Pak Tom or Pak Roy data.
- Do not change RT profile behavior.
- Do not alter modal rendering logic.
- Do not add new UI sections.

## Verification

Verify that:

- `data.js` passes JavaScript syntax checks.
- Pak Ivan's modal includes candidate number 3, reasons, programs, commitments, benefits, election information, and slogans.
- Pak Tom remains `PAKULARAS`.
- Pak Roy keeps the old motto and campaign identity ordering.
- RT details remain simplified.
