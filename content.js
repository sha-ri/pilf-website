/* propertyinsurance.law — site content model.
   Loaded as a plain script; assigns window.PIL_CONTENT.
   Copy drawn from the Full-Site Overhaul doc, with the "switched sides"
   positioning kept firm-neutral (only Shari Freeman's bio carries the
   former-defense-attorney angle). [BRACKETS] are intentional fill-ins. */
(function () {
  var R = 'Get a Free Claim Review';

  // ---- Property Claims (data-driven article pages) ----
  var claims = {
    'denied': {
      nav: 'Denied Claims', icon: 'shield-x',
      eyebrow: 'Denied Claims',
      h1: 'Denied Insurance Claims',
      tagline: 'The denial letter is the carrier\u2019s opening argument, not a verdict.',
      intro: [
        'You paid the premiums, reported the loss, and let the adjuster walk the property. Then the letter arrived: not covered. Wear and tear. Pre-existing. Excluded. Reading it feels final, because it is written to feel final. It is not. A denial is a position, assembled by people with a financial interest in the outcome, and positions can be tested.',
        'We have read hundreds of files like the one your carrier just built, which means we know where the shortcuts live: the inspection that never reached the back slope, the engineering report written from photographs, the exclusion stretched past its language. Testing a denial starts with finding those seams, and that is the first thing we do.'
      ],
      sections: [
        { heading: 'How Carriers Build a Denial', type: 'named', body: [
          { term: 'The rushed inspection.', desc: 'A twenty-minute walkthrough becomes the factual record. Damage that was never examined becomes damage that "does not exist."' },
          { term: 'The convenient cause.', desc: 'Storm damage becomes wear and tear; a sudden pipe failure becomes long-term seepage. The label changes, and coverage disappears with it.' },
          { term: 'The stretched exclusion.', desc: 'Policy exclusions are read broadly by the people invoking them, even when the language is narrower than the letter admits.' },
          { term: 'The conditions trap.', desc: 'Late notice, insufficient documentation, missed inspections: procedural defenses raised whether or not the carrier can actually carry its burden on them.' },
          { term: 'The desk-adjusted estimate.', desc: 'Someone who never saw the property overrides the person who did.' }
        ]},
        { heading: 'How We Test Your Denial', type: 'para', body: [
          'We start with three documents: your policy, the denial letter, and the carrier\u2019s claim file, to whatever extent your policy and your state allow access to it. We compare what the denial claims against what the file actually contains. Then we build the record the carrier should have built: independent inspections, engineering review where causation is disputed, contractor-level pricing, and the timeline that answers any conditions defense. When the record is ready, the carrier answers to it, in negotiation, appraisal, mediation, or suit. Many denials do not survive contact with a complete file.'
        ]}
      ],
      steps: [
        'Keep the denial letter and every enclosure; the cited provisions are our starting map.',
        'Do not repair beyond what safety requires until the damage is documented, and keep receipts for what you must do.',
        'Photograph everything, dated, wide and close.',
        'Do not give further recorded statements before speaking with counsel.',
        'Send us the letter. The review is free, and deadlines run whether or not you act.'
      ],
      faqs: [
        { q: 'Can a denied claim really be reversed?', a: 'Yes, regularly. Denials rest on records, and records can be incomplete, wrong, or contradicted. When the file changes, positions change with it. No outcome is guaranteed, but a denial is a beginning, not an end.' },
        { q: 'How long do I have to challenge a denial?', a: 'Deadlines come from your policy and your state\u2019s law, they depend on the loss date and the claim\u2019s history, and some are unforgiving. The safe answer everywhere is that sooner matters.' },
        { q: 'What does it cost to hire you?', a: 'Nothing up front. We work on contingency: no fees or costs unless we recover for you, and we explain the agreement in plain terms before you sign anything.' },
        { q: 'Should I accept the carrier\u2019s re-inspection offer?', a: 'Sometimes it helps, sometimes it papers the file against you. Let us look first; the review is free and fast.' }
      ],
      related: [ { label: 'Underpaid Claims', page: 'claim:underpaid' }, { label: 'Delayed Claims', page: 'claim:delayed' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    },

    'delayed': {
      nav: 'Delayed Claims', icon: 'clock',
      eyebrow: 'Delayed Claims',
      h1: 'Delayed Insurance Claims',
      tagline: 'Months of silence is not a backlog. It is a strategy with a clock attached.',
      intro: [
        'Another adjuster reassigned. Another request for documents you already sent. Another "under review." Meanwhile the tarp ages, the water spreads, and the mortgage does not pause. Delay works on carriers\u2019 behalf precisely because it exhausts people, and because every month that passes makes a low offer look more like relief.',
        'The timeline is not the carrier\u2019s alone to set. Your policy and your state\u2019s law put clocks on acknowledgment, investigation, and decision. When those clocks are ignored, the delay itself becomes part of your case, and our job is to make waiting more expensive for the carrier than deciding.'
      ],
      sections: [
        { heading: 'The Delay Playbook, Named', type: 'named', body: [
          { term: 'Adjuster roulette.', desc: 'Each reassignment resets the file review and your patience.' },
          { term: 'The rolling document request.', desc: 'Materials requested one at a time, weeks apart, some already provided.' },
          { term: 'The phantom inspection.', desc: 'Scheduled, missed, rescheduled, and never quite completed.' },
          { term: 'The silent file.', desc: 'No decision, no denial, nothing to appeal. Just time.' }
        ]},
        { heading: 'How We Force a Decision', type: 'para', body: [
          'We put the carrier on a written record: what was submitted, when, and which obligations are now overdue. We deliver whatever notices your state requires before certain remedies become available, set deadlines the file cannot ignore, and escalate to suit when silence continues. Documented delay also shapes everything that follows; carriers negotiate differently once their own timeline is exhibit one.'
        ]}
      ],
      steps: [
        'Start a dated log of every call, email, and promise.',
        'Put every communication in writing from today forward.',
        'Ask, in writing, for the claim\u2019s status and the specific reason for the delay.',
        'Keep mitigating damage and keep the receipts; delay does not pause your duties.',
        'Send us the timeline. Stalled claims move when the file shows someone is counting.'
      ],
      faqs: [
        { q: 'How long is too long?', a: 'Every state sets outer limits; practically, if you cannot get a straight written answer about status and timing, the delay has already crossed the line worth examining.' },
        { q: 'Will hiring a lawyer slow things down?', a: 'The opposite, usually. Represented files acquire deadlines. Carriers know which files can turn into lawsuits and treat them accordingly.' },
        { q: 'The carrier keeps asking for more documents. Do I have to comply?', a: 'You have cooperation duties, and we help you meet them without letting document requests become the delay itself. Reasonable compliance, on a record, on a schedule.' },
        { q: 'What does it cost?', a: 'Contingency only. No fees or costs unless we recover for you.' }
      ],
      related: [ { label: 'Denied Claims', page: 'claim:denied' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' }, { label: 'FAQ', page: 'faq' } ]
    },

    'underpaid': {
      nav: 'Underpaid Claims', icon: 'banknote',
      eyebrow: 'Underpaid Claims',
      h1: 'Underpaid Insurance Claims',
      tagline: 'When the check and the contractor\u2019s estimate show a large gap, we fight for fair claim payments based on facts.',
      intro: [
        'The carrier did not say no. It said yes, minus the roof slopes it did not inspect, the code upgrades it priced at zero, the depreciation it took twice, and the drywall it measured by hope. Underpayment is quieter than denial and often costs policyholders more, because a partial check feels like an answer. Cash it if you need to, after confirming nothing on it reads like a release, but understand what it is: the carrier\u2019s first number.',
        'We audit that number line by line, reading an insurance estimate the way its software wrote it: scope, quantities, unit pricing, depreciation, overhead and profit. The gap between the carrier\u2019s math and the real cost of repair is rarely an accident, and it is always our target.'
      ],
      sections: [
        { heading: 'Where the Money Goes Missing', type: 'named', body: [
          { term: 'Scope.', desc: 'Whole categories of damage never make the estimate: the second slope, the interior water staining, the fence, the detached structure.' },
          { term: 'Quantities and pricing.', desc: 'Square footage rounded down, regional pricing ignored, labor minimized.' },
          { term: 'Depreciation.', desc: 'Applied aggressively, sometimes to items that should not depreciate at all.' },
          { term: 'Code and matching.', desc: 'Repairs priced as patches when building codes, matching rules where your state has them, or your policy\u2019s own terms demand more.' },
          { term: 'Overhead, profit, and the general contractor question.', desc: 'Multi-trade repairs priced as if no one has to coordinate them.' }
        ]},
        { heading: 'How We Recover the Difference', type: 'para', body: [
          'We rebuild the estimate with the people who will actually do the work: contractors, roofers, and estimators, alongside your public adjuster where you have one. We document the full scope, price it to the local market, and present the carrier with a supplement it must answer on the merits. Where the dispute is purely about amount, appraisal can resolve it faster than litigation; where the carrier\u2019s conduct went further, we go further too.'
        ]}
      ],
      steps: [
        'Get an independent repair estimate from a contractor you choose.',
        'Ask the carrier for its complete estimate, including the pricing detail, not just the summary page.',
        'Do not sign anything marked release or final before counsel reads it.',
        'Keep every invoice for work already done.',
        'Send us both estimates. Comparing them is the fastest free diagnosis in this field.'
      ],
      faqs: [
        { q: 'The carrier already paid something. Is the claim over?', a: 'Usually not. Accepting a payment is not automatically accepting it as full payment; what you signed and what your policy says control, so let us read both. Supplemental claims are how underpayments get corrected.' },
        { q: 'My contractor\u2019s estimate is double the carrier\u2019s. Who is right?', a: 'That gap is exactly what we investigate. Often the answer is scope: the carrier priced a different, smaller repair than the one your property needs.' },
        { q: 'Do I need a public adjuster or a lawyer?', a: 'They do different work, and we regularly work alongside PAs. If a PA is already involved, we coordinate rather than duplicate.' },
        { q: 'What will this cost me?', a: 'Contingency only. No fees or costs unless we recover for you.' }
      ],
      related: [ { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Appraisal, Explained', page: 'process:appraisal' }, { label: 'Denied Claims', page: 'claim:denied' } ]
    },

    'hurricane': {
      nav: 'Hurricane & Tropical Storm', icon: 'hurricane',
      eyebrow: 'Hurricane & Tropical Storm',
      h1: 'Hurricane and Tropical Storm Damage Claims',
      tagline: 'The storm took hours. The claim should not take years.',
      intro: [
        'A hurricane loss is never one loss. It is the roof, then the water that followed the roof, then the fence, the screen enclosure, the flooring, the drywall, the electronics, and the weeks your family or business spent displaced. Carriers know storm claims sprawl, and their counter is to shrink them: one slope repaired instead of a roof system, "wear and tear" stamped on wind damage, interior water attributed to anything but the opening the wind created.',
        'We know what a real wind-damage inspection looks like, and how carrier engineers and contractors assemble the reports insurers rely on, which is why we notice when your claim did not get one.'
      ],
      sections: [
        { heading: 'Where Hurricane Claims Go Wrong', type: 'named', body: [
          { term: 'Causation games.', desc: 'Wind versus wear, wind versus flood, storm versus "pre-existing." The label decides coverage, so the label gets fought.' },
          { term: 'The single-trade estimate.', desc: 'A roof number that ignores interiors, contents, code upgrades, and additional living expense.' },
          { term: 'Hurricane deductibles misapplied.', desc: 'Percentage deductibles calculated or applied incorrectly.' },
          { term: 'The clock.', desc: 'Hurricane claims often carry shortened notice and filing deadlines under policies and state law, and carriers rarely volunteer them.' }
        ]},
        { heading: 'How We Build a Storm Claim', type: 'para', body: [
          'Full-property documentation, not a drive-by: every slope, every elevation, every room, moisture readings, and the weather data tying damage to the event. Engineering review where the carrier claims the wind was innocent. Pricing that includes what rebuilding actually requires, including code-driven work and displacement costs your policy covers. Then a demand the carrier has to answer, and litigation when it will not.'
        ]}
      ],
      steps: [
        'Report the loss promptly if you have not; the deadlines are real.',
        'Photograph everything before and after emergency repairs.',
        'Tarp, dry, and protect (your policy requires mitigation), and keep every receipt.',
        'Track displacement costs: hotels, meals, mileage.',
        'Send us the carrier\u2019s response, or the silence. Either tells us where you stand.'
      ],
      faqs: [
        { q: 'The adjuster spent fifteen minutes here. Is that normal?', a: 'It is common, which is different from adequate. Short inspections produce short estimates; a full independent inspection routinely finds what a fifteen-minute visit did not.' },
        { q: 'My claim mixes wind and water. Why does that matter?', a: 'Because different policies (and sometimes different insurers) cover each, and carriers assign damage to whichever answer costs them less. Untangling causation is core hurricane-claim work.' },
        { q: 'Is it too late from a storm two years ago?', a: 'Possibly not, but hurricane deadlines are strict and vary by state and policy. Ask now rather than guess.' }
      ],
      related: [ { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Water Damage', page: 'claim:water' }, { label: 'Wind & Hail', page: 'claim:wind-hail' } ]
    },

    'wind-hail': {
      nav: 'Wind & Hail', icon: 'wind',
      eyebrow: 'Wind & Hail',
      h1: 'Wind and Hail Damage Insurance Claims',
      tagline: '"Cosmetic" is the most expensive word in roofing.',
      intro: [
        'Hail bruises shingles in ways cameras barely capture and carriers love to dismiss. Wind creases and lifts shingles that look fine from the driveway and fail in the next storm, and straight-line winds and derechos do the same work at hurricane scale without a hurricane\u2019s name. These claims turn on physical evidence read correctly.',
        'We know how carrier engineers describe hail and wind damage when they want it to be nothing, and we know what a slope-by-slope inspection shows when someone actually climbs.'
      ],
      sections: [
        { heading: 'The Standard Playbook Against Wind and Hail Claims', type: 'named', body: [
          { term: '"Cosmetic only."', desc: 'Granule loss and bruising framed as appearance, not function.' },
          { term: '"Mechanical damage."', desc: 'Storm impact reattributed to foot traffic or installation.' },
          { term: '"Repairable."', desc: 'A handful of shingles swapped on a roof that no longer matches, seals, or complies with applicable code.' },
          { term: 'The date game.', desc: 'Damage assigned to an older storm outside the claim.' }
        ]},
        { heading: 'How We Prove the Storm', type: 'para', body: [
          'Slope-by-slope photographic documentation with test squares where appropriate; weather and hail-swath data matched to your address and date of loss; roofer and engineer opinions on functional damage, uplift, and seal failure; and pricing that reflects replacement when repair cannot restore the roof the policy promised. When the fight is causation, we bring the file that answers it.'
        ]}
      ],
      steps: [
        'Get a reputable roofer\u2019s inspection with photos of every slope.',
        'Note the storm date; neighborhood damage and news reports help fix it.',
        'Do not accept a "cosmetic" verdict delivered from the ground.',
        'Keep any repair invoices and the carrier\u2019s estimate.',
        'Send us the photos and the estimate for a free comparison.'
      ],
      faqs: [
        { q: 'The carrier\u2019s engineer said no hail damage. Now what?', a: 'Engineering opinions are evidence, not verdicts, and they can be tested on methodology: what was inspected, measured, and photographed. Competing qualified opinions change outcomes.' },
        { q: 'My roof is fifteen years old. Does that end the claim?', a: 'Age affects valuation, not causation. An older roof damaged by hail is still a hail loss, though policy-specific roof schedules can change the payout math, which is exactly what we read first.' },
        { q: 'Repair or replace: who decides?', a: 'The policy, the damage, and applicable requirements decide, not preference. Our job is holding the decision to those standards.' }
      ],
      related: [ { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'roof': {
      nav: 'Roof Damage', icon: 'house',
      eyebrow: 'Roof Damage',
      h1: 'Roof Damage Insurance Claims',
      tagline: 'Repair versus replace is where roof claims are won and lost.',
      intro: [
        'Nothing in property insurance is fought harder than the roof. Carriers see the largest line item on the estimate; homeowners see the thing standing between their family and the next storm. The dispute almost always reduces to three questions: what caused the damage, how far does it extend, and does fixing it properly mean patching or replacing.',
        'We answer all three with evidence, and we speak the language those answers are written in: uplift, seal integrity, matching, code triggers, depreciation.'
      ],
      sections: [
        { heading: 'The Roof Claim Battleground', type: 'named', body: [
          { term: 'Cause:', desc: 'storm versus age, the argument we address slope by slope rather than adjective by adjective.' },
          { term: 'Extent:', desc: 'the estimate that counts twelve shingles on a roof with two damaged slopes.' },
          { term: 'Method:', desc: 'patch pricing on a roof that code, matching, or manufacturer requirements say must be replaced.' },
          { term: 'Money:', desc: 'depreciation applied to push actual cash value toward zero.' }
        ]},
        { heading: 'How We Build a Roof Claim', type: 'para', body: [
          'Licensed roofer documentation of every slope and penetration; engineering opinions when causation is contested; a replacement analysis under applicable code, matching rules, and your policy\u2019s own terms; and an estimate priced for the roof you are owed, not the patch the carrier proposed. Then negotiation, appraisal, or suit, on a file built to survive all three.'
        ]}
      ],
      steps: [
        'Do not let anyone perform permanent repairs before documentation is complete; temporary protection only, receipts kept.',
        'Get your own roofer\u2019s slope-by-slope inspection.',
        'Request the carrier\u2019s full estimate, including depreciation detail.',
        'Photograph interior staining now; ceilings tell roof stories.',
        'Send us both estimates for a free line-item comparison.'
      ],
      faqs: [
        { q: 'The carrier approved a repair, but my roofer says replacement. Who wins?', a: 'The evidence does. If repair cannot restore a matching, code-compliant, sealing roof, the policy conversation changes, and that is a case we know how to make.' },
        { q: 'What is actual cash value versus replacement cost on a roof?', a: 'The difference is depreciation, and it is often the whole fight. The details live in your policy\u2019s loss settlement terms; we read them before we argue anything.' },
        { q: 'Will a roof claim raise my premiums?', a: 'Pricing decisions involve many factors, and we will not pretend otherwise. What we can say: not repairing a damaged roof reliably costs more.' }
      ],
      related: [ { label: 'Wind & Hail', page: 'claim:wind-hail' }, { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'water': {
      nav: 'Water Damage', icon: 'droplets',
      eyebrow: 'Water Damage',
      h1: 'Water Damage Insurance Claims',
      tagline: 'Sudden loss or "long-term seepage": one phrase decides everything, so carriers reach for it early.',
      intro: [
        'A supply line lets go at 2 a.m. A water heater fails. The AC drain line backs up into the hallway. Water losses are the most common property claims in the country and among the most reflexively fought, because a single reclassification, sudden and accidental versus gradual seepage, can move the entire loss outside coverage.',
        'The plumbing failed in a moment; the carrier\u2019s letter says it failed over months. That letter is a theory, and theories can be tested.'
      ],
      sections: [
        { heading: 'How Water Claims Get Cut Down', type: 'named', body: [
          { term: 'The seepage stamp.', desc: 'Sudden failures rewritten as slow leaks and maintenance issues.' },
          { term: 'The dry-out discount.', desc: 'Mitigation invoices challenged, tear-out scope minimized.' },
          { term: 'The category confusion.', desc: 'Clean-water pricing on losses that required more.' },
          { term: 'The mold pivot.', desc: 'Resulting mold pushed against caps and exclusions instead of the covered water loss that caused it.' }
        ]},
        { heading: 'How We Prove the Loss', type: 'para', body: [
          'Plumber and leak-detection findings preserved before evidence disappears; moisture mapping that shows the water\u2019s actual footprint; the failed component itself, kept, photographed, and when needed examined by an expert; and pricing that covers real tear-out, drying, and rebuild rather than a fan and a prayer.'
        ]}
      ],
      steps: [
        'Stop the water, then keep the failed part. Do not discard the pipe, valve, or hose.',
        'Photograph standing water and damage before cleanup.',
        'Hire mitigation promptly (your policy requires it) and keep the moisture logs and invoices.',
        'Get the plumber\u2019s written cause statement.',
        'Send us the denial or estimate; seepage letters are our home turf.'
      ],
      faqs: [
        { q: 'The carrier says the leak existed for weeks. How would they know?', a: 'Usually from an inference, sometimes from a paid opinion. Moisture patterns, material condition, and the failed component itself frequently tell a different story, and we make the carrier confront it.' },
        { q: 'Does homeowners insurance cover the plumbing repair itself?', a: 'Typically the resulting damage is covered while the failed part\u2019s repair is not, but policies vary and endorsements matter. We read yours before answering for it.' },
        { q: 'Mold appeared after the leak. Is that covered?', a: 'Often, within limits, when it results from a covered water loss. The sequencing and the policy\u2019s mold terms control; documentation of the water event is what protects the mold claim.' }
      ],
      related: [ { label: 'Mold & Biohazard', page: 'claim:mold' }, { label: 'Frozen & Burst Pipe', page: 'claim:frozen-pipe' }, { label: 'The Insurer\u2019s Contractor', page: 'process:insurer-contractor' } ]
    },

    'mold': {
      nav: 'Mold & Biohazard', icon: 'microbe',
      eyebrow: 'Mold & Biohazard',
      h1: 'Mold and Biohazard Insurance Claims',
      tagline: 'Mold is rarely the loss. It is the receipt for a water loss someone underpaid.',
      intro: [
        'Mold follows water like a signature, and humid climates just speed the ink. Carriers respond with caps, exclusions, and a favorite move: treating the mold as the claim so the small mold limit applies, instead of treating the covered water event as the claim with mold as its consequence.',
        'The order of that sentence can be worth tens of thousands of dollars, and getting it right is documentation work we know cold. The same discipline applies to biohazard and contamination losses, where scope and clearance are everything.'
      ],
      sections: [
        { heading: 'How Mold Claims Get Capped', type: 'named', body: [
          { term: 'The reframe.', desc: 'A covered water loss processed as a "mold claim" against a low sublimit.' },
          { term: 'The maintenance story.', desc: 'Growth blamed on humidity and housekeeping rather than the pipe that failed.' },
          { term: 'Remediation-only scope.', desc: 'Treatment priced, tear-out and rebuild forgotten.' }
        ]},
        { heading: 'How We Prove the Chain', type: 'para', body: [
          'Cause first: the water event, dated and documented. Then extent: qualified assessment, air and surface sampling where warranted, moisture mapping. Then scope: remediation protocol, tear-out, rebuild, and testing to clearance. When the chain is proven, the mold rides the covered loss instead of dying under a cap.'
        ]}
      ],
      steps: [
        'Document the water source before anything else; the origin story is the case.',
        'Photograph growth and staining, dated, before treatment.',
        'Address health-priority remediation promptly, keep the protocol and invoices.',
        'Do not accept a sublimit payment as final before review.',
        'Send us the denial or payment letter with the water-loss history.'
      ],
      faqs: [
        { q: 'My policy has a $10,000 mold limit. Is that the ceiling?', a: 'Not automatically. Limits apply to what they define, and a covered water loss\u2019s repairs are often outside the mold sublimit\u2019s reach. The policy language and the causation record decide.' },
        { q: 'The mold appeared months after the leak was "fixed." Still connected?', a: 'Frequently yes, especially when the original dry-out was incomplete, which is its own issue with the earlier claim handling.' }
      ],
      related: [ { label: 'Water Damage', page: 'claim:water' }, { label: 'Frozen & Burst Pipe', page: 'claim:frozen-pipe' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'frozen-pipe': {
      nav: 'Frozen & Burst Pipe', icon: 'snowflake',
      eyebrow: 'Frozen & Burst Pipe',
      h1: 'Frozen and Burst Pipe Insurance Claims',
      tagline: 'The pipe froze in January. The denial blames you by February.',
      intro: [
        'Every hard freeze, water finds the weak joint: the supply line in the exterior wall, the radiator run in the unheated addition, the sprinkler line above the office ceiling. The damage is sudden, dramatic, and plainly the kind of loss property insurance exists for. Which is why the denial rarely disputes the burst. It disputes you: freeze provisions typically require that heat be maintained or systems drained, and "failure to maintain heat" has become the reflex defense for winter claims, deployed whether or not the carrier can actually back it up.',
        'Here is what that defense conveniently skips: it has elements, and establishing them is the carrier\u2019s job, not yours to disprove from suspicion. Thermostat settings, utility records, furnace service history, and the physical failure point itself usually tell a clearer story than the denial letter\u2019s theory. We make the file tell it.'
      ],
      sections: [
        { heading: 'The Winter Claim Playbook', type: 'named', body: [
          { term: '"Heat was not maintained."', desc: 'Asserted from an empty house or a cold room, proven by nothing.' },
          { term: '"Vacancy."', desc: 'Travel, a rental gap, or a season away recast as vacancy under definitions the policy states far more narrowly.' },
          { term: 'The gradual reframe.', desc: 'A freeze rupture rewritten as long-term leakage or corrosion, moving the loss toward exclusions.' },
          { term: 'Scope trimmed at the waterline.', desc: 'Drying paid, tear-out and rebuild of walls, floors, and finished basements shaved, and finished basements are where these losses live.' }
        ]},
        { heading: 'How We Build a Freeze Claim', type: 'para', body: [
          'Keep the failed section of pipe; it testifies to freeze rupture versus corrosion better than any adjuster\u2019s adjective. Plumber findings on failure mode; utility and thermostat records assembling the heat story; moisture mapping that shows a sudden footprint; and scope that includes the tear-out, drying, and rebuild your policy promises, priced for the finished spaces that actually flooded. Where the carrier\u2019s theory is vacancy or neglect, we put its proof to the test, in writing.'
        ]}
      ],
      steps: [
        'Save the burst section of pipe. Nothing else you keep will matter as much.',
        'Photograph the failure point in place, then the water\u2019s full reach, room by room.',
        'Pull your utility records for the freeze period; gas and electric usage is your heat alibi.',
        'Mitigate fast (shutoff, extraction, drying) and keep logs and invoices.',
        'Send us the denial. Heat-maintenance letters are a genre we know well.'
      ],
      faqs: [
        { q: 'We were out of town when it happened. Did that kill the claim?', a: 'Not by itself. Travel is not vacancy, and reasonable heat maintained in your absence is exactly what these provisions contemplate. The records usually rescue what the adjuster\u2019s assumption condemned.' },
        { q: 'The carrier paid for drying but not the rebuilt basement. Is that normal?', a: 'Common, and wrong more often than not. Tear-out and rebuild of covered water damage is claim scope, not a favor, and finished-basement pricing is where winter claims get quietly halved.' },
        { q: 'Frozen sprinkler line at my business: same fight?', a: 'Same fight, bigger numbers, plus business interruption. Commercial freeze claims reward early structure, and we bring it.' }
      ],
      related: [ { label: 'Water Damage', page: 'claim:water' }, { label: 'Commercial & Large Loss', page: 'claim:commercial' }, { label: 'Mold & Biohazard', page: 'claim:mold' } ]
    },

    'fire': {
      nav: 'Fire & Smoke', icon: 'flame',
      eyebrow: 'Fire & Smoke',
      h1: 'Fire and Smoke Damage Insurance Claims',
      tagline: 'The flames stopped at one room. The loss did not.',
      intro: [
        'Fire claims are the rare loss carriers cannot deny happened, so the fight moves to extent and value: how far the smoke traveled, what soot did to electronics and HVAC, which contents can be cleaned versus must be replaced, and what it truly costs to rebuild to code.',
        'Families dealing with displacement should not also be auditing a contents spreadsheet. That is our work, and we do it with restoration professionals who measure contamination instead of guessing at it.'
      ],
      sections: [
        { heading: 'Where Fire Claims Get Undervalued', type: 'named', body: [
          { term: 'Smoke boundaries drawn small.', desc: 'Odor and soot treated as a cleaning line item instead of the whole-structure issue testing often shows.' },
          { term: 'Contents fatigue.', desc: 'Inventory demands designed to wear you down, then depreciation applied to what survives the list.' },
          { term: 'Systems ignored.', desc: 'HVAC, ductwork, and electronics contaminated invisibly and priced at zero.' },
          { term: 'ALE friction.', desc: 'Additional living expense questioned while your family lives out of bags.' }
        ]},
        { heading: 'How We Build a Fire Claim', type: 'para', body: [
          'Independent scoping with restoration and industrial-hygiene input where warranted; a contents process we run so you are not alone with a spreadsheet at midnight; code-inclusive rebuild pricing; and steady pressure on interim payments, because fire families should not finance the carrier\u2019s review period.'
        ]}
      ],
      steps: [
        'Secure the property and keep the fire department report number.',
        'Do not authorize full demolition before documentation; stabilize only.',
        'Start the contents list room by room with photos; we will give you our template.',
        'Keep every displacement receipt from night one.',
        'Send us the carrier\u2019s estimate; smoke scope is usually where it is lightest.'
      ],
      faqs: [
        { q: 'The carrier wants a recorded examination about the fire. Should I do it?', a: 'Not before counsel. Cooperation duties are real, and so is the way examinations get used. We prepare clients first, always.' },
        { q: 'Can I choose my own restoration contractor?', a: 'Generally you have meaningful say, subject to your policy\u2019s terms, and it matters: scope written by the carrier\u2019s vendor tends to match the carrier\u2019s number.' },
        { q: 'How long do fire claims take?', a: 'Longer than they should when contents and ALE are contested; shorter when the file arrives complete. Our job is making yours the second kind.' }
      ],
      related: [ { label: 'Lightning Damage', page: 'claim:lightning' }, { label: 'Commercial & Large Loss', page: 'claim:commercial' }, { label: 'The Insurer\u2019s Contractor', page: 'process:insurer-contractor' } ]
    },

    'commercial': {
      nav: 'Commercial & Large Loss', icon: 'building-2',
      eyebrow: 'Commercial & Large Loss',
      h1: 'Commercial Property Insurance Claims',
      tagline: 'Your building is damaged. Your revenue is the second claim, and carriers fight it harder.',
      intro: [
        'A commercial loss runs on two clocks: the building\u2019s and the business\u2019s. Every week the roof, the equipment, or the tenant space sits unresolved, the interruption loss compounds, and carriers understand that pressure perfectly. Large-loss files get large-loss resistance: preferred consultants, sprawling document demands, and business income calculations built on the leanest possible reading of your books.',
        'We represent owners, operators, associations, and landlords through both claims at once: property damage priced to real restoration, and business interruption proven with the financial rigor carriers respect because they cannot argue with it.'
      ],
      sections: [
        { heading: 'The Large-Loss Playbook', type: 'named', body: [
          { term: 'The document avalanche.', desc: 'Years of financials demanded, then re-demanded, while the decision waits.' },
          { term: 'The lean BI model.', desc: 'Business income projected from your worst quarter, expenses continued at zero.' },
          { term: 'Scope by committee.', desc: 'Layers of consultants, each trimming the estimate a little more.' },
          { term: 'The tenant tangle.', desc: 'Landlord, tenant, and policy responsibilities blurred until nobody is owed anything.' }
        ]},
        { heading: 'How We Run a Commercial Claim', type: 'para', body: [
          'One coordinated file: building envelope and systems scoped by qualified experts; commercial roofing evaluated for what replacement genuinely requires; business interruption and extra expense modeled from your actual records with accounting support; interim payment demands so operations can continue; and a communication cadence that lets your leadership run the business while we run the claim. Presuit resolution when possible, litigation when the carrier prefers it.'
        ]}
      ],
      steps: [
        'Preserve everything: damaged equipment, inventory, and the site as-is where safe.',
        'Start the interruption record now: revenue, cancellations, extra expenses, dated.',
        'Centralize carrier communications through one person, in writing.',
        'Do not sign consultant access agreements or releases without review.',
        'Send us the policy and the loss summary; large claims reward early structure.'
      ],
      faqs: [
        { q: 'Do we need a forensic accountant?', a: 'For meaningful interruption claims, usually yes, and it pays for itself in credibility. We coordinate the right one for your size and records.' },
        { q: 'Can we start repairs before the carrier decides?', a: 'Often you must, to mitigate. The key is documentation and notice done correctly so urgency never becomes a coverage argument.' },
        { q: 'The carrier assigned an outside adjusting firm. What does that mean?', a: 'Larger exposure, more process. It also means your file should arrive built to the same professional standard, which is precisely how we build it.' }
      ],
      related: [ { label: 'Fire & Smoke', page: 'claim:fire' }, { label: 'Appraisal, Explained', page: 'process:appraisal' }, { label: 'Roof Damage', page: 'claim:roof' } ]
    },

    'lightning': {
      nav: 'Lightning', icon: 'cloud-lightning',
      eyebrow: 'Lightning',
      h1: 'Lightning Damage Insurance Claims',
      tagline: 'The strike lasted a millisecond. The damage keeps announcing itself for months.',
      intro: [
        'Lightning losses are deceptive: a scorched outlet is the visible part, while surge damage rides the wiring into HVAC systems, appliances, electronics, pool equipment, and wells. Carriers like lightning claims small: pay the television, question the air handler, and attribute anything discovered later to age.',
        'The physics disagrees, and so do we.'
      ],
      sections: [
        { heading: 'How Lightning Claims Get Minimized', type: 'named', body: [
          { term: '"Prove the strike."', desc: 'Coverage questioned without a burn mark, as if surges leave autographs.' },
          { term: 'Item-by-item attrition.', desc: 'Each damaged system evaluated in isolation, coincidence claimed for the pattern.' },
          { term: 'The age discount.', desc: 'Failed equipment attributed to wear the day after the storm.' }
        ]},
        { heading: 'How We Prove It', type: 'para', body: [
          'Strike and storm data for your address and date; licensed electrician and HVAC findings on surge signatures; equipment inspections that document failure mode, not just failure; and a claim scoped to everything the surge touched, including what failed in the weeks after. Keep the damaged equipment; it is evidence, not junk.'
        ]}
      ],
      steps: [
        'List every device and system behaving oddly since the storm, and keep updating it.',
        'Do not discard damaged equipment.',
        'Get an electrician\u2019s written findings.',
        'Photograph any visible strike or scorch points.',
        'Send us the carrier\u2019s position; partial lightning payments are usually opening bids.'
      ],
      faqs: [
        { q: 'The AC died two weeks after the storm. Too late to connect it?', a: 'No. Surge-stressed components commonly fail on delay, and qualified technicians can document the mechanism.' },
        { q: 'The carrier paid for electronics but denied the HVAC. Normal?', a: 'Common, and inconsistent. The same event either surged your home or it did not; we hold carriers to one story.' },
        { q: 'Is there a minimum size for a lightning claim worth pursuing?', a: 'Deductibles matter, so we tell you honestly at review whether the math works. Systems losses usually clear the bar easily.' }
      ],
      related: [ { label: 'Fire & Smoke', page: 'claim:fire' }, { label: 'Water Damage', page: 'claim:water' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'tornado': {
      nav: 'Tornado', icon: 'tornado',
      eyebrow: 'Tornado',
      h1: 'Tornado Damage Insurance Claims',
      tagline: 'Thirty seconds of wind. Do not let it become two years of claim.',
      intro: [
        'Tornadoes arrive with hurricanes, with squall lines, and with no warning at all, and they leave the most disorienting losses in property insurance: one home opened to the sky, the neighbor\u2019s untouched.',
        'The coverage is usually clear (windstorm), so the fight is scope: structural racking that does not photograph well, roof systems compromised beyond the visible tear, fences, screens, outbuildings, and interiors soaked through openings the wind made.'
      ],
      sections: [
        { heading: 'Where Tornado Claims Shrink', type: 'named', body: [
          { term: 'The visible-only estimate.', desc: 'Torn sections priced, shifted structure ignored.' },
          { term: '"Repairable" framing', desc: 'on framing, trusses, and connections a storm actually moved.' },
          { term: 'Debris and access left out,', desc: 'as if the tree removes itself.' }
        ]},
        { heading: 'How We Build It', type: 'para', body: [
          'Immediate documentation before cleanup erases the story; structural engineering review for racking, uplift, and connection damage; complete scoping of secondary structures and interiors; and pricing to restore, not to approximate. Tornado files reward speed, and we move that way.'
        ]}
      ],
      steps: [
        'Photograph everything before debris removal, from the street and the yard.',
        'Stabilize safely, keep receipts, touch nothing structural beyond that.',
        'Note the exact date and time; storm survey data will back you up.',
        'List every structure touched: fence, shed, screen enclosure, mailbox to ridge.',
        'Send us the estimate when it arrives; the gap is usually structural.'
      ],
      faqs: [
        { q: 'Is tornado damage covered differently than hurricane damage?', a: 'Same windstorm peril, often different deductible treatment depending on your policy and how the storm is classified. It matters to your bottom line, so we check your policy first.' },
        { q: 'The carrier says the walls were already out of plumb. How do we answer that?', a: 'With engineering and with the storm record. Buildings out of plumb the day after a tornado have an obvious suspect, and methodology-level review usually shows it.' }
      ],
      related: [ { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Wind & Hail', page: 'claim:wind-hail' }, { label: 'Roof Damage', page: 'claim:roof' } ]
    },

    'theft': {
      nav: 'Theft & Vandalism', icon: 'mask',
      eyebrow: 'Theft & Vandalism',
      h1: 'Theft and Vandalism Insurance Claims',
      tagline: 'First someone violated your property. Then the claims process asked you to prove you deserved better.',
      intro: [
        'Theft and vandalism losses carry an indignity other claims do not: the implicit suspicion. Inventory demands that assume exaggeration, recorded statements that feel like interrogations, proof-of-ownership requests for things no one keeps receipts for.',
        'You are owed a claims process, not a cross-examination, and the policy you paid for covers stolen contents, damaged property, and the break-in\u2019s destruction itself.'
      ],
      sections: [
        { heading: 'Where These Claims Bog Down', type: 'named', body: [
          { term: 'Proof-of-loss games.', desc: 'Documentation standards no household could meet, applied item by item.' },
          { term: 'Valuation fights.', desc: 'Depreciation pressed hard on contents, receipts demanded for gifts and heirlooms.' },
          { term: 'Vacancy and security arguments.', desc: 'Coverage questioned over occupancy or "reasonable precautions," under definitions the policy states more narrowly than the adjuster implies.' },
          { term: 'The suspicion tax.', desc: 'Delay and scrutiny as default, regardless of your record.' }
        ]},
        { heading: 'How We Level It', type: 'para', body: [
          'A police report properly integrated; a contents methodology (photos, statements, bank and card records, replacement pricing) that meets the policy\u2019s standard without pretending receipts exist for a decade of life; damage scoping for doors, windows, walls, and systems the intrusion destroyed; and firm, documented boundaries around examinations and statements.'
        ]}
      ],
      steps: [
        'File the police report and keep the number.',
        'Photograph every point of entry and everything disturbed, before repairs.',
        'Build the inventory from memory, photos, and statements; perfection is not the legal standard.',
        'Secure the property and keep those receipts.',
        'Talk to us before any recorded statement if the tone has turned adversarial.'
      ],
      faqs: [
        { q: 'I do not have receipts for most of what was taken. Is that fatal?', a: 'No. Reasonable proof takes many forms: photographs, bank records, witness statements, and your own sworn inventory. We build it with you.' },
        { q: 'The carrier keeps implying fraud. What do I do?', a: 'Take it seriously and get counsel involved now. The posture changes what you should say and how; do not navigate an adversarial file alone.' }
      ],
      related: [ { label: 'Delayed Claims', page: 'claim:delayed' }, { label: 'FAQ', page: 'faq' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    },

    'sinkhole': {
      nav: 'Sinkhole & Ground Collapse', icon: 'map-pin',
      eyebrow: 'Sinkhole & Ground Collapse',
      h1: 'Sinkhole and Ground Settlement Insurance Claims',
      tagline: 'The ground moved. Now the definitions will try to.',
      intro: [
        'Cracks stepping through block walls, doors that stopped closing, floors sloping toward a corner: ground movement claims live inside a thicket of policy-defined terms, testing protocols, and coverage distinctions that vary by state.',
        'Carriers navigate that thicket daily. Homeowners get one trip through it, and the difference between covered and excluded can turn on which expert asked which question.'
      ],
      sections: [
        { heading: 'Where These Claims Turn', type: 'named', body: [
          { term: 'Definition disputes.', desc: 'Settlement, shrink-swell soils, and sinkhole activity are different findings with different coverage consequences.' },
          { term: 'Testing control.', desc: 'The carrier\u2019s geologists, the carrier\u2019s protocol, the carrier\u2019s conclusions.' },
          { term: 'Repair-method fights.', desc: 'Grouting versus underpinning versus cosmetic patching, priced worlds apart.' }
        ]},
        { heading: 'How We Approach Them', type: 'para', body: [
          'Independent structural and, where warranted, geotechnical review; scrutiny of the carrier\u2019s testing scope and methodology; any state-specific process navigated deliberately where it applies; and repair scoping driven by what stabilizes the home, not what closes the file.'
        ]}
      ],
      steps: [
        'Photograph and date every crack and separation; add tape markers to track movement.',
        'Keep doors-and-windows notes: what stopped fitting, when.',
        'Do not commission repairs before evaluation; sequence matters here more than anywhere.',
        'Request the carrier\u2019s complete testing reports, not summaries.',
        'Send us the reports; methodology review is where these cases begin.'
      ],
      faqs: [
        { q: 'The carrier tested and found "no sinkhole activity." Is that final?', a: 'It is one set of findings under one protocol. The questions worth asking are what was tested, where, how deep, and by whom; qualified second opinions regularly complicate clean conclusions.' },
        { q: 'My policy distinguishes sinkhole coverage from catastrophic ground cover collapse. What is the difference?', a: 'Materially different triggers and scopes under your policy\u2019s definitions. Which one your facts satisfy is often the entire case.' }
      ],
      related: [ { label: 'Commercial & Large Loss', page: 'claim:commercial' }, { label: 'FAQ', page: 'faq' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    }
  };

  // ---- Other Practice Areas ----
  var practices = {
    'personal-injury': {
      nav: 'Personal Injury', icon: 'hand-heart',
      eyebrow: 'Personal Injury',
      h1: 'Personal Injury Attorneys',
      tagline: 'The same firm that holds insurers accountable for property claims does the same when their insureds hurt people.',
      intro: [
        'Most of our practice is property insurance. This page exists because injury cases are, at bottom, the same fight with higher stakes: an insurance company deciding what your loss is worth, and a policyholder-side firm making sure the number reflects reality.',
        'We represent people seriously injured by negligence: vehicle crashes, unsafe premises, and losses that changed how a family lives. [ADJUST case-type list to current intake criteria.]'
      ],
      sections: [
        { heading: 'How We Handle Injury Cases', type: 'named', body: [
          { term: 'Built for trial from day one.', desc: 'Investigation, liability evidence, and medical documentation assembled as if a jury will see them, because settlements track trial readiness.' },
          { term: 'Complete damages.', desc: 'Medical costs, lost income, future care, and the human losses that do not come with invoices.' },
          { term: 'Straight talk.', desc: 'Case value, timeline, and risk explained plainly at the start and at every turn. Recent changes in the law affect injury claims\u2019 deadlines and dynamics [VERIFY current limitations and comparative-fault framing]; we tell you exactly how they affect yours.' }
        ]}
      ],
      steps: [
        'Get medical care and follow it; gaps in treatment become arguments against you.',
        'Photograph the scene, vehicles, or hazard if you can.',
        'Report appropriately (crash report, incident report) and keep copies.',
        'Do not give the at-fault carrier a recorded statement before counsel.',
        'Call us early; injury deadlines are shorter than people assume [VERIFY].'
      ],
      faqs: [
        { q: 'What does representation cost?', a: 'Contingency: no fees or costs unless we recover for you, explained in writing before you sign.' },
        { q: 'The adjuster already offered a settlement. Should I take it?', a: 'Not before understanding your full damages, including future care. Early offers price your case before you know what it is.' }
      ],
      related: [ { label: 'Auto Accident', page: 'practice:auto-accident' }, { label: 'Slip & Fall', page: 'practice:slip-fall' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    },
    'slip-fall': {
      nav: 'Slip & Fall', icon: 'arm-sling',
      eyebrow: 'Slip & Fall',
      h1: 'Slip and Fall Injury Claims',
      tagline: 'A hazard someone else should have fixed does not become your problem the moment you fall.',
      intro: [
        'Wet floors without a sign, broken stairs, unlit walkways, hazards left in aisles: premises injuries turn on what the property owner knew, or should have known, and did nothing about. Insurers for those owners start from the opposite assumption, that you were not watching where you were going.',
        'We build the record that answers them: the condition, the notice, and the injury, documented before the evidence is mopped away.'
      ],
      sections: [
        { heading: 'How These Cases Get Defended', type: 'named', body: [
          { term: 'The comparative-fault pivot.', desc: 'Attention shifted from the hazard to your footwear, your phone, your pace.' },
          { term: '"No notice."', desc: 'The claim that the owner had no time to discover a condition they, in fact, created or ignored.' },
          { term: 'The vanishing hazard.', desc: 'Cleaned up, repaired, or overwritten before anyone documented it.' }
        ]},
        { heading: 'How We Build It', type: 'para', body: [
          'Incident reports and surveillance preserved before they disappear; witness statements taken early; medical documentation tied cleanly to the fall; and expert input on the standard the property owner failed. Liability and damages, built together.'
        ]}
      ],
      steps: [
        'Report the fall to the property or manager and get it in writing.',
        'Photograph the hazard and the scene immediately, before it is fixed.',
        'Get names and numbers of anyone who saw it.',
        'Seek medical care and keep every record.',
        'Call before giving any recorded statement to the property\u2019s insurer.'
      ],
      faqs: [
        { q: 'The store says I should have seen the spill. Does that end it?', a: 'No. Shared fault is a defense to argue, not a verdict. What the owner knew and how long the hazard sat usually matter more.' },
        { q: 'What does it cost?', a: 'Contingency: no fees or costs unless we recover for you.' }
      ],
      related: [ { label: 'Personal Injury', page: 'practice:personal-injury' }, { label: 'Auto Accident', page: 'practice:auto-accident' }, { label: 'Contact', page: 'contact' } ]
    },
    'auto-accident': {
      nav: 'Auto Accident', icon: 'steering-wheel',
      eyebrow: 'Auto Accident',
      h1: 'Auto Accident Injury Claims',
      tagline: 'The other driver\u2019s insurer is not on your side, no matter how friendly the first call sounds.',
      intro: [
        'After a crash, the at-fault carrier moves fast for a reason: an early recorded statement and a quick, low offer cost them far less than a documented claim. Meanwhile the injuries that matter most, soft tissue, concussion, the pain that arrives on day three, are exactly the ones insurers most like to discount.',
        'We handle the claim so you can heal, building the medical and liability record that turns a lowball into a real number.'
      ],
      sections: [
        { heading: 'Where Auto Claims Get Undervalued', type: 'named', body: [
          { term: 'The rushed release.', desc: 'A check offered before you know the full extent of your injuries.' },
          { term: 'The treatment-gap argument.', desc: 'Any delay in care recast as proof you were not really hurt.' },
          { term: 'The prior-condition pivot.', desc: 'This crash\u2019s injuries blamed on your history.' }
        ]},
        { heading: 'How We Build It', type: 'para', body: [
          'Crash reconstruction where liability is disputed; complete medical documentation, including future care; lost-income and damages modeling; and firm handling of the carrier so early contact never becomes early leverage against you.'
        ]}
      ],
      steps: [
        'Get medical care promptly and follow the plan.',
        'Photograph vehicles, the scene, and your injuries.',
        'Keep the crash report and exchange information.',
        'Do not give the other driver\u2019s insurer a recorded statement first.',
        'Call us before accepting any offer.'
      ],
      faqs: [
        { q: 'The insurer already offered to settle. Should I take it?', a: 'Not before your full damages are known. Once you sign a release, the claim is over even if your injuries are not.' },
        { q: 'What does it cost?', a: 'Contingency: no fees or costs unless we recover for you.' }
      ],
      related: [ { label: 'Personal Injury', page: 'practice:personal-injury' }, { label: 'Slip & Fall', page: 'practice:slip-fall' }, { label: 'Contact', page: 'contact' } ]
    },
    'construction-defect': {
      nav: 'Construction Defect', icon: 'hammer',
      eyebrow: 'Construction Defect',
      h1: 'Construction Defect Claims',
      tagline: 'The damage did not come from a storm. It was built in.',
      intro: [
        'Water intrusion through a failed envelope, cracking from poor foundation work, roofing and stucco that never met the standard: construction defects surface months or years after the work, and by then the finger-pointing between builders, subcontractors, and insurers is well underway.',
        'Our team includes attorneys who worked on the construction and defense side of these disputes, which means we know how these files are built, and how to build yours to answer them.'
      ],
      sections: [
        { heading: 'What Makes These Cases Hard', type: 'named', body: [
          { term: 'The blame relay.', desc: 'Builder points at subcontractor points at supplier points at you.' },
          { term: 'Hidden scope.', desc: 'Visible symptoms over far larger underlying defects.' },
          { term: 'Notice and deadlines.', desc: 'Defect claims carry their own procedural clocks and pre-suit requirements.' }
        ]},
        { heading: 'How We Approach Them', type: 'para', body: [
          'Independent engineering and building-science evaluation of the real defect and its extent; documentation that survives the blame relay; and a claim built to pursue the responsible parties and any applicable coverage. Evidence first, adjectives never.'
        ]}
      ],
      steps: [
        'Document the symptoms with dated photos as they appear.',
        'Keep all construction contracts, plans, and warranties.',
        'Do not authorize repairs that destroy the evidence before it is evaluated.',
        'Note when you first noticed the problem; timing drives deadlines.',
        'Send us the documents for a free review of your options.'
      ],
      faqs: [
        { q: 'The builder says it is normal settling. Is it?', a: 'Sometimes, sometimes not. Building-science evaluation, not the builder\u2019s reassurance, is what tells the difference.' },
        { q: 'What does it cost?', a: 'We explain the fee arrangement in plain terms at the free review before you commit to anything.' }
      ],
      related: [ { label: 'Water Damage', page: 'claim:water' }, { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Contact', page: 'contact' } ]
    }
  };

  // ---- Process / explainer pages ----
  var process = {
    'how-we-handle': {
      nav: 'How We Handle Your Claim', icon: 'file-text',
      eyebrow: 'How We Work',
      h1: 'How We Handle Your Property Insurance Claim',
      tagline: 'Five stages, plain English, no mystery.',
      intro: [
        'One team, one file, one strategy from first review through appraisal, mediation, or trial. Here is exactly what that looks like, and where you fit at every step.'
      ],
      sections: [
        { heading: 'The Five Stages', type: 'named', body: [
          { term: '1. Free claim review.', desc: 'Send the denial letter, the estimate, or the story. An attorney (not software, not a screener) reads it and tells you where the claim stands, what it likely needs, and whether we are the right fit. If we are not, we say so and point you somewhere useful.' },
          { term: '2. Engagement, explained.', desc: 'Contingency representation in plain terms: no fees or costs unless we recover for you, everything in writing, questions answered before signatures.' },
          { term: '3. The file gets built.', desc: 'Policy analysis, inspections, experts matched to the loss, pricing, and the documented record carriers cannot wave away. You will know what we are doing and why; our presuit and litigation managers exist so updates find you before you look for them.' },
          { term: '4. The carrier answers.', desc: 'Demand, negotiation, appraisal, or mediation, chosen for leverage rather than habit. Many claims resolve here, on numbers the file supports.' },
          { term: '5. Litigation when it earns its keep.', desc: 'When suit is the path, we file prepared, because we prepared from stage three. You approve every major decision throughout, and settlement authority is always yours.' }
        ]},
        { heading: 'Two Promises Across All Five Stages', type: 'para', body: [
          'You will never be surprised by your own case, and you will never get optimism instead of an answer.'
        ]}
      ],
      related: [ { label: 'Appraisal, Explained', page: 'process:appraisal' }, { label: 'FAQ', page: 'faq' }, { label: 'Our Attorneys', page: 'attorneys' } ]
    },
    'appraisal': {
      nav: 'Appraisal, Explained', icon: 'scale',
      eyebrow: 'Appraisal',
      h1: 'Insurance Appraisal, Explained',
      tagline: 'The tool for "we agree it is covered, we disagree what it costs."',
      intro: [
        'Many policies include an appraisal clause: each side appoints an appraiser, the appraisers select an umpire, and the panel sets the amount of loss; clause language and enforceability vary by policy and state. Done well, appraisal resolves valuation disputes in months instead of years.',
        'Done naively, it locks in a bad number, because appraisal decides amount, not coverage, and entering it at the wrong moment or with the wrong appraiser can cost more than it saves.'
      ],
      sections: [
        { heading: 'When Appraisal Helps', type: 'para', body: [
          'Coverage is admitted, the fight is scope and price, and the file is documented well enough to win a battle of estimates. That last condition is where we earn our fee: appraisal outcomes track preparation.'
        ]},
        { heading: 'When It Does Not', type: 'para', body: [
          'Coverage is denied or hedged, conditions defenses are live, or the carrier wants appraisal precisely to cap a claim it should be paying differently. We evaluate the clause, the posture, and the demand before anyone invokes anything.'
        ]},
        { heading: 'How We Run One', type: 'para', body: [
          'Appraiser selection from professionals who document rather than posture; a submission package built like a trial exhibit; umpire advocacy where the clause allows; and coverage issues preserved rather than accidentally waived.'
        ]}
      ],
      related: [ { label: 'Underpaid Claims', page: 'claim:underpaid' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' }, { label: 'Roof Damage', page: 'claim:roof' } ]
    },
    'insurer-contractor': {
      nav: 'The Insurer\u2019s Contractor', icon: 'shield-check',
      eyebrow: 'Managed Repair',
      h1: 'Managed Repair and the Insurer\u2019s Contractor: Your Rights, Explained',
      tagline: 'Convenient is not the same as accountable.',
      intro: [
        'Some policies let carriers steer or elect repairs through preferred contractor programs; whether and how depends on your policy\u2019s words and, in some states, rules layered on top. The pitch is convenience; the structure is a contractor whose customer is the carrier.',
        'Sometimes it works fine. When it does not, homeowners discover the hard questions late: who warrants this work, who pays when the scope was short, and who answers when the repair fails after the file closes.'
      ],
      sections: [
        { heading: 'What To Watch', type: 'named', body: [
          { term: 'Scope written by the payer.', desc: 'The estimate and the work order share an author and an incentive.' },
          { term: 'Warranty ambiguity.', desc: 'Get warranty terms, in writing, before work begins.' },
          { term: 'Election language.', desc: 'Whether the carrier may require its program depends on your policy\u2019s words, not the adjuster\u2019s summary.' },
          { term: 'Sign-offs.', desc: 'Completion certificates can become arguments that the claim is done. Read before signing; better, let us.' }
        ]},
        { heading: 'Our Role', type: 'para', body: [
          'We read the policy\u2019s actual repair provisions, document scope independently before work begins, hold the program to the full repair, and preserve your remedies when the work or the scope falls short.'
        ]}
      ],
      related: [ { label: 'Water Damage', page: 'claim:water' }, { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Fire & Smoke', page: 'claim:fire' } ]
    }
  };

  // ---- Attorney bios ([BRACKETS] intentional fill-ins) ----
  var attorneys = [
    {
      slug: 'shari-freeman', name: 'Shari Freeman', initials: 'SF',
      title: 'Shareholder | Property Insurance Litigation | Se habla espa\u00f1ol',
      role: 'Shareholder',
      focus: 'Property insurance litigation, bilingual counsel',
      positioning: 'She defended builders and carriers\u2019 experts before switching sides. Now that playbook works for policyholders.',
      bio: [
        'Shari Freeman spent the first chapter of her career on the side of the table most policyholders never see. As a construction defect and professional negligence defense attorney, she represented the contractors, engineers, and design professionals whose inspections, opinions, and estimates become the spine of an insurance carrier\u2019s file. She learned how those files are built: which photographs get taken and which do not, how "wear and tear" becomes a conclusion before the ladder touches the roof, and how a repair scope quietly shrinks between the site visit and the final report.',
        'Then she switched sides, and brought the playbook with her.',
        'Today Shari represents homeowners and business owners in denied, delayed, and underpaid property insurance claims, from hurricane and roof losses to water, fire, and complex commercial disputes. Her construction background does the quiet work in every file: she reads engineering reports the way their authors wrote them, spots the missing moisture readings and untested slopes, and translates technical shortfalls into arguments that adjusters, appraisers, and juries act on. Before founding propertyinsurance.law with her partners, she practiced first-party property law as a partner at Taitt Law, P.A. and previously handled [PRACTICE AREA DESCRIPTION] at Urban Thier & Federer, P.A. [CONFIRM sequence and descriptions].',
        'Shari also serves as the firm\u2019s chief operating officer, which is a formal way of saying she is the reason files move. She authored a fifteen-hour continuing education curriculum for public adjusters on property insurance law and claims practice, and has been a guest on industry programs including the Roofing Success Podcast. She practices in English and Spanish, and clients who prefer Spanish work with her directly, not through a translator.'
      ],
      approachHeading: 'How Shari approaches a claim',
      approach: [
        'Read the carrier\u2019s file first, the way its authors meant it, then find what they left out.',
        'Price the loss the way it will actually be repaired, not the way it was estimated.',
        'Tell the client the truth early, even when the truth is complicated.'
      ],
      credentials: 'The Florida Bar [YEAR ADMITTED, VERIFY]; J.D., Loyola University Chicago School of Law; [UNDERGRADUATE DEGREE, SCHOOL]; [BAR SECTIONS, ASSOCIATIONS, AWARDS].',
      personal: 'When she is not reading engineering reports, Shari is [PERSONAL LINE].'
    },
    {
      slug: 'zaf-goss', name: 'Zaf Goss', initials: 'ZG',
      title: 'Partner | Claim Valuation and Litigation Strategy',
      role: 'Partner',
      focus: 'Claim valuation, litigation strategy',
      positioning: 'Ask Zaf what most underpaid claims have in common and the answer is arithmetic.',
      bio: [
        'Ask Zaf Goss what most underpaid claims have in common and the answer is arithmetic. Depreciation applied twice. Overhead and profit missing. Code upgrades priced at zero. Line items that quietly vanish between the field notes and the final estimate. Zaf built his practice on the belief that a property claim is won or lost in its numbers long before anyone mentions a courtroom, and he treats every carrier estimate as a document to be audited, not accepted.',
        'Zaf represents homeowners and business owners in disputes over denied, underpaid, and delayed property claims, with particular depth in [FOCUS: e.g., roof valuation, large-loss commercial, appraisal] [CONFIRM]. Before turning to policyholder work, he [PRIOR EXPERIENCE: firm, role, practice area], experience that taught him [ONE SENTENCE: what that background contributes]. His writing for the firm, including analyses of how carriers calculate roof depreciation, reflects the way he practices: patiently, numerically, and with the receipts attached.'
      ],
      approachHeading: 'How Zaf approaches a claim',
      approach: [
        'Rebuild the estimate from the ground up before arguing about it.',
        'Force the carrier to defend its math in writing.',
        'Prepare every file as if an appraiser or jury will see it, because one might.'
      ],
      credentials: 'The Florida Bar [YEAR]; J.D., [LAW SCHOOL]; [UNDERGRAD]; [ADMISSIONS, ASSOCIATIONS, AWARDS].',
      personal: 'Outside the office, Zaf [PERSONAL LINE].'
    },
    {
      slug: 'james-wilson', name: 'James Wilson', initials: 'JW',
      title: 'Partner | Coverage Defenses and Policy Conditions',
      role: 'Partner',
      focus: 'Coverage defenses, policy conditions',
      positioning: 'Carriers rarely say "we do not want to pay." They say late notice. James makes them prove it.',
      bio: [
        'Carriers rarely say "we do not want to pay." They say late notice. Failure to mitigate. Insufficient documentation. Conditions, in other words: the fine-print duties that insurers convert into exits. James Wilson has made those exits his specialty, from the policyholder side. He knows what a carrier actually has to prove before a conditions defense holds up, and how often the answer is more than the denial letter admits.',
        'James represents policyholders in claims denied or reduced on procedural and conditions grounds, and in disputes where the carrier\u2019s estimate and the contractor\u2019s reality refuse to meet. His published guidance on late-notice denials and dueling repair estimates has given thousands of homeowners their first honest map of these fights. Before joining his partners at propertyinsurance.law, James [PRIOR EXPERIENCE], where he [CONTRIBUTION SENTENCE] [CONFIRM].'
      ],
      approachHeading: 'How James approaches a claim',
      approach: [
        'Make the carrier prove the defense, not merely recite it.',
        'Reconstruct the timeline, because conditions cases are timeline cases.',
        'Keep the client ahead of every deadline the policy hides.'
      ],
      credentials: 'The Florida Bar [YEAR]; J.D., [LAW SCHOOL]; [UNDERGRAD]; [ADMISSIONS, ASSOCIATIONS, AWARDS].',
      personal: 'Away from the practice, James [PERSONAL LINE].'
    },
    {
      slug: 'alex-couture', name: 'J. Alex Couture', initials: 'AC',
      title: 'Partner | Post-Loss Disputes and Repair Accountability',
      role: 'Partner',
      focus: 'Post-loss disputes, repair accountability',
      positioning: 'Most people think a claim ends when the check clears. Alex built a practice on what happens after.',
      bio: [
        'Most people think an insurance claim ends when the check clears. Alex Couture built part of his practice on what happens after: repairs that fail, contractors the carrier selected who cut corners, supplemental damage discovered once the walls open, and claims closed before the loss was fully understood. If the story continued after the file was stamped resolved, Alex is the attorney who reopens the right questions.',
        'Alex represents homeowners and businesses across the full arc of property disputes, from first denial through post-repair failures, with a practice built on [FOCUS AREA] [CONFIRM]. He came to policyholder work from [PRIOR EXPERIENCE], which shows in the way he [CONTRIBUTION SENTENCE]. Clients describe him as the attorney who explains the next step before they have to ask for it [CONFIRM].'
      ],
      approachHeading: 'How Alex approaches a claim',
      approach: [
        'Treat "closed" as a status, not a verdict.',
        'Document the property as it is, not as the first inspection described it.',
        'Communicate in plain English, on a schedule the client can rely on.'
      ],
      credentials: 'The Florida Bar [YEAR]; J.D., [LAW SCHOOL]; [UNDERGRAD]; [ADMISSIONS, ASSOCIATIONS, AWARDS].',
      personal: 'Beyond the office, Alex [PERSONAL LINE].'
    },
    {
      slug: 'stefan-jose-garcia', name: 'Stefan-Jose Garcia', initials: 'SG',
      title: 'Senior Litigation Attorney',
      role: 'Senior Litigation Attorney',
      focus: 'Litigated property disputes, trial preparation',
      positioning: 'Some disputes settle on paper. The rest need a litigator who is comfortable when they do not.',
      bio: [
        'Some disputes settle on paper. The rest need a litigator who is comfortable when they do not. Stefan-Jose Garcia handles the firm\u2019s cases at their sharpest points: depositions of carrier adjusters and engineers, evidentiary hearings, and trial preparation that starts on day one rather than the month before docket call. His operating theory is simple: carriers pay attention to the files that are ready, and he makes sure ours are.',
        'Stefan represents policyholders in litigated property insurance disputes involving [LOSS TYPES / FOCUS] [CONFIRM]. Before joining propertyinsurance.law, he [PRIOR EXPERIENCE], where he [CONTRIBUTION SENTENCE]. [IF APPLICABLE: He practices in English and Spanish.] [CONFIRM]'
      ],
      approachHeading: 'How Stefan approaches a case',
      approach: [
        'Prepare every case for trial; settle only from strength.',
        'Depose the carrier\u2019s experts on their own methodology.',
        'Keep clients informed at every procedural turn, in plain language.'
      ],
      credentials: 'The Florida Bar [YEAR]; J.D., [LAW SCHOOL]; [UNDERGRAD]; [ADMISSIONS, ASSOCIATIONS, AWARDS].',
      personal: 'Outside the courtroom, Stefan [PERSONAL LINE].'
    },
    {
      slug: 'isabel-freeman', name: 'Isabel Freeman', initials: 'IF',
      title: 'Attorney',
      role: 'Attorney',
      focus: 'Research, drafting, client advocacy',
      positioning: 'Every strong firm has an attorney who reads everything twice. Here, that is Isabel.',
      bio: [
        'Every strong firm has an attorney who reads everything twice. At propertyinsurance.law, that is Isabel Freeman. Isabel works across the firm\u2019s property insurance docket, building the research, drafting, and evidentiary groundwork that the firm\u2019s positions stand on, and working directly with clients who want their questions answered by someone who has actually read their entire file. She has.',
        'Isabel focuses on [FOCUS: e.g., presuit strategy, coverage research, client advocacy] [CONFIRM]. She came to the practice from [BACKGROUND: school, clerkship, prior role], where she [CONTRIBUTION SENTENCE]. Colleagues will tell you she is the first to find the policy provision everyone else skimmed past; clients will tell you she returns calls.'
      ],
      approachHeading: 'How Isabel approaches a claim',
      approach: [
        'Read the entire policy, including the endorsements everyone skips.',
        'Build the record early, so leverage exists when it matters.',
        'Treat every client question as worth a real answer.'
      ],
      credentials: 'The Florida Bar [YEAR]; J.D., [LAW SCHOOL]; [UNDERGRAD]; [ADMISSIONS, ASSOCIATIONS, AWARDS].',
      personal: 'Outside the office, Isabel [PERSONAL LINE].'
    }
  ];

  // ---- Staff ----
  var staff = [
    { name: 'Erik Granillo', initials: 'EG', role: 'Litigation Manager', desc: 'Erik runs the litigation calendar and the moving parts behind it: experts, discovery, hearings, and the updates that keep clients from ever wondering what is happening with their case. Clients thank him by name in our reviews, which tells you most of what you need to know. [ADD one personal detail]' },
    { name: 'Julian Calvo', initials: 'JC', role: 'Presuit Manager', desc: 'Julian manages claims in the critical window before suit is filed: demands, documentation, carrier deadlines, and the pressure that resolves many claims without a courtroom. [ADD one personal detail]' },
    { name: 'Hilda Pinto', initials: 'HP', role: 'Intake Manager', desc: 'Hilda is usually the first voice you hear at the firm, and the reason our reviews use words like patient and thorough. She makes sure your story, your documents, and your deadlines reach an attorney intact. [ADD one personal detail]' },
    { name: 'Mary Mahairas', initials: 'MM', role: 'Accounting Manager', desc: 'Mary keeps the firm\u2019s finances and client accountings exact, so settlement funds move correctly and questions about costs get straight answers. [ADD one personal detail]' }
  ];

  // ---- Locations ----
  var locations = {
    'winter-park': {
      nav: 'Winter Park, FL', icon: 'map-pin',
      eyebrow: 'Winter Park, FL',
      h1: 'Winter Park Property Insurance Claim Lawyers',
      tagline: 'Our home office, and our neighbors\u2019 claims.',
      intro: [
        'Winter Park\u2019s housing stock is part of its charm and most of its claims problem: mature oaks over mid-century roofs, historic homes with aging cast iron and original wiring, and lakeside exposure that turns tropical systems into water intrusions. We are based here, and we represent our neighbors when carriers treat a Winter Park loss like a line item.',
        'From our Morse Boulevard office we handle denied, delayed, and underpaid property claims for homeowners, condo owners, associations, and businesses across the region.'
      ],
      sections: [
        { heading: 'What We See Here', type: 'named', body: [
          { term: 'Roof and tree losses.', desc: 'Old canopy over older roofs makes wind and impact claims a constant.' },
          { term: 'Historic-home water damage.', desc: 'Cast iron and original plumbing fail on schedule; carriers still act surprised.' },
          { term: 'Lakeside and storm exposure.', desc: 'Tropical systems become interior water claims fast.' }
        ]}
      ],
      contact: true,
      related: [ { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Our Attorneys', page: 'attorneys' } ]
    },
    'chicago': {
      nav: 'Chicago, IL', icon: 'map-pin',
      eyebrow: 'Chicago, IL',
      h1: 'Chicago Property Insurance Claim Lawyers',
      tagline: 'Different weather, same fight.',
      intro: [
        'Chicago\u2019s claims run on winter: frozen and burst pipes in three-flats and high-rises, ice-dam water intrusion, wind and hail across the suburbs, and the finished-basement losses insurers love to underpay. The perils change with the latitude; the carrier playbook does not.',
        'We represent homeowners, condo owners, associations, and businesses across the Chicago area in denied, delayed, and underpaid property claims, and we handle the file so you can get back to normal.'
      ],
      sections: [
        { heading: 'What We See Here', type: 'named', body: [
          { term: 'Frozen and burst pipes.', desc: '"Failure to maintain heat" is the reflex winter denial; it has a burden, and it is not yours.' },
          { term: 'Ice dams and roof leaks.', desc: 'Interior water blamed on maintenance rather than the storm and the roof.' },
          { term: 'Finished-basement losses.', desc: 'Drying paid, tear-out and rebuild quietly shaved.' }
        ]}
      ],
      contact: true,
      related: [ { label: 'Frozen & Burst Pipe', page: 'claim:frozen-pipe' }, { label: 'Water Damage', page: 'claim:water' }, { label: 'Commercial & Large Loss', page: 'claim:commercial' } ]
    }
  };

  // ---- FAQ hub ----
  var faq = {
    eyebrow: 'Frequently Asked',
    h1: 'Property Insurance Claim FAQ',
    tagline: 'Plain answers to the questions policyholders ask us most.',
    groups: [
      { title: 'Fees and hiring', items: [
        { q: 'What does it cost to hire you?', a: 'Contingency, in plain terms: no fees or costs unless we recover for you. We explain the agreement fully before you sign anything.' },
        { q: 'Do I need a lawyer if I already have a public adjuster?', a: 'They do different work, and we regularly coordinate with PAs rather than duplicate them. If a PA is already on your file, we work alongside them.' },
        { q: 'Will hiring a lawyer make the carrier hostile?', a: 'Represented files acquire deadlines, not grudges. Carriers know which claims can become lawsuits and handle them accordingly.' }
      ]},
      { title: 'Deadlines and timing', items: [
        { q: 'How long do I have to file or challenge a claim?', a: 'It varies by your state and your policy, and some deadlines are unforgiving. The safe answer everywhere is that sooner matters; send us the dates and we will tell you where you stand.' },
        { q: 'How long will my claim take?', a: 'Many resolve in negotiation or appraisal within weeks to months; complex or litigated claims take longer. A complete file is the fastest path, and building one is our job.' },
        { q: 'Is it too late if my claim was already closed?', a: 'Often no. Reopening and supplemental claims exist, within your state and policy limits. Let us look before you assume it is over.' }
      ]},
      { title: 'Money', items: [
        { q: 'The carrier paid something. Can I still claim more?', a: 'Usually. A payment is not automatically full payment; what you signed and what your policy says control. Supplements are how underpayments get corrected.' },
        { q: 'What is actual cash value versus replacement cost?', a: 'The difference is depreciation, and it is often the whole fight. Your policy\u2019s loss-settlement terms decide it, and we read them before arguing anything.' },
        { q: 'Why is depreciation so large on my roof?', a: 'Because it is applied aggressively, sometimes to items that should not depreciate at all. Auditing that number is core underpaid-claim work.' }
      ]},
      { title: 'Process', items: [
        { q: 'What happens in a free claim review?', a: 'An attorney reads what you have, tells you where the claim stands and what it likely needs, and whether we are the right fit. If you do not need a lawyer, that is the answer you will get.' },
        { q: 'What is appraisal?', a: 'A policy mechanism for resolving amount-of-loss disputes when coverage is agreed. Used well it is fast; used wrong it caps a claim. We evaluate before invoking.' },
        { q: 'Do I have to give a recorded statement or examination under oath?', a: 'Cooperation duties are real, and so is preparation. We prepare clients before any statement, always.' }
      ]}
    ]
  };

  // ---- Blog ----
  var blog = {
    eyebrow: 'From Our Attorneys',
    h1: 'Insights on Property Insurance Claims',
    tagline: 'Plain-language answers to the questions policyholders actually ask, written by the lawyers who handle these disputes daily.',
    posts: [
      { title: 'What "Pre-Existing Damage" Really Means on Your Claim', author: 'Shari Freeman', tag: 'Denied', excerpt: 'How carriers turn a storm loss into "wear and tear," and how the record answers back.' },
      { title: 'Late-Notice Denials: What the Carrier Actually Has to Prove', author: 'James Wilson', tag: 'Conditions', excerpt: 'A conditions defense has elements. Most denial letters skip that part.' },
      { title: 'How Carriers Calculate Roof Depreciation', author: 'Zaf Goss', tag: 'Roof', excerpt: 'Where actual cash value comes from, and why the number is so often wrong.' },
      { title: 'Do You Have to Use the Insurer\u2019s Preferred Contractor?', author: 'James Wilson', tag: 'Managed Repair', excerpt: 'What "election" language really means, and what you can control.' },
      { title: 'My Contractor\u2019s Estimate Is Double the Carrier\u2019s. Who\u2019s Right?', author: 'James Wilson', tag: 'Underpaid', excerpt: 'Usually the answer is scope: two estimates pricing two different repairs.' },
      { title: 'When Repairs Fail After a Claim Closes', author: 'J. Alex Couture', tag: 'Post-Loss', excerpt: '"Closed" is a status, not a verdict. Supplemental damage is real.' }
    ],
    upcoming: [
      'What Your Denial Letter Must Tell You, and What It Leaves Out',
      'Actual Cash Value vs. Replacement Cost: Where Your Roof Money Went',
      '"Sudden and Accidental" vs. "Constant Seepage": The Water Claim Coin Flip',
      'What a Real Wind Damage Inspection Looks Like',
      'Appraisal or Lawsuit? How We Choose, Claim by Claim',
      'The Contents Inventory That Survives a Fire Claim Review'
    ]
  };

  // ---- Shared / home ----
  var stats = [
    { value: '$10M+', prefix: '$', end: 10, suffix: 'M+', label: 'recovered for policyholders' },
    { value: '3,500+', end: 3500, comma: true, suffix: '+', label: 'claims handled' },
    { value: '$0', prefix: '$', end: 0, start: 250, label: 'fee unless we win' }
  ];

  var testimonials = [
    { quote: 'After our roof claim was denied twice, they stepped in and recovered far more than we ever expected. Professional and relentless.', name: 'The Hendersons', loc: 'Orlando, FL', claim: 'Denied' },
    { quote: 'Our hurricane claim sat untouched for months. Within weeks of hiring them, the insurer finally paid what they owed.', name: 'Marcus T.', loc: 'Tampa, FL', claim: 'Delayed' },
    { quote: 'They caught pricing errors in the adjuster\u2019s estimate we never would have found. The difference paid for our entire repair.', name: 'Priya & Sam R.', loc: 'Winter Park, FL', claim: 'Underpaid' },
    { quote: 'Water damage spread through our whole first floor. They handled every call with the insurer so we could focus on our family.', name: 'Danielle K.', loc: 'Sarasota, FL', claim: 'Water' },
    { quote: 'As a small business owner, the fire loss could have ended us. Their team protected our livelihood and got us back open.', name: 'Coastal Cafe', loc: 'Fort Myers, FL', claim: 'Commercial' },
    { quote: 'Clear, honest, and always reachable. They explained every step and never overpromised. I\u2019d recommend them to anyone.', name: 'Robert M.', loc: 'Jacksonville, FL', claim: 'Wind' }
  ];

  // Situation cards on the home page
  var problems = [
    { key: 'claim:denied', kicker: 'My claim was denied', desc: 'The denial letter is the carrier\u2019s opening position, not the final word. We review what they relied on and what they ignored.', cta: 'Denied Claims' },
    { key: 'claim:underpaid', kicker: 'My payment will not cover repairs', desc: 'When the check and the contractor\u2019s estimate show a large gap, we fight for fair claim payments based on facts.', cta: 'Underpaid Claims' },
    { key: 'claim:delayed', kicker: 'My claim has stalled', desc: 'Months of silence is a strategy with a clock attached. We force decisions.', cta: 'Delayed Claims' }
  ];

  // Why-us cards (firm-neutral, no blanket "switched sides")
  var whyUs = [
    { icon: 'file-text', title: 'We know how carrier files get built.', desc: 'We read the estimate and the engineering report the way their authors wrote them, and find what was skipped: the untested slope, the missing moisture reading, the exclusion stretched past its language.' },
    { icon: 'scale', title: 'We speak contractor, engineer, and adjuster.', desc: 'Property claims are won on technical detail: slope-by-slope roof documentation, moisture mapping, matching requirements, code upgrades, business interruption math. We translate that into evidence.' },
    { icon: 'shield-check', title: 'We handle the claim so you can live your life.', desc: 'One team, one file, one strategy from first review through appraisal, mediation, or trial, with straight answers at every step.' }
  ];

  // Damage grid (home + Property Claims hub) — order per nav
  var damageOrder = ['hurricane','wind-hail','roof','water','fire','mold','frozen-pipe','lightning','tornado','theft','sinkhole','commercial'];

  var samplePost = {
    tag: 'Denied',
    title: 'What \u201cPre-Existing Damage\u201d Really Means on Your Claim',
    author: 'Shari Freeman',
    role: 'Shareholder',
    date: 'July 2026',
    readTime: '6 min read',
    dek: 'How carriers turn a storm loss into \u201cwear and tear,\u201d and how the record answers back.',
    body: [
      { type: 'para', text: 'The denial letter used two words to erase your claim: pre-existing damage. It is the most common way a covered storm loss becomes an uncovered maintenance problem, and it works because it sounds like a finding when it is really an argument.' },
      { type: 'para', text: 'A carrier that writes \u201cpre-existing\u201d is making a claim of its own \u2014 that the damage was there before the event you reported. Like any claim, it can be tested, and it often does not survive a complete record.' },
      { type: 'heading', text: 'Where the phrase comes from' },
      { type: 'para', text: 'It rarely comes from a careful investigation. More often it is the shortest path to a smaller number: a brief inspection, a desk review of photographs, and a conclusion that fits the outcome the adjuster needs. Wear, age, and prior repairs are real things, but they are also convenient labels \u2014 and the difference between them and storm damage is exactly what the evidence decides.' },
      { type: 'heading', text: 'How the record answers back' },
      { type: 'para', text: 'We rebuild the timeline the denial skipped: dated photographs, weather and hail-swath data tied to your address, an independent inspection of every slope and elevation, and, where causation is contested, an engineer who examines the property rather than a report. When the file shows storm-consistent damage on the date of loss, \u201cpre-existing\u201d stops being a conclusion and starts being a position the carrier has to defend.' },
      { type: 'para', text: 'That shift matters. A denial rests on a record, and when the record changes, the position usually changes with it.' },
      { type: 'heading', text: 'What to do if you see it in your letter' },
      { type: 'para', text: 'Keep the denial letter and every enclosure, do not repair beyond what safety requires until the damage is documented, and photograph everything before any work begins. Then send us the letter. The review is free, deadlines run whether or not you act, and many \u201cpre-existing\u201d denials do not survive contact with a complete file.' }
    ]
  };

  var policies = {
    eyebrow: 'Resources',
    h1: 'Law Firm Policies',
    tagline: 'The notices that govern your use of this site and your communications with our firm, in plain language.',
    updated: 'Last updated July 2026',
    intro: 'This page explains the policies that apply when you use propertyinsurance.law and when you communicate with us. By using this site, you agree to these notices and any policy we reference or link to. If any of it affects a decision about your claim, call us and we will walk you through it.',
    sections: [
      { id: 'legal-notice', toc: 'Legal notice', heading: 'Legal notice and the attorney\u2013client relationship', body: [
        'Everything on this site \u2014 articles, FAQs, checklists, and explanations \u2014 is general information, not legal advice. Reading it, or contacting us through a form, email, text, or social media, does not create an attorney\u2013client relationship.',
        'Please do not send confidential or time-sensitive details until we have confirmed representation in writing through a signed engagement agreement.'
      ]},
      { id: 'where-we-practice', toc: 'Where we practice', heading: 'Where we practice', body: [
        'Our attorneys represent policyholders in Florida and, from our Chicago office, Illinois. We appear elsewhere only where permitted by local rules or by pro hac vice admission.',
        'Nothing on this site is a solicitation in any place where that would be inconsistent with local law or ethics rules.'
      ]},
      { id: 'advertising', toc: 'Advertising & results', heading: 'Attorney advertising, results, and testimonials', body: [
        'This website may be considered attorney advertising. Any recoveries, results, or client stories shown here are illustrative and do not guarantee a similar outcome \u2014 every claim turns on its own facts, policy language, and law.',
        'Testimonials reflect individual experiences and are not necessarily representative of every client. Where required, we disclose whether a reviewer is a client and whether anything was provided in exchange for a review; generally, nothing was.'
      ]},
      { id: 'free-review', toc: 'Reviews & engagement', heading: 'Free claim reviews, conflicts, and engagement', body: [
        'A free claim review is an initial evaluation to see whether we can help and to check for conflicts. We may decline a matter for any reason, including conflicts, scope, or capacity \u2014 and if you do not need a lawyer, we will tell you.',
        'If we both decide to move forward, the terms of representation \u2014 scope, fee structure, and who is responsible for costs \u2014 are set out in a written engagement agreement before any work begins.'
      ]},
      { id: 'fees', toc: 'Fees & costs', heading: 'Fees, costs, and no upfront fees', body: [
        'We handle property insurance claims on a contingency-fee basis: our fee is tied to what we recover for you, and you pay no attorney fees unless we recover. The specifics are governed by your engagement agreement and applicable law.',
        'Case costs \u2014 experts, inspections, filing fees, records \u2014 vary by matter, and we explain how they are handled before you sign. We do not represent you until the engagement is confirmed in writing.'
      ]},
      { id: 'communications', toc: 'Communications', heading: 'Communications, confidentiality, and security', body: [
        'Unsolicited emails, web forms, texts, and social messages are not guaranteed to be secure or confidential, and sending one does not create an attorney\u2013client relationship. If you choose to reach us electronically, you accept the ordinary risks of delivery and security.',
        'Once you retain us, we will set up secure channels for sharing sensitive documents.'
      ]},
      { id: 'ai-notice', toc: 'AI-assisted content', heading: 'AI-assisted content notice', body: [
        'Some material on this site may be AI-assisted and not individually reviewed before publication. Laws and policy terms change often, so content may be incomplete, out of date, or inapplicable to your situation. For advice about your claim, speak with a licensed attorney.'
      ]},
      { id: 'deadlines', toc: 'Deadlines', heading: 'Time sensitivity and legal deadlines', body: [
        'Property insurance rights run on strict deadlines \u2014 notice provisions, suit-limitation periods, and policy conditions among them. Waiting can limit or waive a claim. If you think you have a claim, contact a licensed attorney promptly to protect your rights.'
      ]},
      { id: 'ip', toc: 'Intellectual property', heading: 'Intellectual property and acceptable use', body: [
        'The content on this site \u2014 text, images, graphics, downloads, and logos \u2014 is protected by copyright and trademark, owned by our firm or by third parties. You may view and print pages for personal, non-commercial use; any other use requires our prior written consent.',
        'Please do not scrape, frame, or reproduce this content without permission.'
      ]},
      { id: 'third-party', toc: 'Third-party links', heading: 'Third-party links and resources', body: [
        'Links to outside websites are provided for convenience only. We do not control and are not responsible for third-party content, security, or privacy practices. Use them at your own risk.'
      ]},
      { id: 'accessibility', toc: 'Accessibility', heading: 'Accessibility statement', body: [
        'We want this site to be usable by everyone. If you run into an accessibility barrier, email info@propertyinsurance.law or call (407) 502-8068 with \u201cAccessibility\u201d in the subject line, and we will work to get you the content you need in an accessible format.'
      ]}
    ]
  };

  window.PIL_CONTENT = {
    claims: claims,
    practices: practices,
    process: process,
    attorneys: attorneys,
    staff: staff,
    locations: locations,
    faq: faq,
    blog: blog,
    stats: stats,
    testimonials: testimonials,
    problems: problems,
    whyUs: whyUs,
    damageOrder: damageOrder,
    policies: policies,
    samplePost: samplePost
  };
})();

