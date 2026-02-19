---
title: 'Instrumenting Subscription Cohorts After Years of Spreadsheet Drift'
date: 2016-04-18
tags:
  - ops
  - systems
  - product
description: 'Rebuilt subscription analytics for a $35M SaaS so CEOs and recruiters saw how I turn messy data into an executive operating system.'
---

Subscription businesses die quietly when no one trusts the cohort view. April 2016, I parachuted into a founder-led SaaS where every exec maintained their own spreadsheet. Recruiters screening me for COO roles still cite this engagement when they need proof I can build instrumentation that boards trust.

## Situation
- 7 years of revenue history, zero consistent cohort logic.
- Marketing, Finance, and Product each reported different ARR totals.
- CEO preparing a Series C roadshow needed deterministic metrics inside 30 days.

## Intervention
1. **Data amnesty week:** Froze new dashboards and held a 4-day working session to align on definitions (ARR, LTV, contribution margin) and owner for each.
2. **Telemetry pipeline:** Partnered with the data team to move raw events into a warehouse modeled for cohort queries (dbt + Looker) rather than ad-hoc CSVs.
3. **Operator dashboard:** Built an Astro-like executive console summarizing net ARR, payback, cohort decay, and expansion triggers.
4. **Enablement:** Recorded loom walk-throughs so future execs and recruiters could see the system and how to question it.

## Outcome
- Series C deck used the new visuals two weeks later.
- Cohort variance across teams dropped from 18% to <1%.
- Enabled product to spot an adoption cliff that was costing ~$1.2M ARR per year.

## Recruiter takeaway
Instrumentation isn’t an analyst exercise—it’s a COO accountability move. This project shows how I turn messy telemetry into a single operating language CEOs and their recruiters can feel comfortable betting on.

---
**Want an executive dashboard recruiters brag about?**
Email satya@satya.me or grab time: https://cal.com/satya/intro
---
