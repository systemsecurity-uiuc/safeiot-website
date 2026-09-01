# SafeIoT Hackathon — Project Submission Form

Google Form #2 of 2. Opens closer to the deadline, closes 11:59pm, November 30th, 2026 (AoE).

**Single page.** The four headings below are visual groupings only — do not use "Add section", which forces a page break in Google Forms.

---

## Form header

**Title:** SafeIoT Hackathon — Project Submission

**Description:**
> Submit your project for the SafeIoT Hackathon. Submissions close at **11:59pm on November 30th, 2026, Anywhere on Earth (AoE)**.
> A complete submission has three parts: a **scientific paper (PDF)**, a **pitch video (max 5 minutes)**, and a **public code repository**.
> **One submission per team.** The primary contact submits on behalf of the whole team — please don't submit the same project more than once.
> You do not need to have registered earlier to submit.
> You can edit your response until the deadline — submit early and refine as you go.
> Questions: sdiotsec@gmail.com

---

## Team & contact

*Add as a "Title and description" block (the **Tt** icon in the side toolbar) — not a section.*

### 1. Team name
- Type: Short answer
- Required: Yes
- Help text: `If you're submitting solo, just use your own name.`

### 2. Primary contact — full name
- Type: Short answer
- Required: Yes

### 3. Primary contact — affiliation
- Type: Short answer
- Required: Yes

### 4. All team members
- Type: Paragraph
- Required: Yes
- Help text: `One per line, in the format: Full name — affiliation — email. Include yourself. Teams may have up to 4 members. Your teammates should not fill in this form separately — you are submitting on behalf of the whole team.`

---

## Project overview

*Add as a "Title and description" block (the **Tt** icon in the side toolbar) — not a section.*

### 5. Track
- Type: Multiple choice
- Required: Yes
- Options:
  - Track 1 — IoT Vulnerability Detection
  - Track 2 — IoT SBOM, CBOM, and AI-BOM Verification

### 6. Project / tool name
- Type: Short answer
- Required: Yes

### 7. One-sentence summary
- Type: Short answer
- Required: Yes
- Help text: `Max ~200 characters. This is what we'll use to introduce your project.`

### 8. Division of labor
- Type: Paragraph
- Required: Yes
- Help text: `One line per team member: who was responsible for what. If you're submitting solo, just write "solo submission".`

---

## Submission materials

*Add as a "Title and description" block (the **Tt** icon in the side toolbar) — not a section.*

### 9. Scientific paper (PDF)
- Type: **File upload**
  - Allowed file types: **PDF only**
  - Maximum number of files: **1**
  - Maximum file size: **10 MB**
- Required: Yes
- Help text: `Main body must not exceed 5 pages; including references and appendices, no more than 7 pages. Double-column ACM format — see https://www.acm.org/publications/proceedings-template (simpler version: https://github.com/acmccs/format).`

### 10. Pitch video URL
- Type: Short answer + URL validation
- Required: Yes
- Help text: `Max 5 minutes. YouTube, Vimeo, or a shared Drive link — please make sure it is viewable without requesting access. You must use the official slides template: https://docs.google.com/presentation/d/1Spw4jJY4EMfca-S9v5YgR1F6E7alMJ3g0vhYLiVTcyE`

### 11. Repository URL
- Type: Short answer + URL validation
- Required: Yes
- Help text: `Must be publicly accessible by the submission deadline. GitHub, GitLab, or equivalent. We recommend a permissive open-source license (MIT, Apache 2.0, or BSD).`

### 12. What's in your repository?
- Type: Checkboxes
- Required: Yes
- Options:
  - Setup and usage instructions
  - Reproducibility instructions for running the evaluation
  - Example input artifacts (for Track 2: sample SBOM / CBOM / AI-BOM files)
  - Baseline tools or scripts used for comparison
  - Documentation on how to extend it (new devices, formats, verification rules, or test cases)
  - An open-source license file

### 13. Anything else the judges should know?
- Type: Paragraph
- Required: No
- Help text: `Known limitations, what you'd build next, or anything that didn't fit above.`

---

## Eligibility & consent

*Add as a "Title and description" block (the **Tt** icon in the side toolbar) — not a section.*

### 14. Originality & rights
- Type: Checkboxes (single required checkbox)
- Required: Yes
- Option: `The paper and code we are submitting are our team's own work, and we have the right to release the code under an open-source license.`

### 15. Paper publication consent
- Type: Checkboxes (single required checkbox)
- Required: Yes
- Option: `We understand that, to qualify for an award, our paper will be made publicly available by the hackathon organizers.`

### 16. Integration agreement
- Type: Checkboxes (single required checkbox)
- Required: Yes
- Option: `If selected for an award, we agree to deploy our tool and artifacts as open-source components in the SafeIoT CI/CD pipeline, under a permissive open-source license (e.g. MIT, Apache 2.0, or BSD).`

---

## Form settings

- Collect email addresses: **Verified** — this is a setting, not a question. Settings tab → Responses → Collect email addresses.
  Forms adds the email box at the top of the form by itself; do not create an email question. "Verified" is fine here because the PDF upload already requires a Google account.
- Restrict to users in a domain: **off**
- Allow response editing: **on**
- Send responders a copy of their response: **on (Always)**
- File upload questions: **only question 9** (PDF, 1 file, 10 MB) — uploads go to the form owner's Drive, so build this form under a project account rather than a personal one
- Layout: one page. Group headings are "Title and description" blocks, not sections
- Responses: link to a Google Sheet — this doubles as the judging sheet; add one scoring column per
  evaluation criterion to the right of the response columns and share it with the judges
- Closing: turn off "Accepting responses" at the deadline (AoE = UTC−12)

- Publishing: the form is a draft until you click **Publish**. In the Publish dialog set the audience to **Anyone with the link**.
  The link to put on the website is the **responder link** (`https://docs.google.com/forms/d/e/<FORM_ID>/viewform`) — never the `/edit` URL from your address bar.
  You can keep editing after publishing; the responder link stays the same and edits go live immediately.
  Do not publish until the submission requirements are final — publishing starts accepting submissions.

**Confirmation message** — Settings tab → Presentation → Confirmation message → Edit.
Plain text only; paste the lines below without the leading `>`.

> Submission received. You'll get a copy of your response by email — keep it as your receipt.
> Need to change something? Use the edit link in that email rather than filling in the form again — one submission per team.
> You can edit your submission until 11:59pm, November 30th, 2026 (AoE). Results will be announced by email.
