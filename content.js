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
      tagline: 'A denial letter does not necessarily mean your claim is over.',
      intro: [
        'You paid your premiums, reported the loss, and cooperated with the insurance company\u2019s investigation. Then you received a letter saying the claim was not covered.',
        'Maybe the carrier blamed wear and tear. Maybe it called the damage pre-existing. Maybe it relied on an exclusion in the policy.',
        'Whatever the reason, a denial is the insurance company\u2019s position on your claim. It should be reviewed against the policy, the facts, and the evidence the carrier relied on.',
        'We have reviewed hundreds of property insurance claim files. We know what to look for: inspections that missed important areas of damage, conclusions based on incomplete information, engineering opinions that do not match the condition of the property, and exclusions applied more broadly than the policy language allows.',
        'Our job is to find out whether the denial holds up.'
      ],
      sections: [
        { heading: 'How Insurance Claims Get Denied', type: 'named', body: [
          { term: 'An incomplete inspection.', desc: 'A short inspection may become the basis for the carrier\u2019s entire decision. If an area was never properly examined, important damage can be missed or dismissed.' },
          { term: 'A dispute over the cause of damage.', desc: 'The cause of loss often determines whether there is coverage. A carrier may characterize storm damage as wear and tear, or a sudden plumbing failure as long-term seepage. Those distinctions matter.' },
          { term: 'An exclusion in the policy.', desc: 'Insurance policies contain exclusions, but the wording matters. A denial should be evaluated against the actual language of the policy, not simply the carrier\u2019s summary of it.' },
          { term: 'An alleged failure to comply with policy requirements.', desc: 'Carriers may raise issues such as late notice, insufficient documentation, failure to protect the property, or missed inspections. Whether those issues justify a denial depends on the policy, the facts, and applicable state law.' },
          { term: 'A decision made from the desk.', desc: 'In some claims, the final coverage decision or estimate comes from someone who never inspected the property. That can create a disconnect between what was actually observed and what ultimately appears in the claim file.' }
        ]},
        { heading: 'How We Review a Denied Claim', type: 'para', body: [
          'We usually begin with the policy, the denial letter, photographs and estimates, and the available claim documents.',
          'First, we identify exactly why the carrier says the claim is not covered. Then we compare that explanation with the policy language and the evidence.',
          'Depending on the claim, that may mean reviewing inspection reports, photographs, weather data, engineering opinions, repair estimates, communications with the adjuster, and the timeline of the loss.',
          'If additional evidence is needed, we may work with contractors, engineers, or other professionals to document the damage and address disputed issues such as causation or repair cost.',
          'Once we understand the claim and the basis for the denial, we can determine the appropriate next step. That may involve further negotiation with the carrier, appraisal where appropriate, mediation, or litigation.',
          'A denial letter is important. It is not always the last word.'
        ]}
      ],
      stepsHeading: 'What To Do After Your Claim Is Denied',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Keep the denial letter and everything that came with it.</strong> The letter should identify the reasons for the denial and the policy provisions the carrier is relying on.',
        '<strong style="color:var(--color-ink);font-weight:700">Preserve evidence of the damage.</strong> Before making permanent repairs, photograph and document the property as thoroughly as you reasonably can. Make any repairs necessary to prevent additional damage, and keep the receipts.',
        '<strong style="color:var(--color-ink);font-weight:700">Save your claim records.</strong> Keep photographs, estimates, invoices, emails, text messages, reports, and other communications related to the loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Be careful about additional recorded statements.</strong> If the carrier asks for another recorded statement or examination, consider speaking with an attorney before proceeding.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the denial reviewed promptly.</strong> Insurance claims can be subject to policy and legal deadlines. Send us the denial letter and we can review the claim with you.'
      ],
      faqs: [
        { q: 'Can a denied insurance claim be reopened or challenged?', a: 'Yes. A denial does not always end the claim. Depending on the policy, the evidence, and the reason given for the denial, there may be grounds to challenge the carrier\u2019s decision. That can involve submitting additional documentation, disputing the carrier\u2019s interpretation of the policy, obtaining an independent expert opinion, or pursuing a formal dispute process. We review the denial and the underlying claim to determine what options may still be available.' },
        { q: 'How long do I have to challenge an insurance claim denial?', a: 'It depends on the state, the policy, and the type of claim. Insurance policies and state law can impose deadlines for filing suit, demanding appraisal, providing documents, or taking other action. Some deadlines may continue to run even while you are communicating with the carrier. If your claim has been denied, it is best to have the denial reviewed promptly rather than assume you still have time.' },
        { q: 'What does it cost to hire your firm?', a: 'There is no charge for the initial claim review. If we believe we can help and you decide to retain us, we will explain the fee arrangement before any work begins. The structure may depend on the claim, the type of dispute, and the law of the state where the loss occurred. You will have an opportunity to review and discuss the terms before deciding whether to move forward.' },
        { q: 'Should I agree to another inspection by the insurance company?', a: 'Possibly. Your policy may require you to cooperate with reasonable requests for inspection, but that does not mean every request should be handled without preparation. A re-inspection can affect how the carrier evaluates the claim and may involve disputed issues about the cause, scope, or extent of the damage. Before agreeing to another inspection after a denial, consider having the request and your policy reviewed so you understand your obligations and how to protect the claim.' }
      ],
      related: [ { label: 'Underpaid Claims', page: 'claim:underpaid' }, { label: 'Delayed Claims', page: 'claim:delayed' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    },

    'delayed': {
      nav: 'Delayed Claims', icon: 'clock',
      eyebrow: 'Delayed Claims',
      h1: 'Delayed Insurance Claims',
      tagline: 'If your insurance claim has been sitting for weeks or months without a clear decision, you may have options to move it forward.',
      intro: [
        'You submitted the claim. You provided documents. You allowed inspections. And you are still waiting.',
        'Maybe the claim has been reassigned to another adjuster. Maybe the insurance company keeps asking for information you already provided. Or maybe every update is some version of \u201cthe claim is still under review.\u201d',
        'Meanwhile, the property still needs to be repaired and the costs associated with the loss do not stop.',
        'Insurance companies are entitled to investigate claims, and some claims legitimately take longer than others. But an investigation should not continue indefinitely without a reasonable explanation. Insurance policies and state law can impose requirements on how claims are acknowledged, investigated, and handled.',
        'When a claim appears to be stalled, we review what has happened, what the insurance company is still asking for, and whether there are steps available to get the claim moving again.'
      ],
      sections: [
        { heading: 'Why Insurance Claims Get Delayed', type: 'named', body: [
          { term: 'Repeated adjuster changes.', desc: 'A claim may be transferred from one adjuster to another, requiring you to explain the loss again or resubmit information that is already in the file.' },
          { term: 'Ongoing document requests.', desc: 'The insurance company may continue asking for records, estimates, photographs, or other information. Some requests are necessary. Others may repeat information that has already been provided or leave you unsure what is actually preventing a decision.' },
          { term: 'Inspection delays.', desc: 'Inspections may be scheduled weeks out, postponed, or followed by requests for additional inspections or expert evaluations.' },
          { term: 'No clear coverage decision.', desc: 'Sometimes the biggest problem is simply the lack of an answer. The claim has not been approved or denied, and the insurance company will not give you a meaningful explanation of what remains outstanding.' }
        ]},
        { heading: 'How We Handle a Delayed Claim', type: 'para', body: [
          'We start by building a clear timeline of the claim.',
          'We review when the loss was reported, what documents were submitted, when inspections occurred, what the insurance company requested, and what explanations it has given for the delay.',
          'From there, we determine whether anything legitimately remains outstanding and what obligations may apply under the policy and state law.',
          'When appropriate, we communicate directly with the insurance company, respond to outstanding issues, document the history of the claim, and request a clear position on what is preventing a decision.',
          'If the insurance company still does not act, we evaluate the legal options available to move the claim forward.',
          'The objective is simple: get a clear answer and prevent an open-ended investigation from becoming the status quo.'
        ]}
      ],
      stepsHeading: 'What To Do If Your Claim Is Delayed',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Keep a timeline of the claim.</strong> Write down the dates of calls, inspections, document requests, adjuster changes, and any promises about when you would receive an answer.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep important communications in writing.</strong> Email can create a useful record of what was requested, what you provided, and what the insurance company told you.',
        '<strong style="color:var(--color-ink);font-weight:700">Ask what is preventing a decision.</strong> Request a written status update and ask specifically whether the insurance company needs anything else from you before it can make a coverage decision.',
        '<strong style="color:var(--color-ink);font-weight:700">Continue protecting the property.</strong> Take reasonable steps to prevent additional damage and keep photographs, invoices, and receipts for work related to the loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the delay reviewed.</strong> If you have provided what the insurance company requested and still cannot get a clear answer, send us the claim timeline and correspondence. We can review what has happened and help determine the next step.'
      ],
      faqs: [
        { q: 'How long is too long for an insurance company to decide my claim?', a: 'There is no single deadline that applies to every property insurance claim. The answer depends on the state, the policy, the circumstances of the loss, and whether the insurance company reasonably needs additional information to complete its investigation. If weeks or months have passed and you still cannot get a clear explanation of what is preventing a decision, it may be worth having the claim reviewed.' },
        { q: 'Will hiring a lawyer slow down my insurance claim?', a: 'Not necessarily. When a claim is already delayed, an attorney can help identify what is holding it up, organize the outstanding issues, communicate directly with the insurance company, and create a clear written record of what has already been provided. If the insurance company has everything it reasonably needs but still will not make a decision, an attorney can also evaluate what legal options are available.' },
        { q: 'The insurance company keeps asking for more documents. Do I have to provide them?', a: 'Your policy may require you to cooperate with the insurance company\u2019s investigation and provide reasonably requested information. That does not mean every request is necessarily appropriate or that you should repeatedly provide the same documents without clarification. We can review the requests, help determine what your policy requires, and make sure your responses are properly documented.' },
        { q: 'What does it cost to hire your firm?', a: 'There is no charge for the initial claim review. If we believe we can help and you decide to retain us, we will explain the fee arrangement before any work begins. The structure may depend on the claim and the law of the state where the loss occurred.' }
      ],
      ctaTitle: 'Still waiting for an answer?',
      ctaBody: 'Send us your claim correspondence and a brief timeline of what has happened. We\u2019ll review the delay and give you a straightforward assessment of where your claim stands.',
      related: [ { label: 'Denied Claims', page: 'claim:denied' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' }, { label: 'FAQ', page: 'faq' } ]
    },

    'underpaid': {
      nav: 'Underpaid Claims', icon: 'banknote',
      eyebrow: 'Underpaid Claims',
      h1: 'Underpaid Insurance Claims',
      tagline: 'If the insurance company\u2019s estimate does not come close to the actual cost of repairing your property, the claim may not be finished.',
      intro: [
        'Sometimes the insurance company accepts that a covered loss occurred but pays far less than the repairs actually cost.',
        'The difference may come from missing damage, reduced measurements, low pricing, depreciation, omitted code requirements, or a repair scope that does not reflect what is actually needed to restore the property.',
        'A partial payment can feel like the insurance company has made its final decision. Often, it has not.',
        'We review the insurance company\u2019s estimate line by line and compare it with the damage, the policy, and the real cost of the work. That means looking at scope, measurements, quantities, labor and material pricing, depreciation, overhead and profit, and any other items that affect the amount of the claim.',
        'The goal is straightforward: determine what the insurance company paid for, what it left out, and whether additional insurance benefits may be owed.'
      ],
      sections: [
        { heading: 'Where Underpayments Happen', type: 'named', body: [
          { term: 'Missing scope.', desc: 'Damage may be left out of the estimate entirely. That could include additional roof areas, interior water damage, exterior structures, flooring, cabinetry, fencing, or other affected portions of the property.' },
          { term: 'Measurements and pricing.', desc: 'Small differences in measurements, labor rates, material pricing, or quantities can add up quickly on a large repair.' },
          { term: 'Depreciation.', desc: 'Depreciation can significantly reduce an initial payment. We review how it was calculated, what items it was applied to, and whether additional amounts may become payable as repairs are completed.' },
          { term: 'Code requirements and matching.', desc: 'The insurance company may estimate for a limited repair when applicable building requirements, policy provisions, or state law may affect the actual scope of work.' },
          { term: 'Overhead and profit.', desc: 'Claims involving multiple trades may require coordination by a general contractor. Whether overhead and profit should be included depends on the nature and complexity of the work and the circumstances of the claim.' }
        ]},
        { heading: 'How We Review an Underpaid Claim', type: 'para', body: [
          'We begin by comparing the insurance company\u2019s estimate with the available evidence of the damage and the cost of repair.',
          'That may include contractor estimates, photographs, measurements, invoices, engineering reports, inspection records, and other documentation related to the loss.',
          'We look for differences in both scope and price. Sometimes the dispute comes down to a few missing line items. In other claims, the insurance company and the contractor are estimating two very different repairs.',
          'If additional documentation is needed, we work with the appropriate professionals to develop the claim and present the insurance company with a supported request for additional payment.',
          'Depending on the policy and the nature of the dispute, the next step may involve a supplemental claim, further negotiation, appraisal, mediation, or litigation.'
        ]}
      ],
      stepsHeading: 'What To Do If You Think Your Claim Was Underpaid',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Get a detailed repair estimate.</strong> Ask a qualified contractor to provide an estimate that reflects the work actually needed to repair the property.',
        '<strong style="color:var(--color-ink);font-weight:700">Get a copy of the insurance company\u2019s full estimate.</strong> The detailed estimate is more useful than the payment summary because it shows what the insurance company included, what it omitted, and how each item was priced.',
        '<strong style="color:var(--color-ink);font-weight:700">Review documents before signing them.</strong> Do not sign a release, settlement agreement, or other document you do not fully understand without having it reviewed.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep your invoices and receipts.</strong> Save records for repairs, emergency work, mitigation, materials, and other expenses related to the loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Send us the estimates.</strong> Comparing the insurance company\u2019s estimate with your contractor\u2019s estimate is often the best place to begin. We can review the claim and help identify where the numbers differ.'
      ],
      faqs: [
        { q: 'The insurance company already paid me. Is the claim over?', a: 'Not necessarily. Many property insurance claims involve more than one payment, particularly when additional damage is documented, repair costs become clearer, or recoverable depreciation remains outstanding. Whether you can seek additional payment depends on the policy, the circumstances of the claim, and any documents you may have signed.' },
        { q: 'My contractor\u2019s estimate is much higher than the insurance company\u2019s. Why?', a: 'A large difference does not always mean one side simply used higher prices. Often, the estimates include different scopes of work. The contractor may include repairs, materials, labor, or code-related work that does not appear in the insurance company\u2019s estimate. We compare the estimates line by line to determine where the difference comes from.' },
        { q: 'Do I need a lawyer to fight my underpaid claim?', a: 'Not every underpaid claim requires a lawyer, but legal help can become important when the insurance company disputes coverage, refuses to pay for documented damage, relies on policy exclusions, or will not meaningfully reconsider its estimate. An attorney can review the policy, identify the issues driving the underpayment, deal directly with the insurance company, and determine the best path for pursuing additional benefits.' },
        { q: 'What does it cost to hire your firm?', a: 'There is no charge for the initial claim review. If we believe we can help and you decide to retain us, we will explain the fee arrangement before any work begins. The structure may depend on the claim and the law of the state where the loss occurred.' }
      ],
      ctaTitle: 'Think your claim was underpaid?',
      ctaBody: 'Send us the insurance company\u2019s estimate and your contractor\u2019s estimate. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Appraisal, Explained', page: 'process:appraisal' }, { label: 'Denied Claims', page: 'claim:denied' } ]
    },

    'hurricane': {
      nav: 'Hurricane & Tropical Storm', icon: 'hurricane',
      eyebrow: 'Hurricane & Tropical Storm',
      h1: 'Hurricane and Tropical Storm Damage Claims',
      tagline: 'Hurricane and tropical storm damage can affect far more than the roof, and the full extent of the loss is not always captured in the insurance company\u2019s first inspection or estimate.',
      intro: [
        'A major storm can damage multiple parts of a property at once.',
        'There may be wind damage to the roof, siding, windows, fencing, and exterior structures. Water may enter through storm-created openings and damage ceilings, drywall, flooring, cabinetry, furniture, electronics, and other property. Families may need temporary housing, and businesses may face interruptions or additional operating expenses.',
        'That makes hurricane claims particularly vulnerable to disputes over cause, scope, and cost.',
        'The insurance company may attribute roof damage to age or wear, dispute whether wind created the opening that allowed water inside, estimate for limited repairs instead of replacement, or leave portions of the loss out of the estimate entirely.',
        'We review the property damage, policy, inspection findings, estimates, photographs, and available storm information to determine whether the full loss has been properly evaluated.'
      ],
      sections: [
        { heading: 'Common Issues in Hurricane and Tropical Storm Claims', type: 'named', body: [
          { term: 'Wind versus pre-existing damage.', desc: 'The insurance company may attribute damaged roofing, siding, or other building components to age, deterioration, installation problems, or conditions that existed before the storm. Photographs, inspection findings, maintenance history, and storm evidence can become important.' },
          { term: 'Wind versus flood.', desc: 'A hurricane can produce both wind-driven damage and flooding, and those causes may involve different coverage. Determining how water entered the property and what damage resulted from each cause can be one of the most important parts of the claim.' },
          { term: 'An incomplete repair scope.', desc: 'An estimate may address the roof while overlooking interior water damage, fencing, screen enclosures, detached structures, contents, code-related work, or additional living expenses.' },
          { term: 'Repair versus replacement disputes.', desc: 'The insurance company may estimate for limited repairs when a contractor or other professional believes more extensive replacement is necessary. The answer can depend on the condition of the property, the feasibility of repair, applicable requirements, and the policy.' },
          { term: 'Deductible issues.', desc: 'Hurricane and windstorm deductibles may differ from the deductible that applies to other types of losses. We review the policy and the insurance company\u2019s calculation to determine what deductible applies to the claim.' },
          { term: 'Notice and claim deadlines.', desc: 'Hurricane claims can be subject to policy requirements and state-law deadlines. Waiting too long to report damage, provide required information, or challenge a claim decision can affect your rights.' }
        ]},
        { heading: 'How We Review a Hurricane Claim', type: 'para', body: [
          'We start by looking at the entire property, not just the most obvious area of storm damage.',
          'That may include photographs of each roof slope and exterior elevation, interior damage, moisture readings, contractor estimates, engineering reports, repair invoices, contents documentation, and the insurance company\u2019s inspection findings.',
          'When causation is disputed, we review the evidence supporting the insurance company\u2019s position and compare it with the physical condition of the property and available storm information.',
          'We also examine the scope of the estimate. A hurricane loss may involve roofing, siding, windows, interiors, contents, detached structures, debris removal, code-related work, temporary repairs, and additional living or operating expenses.',
          'The goal is to determine whether the insurance company identified the correct cause of the damage and accounted for the full scope of covered loss.'
        ]}
      ],
      stepsHeading: 'What To Do After Hurricane or Tropical Storm Damage',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Report the loss promptly.</strong> Notify the insurance company and keep a record of when the claim was reported.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the property thoroughly.</strong> Document the roof, exterior, interior, damaged contents, standing water, debris, and temporary repairs whenever it is safe to do so.',
        '<strong style="color:var(--color-ink);font-weight:700">Protect the property from additional damage.</strong> Make reasonable temporary repairs such as tarping or water extraction when necessary, and keep photographs, invoices, and receipts.',
        '<strong style="color:var(--color-ink);font-weight:700">Track expenses caused by the loss.</strong> Keep records of hotel stays, temporary housing, meals, mileage, emergency repairs, storage, and other expenses related to the storm.',
        '<strong style="color:var(--color-ink);font-weight:700">Review the insurance company\u2019s response carefully.</strong> If the claim is denied, delayed, or significantly underpaid, send us the estimate, coverage letter, photographs, and any contractor or engineering reports. We can review the claim and identify the issues in dispute.'
      ],
      faqs: [
        { q: 'The insurance company\u2019s adjuster spent very little time at my property. Is that a problem?', a: 'The length of an inspection does not necessarily determine whether it was adequate, but a limited inspection can miss damage. A thorough hurricane inspection may require review of the roof, exterior elevations, interior rooms, water intrusion, detached structures, and other affected areas. If the insurance company\u2019s estimate does not match the damage you are seeing, the inspection and estimate should be reviewed closely.' },
        { q: 'My claim involves both wind and water damage. Why does that matter?', a: 'Because the source of the water can affect coverage. Water entering through a storm-created opening may raise different coverage issues from rising surface water or flooding. In some situations, different policies may also apply. We review how the water entered the property, what damage resulted, and which policy provisions apply to each part of the loss.' },
        { q: 'The insurance company says my roof was already old. Can it still be a covered hurricane claim?', a: 'Yes, the age of the roof does not by itself determine what caused the damage. An older roof can still sustain new storm damage. The insurance company may consider age, wear, maintenance, and prior condition, but the central question remains whether the hurricane caused covered damage and what the policy provides for that loss.' },
        { q: 'What if the insurance company paid for part of the damage but left other areas out?', a: 'A partial payment does not necessarily resolve the entire claim. Hurricane losses frequently involve multiple areas of damage, and some may be omitted from the initial estimate. We compare the insurance company\u2019s scope with photographs, contractor estimates, inspection findings, and the actual condition of the property to determine whether additional benefits may be owed.' },
        { q: 'Can I make emergency repairs before the insurance company finishes its inspection?', a: 'Reasonable steps to protect the property from additional damage may be necessary before the claim is fully investigated. The important part is documenting the condition before and during the work whenever possible. Take photographs, keep damaged materials when practical, save invoices and receipts, and maintain records of what was repaired and why.' },
        { q: 'Do I need a lawyer for a hurricane insurance claim?', a: 'A lawyer can make a real difference by reviewing the policy, addressing disputes over wind, water, and pre-existing damage, evaluating whether the insurance company\u2019s estimate captures the full scope of the loss, and dealing directly with the insurance company when the claim is denied, delayed, or underpaid. An attorney can also coordinate supporting evidence and determine the best way to pursue additional benefits when the insurance company will not change its position.' }
      ],
      ctaTitle: 'Think the insurance company missed part of your hurricane damage?',
      ctaBody: 'Send us the insurance company\u2019s estimate or coverage letter, along with photographs and any contractor or engineering reports. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Water Damage', page: 'claim:water' }, { label: 'Wind & Hail', page: 'claim:wind-hail' } ]
    },

    'wind-hail': {
      nav: 'Wind & Hail', icon: 'wind',
      eyebrow: 'Wind & Hail',
      h1: 'Wind and Hail Damage Insurance Claims',
      tagline: 'Wind and hail damage is not always obvious from the ground, and disagreements over what caused the damage are common.',
      intro: [
        'Hail can damage shingles in ways that are difficult to see without a close inspection. Wind can lift, crease, or loosen roofing materials even when the roof appears intact from the driveway.',
        'That is one reason wind and hail claims often turn into disputes over causation. The insurance company may say the damage is cosmetic, caused by age or wear, the result of installation problems, or unrelated to the reported storm.',
        'We review the physical evidence, the policy, the inspection findings, and the available weather information to determine whether the insurance company\u2019s position is supported by the facts.'
      ],
      sections: [
        { heading: 'Common Issues in Wind and Hail Claims', type: 'named', body: [
          { term: '\u201cCosmetic\u201d damage.', desc: 'The insurance company may take the position that hail marks, granule loss, or other visible damage affect only appearance and do not impair the roof\u2019s function. Whether that is correct depends on the type and extent of the damage, the roofing system, and the policy.' },
          { term: 'Mechanical or installation damage.', desc: 'Damage may be attributed to foot traffic, improper installation, maintenance, or other non-storm causes. A close inspection can help determine whether the condition is consistent with wind, hail, or something else.' },
          { term: 'Repair versus replacement.', desc: 'The insurance company may estimate for limited repairs when the property owner or contractor believes replacement is necessary. The answer can depend on the extent of the damage, whether repairs can be performed effectively, applicable building requirements, and the terms of the policy.' },
          { term: 'Disputes over the date of loss.', desc: 'The insurance company may argue that the damage came from an earlier storm or developed over time. Weather records, photographs, inspection findings, and the condition of surrounding properties can all become important.' }
        ]},
        { heading: 'How We Review Wind and Hail Damage', type: 'para', body: [
          'We start with the condition of the property and the insurance company\u2019s explanation for what it did or did not pay.',
          'That may include reviewing photographs of each roof slope, inspection reports, contractor estimates, engineering reports, weather records, and information about the reported date of loss.',
          'When causation is disputed, we look closely at how the inspection was performed and whether the conclusions are supported by the physical evidence.',
          'We also review the scope of repair. Even when the insurance company acknowledges storm damage, there may still be disagreements over how much of the roof or property must be repaired, what materials are required, and what the work should cost.',
          'The goal is to determine whether the claim was evaluated based on the actual storm damage and the coverage provided by the policy.'
        ]}
      ],
      stepsHeading: 'What To Do After Wind or Hail Damage',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Have the property inspected.</strong> A qualified roofing contractor can document the condition of the roof and photograph areas that may not be visible from the ground.',
        '<strong style="color:var(--color-ink);font-weight:700">Save information about the storm.</strong> Keep the date of the storm, photographs, weather alerts, and any other information that may help establish when the damage occurred.',
        '<strong style="color:var(--color-ink);font-weight:700">Get the insurance company\u2019s inspection findings and estimate.</strong> These documents can help identify exactly what damage the insurance company accepted, what it rejected, and why.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep repair records.</strong> Save estimates, invoices, receipts, photographs, and documentation of any temporary or permanent repairs.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the claim reviewed if the findings do not match.</strong> If your contractor\u2019s inspection and the insurance company\u2019s findings are significantly different, send us the reports, photographs, and estimates. We can review the claim and help determine where the disagreement comes from.'
      ],
      faqs: [
        { q: 'The insurance company\u2019s engineer said there is no hail damage. What can I do?', a: 'An engineering report is an important piece of evidence, but it is not necessarily the end of the claim. The report can be reviewed to determine what areas were inspected, what testing or observations were performed, what photographs were taken, and how the engineer reached the conclusion. If other qualified professionals reach a different conclusion, those opinions and the underlying evidence may also need to be considered.' },
        { q: 'My roof is fifteen years old. Does that mean the claim will be denied?', a: 'Not necessarily. The age of the roof can affect how the insurance company evaluates its condition and may also affect how much is payable under some policies, but age alone does not determine what caused the damage. The important questions are what happened during the storm, what damage resulted, and what the policy provides.' },
        { q: 'Who decides whether my roof should be repaired or replaced?', a: 'That depends on the damage, the policy, the feasibility of the proposed repair, and any applicable building requirements. The insurance company may estimate for a repair, while a contractor may believe replacement is necessary. We review the competing scopes and the reasons behind them to determine whether the insurance company\u2019s proposed repair is consistent with the policy and the condition of the roof.' },
        { q: 'Do I need a lawyer for a wind or hail claim?', a: 'Not every wind or hail claim requires a lawyer. Legal help may become useful when the insurance company denies storm damage, relies on exclusions, disputes the cause of the loss, pays for only part of the necessary repairs, or will not reconsider its position despite additional evidence. An attorney can review the policy and claim file, identify the disputed issues, and determine what options are available to pursue the claim.' }
      ],
      ctaTitle: 'Disagree with the insurance company\u2019s roof assessment?',
      ctaBody: 'Send us the inspection reports, photographs, and estimates. We\u2019ll review the claim and give you a straightforward assessment of where the dispute stands.',
      related: [ { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'roof': {
      nav: 'Roof Damage', icon: 'house',
      eyebrow: 'Roof Damage',
      h1: 'Roof Damage Insurance Claims',
      tagline: 'Roof claims often come down to three questions: what caused the damage, how extensive it is, and whether the roof can reasonably be repaired or needs to be replaced.',
      intro: [
        'Roof damage is one of the most common sources of disagreement in property insurance claims.',
        'The insurance company may acknowledge some damage but attribute other conditions to age, wear, installation problems, or prior deterioration. It may estimate for a limited repair while your roofer believes the damage requires replacement.',
        'Those differences can have a major effect on the amount of the claim.',
        'We review the roof condition, the cause of the damage, the insurance company\u2019s estimate, contractor findings, photographs, and the policy to determine whether the proposed repair properly addresses the loss.'
      ],
      sections: [
        { heading: 'Common Issues in Roof Damage Claims', type: 'named', body: [
          { term: 'Storm damage versus age or wear.', desc: 'The insurance company may attribute cracked, lifted, creased, or missing roofing materials to age, deterioration, installation problems, or other non-storm causes. A detailed inspection can help determine whether the condition is consistent with the reported loss.' },
          { term: 'The extent of the damage.', desc: 'An estimate may identify a limited number of damaged shingles, tiles, panels, or sections while a contractor finds damage across a larger portion of the roof.' },
          { term: 'Repair versus replacement.', desc: 'The insurance company may estimate for isolated repairs when the contractor believes those repairs cannot reasonably restore the roof. The answer can depend on the type of roofing system, the extent of the damage, availability of materials, applicable building requirements, and the policy.' },
          { term: 'Matching and material availability.', desc: 'Even when a repair is physically possible, questions may arise about whether compatible roofing materials are available and what the policy or applicable law requires when existing materials cannot reasonably be matched.' },
          { term: 'Depreciation and valuation.', desc: 'The age and condition of the roof can affect how the insurance company calculates payment. We review the depreciation, loss-settlement provisions, and any roof-specific policy terms that may affect what is payable.' }
        ]},
        { heading: 'How We Review a Roof Damage Claim', type: 'para', body: [
          'We begin by comparing the insurance company\u2019s findings with the actual condition of the roof.',
          'That may include photographs of each roof slope, contractor reports, measurements, engineering opinions, repair estimates, weather information, interior damage, and the insurance company\u2019s inspection records.',
          'When the cause of damage is disputed, we look at the physical evidence and the basis for the insurance company\u2019s conclusion.',
          'When the dispute is repair versus replacement, we evaluate whether the proposed repair can reasonably restore the damaged roof and whether building requirements, material availability, matching issues, manufacturer requirements, or policy provisions affect the scope.',
          'We also review the financial side of the claim, including pricing, quantities, depreciation, deductibles, and any amounts that may become payable as repairs are completed.',
          'The goal is to determine whether the insurance company\u2019s estimate reflects the actual damage and the work reasonably required to repair the roof.'
        ]}
      ],
      stepsHeading: 'What To Do If Your Roof Is Damaged',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Document the roof before permanent repairs are made.</strong> Take photographs when it is safe to do so and preserve any available documentation of the roof\u2019s condition before and after the loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Get a detailed roof inspection.</strong> Ask a qualified roofing contractor to inspect the entire roof and document the areas of damage, not just the most obvious section.',
        '<strong style="color:var(--color-ink);font-weight:700">Request the insurance company\u2019s full estimate.</strong> Review the detailed estimate, including measurements, scope, pricing, depreciation, and the specific repairs the insurance company approved.',
        '<strong style="color:var(--color-ink);font-weight:700">Document interior damage.</strong> Photograph ceiling stains, drywall damage, moisture, and other signs of water intrusion that may be related to the roof loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Compare the estimates.</strong> If your roofer and the insurance company are recommending substantially different repairs, send us both estimates and the supporting photographs. We can review where the disagreement comes from.'
      ],
      faqs: [
        { q: 'The insurance company approved a repair, but my roofer says the roof needs to be replaced. What happens next?', a: 'A repair recommendation from the insurance company does not automatically resolve the issue. The question is whether the proposed repair can reasonably restore the damaged roof and whether the scope complies with the policy and any applicable requirements. We compare the competing recommendations, inspect the supporting evidence, and determine why the insurance company and contractor reached different conclusions.' },
        { q: 'What is the difference between actual cash value and replacement cost on a roof?', a: 'Actual cash value generally reflects depreciation, while replacement cost coverage may allow additional amounts to become payable when the covered repairs or replacement are completed, subject to the policy terms. Roofs can also be subject to special schedules, endorsements, or loss-settlement provisions. We review the policy and the insurance company\u2019s calculation to determine how the roof is being valued.' },
        { q: 'The insurance company says my roof is too old. Can storm damage still be covered?', a: 'Yes. The age of a roof does not by itself determine whether a storm caused damage. An older roof can still sustain new wind, hail, or other covered damage. Age and condition may affect valuation or certain policy provisions, but the cause of the damage still needs to be evaluated.' },
        { q: 'What if matching shingles, tiles, or roofing materials are no longer available?', a: 'Material availability can affect whether a limited repair is practical. If the existing roofing material is discontinued, unavailable, or cannot reasonably be integrated with the remaining roof, the scope of repair may need to be reconsidered. The answer depends on the roofing system, the policy, and any applicable requirements.' },
        { q: 'Do I need a lawyer for a roof damage insurance claim?', a: 'A lawyer can make a real difference when the insurance company disputes the cause of the damage, approves only a limited repair, refuses to account for the full scope of the roof loss, or significantly underpays the claim. An attorney can review the policy and estimates, address repair-versus-replacement disputes, coordinate supporting evidence, and deal directly with the insurance company to pursue additional benefits.' }
      ],
      ctaTitle: 'Disagree with the insurance company\u2019s roof estimate?',
      ctaBody: 'Send us the insurance company\u2019s estimate, your roofer\u2019s estimate, and any photographs or inspection reports. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Wind & Hail', page: 'claim:wind-hail' }, { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'water': {
      nav: 'Water Damage', icon: 'droplets',
      eyebrow: 'Water Damage',
      h1: 'Water Damage Insurance Claims',
      tagline: 'Water damage claims often turn on one question: was the loss sudden, or did it happen gradually over time?',
      intro: [
        'A supply line breaks. A water heater fails. A drain backs up. Water spreads through flooring, drywall, cabinets, and other parts of the property.',
        'In many claims, the dispute is not whether water caused damage. It is what caused the water loss and how long the condition existed.',
        'The insurance company may characterize the problem as long-term seepage, deterioration, maintenance, or another excluded cause. The property owner may have experienced what appeared to be a sudden plumbing failure.',
        'That difference matters because coverage often depends on the cause of the loss, the timing of the damage, and the language of the policy.',
        'We review the physical evidence, plumbing findings, photographs, mitigation records, and policy language to determine whether the insurance company\u2019s position is supported by the facts.'
      ],
      sections: [
        { heading: 'Common Issues in Water Damage Claims', type: 'named', body: [
          { term: 'Sudden versus long-term leakage.', desc: 'The insurance company may argue that the leak developed over weeks or months rather than occurring suddenly. Plumbing records, photographs, moisture patterns, and the condition of the failed component can all become important.' },
          { term: 'Disputes over mitigation and dry-out costs.', desc: 'The insurance company may question the amount of drying equipment used, the length of the mitigation work, or whether certain materials needed to be removed.' },
          { term: 'The extent of the water damage.', desc: 'Water can travel behind walls, under flooring, and into areas that are not immediately visible. Disputes often arise over how much of the property was actually affected and what must be removed or replaced.' },
          { term: 'Mold following a water loss.', desc: 'Mold can create a separate coverage issue, particularly when the policy contains limits, exclusions, or endorsements addressing mold or microbial growth. The cause and timing of the original water event can be important.' }
        ]},
        { heading: 'How We Review a Water Damage Claim', type: 'para', body: [
          'We begin by determining what happened and what evidence exists to establish the cause of the loss.',
          'That may include plumber reports, leak-detection findings, photographs, moisture readings, mitigation records, contractor estimates, inspection reports, and any engineering or expert opinions obtained during the claim.',
          'If a pipe, valve, hose, appliance component, or other part failed, preserving that item can be important. The condition of the failed component may help explain whether the loss resulted from a sudden failure, deterioration, installation problems, or another cause.',
          'We also review the scope and cost of the damage. That includes drying, demolition, tear-out, access to the failed plumbing, and the work necessary to restore the affected areas.',
          'The goal is to determine whether the insurance company accurately identified the cause of the loss and properly evaluated the resulting damage under the policy.'
        ]}
      ],
      stepsHeading: 'What To Do After Water Damage',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Stop the source of the water if you safely can.</strong> Take reasonable steps to prevent additional damage. If a pipe, valve, hose, or other component failed, preserve it if possible.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the damage before cleanup.</strong> Take wide photographs and close-ups of standing water, damaged materials, the source of the leak, and affected rooms.',
        '<strong style="color:var(--color-ink);font-weight:700">Address the water promptly.</strong> Reasonable mitigation can help prevent additional damage. Keep photographs, moisture logs, invoices, and records showing what work was performed.',
        '<strong style="color:var(--color-ink);font-weight:700">Ask the plumber to document the cause.</strong> A written description of what failed and what the plumber observed can become important if the cause of the loss is later disputed.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the claim reviewed if coverage or the amount of payment is disputed.</strong> Send us the insurance company\u2019s denial letter, estimate, plumbing records, and mitigation documents. We can review the claim and help identify the issues in dispute.'
      ],
      faqs: [
        { q: 'The insurance company says the leak existed for weeks. How can that be determined?', a: 'The insurance company may rely on inspection findings, moisture conditions, staining, deterioration, plumbing evidence, or an expert opinion to estimate how long a leak existed. Those conclusions are not always definitive. We review the evidence and the methodology behind the insurance company\u2019s position to determine whether it is supported by the condition of the property and the failed component.' },
        { q: 'Does homeowners insurance cover the plumbing repair itself?', a: 'It depends on the policy and what caused the failure. Some policies may cover resulting water damage while excluding the cost of repairing or replacing the pipe, appliance, or other component that failed. Other provisions or endorsements can change that result. The policy must be reviewed before determining what is covered in a particular claim.' },
        { q: 'Is mold covered if it appeared after a water loss?', a: 'Possibly. Coverage for mold often depends on what caused the water loss, when the mold developed, and the specific mold limitations, exclusions, or endorsements in the policy. Some policies provide limited mold coverage when it results from an otherwise covered loss. Documentation of the original water event and the mitigation work can be important.' },
        { q: 'Do I need a lawyer for a water damage claim?', a: 'Not every water damage claim requires a lawyer. Legal help may become important when the insurance company denies the claim, alleges long-term seepage, disputes the cause of the loss, refuses to pay for necessary tear-out or repairs, or significantly underpays the damage. An attorney can review the policy, the evidence, and the insurance company\u2019s position and determine what options are available.' }
      ],
      ctaTitle: 'Disagree with the insurance company\u2019s water damage decision?',
      ctaBody: 'Send us the denial letter or estimate, along with any plumbing and mitigation records. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Mold & Biohazard', page: 'claim:mold' }, { label: 'Frozen & Burst Pipe', page: 'claim:frozen-pipe' }, { label: 'The Insurer\u2019s Contractor', page: 'process:insurer-contractor' } ]
    },

    'mold': {
      nav: 'Mold & Biohazard', icon: 'microbe',
      eyebrow: 'Mold & Biohazard',
      h1: 'Mold and Biohazard Insurance Claims',
      tagline: 'Mold and contamination claims often depend on what caused the condition, how far it spread, and which policy provisions apply to the cleanup and resulting damage.',
      intro: [
        'Mold often develops after a water loss.',
        'A pipe leaks. A roof allows water inside. A supply line fails. Drying is delayed or incomplete, and mold appears days or weeks later.',
        'When that happens, the insurance company may treat the mold as a separate issue, apply a mold limitation or exclusion, or argue that the condition resulted from humidity, maintenance, or long-term moisture rather than the original water event.',
        'The cause matters.',
        'Biohazard and contamination claims can raise similar questions. Sewage backups, biological contamination, and other hazardous conditions may require specialized cleanup, removal of affected materials, testing, and reconstruction.',
        'We review the original cause of the loss, the extent of the contamination, the remediation records, and the policy to determine what coverage may apply.'
      ],
      sections: [
        { heading: 'Common Issues in Mold and Biohazard Claims', type: 'named', body: [
          { term: 'The cause of the mold.', desc: 'The insurance company may attribute mold to humidity, maintenance, condensation, or long-term moisture instead of a covered water event. Plumbing records, photographs, moisture readings, and the timing of the loss can become important.' },
          { term: 'Mold limits and exclusions.', desc: 'Many policies contain special provisions addressing mold, fungi, bacteria, or microbial growth. Whether a limitation applies, and what expenses fall within it, depends on the specific policy language and the circumstances of the loss.' },
          { term: 'Incomplete remediation scope.', desc: 'A remediation estimate may address cleaning or treatment without accounting for demolition, removal of contaminated materials, access, reconstruction, or other work necessary to restore the property.' },
          { term: 'Disputes over the extent of contamination.', desc: 'Mold, sewage, and other contaminants can spread beyond what is immediately visible. Moisture mapping, environmental assessment, testing, and remediation protocols may be needed to determine the full scope.' },
          { term: 'Clearance and reconstruction.', desc: 'Removing contamination is only part of the process. Depending on the loss, the property may also require post-remediation verification and reconstruction of walls, flooring, cabinetry, insulation, or other materials that were removed.' }
        ]},
        { heading: 'How We Review a Mold or Biohazard Claim', type: 'para', body: [
          'We begin with the event that caused the condition.',
          'For mold claims, that may mean reviewing the underlying water loss, plumbing records, roof damage, mitigation documents, photographs, moisture readings, and the timeline of when the mold appeared.',
          'For biohazard or contamination claims, we may review environmental reports, remediation protocols, sewage or plumbing records, testing results, contractor estimates, and the insurance company\u2019s coverage position.',
          'We then examine the policy provisions the insurance company is relying on, including any mold, fungi, bacteria, pollution, contamination, water, or sewage-related terms.',
          'The scope of the loss matters as much as the cause. We review not only the cost of remediation, but also demolition, removal, access, drying, clearance testing, and reconstruction where those items are part of the covered damage.',
          'The goal is to determine whether the insurance company properly identified the cause of the condition and correctly applied the policy to the full scope of the loss.'
        ]}
      ],
      stepsHeading: 'What To Do If You Discover Mold or Contamination',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Document the source of the problem.</strong> If the condition followed a water loss, sewage backup, roof leak, plumbing failure, or other event, photograph and preserve information about that source.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the affected areas.</strong> Document visible mold, staining, contaminated materials, and surrounding areas before cleanup when it is safe to do so.',
        '<strong style="color:var(--color-ink);font-weight:700">Address necessary remediation promptly.</strong> Health and safety should come first. Keep remediation protocols, testing results, photographs, invoices, moisture records, and other documentation of the work.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep the underlying claim documents.</strong> Save the insurance company\u2019s estimates, coverage letters, mitigation records, plumbing reports, and prior communications relating to the original loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the coverage decision reviewed.</strong> If the insurance company applies a mold limit, denies part of the remediation, or refuses to pay for reconstruction, send us the policy, coverage letter, and remediation documents. We can review how the claim was handled.'
      ],
      faqs: [
        { q: 'My policy has a mold limit. Does that limit everything related to the loss?', a: 'Not necessarily. A mold limitation may apply to certain mold-related expenses, but other damage from the underlying covered event may be treated differently under the policy. For example, damage caused directly by a covered water loss may raise separate coverage issues from the cost of treating mold itself. We review the policy language and the sequence of events to determine how the insurance company applied the limitation.' },
        { q: 'The mold appeared after the original leak was repaired. Can it still be related to that loss?', a: 'Yes. Mold may develop after a leak has been stopped, particularly if moisture remained in walls, flooring, insulation, cabinetry, or other materials. The timing of the loss, moisture records, remediation history, photographs, and environmental findings can help determine whether the later mold condition is connected to the original water event.' },
        { q: 'Does insurance cover sewage or other biohazard cleanup?', a: 'It depends on what caused the contamination and the terms of the policy. Sewage backups, contaminated water, biological material, and other hazardous conditions can involve different exclusions, endorsements, and coverage provisions. We review the source of the contamination and the policy language to determine what cleanup, removal, and reconstruction costs may be covered.' },
        { q: 'What if the insurance company pays for remediation but not the repairs afterward?', a: 'Remediation and reconstruction are different parts of the loss. If drywall, flooring, cabinetry, insulation, or other materials had to be removed because of covered damage, the cost of restoring those areas may need to be evaluated separately. We compare the remediation scope, repair estimates, and policy to determine whether additional benefits may be owed.' },
        { q: 'Do I need a lawyer for a mold or biohazard insurance claim?', a: 'A lawyer can make a real difference by reviewing the underlying cause of the loss, evaluating mold or contamination limits and exclusions, addressing disputes over remediation and reconstruction, and dealing directly with the insurance company when it denies or limits coverage. An attorney can also help organize the medical, environmental, plumbing, mitigation, and repair evidence that may be important to the claim.' }
      ],
      ctaTitle: 'Is the insurance company limiting or denying your mold or contamination claim?',
      ctaBody: 'Send us the coverage letter, remediation documents, and records from the original loss. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Water Damage', page: 'claim:water' }, { label: 'Frozen & Burst Pipe', page: 'claim:frozen-pipe' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'frozen-pipe': {
      nav: 'Frozen & Burst Pipe', icon: 'snowflake',
      eyebrow: 'Frozen & Burst Pipe',
      h1: 'Frozen and Burst Pipe Insurance Claims',
      tagline: 'Frozen and burst pipe claims often turn on whether the property was properly heated and what caused the pipe to fail.',
      intro: [
        'A hard freeze can cause a pipe to rupture and send water through walls, ceilings, flooring, and finished spaces in a matter of minutes.',
        'The insurance company may agree that the pipe burst but still dispute coverage. Common issues include whether heat was maintained, whether the property was vacant or unoccupied, whether the plumbing system should have been drained, or whether the failure was caused by corrosion or long-term deterioration rather than freezing.',
        'Those questions are fact-specific.',
        'Utility records, thermostat information, furnace service records, plumbing findings, photographs, and the condition of the failed pipe can all help establish what actually happened.',
        'We review that evidence along with the policy to determine whether the insurance company\u2019s position is supported by the facts.'
      ],
      sections: [
        { heading: 'Common Issues in Frozen Pipe Claims', type: 'named', body: [
          { term: 'Alleged failure to maintain heat.', desc: 'The insurance company may argue that the property was not adequately heated before the pipe froze. Utility records, thermostat data, HVAC service history, and other evidence may help show whether heat was being maintained.' },
          { term: 'Vacancy or occupancy disputes.', desc: 'Travel, seasonal use, a gap between tenants, or a temporarily unoccupied property can raise questions about vacancy or occupancy provisions. Whether those provisions apply depends on the policy language and the actual circumstances.' },
          { term: 'Freeze damage versus deterioration.', desc: 'The insurance company may attribute the failure to corrosion, age, wear, or long-term leakage instead of freezing. The failed section of pipe and the plumber\u2019s findings can be important in determining the cause.' },
          { term: 'Disputes over the repair scope.', desc: 'The insurance company may pay for emergency drying but dispute the cost of opening walls, removing damaged materials, replacing flooring, or rebuilding finished areas affected by the water.' }
        ]},
        { heading: 'How We Review a Frozen or Burst Pipe Claim', type: 'para', body: [
          'We begin with the cause of the pipe failure and the condition of the property at the time of the loss.',
          'That may include reviewing photographs, plumber reports, utility records, thermostat data, HVAC service records, mitigation documents, contractor estimates, and the insurance company\u2019s inspection findings.',
          'If the failed section of pipe is available, preserving it can be particularly important. Its condition may help determine whether the failure was caused by freezing, corrosion, deterioration, or another condition.',
          'We also review the full extent of the resulting water damage. A burst pipe can affect areas far beyond the immediate failure point, including insulation, drywall, flooring, cabinetry, ceilings, and finished basements.',
          'The goal is to determine whether the insurance company correctly evaluated both the cause of the loss and the amount of damage covered under the policy.'
        ]}
      ],
      stepsHeading: 'What To Do After a Frozen or Burst Pipe',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Preserve the failed section of pipe.</strong> If possible, keep the damaged pipe, valve, fitting, or other failed component after it is removed.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the damage before repairs begin.</strong> Document the failure point and the full extent of the water damage, including affected walls, ceilings, floors, and personal property.',
        '<strong style="color:var(--color-ink);font-weight:700">Save your utility and heating records.</strong> Gas and electric usage, thermostat information, and furnace or HVAC service records may become important if the insurance company questions whether heat was maintained.',
        '<strong style="color:var(--color-ink);font-weight:700">Take reasonable steps to prevent additional damage.</strong> Shut off the water, arrange for extraction and drying, and keep photographs, moisture logs, invoices, and receipts for the work performed.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the claim reviewed if coverage or the repair scope is disputed.</strong> Send us the denial letter, estimate, plumbing records, and mitigation documents. We can review the claim and help identify the issues driving the dispute.'
      ],
      faqs: [
        { q: 'We were out of town when the pipe froze. Does that mean the claim is not covered?', a: 'Not necessarily. Being away from the property does not automatically determine whether coverage applies. The insurance company may look at whether heat was maintained, whether the plumbing system was properly protected, and whether any vacancy or occupancy provisions apply. Utility records, thermostat information, and the specific policy language can be important in evaluating the claim.' },
        { q: 'The insurance company paid for drying but not for rebuilding the damaged areas. Can that be challenged?', a: 'Yes. Emergency mitigation and permanent repairs are separate parts of many water damage claims. If walls, flooring, ceilings, cabinetry, or other finished areas were damaged by a covered burst pipe, the cost of restoring those areas may need to be evaluated separately. We review the insurance company\u2019s estimate against the actual damage and repair scope to determine whether additional benefits may be owed.' },
        { q: 'What if a frozen pipe damages my business or commercial property?', a: 'Frozen and burst pipe losses can be especially disruptive at commercial properties because the damage may affect offices, retail space, equipment, inventory, tenant areas, or business operations. Commercial policies can also contain different vacancy, protective-safeguard, heating, and loss-of-income provisions. A lawyer can materially help by reviewing those policy requirements, addressing disputes over the cause of the loss, documenting the full repair scope, and evaluating whether additional coverage may apply to business interruption or other related losses.' }
      ],
      ctaTitle: 'Disagree with the insurance company\u2019s frozen pipe decision?',
      ctaBody: 'Send us the denial letter or estimate, along with any plumbing, utility, and mitigation records. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Water Damage', page: 'claim:water' }, { label: 'Commercial & Large Loss', page: 'claim:commercial' }, { label: 'Mold & Biohazard', page: 'claim:mold' } ]
    },

    'fire': {
      nav: 'Fire & Smoke', icon: 'flame',
      eyebrow: 'Fire & Smoke',
      h1: 'Fire and Smoke Damage Insurance Claims',
      tagline: 'Fire damage often extends far beyond the area where the flames were contained.',
      intro: [
        'A fire may be limited to one room, but smoke, soot, heat, and water from firefighting efforts can affect much more of the property.',
        'Smoke can travel through walls, ceilings, HVAC systems, ductwork, and adjoining rooms. Electronics, furniture, clothing, cabinetry, flooring, and other contents may also be affected even when they were never directly exposed to flames.',
        'That is why fire claims often involve significant disputes over scope and value.',
        'The insurance company may agree that the fire is covered but disagree about how far the smoke traveled, which materials can be cleaned instead of replaced, whether HVAC or electrical systems were affected, what damaged contents are worth, or what it will actually cost to rebuild the property.',
        'We review the full loss, not just the visibly burned area.'
      ],
      sections: [
        { heading: 'Common Issues in Fire and Smoke Claims', type: 'named', body: [
          { term: 'Smoke and soot damage.', desc: 'The insurance company may limit cleaning or replacement to the areas closest to the fire. Depending on how smoke traveled through the property, additional rooms, surfaces, ductwork, equipment, and contents may need to be evaluated.' },
          { term: 'Contents valuation.', desc: 'Fire claims can involve hundreds or thousands of personal property items. Disputes may arise over what was damaged, whether an item can be cleaned, its replacement cost, and the amount of depreciation applied.' },
          { term: 'HVAC, electrical, and mechanical systems.', desc: 'Smoke, soot, heat, and firefighting water can affect systems that do not show obvious exterior damage. Inspection or testing may be necessary to determine whether cleaning, repair, or replacement is appropriate.' },
          { term: 'Additional living expenses.', desc: 'When a home cannot safely be occupied, the policy may provide coverage for temporary housing and other increased living expenses, subject to its terms and limits. Disagreements can arise over what expenses are reasonable and how long benefits should continue.' },
          { term: 'Rebuilding and code requirements.', desc: 'Restoring a fire-damaged property can require work beyond replacing what visibly burned. Building requirements, demolition, access, electrical work, structural repairs, and other items may affect the final scope and cost.' }
        ]},
        { heading: 'How We Review a Fire and Smoke Claim', type: 'para', body: [
          'We begin by looking at the entire property and the insurance company\u2019s proposed scope of repair.',
          'That may include fire department records, photographs, restoration reports, contractor estimates, contents inventories, testing results, engineering findings, HVAC evaluations, and the insurance company\u2019s inspection documents.',
          'When smoke or soot contamination is disputed, qualified restoration or environmental professionals may be needed to evaluate where contamination traveled and what cleaning or replacement is appropriate.',
          'We also review the contents portion of the claim. A detailed inventory can be time-consuming, but it is often a significant part of the loss. We help identify what documentation is needed and how the insurance company is valuing damaged property.',
          'For displaced families, we review additional living expense benefits and the documentation supporting temporary housing and other increased costs.',
          'The goal is to make sure the claim accounts for the full effect of the fire, smoke, soot, water, and necessary reconstruction.'
        ]}
      ],
      stepsHeading: 'What To Do After a Fire',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Secure the property and preserve important records.</strong> Keep the fire department report information, photographs, insurance communications, and any records relating to the cause of the fire.',
        '<strong style="color:var(--color-ink);font-weight:700">Document the property before major demolition or disposal.</strong> Photograph damaged rooms, contents, structural components, and areas affected by smoke or water whenever it is safe to do so.',
        '<strong style="color:var(--color-ink);font-weight:700">Begin a contents inventory.</strong> Work room by room and photograph damaged items before they are discarded when possible. Keep receipts, photographs, credit card records, or other information that may help establish what was lost.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep records of displacement expenses.</strong> Save receipts for temporary housing, meals, laundry, transportation, storage, pet boarding, and other increased expenses caused by the loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Review the insurance company\u2019s estimate carefully.</strong> If the estimate does not account for the full extent of the smoke, contents, systems, or rebuilding work, send us the estimate and supporting documents. We can review where the scope differs.'
      ],
      faqs: [
        { q: 'The insurance company wants a recorded statement about the fire. Should I give one?', a: 'Your policy may require cooperation with the insurance company\u2019s investigation, which can include statements or examinations in some circumstances. A recorded statement can become part of the claim record, so it is important to understand what is being requested and why. A lawyer can review the request, explain your obligations, and help you prepare before you provide a statement.' },
        { q: 'Can I choose my own restoration contractor?', a: 'Your rights depend on the policy and the circumstances of the loss, but you may have the ability to obtain your own contractors, estimates, and professional opinions. If the insurance company recommends a restoration company, you can still review the proposed scope and compare it with other qualified assessments before agreeing to permanent work.' },
        { q: 'There was no fire damage in part of my house, but it smells like smoke. Can that still be part of the claim?', a: 'Yes. Smoke and soot can travel well beyond the room where the fire occurred, including through hallways, wall cavities, ductwork, and HVAC systems. Whether cleaning or replacement is necessary depends on the extent of the contamination and the materials affected. We review the testing, restoration recommendations, and policy to determine whether the insurance company\u2019s scope addresses the full smoke loss.' },
        { q: 'Do I need a lawyer for a fire or smoke insurance claim?', a: 'A lawyer can make a real difference by reviewing the policy, addressing disputes over smoke and soot damage, evaluating contents and rebuilding estimates, helping with additional living expense issues, and dealing directly with the insurance company when the claim is delayed or underpaid. An attorney can also coordinate the contractors, restoration professionals, engineers, or other experts needed to document the full extent of the loss.' }
      ],
      ctaTitle: 'Think the insurance company missed part of your fire or smoke damage?',
      ctaBody: 'Send us the insurance company\u2019s estimate, photographs, restoration reports, and any contents documentation. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Lightning Damage', page: 'claim:lightning' }, { label: 'Commercial & Large Loss', page: 'claim:commercial' }, { label: 'The Insurer\u2019s Contractor', page: 'process:insurer-contractor' } ]
    },

    'commercial': {
      nav: 'Commercial & Large Loss', icon: 'building-2',
      eyebrow: 'Commercial & Large Loss',
      h1: 'Commercial Property Insurance Claims',
      tagline: 'Commercial property losses can affect more than the building. They can disrupt operations, reduce revenue, damage inventory and equipment, and create expenses that continue long after the initial loss.',
      intro: [
        'A serious commercial property loss can create several insurance issues at the same time.',
        'There is the physical damage to the building, roof, equipment, inventory, or tenant space. There may also be lost business income, extra expenses incurred to keep operating, delays in reopening, and disputes over what the insurance company will pay while repairs are underway.',
        'Commercial claims can also involve more complicated policies, larger estimates, multiple consultants, extensive document requests, and competing opinions about the scope and value of the loss.',
        'We represent property owners, businesses, associations, and landlords in commercial property insurance disputes. We review both the physical damage and the financial effects of the loss so the claim is evaluated as a whole.'
      ],
      sections: [
        { heading: 'Common Issues in Commercial Property Claims', type: 'named', body: [
          { term: 'Extensive document requests.', desc: 'Commercial claims often require financial records, leases, repair estimates, inventories, invoices, contracts, and other documentation. We help organize what is required, respond to appropriate requests, and maintain a clear record of what has already been provided.' },
          { term: 'Business income disputes.', desc: 'Calculating lost income is rarely as simple as comparing revenue before and after a loss. The analysis may involve historical performance, seasonality, projected growth, continuing expenses, saved expenses, and the amount of time reasonably required to restore operations.' },
          { term: 'Disagreements over the repair scope.', desc: 'Large commercial losses may involve adjusters, engineers, contractors, consultants, and other professionals with different opinions about what must be repaired or replaced. Even relatively small differences in scope can significantly affect a large claim.' },
          { term: 'Landlord and tenant issues.', desc: 'A loss involving leased property can raise questions about who is responsible for the building, improvements, equipment, inventory, and other property. The lease and the applicable insurance policies often need to be reviewed together.' },
          { term: 'Interim funding.', desc: 'Repairs and operating expenses do not necessarily stop while the insurance company completes its investigation. In appropriate claims, we evaluate whether additional or advance payments should be requested while the final amount of the loss is still being determined.' }
        ]},
        { heading: 'How We Handle a Commercial Property Claim', type: 'para', body: [
          'We begin by understanding both the property damage and the effect the loss has had on the business or property operations.',
          'For the physical damage, that may include reviewing contractor estimates, engineering reports, roofing assessments, photographs, inventories, equipment evaluations, code requirements, and the insurance company\u2019s estimates and inspection findings.',
          'For business income and extra expense claims, we review the financial records needed to document how the loss affected operations. Depending on the size and complexity of the claim, that may involve working with accountants or other financial professionals.',
          'We also identify the policy provisions that may affect coverage, including business income, extra expense, period of restoration, ordinance or law, equipment, inventory, tenant improvements, and other applicable coverages.',
          'Throughout the claim, our goal is to keep the issues organized, document the loss properly, and deal directly with the insurance company so owners and management can remain focused on the property and the business.',
          'If the insurance company disputes coverage, delays payment, or refuses to pay the supported amount of the loss, we evaluate the appropriate next step, including negotiation, appraisal where available and appropriate, mediation, or litigation.'
        ]}
      ],
      stepsHeading: 'What To Do After a Commercial Property Loss',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Preserve the evidence.</strong> Photograph and document damaged areas, equipment, inventory, building components, and other property before they are discarded or permanently altered whenever reasonably possible.',
        '<strong style="color:var(--color-ink);font-weight:700">Start documenting the financial impact immediately.</strong> Keep records of lost revenue, canceled business, additional payroll, temporary space, equipment rental, relocation costs, and other expenses caused by the loss.',
        '<strong style="color:var(--color-ink);font-weight:700">Centralize communications with the insurance company.</strong> Designate one person to maintain correspondence, document requests, inspection information, and other claim communications.',
        '<strong style="color:var(--color-ink);font-weight:700">Review important documents before signing them.</strong> Access agreements, proofs of loss, releases, settlement documents, and other claim-related forms can affect your rights. Have documents you do not fully understand reviewed before signing.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the claim reviewed early.</strong> Commercial claims become more difficult to reconstruct as time passes. Send us the policy, the insurance company\u2019s estimate or correspondence, and a summary of the loss. We can review the claim and identify the issues that need attention.'
      ],
      faqs: [
        { q: 'Do we need a forensic accountant for a business interruption claim?', a: 'A forensic accountant can be valuable when the business income portion of a claim is substantial or financially complex. Business interruption calculations may require analysis of historical revenue, expected performance, seasonality, continuing expenses, saved expenses, and the period of restoration. When appropriate, we work with financial professionals to develop and support the business income claim.' },
        { q: 'Can we begin repairs before the insurance company finishes its investigation?', a: 'Often, repairs cannot simply wait. The policy may also require reasonable steps to protect the property from additional damage. The important part is documenting the condition of the property, providing appropriate notice, preserving relevant evidence, and giving the insurance company a reasonable opportunity to inspect when required. We can help coordinate those issues so necessary repairs do not create an avoidable dispute later.' },
        { q: 'The insurance company assigned an outside adjusting firm. What does that mean?', a: 'Insurance companies frequently use independent adjusting firms and outside consultants on larger commercial losses. Their involvement does not necessarily indicate how the claim will be decided, but it usually means the claim will involve a more formal investigation and documentation process. We review the work of the adjusters and consultants, track what is being requested, and make sure the policyholder\u2019s position is supported by its own evidence.' },
        { q: 'Do we need a lawyer for a commercial property insurance claim?', a: 'A lawyer can materially help with a commercial property claim by reviewing the policy, coordinating the property damage and business income portions of the loss, managing communications and document requests, addressing coverage disputes, and working with contractors, accountants, engineers, and other professionals when needed. When significant property, revenue, or business operations are at stake, early legal involvement can also help identify issues before they become larger disputes.' }
      ],
      ctaTitle: 'Dealing with a significant commercial property loss?',
      ctaBody: 'Send us the policy, the insurance company\u2019s correspondence or estimate, and a summary of what happened. We\u2019ll review the claim and give you a straightforward assessment of the issues and next steps.',
      related: [ { label: 'Fire & Smoke', page: 'claim:fire' }, { label: 'Appraisal, Explained', page: 'process:appraisal' }, { label: 'Roof Damage', page: 'claim:roof' } ]
    },

    'lightning': {
      nav: 'Lightning', icon: 'cloud-lightning',
      eyebrow: 'Lightning',
      h1: 'Lightning Damage Insurance Claims',
      tagline: 'Lightning damage is not always obvious, and problems with electrical systems and equipment may not appear immediately after the storm.',
      intro: [
        'A lightning strike can affect much more than the place where it makes contact.',
        'Electrical energy can travel through wiring and connected systems, affecting HVAC equipment, appliances, electronics, electrical panels, pool equipment, well pumps, security systems, and other components throughout the property.',
        'Some equipment may stop working immediately. Other problems may not become apparent until later.',
        'That can create a dispute with the insurance company over whether the storm caused the failure or whether the equipment stopped working because of age, wear, or an unrelated electrical problem.',
        'We review the timing of the loss, storm information, inspection findings, equipment evaluations, photographs, and the policy to determine whether the insurance company properly evaluated the full extent of the lightning or surge damage.'
      ],
      sections: [
        { heading: 'Common Issues in Lightning Damage Claims', type: 'named', body: [
          { term: 'Direct strike versus electrical surge.', desc: 'A property does not necessarily need to show an obvious burn or impact point for electrical equipment to be affected. The insurance company may dispute whether a surge was related to lightning or came from another electrical source, making evidence about the storm and the equipment failure important.' },
          { term: 'Damage discovered after the storm.', desc: 'Not every electrical problem is identified immediately. When equipment fails days or weeks later, the insurance company may question whether the loss is connected to the lightning event.' },
          { term: 'Multiple systems affected.', desc: 'A lightning or surge event may involve more than one appliance or piece of equipment. Looking at each failure separately can miss a larger pattern involving several connected systems.' },
          { term: 'Age and wear.', desc: 'The insurance company may attribute a failed compressor, appliance, pump, control board, or other component to age or ordinary wear rather than the storm. Technical findings about how the equipment failed can become important.' },
          { term: 'Repair versus replacement.', desc: 'Even when lightning damage is accepted, there may be disagreements over whether damaged equipment can be repaired, whether individual components should be replaced, or whether replacement of the entire system is necessary.' }
        ]},
        { heading: 'How We Review a Lightning Damage Claim', type: 'para', body: [
          'We begin by identifying what changed at the property during and after the storm.',
          'That may include reviewing electrician reports, HVAC findings, equipment diagnostics, repair estimates, photographs, storm information, invoices, and the insurance company\u2019s inspection documents.',
          'When causation is disputed, we look closely at the explanation for how the equipment failed. A technician\u2019s findings about damaged electrical components, control boards, motors, compressors, wiring, or other systems may help determine whether the failure is consistent with an electrical event.',
          'We also look at the claim as a whole. If several systems or devices failed at or around the same time, that pattern may be relevant when evaluating the insurance company\u2019s conclusion.',
          'The goal is to determine which damage can reasonably be connected to the reported event and whether the insurance company accounted for the full scope of the loss.'
        ]}
      ],
      stepsHeading: 'What To Do After Suspected Lightning Damage',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Make a list of anything that stopped working or began behaving differently.</strong> Include HVAC systems, appliances, televisions, computers, pool equipment, well pumps, garage doors, security systems, smart-home equipment, and other electrical devices.',
        '<strong style="color:var(--color-ink);font-weight:700">Do not discard damaged equipment.</strong> When practical, preserve failed components until they have been documented and the insurance company has had an appropriate opportunity to inspect them.',
        '<strong style="color:var(--color-ink);font-weight:700">Get written findings from qualified technicians.</strong> Ask electricians, HVAC contractors, or equipment technicians to document what failed, what they observed, and whether they can identify a possible cause.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph any visible damage.</strong> Document scorch marks, damaged outlets, electrical panels, wiring, trees, roofing, or other areas that may show evidence of the event.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep documenting problems that appear later.</strong> If additional equipment fails after the storm, note when the problem began and obtain written diagnostic findings whenever possible.'
      ],
      faqs: [
        { q: 'My air conditioner stopped working days or weeks after the storm. Can it still be related to the lightning?', a: 'Possibly. The fact that equipment continued operating for a period of time does not automatically rule out a connection to the storm. The timing of the failure, the condition of the equipment, diagnostic findings, and what occurred during the storm all need to be evaluated. We review the technician\u2019s findings and the insurance company\u2019s explanation to determine whether the cause has been properly assessed.' },
        { q: 'Do I have to prove that lightning actually struck my house?', a: 'Not every lightning-related electrical loss involves an obvious direct impact to the structure. A dispute may instead involve whether an electrical surge or other event was caused by nearby lightning. Storm information, electrician findings, damaged equipment, photographs, and other evidence can help establish what occurred.' },
        { q: 'Does homeowners insurance cover electronics and appliances damaged by a lightning surge?', a: 'Coverage depends on the policy and the cause of the electrical damage. Lightning itself is commonly addressed as a covered cause of loss, but the treatment of electrical surges can depend on how the surge occurred and the specific policy language. We review both the cause of the failure and the applicable provisions before determining what should be covered.' },
        { q: 'What if the insurance company paid for some damaged electronics but denied my HVAC or other equipment?', a: 'A partial payment does not necessarily resolve every part of the loss. Different systems may require different types of technical evaluation. We review the reason the insurance company accepted some items but rejected others and compare that position with the timing, diagnostics, and evidence surrounding each failure.' },
        { q: 'Do I need a lawyer for a lightning damage insurance claim?', a: 'A lawyer can make a real difference when the insurance company disputes whether lightning caused the damage, attributes equipment failure to age or wear, pays for only some of the affected systems, or refuses to reconsider the claim after additional technical evidence is provided. An attorney can review the policy, coordinate electrician and equipment findings, address causation disputes, and deal directly with the insurance company to pursue additional benefits.' }
      ],
      ctaTitle: 'Did equipment start failing after a lightning storm?',
      ctaBody: 'Send us the insurance company\u2019s estimate or coverage decision, along with any electrician, HVAC, or equipment reports. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Fire & Smoke', page: 'claim:fire' }, { label: 'Water Damage', page: 'claim:water' }, { label: 'Underpaid Claims', page: 'claim:underpaid' } ]
    },

    'tornado': {
      nav: 'Tornado', icon: 'tornado',
      eyebrow: 'Tornado',
      h1: 'Tornado Damage Insurance Claims',
      tagline: 'Tornado damage can extend well beyond what is immediately visible, and an incomplete inspection can leave major parts of the loss unpaid.',
      intro: [
        'A tornado can damage a property in seconds, but identifying the full extent of that damage can take much longer.',
        'Some damage is obvious: missing roofing, broken windows, fallen trees, damaged fencing, and water intrusion. Other problems can be harder to see, including movement in framing, trusses, connections, walls, and other structural components.',
        'That is why tornado claims often involve more than simply pricing the areas that were visibly torn away.',
        'The insurance company may acknowledge storm damage but dispute how much of the property needs to be repaired or replaced. We review the inspection findings, structural evidence, estimates, photographs, and policy to determine whether the full scope of the loss has been addressed.'
      ],
      sections: [
        { heading: 'Common Issues in Tornado Claims', type: 'named', body: [
          { term: 'Damage limited to what is immediately visible.', desc: 'An estimate may address missing roofing, siding, or other obvious damage while overlooking less visible structural movement or damage to adjoining areas.' },
          { term: 'Repair versus replacement disputes.', desc: 'The insurance company may propose limited repairs to roofing, framing, trusses, siding, or other components when a contractor or engineer believes more extensive work is necessary.' },
          { term: 'Structural damage.', desc: 'High winds can affect framing, connections, roof systems, and walls even when the damage is not obvious in photographs. A structural evaluation may be necessary when movement or uplift is suspected.' },
          { term: 'Debris removal and access costs.', desc: 'Trees, damaged structures, and debris can make repairs more complicated and expensive. Whether those costs are covered depends on the policy and the circumstances of the loss.' },
          { term: 'Damage to other structures.', desc: 'Fences, sheds, detached garages, screen enclosures, signs, and other structures can be overlooked when the primary focus is on the main building.' }
        ]},
        { heading: 'How We Review a Tornado Damage Claim', type: 'para', body: [
          'We begin by documenting the full extent of the loss and comparing it with what the insurance company inspected and estimated.',
          'That may include photographs, contractor estimates, roofing assessments, engineering reports, storm information, repair invoices, and the insurance company\u2019s claim documents.',
          'When structural damage is suspected, an engineering review can help determine whether the storm affected framing, trusses, connections, walls, or other structural components.',
          'We also look beyond the main structure. Tornado losses can involve roofing, siding, windows, interiors, fencing, detached structures, landscaping, debris removal, and water damage caused by storm-created openings.',
          'The goal is to make sure the claim reflects the actual damage caused by the storm, not just the most obvious damage visible during the first inspection.'
        ]}
      ],
      stepsHeading: 'What To Do After Tornado Damage',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Document the property before cleanup when it is safe to do so.</strong> Take wide photographs and close-ups of the building, roof, exterior, interior, debris, trees, fencing, and other damaged areas.',
        '<strong style="color:var(--color-ink);font-weight:700">Protect the property from additional damage.</strong> Make reasonable temporary repairs where necessary and keep photographs, invoices, and receipts for the work.',
        '<strong style="color:var(--color-ink);font-weight:700">Avoid disturbing suspected structural damage unnecessarily.</strong> If walls, framing, trusses, or other structural components appear to have moved, consider having them evaluated before permanent repairs begin.',
        '<strong style="color:var(--color-ink);font-weight:700">Make a complete list of damaged property.</strong> Include the main structure, detached buildings, fencing, screen enclosures, equipment, and other property affected by the storm.',
        '<strong style="color:var(--color-ink);font-weight:700">Review the insurance company\u2019s estimate carefully.</strong> If the estimate does not account for the full extent of the damage, send us the photographs, reports, and estimates. We can review the claim and identify where the scope may be incomplete.'
      ],
      faqs: [
        { q: 'Is tornado damage covered differently than hurricane damage?', a: 'It can be. Tornado and hurricane losses may both involve wind damage, but the applicable deductible, policy provisions, and coverage issues can depend on the policy and the circumstances of the storm. We review the policy and the reported cause of loss to determine which provisions apply to the claim.' },
        { q: 'The insurance company says the structural problems existed before the tornado. How can that be challenged?', a: 'Pre-existing damage is often a factual and technical issue. Photographs, maintenance records, engineering findings, the condition of the property before the storm, and evidence of the tornado\u2019s intensity can all be relevant. We review the basis for the insurance company\u2019s conclusion and, when appropriate, work with qualified professionals to determine whether the structural condition is consistent with storm damage.' },
        { q: 'Do I need a lawyer for a tornado damage claim?', a: 'A lawyer can materially help when the insurance company disputes structural damage, limits the repair scope, attributes damage to pre-existing conditions, or underpays the loss. An attorney can review the policy and claim documents, address the insurance company\u2019s coverage positions, coordinate supporting evidence, and pursue payment for damage that may have been overlooked or improperly excluded.' }
      ],
      ctaTitle: 'Think the insurance company missed part of the tornado damage?',
      ctaBody: 'Send us the insurance company\u2019s estimate, photographs, and any contractor or engineering reports. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Wind & Hail', page: 'claim:wind-hail' }, { label: 'Roof Damage', page: 'claim:roof' } ]
    },

    'theft': {
      nav: 'Theft & Vandalism', icon: 'mask',
      eyebrow: 'Theft & Vandalism',
      h1: 'Theft and Vandalism Insurance Claims',
      tagline: 'Theft and vandalism claims can become complicated quickly, especially when the insurance company questions ownership, value, occupancy, or how the loss occurred.',
      intro: [
        'A break-in or act of vandalism can leave behind more than missing property.',
        'Doors may be damaged. Windows may be broken. Walls, flooring, fixtures, appliances, electrical systems, or other parts of the property may need repair. At the same time, the insurance company may ask for detailed documentation of the items that were stolen or damaged.',
        'That can be difficult when receipts no longer exist or when the property was purchased years ago.',
        'We review the police report, photographs, inventories, financial records, repair estimates, and policy to determine what evidence is available and whether the insurance company has properly evaluated the loss.'
      ],
      sections: [
        { heading: 'Common Issues in Theft and Vandalism Claims', type: 'named', body: [
          { term: 'Proof of ownership.', desc: 'The insurance company may ask for receipts, photographs, bank statements, credit card records, warranties, appraisals, or other evidence showing that stolen property belonged to you. Older items, gifts, and inherited property can be more difficult to document.' },
          { term: 'Contents valuation.', desc: 'Disputes may arise over the value of stolen or damaged property, depreciation, replacement cost, and whether certain items are subject to special policy limits.' },
          { term: 'Vacancy and occupancy issues.', desc: 'Some policies contain provisions that affect theft or vandalism coverage when a property has been vacant or unoccupied for a certain period of time. Whether those provisions apply depends on the policy language and the actual use of the property.' },
          { term: 'Damage caused during the break-in.', desc: 'The loss may include more than the stolen property. Doors, windows, locks, walls, flooring, fixtures, security systems, and other parts of the property may also require repair or replacement.' },
          { term: 'Questions about how the loss occurred.', desc: 'The insurance company may request a recorded statement, examination, additional documents, or other information as part of its investigation. Those requests can become especially important when the company disputes the circumstances of the loss.' }
        ]},
        { heading: 'How We Review a Theft or Vandalism Claim', type: 'para', body: [
          'We begin with the police report, the insurance company\u2019s requests, and the available evidence of what was stolen or damaged.',
          'For personal property, that may include photographs, bank or credit card records, online purchase histories, warranties, appraisals, prior inventories, witness information, and replacement pricing.',
          'For building damage, we review photographs, contractor estimates, repair invoices, security records, and evidence of how the property was entered or damaged.',
          'We also review any policy provisions affecting theft, vandalism, vacancy, occupancy, special limits, or proof-of-loss requirements.',
          'The goal is to build a reasonable and well-supported record of the loss and determine whether the insurance company has properly valued and handled the claim.'
        ]}
      ],
      stepsHeading: 'What To Do After Theft or Vandalism',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">File a police report.</strong> Keep the report number and obtain a copy when it becomes available.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the property before repairs.</strong> Document entry points, damaged doors or windows, disturbed rooms, vandalism, and any remaining damaged property.',
        '<strong style="color:var(--color-ink);font-weight:700">Begin an inventory of what was stolen or damaged.</strong> Use photographs, bank and credit card records, online purchase histories, warranties, appraisals, and other available information to help reconstruct the list.',
        '<strong style="color:var(--color-ink);font-weight:700">Secure the property.</strong> Make reasonable temporary repairs to prevent additional loss and keep invoices and receipts.',
        '<strong style="color:var(--color-ink);font-weight:700">Be careful with recorded statements and formal examinations.</strong> If the insurance company requests a recorded statement, examination, or extensive documentation and the claim has become disputed, consider having the request reviewed before proceeding.'
      ],
      faqs: [
        { q: 'I do not have receipts for most of what was stolen. Can I still make a claim?', a: 'Yes. Receipts can be useful, but they are not the only way to document ownership or value. Photographs, bank and credit card records, online purchase histories, warranties, appraisals, witness information, and a detailed inventory may all help support the claim. We review what documentation is available and help organize the evidence around the items that were lost.' },
        { q: 'What if the insurance company says my property was vacant?', a: 'Vacancy and occupancy provisions can affect coverage, but the answer depends on the wording of the policy and the circumstances at the property. A temporary absence, a property between tenants, a seasonal residence, and a truly vacant building are not necessarily treated the same way. We review the policy definition and the facts before accepting the insurance company\u2019s position.' },
        { q: 'Does insurance cover vandalism caused by a tenant?', a: 'It depends on the policy and the nature of the damage. Landlord and commercial property policies may treat intentional damage by a tenant differently from vandalism committed by an unknown third party, and some policies contain exclusions or limitations involving dishonest or intentional acts by people who have possession of the property. We review the lease, the policy, photographs, repair estimates, and circumstances of the damage to determine what coverage may apply.' },
        { q: 'What if the thief damaged my doors, windows, or other parts of the property?', a: 'Those repairs may be part of the claim in addition to the stolen contents, depending on the policy. Damage to doors, windows, locks, walls, flooring, security systems, and other building components should be documented and included in the loss evaluation.' },
        { q: 'Should I give the insurance company a recorded statement about the theft?', a: 'Your policy may require cooperation with the insurance company\u2019s investigation, and a recorded statement may be part of that process. Because the statement becomes part of the claim record, it is important to understand what is being requested and why. A lawyer can review the request and help you prepare before you provide a statement.' },
        { q: 'Do I need a lawyer for a theft or vandalism insurance claim?', a: 'A lawyer can make a real difference when the insurance company questions ownership, disputes the value of stolen property, raises vacancy or occupancy issues, requests extensive statements or examinations, or denies part of the building damage. An attorney can review the policy, help organize the proof of loss, address coverage disputes, and deal directly with the insurance company to pursue the benefits available under the policy.' }
      ],
      ctaTitle: 'Is the insurance company questioning or underpaying your theft or vandalism claim?',
      ctaBody: 'Send us the coverage letter, inventory, police report, photographs, and any repair estimates. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Delayed Claims', page: 'claim:delayed' }, { label: 'FAQ', page: 'faq' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    },

    'sinkhole': {
      nav: 'Sinkhole & Ground Collapse', icon: 'map-pin',
      eyebrow: 'Sinkhole & Ground Collapse',
      h1: 'Sinkhole and Ground Settlement Insurance Claims',
      tagline: 'Ground movement claims can be highly technical, and coverage often depends on exactly what caused the movement and how the policy defines it.',
      intro: [
        'Cracks in block walls, doors that no longer close properly, separating finishes, and sloping floors can all point to movement beneath or around a structure.',
        'But identifying the cause is not always straightforward.',
        'The insurance company may attribute the damage to settlement, soil movement, construction conditions, shrink-swell soils, or another excluded cause. In other cases, the issue may be whether the conditions meet the policy\u2019s definition of sinkhole activity or another covered form of ground collapse.',
        'Those distinctions can have major coverage consequences.',
        'We review the policy, the testing, the structural findings, and the insurance company\u2019s conclusions to determine whether the cause of the damage has been properly evaluated.'
      ],
      sections: [
        { heading: 'Common Issues in Sinkhole and Ground Movement Claims', type: 'named', body: [
          { term: 'Disputes over the cause of the movement.', desc: 'Settlement, soil conditions, sinkhole activity, construction issues, and other forms of ground movement can produce similar symptoms at the surface. Determining the actual cause often requires more than a visual inspection.' },
          { term: 'Disagreements over testing.', desc: 'The insurance company may rely on geotechnical testing, structural evaluations, or other expert findings to support its coverage decision. The location, scope, methodology, and interpretation of that testing can become important when the conclusions are disputed.' },
          { term: 'Policy definition disputes.', desc: 'Terms such as sinkhole activity, settlement, earth movement, and ground collapse may be defined differently by the policy and applicable state law. The precise wording can determine whether a particular condition falls within or outside coverage.' },
          { term: 'Repair-method disputes.', desc: 'Even when damage is acknowledged, the parties may disagree about what is necessary to stabilize and repair the property. Cosmetic repairs, grouting, underpinning, foundation work, and structural repairs can involve very different scopes and costs.' }
        ]},
        { heading: 'How We Review a Sinkhole or Ground Movement Claim', type: 'para', body: [
          'We begin with the policy and the evidence used to determine what caused the damage.',
          'That may include structural engineering reports, geotechnical reports, subsurface testing, photographs, repair recommendations, historical property records, and the insurance company\u2019s inspection and testing materials.',
          'When the insurance company has conducted testing, we review what was tested, where testing occurred, what methodology was used, and whether the conclusions are supported by the data.',
          'Where additional technical review is appropriate, we may work with qualified structural engineers, geotechnical professionals, or other experts to evaluate the cause and extent of the movement.',
          'We also review the proposed repair method. The issue is not simply how to cover visible cracks, but whether the recommended work addresses the condition causing the damage and restores the property as required by the applicable coverage.'
        ]}
      ],
      stepsHeading: 'What To Do If You Suspect Ground Movement',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Document changes in the property.</strong> Photograph and date cracks, separations, uneven flooring, and other visible conditions. Continue documenting significant changes over time.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep notes about doors, windows, and other movement.</strong> Record when doors or windows begin sticking, gaps appear, or other conditions change.',
        '<strong style="color:var(--color-ink);font-weight:700">Be cautious about permanent repairs before the cause is evaluated.</strong> Repairing visible damage before appropriate inspection or testing can make it more difficult to determine what caused the movement.',
        '<strong style="color:var(--color-ink);font-weight:700">Request the complete reports.</strong> If the insurance company conducts structural or geotechnical testing, ask for the full reports and supporting findings rather than relying only on a summary.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the findings reviewed if you disagree with them.</strong> Send us the policy, reports, photographs, and the insurance company\u2019s coverage decision. We can review the claim and identify the issues that may require further evaluation.'
      ],
      faqs: [
        { q: 'The insurance company tested my property and found no sinkhole activity. Is that the end of the claim?', a: 'Not necessarily. The testing results should be evaluated in light of what was tested, where the testing was performed, the methodology used, and the conclusions drawn from the data. If the physical condition of the property or other evidence does not match the insurance company\u2019s explanation, further review may be appropriate.' },
        { q: 'What is the difference between sinkhole coverage and catastrophic ground collapse coverage?', a: 'They can involve different definitions, coverage requirements, and factual triggers. The distinction depends on the language of the policy and the law that applies to the claim. We review both the policy definitions and the conditions at the property to determine which provisions may apply.' },
        { q: 'Do I need a lawyer for a sinkhole or ground movement claim?', a: 'A lawyer can materially help by reviewing the policy definitions, evaluating the insurance company\u2019s testing and expert reports, identifying disputes over causation, coordinating appropriate technical review, and addressing disagreements over the repair method and scope. Because these claims often depend on both legal definitions and highly technical evidence, early legal involvement can help make sure the claim is developed around the issues that actually control coverage.' }
      ],
      ctaTitle: 'Disagree with the insurance company\u2019s ground movement findings?',
      ctaBody: 'Send us the policy, testing reports, photographs, and coverage decision. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Commercial & Large Loss', page: 'claim:commercial' }, { label: 'FAQ', page: 'faq' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    }
  };

  // ---- Other Practice Areas ----
  var practices = {
    'personal-injury': {
      nav: 'Personal Injury', icon: 'hand-heart',
      eyebrow: 'Personal Injury',
      h1: 'Personal Injury Attorneys',
      tagline: 'When someone else\u2019s negligence causes a serious injury, the insurance company immediately begins evaluating what the claim is worth. You should have someone doing the same for you.',
      intro: [
        'Our firm spends much of its time dealing with insurance companies. That experience carries directly into personal injury cases, where insurers investigate what happened, question fault, review medical treatment, and decide what they believe an injury is worth.',
        'We represent people injured because of someone else\u2019s negligence, including motor vehicle crashes, unsafe property conditions, and other accidents that result in serious injuries.',
        'A personal injury claim is about more than medical bills. A serious injury can affect your ability to work, care for your family, sleep, drive, exercise, or live the way you did before the accident. Our job is to document the full impact of the injury and pursue compensation that reflects it.'
      ],
      sections: [
        { heading: 'How We Handle Personal Injury Cases', type: 'named', body: [
          { term: 'We investigate what happened.', desc: 'We gather the available photographs, video, reports, witness information, vehicle or property evidence, and other records needed to establish how the injury occurred and who was responsible.' },
          { term: 'We document the full extent of the injury.', desc: 'Medical bills are only one part of a personal injury claim. We also evaluate lost income, future treatment, diminished earning capacity where applicable, and the ways the injury has affected your everyday life.' },
          { term: 'We deal directly with the insurance company.', desc: 'Once we represent you, we handle communications about the injury claim, respond to the insurance company\u2019s requests, and address attempts to minimize fault, treatment, or damages.' },
          { term: 'We prepare the case with litigation in mind.', desc: 'Evidence is easier to preserve early than to recreate later. We develop the liability and damages portions of the case so we are prepared to pursue litigation if a fair resolution cannot be reached.' },
          { term: 'We keep you informed.', desc: 'You should understand what is happening with your case. We explain the process, important decisions, potential risks, and developments as the case moves forward.' }
        ]}
      ],
      stepsHeading: 'What To Do After a Serious Injury',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Get appropriate medical care.</strong> Your health comes first. Follow the recommendations of your medical providers and keep records relating to your treatment.',
        '<strong style="color:var(--color-ink);font-weight:700">Preserve evidence if you can.</strong> Photograph the vehicles, accident scene, property condition, hazard, injuries, or other relevant evidence when it is safe to do so.',
        '<strong style="color:var(--color-ink);font-weight:700">Make sure the incident is documented.</strong> Obtain the appropriate crash report, police report, incident report, or other available record and keep a copy.',
        '<strong style="color:var(--color-ink);font-weight:700">Be careful when speaking with the other side\u2019s insurance company.</strong> A recorded statement can become part of the claim record. Speak with an attorney before providing one to the insurance company for the person or business that may be responsible for your injuries.',
        '<strong style="color:var(--color-ink);font-weight:700">Speak with a lawyer early.</strong> Personal injury claims are subject to legal deadlines, and important evidence can disappear long before those deadlines arrive. An early review allows an attorney to identify what needs to be preserved and what steps should be taken.'
      ],
      faqs: [
        { q: 'What does it cost to hire your firm for a personal injury case?', a: 'We handle personal injury cases on a contingency fee basis. You do not pay an attorney\u2019s fee unless we recover compensation for you. The fee arrangement and responsibility for case costs are explained in writing before you decide whether to hire us.' },
        { q: 'The insurance adjuster already offered me a settlement. Should I accept it?', a: 'A settlement ends the claim, so it is important to understand the full extent of your injuries before signing a release. An early offer may come before you know whether additional treatment, lost income, future care, or other damages will become part of the case. We can review the offer and the circumstances of your injury before you decide whether to accept it.' },
        { q: 'What if I was partly at fault for the accident?', a: 'Being accused of sharing some responsibility does not necessarily end a personal injury claim. Fault can affect how much compensation may be recovered, and the rules vary by state and by type of case. We investigate how the accident happened and address attempts by the insurance company or other parties to place responsibility on you.' },
        { q: 'How long do I have to file a personal injury claim?', a: 'Deadlines depend on the state, the type of case, when the injury occurred, and who is involved. Some claims can also have special notice requirements or shorter deadlines. Because waiting can affect both your legal rights and the availability of evidence, we recommend having the case reviewed as early as possible.' },
        { q: 'Do I need a lawyer for a personal injury claim?', a: 'A lawyer can make a real difference by investigating who was responsible, preserving evidence, dealing directly with the insurance company, documenting the full extent of your injuries and financial losses, and evaluating whether a settlement fairly reflects what happened to you. If the insurance company disputes fault or will not make a reasonable offer, an attorney can also prepare the case for litigation and pursue the claim in court.' },
        { q: 'How much is my personal injury case worth?', a: 'There is no reliable way to value a personal injury case without understanding the facts. The amount can depend on the severity and permanence of the injuries, medical treatment, lost income, future care, available insurance coverage, the effect of the injury on your life, and any dispute over fault. We evaluate those factors before advising you about case value or a settlement offer.' }
      ],
      ctaTitle: 'Were you injured because of someone else\u2019s negligence?',
      ctaBody: 'Tell us what happened. An attorney will review your case and give you a straightforward assessment of your options.',
      disclaimer: 'Personal injury laws and deadlines vary by state. We represent clients in Florida and Illinois. During your consultation, we\u2019ll explain the rules and deadlines that may apply to your case.',
      related: [ { label: 'Auto Accident', page: 'practice:auto-accident' }, { label: 'Slip & Fall', page: 'practice:slip-fall' }, { label: 'How We Handle Your Claim', page: 'process:how-we-handle' } ]
    },
    'slip-fall': {
      nav: 'Slip & Fall', icon: 'arm-sling',
      eyebrow: 'Slip & Fall',
      h1: 'Slip and Fall Injury Claims',
      tagline: 'When a dangerous condition causes a serious injury, what happened before the fall can be just as important as what happened after it.',
      intro: [
        'Wet floors. Broken stairs. Uneven walkways. Poor lighting. Merchandise or debris left where people walk.',
        'A slip or fall can happen in seconds, but determining who is responsible often requires looking at how the dangerous condition developed, how long it existed, who knew about it, and what was done to correct or warn about it.',
        'The insurance company may argue that the condition was obvious, that the property owner did not know about it, or that you should have avoided it.',
        'We investigate the condition that caused the fall, what the property owner or business knew or should have known, and the injuries that resulted. Because surveillance video, inspection records, and the condition itself can disappear quickly, preserving evidence early can make a significant difference.'
      ],
      sections: [
        { heading: 'Common Issues in Slip and Fall Cases', type: 'named', body: [
          { term: 'Whether the property owner knew about the hazard.', desc: 'A central issue in many cases is whether the business or property owner knew, or reasonably should have known, about the dangerous condition before someone was injured.' },
          { term: 'Arguments that you should have seen it.', desc: 'The insurance company may focus on where you were looking, what shoes you were wearing, whether you were distracted, or whether the condition was visible. We examine the entire circumstances of the fall rather than accepting those arguments at face value.' },
          { term: 'Missing or disappearing evidence.', desc: 'Spills are cleaned. Broken areas are repaired. Surveillance video may be overwritten. Witnesses become difficult to locate. That makes early investigation especially important.' },
          { term: 'Disputes over what caused the injury.', desc: 'The insurance company may question whether the fall caused all of your medical problems, particularly when there is a delay in treatment or a prior medical condition. Medical records and a clear history of what changed after the fall can become important.' }
        ]},
        { heading: 'How We Handle Slip and Fall Cases', type: 'para', body: [
          'We begin by investigating the property and the condition that caused the injury.',
          'That may include photographs, surveillance footage, incident reports, inspection and maintenance records, witness statements, prior complaints, photographs of the hazard, and other evidence showing what happened.',
          'We also investigate notice. Depending on the circumstances, evidence about how long a condition existed, whether employees created it, whether similar problems had occurred before, or whether reasonable inspections were being performed may become important.',
          'At the same time, we document the injury itself. We review medical treatment, lost income, future care when applicable, and the ways the injury has affected your work and everyday life.',
          'Our goal is to build both sides of the case: why the property owner may be responsible and what the injury has actually cost you.'
        ]}
      ],
      stepsHeading: 'What To Do After a Slip or Fall',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Report what happened.</strong> Tell the property owner, business, or manager about the fall and ask that an incident report be created. Keep a copy if one is provided.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the condition that caused you to fall.</strong> If you can safely do so, take photographs or video of the spill, broken surface, stairs, lighting condition, obstruction, or other hazard before it changes.',
        '<strong style="color:var(--color-ink);font-weight:700">Get witness information.</strong> Ask anyone who saw the fall or the dangerous condition for their name and contact information.',
        '<strong style="color:var(--color-ink);font-weight:700">Get appropriate medical care.</strong> Some injuries become more apparent after the initial fall. Tell your medical providers how the injury occurred and follow the treatment they recommend.',
        '<strong style="color:var(--color-ink);font-weight:700">Speak with a lawyer before giving the property owner\u2019s insurance company a recorded statement.</strong> The insurance company may ask questions about the fall, the condition, your medical history, and what you were doing immediately beforehand. A lawyer can review the request and help protect your interests before you provide a statement.'
      ],
      faqs: [
        { q: 'The store says I should have seen the hazard. Does that mean I do not have a case?', a: 'Not necessarily. The visibility of the condition and your actions may be considered, but they are not the only issues. How the hazard was created, how long it existed, whether the business knew or should have known about it, and whether reasonable steps were taken to correct or warn about it can all matter. We investigate the complete circumstances before evaluating responsibility.' },
        { q: 'What if the store says it did not know the spill or hazard was there?', a: 'Lack of actual knowledge does not always end the inquiry. Depending on the circumstances and applicable law, the question may also be whether the condition existed long enough that it should have been discovered, occurred regularly, was created by the business or its employees, or should have been identified through reasonable inspection practices.' },
        { q: 'What if there is surveillance video of my fall?', a: 'Surveillance footage can be some of the most important evidence in a premises liability case, but it may not be kept indefinitely. Video can show the fall itself, how long a condition existed, whether employees passed through the area, and what happened immediately afterward. One of the reasons to contact a lawyer early is so appropriate steps can be taken to request preservation of relevant footage and other evidence.' },
        { q: 'I did not fill out an incident report. Can I still have a case?', a: 'Potentially, yes. An incident report can be useful evidence, but its absence does not necessarily determine whether the property owner was responsible. Photographs, witnesses, medical records, surveillance footage, receipts, phone location information, and other evidence may help establish when and where the fall occurred.' },
        { q: 'Do I need a lawyer for a slip and fall case?', a: 'A lawyer can make a real difference by investigating the dangerous condition, preserving surveillance footage and other evidence, determining what the property owner knew or should have known, addressing attempts to place fault on you, and documenting the full extent of your injuries and losses. An attorney can also deal directly with the insurance company and pursue the case through litigation if a fair resolution cannot be reached.' },
        { q: 'What does it cost to hire your firm?', a: 'We handle personal injury cases on a contingency fee basis. You do not pay an attorney\u2019s fee unless we recover compensation for you. The fee arrangement and responsibility for case costs are explained in writing before you decide whether to hire us.' }
      ],
      ctaTitle: 'Were you injured because of a dangerous condition on someone else\u2019s property?',
      ctaBody: 'Tell us what happened and, if you have them, send us photographs, incident reports, or other information about the fall. An attorney will review your case and give you a straightforward assessment of your options.',
      disclaimer: 'Personal injury laws and deadlines vary by state. We represent clients in Florida and Illinois. During your consultation, we\u2019ll explain the rules and deadlines that may apply to your case.',
      related: [ { label: 'Personal Injury', page: 'practice:personal-injury' }, { label: 'Auto Accident', page: 'practice:auto-accident' }, { label: 'Contact', page: 'contact' } ]
    },
    'auto-accident': {
      nav: 'Auto Accident', icon: 'steering-wheel',
      eyebrow: 'Auto Accident',
      h1: 'Auto Accident Injury Claims',
      tagline: 'After a serious crash, the insurance companies begin evaluating what happened almost immediately. You should have someone protecting your side of the case too.',
      intro: [
        'A car crash can create several problems at once: injuries, medical treatment, missed work, vehicle damage, and calls from insurance adjusters asking questions before you know how the accident will affect you.',
        'Some injuries are obvious right away. Others become clearer over the following days or weeks.',
        'Meanwhile, the insurance company is investigating fault, reviewing your medical treatment, looking at prior conditions, and deciding what it believes the claim is worth.',
        'We handle that process for you. We investigate the crash, preserve the evidence, document the full extent of your injuries and financial losses, and deal directly with the insurance companies involved.'
      ],
      sections: [
        { heading: 'Common Issues in Auto Accident Claims', type: 'named', body: [
          { term: 'Disputes over who caused the crash.', desc: 'Drivers and insurance companies do not always agree about what happened. Crash reports, photographs, vehicle damage, witnesses, video, electronic data, and other evidence can become important when fault is disputed.' },
          { term: 'Early settlement offers.', desc: 'An insurance company may offer money before you know the full extent of your injuries or whether you will need additional treatment. Accepting a settlement generally requires releasing the claim, which makes understanding your damages before signing important.' },
          { term: 'Gaps or delays in medical treatment.', desc: 'The insurance company may argue that a delay in treatment means an injury was not caused by the crash or was not serious. We review the medical history and circumstances rather than allowing a treatment timeline to tell the entire story.' },
          { term: 'Prior injuries or medical conditions.', desc: 'A previous back, neck, knee, or other condition does not necessarily mean a new crash caused no injury. The question may be whether the collision caused a new condition or aggravated an existing one.' },
          { term: 'Uninsured or underinsured drivers.', desc: 'If the person who caused the crash has no insurance or not enough insurance to cover the loss, your own policy may contain coverage that becomes important.' }
        ]},
        { heading: 'How We Handle Auto Accident Cases', type: 'para', body: [
          'We begin by investigating how the crash happened.',
          'That may include reviewing the crash report, photographs, videos, witness information, vehicle damage, available electronic data, and other evidence relating to fault.',
          'When necessary, we may work with accident reconstruction professionals or other experts to address disputed liability.',
          'We also document the injury from beginning to end. That includes medical treatment, lost wages, future care when applicable, diminished earning capacity, and the ways the injury has affected your work, family, and everyday life.',
          'We identify the insurance coverage that may be available and deal directly with the insurance companies involved.',
          'Our goal is to build a complete case before discussing what constitutes a fair resolution. If the insurance company will not make a reasonable offer, we prepare to pursue the case through litigation.'
        ]}
      ],
      stepsHeading: 'What To Do After a Car Accident',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Get appropriate medical care.</strong> Do not ignore symptoms simply because they seem manageable immediately after the crash. Follow your medical providers\u2019 recommendations and keep records relating to your treatment.',
        '<strong style="color:var(--color-ink);font-weight:700">Photograph the vehicles and scene.</strong> If it is safe to do so, document vehicle damage, the roadway, traffic signals, skid marks, debris, injuries, and other relevant conditions.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep the crash information.</strong> Save the crash report number, driver and insurance information, witness information, towing records, repair documents, and photographs.',
        '<strong style="color:var(--color-ink);font-weight:700">Be careful when speaking with the other driver\u2019s insurance company.</strong> A recorded statement can become part of the claim record. Speak with an attorney before providing one to the insurance company for the driver who may be responsible for the crash.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the case reviewed before accepting a settlement.</strong> Once a claim is settled and a release is signed, you generally cannot return for additional compensation because your injuries turned out to be more serious than expected.'
      ],
      faqs: [
        { q: 'The insurance company already offered me a settlement. Should I take it?', a: 'Not before you understand the full extent of your injuries and losses. An early offer may come before you know whether you will need additional treatment, miss more work, or experience lasting effects from the crash. We can review the offer, the available insurance coverage, and the circumstances of your injuries before you decide whether to settle.' },
        { q: 'What if the other driver does not have insurance or does not have enough insurance?', a: 'You may have additional options through your own automobile policy, including uninsured or underinsured motorist coverage where available. We review all potentially applicable policies rather than assuming the other driver\u2019s insurance is the only source of recovery.' },
        { q: 'What if the insurance company says I was partly responsible for the accident?', a: 'An allegation that you share some fault does not automatically resolve the case. Fault rules vary by state, and the percentage of responsibility assigned to each person can significantly affect a claim. We investigate the collision independently and address attempts to place responsibility on you when the evidence does not support them.' },
        { q: 'Who pays my medical bills after a car accident?', a: 'That depends on the state, your automobile coverage, health insurance, and the circumstances of the crash. More than one source of coverage may be involved. We review the available policies and help determine how medical expenses should be handled while the injury claim is pending.' },
        { q: 'What if I had a prior back or neck problem before the accident?', a: 'A prior condition does not automatically prevent you from bringing a claim. A collision can aggravate or worsen an existing medical condition. Medical records and your treatment history can help distinguish what existed before the crash from what changed afterward.' },
        { q: 'Do I need a lawyer after a car accident?', a: 'A lawyer can make a real difference by investigating how the crash happened, preserving important evidence, identifying all available insurance coverage, dealing directly with the insurance companies, and documenting the full extent of your injuries and financial losses. An attorney can also respond when fault is disputed, an insurer minimizes your injuries, or a settlement offer does not fairly reflect what the crash has cost you.' },
        { q: 'What does it cost to hire your firm?', a: 'We handle personal injury cases on a contingency fee basis. You do not pay an attorney\u2019s fee unless we recover compensation for you. The fee arrangement and responsibility for case costs are explained in writing before you decide whether to hire us.' }
      ],
      ctaTitle: 'Injured in a car accident?',
      ctaBody: 'Tell us what happened and, if you have them, send us the crash report, photographs, and insurance information. An attorney will review your case and give you a straightforward assessment of your options.',
      disclaimer: 'Personal injury laws, insurance requirements, and deadlines vary by state. We represent clients in Florida and Illinois. During your consultation, we\u2019ll explain the rules and deadlines that may apply to your case.',
      related: [ { label: 'Personal Injury', page: 'practice:personal-injury' }, { label: 'Slip & Fall', page: 'practice:slip-fall' }, { label: 'Contact', page: 'contact' } ]
    },
    'construction-defect': {
      nav: 'Construction Defect', icon: 'hammer',
      eyebrow: 'Construction Defect',
      h1: 'Construction Defect Claims',
      tagline: 'Construction defects can remain hidden for months or years before the damage becomes impossible to ignore.',
      intro: [
        'Water coming through windows or walls. Cracking in stucco, masonry, or foundations. Roofing that repeatedly leaks. Improper drainage. Failed waterproofing. Problems with balconies, decks, or building envelopes.',
        'What you can see is often only the symptom.',
        'By the time a construction defect becomes obvious, the builder, subcontractors, suppliers, and insurance companies may already disagree about what caused it and who is responsible.',
        'Our team includes attorneys with experience handling construction disputes from the construction and defense side. We understand how builders, contractors, subcontractors, and their insurance companies investigate these claims, the experts they rely on, and the arguments they make when responsibility is disputed.',
        'We use that experience to build the property owner\u2019s case.'
      ],
      sections: [
        { heading: 'Common Issues in Construction Defect Cases', type: 'named', body: [
          { term: 'Finding the actual defect.', desc: 'A cracked wall, leaking window, or damaged ceiling may show where the problem appeared without revealing what caused it. Identifying the underlying defect often requires looking beyond the visible damage.' },
          { term: 'Determining who is responsible.', desc: 'A construction project can involve developers, general contractors, subcontractors, architects, engineers, suppliers, and manufacturers. More than one party may be responsible for the same problem.' },
          { term: 'Hidden damage.', desc: 'Water intrusion and other defects can damage areas behind walls, beneath roofing or stucco, and inside building assemblies long before the full extent of the problem becomes visible.' },
          { term: 'Repair-scope disputes.', desc: 'The builder may propose a limited repair while an engineer or building professional recommends more extensive work. A proper repair should address the source of the problem, not simply cover the visible symptoms.' },
          { term: 'Notice requirements and deadlines.', desc: 'Construction defect claims can involve special notice procedures, opportunities to inspect or repair, and legal deadlines. Those requirements vary by state and can depend on when the work was completed, when the defect was discovered, and who performed the work.' }
        ]},
        { heading: 'How We Handle Construction Defect Claims', type: 'para', body: [
          'We begin by determining what failed and preserving the evidence needed to prove it.',
          'Depending on the property and the suspected defect, that may involve structural engineers, architects, roofing professionals, building-envelope consultants, waterproofing specialists, or other qualified experts.',
          'We review construction contracts, plans, specifications, warranties, change orders, permits, inspection records, photographs, repair history, expert reports, and communications with the builder or contractor.',
          'Once the defect is identified, we evaluate who may be responsible and what claims may be available against the parties involved.',
          'We also look at the full repair scope. A construction defect case should account for both the defective work and the damage it caused, including hidden damage that may not be visible without further investigation.',
          'Our goal is to identify the problem, preserve the evidence, comply with applicable pre-suit requirements, and pursue the responsible parties for the cost of properly addressing the defect and resulting damage.'
        ]}
      ],
      stepsHeading: 'What To Do If You Suspect a Construction Defect',
      steps: [
        '<strong style="color:var(--color-ink);font-weight:700">Document the problem as it develops.</strong> Take dated photographs and videos of cracking, leaking, staining, separation, movement, or other visible conditions. Continue documenting significant changes.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep your construction documents.</strong> Preserve contracts, plans, specifications, warranties, change orders, invoices, permits, inspection records, and communications with the builder or contractor.',
        '<strong style="color:var(--color-ink);font-weight:700">Be careful with permanent repairs before the defect is evaluated.</strong> Emergency work may be necessary to prevent additional damage, but major repairs can remove important evidence of what failed and why.',
        '<strong style="color:var(--color-ink);font-weight:700">Write down when you first noticed the problem.</strong> The timing of discovery can become important when evaluating notice requirements and legal deadlines.',
        '<strong style="color:var(--color-ink);font-weight:700">Have the problem reviewed early.</strong> Send us the available photographs, contracts, reports, and repair proposals. We can review the situation and help identify what needs to happen next.'
      ],
      faqs: [
        { q: 'The builder says the cracks are just normal settling. How do I know?', a: 'Some movement and minor cracking can occur without indicating a serious construction problem, but the cause cannot always be determined from appearance alone. The location and pattern of the cracking, changes over time, foundation conditions, drainage, structural movement, and other evidence may need to be evaluated. When the cause is disputed, an engineer or other qualified construction professional can help determine what is actually happening.' },
        { q: 'Can I repair the damage before making a construction defect claim?', a: 'Sometimes repairs cannot wait, particularly when water intrusion or another condition is causing additional damage. But permanent repairs can also alter or destroy evidence needed to determine what failed and who was responsible. Whenever possible, the defect should be thoroughly documented and the appropriate parties given any required notice or opportunity to inspect before significant corrective work begins.' },
        { q: 'Will my property insurance cover damage caused by defective construction?', a: 'It depends on the policy and what happened. A policy may distinguish between the defective work itself and separate damage that results from that work. Builders, contractors, subcontractors, or other parties may also have insurance that becomes relevant to the dispute. We look at the construction claims and any potentially applicable insurance coverage together rather than assuming there is only one source of recovery.' },
        { q: 'How long do I have to bring a construction defect claim?', a: 'Construction defect deadlines can be complicated. The applicable period may depend on the state, the type of claim, when construction was completed, when the defect was discovered or reasonably should have been discovered, and the parties involved. Some states also impose outside deadlines that can apply even when a defect was discovered later. Because those deadlines can affect an otherwise valid claim, having the problem reviewed early is important.' },
        { q: 'Do I need a lawyer for a construction defect claim?', a: 'A lawyer can make a real difference by identifying the parties who may be responsible, preserving important evidence, coordinating engineers and other construction experts, reviewing contracts and warranties, and navigating any required pre-suit procedures. An attorney can also address attempts to shift responsibility among builders, subcontractors, suppliers, and insurance companies and pursue the case if an appropriate repair or resolution cannot be reached.' },
        { q: 'What does it cost to hire your firm?', a: 'There is no charge for the initial case review. If we believe we can help and you decide to retain us, we will explain the fee arrangement and responsibility for costs before any work begins. The structure can depend on the type, size, and complexity of the construction defect case.' }
      ],
      ctaTitle: 'Seeing signs of defective construction?',
      ctaBody: 'Send us photographs, construction contracts, warranties, expert reports, and any communications with the builder or contractor. We\u2019ll review the situation and give you a straightforward assessment of your options.',
      disclaimer: 'Construction defect laws and deadlines vary by state. We represent property owners in Florida and Illinois. During your consultation, we\u2019ll explain the requirements and deadlines that may apply to your case.',
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
      slug: 'zaf-goss', name: 'Zaf Goss', initials: 'ZG',
      title: 'Shareholder, CEO | First-Party Property Insurance Litigation',
      role: 'Shareholder, CEO',
      focus: 'Claim valuation, litigation strategy',
      ctaLabel: 'Contact Zaf', ctaHref: 'mailto:zg@propertyinsurance.law',
      practiceAreas: ['First Party Property Insurance Litigation', 'Coverage Disputes', 'Complex Civil Litigation', 'Business Litigation'],
      positioning: 'Zaf Goss has spent his entire legal career representing policyholders in first-party property insurance disputes.',
      bio: [
        'A Florida native from Clearwater, Zaf has represented homeowners whose insurance claims were denied, delayed, or underpaid since he began practicing law in 2016. Over the course of his career, he has helped lead and develop first-party property practices at multiple law firms, building teams and litigation strategies around one goal: holding insurance companies to the coverage promised by their policies.',
        'Today, Zaf dedicates his practice to representing homeowners and property owners in disputes with their insurance companies. He handles claims involving denied coverage, underpayment, delay, storm damage, water losses, roof claims, and other first-party property disputes.',
        'Within the firm, Zaf plays a central role in litigation strategy. He works closely with the firm’s attorneys to evaluate cases, identify the issues that matter most, develop the evidence needed to support the claim, and determine how each matter should move forward. His approach is practical and litigation-focused: understand the policy, understand the insurance company’s position, build the record, and be prepared to prove the case.',
        'Zaf is a “Double Gator,” earning both his undergraduate degree and law degree from the University of Florida. He received his J.D. from the University of Florida Fredric G. Levin College of Law.'
      ],
      approachHeading: 'How Zaf Approaches a Case',
      approach: [
        '<strong style="color:var(--color-ink);font-weight:700">Start with the insurance company’s position.</strong> Understand exactly why the claim was denied, delayed, or underpaid before deciding how to challenge it.',
        '<strong style="color:var(--color-ink);font-weight:700">Build the evidence around the real dispute.</strong> Focus the case on the policy language, facts, expert opinions, estimates, and testimony that will actually determine the outcome.',
        '<strong style="color:var(--color-ink);font-weight:700">Prepare for litigation from the beginning.</strong> A strong claim should be organized and documented with the expectation that it may eventually need to be proven in court.'
      ],
      credentials: [
        { heading: 'Education', items: ['University of Florida Fredric G. Levin College of Law, J.D.', 'University of Florida, undergraduate degree'] },
        { heading: 'Admitted to Practice', items: ['The Florida Bar, 2016'] },
        { heading: 'Federal Courts', items: ['U.S. District Court for the Middle District of Florida', 'U.S. District Court for the Northern District of Florida', 'U.S. District Court for the Southern District of Florida'] }
      ],
      personal: ''
    },
    {
      slug: 'shari-freeman', name: 'Shari Freeman', initials: 'SF',
      title: 'Shareholder, COO | First-Party Property Insurance Litigation',
      role: 'Shareholder, COO',
      focus: 'Property insurance litigation, bilingual counsel',
      ctaLabel: 'Contact Shari', ctaHref: 'mailto:sf@propertyinsurance.law',
      practiceAreas: ['First Party Property Insurance Litigation', 'Coverage Disputes', 'Complex Civil Litigation', 'Construction Litigation'],
      positioning: 'Shari Freeman represents homeowners and business owners in first-party property insurance disputes involving denied, delayed, and underpaid claims.',
      bio: [
        'A Florida native who attended law school in Chicago, Shari began her legal career in insurance defense before moving into construction litigation. That experience gave her a firsthand understanding of how complex property disputes are investigated, defended, and litigated before she turned her practice toward representing policyholders.',
        'Before focusing on first-party property insurance, Shari handled a broad range of construction matters, including construction defect claims, construction-related professional liability, disruption and delay claims, contract disputes, and negligence cases. Her work involved single- and multi-family properties, residential communities and resort properties, large infrastructure projects, and other commercial properties.',
        'Her construction litigation experience includes serving as second chair in a two-week trial representing an architect on a major transportation project involving alleged damages exceeding $28 million, securing a favorable outcome for her client. She has also handled matters through litigation, arbitration, and other forms of alternative dispute resolution.',
        'Today, Shari applies that background to first-party property insurance claims for homeowners and businesses. Her construction experience is particularly valuable in cases involving disputed causation, engineering opinions, roof and building-envelope damage, water intrusion, repair methodology, and disagreements over the scope and cost of restoring damaged property.',
        'Shari also plays a central role in how the firm evaluates and develops new matters. As the firm\u2019s chief operating officer, she oversees the intake and presuit departments, helping ensure that potential claims are identified early, the right documents and evidence are gathered, and cases are positioned appropriately before litigation becomes necessary.',
        'She has also developed continuing education programming on property insurance law and claims practice and has appeared on industry podcasts and programs discussing property claims and related issues.'
      ],
      approachHeading: 'How Shari Approaches a Case',
      approach: [
        '<strong style="color:var(--color-ink);font-weight:700">Understand the property before arguing about the claim.</strong> Construction documents, engineering reports, photographs, repair scopes, and the physical condition of the property often explain more than the insurance company\u2019s conclusion does.',
        '<strong style="color:var(--color-ink);font-weight:700">Develop the case early.</strong> The strongest litigation strategy often begins during intake and presuit, while evidence is available and the issues can still be clearly documented.',
        '<strong style="color:var(--color-ink);font-weight:700">Know how the other side will evaluate the file.</strong> Experience in insurance defense and construction litigation helps identify the arguments, expert opinions, and factual disputes that are likely to matter before they become obstacles.'
      ],
      credentials: [
        { heading: 'Education', items: ['Loyola University Chicago School of Law, J.D.'] },
        { heading: 'Admitted to Practice', items: ['The Florida Bar, 2016'] },
        { heading: 'Federal Courts', items: ['U.S. District Court for the Middle District of Florida'] }
      ],
      personal: ''
    },
    {
      slug: 'alex-couture', name: 'J. Alex Couture', initials: 'AC',
      title: 'Shareholder, CSO | First-Party Property Insurance Litigation',
      role: 'Shareholder, CSO',
      focus: 'Post-loss disputes, repair accountability',
      ctaLabel: 'Contact Alex', ctaHref: 'mailto:ac@propertyinsurance.law',
      practiceAreas: ['First Party Property Insurance Litigation', 'Coverage Disputes', 'Complex Civil Litigation'],
      positioning: 'J. Alex Couture represents homeowners and business owners in first-party property insurance disputes involving denied, delayed, and underpaid claims.',
      bio: [
        'Alex began his career on the insurance defense side, where he gained firsthand experience with how insurance disputes are evaluated, defended, negotiated, and litigated. He now uses that perspective to represent policyholders in disputes with their insurance companies.',
        'His defense background gives him a practical understanding of how insurers analyze coverage, investigate losses, develop litigation positions, and evaluate risk. That experience helps him identify the issues that are likely to matter early and develop the evidence needed to address them.',
        'Today, Alex handles first-party property matters involving storm damage, roof claims, water losses, disputed causation, coverage issues, underpayment, and other property insurance disputes. He works with the firm’s attorneys and professionals to develop claims from the initial review through litigation when necessary.',
        'Alex is also a “Double Gator.” He earned his Bachelor of Science from the University of Florida before attending the University of Florida Fredric G. Levin College of Law, where he earned his J.D. in 2022.'
      ],
      approachHeading: 'How Alex Approaches a Case',
      approach: [
        '<strong style="color:var(--color-ink);font-weight:700">Understand how the insurance company reached its position.</strong> A strong response starts with knowing what the insurance company relied on, what it accepted, and what it left out.',
        '<strong style="color:var(--color-ink);font-weight:700">Build the record before arguing the conclusion.</strong> Policy language, photographs, estimates, expert findings, and testimony should support the position being presented.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep the strategy practical.</strong> Every case has different pressure points. The objective is to identify them early and move the claim toward the strongest available resolution.'
      ],
      credentials: [
        { heading: 'Education', items: ['University of Florida Fredric G. Levin College of Law, J.D., 2022', 'University of Florida, B.S.'] }
      ],
      personal: ''
    },
    {
      slug: 'james-wilson', name: 'James Wilson', initials: 'JW',
      title: 'Shareholder, CCO | First-Party Property Insurance Litigation',
      role: 'Shareholder, CCO',
      focus: 'Coverage defenses, policy conditions',
      ctaLabel: 'Contact James', ctaHref: 'mailto:jw@propertyinsurance.law',
      practiceAreas: ['First Party Property Insurance Litigation', 'Coverage Disputes', 'Construction Litigation'],
      positioning: 'James Wilson represents homeowners and business owners in first-party property insurance disputes and construction-related litigation.',
      bio: [
        'James began his legal career as a public defender, where he developed his trial and advocacy skills in the courtroom. That experience required him to evaluate evidence quickly, prepare witnesses, develop case strategy, argue contested issues, and advocate for clients when the outcome mattered.',
        'He brings that same trial-focused approach to representing policyholders and property owners today.',
        'James handles first-party property insurance disputes involving coverage, causation, valuation, policy conditions, storm damage, water losses, roof claims, and other contested property matters. He also works on construction defect cases involving defective work, water intrusion, building-envelope issues, repair disputes, and claims involving contractors and other construction professionals.',
        'His courtroom background shapes the way he approaches both insurance and construction cases: identify the issues that will ultimately matter, develop the evidence needed to prove them, and prepare the case with litigation in mind from the beginning.',
        'James understands that many disputes are decided long before a trial ever occurs. A well-developed file, a clear factual record, and a willingness to litigate when necessary can affect how a case is evaluated at every stage. He works with the firm\u2019s attorneys, engineers, contractors, and other professionals to build cases that are prepared for negotiation, mediation, appraisal where appropriate, or court.',
        'James earned his J.D. from the University of Florida Fredric G. Levin College of Law in 2016 and was admitted to The Florida Bar that same year.'
      ],
      approachHeading: 'How James Approaches a Case',
      approach: [
        '<strong style="color:var(--color-ink);font-weight:700">Prepare with the courtroom in mind.</strong> Even when a case resolves without trial, the strongest position comes from developing the evidence as though it may eventually need to be presented to a judge or jury.',
        '<strong style="color:var(--color-ink);font-weight:700">Focus on what can be proven.</strong> Coverage positions, construction defects, expert opinions, timelines, photographs, estimates, and testimony all have to stand up to scrutiny when a dispute becomes contested.',
        '<strong style="color:var(--color-ink);font-weight:700">Advocate clearly and directly.</strong> James brings the same disciplined advocacy he developed as a public defender to disputes involving insurance companies, contractors, and other responsible parties.'
      ],
      credentials: [
        { heading: 'Education', items: ['University of Florida Fredric G. Levin College of Law, J.D., 2016'] },
        { heading: 'Admitted to Practice', items: ['The Florida Bar, 2016'] },
        { heading: 'Federal Courts', items: ['U.S. District Court for the Middle District of Florida'] }
      ],
      personal: ''
    },
    {
      slug: 'stefan-jose-garcia', name: 'Stefan-José Garcia', initials: 'SG',
      title: 'Senior Litigation Attorney | First-Party Property Insurance Litigation',
      role: 'Senior Litigation Attorney',
      focus: 'Litigated property disputes, trial preparation',
      ctaLabel: 'Contact Stefan-José', ctaHref: 'mailto:sjg@propertyinsurance.law',
      practiceAreas: ['First Party Property Insurance Litigation'],
      positioning: 'Stefan-José Garcia represents homeowners and business owners in first-party property insurance disputes throughout Florida and Illinois.',
      bio: [
        'As a Senior Litigation Attorney, Stefan handles contested property insurance matters involving denied, delayed, and underpaid claims. His practice includes disputes over coverage, causation, valuation, storm damage, water losses, roof claims, and other first-party property matters.',
        'Stefan brings a practical, litigation-focused approach to each case. He works with clients and the firm\u2019s legal team to develop the evidence, address the insurance company\u2019s position, and move cases toward resolution through negotiation or litigation when necessary.',
        'A graduate of the University of Florida Fredric G. Levin College of Law, Stefan earned his J.D. in 2015. He has been licensed to practice in Florida since 2015 and Illinois since 2026.'
      ],
      approachHeading: 'How Stefan Approaches a Case',
      approach: [
        '<strong style="color:var(--color-ink);font-weight:700">Focus on the issues that matter.</strong> Identify the coverage, factual, and evidentiary disputes that will drive the case.',
        '<strong style="color:var(--color-ink);font-weight:700">Build a clear litigation record.</strong> Develop the documents, testimony, and expert evidence needed to address the insurance company\u2019s position.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep the case moving.</strong> Approach each stage of litigation with a clear understanding of what needs to happen next.'
      ],
      credentials: [
        { heading: 'Education', items: ['University of Florida Fredric G. Levin College of Law, J.D., 2015'] },
        { heading: 'Admitted to Practice', items: ['The Florida Bar, 2015', 'The Illinois Bar, 2026'] }
      ],
      personal: ''
    },
    {
      slug: 'isabel-freeman', name: 'Isabel Freeman', initials: 'IF',
      title: 'Of Counsel | Civil Litigation',
      role: 'Of Counsel',
      focus: 'Civil litigation, contract and business disputes',
      ctaLabel: 'Contact Isabel', ctaHref: 'mailto:if@propertyinsurance.law?cc=info@propertyinsurance.law',
      practiceAreas: ['Civil Litigation', 'Business Litigation', 'Contract Disputes'],
      positioning: 'Isabel Freeman brings decades of litigation experience to the firm, with a practice that includes civil litigation, contract disputes, business disputes, and other contested matters.',
      bio: [
        'Admitted to The Florida Bar in 1988, Isabel has handled a wide range of civil disputes over the course of her career. Her experience gives her a practical understanding of how cases develop from the initial disagreement through discovery, motion practice, negotiation, and litigation.',
        'At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, Isabel works across the firm\u2019s matters, bringing an experienced and detail-focused approach to legal analysis, strategy, drafting, and litigation. She also assists with disputes involving contracts, businesses, and other civil matters that fall outside the firm\u2019s core first-party property practice.'
      ],
      approachHeading: 'How Isabel Approaches a Case',
      approach: [
        '<strong style="color:var(--color-ink);font-weight:700">Understand the dispute before choosing the strategy.</strong> The strongest approach starts with the contracts, documents, facts, and legal issues that actually control the case.',
        '<strong style="color:var(--color-ink);font-weight:700">Keep the analysis focused.</strong> Complex disputes become more manageable when the important issues are identified early and developed clearly.',
        '<strong style="color:var(--color-ink);font-weight:700">Approach litigation practically.</strong> Every case requires an understanding of both the legal position and the most effective path toward resolution.'
      ],
      credentials: [
        { heading: 'Education', items: ['Nova Southeastern University, Shepard Broad College of Law, J.D., 1988'] },
        { heading: 'Admitted to Practice', items: ['The Florida Bar, 1988'] },
        { heading: 'Federal Courts', items: ['U.S. District Court for the Middle District of Florida'] }
      ],
      personal: ''
    }
  ];

  // ---- Staff ----
  var staff = [
    { name: 'Hilda Pinto', initials: 'HP', role: 'Intake Manager', desc: 'Hilda is often one of the first people clients speak with at the firm. She helps gather the information and documents attorneys need to evaluate a potential case and makes sure important details are captured from the beginning. She is fluent in both English and Spanish.' },
    { name: 'Julian Calvo', initials: 'JC', role: 'Presuit Manager', desc: 'Julian manages matters during the presuit stage, where documentation, deadlines, and communication with the insurance company can shape how a claim develops. He helps organize demands, supporting records, and other materials needed to move the claim toward resolution or litigation. He is fluent in both English and Spanish.' },
    { name: 'Erik Granillo', initials: 'EG', role: 'Litigation Manager', desc: 'Erik works closely with the firm\u2019s attorneys on the development of litigated cases. He helps organize and analyze claim files, coordinate discovery, prepare for depositions and hearings, work with experts, and keep the evidence and case strategy moving forward. He is fluent in both English and Spanish.' },
    { name: 'Mary Mahairas', initials: 'MM', role: 'Accounting Manager', desc: 'Mary oversees the firm\u2019s accounting processes and client financial records. She helps ensure that settlement funds, costs, and accountings are handled accurately and that financial questions are addressed clearly.' }
  ];

  // ---- Locations ----
  var locations = {
    'winter-park': {
      nav: 'Winter Park, FL', icon: 'map-pin',
      eyebrow: 'Winter Park, FL',
      h1: 'Winter Park Property Insurance Claim Lawyers',
      tagline: 'Our home office is in Winter Park, and we represent homeowners, associations, landlords, and businesses throughout Florida when property insurance claims are denied, delayed, or underpaid.',
      intro: [
        'Property damage can create immediate questions about what is covered, what needs to be documented, and whether the insurance company\u2019s estimate reflects the actual loss.',
        'From our Winter Park office, we handle property insurance disputes statewide, including hurricane and wind damage, roof claims, water losses, fire and smoke damage, plumbing failures, commercial property claims, and other first-party property insurance matters.',
        'We review the policy, the insurance company\u2019s inspection and estimate, photographs, contractor findings, expert reports, and other available evidence to determine where the claim stands and what should happen next.'
      ],
      sections: [
        { heading: 'Property Claims We Handle Throughout Florida', type: 'named', body: [
          { term: 'Hurricane and wind damage.', desc: 'Florida storms can damage roofing, siding, windows, fencing, and interiors. We handle disputes over causation, repair scope, deductibles, and storm-related water intrusion.' },
          { term: 'Roof damage claims.', desc: 'Roof claims often turn on whether damage was caused by a covered event, how extensive it is, and whether a limited repair can reasonably restore the roof.' },
          { term: 'Water and plumbing losses.', desc: 'Burst pipes, supply-line failures, plumbing leaks, and other water losses can lead to disputes over sudden damage, long-term seepage, tear-out, drying, and reconstruction.' },
          { term: 'Commercial and association claims.', desc: 'We represent businesses, landlords, condominium associations, and other property owners in larger losses involving building damage, repair disputes, and interruption-related issues.' }
        ]},
        { heading: 'How We Handle a Property Insurance Claim', type: 'para', body: [
          'We begin by understanding what happened, what the insurance company has already done, and where the disagreement lies.',
          'That may mean reviewing a denial letter, comparing competing estimates, evaluating an engineering report, documenting damage that was missed during the original inspection, or addressing a claim that has been sitting without a clear decision.',
          'Our attorneys work directly with clients and, when appropriate, with contractors, roofers, engineers, estimators, and other professionals needed to develop the evidence.',
          'The goal is to build a clear, well-supported claim and determine the best path toward resolution, whether through negotiation, appraisal where appropriate, mediation, or litigation.'
        ]}
      ],
      faqs: [
        { q: 'Do I need a local lawyer for a Florida property insurance claim?', a: 'A lawyer can make a real difference by reviewing the policy and insurance company\u2019s position, coordinating the evidence needed to support the claim, and dealing directly with the insurance company when coverage or payment is disputed. Our home office is in Winter Park, and we represent policyholders throughout Florida.' },
        { q: 'What if the insurance company already inspected my property?', a: 'The insurance company\u2019s inspection does not prevent you from obtaining your own contractor, engineer, or other professional opinion. If the estimate or coverage decision does not match the damage you are seeing, we can review the inspection findings and determine whether important areas or issues may have been overlooked.' },
        { q: 'What if my claim was paid, but the amount is not enough to complete the repairs?', a: 'A payment does not necessarily mean the claim is finished. We compare the insurance company\u2019s estimate with contractor pricing, photographs, measurements, and the actual repair scope to determine where the numbers differ and whether additional benefits may be available.' },
        { q: 'What does it cost to have my claim reviewed?', a: 'There is no charge for the initial claim review. In property insurance matters, there is no attorney\u2019s fee unless we recover for you. We explain the fee arrangement before you decide whether to retain the firm.' }
      ],
      ctaTitle: 'Have a property insurance dispute anywhere in Florida?',
      ctaBody: 'Send us the denial letter, estimate, photographs, or simply tell us what has happened so far. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Hurricane & Tropical Storm', page: 'claim:hurricane' }, { label: 'Roof Damage', page: 'claim:roof' }, { label: 'Our Attorneys', page: 'attorneys' } ]
    },
    'chicago': {
      nav: 'Chicago, IL', icon: 'map-pin',
      eyebrow: 'Chicago, IL',
      h1: 'Chicago Property Insurance Claim Lawyers',
      tagline: 'From our Chicago office, we represent homeowners, associations, landlords, and businesses throughout Illinois when property insurance claims are denied, delayed, or underpaid.',
      intro: [
        'Property losses in Illinois can involve everything from frozen and burst pipes to wind, hail, water intrusion, fire, roof damage, and significant commercial losses.',
        'Whatever caused the damage, disputes often come down to the same questions: what does the policy cover, what caused the loss, what needs to be repaired, and whether the insurance company paid the proper amount.',
        'From our Chicago office, we handle first-party property insurance disputes throughout Illinois. We review the policy, the insurance company\u2019s inspection and estimate, photographs, contractor findings, expert reports, and other available evidence to determine where the claim stands and what should happen next.'
      ],
      sections: [
        { heading: 'Property Claims We Handle Throughout Illinois', type: 'named', body: [
          { term: 'Frozen and burst pipe claims.', desc: 'Winter losses can lead to disputes over whether heat was maintained, whether the property was vacant or occupied, what caused the pipe to fail, and how much of the resulting water damage should be covered.' },
          { term: 'Wind and hail damage.', desc: 'Roofing, siding, windows, and other exterior components can be damaged by severe weather. We handle disputes over causation, repair versus replacement, and the full scope of storm damage.' },
          { term: 'Water damage claims.', desc: 'Plumbing failures, roof leaks, appliance losses, and other water events can create disagreements over sudden damage, long-term seepage, mitigation, tear-out, and reconstruction.' },
          { term: 'Fire and smoke losses.', desc: 'Fire claims can extend well beyond the visibly burned area. We handle disputes involving smoke and soot, contents, building systems, rebuilding costs, and additional living or operating expenses.' },
          { term: 'Commercial and association claims.', desc: 'We represent businesses, landlords, condominium associations, and other property owners in larger losses involving building damage, repair disputes, business interruption, and other coverage issues.' }
        ]},
        { heading: 'How We Handle an Illinois Property Insurance Claim', type: 'para', body: [
          'We begin by understanding what happened, what the insurance company has already done, and where the disagreement lies.',
          'That may mean reviewing a denial letter, comparing competing estimates, evaluating an engineering report, documenting damage that was missed during the original inspection, or addressing a claim that has remained unresolved without a clear decision.',
          'Our attorneys work directly with clients and, when appropriate, with contractors, roofers, engineers, estimators, and other professionals needed to develop the evidence.',
          'The goal is to build a clear, well-supported claim and determine the best path toward resolution through negotiation, appraisal where appropriate, mediation, or litigation.'
        ]}
      ],
      faqs: [
        { q: 'Do I need a Chicago lawyer for an Illinois property insurance claim?', a: 'A lawyer can make a real difference by reviewing the policy and insurance company\u2019s position, identifying the issues driving the dispute, coordinating the evidence needed to support the claim, and dealing directly with the insurance company. Our Chicago office represents policyholders throughout Illinois, not just within the city.' },
        { q: 'The insurance company says my frozen pipe claim is not covered because the property was not heated. What can I do?', a: 'A denial based on heat, vacancy, or occupancy should be evaluated against the actual policy language and the facts surrounding the loss. Utility records, thermostat information, HVAC records, plumbing findings, and evidence about how the property was being used may all become important. We review both the insurance company\u2019s reasoning and the evidence supporting it.' },
        { q: 'What if the insurance company already inspected my property?', a: 'The insurance company\u2019s inspection does not necessarily settle the claim. If its estimate or coverage decision does not match the damage you are seeing, we can review the inspection findings and compare them with photographs, contractor estimates, engineering opinions, and other available evidence.' },
        { q: 'What if my insurance company paid something, but it is not enough to complete the repairs?', a: 'A partial payment does not necessarily mean the claim is over. We compare the insurance company\u2019s estimate with the actual repair scope, contractor pricing, measurements, photographs, and other documentation to determine where the difference comes from and whether additional benefits may be available.' },
        { q: 'What does it cost to have my claim reviewed?', a: 'There is no charge for the initial claim review. In property insurance matters, there is no attorney\u2019s fee unless we recover for you. We explain the fee arrangement before you decide whether to retain the firm.' }
      ],
      ctaTitle: 'Have a property insurance dispute anywhere in Illinois?',
      ctaBody: 'Send us the denial letter, estimate, photographs, or simply tell us what has happened so far. We\u2019ll review the claim and give you a straightforward assessment of where things stand.',
      related: [ { label: 'Frozen & Burst Pipe', page: 'claim:frozen-pipe' }, { label: 'Water Damage', page: 'claim:water' }, { label: 'Commercial & Large Loss', page: 'claim:commercial' } ]
    }
  };

  // ---- FAQ hub ----
  var faq = {
    eyebrow: 'Frequently Asked Questions',
    h1: 'Property Insurance Claim FAQ',
    tagline: 'Straightforward answers to the questions homeowners and property owners ask most about insurance claims.',
    disclaimer: 'Property insurance laws and deadlines vary by state. We represent policyholders throughout Florida and Illinois. During your consultation, we\u2019ll explain the rules and deadlines that may apply to your claim.',
    groups: [
      { title: 'Denied, Delayed, and Underpaid Claims', items: [
        { q: 'What should I do if my homeowners insurance claim is denied?', a: '<p style="margin:0 0 12px">Start with the denial letter. It should explain why the insurance company denied the claim and identify the policy provisions it relied on. A denial does not automatically mean the claim is over.</p><p style="margin:0">We review the policy, the stated reason for the denial, and the evidence behind it to determine whether the insurance company\u2019s position can be challenged. If you received a denial letter, send it to us. An attorney can review it with you at no charge and explain what options may still be available.</p>' },
        { q: 'Can a denied insurance claim be reopened or challenged?', a: '<p style="margin:0 0 12px">Yes. Depending on the reason for the denial, the policy, the evidence, and applicable deadlines, there may be ways to challenge the insurance company\u2019s decision. That can include additional documentation, expert opinions, further negotiation, or litigation when necessary.</p><p style="margin:0">If you are unsure whether a denial can be challenged, call us for a free claim evaluation before assuming the insurance company has the final word.</p>' },
        { q: 'Why is my insurance claim taking so long?', a: '<p style="margin:0 0 12px">Some claims require additional investigation, but the insurance company should be able to explain what it is waiting for and what remains outstanding. Repeated adjuster changes, ongoing document requests, additional inspections, or months without a clear coverage decision may be reasons to have the claim reviewed.</p><p style="margin:0">If you have provided what the insurance company requested and still cannot get a clear answer, send us the timeline and correspondence. We can review the delay with you at no charge.</p>' },
        { q: 'The insurance company already paid me. Can I still ask for more money?', a: '<p style="margin:0 0 12px">Possibly. An initial payment does not necessarily resolve the entire claim. Additional benefits may become payable when more damage is documented, repair costs become clearer, recoverable depreciation is owed, or the original estimate left out part of the loss.</p><p style="margin:0">If the insurance company\u2019s estimate and your contractor\u2019s estimate are far apart, send us both. Comparing them is often the quickest way to identify where the underpayment may be coming from.</p>' },
        { q: 'The insurance company closed my claim. Is the claim over?', a: '<p style="margin:0 0 12px">Not necessarily. \u201cClosed\u201d may simply describe the insurance company\u2019s current status for the file. Whether additional benefits can still be pursued depends on the policy, applicable deadlines, what has already been paid or denied, and whether additional damage or evidence exists.</p><p style="margin:0">If you have been told the claim is closed, we can review the claim history and documents for free and help determine whether there is still a path forward.</p>' }
      ]},
      { title: 'What Homeowners Insurance Covers', items: [
        { q: 'Does homeowners insurance cover roof damage?', a: '<p style="margin:0 0 12px">It can. Coverage usually depends on what caused the roof damage and what the policy provides. Wind, hail, falling objects, and other covered events may result in coverage, while the insurance company may exclude or limit damage it attributes to age, wear, deterioration, or maintenance.</p><p style="margin:0">If your roofer and the insurance company disagree about what happened or whether the roof should be repaired or replaced, send us the estimates and inspection findings for a free review.</p>' },
        { q: 'Does homeowners insurance cover water damage?', a: '<p style="margin:0 0 12px">It depends on where the water came from and how the damage occurred. Sudden plumbing failures and other accidental water losses may be covered, while long-term seepage, maintenance issues, flooding, and other causes may be treated differently.</p><p style="margin:0">If the insurance company is calling a sudden loss \u201clong-term seepage\u201d or otherwise disputing the cause, we can review the policy, plumbing records, mitigation documents, and coverage decision with you at no charge.</p>' },
        { q: 'Does homeowners insurance cover a burst pipe?', a: '<p style="margin:0 0 12px">A policy may cover resulting water damage from a sudden burst pipe even when coverage for repairing the failed pipe itself is different. Frozen pipe claims can also raise questions about heat, occupancy, vacancy, and other policy requirements.</p><p style="margin:0">If your burst-pipe claim was denied or partially paid, call us for a free evaluation of the policy and the insurance company\u2019s reasoning.</p>' },
        { q: 'Does homeowners insurance cover mold?', a: '<p style="margin:0 0 12px">Sometimes. Mold coverage often depends on what caused the moisture, when the mold developed, and whether the policy contains mold limitations, exclusions, or endorsements. When mold follows a covered water loss, the underlying water damage and the mold-related expenses may also need to be evaluated separately.</p><p style="margin:0">If the insurance company is applying a mold limit to a larger water-loss claim, send us the coverage letter and remediation documents. We can review how the policy is being applied.</p>' },
        { q: 'Does homeowners insurance cover hurricane, wind, and hail damage?', a: '<p style="margin:0 0 12px">Many homeowners policies provide coverage for wind-related damage, but deductibles, exclusions, roof provisions, and other terms can affect the claim. Hurricanes can also involve both wind and flood damage, which may be covered under different policies.</p><p style="margin:0">If the insurance company is disputing whether wind, water, age, or another condition caused the damage, a free claim review can help identify where the real coverage dispute lies.</p>' }
      ]},
      { title: 'Estimates, Payments, and Depreciation', items: [
        { q: 'What is the difference between actual cash value and replacement cost?', a: '<p style="margin:0 0 12px">Actual cash value generally reflects depreciation. Replacement cost coverage may allow additional amounts to become payable when covered property is repaired or replaced, subject to the policy terms. Some policies also contain special valuation provisions for roofs and other property.</p><p style="margin:0">If you are not sure why the insurance company withheld part of the payment, send us the estimate and policy. We can explain how the claim was valued during a free review.</p>' },
        { q: 'What is recoverable depreciation?', a: '<p style="margin:0 0 12px">Recoverable depreciation is generally the portion of depreciation that may become payable after covered repairs or replacement are completed when the policy provides replacement cost coverage. Whether depreciation is recoverable, when it becomes payable, and what documentation is required depend on the policy.</p><p style="margin:0">If you have completed repairs but the insurance company is still withholding depreciation, call us and we can review what remains unpaid.</p>' },
        { q: 'Why is my contractor\u2019s estimate higher than the insurance company\u2019s estimate?', a: '<p style="margin:0 0 12px">The difference may involve much more than labor rates or material prices. The estimates may contain different measurements, quantities, repair methods, materials, code-related work, overhead and profit, or entire areas of damage.</p><p style="margin:0">Send us both estimates. We can compare them and give you a straightforward assessment of where the numbers differ and whether the claim may be underpaid.</p>' },
        { q: 'Can I cash the insurance company\u2019s check and still dispute the amount?', a: '<p style="margin:0 0 12px">Often, receiving or depositing a payment does not by itself mean you agree that the payment is sufficient. But the language accompanying the payment and any release or settlement document matters.</p><p style="margin:0">Before signing anything marked \u201crelease,\u201d \u201csettlement,\u201d or \u201cfinal,\u201d send it to us for review. A short review before signing can prevent a much larger problem later.</p>' },
        { q: 'Do I have to use the insurance company\u2019s contractor?', a: '<p style="margin:0 0 12px">That depends on the policy and the program the insurance company is invoking. In many situations, property owners obtain their own contractor estimates and repair opinions. Some policies, however, may contain repair provisions or other terms that affect the process.</p><p style="margin:0">If the insurance company is telling you that you must use a particular contractor or repair program, we can review the policy and explain your options during a free consultation.</p>' }
      ]},
      { title: 'The Insurance Claims Process', items: [
        { q: 'How long does an insurance company have to settle a property insurance claim?', a: '<p style="margin:0 0 12px">The answer depends on the state, the policy, the type of claim, and the circumstances of the investigation. State law may impose deadlines for acknowledging, investigating, paying, or denying claims, but exceptions and additional requirements can apply.</p><p style="margin:0">If your claim has been sitting without a clear answer, call us. We can review the timeline and explain what deadlines may apply to your claim.</p>' },
        { q: 'What should I not say to a homeowners insurance adjuster?', a: '<p style="margin:0 0 12px">Be accurate and stick to facts you actually know. Avoid guessing about when damage started, speculating about what caused it, minimizing the extent of the damage, or agreeing with conclusions you do not understand. If you do not know the answer to something, it is better to say that than to guess.</p><p style="margin:0">If the claim is already disputed or the insurance company is asking detailed questions about cause, timing, or prior damage, consider speaking with us before giving another statement.</p>' },
        { q: 'Do I have to give the insurance company a recorded statement or examination under oath?', a: '<p style="margin:0 0 12px">Your policy may require you to cooperate with certain requests during the investigation, including a recorded statement or examination under oath. Because your answers become part of the claim record, preparation matters.</p><p style="margin:0">If you receive a request for a recorded statement or examination under oath, contact us before proceeding. We can review the request, explain your obligations, and discuss how to prepare.</p>' },
        { q: 'Can I make repairs before the insurance company inspects my property?', a: '<p style="margin:0 0 12px">Necessary steps to protect the property from additional damage may need to be taken immediately. Permanent repairs are different.</p><p style="margin:0">Whenever possible, document the condition thoroughly before demolition or permanent work begins, preserve damaged components when practical, keep receipts, and provide the insurance company an appropriate opportunity to inspect when required. If significant repairs cannot wait and you are concerned about protecting the claim, call us before the work begins.</p>' },
        { q: 'What documents should I keep for my insurance claim?', a: '<p style="margin:0 0 12px">Keep the policy, insurance company estimates and letters, photographs, videos, contractor estimates, invoices, receipts, engineering reports, plumbing or mitigation records, emails, text messages, and other claim communications.</p><p style="margin:0">If you are not sure what matters, send us what you have. You do not need to organize a perfect claim file before contacting us. We can help identify what is important during the free review.</p>' }
      ]},
      { title: 'Property Insurance Lawyers and Lawsuits', items: [
        { q: 'Do I need a lawyer for a property insurance claim?', a: '<p style="margin:0 0 12px">A lawyer can make a real difference when the insurance company denies the claim, delays a decision, significantly underpays the loss, disputes what caused the damage, or refuses to reconsider its position.</p><p style="margin:0">An attorney can review the policy, identify the issues driving the dispute, develop the evidence, and deal directly with the insurance company. If your claim has reached that point, call us for a free consultation and we can tell you how we would approach it.</p>' },
        { q: 'When should I hire a property insurance lawyer?', a: '<p style="margin:0 0 12px">Once a significant dispute develops, earlier involvement can help. Photographs can be lost, damaged materials can be discarded, repairs can change the condition of the property, and legal or policy deadlines may continue to run.</p><p style="margin:0">You do not need to wait until a lawsuit is necessary. If you are concerned about how the claim is being handled, we can evaluate it now at no charge.</p>' },
        { q: 'What does a property insurance lawyer actually do?', a: '<p style="margin:0 0 12px">We review the policy and claim file, determine why the insurance company denied or limited payment, evaluate estimates and expert findings, develop supporting evidence, communicate with the insurance company, and determine the appropriate way to pursue the claim.</p><p style="margin:0">Depending on the dispute, that can include negotiation, appraisal where appropriate, mediation, or litigation. The initial consultation is free, so we can review the claim and explain what we believe it needs before you decide whether to hire us.</p>' },
        { q: 'How much does a property insurance lawyer cost?', a: '<p style="margin:0 0 12px">There is no charge for our initial claim review. In property insurance matters, there are no attorney\u2019s fees or costs unless we recover for you.</p><p style="margin:0">We explain the fee agreement and what to expect before you decide whether to retain the firm.</p>' },
        { q: 'Can I sue my homeowners insurance company?', a: '<p style="margin:0 0 12px">A lawsuit may be an option when there is a dispute over coverage or benefits owed under the policy and the matter cannot be resolved through the claims process. The requirements that must be satisfied before filing suit vary by state and by claim.</p><p style="margin:0">A lawyer can review the dispute, applicable deadlines, and any required pre-suit procedures and determine the appropriate next step. If you believe your insurance company has reached the wrong decision, contact us for a free evaluation before assuming litigation is\u2014or is not\u2014the answer.</p>' }
      ]}
    ]
  };

  // ---- Blog ----
  var blog = {
    eyebrow: 'From Our Attorneys',
    h1: 'Insights on Property Insurance Claims',
    tagline: 'Plain-language answers to the questions policyholders actually ask, written by the lawyers who handle these disputes daily.',
    externalArticles: [
      { title: 'The Clock Started the Day of the Storm: Florida’s One Year Deadline to Report a Property Claim', author: 'Shari Freeman', dateDisplay: 'July 6, 2026', url: 'https://www.linkedin.com/pulse/clock-started-day-storm-floridas-one-year-deadline-report-freeman-jcsbe' },
      { title: 'Who Funds the Fight: The Campaign Against Litigation Funding and Why Policyholders Should Be Paying Attention', author: 'Shari Freeman', dateDisplay: 'July 13, 2026', url: 'https://www.linkedin.com/pulse/who-funds-fight-campaign-against-litigation-funding-why-shari-freeman-2yvke' },
      { title: 'One Hand Washes the Other: Citizens, the DOAH Endorsement, and the Separate Justice System Built for Florida’s Insurer of Last Resort', author: 'Shari Freeman', dateDisplay: 'July 20, 2026', url: 'https://www.linkedin.com/pulse/one-hand-washes-other-citizens-doah-endorsement-separate-freeman-f58ke' }
    ],
    posts: [
      {
        slug: 'interior-water-damage-after-storm-florida',
        title: 'Interior Water Damage After a Storm: What Should Be Covered?',
        metaTitle: 'Interior Water Damage After a Storm: What Should Be Covered?',
        metaDescription: 'Is interior water damage after a storm covered in Florida? Learn when homeowners insurance applies, how wind driven rain is evaluated, and common denial issues.',
        category: 'Property Damage Law', tags: ['water damage', 'storm damage', 'coverage basics'],
        author: 'J. Alex Couture', date: '2026-08-28',
        links: ['/water-damage-insurance-claims'],
        body: [
          { type: 'para', text: 'After a major storm, many Florida homeowners discover water stains on ceilings, warped flooring, or damaged drywall inside the home. The roof may look intact from the ground, yet interior damage is obvious.' },
          { type: 'para', text: 'This often leads to an important question: what interior water damage after a storm should be covered by insurance?' },
          { type: 'para', text: 'The answer depends largely on how the water entered the property and what your policy says.' },
          { type: 'heading', text: 'Wind Driven Rain Versus Flooding' },
          { type: 'para', text: 'Most Florida homeowners policies cover wind damage. If hurricane or storm force winds create an opening in the roof or walls and rain enters through that opening, the resulting interior damage is often covered.' },
          { type: 'para', text: 'This is commonly referred to as wind driven rain.' },
          { type: 'para', text: 'However, damage caused by rising water that enters from the ground up is typically classified as flood damage. Standard homeowners policies usually exclude flood damage unless a separate flood policy is in place.' },
          { type: 'para', text: 'The distinction between wind driven rain and flood is one of the most common sources of dispute in Florida storm claims.' },
          { type: 'heading', text: 'What Insurance Companies Look For' },
          { type: 'para', text: 'When evaluating interior water damage after a storm, insurers focus on causation.' },
          { type: 'para', text: 'Adjusters typically inspect the roof for missing shingles, lifted materials, or other storm related openings. They may also examine windows, doors, and exterior walls for breach points.' },
          { type: 'para', text: 'Inside the home, they look at staining patterns, moisture readings, and the location of damage. If water damage appears consistent with roof entry or wind forced intrusion, coverage may apply.' },
          { type: 'para', text: 'If the damage appears to have resulted from surface water or storm surge, the insurer may deny coverage under the flood exclusion.' },
          { type: 'heading', text: 'What Is Typically Covered' },
          { type: 'para', text: 'If the interior water damage is caused by a covered peril such as wind that creates an opening, coverage may extend to damaged drywall, insulation, flooring, cabinetry, and personal property, subject to policy limits and deductibles.' },
          { type: 'para', text: 'Coverage may also include reasonable mitigation efforts such as emergency dry out services to prevent further damage.' },
          { type: 'para', text: 'However, coverage is limited to direct physical damage. Long term moisture issues or mold resulting from delayed reporting or failure to mitigate may lead to disputes.' },
          { type: 'heading', text: 'Common Reasons Interior Water Damage Is Denied' },
          { type: 'para', text: 'Interior water damage claims are frequently denied for several reasons.' },
          { type: 'para', text: 'The insurer may argue that no storm created opening existed. It may assert that the roof was compromised due to wear and tear rather than wind. It may classify the loss as flood rather than wind driven rain.' },
          { type: 'para', text: 'In some cases, the carrier may allege that the damage resulted from long term seepage rather than a sudden event.' },
          { type: 'para', text: 'Each of these defenses focuses on the cause of loss.' },
          { type: 'heading', text: 'Documentation Is Critical' },
          { type: 'para', text: 'If you discover interior water damage after a storm, documentation should begin immediately.' },
          { type: 'para', text: 'Photograph the exterior roof if it is safe to do so. Capture images of ceiling stains, wall damage, flooring issues, and any visible entry points. Note the date and time the damage was first observed.' },
          { type: 'para', text: 'Weather reports confirming high winds can also be helpful in establishing context.' },
          { type: 'para', text: 'The earlier the documentation, the clearer the connection to the storm may appear.' },
          { type: 'heading', text: 'When to Consider a Review' },
          { type: 'para', text: 'If your Florida interior water damage claim was denied or limited and you believe the damage resulted from wind driven rain, it may be helpful to review the policy and inspection findings carefully.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate whether the insurer’s causation analysis appears consistent with the policy terms and available evidence.' },
          { type: 'para', text: 'If you would like to discuss your interior water damage claim, you may request a consultation to review your documentation and options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'how-insurance-companies-evaluate-roof-storm-damage-florida',
        title: 'How Insurance Companies Evaluate Storm Damage to Roofs',
        metaTitle: 'How Insurance Companies Evaluate Storm Damage to Roofs',
        metaDescription: 'How do Florida insurance companies evaluate storm damage to roofs? Learn what adjusters and engineers look for and how roof claims are assessed.',
        category: 'Property Damage Law', tags: ['roof damage', 'storm damage', 'investigations'],
        author: 'Shari Freeman', date: '2026-08-21',
        links: ['/post/florida-roof-matching-law-shingles'],
        body: [
          { type: 'para', text: 'After a major storm, many Florida homeowners assume that visible roof damage will automatically lead to a full insurance payout. In reality, insurance companies follow a structured evaluation process when assessing storm damage to roofs.' },
          { type: 'para', text: 'Understanding how insurance companies evaluate storm damage to roofs can help you better prepare for the inspection and identify potential areas of dispute.' },
          { type: 'heading', text: 'The Initial Inspection' },
          { type: 'para', text: 'The evaluation process typically begins with a field inspection by an insurance adjuster.' },
          { type: 'para', text: 'The adjuster will examine the roof for signs of wind damage, including creased shingles, missing tabs, lifted edges, and broken seals. They may also look for collateral damage such as dented vents, damaged gutters, or impacted soft metals.' },
          { type: 'para', text: 'Photographs are taken and notes are made regarding the condition of the roof. The adjuster is not only looking for damage, but also for patterns that indicate the cause of that damage.' },
          { type: 'heading', text: 'Wind Damage Versus Wear and Tear' },
          { type: 'para', text: 'One of the primary questions insurers ask is whether the damage resulted from wind forces or from normal aging.' },
          { type: 'para', text: 'Wind damage often presents as creased shingles, uplifted tabs, or missing materials aligned with wind direction. Wear and tear, by contrast, may appear as uniform granule loss, brittle shingles, or cracking consistent with long term deterioration.' },
          { type: 'para', text: 'If the adjuster concludes that the condition is related to age rather than a storm event, the claim may be denied or limited.' },
          { type: 'heading', text: 'The Role of Engineers' },
          { type: 'para', text: 'In larger or disputed claims, insurance companies may retain an engineer to conduct a more detailed evaluation.' },
          { type: 'para', text: 'Engineers assess factors such as wind speeds, fastening patterns, installation methods, and material condition. Their report can significantly influence whether the insurer attributes the damage to a covered event.' },
          { type: 'para', text: 'While engineering reports carry weight, they are based on professional opinion and the evidence observed at the time of inspection.' },
          { type: 'heading', text: 'Partial Damage Versus Full Replacement' },
          { type: 'para', text: 'Another key issue in roof evaluations is scope.' },
          { type: 'para', text: 'Insurance companies often determine whether damage is limited to a specific slope or area. If only one section is deemed affected, the insurer may propose partial repair rather than full replacement.' },
          { type: 'para', text: 'Matching concerns, discontinued materials, and building code requirements can complicate this analysis. However, the initial evaluation typically focuses on direct physical damage to specific areas.' },
          { type: 'heading', text: 'Interior Indicators' },
          { type: 'para', text: 'Adjusters may also inspect the attic and interior ceilings for signs of water intrusion.' },
          { type: 'para', text: 'Staining patterns, moisture readings, and visible entry points can support or undermine a claim that wind created an opening in the roof.' },
          { type: 'para', text: 'The absence of interior damage does not automatically defeat a roof claim, but it can influence the carrier’s causation analysis.' },
          { type: 'heading', text: 'Documentation Matters' },
          { type: 'para', text: 'Homeowners can strengthen their position by documenting storm conditions and visible damage before temporary repairs are made.' },
          { type: 'para', text: 'Photographs taken immediately after the storm, weather reports showing high wind speeds, and contractor inspections can provide additional context for the insurer’s evaluation.' },
          { type: 'para', text: 'If the insurance company’s assessment differs significantly from your contractor’s findings, the dispute often centers on causation and scope.' },
          { type: 'heading', text: 'When to Consider a Review' },
          { type: 'para', text: 'If your Florida roof claim was denied or limited after the insurer’s evaluation and you believe the damage was caused by a covered storm event, it may be helpful to review the inspection findings carefully.' },
          { type: 'para', text: 'A Florida property insurance attorney can examine the policy, inspection reports, and available documentation to determine whether the evaluation appears consistent with the policy obligations.' },
          { type: 'para', text: 'If you would like to discuss your roof claim and the insurer’s assessment, you may request a consultation to review your specific situation.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'ordinance-and-law-coverage-florida-property-insurance',
        title: 'What Is Ordinance and Law Coverage in Florida Property Insurance?',
        metaTitle: 'What Is Ordinance and Law Coverage in Florida Property Insurance?',
        metaDescription: 'What is ordinance and law coverage in Florida property insurance? Learn how building code upgrades affect fire, water, and storm claims and when insurance must pay.',
        category: 'Property Damage Law', tags: ['coverage basics', 'building code', 'storm damage'],
        author: 'J. Alex Couture', date: '2026-08-14',
        links: [],
        body: [
          { type: 'para', text: 'When your home suffers significant damage, repairs are not always as simple as replacing what was there before.' },
          { type: 'para', text: 'Local building codes may require upgrades that did not exist when the property was originally constructed. This is where ordinance and law coverage becomes critically important.' },
          { type: 'para', text: 'Ordinance and law coverage applies to many types of Florida property insurance claims, including hurricane damage, fire losses, plumbing leaks, structural failures, and other covered events.' },
          { type: 'para', text: 'Understanding how this coverage works can make a substantial difference in the amount paid on your claim.' },
          { type: 'heading', text: 'What Does Ordinance and Law Coverage Mean?' },
          { type: 'para', text: 'Ordinance and law coverage addresses the increased cost of construction that results from the enforcement of current building codes.' },
          { type: 'para', text: 'Insurance policies generally cover direct physical loss to property. However, when repairs trigger mandatory code upgrades, those additional costs may not be covered unless your policy includes ordinance and law coverage.' },
          { type: 'para', text: 'For example, if a fire damages part of your home and rebuilding requires upgraded wiring to comply with current code, that additional expense may fall under ordinance and law coverage.' },
          { type: 'para', text: 'Similarly, if roof damage exceeds certain thresholds and local code requires full replacement or enhanced fastening standards, those upgrades may be covered if the policy includes this endorsement.' },
          { type: 'heading', text: 'Why This Coverage Matters in Florida' },
          { type: 'para', text: 'Florida has strict building codes, particularly regarding wind mitigation and structural reinforcement.' },
          { type: 'para', text: 'Many homes were built decades ago under different standards. When damage occurs today, repairs often require compliance with modern codes.' },
          { type: 'para', text: 'Without ordinance and law coverage, homeowners may face significant out of pocket costs to meet those requirements.' },
          { type: 'heading', text: 'The Three Components of Ordinance and Law Coverage' },
          { type: 'para', text: 'Most policies that include ordinance and law coverage address three types of costs.' },
          { type: 'para', text: 'The first is the value of the undamaged portion of the building that must be demolished due to code requirements.' },
          { type: 'para', text: 'The second is the cost of demolishing that undamaged portion.' },
          { type: 'para', text: 'The third is the increased cost of construction necessary to comply with current building codes.' },
          { type: 'para', text: 'Not every policy includes all three components, and coverage limits vary.' },
          { type: 'heading', text: 'How Coverage Limits Work' },
          { type: 'para', text: 'Ordinance and law coverage is often expressed as a percentage of your dwelling coverage.' },
          { type: 'para', text: 'For example, your policy may provide an additional percentage of Coverage A specifically for code upgrades.' },
          { type: 'para', text: 'If the limit is too low relative to the required upgrades, the homeowner may be responsible for any excess cost.' },
          { type: 'para', text: 'Reviewing your declarations page is essential to understanding how much ordinance and law coverage you carry.' },
          { type: 'heading', text: 'Common Disputes' },
          { type: 'para', text: 'Disputes often arise when the insurer pays for direct damage but refuses to include code related upgrades.' },
          { type: 'para', text: 'Insurance companies may require documentation showing that the upgrades are mandatory, not optional.' },
          { type: 'para', text: 'Permits, written code citations, and contractor documentation are often important in supporting the claim.' },
          { type: 'para', text: 'In some cases, insurers argue that certain upgrades are betterments rather than required code compliance.' },
          { type: 'heading', text: 'When to Consider a Policy Review' },
          { type: 'para', text: 'If your Florida property insurance claim involves substantial rebuilding and you are being told that certain upgrades are not covered, it may be appropriate to review the policy carefully.' },
          { type: 'para', text: 'Ordinance and law coverage can significantly increase the total value of a claim when properly applied.' },
          { type: 'para', text: 'If you would like to understand whether code related costs in your claim should be covered, you may request a consultation to review your policy and repair estimate.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific policy language and facts.'
      },
      {
        slug: 'second-roof-claim-florida',
        title: 'Can I File a Second Claim If My Roof Was Damaged Again?',
        metaTitle: 'Can I File a Second Claim If My Roof Was Damaged Again?',
        metaDescription: 'Can you file a second roof claim in Florida if your roof was damaged again? Learn when a new claim may be allowed and how insurers evaluate repeat damage.',
        category: 'Property Damage Law', tags: ['roof damage', 'claim process', 'storm damage'],
        author: 'James Wilson', date: '2026-08-07',
        links: ['/post/florida-roof-matching-law-shingles', '/post/how-insurance-companies-evaluate-roof-storm-damage-florida'],
        body: [
          { type: 'para', text: 'If your roof was previously repaired or replaced through an insurance claim and then sustains damage from a new storm, you may be asking: can I file a second claim if my roof was damaged again in Florida?' },
          { type: 'para', text: 'In many cases, the answer is yes. However, the details matter. Insurance companies carefully evaluate repeat roof claims, especially if they occur within a relatively short period of time.' },
          { type: 'para', text: 'Understanding how insurers analyze subsequent losses can help you approach the situation properly.' },
          { type: 'heading', text: 'A New Storm Can Mean a New Claim' },
          { type: 'para', text: 'Property insurance generally covers separate, distinct losses caused by covered events during the policy period.' },
          { type: 'para', text: 'If your roof was damaged in one hurricane, repaired, and then later damaged by a different storm, that may constitute a new loss. As long as your policy was active at the time of the new event, you may be entitled to submit another claim.' },
          { type: 'para', text: 'The key issue is whether the damage truly resulted from a new covered event rather than from incomplete prior repairs or pre-existing conditions.' },
          { type: 'heading', text: 'How Insurance Companies Evaluate Repeat Roof Claims' },
          { type: 'para', text: 'When a second roof claim is reported, insurers often review the history of the prior claim.' },
          { type: 'para', text: 'They may examine prior inspection reports, engineering opinions, repair invoices, and photographs. The goal is to determine whether the newly reported damage is distinguishable from the earlier loss.' },
          { type: 'para', text: 'If the insurer believes the roof was not fully repaired after the first claim, or that damage was left unresolved, it may argue that the condition is not a new covered loss.' },
          { type: 'para', text: 'Clear documentation of completed repairs can be very important in these situations.' },
          { type: 'heading', text: 'What If the Roof Was Fully Replaced?' },
          { type: 'para', text: 'If your roof was fully replaced after the first claim and then damaged again by a new storm, that typically strengthens the argument that a new loss occurred.' },
          { type: 'para', text: 'However, the insurer may still evaluate factors such as the timing of the storm, the severity of weather conditions, and the nature of the damage.' },
          { type: 'para', text: 'Maintaining records of the roof replacement, including permits and contractor invoices, can help establish that the prior loss was properly resolved.' },
          { type: 'heading', text: 'Potential Complications' },
          { type: 'para', text: 'Several issues can complicate a second roof claim.' },
          { type: 'para', text: 'If the roof is relatively new, the insurer may scrutinize the cause of damage closely. If the damage appears minor or consistent with installation defects, the carrier may raise workmanship concerns.' },
          { type: 'para', text: 'In addition, if multiple claims are filed within a short time, underwriting consequences such as nonrenewal may become a separate consideration.' },
          { type: 'para', text: 'Each claim is evaluated independently, but prior history is rarely ignored.' },
          { type: 'heading', text: 'What Should You Do Before Filing a Second Claim?' },
          { type: 'para', text: 'Before filing a new claim, document the current damage carefully.' },
          { type: 'para', text: 'Take clear photographs, note the date of the storm, and obtain an inspection from a qualified contractor. Confirm that the damage appears related to a recent event rather than to unresolved prior issues.' },
          { type: 'para', text: 'If you are unsure whether the damage qualifies as a new loss, you may consider seeking guidance before formally reporting the claim.' },
          { type: 'heading', text: 'When to Consider a Professional Review' },
          { type: 'para', text: 'If your second roof claim has been denied on the basis that the damage was pre-existing or related to the prior loss, it may be helpful to review the policy and claim history.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate whether the insurer’s reasoning appears consistent with the policy terms and the documented timeline.' },
          { type: 'para', text: 'If you would like to discuss whether filing or challenging a second roof claim makes sense in your situation, you may request a consultation to review your documentation and options.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'wind-vs-flood-damage-florida-claim',
        title: 'Wind vs. Flood Damage in Florida: Why It Matters for Your Claim',
        metaTitle: 'Wind vs. Flood Damage in Florida: Why It Matters for Your Claim',
        metaDescription: 'Wind or flood damage? Learn how Florida insurance policies treat wind and flood differently, why coverage disputes happen, and what it means for your hurricane claim.',
        category: 'Property Damage Law', tags: ['wind damage', 'flood', 'hurricane claims'],
        author: 'J. Alex Couture', date: '2026-07-31',
        links: ['/hurricane-property-damage-lawyer', '/water-damage-insurance-claims'],
        body: [
          { type: 'para', text: 'After a hurricane or major storm, one of the most important questions in a Florida property insurance claim is this: was the damage caused by wind or by flood?' },
          { type: 'para', text: 'The answer matters because wind and flood damage are typically covered under different policies. A disagreement over the cause of loss can significantly affect whether your claim is paid.' },
          { type: 'para', text: 'Understanding how wind versus flood damage is evaluated can help you navigate this common dispute.' },
          { type: 'heading', text: 'How Standard Florida Homeowners Policies Work' },
          { type: 'para', text: 'Most Florida homeowners insurance policies cover wind damage.' },
          { type: 'para', text: 'This includes damage caused by hurricane force winds, torn shingles, broken windows, and wind driven rain that enters through openings created by the storm.' },
          { type: 'para', text: 'However, standard homeowners policies generally exclude flood damage. Flood damage is usually defined as rising water that covers normally dry land and enters the home from the ground up.' },
          { type: 'para', text: 'Flood coverage is typically purchased separately, often through a federal flood insurance program or a private flood insurer.' },
          { type: 'heading', text: 'Why Wind Versus Flood Becomes a Dispute' },
          { type: 'para', text: 'During hurricanes, wind and water often occur at the same time.' },
          { type: 'para', text: 'High winds can damage roofs and walls, while storm surge or rising water may enter the property from below. When both forces are present, determining which one caused specific damage can be complex.' },
          { type: 'para', text: 'Insurance companies may argue that certain interior damage resulted from flood rather than wind driven rain. If flood is determined to be the cause, the homeowners policy may not respond.' },
          { type: 'para', text: 'Homeowners often disagree with that conclusion, especially if roof or structural damage from wind is visible.' },
          { type: 'heading', text: 'The Direction of Water Matters' },
          { type: 'para', text: 'One key distinction insurers evaluate is the direction from which water entered the property.' },
          { type: 'para', text: 'Water that enters from above, through a storm created opening in the roof or walls, is often categorized as wind driven rain and may be covered under a homeowners policy.' },
          { type: 'para', text: 'Water that rises from the ground and enters through doors, baseboards, or foundation openings is typically classified as flood damage.' },
          { type: 'para', text: 'In many cases, damage patterns and physical evidence determine how the loss is categorized.' },
          { type: 'heading', text: 'Concurrent Causes and Complex Claims' },
          { type: 'para', text: 'Some claims involve both wind and flood damage.' },
          { type: 'para', text: 'In those situations, insurers may attempt to allocate portions of the damage between covered wind and excluded flood. This can lead to partial payments or disputed scope decisions.' },
          { type: 'para', text: 'Engineering reports and causation analysis often play a significant role in these cases.' },
          { type: 'para', text: 'If the insurer attributes most of the damage to flood, the homeowners policy may pay little or nothing, leaving the flood policy as the primary source of coverage.' },
          { type: 'heading', text: 'Why Proper Documentation Is Critical' },
          { type: 'para', text: 'If your Florida property sustained hurricane damage, thorough documentation can make a difference in a wind versus flood dispute.' },
          { type: 'para', text: 'Photographs taken immediately after the storm, videos, eyewitness accounts, and contractor evaluations can help establish how and where water entered the property.' },
          { type: 'para', text: 'The timing of visible damage and the presence of roof or structural openings may also be important factors.' },
          { type: 'heading', text: 'When to Seek a Review' },
          { type: 'para', text: 'If your Florida insurance claim was denied or limited because the insurer determined the damage was caused by flood rather than wind, it may be helpful to review the policy language and the inspection findings carefully.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate whether the insurer’s causation analysis appears consistent with the available evidence and the terms of the policy.' },
          { type: 'para', text: 'If you would like to discuss a wind versus flood dispute related to your hurricane claim, you may request a consultation to review your documentation and options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'how-hurricane-deductibles-work-florida',
        title: 'How Hurricane Deductibles Work in Florida',
        metaTitle: 'How Hurricane Deductibles Work in Florida',
        metaDescription: 'Confused about hurricane deductibles in Florida? Learn how they are calculated, when they apply, and why they are often higher than standard property deductibles.',
        category: 'Property Damage Law', tags: ['hurricane claims', 'deductibles', 'coverage basics'],
        author: 'Zaf Goss', date: '2026-07-24',
        links: ['/hurricane-property-damage-lawyer'],
        body: [
          { type: 'para', text: 'After a storm, many Florida homeowners are shocked by the amount subtracted from their insurance payout. That surprise usually comes down to one issue: the hurricane deductible.' },
          { type: 'para', text: 'Understanding how hurricane deductibles work in Florida is critical before you file a claim and especially after you receive a payment estimate.' },
          { type: 'heading', text: 'What Is a Hurricane Deductible?' },
          { type: 'para', text: 'A hurricane deductible is the portion of a covered loss that you must pay out of pocket before your insurance coverage applies.' },
          { type: 'para', text: 'Unlike standard property deductibles, which are often a flat dollar amount, hurricane deductibles in Florida are typically calculated as a percentage of your dwelling coverage limit.' },
          { type: 'para', text: 'For example, if your home is insured for a certain amount and your policy carries a two percent hurricane deductible, your out of pocket responsibility may be significantly higher than your standard deductible.' },
          { type: 'heading', text: 'When Does the Hurricane Deductible Apply?' },
          { type: 'para', text: 'A hurricane deductible applies only when the loss is caused by a hurricane or windstorm as defined by the policy.' },
          { type: 'para', text: 'Policies usually specify that the deductible applies during a time period beginning when a hurricane or windstorm watch or warning is issued for any part of Florida and ending a set number of hours after the watch or warning is terminated.' },
          { type: 'para', text: 'If damage occurs outside that defined window, the standard deductible may apply instead.' },
          { type: 'para', text: 'Understanding whether your damage falls within the hurricane deductible period can make a meaningful financial difference.' },
          { type: 'heading', text: 'Why Hurricane Deductibles Are Higher' },
          { type: 'para', text: 'Florida insurers structure hurricane deductibles differently because of the scale of potential losses during named storms.' },
          { type: 'para', text: 'By using percentage based deductibles, insurers shift a portion of the risk to homeowners in exchange for making hurricane coverage available.' },
          { type: 'para', text: 'As a result, even moderate roof or water damage claims may not exceed the hurricane deductible, meaning no payment is issued.' },
          { type: 'para', text: 'This often leads homeowners to believe their claim was denied, when in reality the covered damage did not exceed the deductible threshold.' },
          { type: 'heading', text: 'Is the Hurricane Deductible Applied Per Storm?' },
          { type: 'para', text: 'In most Florida policies, the hurricane deductible applies once per calendar year for all hurricane losses combined.' },
          { type: 'para', text: 'If multiple hurricanes strike in the same year, and you have already met the deductible amount for the first storm, subsequent covered hurricane losses in that year may not require a second full deductible.' },
          { type: 'para', text: 'However, policy language varies. Reviewing your declarations page and deductible provisions is important.' },
          { type: 'heading', text: 'How to Confirm Your Deductible' },
          { type: 'para', text: 'Your deductible amount should appear on your declarations page.' },
          { type: 'para', text: 'It will typically be listed separately from your all other perils deductible. Look for a percentage next to hurricane or named storm deductible.' },
          { type: 'para', text: 'If you are unsure how the deductible was applied in your claim, request a written breakdown from the insurer showing the calculation.' },
          { type: 'heading', text: 'When to Seek Clarification' },
          { type: 'para', text: 'Disputes sometimes arise over whether the hurricane deductible was properly applied or whether the damage was correctly attributed to a named storm versus another cause.' },
          { type: 'para', text: 'If you believe your deductible was miscalculated or applied incorrectly, you may consider having your policy and claim estimate reviewed.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate whether the deductible was applied consistent with the policy terms.' },
          { type: 'para', text: 'If you would like to review your hurricane claim and deductible calculation, you may request a consultation to discuss your situation.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific policy language and facts.'
      },
      {
        slug: 'common-reasons-florida-hurricane-claims-denied',
        title: 'The Most Common Reasons Florida Hurricane Claims Get Denied',
        metaTitle: 'The Most Common Reasons Florida Hurricane Claims Get Denied',
        metaDescription: 'Why are Florida hurricane claims denied? Learn the most common reasons insurers refuse payment and what homeowners should know if their storm damage claim is denied.',
        category: 'Insurance Dispute Advice', tags: ['hurricane claims', 'denied claims'],
        author: 'James Wilson', date: '2026-07-17',
        links: ['/hurricane-property-damage-lawyer', '/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'Hurricane season is a reality of life in Florida. While many storm damage claims are paid, a significant number are denied either entirely or in part.' },
          { type: 'para', text: 'If your hurricane claim was denied, you are likely asking why. Understanding the most common reasons Florida hurricane claims get denied can help you evaluate whether the insurer’s position may be justified or worth closer review.' },
          { type: 'heading', text: 'Alleged Wear and Tear' },
          { type: 'para', text: 'One of the most frequent denial reasons is wear and tear.' },
          { type: 'para', text: 'Insurance companies often argue that roof damage or interior water intrusion was caused by aging materials rather than hurricane force winds. If shingles appear brittle, cracked, or faded, the carrier may conclude the damage predated the storm.' },
          { type: 'para', text: 'The dispute typically centers on causation. Was the damage truly long term deterioration, or did hurricane winds create new damage that triggered failure?' },
          { type: 'heading', text: 'Pre-Existing Damage' },
          { type: 'para', text: 'Closely related to wear and tear is the claim that the damage was pre-existing.' },
          { type: 'para', text: 'If the insurer believes the condition existed before the reported hurricane event, it may deny coverage on that basis. Carriers often rely on inspection reports, photographs, or engineering opinions to support this conclusion.' },
          { type: 'para', text: 'Homeowners who had no visible issues before the storm are often surprised by this reasoning.' },
          { type: 'heading', text: 'Late Notice' },
          { type: 'para', text: 'Another common defense is late notice.' },
          { type: 'para', text: 'If a hurricane claim is reported weeks or months after the storm, the insurer may argue that the delay prevented a proper investigation. The carrier may assert that it cannot determine whether the damage was caused by that specific hurricane or by another event.' },
          { type: 'para', text: 'Late reporting does not automatically void coverage, but it frequently becomes a contested issue.' },
          { type: 'heading', text: 'Flood Versus Wind Disputes' },
          { type: 'para', text: 'Hurricanes bring both wind and water.' },
          { type: 'para', text: 'Standard homeowners policies typically cover wind damage but exclude flood damage. If the insurer determines that rising water caused the loss rather than wind driven rain, it may deny the claim under the flood exclusion.' },
          { type: 'para', text: 'These disputes often require careful analysis of how the damage occurred and where water entered the structure.' },
          { type: 'heading', text: 'Failure to Mitigate' },
          { type: 'para', text: 'Florida policies require homeowners to take reasonable steps to prevent further damage after a loss.' },
          { type: 'para', text: 'If a roof is left untarped or standing water is not addressed, the insurer may argue that additional damage resulted from failure to mitigate rather than from the hurricane itself.' },
          { type: 'para', text: 'Proper documentation of emergency measures and repair efforts can be important in these cases.' },
          { type: 'heading', text: 'Policy Exclusions and Limitations' },
          { type: 'para', text: 'Some policies contain specific exclusions or endorsements that affect hurricane coverage.' },
          { type: 'para', text: 'For example, certain roof surfaces may be subject to actual cash value endorsements. Cosmetic damage exclusions may apply to metal roofing or other materials. Policy language can significantly influence the outcome of a claim.' },
          { type: 'para', text: 'Reviewing the exact terms of your policy is critical when a denial is issued.' },
          { type: 'heading', text: 'Engineering Reports' },
          { type: 'para', text: 'In larger hurricane claims, insurers often retain engineers to inspect the property.' },
          { type: 'para', text: 'If the engineering report concludes that damage resulted from age, installation defects, or non covered causes, the insurer may rely on that opinion to deny the claim.' },
          { type: 'para', text: 'Engineering conclusions can be influential, but they are not automatically unchallengeable.' },
          { type: 'heading', text: 'What to Do If Your Hurricane Claim Is Denied' },
          { type: 'para', text: 'If your Florida hurricane claim was denied, start by carefully reviewing the denial letter and identifying the specific policy language cited.' },
          { type: 'para', text: 'Gather your documentation, including photographs, contractor estimates, weather data, and prior maintenance records.' },
          { type: 'para', text: 'If you believe the denial does not accurately reflect the damage or the policy terms, you may consider having the claim reviewed.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate the policy, denial letter, and available evidence to assess whether the insurer’s position appears consistent with the contract.' },
          { type: 'para', text: 'If you would like to discuss your denied hurricane claim, you may request a consultation to review your situation and options.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'what-to-do-after-hurricane-damage-florida',
        title: 'What to Do Immediately After Hurricane Damage in Florida',
        metaTitle: 'What to Do Immediately After Hurricane Damage in Florida',
        metaDescription: 'Hurricane damage to your Florida home? Learn the critical steps to take immediately after a storm to protect your property, document damage, and preserve your insurance claim.',
        category: 'Property Damage Law', tags: ['hurricane claims', 'documentation', 'claim process'],
        author: 'Shari Freeman', date: '2026-07-10',
        links: ['/hurricane-property-damage-lawyer'],
        body: [
          { type: 'para', text: 'Hurricanes move fast. The aftermath does not.' },
          { type: 'para', text: 'If your home has sustained hurricane damage in Florida, the steps you take in the first hours and days can significantly affect both your safety and your insurance claim.' },
          { type: 'para', text: 'Knowing what to do immediately after hurricane damage can help protect your property, preserve evidence, and avoid common claim mistakes.' },
          { type: 'heading', text: 'Step One: Make Sure It Is Safe' },
          { type: 'para', text: 'Before anything else, ensure your home is safe to enter.' },
          { type: 'para', text: 'Watch for downed power lines, gas leaks, structural instability, and standing water that may conceal hazards. If the property is unsafe, wait for appropriate authorities or professionals before entering.' },
          { type: 'para', text: 'Your safety is always the priority.' },
          { type: 'heading', text: 'Step Two: Prevent Further Damage' },
          { type: 'para', text: 'Most Florida insurance policies require homeowners to take reasonable steps to mitigate further damage after a loss.' },
          { type: 'para', text: 'This may include placing tarps on a damaged roof, boarding broken windows, or removing standing water to prevent additional interior damage.' },
          { type: 'para', text: 'Keep receipts for any emergency services or temporary repairs. These costs are often part of the claim.' },
          { type: 'para', text: 'Avoid making permanent repairs before the insurance company has had an opportunity to inspect the damage, unless immediate repairs are necessary to prevent further harm.' },
          { type: 'heading', text: 'Step Three: Document Everything' },
          { type: 'para', text: 'Thorough documentation is critical.' },
          { type: 'para', text: 'Take wide angle and close up photographs of all visible damage. Capture roof damage if it can be done safely. Photograph interior staining, fallen debris, damaged fencing, broken windows, and water intrusion.' },
          { type: 'para', text: 'Create a written list of damaged items. Include approximate purchase dates and values if possible.' },
          { type: 'para', text: 'The more detailed your documentation, the stronger your position during the claim process.' },
          { type: 'heading', text: 'Step Four: Report the Claim Promptly' },
          { type: 'para', text: 'Notify your insurance company as soon as reasonably possible.' },
          { type: 'para', text: 'Provide basic information about the date of loss and the type of damage observed. Ask for a claim number and keep a record of all communications.' },
          { type: 'para', text: 'Prompt reporting helps avoid later disputes over late notice and allows the insurer to schedule inspections more quickly.' },
          { type: 'heading', text: 'Step Five: Be Careful With Contractors and Solicitation' },
          { type: 'para', text: 'After hurricanes, contractors often canvass neighborhoods offering inspections and repairs.' },
          { type: 'para', text: 'While many contractors are reputable, you should exercise caution. Avoid signing contracts or assignments without reviewing them carefully. Do not feel pressured to commit immediately.' },
          { type: 'para', text: 'Verify licenses and credentials. Consider obtaining multiple opinions before proceeding with significant repair agreements.' },
          { type: 'heading', text: 'Step Six: Prepare for the Insurance Inspection' },
          { type: 'para', text: 'When the insurance adjuster schedules an inspection, try to be present if possible.' },
          { type: 'para', text: 'Provide access to all damaged areas. Share your photographs and documentation. If you have obtained a contractor estimate, you may provide it for consideration.' },
          { type: 'para', text: 'Clear communication during the inspection can reduce misunderstandings later.' },
          { type: 'heading', text: 'Avoid Common Mistakes' },
          { type: 'para', text: 'Do not discard damaged property before documenting it unless it poses a safety risk.' },
          { type: 'para', text: 'Do not exaggerate or speculate about damage. Accuracy and consistency are important throughout the claim process.' },
          { type: 'para', text: 'Keep organized records of estimates, receipts, emails, and inspection reports.' },
          { type: 'heading', text: 'When to Seek Guidance' },
          { type: 'para', text: 'Most hurricane claims are resolved through the normal adjustment process. However, if your claim is delayed, underpaid, or denied, you may consider seeking guidance.' },
          { type: 'para', text: 'A Florida property insurance attorney can review your policy, documentation, and claim history to determine whether the insurer’s handling appears consistent with the coverage purchased.' },
          { type: 'para', text: 'If you would like to discuss your hurricane damage claim, you may request a consultation to review your situation and options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'florida-roof-matching-law-shingles',
        title: 'Does Florida Law Require Insurance to Match Roofing Shingles?',
        metaTitle: 'Does Florida Law Require Insurance to Match Roofing Shingles?',
        metaDescription: 'Does Florida law require insurance companies to match roofing shingles? Learn how roof matching works, when full replacement may be required, and how disputes are evaluated.',
        category: 'Property Damage Law', tags: ['roof damage', 'matching', 'storm claims'],
        author: 'J. Alex Couture', date: '2026-07-03',
        links: ['/post/can-my-insurance-company-replace-only-half-my-roof-in-florida', '/post/second-roof-claim-florida'],
        body: [
          { type: 'para', text: 'One of the most common disputes in Florida roof claims arises after the insurance company agrees to pay for part of the roof but refuses to replace it entirely. This leads to an important question: does Florida law require insurance to match roofing shingles?' },
          { type: 'para', text: 'The short answer is that Florida regulations require repairs to result in a reasonably uniform appearance. However, whether that means full roof replacement depends on the specific facts of the claim.' },
          { type: 'heading', text: 'What Is Roof Matching?' },
          { type: 'para', text: 'Roof matching refers to the requirement that repairs must not leave the property with a patchwork or noticeably inconsistent appearance when comparable materials are not reasonably available.' },
          { type: 'para', text: 'When only one slope of a roof is damaged, insurers often propose replacing just that section. If the original shingles are discontinued, faded, or otherwise unavailable, replacing only one portion may create a visible mismatch.' },
          { type: 'para', text: 'The issue then becomes whether a reasonable match exists.' },
          { type: 'heading', text: 'What Does Florida Require?' },
          { type: 'para', text: 'Florida regulations addressing property insurance claims require insurers to make reasonable repairs or replacements that match the quality, color, and size of the existing materials when reasonably available.' },
          { type: 'para', text: 'If matching materials are not reasonably available, the scope of replacement may need to expand beyond the directly damaged area to achieve a uniform appearance.' },
          { type: 'para', text: 'The key phrase is reasonably available. Insurance companies often argue that a similar shingle exists, even if it does not perfectly match in color or profile. Homeowners and contractors may disagree.' },
          { type: 'heading', text: 'Does Matching Always Mean Full Roof Replacement?' },
          { type: 'para', text: 'Not necessarily.' },
          { type: 'para', text: 'If matching shingles are readily available and the repair will not create a noticeable difference, a partial replacement may be appropriate.' },
          { type: 'para', text: 'However, if the proposed repair would leave the roof visibly inconsistent or compromise the integrated roofing system, broader replacement may be justified.' },
          { type: 'para', text: 'Each claim is fact specific. The age of the roof, the material type, manufacturer availability, and visual impact all play a role.' },
          { type: 'heading', text: 'How Matching Disputes Develop' },
          { type: 'para', text: 'Roof matching disputes often arise when contractors provide documentation that the original shingles are discontinued or cannot be reasonably matched.' },
          { type: 'para', text: 'Manufacturers may issue letters confirming product discontinuation. Photographs comparing existing shingles to proposed replacements may show clear variation.' },
          { type: 'para', text: 'Insurance companies may respond by relying on vendor databases or internal material sourcing to argue that a reasonable alternative exists.' },
          { type: 'para', text: 'The disagreement typically centers on what qualifies as a reasonable match.' },
          { type: 'heading', text: 'What Should You Do If the Insurance Company Refuses to Match?' },
          { type: 'para', text: 'If your Florida insurance company is offering to replace only one portion of your roof and you believe matching is not possible, begin by documenting the issue carefully.' },
          { type: 'para', text: 'Obtain written confirmation from your contractor regarding material availability. Request manufacturer documentation if possible. Take clear photographs showing color differences or profile inconsistencies.' },
          { type: 'para', text: 'Submit this information to the insurer and request a written explanation of its position.' },
          { type: 'para', text: 'If the dispute remains unresolved, you may consider having the claim reviewed by a Florida property insurance attorney. A review can help determine whether the insurer’s proposed repair complies with policy obligations and applicable matching standards.' },
          { type: 'heading', text: 'Matching Is Often a Coverage and Scope Issue' },
          { type: 'para', text: 'Roof matching disputes are not simply aesthetic disagreements. They often involve policy interpretation and regulatory standards.' },
          { type: 'para', text: 'If replacing only one slope of your roof would leave your home with a visibly mismatched appearance and the insurer refuses to reconsider, you may request a consultation to review your policy and documentation.' },
          { type: 'para', text: 'An individualized evaluation can help clarify whether the proposed repair scope is consistent with Florida requirements.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'pre-existing-damage-denial-florida',
        title: 'What If My Insurance Company Says the Damage Is Pre-Existing?',
        metaTitle: 'What If My Insurance Company Says the Damage Is Pre-Existing?',
        metaDescription: 'Was your Florida property claim denied as “pre-existing damage”? Learn what this means, how insurers use it to deny claims, and what you can do if you disagree.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'roof damage', 'storm damage'],
        author: 'Shari Freeman', date: '2026-06-26',
        links: ['/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'Few phrases are more frustrating in a Florida property insurance claim than “pre-existing damage.”' },
          { type: 'para', text: 'If your insurance company says the damage to your roof, interior, or structure existed before the reported date of loss, you may be wondering whether that ends the claim. It does not automatically do so.' },
          { type: 'para', text: 'Understanding what insurers mean by pre-existing damage and how these disputes are evaluated can help you determine your next step.' },
          { type: 'heading', text: 'What Does “Pre-Existing Damage” Mean?' },
          { type: 'para', text: 'When an insurer labels damage as pre-existing, it is asserting that the condition was present before the specific storm or event you reported.' },
          { type: 'para', text: 'Insurance policies generally cover sudden and accidental direct physical loss caused by a covered peril. They do not cover damage that occurred before the policy period or before the reported event.' },
          { type: 'para', text: 'If the carrier believes the cracked shingles, water staining, or structural issues existed prior to the storm date, it may deny coverage on that basis.' },
          { type: 'heading', text: 'How Do Insurers Decide Damage Is Pre-Existing?' },
          { type: 'para', text: 'Insurance companies typically rely on inspections, photographs, prior claim history, and sometimes engineering reports.' },
          { type: 'para', text: 'For example, if an adjuster observes long-term staining patterns, multiple layers of prior repairs, or widespread aging conditions, the insurer may conclude that the damage did not originate from a single recent event.' },
          { type: 'para', text: 'In roof claims, insurers often argue that granule loss, brittle shingles, or lifted tabs were present before the reported storm.' },
          { type: 'para', text: 'However, these conclusions are often based on professional opinion. In many cases, causation can be disputed.' },
          { type: 'heading', text: 'The Difference Between Pre-Existing Conditions and New Damage' },
          { type: 'para', text: 'It is possible for a property to have some prior wear or minor conditions and still sustain new storm-related damage.' },
          { type: 'para', text: 'An older roof is not automatically excluded from coverage. If a covered event causes additional direct physical damage, that new damage may still be covered even if the roof was not brand new.' },
          { type: 'para', text: 'The key issue is whether the reported event caused new damage or materially worsened an existing condition.' },
          { type: 'para', text: 'Clear documentation, photographs, and contractor analysis can be important in distinguishing between long-term aging and sudden storm impact.' },
          { type: 'heading', text: 'What If You Had No Prior Issues?' },
          { type: 'para', text: 'Many homeowners are surprised by a pre-existing damage denial because they never experienced leaks or visible problems before the storm.' },
          { type: 'para', text: 'If you have maintenance records, inspection reports, or photographs showing the condition of the property before the event, those materials can be helpful.' },
          { type: 'para', text: 'Weather data and timing can also matter. If damage was discovered shortly after a known storm, that may support a causal connection.' },
          { type: 'heading', text: 'What to Do If Your Claim Is Denied for Pre-Existing Damage' },
          { type: 'para', text: 'Start by reviewing the denial letter carefully. Identify the specific reasoning and policy language cited.' },
          { type: 'para', text: 'Ask whether the insurer has documentation supporting its conclusion. Request copies of any engineering reports or photographs relied upon.' },
          { type: 'para', text: 'If you disagree with the insurer’s assessment, consider obtaining a written evaluation from a qualified contractor or expert who can address causation directly.' },
          { type: 'para', text: 'If the dispute remains unresolved and you believe the damage was caused by a covered event, you may consider having the claim reviewed by a Florida property insurance attorney.' },
          { type: 'heading', text: 'Considering a Professional Review' },
          { type: 'para', text: 'Pre-existing damage disputes often hinge on technical analysis and policy interpretation.' },
          { type: 'para', text: 'A Florida property insurance attorney can review your policy, the denial letter, inspection reports, and available documentation to evaluate whether the insurer’s position appears reasonable.' },
          { type: 'para', text: 'If you would like to discuss whether your pre-existing damage denial may be challenged, you may request a consultation to review your claim and documentation.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'late-notice-denial-florida-insurance-claim',
        title: 'Can My Insurance Company Deny My Claim for Late Notice?',
        metaTitle: 'Can My Insurance Company Deny My Claim for Late Notice?',
        metaDescription: 'Can a Florida insurer deny your property claim for late notice? Learn how late reporting affects coverage, what insurers must show, and what to do if your claim is denied.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'claim process', 'policy duties'],
        author: 'James Wilson', date: '2026-06-19',
        links: ['/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'If your property insurance claim was denied because you did not report the damage immediately, you are likely asking a critical question: can my insurance company deny my claim for late notice in Florida?' },
          { type: 'para', text: 'Late notice is one of the most common defenses raised by insurers in property damage disputes. However, a late report does not automatically mean your claim is invalid.' },
          { type: 'para', text: 'Understanding how late notice works under Florida property insurance policies can help you evaluate whether the denial is justified.' },
          { type: 'heading', text: 'What Is “Late Notice” in a Property Claim?' },
          { type: 'para', text: 'Most Florida homeowners insurance policies require the insured to provide prompt notice of a loss.' },
          { type: 'para', text: 'Policies typically use language such as “give immediate notice” or “promptly notify us of the loss.” These terms are not always defined with exact deadlines, which can create disputes about what is considered timely.' },
          { type: 'para', text: 'In practice, notice is considered late when there is a significant gap between the date of loss and the date the claim is reported.' },
          { type: 'heading', text: 'Why Insurance Companies Raise Late Notice' },
          { type: 'para', text: 'Insurance companies argue that delayed reporting can prejudice their ability to investigate.' },
          { type: 'para', text: 'If a claim is reported months after a storm, the insurer may assert that it cannot determine whether the damage was caused by that specific event, by a different storm, or by wear and tear.' },
          { type: 'para', text: 'The longer the delay, the stronger the insurer’s argument may become that its investigation was compromised.' },
          { type: 'heading', text: 'Is Late Notice an Automatic Bar to Coverage?' },
          { type: 'para', text: 'No.' },
          { type: 'para', text: 'Under Florida law, late notice does not automatically void coverage. The analysis often centers on whether the delay materially prejudiced the insurance company’s ability to investigate the claim.' },
          { type: 'para', text: 'In other words, the insurer typically must show more than just delay. It must demonstrate that the timing prevented a meaningful inspection or otherwise impaired its evaluation.' },
          { type: 'para', text: 'For example, if a roof was repaired before the insurer had an opportunity to inspect, the carrier may argue that it was prejudiced. On the other hand, if the damage remains visible and well documented, the argument may be weaker.' },
          { type: 'heading', text: 'What Counts as Late?' },
          { type: 'para', text: 'There is no universal number of days that automatically qualifies as late.' },
          { type: 'para', text: 'Some claims are reported within days of a storm. Others may not be reported for weeks or even months, especially if the damage was not immediately visible.' },
          { type: 'para', text: 'Hidden water intrusion, slow developing interior staining, or damage discovered during later maintenance may not be apparent right away. In those situations, the timeline becomes fact specific.' },
          { type: 'para', text: 'The key issue is often whether the delay was reasonable under the circumstances and whether the insurer can demonstrate actual prejudice.' },
          { type: 'heading', text: 'What If Your Claim Was Denied for Late Notice?' },
          { type: 'para', text: 'If your Florida insurance claim was denied for late notice, carefully review the denial letter.' },
          { type: 'para', text: 'Look for how the insurer explains the prejudice. Does the letter simply state that the claim was reported late, or does it describe how the delay allegedly prevented a proper investigation?' },
          { type: 'para', text: 'Gather documentation that supports your timeline. Photographs, contractor reports, weather data, and repair records can help establish when the damage was discovered and why it was reported when it was.' },
          { type: 'para', text: 'If the insurer’s position appears conclusory or unsupported, the denial may warrant closer examination.' },
          { type: 'heading', text: 'When to Consider a Professional Review' },
          { type: 'para', text: 'Late notice disputes can be legally complex. The outcome often depends on detailed facts about when the damage occurred, when it was discovered, and what evidence remains available.' },
          { type: 'para', text: 'If your claim was denied for late notice and you are unsure whether that denial is proper, you may consider having your policy and claim timeline reviewed.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate whether the insurer’s late notice defense appears consistent with the policy and applicable standards.' },
          { type: 'para', text: 'If you would like to discuss your specific situation, you may request a consultation to review your documentation and options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'how-florida-insurance-companies-calculate-roof-depreciation',
        title: 'How Florida Insurance Companies Calculate Roof Depreciation',
        metaTitle: 'How Florida Insurance Companies Calculate Roof Depreciation',
        metaDescription: 'How do Florida insurers calculate roof depreciation? Learn how depreciation affects roof claim payments, how ACV endorsements work, and why depreciation schedules matter.',
        category: 'Property Damage Law', tags: ['roof damage', 'depreciation', 'ACV'],
        author: 'Zaf Goss', date: '2026-06-12',
        links: ['/post/recoverable-depreciation-florida-property-claim'],
        body: [
          { type: 'para', text: 'If you recently filed a roof claim and your payment was lower than expected, depreciation is likely the reason.' },
          { type: 'para', text: 'Homeowners across Florida are often surprised by how much is deducted for roof depreciation. Understanding how Florida insurance companies calculate roof depreciation can help you determine whether the payment you received is consistent with your policy.' },
          { type: 'heading', text: 'What Is Roof Depreciation?' },
          { type: 'para', text: 'Depreciation reflects the reduction in value of your roof due to age, wear, and expected lifespan.' },
          { type: 'para', text: 'Insurance companies do not view a ten year old roof the same as a brand new one. When calculating claim payments, they often reduce the replacement cost based on how much useful life the roof has already consumed.' },
          { type: 'para', text: 'For example, if a roof has a projected lifespan of twenty years and it is ten years old at the time of loss, the insurer may determine that approximately half of its useful life has passed. That percentage may be used as part of the depreciation calculation.' },
          { type: 'heading', text: 'Replacement Cost Versus Actual Cash Value' },
          { type: 'para', text: 'How depreciation affects your payment depends largely on your policy type.' },
          { type: 'para', text: 'If your policy provides replacement cost coverage, the insurer typically calculates the full cost to replace the roof and then subtracts depreciation to issue an initial payment. The withheld depreciation may be recoverable once repairs are completed and proper documentation is submitted.' },
          { type: 'para', text: 'If your policy includes an actual cash value endorsement, the situation is different. Under an ACV endorsement, depreciation is not recoverable. The insurer pays only the depreciated value of the roof at the time of loss.' },
          { type: 'para', text: 'Many Florida policies that contain ACV endorsements also rely on depreciation schedules. These schedules may assign specific depreciation percentages based on the roof’s age and material type rather than evaluating each roof individually. As a result, older roofs may be subject to substantial percentage reductions.' },
          { type: 'para', text: 'Reviewing whether your policy includes an ACV endorsement is critical when evaluating your roof claim payment.' },
          { type: 'heading', text: 'How Insurers Determine the Depreciation Percentage' },
          { type: 'para', text: 'There is no single statewide formula used by all carriers.' },
          { type: 'para', text: 'Insurers generally consider the roof’s age, material type, condition, and expected lifespan. Asphalt shingle roofs are often assigned a different useful life than tile or metal systems.' },
          { type: 'para', text: 'Some carriers apply straight line depreciation, which reduces value evenly over the projected lifespan. Others may use internal guidelines or schedules tied to age brackets.' },
          { type: 'para', text: 'In ACV policies, these schedules can significantly reduce the payout. For example, a roof approaching the end of its expected life may be depreciated at a high percentage, leaving only a fraction of replacement cost payable.' },
          { type: 'heading', text: 'Common Depreciation Disputes' },
          { type: 'para', text: 'Depreciation disputes often arise for several reasons.' },
          { type: 'para', text: 'First, the insurer may incorrectly estimate the roof’s age. If the roof was replaced more recently than reflected in the claim file, the depreciation percentage may be overstated.' },
          { type: 'para', text: 'Second, the expected lifespan assigned to the material may not match manufacturer specifications.' },
          { type: 'para', text: 'Third, in replacement cost policies, disputes may arise if the insurer refuses to release recoverable depreciation after repairs are completed.' },
          { type: 'para', text: 'Carefully reviewing the estimate and confirming the roof’s installation date can make a meaningful difference in the final payment.' },
          { type: 'heading', text: 'Why ACV Endorsements Matter in Florida' },
          { type: 'para', text: 'In recent years, many Florida insurers have issued policies with ACV endorsements on roofs. These endorsements change how claims are paid.' },
          { type: 'para', text: 'Under an ACV endorsement, even if you fully replace the roof, you typically do not receive the withheld depreciation. The claim payment reflects only the depreciated value at the time of loss.' },
          { type: 'para', text: 'This can create a substantial gap between the insurance payout and the cost to replace the roof. Homeowners often discover this only after a claim is filed.' },
          { type: 'para', text: 'Before assuming additional funds will be released after repairs, it is important to confirm whether your policy provides replacement cost coverage or contains an ACV endorsement with a depreciation schedule.' },
          { type: 'heading', text: 'When to Consider a Professional Review' },
          { type: 'para', text: 'If you believe depreciation was calculated incorrectly, or if you are unsure whether your policy allows recovery of withheld depreciation, you may benefit from having your policy and estimate reviewed.' },
          { type: 'para', text: 'A Florida property insurance attorney can examine the policy language, the depreciation calculation, and the claim documentation to determine whether the insurer’s payment appears consistent with the coverage purchased.' },
          { type: 'para', text: 'If you would like your roof claim evaluated, you may request a consultation to review your policy and payment history.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Each claim depends on its specific policy terms and facts.'
      },
      {
        slug: 'repairs-fail-after-insurance-claim-florida',
        title: 'What Happens If Repairs Fail After an Insurance Claim?',
        metaTitle: 'What Happens If Repairs Fail After an Insurance Claim?',
        metaDescription: 'What if repairs fail after your Florida insurance claim is closed? Learn who may be responsible, how to document defective repairs, and what options homeowners may have.',
        category: 'Insurance Dispute Advice', tags: ['contractors', 'claim process'],
        author: 'J. Alex Couture', date: '2026-06-05',
        links: [],
        body: [
          { type: 'para', text: 'You completed your property insurance claim. The check was issued. The contractor performed the work. The file was closed.' },
          { type: 'para', text: 'Then months later, problems appear.' },
          { type: 'para', text: 'Leaks return. Flooring buckles. Drywall cracks. Mold develops. This leads to a difficult question: what happens if repairs fail after an insurance claim in Florida?' },
          { type: 'para', text: 'The answer depends on who performed the repairs, what caused the failure, and what your policy says.' },
          { type: 'heading', text: 'Start With the Source of the Problem' },
          { type: 'para', text: 'When repairs fail, the first issue is identifying the cause.' },
          { type: 'para', text: 'Was the original storm damage not fully repaired?' },
          { type: 'para', text: 'Was the scope of work incomplete?' },
          { type: 'para', text: 'Did the contractor perform defective work?' },
          { type: 'para', text: 'Or is the new problem unrelated to the original claim?' },
          { type: 'para', text: 'The answer matters because insurance companies generally pay for covered damage. They do not automatically guarantee the quality of a contractor’s work unless specific policy provisions apply.' },
          { type: 'heading', text: 'If You Chose Your Own Contractor' },
          { type: 'para', text: 'If you selected your own contractor and repairs later fail due to poor workmanship, the dispute is often between you and the contractor rather than the insurance company.' },
          { type: 'para', text: 'Most contractors provide warranties for their work. Reviewing the repair contract and warranty terms is important. You may need to contact the contractor directly to request corrective work.' },
          { type: 'para', text: 'If the failed repair caused additional damage, the situation can become more complicated. Determining whether the new damage relates to the original covered loss or to defective workmanship may require careful evaluation.' },
          { type: 'heading', text: 'If the Insurance Company Elected to Repair' },
          { type: 'para', text: 'In some Florida policies, the insurer may elect to repair rather than issue payment.' },
          { type: 'para', text: 'When the insurance company elects to repair and selects or controls the contractor, the legal analysis may differ. In certain situations, the insurer may bear responsibility for ensuring the repairs are completed properly.' },
          { type: 'para', text: 'If you believe the insurance company’s selected contractor performed defective work, reviewing the election to repair language in your policy is important.' },
          { type: 'heading', text: 'What If Additional Damage Is Discovered?' },
          { type: 'para', text: 'Sometimes repairs fail because the original scope missed hidden damage.' },
          { type: 'para', text: 'For example, roof repairs may later reveal underlayment issues that were not initially addressed. Water damage repairs may expose deeper structural moisture that was not visible during the first inspection.' },
          { type: 'para', text: 'If the newly discovered damage relates directly to the original loss, it may be possible to pursue a supplemental claim. Documentation is critical. Photographs, contractor reports, and a clear explanation connecting the new damage to the original event are essential.' },
          { type: 'heading', text: 'Document Everything' },
          { type: 'para', text: 'If repairs fail after an insurance claim, take photographs immediately.' },
          { type: 'para', text: 'Keep copies of the original estimate, invoices, proof of payment, and any warranties. Obtain written opinions from contractors regarding the cause of the failure.' },
          { type: 'para', text: 'Clear documentation helps determine whether the issue is defective workmanship, incomplete scope, or additional covered damage.' },
          { type: 'heading', text: 'When to Consider a Professional Review' },
          { type: 'para', text: 'If you are unsure whether the failed repairs relate to your original Florida insurance claim or whether the insurer may still have obligations, it may be helpful to seek guidance.' },
          { type: 'para', text: 'A Florida property insurance attorney can review the policy, the repair history, and the new damage to assess potential next steps. The analysis often turns on policy language, the nature of the repair arrangement, and the timeline.' },
          { type: 'para', text: 'If you would like to have your situation reviewed, you may request a consultation to evaluate your options.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim and repair situation depends on its specific facts and policy terms.'
      },
      {
        slug: 'do-i-have-to-use-insurance-preferred-contractor-florida',
        title: 'Do I Have to Use the Insurance Company’s Preferred Contractor?',
        metaTitle: 'Do I Have to Use the Insurance Company’s Preferred Contractor?',
        metaDescription: 'Do you have to use your insurer’s preferred contractor for a Florida property claim? Learn your rights, how preferred contractor programs work, and what to consider before agreeing.',
        category: 'Insurance Dispute Advice', tags: ['contractors', 'claim process', 'policyholder rights'],
        author: 'James Wilson', date: '2026-05-29',
        links: [],
        body: [
          { type: 'para', text: 'After filing a property insurance claim, you may be told that the insurance company has a preferred contractor who can handle the repairs. That often leads to an important question: do I have to use the insurance company’s preferred contractor in Florida?' },
          { type: 'para', text: 'In most situations, the answer is no. As a homeowner, you generally have the right to choose your own contractor. However, there are important details to understand before making a decision.' },
          { type: 'heading', text: 'What Is a Preferred Contractor Program?' },
          { type: 'para', text: 'Many insurance companies maintain networks of contractors who agree to perform repairs for policyholders. These programs are often referred to as direct repair programs or preferred vendor programs.' },
          { type: 'para', text: 'The insurer may describe the contractor as preapproved, vetted, or familiar with the claims process. In some cases, the carrier may represent that using its contractor will simplify communication or speed up payment.' },
          { type: 'para', text: 'While these programs are common, participation is typically voluntary unless your specific policy includes alternative repair provisions.' },
          { type: 'heading', text: 'Can the Insurance Company Require You to Use Its Contractor?' },
          { type: 'para', text: 'In most standard Florida homeowners policies, the insurer cannot force you to use a particular contractor. You are generally free to select a licensed contractor of your choice.' },
          { type: 'para', text: 'That said, some policies contain language allowing the insurer to elect to repair the property. When that provision is invoked, the insurance company may take responsibility for performing the repairs directly rather than issuing payment to you.' },
          { type: 'para', text: 'If your insurer asserts that it is electing to repair, the policy language should be reviewed carefully to understand your rights and obligations.' },
          { type: 'heading', text: 'Pros and Cons of Using a Preferred Contractor' },
          { type: 'para', text: 'There can be potential advantages to using a preferred contractor. The insurer may coordinate directly with the vendor, and payment arrangements may be more streamlined.' },
          { type: 'para', text: 'However, homeowners should also consider possible drawbacks. The contractor’s relationship with the insurer may create concerns about scope decisions or repair recommendations. It is important to ensure that the proposed repairs fully address the damage and comply with local building codes.' },
          { type: 'para', text: 'You are entitled to ask questions about the scope of work, materials, warranties, and timelines, regardless of who performs the repairs.' },
          { type: 'heading', text: 'What If You Want to Use Your Own Contractor?' },
          { type: 'para', text: 'If you prefer to use your own contractor, you can typically do so. The insurance company may issue payment based on its approved scope and pricing. If your contractor’s estimate is higher, that difference may need to be addressed through a supplement or further discussion.' },
          { type: 'para', text: 'Before signing any work authorization or assignment documents, review them carefully. Make sure you understand the terms and how payment will be handled.' },
          { type: 'heading', text: 'When to Seek Guidance' },
          { type: 'para', text: 'If your insurer is pressuring you to use its preferred contractor or claiming that you have no choice, it may be helpful to review your policy language.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate whether the insurer’s position is consistent with the policy and whether your right to choose your own contractor is being limited improperly.' },
          { type: 'para', text: 'If you have questions about using a preferred contractor or about an election to repair provision in your policy, you may request a consultation to review your specific situation.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim and policy is different.'
      },
      {
        slug: 'contractor-estimate-higher-than-insurance-florida',
        title: 'What If My Contractor’s Estimate Is Higher Than the Insurance Estimate?',
        metaTitle: 'What If My Contractor’s Estimate Is Higher Than the Insurance Estimate?',
        metaDescription: 'Is your contractor’s estimate higher than your insurance company’s? Learn why Florida property claim estimates differ and what you can do if your claim appears underpaid.',
        category: 'Insurance Dispute Advice', tags: ['contractors', 'underpaid claims', 'claim process'],
        author: 'James Wilson', date: '2026-05-22',
        links: ['/underpaid-insurance-claims'],
        body: [
          { type: 'para', text: 'One of the most common frustrations in Florida property insurance claims occurs when the contractor’s estimate is significantly higher than the insurance company’s estimate.' },
          { type: 'para', text: 'If you are facing this situation, you are not alone. The difference between these two numbers is often where disputes begin.' },
          { type: 'para', text: 'Understanding why estimates differ and how to approach the gap can help you determine your next step.' },
          { type: 'heading', text: 'Why Do Contractor and Insurance Estimates Differ?' },
          { type: 'para', text: 'Insurance companies and contractors approach damage evaluation from different perspectives.' },
          { type: 'para', text: 'The insurance adjuster prepares a scope of repairs based on what they believe is directly related to the covered loss. That scope is then priced using estimating software and standardized pricing databases.' },
          { type: 'para', text: 'Your contractor, on the other hand, is focused on performing the work properly and in compliance with local building codes. Contractors often include items they believe are necessary to complete the repair safely and correctly, even if the adjuster did not initially include them.' },
          { type: 'para', text: 'Differences may arise from omitted line items, labor pricing, material quality, underlayment requirements, flashing work, permits, or overhead and profit.' },
          { type: 'heading', text: 'Scope Differences Versus Pricing Differences' },
          { type: 'para', text: 'Sometimes the gap between estimates is primarily about price per unit. Other times, it is about scope.' },
          { type: 'para', text: 'Scope disputes tend to be more significant. For example, if the insurance company proposes partial roof repair but your contractor believes full replacement is required, the dollar difference can be substantial.' },
          { type: 'para', text: 'In water damage claims, the insurer may limit tear-out to a small area while the contractor believes broader demolition is necessary to properly dry and restore the property.' },
          { type: 'para', text: 'Identifying whether the disagreement is about pricing or scope is an important first step.' },
          { type: 'heading', text: 'Should You Just Ask the Contractor to Lower the Price?' },
          { type: 'para', text: 'It is common for homeowners to feel caught in the middle and consider asking the contractor to reduce the estimate to match the insurance payment.' },
          { type: 'para', text: 'In some cases, minor adjustments may be possible. However, if the contractor’s estimate reflects necessary work, reducing it may result in incomplete repairs.' },
          { type: 'para', text: 'Before asking a contractor to cut costs, it is important to understand whether the insurance estimate fully accounts for what is required to restore the property to its pre-loss condition.' },
          { type: 'heading', text: 'What Can You Do If the Insurance Estimate Seems Too Low?' },
          { type: 'para', text: 'Start by comparing the two estimates line by line.' },
          { type: 'para', text: 'Look for items included in the contractor’s estimate that are missing from the insurance scope. Review quantities, measurements, and material descriptions. Sometimes the issue is as simple as missing components.' },
          { type: 'para', text: 'You can request clarification from the adjuster and submit the contractor’s estimate for review as a supplement. Providing photographs, manufacturer specifications, and code references can strengthen the submission.' },
          { type: 'para', text: 'Clear documentation often helps move the discussion forward.' },
          { type: 'heading', text: 'When the Gap Remains' },
          { type: 'para', text: 'If the insurance company refuses to revise its estimate and the difference remains significant, the issue may become a formal dispute over the amount of loss.' },
          { type: 'para', text: 'Depending on the policy, appraisal may be available in certain situations. In other cases, a more detailed policy and claim file review may be necessary to determine whether the insurer’s position is consistent with its contractual obligations.' },
          { type: 'para', text: 'If you believe your Florida property insurance claim has been materially underpaid and discussions have not resolved the issue, you may consider seeking guidance.' },
          { type: 'heading', text: 'Considering a Professional Review' },
          { type: 'para', text: 'A Florida property insurance attorney can review both estimates, the policy language, and the claim documentation to evaluate whether the insurance company’s scope appears reasonable.' },
          { type: 'para', text: 'If you would like to better understand the gap between your contractor’s estimate and the insurer’s payment, you may request a consultation to review your claim and documentation.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'reopen-closed-florida-insurance-claim',
        title: 'Can I Reopen My Florida Insurance Claim After It Was Closed?',
        metaTitle: 'Can I Reopen My Florida Insurance Claim After It Was Closed?',
        metaDescription: 'Can you reopen a closed Florida property insurance claim? Learn when reopening may be possible, what deadlines apply, and how to respond if your insurer refuses to reconsider.',
        category: 'Insurance Dispute Advice', tags: ['claim process', 'deadlines', 'supplemental claims'],
        author: 'Shari Freeman', date: '2026-05-15',
        links: [],
        body: [
          { type: 'para', text: 'It is not uncommon for homeowners to discover additional damage after a claim has been paid and marked closed. This leads to an important question: can I reopen my Florida insurance claim after it was closed?' },
          { type: 'para', text: 'In many situations, the answer is yes. However, timing, documentation, and policy language all matter.' },
          { type: 'para', text: 'Understanding when reopening may be appropriate and how to approach the process can help you avoid unnecessary complications.' },
          { type: 'heading', text: 'Why Claims Are Closed in the First Place' },
          { type: 'para', text: 'Insurance companies typically close a claim after issuing payment or a denial.' },
          { type: 'para', text: 'A claim may be closed because the insurer believes all covered damage has been addressed. In other cases, the file may be closed simply because no further communication occurred for a period of time.' },
          { type: 'para', text: 'Closure does not always mean the matter is permanently resolved. It often reflects the insurer’s administrative status rather than a legal conclusion that no additional damage exists.' },
          { type: 'heading', text: 'When Reopening May Be Appropriate' },
          { type: 'para', text: 'Reopening a Florida property insurance claim may be appropriate if new damage is discovered that relates to the original loss.' },
          { type: 'para', text: 'For example, after a roof repair begins, additional storm-related damage may be uncovered beneath the shingles. In water damage claims, hidden moisture or structural issues may not become apparent until demolition begins.' },
          { type: 'para', text: 'If the additional damage is connected to the same reported event and was not reasonably visible during the initial inspection, reopening may be justified.' },
          { type: 'para', text: 'Documentation is critical in these situations. Clear photographs, contractor reports, and detailed explanations linking the new damage to the original loss can strengthen your request.' },
          { type: 'heading', text: 'Are There Time Limits?' },
          { type: 'para', text: 'Yes. Florida property insurance policies and applicable deadlines can affect your ability to reopen a claim.' },
          { type: 'para', text: 'Policies often contain provisions requiring supplemental claims to be reported within certain timeframes. In addition, there are deadlines for filing lawsuits related to property insurance disputes.' },
          { type: 'para', text: 'If significant time has passed since the original claim was closed, it is important to review the policy and timeline carefully before assuming reopening is available.' },
          { type: 'heading', text: 'What If the Insurance Company Refuses to Reopen the Claim?' },
          { type: 'para', text: 'Insurers sometimes decline to reopen claims, especially if they believe the additional damage is unrelated, pre-existing, or the result of a separate event.' },
          { type: 'para', text: 'If your request to reopen a closed Florida insurance claim is denied, the issue may become a coverage dispute. At that point, the analysis often centers on whether the new damage can reasonably be tied to the original reported loss.' },
          { type: 'para', text: 'Providing detailed documentation and a clear explanation of how the damage relates to the initial claim can make a meaningful difference.' },
          { type: 'heading', text: 'Supplemental Claim Versus Reopening' },
          { type: 'para', text: 'In some cases, what homeowners describe as reopening a claim is technically treated as a supplemental claim. A supplemental claim seeks additional payment for the same loss based on newly discovered or previously underpaid damage.' },
          { type: 'para', text: 'The terminology may vary, but the core issue remains whether the insurer is obligated under the policy to consider and pay the additional amount.' },
          { type: 'heading', text: 'When to Consider a Professional Review' },
          { type: 'para', text: 'If you believe additional damage from your original loss was overlooked and the insurance company has closed the file, you may benefit from having the claim reviewed.' },
          { type: 'para', text: 'A Florida property insurance attorney can evaluate the policy, the original estimate, the newly discovered damage, and the timeline to determine whether reopening or submitting a supplemental claim appears viable.' },
          { type: 'para', text: 'If you would like to discuss whether your closed Florida insurance claim can be revisited, you may request a consultation to review your documentation and options.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim depends on its specific policy language and facts.'
      },
      {
        slug: 'recoverable-depreciation-florida-property-claim',
        title: 'What Is Recoverable Depreciation in Florida Property Claims?',
        metaTitle: 'What Is Recoverable Depreciation in Florida Property Claims?',
        metaDescription: 'What is recoverable depreciation in a Florida property insurance claim? Learn how depreciation works, when you can recover it, and what steps are required to receive full payment.',
        category: 'Property Damage Law', tags: ['depreciation', 'claim payments', 'coverage basics'],
        author: 'Shari Freeman', date: '2026-05-08',
        links: ['/post/how-florida-insurance-companies-calculate-roof-depreciation'],
        body: [
          { type: 'para', text: 'If you received a payment from your insurance company that was lower than your contractor’s estimate, you may have noticed a line item labeled depreciation. This often leads to confusion and a common question: what is recoverable depreciation in Florida property claims?' },
          { type: 'para', text: 'Understanding how depreciation works is critical to knowing whether you have received the full amount owed under your policy.' },
          { type: 'heading', text: 'What Is Depreciation?' },
          { type: 'para', text: 'Depreciation reflects the reduction in value of property over time due to age, wear, and use.' },
          { type: 'para', text: 'In the context of a Florida property insurance claim, insurers frequently calculate the cost to repair or replace damaged property and then subtract depreciation to determine the initial payment.' },
          { type: 'para', text: 'For example, if replacing a damaged roof costs a certain amount but the roof was several years old, the insurer may deduct a portion of that cost to reflect its age. The amount deducted is the depreciation.' },
          { type: 'heading', text: 'Actual Cash Value Versus Replacement Cost' },
          { type: 'para', text: 'Most homeowners policies provide either actual cash value coverage or replacement cost coverage.' },
          { type: 'para', text: 'Actual cash value coverage pays the value of the damaged property at the time of loss after depreciation is deducted.' },
          { type: 'para', text: 'Replacement cost coverage, by contrast, is designed to pay the cost to repair or replace the property without deducting depreciation. However, even under replacement cost policies, insurers often issue the initial payment based on actual cash value and hold back the depreciation until repairs are completed.' },
          { type: 'para', text: 'That withheld amount is typically referred to as recoverable depreciation.' },
          { type: 'heading', text: 'How Recoverable Depreciation Works' },
          { type: 'para', text: 'If your policy provides replacement cost coverage, the insurer may issue two payments.' },
          { type: 'para', text: 'The first payment reflects the actual cash value, which is the repair cost minus depreciation and your deductible.' },
          { type: 'para', text: 'Once repairs are completed and you provide proof, such as invoices or contracts showing the work was performed, you may request release of the withheld depreciation.' },
          { type: 'para', text: 'If the claim is handled properly and repairs are made in accordance with the policy requirements, the recoverable depreciation should be paid.' },
          { type: 'heading', text: 'Common Issues With Recoverable Depreciation' },
          { type: 'para', text: 'Disputes sometimes arise over the amount of depreciation applied. If depreciation is calculated aggressively or inconsistently, it can significantly reduce the initial payment.' },
          { type: 'para', text: 'Another issue occurs when homeowners are unaware that they must complete repairs and submit documentation before recoverable depreciation is released. Some policies include time limits for completing repairs and requesting the remaining payment.' },
          { type: 'para', text: 'If those deadlines are missed, recovering the withheld amount may become more complicated.' },
          { type: 'para', text: 'It is important to review your policy carefully and understand any requirements related to repair completion and documentation.' },
          { type: 'heading', text: 'What If You Cannot Afford to Start Repairs?' },
          { type: 'para', text: 'One practical challenge with recoverable depreciation is that homeowners often need the full replacement cost amount to begin repairs. Receiving only the actual cash value may not be sufficient to fund the work.' },
          { type: 'para', text: 'In some situations, contractors may work with homeowners to structure payments, but this depends on the contractor and the scope of damage.' },
          { type: 'para', text: 'If you believe depreciation was calculated incorrectly or withheld improperly, it may be helpful to have the estimate and policy reviewed.' },
          { type: 'heading', text: 'When to Consider a Professional Review' },
          { type: 'para', text: 'If you are unsure whether the depreciation applied to your Florida property claim is accurate, or if the insurer is refusing to release recoverable depreciation after repairs are completed, you may consider seeking guidance.' },
          { type: 'para', text: 'A Florida property insurance attorney can review your policy, the estimate, and the payment history to determine whether the insurer’s calculations appear consistent with the coverage purchased.' },
          { type: 'para', text: 'If you would like your claim reviewed, you may request a consultation to evaluate whether the depreciation applied is appropriate and whether additional amounts may be owed.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific policy language and facts.'
      },
      {
        slug: 'is-it-worth-hiring-attorney-florida-insurance-claim',
        title: 'Is It Worth Hiring an Attorney for My Florida Insurance Claim?',
        metaTitle: 'Is It Worth Hiring an Attorney for My Florida Insurance Claim?',
        metaDescription: 'Is it worth hiring a Florida property insurance attorney? Learn when legal help may make sense, how disputes arise, and what homeowners should consider before escalating a claim.',
        category: 'Insurance Dispute Advice', tags: ['hiring an attorney', 'policyholder rights'],
        author: 'James Wilson', date: '2026-05-01',
        links: [],
        body: [
          { type: 'para', text: 'If your property insurance claim has been delayed, underpaid, or denied, you may be asking a very practical question: is it worth hiring an attorney for my Florida insurance claim?' },
          { type: 'para', text: 'Not every claim requires legal involvement. Many claims are handled and resolved without dispute. However, when communication breaks down or the scope of payment does not reflect the damage, legal guidance can sometimes make a meaningful difference.' },
          { type: 'para', text: 'Understanding when an attorney may be helpful and when it may not be necessary can help you make an informed decision.' },
          { type: 'heading', text: 'When Claims Typically Resolve Without an Attorney' },
          { type: 'para', text: 'If your insurance company promptly inspects the property, issues a detailed estimate, and pays an amount that aligns with contractor pricing, there may be little need for escalation.' },
          { type: 'para', text: 'Minor differences in pricing or small scope adjustments can often be resolved directly with the adjuster.' },
          { type: 'para', text: 'If the claim process is moving forward, documentation is being reviewed, and payment appears consistent with the policy, legal involvement may not add value.' },
          { type: 'heading', text: 'When Legal Guidance May Be Worth Considering' },
          { type: 'para', text: 'Certain situations tend to raise more serious concerns.' },
          { type: 'para', text: 'If your Florida insurance claim was denied outright and you believe the damage was caused by a covered event, that dispute may require deeper policy analysis.' },
          { type: 'para', text: 'If the claim was underpaid and the gap between the insurance estimate and the contractor estimate is significant, it may be important to determine whether key items were omitted or whether matching, building code, or depreciation issues were handled correctly.' },
          { type: 'para', text: 'If your claim has been pending for an extended period without clear communication, or if you are facing repeated reinspections and shifting explanations, that may also justify closer review.' },
          { type: 'para', text: 'An attorney can evaluate the policy language, the denial letter or estimate, and the documentation to determine whether the insurer’s position appears consistent with the contract.' },
          { type: 'heading', text: 'What an Attorney Actually Does in a Property Claim' },
          { type: 'para', text: 'A Florida property insurance attorney does more than file lawsuits.' },
          { type: 'para', text: 'Legal review typically begins with analyzing the policy, the scope of damage, and the insurer’s written explanations. In some cases, formal communication or additional documentation can lead to movement on the claim without immediate litigation.' },
          { type: 'para', text: 'If litigation becomes necessary, the process involves structured deadlines, document exchange, and often court-ordered mediation. Many cases resolve before trial once both sides have fully evaluated the evidence.' },
          { type: 'para', text: 'The role of counsel is to ensure that the insurance company’s obligations under the policy are examined carefully and enforced if necessary.' },
          { type: 'heading', text: 'Cost Considerations' },
          { type: 'para', text: 'Homeowners often worry that hiring an attorney will cost more than the dispute is worth.' },
          { type: 'para', text: 'Fee structures vary, and it is important to understand them clearly before moving forward. Many property insurance disputes are handled on a contingency basis, meaning fees depend on the outcome. However, every situation is different and should be discussed directly with counsel.' },
          { type: 'para', text: 'If you are unsure whether the potential recovery justifies legal involvement, a consultation can help clarify that analysis.' },
          { type: 'heading', text: 'Asking the Right Question' },
          { type: 'para', text: 'Instead of asking only whether it is worth hiring an attorney, consider asking whether your claim is being handled in a way that reflects the policy you purchased.' },
          { type: 'para', text: 'If the claim process feels transparent and responsive, continuing direct communication may be appropriate.' },
          { type: 'para', text: 'If you are facing denial, substantial underpayment, or prolonged delay without explanation, a professional review may help you understand your position more clearly.' },
          { type: 'para', text: 'If you would like to evaluate whether legal involvement makes sense for your Florida insurance claim, you may request a consultation to review your policy and claim documentation. An individualized assessment can help you determine the most appropriate path forward.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'how-long-florida-property-insurance-lawsuit',
        title: 'How Long Does a Florida Property Insurance Lawsuit Take?',
        metaTitle: 'How Long Does a Florida Property Insurance Lawsuit Take?',
        metaDescription: 'How long does a Florida property insurance lawsuit take? Learn the typical timeline, key stages of litigation, and what can affect how quickly your claim is resolved.',
        category: 'Insurance Dispute Advice', tags: ['litigation', 'claim process'],
        author: 'J. Alex Couture', date: '2026-04-24',
        links: [],
        body: [
          { type: 'para', text: 'If your insurance claim has been denied or underpaid and negotiations have stalled, you may be considering legal action. One of the first questions homeowners ask is straightforward and important: how long does a Florida property insurance lawsuit take?' },
          { type: 'para', text: 'The honest answer is that it depends. Every case is different. However, understanding the general timeline and the factors that influence it can help you set realistic expectations.' },
          { type: 'heading', text: 'The Early Stage: Filing and Response' },
          { type: 'para', text: 'A Florida property insurance lawsuit begins when a complaint is filed in court.' },
          { type: 'para', text: 'Before filing, there are often pre-suit requirements that must be satisfied. Once the lawsuit is formally filed and served, the insurance company has a set period of time to respond.' },
          { type: 'para', text: 'During this initial phase, procedural issues may be addressed. The insurer may file defenses, and the court will typically enter a scheduling order that governs how the case will move forward.' },
          { type: 'para', text: 'This early stage can take several weeks to a few months depending on the court’s calendar and how quickly documents are exchanged.' },
          { type: 'heading', text: 'The Discovery Phase' },
          { type: 'para', text: 'Discovery is often the longest part of a Florida property insurance lawsuit.' },
          { type: 'para', text: 'During discovery, both sides exchange information. This may include written questions, document requests, depositions of the homeowner, corporate representatives of the insurance company, adjusters, and sometimes engineers or other experts.' },
          { type: 'para', text: 'Discovery allows each side to evaluate the strength of the case. It can take several months, and in more complex cases, it may extend longer depending on scheduling and the number of witnesses involved.' },
          { type: 'para', text: 'In many situations, cases resolve during or shortly after discovery once both sides have a clearer picture of the evidence.' },
          { type: 'heading', text: 'Mediation and Settlement Discussions' },
          { type: 'para', text: 'Florida courts typically require mediation before a case can proceed to trial.' },
          { type: 'para', text: 'Mediation is a structured settlement conference conducted by a neutral mediator. Many property insurance lawsuits resolve at mediation once both sides fully understand the risks and potential outcomes.' },
          { type: 'para', text: 'If the case settles at mediation, the timeline may be significantly shorter than if the case proceeds to trial.' },
          { type: 'heading', text: 'Trial, If Necessary' },
          { type: 'para', text: 'If a case does not resolve through negotiation or mediation, it may proceed to trial.' },
          { type: 'para', text: 'Trial scheduling depends heavily on the court’s docket. Some jurisdictions move cases more quickly than others. Trial preparation also requires additional time for expert disclosures, motion practice, and pretrial filings.' },
          { type: 'para', text: 'While some Florida property insurance lawsuits resolve within a year, others may take longer if they proceed all the way through trial.' },
          { type: 'heading', text: 'Factors That Affect the Timeline' },
          { type: 'para', text: 'Several factors influence how long a Florida property insurance lawsuit may take.' },
          { type: 'para', text: 'The complexity of the claim matters. A straightforward roof damage dispute may move faster than a large commercial loss involving multiple experts.' },
          { type: 'para', text: 'The court where the case is filed can also impact timing. Some circuits have heavier caseloads than others.' },
          { type: 'para', text: 'The willingness of the parties to engage in meaningful settlement discussions plays a significant role. Many cases resolve before trial once sufficient information has been exchanged.' },
          { type: 'heading', text: 'Is Filing a Lawsuit Always a Long Process?' },
          { type: 'para', text: 'Not necessarily.' },
          { type: 'para', text: 'While litigation takes time, filing a lawsuit often changes the posture of the claim. Once formal discovery begins and deadlines are imposed by the court, disputes that previously stalled can move forward more predictably.' },
          { type: 'para', text: 'It is important to remember that not every filed lawsuit goes to trial. Many resolve well before that stage.' },
          { type: 'heading', text: 'Setting Realistic Expectations' },
          { type: 'para', text: 'If you are considering legal action, it is helpful to approach the process with patience and clarity. A lawsuit is not immediate, but it can be an effective mechanism for resolving a denied or underpaid claim.' },
          { type: 'para', text: 'If you would like to understand how long a Florida property insurance lawsuit might take in your specific situation, you may request a consultation to review your claim history and policy. An individualized assessment can provide a clearer sense of the likely timeline and next steps.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every case depends on its specific facts, policy language, and the court in which it is filed.'
      },
      {
        slug: 'can-insurance-company-drop-me-after-claim-florida',
        title: 'Can My Insurance Company Drop Me After I File a Claim in Florida?',
        metaTitle: 'Can My Insurance Company Drop Me After I File a Claim in Florida?',
        metaDescription: 'Can your insurer cancel or nonrenew your policy after you file a property claim in Florida? Learn when it is allowed, when it is not, and what homeowners should know.',
        category: 'Insurance Dispute Advice', tags: ['cancellation', 'nonrenewal', 'policyholder rights'],
        author: 'Shari Freeman', date: '2026-04-17',
        links: [],
        body: [
          { type: 'para', text: 'It is a common fear for homeowners. You file a roof or water damage claim, and then a new worry sets in. Can my insurance company drop me after I file a claim in Florida?' },
          { type: 'para', text: 'The short answer is that insurance companies can cancel or nonrenew policies in certain circumstances. However, there are rules that govern when and how they can do it.' },
          { type: 'para', text: 'Understanding the difference between cancellation and nonrenewal, and knowing what protections apply, can help you evaluate your situation calmly and clearly.' },
          { type: 'heading', text: 'Cancellation Versus Nonrenewal' },
          { type: 'para', text: 'Cancellation typically refers to terminating a policy before the end of the policy term. Nonrenewal means the insurer chooses not to renew the policy when it expires.' },
          { type: 'para', text: 'In Florida, insurers are subject to notice requirements and restrictions for both actions. The timing of the claim and the reason for the action matter.' },
          { type: 'para', text: 'In many situations, an insurer cannot simply cancel a policy midterm solely because you filed a claim. However, at renewal, the company may decide not to continue coverage based on underwriting criteria.' },
          { type: 'heading', text: 'Can Filing a Claim Trigger Cancellation?' },
          { type: 'para', text: 'Filing a legitimate claim does not automatically mean your policy will be canceled.' },
          { type: 'para', text: 'That said, insurers evaluate risk. Multiple claims within a short period, large losses, or underwriting concerns about the condition of the property may influence future coverage decisions.' },
          { type: 'para', text: 'For example, if a roof is found to be at the end of its useful life during the claim process, the insurer may require replacement as a condition of renewal. If repairs are not completed, nonrenewal may follow.' },
          { type: 'para', text: 'Each situation depends on the specific facts and the policy history.' },
          { type: 'heading', text: 'What About During an Open Claim?' },
          { type: 'para', text: 'If your claim is still pending, insurers generally must follow statutory procedures before canceling a policy. Abrupt cancellation without proper notice can raise legal issues.' },
          { type: 'para', text: 'If you receive a cancellation or nonrenewal notice while your Florida property claim is still being adjusted, review the effective date carefully. Pay attention to whether the action is immediate or tied to the policy expiration.' },
          { type: 'para', text: 'If the timing appears unusual or inconsistent with notice requirements, it may be appropriate to seek clarification.' },
          { type: 'heading', text: 'Can an Insurer Nonrenew After Paying a Claim?' },
          { type: 'para', text: 'Yes, insurers may choose not to renew a policy at the end of the term based on underwriting guidelines, loss history, or property condition.' },
          { type: 'para', text: 'This is especially common in Florida following roof claims or hurricane losses. A carrier may require proof of completed repairs, roof replacement, or mitigation improvements before agreeing to renew.' },
          { type: 'para', text: 'If you receive a nonrenewal notice after filing a claim, do not ignore it. Begin exploring replacement coverage as early as possible to avoid a lapse.' },
          { type: 'heading', text: 'What Should You Do If You Receive a Cancellation or Nonrenewal Notice?' },
          { type: 'para', text: 'First, read the notice carefully. Confirm the reason stated and the effective date. Ensure the required notice period has been provided.' },
          { type: 'para', text: 'Second, address any outstanding property issues identified by the insurer. If the notice references roof condition, incomplete repairs, or underwriting concerns, resolving those items may affect future insurability.' },
          { type: 'para', text: 'If you believe the cancellation or nonrenewal is improper or retaliatory, you may consider having the matter reviewed by a Florida property insurance attorney. A review can help determine whether the insurer complied with policy terms and applicable requirements.' },
          { type: 'heading', text: 'Filing a Claim Does Not Automatically Mean You Will Be Dropped' },
          { type: 'para', text: 'Many homeowners file claims and continue their coverage without interruption. While the Florida insurance market can be challenging, filing a single legitimate claim does not automatically result in cancellation.' },
          { type: 'para', text: 'If you are concerned about how filing a property claim may affect your policy, or if you have already received a cancellation or nonrenewal notice, you may request a consultation to review your situation. An individualized evaluation can help you understand your rights and options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every policy and situation is different.'
      },
      {
        slug: 'examination-under-oath-florida-property-claim',
        title: 'What Is an Examination Under Oath (EUO) in Florida Property Claims?',
        metaTitle: 'What Is an Examination Under Oath (EUO) in Florida Property Claims?',
        metaDescription: 'What is an Examination Under Oath in a Florida property insurance claim? Learn what to expect at an EUO, why insurers request one, and how it can affect your claim.',
        category: 'Insurance Dispute Advice', tags: ['investigations', 'claim process', 'policy duties'],
        author: 'Zaf Goss', date: '2026-04-10',
        links: ['/post/recorded-statement-florida-insurance-claim'],
        body: [
          { type: 'para', text: 'If your insurance company has scheduled an Examination Under Oath, you may be feeling anxious or confused. Many Florida homeowners have never heard of an EUO until they receive a formal letter demanding one.' },
          { type: 'para', text: 'So what is an Examination Under Oath in a Florida property insurance claim, and how serious is it?' },
          { type: 'para', text: 'An EUO is a formal proceeding where the insurance company questions you under oath as part of its investigation. It is more structured and formal than a recorded statement and can have significant consequences for your claim.' },
          { type: 'para', text: 'Understanding what an EUO is and how it works can help you approach the situation carefully and confidently.' },
          { type: 'heading', text: 'What Is an Examination Under Oath?' },
          { type: 'para', text: 'An Examination Under Oath is a sworn question and answer session conducted by the insurance company’s attorney or representative. You are placed under oath, similar to testimony in a deposition, and a court reporter transcribes the proceedings.' },
          { type: 'para', text: 'The insurer’s attorney may ask detailed questions about the loss, the condition of the property before the damage, prior repairs, maintenance history, financial information related to the claim, and the timeline of events.' },
          { type: 'para', text: 'Unlike a casual phone call, an EUO is formal and recorded in writing.' },
          { type: 'heading', text: 'Why Do Insurance Companies Request an EUO?' },
          { type: 'para', text: 'Insurance policies typically contain a provision allowing the insurer to require an Examination Under Oath as part of its investigation. Carriers often invoke this provision when they believe the claim requires deeper scrutiny.' },
          { type: 'para', text: 'An EUO may be requested if there are concerns about the cause of loss, the timing of the claim, prior damage or repairs, the amount of the claimed loss, and potential misrepresentations.' },
          { type: 'para', text: 'Sometimes EUOs are requested in large loss claims or when there are inconsistencies in documentation. Other times, they are used more broadly as an investigative tool.' },
          { type: 'para', text: 'Being asked to attend an EUO does not automatically mean the insurer believes you did something wrong. It does mean the claim is under heightened review.' },
          { type: 'heading', text: 'Am I Required to Attend?' },
          { type: 'para', text: 'Most Florida homeowners insurance policies include a cooperation clause that requires the insured to submit to an Examination Under Oath if requested.' },
          { type: 'para', text: 'Failure to comply with a properly requested EUO can lead to denial of the claim based on noncooperation. Because of this, EUOs should be taken seriously.' },
          { type: 'para', text: 'However, cooperation does not mean you should attend unprepared.' },
          { type: 'heading', text: 'What Should You Expect at an EUO?' },
          { type: 'para', text: 'An EUO typically takes place in a law office or similar setting. The insurance company’s attorney will ask questions while a court reporter records the testimony. The proceeding may last several hours depending on the complexity of the claim.' },
          { type: 'para', text: 'Questions often cover the date of loss, when you first noticed the damage, prior maintenance, any previous insurance claims, and communications with contractors. You may also be asked about financial details related to repairs.' },
          { type: 'para', text: 'Accuracy is critical. If you do not know an answer, it is better to say so than to guess. Inconsistent or speculative answers can later become part of a coverage dispute.' },
          { type: 'heading', text: 'Should You Have an Attorney Present?' },
          { type: 'para', text: 'Yes. If you have been scheduled for an Examination Under Oath in connection with a Florida property claim, you have the right to be represented by counsel.' },
          { type: 'para', text: 'An experienced Florida property insurance attorney can review your policy, prepare you for the questioning, attend the EUO with you, and protect your rights during the process. Preparation can make a meaningful difference in how the proceeding unfolds.' },
          { type: 'para', text: 'If you have received an EUO notice, it is wise to seek guidance before attending.' },
          { type: 'heading', text: 'What Happens After the EUO?' },
          { type: 'para', text: 'After the Examination Under Oath, the insurer will review the testimony along with the rest of the claim file. The company may issue a coverage decision, request additional documentation, or continue its investigation.' },
          { type: 'para', text: 'In some cases, an EUO leads to payment. In others, it precedes a denial. The outcome depends on the specific facts and the insurer’s evaluation.' },
          { type: 'para', text: 'If a denial follows an EUO, the transcript often becomes a central piece of evidence in any dispute.' },
          { type: 'heading', text: 'Take an EUO Seriously' },
          { type: 'para', text: 'An Examination Under Oath is one of the most significant steps an insurance company can take during a Florida property insurance investigation. It is formal, recorded, and legally important.' },
          { type: 'para', text: 'If your insurer has requested an EUO and you are unsure how to proceed, you may request a consultation to review your policy and the notice. An individualized evaluation can help you understand your obligations and prepare appropriately.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'recorded-statement-florida-insurance-claim',
        title: 'Do I Have to Give a Recorded Statement for My Florida Insurance Claim?',
        metaTitle: 'Do I Have to Give a Recorded Statement for My Florida Insurance Claim?',
        metaDescription: 'Do you have to give a recorded statement for a Florida property insurance claim? Learn when insurers can request one, what to expect, and how to protect your rights.',
        category: 'Insurance Dispute Advice', tags: ['investigations', 'claim process', 'policy duties'],
        author: 'James Wilson', date: '2026-04-03',
        links: ['/post/examination-under-oath-florida-property-claim'],
        body: [
          { type: 'para', text: 'After you report a property insurance claim, the adjuster may ask to take a recorded statement. Many Florida homeowners feel caught off guard by this request and immediately wonder: do I have to give a recorded statement for my insurance claim?' },
          { type: 'para', text: 'The answer depends largely on your policy and the circumstances of the claim. While insurance companies are allowed to investigate claims, there are important considerations before agreeing to a recorded statement.' },
          { type: 'para', text: 'Understanding what it is and how it may affect your claim can help you make an informed decision.' },
          { type: 'heading', text: 'What Is a Recorded Statement?' },
          { type: 'para', text: 'A recorded statement is a question and answer session between you and a representative of the insurance company. It is typically conducted over the phone and recorded for the claim file.' },
          { type: 'para', text: 'The adjuster may ask questions about when the damage occurred, what you observed, the condition of the property before the loss, prior repairs, maintenance history, and when the claim was reported.' },
          { type: 'para', text: 'These statements are often framed as routine. However, they are part of the insurer’s investigation and may later be referenced if a dispute arises.' },
          { type: 'heading', text: 'Am I Required to Give One?' },
          { type: 'para', text: 'Most Florida homeowners insurance policies require you to cooperate with the insurer’s investigation. Some policies specifically reference recorded statements. Others do not mention them explicitly but include broader cooperation language.' },
          { type: 'para', text: 'If your policy requires a recorded statement and you refuse without justification, the carrier may argue that you failed to comply with post-loss obligations. That can complicate the claim.' },
          { type: 'para', text: 'At the same time, cooperation does not mean you must answer unclear or overly broad questions without preparation.' },
          { type: 'para', text: 'If you are unsure whether your policy requires a recorded statement, you may consider reviewing your policy or consulting with an attorney before proceeding.' },
          { type: 'heading', text: 'Why Insurance Companies Request Recorded Statements' },
          { type: 'para', text: 'Recorded statements serve several purposes from the insurer’s perspective.' },
          { type: 'para', text: 'They create a documented timeline of events. They preserve your description of the damage. They may also be used to evaluate coverage issues such as late notice, pre-existing damage, or causation.' },
          { type: 'para', text: 'In some cases, inconsistencies between a recorded statement and other documentation can become part of a denial or underpayment decision.' },
          { type: 'para', text: 'That does not mean you should automatically refuse. It does mean you should take the request seriously.' },
          { type: 'heading', text: 'What Should You Consider Before Giving a Recorded Statement?' },
          { type: 'para', text: 'Preparation matters. You should review the timeline of events before the call. Know the date of loss you reported. Be familiar with any prior repairs or maintenance. Avoid guessing if you are unsure about a detail.' },
          { type: 'para', text: 'It is acceptable to answer truthfully and concisely. If you do not know the answer to a question, it is better to say so than to speculate.' },
          { type: 'para', text: 'If the claim involves complex issues, such as prior roof damage or long-term water intrusion, you may wish to seek guidance before providing a statement.' },
          { type: 'heading', text: 'Can You Have an Attorney Present?' },
          { type: 'para', text: 'Yes. If you are concerned about how a recorded statement may affect your Florida property insurance claim, you may consult with an attorney beforehand. In some situations, counsel may participate in or prepare you for the statement.' },
          { type: 'para', text: 'Having a professional review the claim before the statement can help ensure you understand the policy obligations and potential areas of concern.' },
          { type: 'heading', text: 'What If You Already Gave a Recorded Statement?' },
          { type: 'para', text: 'If you have already provided a recorded statement and are now facing delays, underpayment, or denial, it may be helpful to review how the statement is being used in the claim file.' },
          { type: 'para', text: 'In some disputes, insurers reference portions of recorded statements to support coverage defenses. A careful review of the full claim documentation can clarify whether the carrier’s interpretation is reasonable.' },
          { type: 'heading', text: 'Making an Informed Decision' },
          { type: 'para', text: 'Whether you must give a recorded statement depends on your policy language and the specific circumstances of your claim. The key is understanding your obligations and approaching the request thoughtfully rather than casually.' },
          { type: 'para', text: 'If you have been asked to give a recorded statement for your Florida insurance claim and are unsure how to proceed, you may request a consultation to review your policy and the request. An individualized evaluation can help you determine the most appropriate next step.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'florida-insurance-claim-underpaid',
        title: 'What Happens If My Insurance Company Underpays My Claim?',
        metaTitle: 'What Happens If My Insurance Company Underpays My Claim?',
        metaDescription: 'Think your Florida property insurance claim was underpaid? Learn why underpayments happen, how to respond, and what options homeowners have when claim payments are too low.',
        category: 'Insurance Dispute Advice', tags: ['underpaid claims', 'claim process'],
        author: 'James Wilson', date: '2026-03-27',
        links: ['/underpaid-insurance-claims'],
        body: [
          { type: 'para', text: 'You filed your claim. The adjuster inspected the property. A payment arrived. But the amount is far lower than your contractor’s estimate. Now you are asking the obvious question: what happens if my insurance company underpays my claim?' },
          { type: 'para', text: 'Underpayment is one of the most common disputes in Florida property insurance claims. It often does not come in the form of an outright denial. Instead, the insurer acknowledges coverage but limits the scope of repairs or undervalues the damage.' },
          { type: 'para', text: 'Understanding why underpayments happen and how to respond can help you protect your rights.' },
          { type: 'heading', text: 'Why Insurance Companies Underpay Claims' },
          { type: 'para', text: 'Underpayment typically happens in one of several ways.' },
          { type: 'para', text: 'The insurance company may omit damaged items from its estimate. It may limit repairs to certain areas while excluding others. It may apply depreciation aggressively. It may use pricing that does not reflect actual local labor and material costs.' },
          { type: 'para', text: 'In roof claims, underpayment frequently stems from disputes over partial repair versus full replacement. In water damage claims, it may involve disagreements over the scope of tear-out or necessary remediation.' },
          { type: 'para', text: 'In many cases, the carrier’s estimate is simply narrower than the contractor’s assessment. That difference becomes the dispute.' },
          { type: 'heading', text: 'The Difference Between Denial and Underpayment' },
          { type: 'para', text: 'A denial means the insurance company refuses to pay at all. An underpayment means the insurer has paid something but not what you believe is owed under the policy.' },
          { type: 'para', text: 'Underpayments can be harder to recognize because receiving a check may feel like progress. However, if the payment does not allow you to complete necessary repairs, the claim may not be fully resolved.' },
          { type: 'para', text: 'You are not required to accept a payment as full and final if it does not reflect the covered damage.' },
          { type: 'heading', text: 'Steps to Take If You Believe Your Claim Was Underpaid' },
          { type: 'para', text: 'If you believe your Florida insurance claim was underpaid, start by carefully reviewing the insurer’s estimate. Look at the line items. Compare them to your contractor’s proposal. Identify what is missing or undervalued.' },
          { type: 'para', text: 'Request a detailed explanation from the carrier if necessary. Ask why certain items were excluded or priced the way they were.' },
          { type: 'para', text: 'Make sure your contractor’s estimate is thorough and well documented. Photographs, measurements, and clear descriptions of the work can strengthen your position.' },
          { type: 'para', text: 'In some cases, submitting a supplemental estimate with supporting documentation may prompt the insurer to reevaluate the scope.' },
          { type: 'heading', text: 'What If the Insurance Company Refuses to Increase Payment?' },
          { type: 'para', text: 'If discussions and supplemental submissions do not resolve the dispute, additional options may be available depending on your policy.' },
          { type: 'para', text: 'Some claims move into appraisal when the dispute involves the amount of loss. Others require a closer review of whether the insurer properly applied policy terms.' },
          { type: 'para', text: 'If you are unsure whether the payment reflects what your policy requires, you may consider having the claim reviewed by a Florida property insurance attorney. A professional review can help determine whether the underpayment appears consistent with the policy or whether further action may be warranted.' },
          { type: 'heading', text: 'Timing Matters' },
          { type: 'para', text: 'Florida property insurance claims are subject to deadlines. If you believe your claim was underpaid, it is important not to let the matter sit unresolved for too long.' },
          { type: 'para', text: 'Keeping a clear timeline of payments, estimates, and communications can be important if the dispute escalates.' },
          { type: 'heading', text: 'You Are Not Required to Accept an Inadequate Payment' },
          { type: 'para', text: 'Insurance companies sometimes present payments as final resolutions. However, if additional covered damage exists or the scope is incomplete, you may have the right to challenge the amount.' },
          { type: 'para', text: 'If your Florida insurance claim was underpaid and you are unsure how to proceed, you may request a consultation to review your policy and claim documentation. An individualized evaluation can provide clarity about whether the payment appears appropriate and what options may be available.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'how-much-should-my-florida-roof-claim-really-pay',
        title: 'How Much Should My Florida Roof Claim Really Pay?',
        metaTitle: 'How Much Should My Florida Roof Claim Really Pay?',
        metaDescription: 'How much should your Florida roof claim really pay? Learn how insurers calculate roof settlements, what affects payout amounts, and how to evaluate if your claim was underpaid.',
        category: 'Property Damage Law', tags: ['roof damage', 'underpaid claims', 'claim payments'],
        author: 'J. Alex Couture', date: '2026-03-20',
        links: ['/post/how-florida-insurance-companies-calculate-roof-depreciation', '/post/florida-roof-matching-law-shingles'],
        body: [
          { type: 'para', text: 'After storm damage, one of the first questions homeowners ask is simple and reasonable: how much should my Florida roof claim really pay?' },
          { type: 'para', text: 'If you have received an estimate from your insurance company that feels low compared to your contractor’s proposal, you are not alone. Disputes over the value of roof claims are among the most common issues in Florida property insurance cases.' },
          { type: 'para', text: 'Understanding how insurers calculate roof claim payments can help you determine whether your payout appears accurate or potentially underpaid.' },
          { type: 'heading', text: 'How Insurance Companies Calculate Roof Claim Payments' },
          { type: 'para', text: 'Insurance companies generally begin with an inspection. The adjuster identifies what they believe to be storm-related damage and prepares a scope of repairs. That scope is then priced using estimating software.' },
          { type: 'para', text: 'From there, several adjustments are often made.' },
          { type: 'para', text: 'First, depreciation may be applied. If your policy provides replacement cost coverage, the insurer may initially issue payment based on actual cash value, which subtracts depreciation. Recoverable depreciation may be paid later after repairs are completed, depending on your policy.' },
          { type: 'para', text: 'Second, your deductible is subtracted from the total covered amount. In hurricane claims, this deductible can be significant.' },
          { type: 'para', text: 'Third, the insurer may limit payment to only certain slopes or areas of the roof if it determines that damage is isolated.' },
          { type: 'para', text: 'The result is the initial claim payment. However, that number is not automatically the correct or final amount.' },
          { type: 'heading', text: 'Why Contractor Estimates Are Often Higher' },
          { type: 'para', text: 'It is common for a contractor’s estimate to exceed the insurance company’s scope. There are several reasons for this.' },
          { type: 'para', text: 'The contractor may believe more slopes are damaged than the insurer recognized. There may be matching issues that require broader replacement. Building code requirements, underlayment replacement, flashing work, or permit costs may not be fully accounted for in the insurance estimate.' },
          { type: 'para', text: 'In some cases, the carrier’s pricing assumptions differ from actual local labor and material costs.' },
          { type: 'para', text: 'The gap between these two numbers is often where disputes arise.' },
          { type: 'heading', text: 'Full Replacement Versus Partial Repair' },
          { type: 'para', text: 'One of the largest drivers of payout value is whether the roof requires full replacement or partial repair.' },
          { type: 'para', text: 'If only one slope is replaced, the claim value will be substantially lower than if the entire roof system must be replaced. Matching concerns, discontinued shingles, and functional integration of new materials can all affect that determination.' },
          { type: 'para', text: 'If your contractor has advised that partial repair is not appropriate, that opinion should be clearly documented and supported with photographs and, if possible, manufacturer information.' },
          { type: 'heading', text: 'Building Code and Ordinance Coverage' },
          { type: 'para', text: 'Another factor that can affect how much your Florida roof claim should pay is ordinance and law coverage. If local building codes require upgrades when a certain percentage of the roof is damaged, additional work may be necessary.' },
          { type: 'para', text: 'Whether that additional work is covered depends on your policy and endorsements. Reviewing your policy language carefully is critical when evaluating whether the payout is complete.' },
          { type: 'heading', text: 'How to Tell If Your Roof Claim Was Underpaid' },
          { type: 'para', text: 'There is no universal number that every Florida roof claim should reach. Each claim depends on the size of the roof, the type of materials, the extent of damage, policy terms, and local code requirements.' },
          { type: 'para', text: 'However, certain red flags may suggest underpayment. These include significant discrepancies between the contractor estimate and the insurance scope, missing line items for common components such as underlayment or flashing, unusually high depreciation, or a refusal to address matching concerns.' },
          { type: 'para', text: 'If you are unsure whether your Florida roof claim payout is accurate, you may consider requesting a detailed explanation from the insurer. Ask for the full scope and pricing breakdown. Compare it carefully to your contractor’s proposal.' },
          { type: 'heading', text: 'When to Seek a Professional Review' },
          { type: 'para', text: 'If you believe your roof claim was underpaid and discussions with the insurance company have not resolved the issue, you may benefit from having the claim reviewed by a Florida property insurance attorney.' },
          { type: 'para', text: 'A legal review can involve examining the policy, the insurance estimate, the contractor’s estimate, photographs, and any engineering reports. This evaluation can help determine whether the payout appears consistent with the policy obligations.' },
          { type: 'para', text: 'If you would like your roof claim reviewed, you may request a consultation to discuss your specific situation. An individualized assessment can provide clarity about whether the claim value appears appropriate or whether further action may be warranted.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'wear-and-tear-roof-claim-denial-florida',
        title: 'What Is “Wear and Tear” and Why Is It Used to Deny Florida Roof Claims?',
        metaTitle: 'What Is “Wear and Tear” and Why Is It Used to Deny Florida Roof Claims?',
        metaDescription: 'Was your Florida roof claim denied for “wear and tear”? Learn what the exclusion means, how insurers use it to deny coverage, and when a storm damage dispute may be worth reviewing.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'roof damage', 'exclusions'],
        author: 'J. Alex Couture', date: '2026-03-13',
        links: ['/post/pre-existing-damage-denial-florida', '/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'If your Florida insurance company denied your roof claim and cited “wear and tear,” you are not alone. This is one of the most common reasons insurers give when refusing to pay for roof damage.' },
          { type: 'para', text: 'But what does “wear and tear” actually mean? And why is it so frequently used in Florida roof claim denials?' },
          { type: 'para', text: 'Understanding this exclusion and how it is applied can help you determine whether the denial reflects legitimate policy language or a disputed interpretation of the damage.' },
          { type: 'heading', text: 'What Does “Wear and Tear” Mean in an Insurance Policy?' },
          { type: 'para', text: 'Most Florida homeowners insurance policies exclude coverage for damage caused by wear and tear, deterioration, or aging. In simple terms, insurance is designed to cover sudden and accidental loss, not gradual decline over time.' },
          { type: 'para', text: 'A roof that slowly deteriorates due to age, sun exposure, heat, or lack of maintenance typically falls within this exclusion. If shingles are brittle from years of UV exposure or granules have gradually worn away, the insurer may argue the damage is not the result of a covered storm event.' },
          { type: 'para', text: 'The issue becomes more complicated when a storm impacts an older roof.' },
          { type: 'heading', text: 'Why Insurers Use Wear and Tear to Deny Roof Claims' },
          { type: 'para', text: 'In many Florida disputes, the carrier acknowledges that a storm occurred but argues that the roof failed because it was already compromised.' },
          { type: 'para', text: 'The denial often follows this pattern: the adjuster or engineer observes cracked, brittle, or lifted shingles. The report then concludes that these conditions are consistent with age-related deterioration rather than wind damage.' },
          { type: 'para', text: 'From the insurer’s perspective, if the roof was already near the end of its life, the storm did not cause the damage, it merely revealed it.' },
          { type: 'para', text: 'However, that conclusion is not always uncontested.' },
          { type: 'heading', text: 'The Difference Between Aging and Storm Damage' },
          { type: 'para', text: 'A key issue in many Florida roof claim disputes is causation. Did wind create creases, lifts, or seal failures? Or were those conditions already present due to normal aging?' },
          { type: 'para', text: 'Storm damage and wear-related damage can sometimes look similar. That is why documentation and inspection quality matter.' },
          { type: 'para', text: 'For example, wind-created creases often follow specific patterns tied to direction and uplift forces. Random cracking or uniform deterioration across all slopes may point toward aging. Determining the difference can require careful inspection and, in some cases, competing expert opinions.' },
          { type: 'para', text: 'If your denial letter relies heavily on a brief engineering report or generalized conclusions about age, it may be worth examining whether the investigation fully accounted for storm conditions and observable damage.' },
          { type: 'heading', text: 'Older Roofs Are Not Automatically Excluded' },
          { type: 'para', text: 'Many homeowners assume that once a roof reaches a certain age, it is no longer insurable for storm damage. That is not necessarily true.' },
          { type: 'para', text: 'If your policy was active and did not contain a specific age-based limitation eliminating coverage, the roof may still be covered for sudden wind damage, even if it is older.' },
          { type: 'para', text: 'The existence of wear and tear does not automatically prevent coverage if a covered peril caused additional direct physical damage. The dispute often centers on whether the storm caused new damage or whether the condition existed beforehand.' },
          { type: 'heading', text: 'What You Can Do If Your Claim Was Denied for Wear and Tear' },
          { type: 'para', text: 'If your Florida roof claim was denied based on wear and tear, start by carefully reviewing the denial letter. Identify the exact policy language cited and the reasoning provided.' },
          { type: 'para', text: 'Next, consider whether you have independent documentation. A detailed roofing inspection, photographs, weather data, and manufacturer information can sometimes help clarify whether the damage is consistent with wind forces rather than gradual deterioration.' },
          { type: 'para', text: 'If you believe the denial does not accurately reflect the condition of your roof or the impact of the storm, you may consider having the claim reviewed by a Florida property insurance attorney. A legal review can help determine whether the policy was properly interpreted and whether the investigation appears thorough.' },
          { type: 'para', text: 'In some cases, additional documentation or formal dispute resolution can lead to reconsideration of the claim.' },
          { type: 'heading', text: 'A Wear and Tear Denial Is Not Always the Final Word' },
          { type: 'para', text: '“Wear and tear” is one of the most frequently cited exclusions in Florida roof claims. It is also one of the most frequently disputed.' },
          { type: 'para', text: 'Just because an insurance company labels damage as deterioration does not automatically make it so. The question is whether the roof damage was caused by a covered event or by gradual aging.' },
          { type: 'para', text: 'If your Florida insurance company denied your roof claim for wear and tear and you are unsure whether that determination is correct, you may request a consultation to review your policy and claim file. An individualized evaluation can provide clarity about your available options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim depends on its specific facts and policy language.'
      },
      {
        slug: 'can-my-insurance-company-replace-only-half-my-roof-in-florida',
        title: 'Can My Insurance Company Replace Only Half My Roof in Florida?',
        metaTitle: 'Can My Insurance Company Replace Only Half My Roof in Florida?',
        metaDescription: 'Can your insurance company replace only one slope of your roof in Florida? Learn how roof matching works, when full replacement may be required, and what to do if your claim is underpaid.',
        category: 'Property Damage Law', tags: ['roof damage', 'matching', 'underpaid claims'],
        author: 'Shari Freeman', date: '2026-03-06',
        links: ['/post/florida-roof-matching-law-shingles'],
        body: [
          { type: 'para', text: 'One of the most common disputes in Florida property insurance claims arises when a carrier agrees to pay for part of a roof, but refuses to replace the entire thing.' },
          { type: 'para', text: 'Homeowners often ask: can my insurance company replace only half my roof in Florida?' },
          { type: 'para', text: 'The answer depends on several factors, including your policy language, the type of shingles involved, and whether matching is reasonably possible. In many cases, the dispute is not just about square footage. It is about uniformity, appearance, and functionality.' },
          { type: 'para', text: 'Understanding how roof matching works in Florida can help you determine whether a partial replacement is appropriate or whether the carrier’s scope may be insufficient.' },
          { type: 'heading', text: 'Why Insurance Companies Propose Partial Roof Replacement' },
          { type: 'para', text: 'When storm damage affects only one slope or section of a roof, insurance companies often limit payment to that specific area. From the carrier’s perspective, if wind damaged one portion, only that portion requires repair.' },
          { type: 'para', text: 'This approach is based on the idea of “direct physical loss” to a particular area.' },
          { type: 'para', text: 'However, roofs are integrated systems. Shingles must interlock properly. Color and texture variations can be significant. Manufacturers frequently discontinue specific product lines. Even if a similar shingle exists, it may not reasonably match what is already installed.' },
          { type: 'para', text: 'When the proposed repair results in obvious mismatch or functional concerns, a partial replacement can become problematic.' },
          { type: 'heading', text: 'What Is Roof Matching in Florida?' },
          { type: 'para', text: 'Florida regulations require insurers to make reasonable repairs or replacements that result in a reasonably uniform appearance. In practical terms, this means that if replacing one portion of the roof would create a significant mismatch, additional replacement may be necessary to achieve uniformity.' },
          { type: 'para', text: 'Matching issues commonly arise when the original shingles are discontinued, the color has faded over time, the style or profile is no longer available, or repairs would leave visible patchwork across slopes.' },
          { type: 'para', text: 'The key question becomes whether a reasonable match is available. If it is not, limiting repairs to one slope may not fully restore the property.' },
          { type: 'heading', text: 'Is the Insurance Company Required to Replace the Entire Roof?' },
          { type: 'para', text: 'Not automatically. Every claim is fact-specific.' },
          { type: 'para', text: 'If matching shingles are readily available and the repair will result in a reasonably uniform appearance, a partial replacement may be appropriate. But if no reasonable match exists, the scope may need to expand.' },
          { type: 'para', text: 'The dispute often turns on evidence. Contractors, roofing experts, and manufacturer letters can be important in demonstrating whether matching materials are truly available.' },
          { type: 'para', text: 'Photographs comparing existing shingles to proposed replacements can also be critical.' },
          { type: 'para', text: 'If your contractor has indicated that matching is not possible, that opinion should be documented clearly and supported with detail.' },
          { type: 'heading', text: 'Functional Concerns Beyond Appearance' },
          { type: 'para', text: 'Roof matching disputes are not always purely cosmetic. In some situations, tying new shingles into older materials can create functional issues, including compromised sealing or reduced lifespan.' },
          { type: 'para', text: 'If a repair approach affects the integrity of the roofing system, that may strengthen the argument for broader replacement.' },
          { type: 'para', text: 'Insurance companies may focus narrowly on visible storm damage, while homeowners and contractors focus on the roof as a complete system. Bridging that gap often requires technical explanation.' },
          { type: 'heading', text: 'What Should You Do If the Carrier Refuses Full Replacement?' },
          { type: 'para', text: 'If your Florida insurance company is offering to replace only half your roof and your contractor believes that approach is inadequate, start by requesting a detailed explanation in writing.' },
          { type: 'para', text: 'Ask whether the insurer has confirmed the availability of matching shingles. Request documentation supporting its position. Ensure that your contractor’s opinion is provided in writing with photographs and, if possible, manufacturer correspondence.' },
          { type: 'para', text: 'If the dispute remains unresolved, you may consider having the matter reviewed by a Florida property insurance attorney. A legal review can help determine whether the proposed scope complies with policy requirements and applicable matching standards.' },
          { type: 'para', text: 'In some cases, additional documentation resolves the issue. In others, formal dispute resolution may be necessary.' },
          { type: 'heading', text: 'Partial Replacement Is Not Always the Final Answer' },
          { type: 'para', text: 'Insurance companies often begin with the narrowest possible repair scope. That does not mean it is the only reasonable outcome.' },
          { type: 'para', text: 'If replacing only one slope of your roof would leave your home visibly mismatched or functionally compromised, the scope of repair may need to be reconsidered.' },
          { type: 'para', text: 'If you are facing a roof matching dispute in Florida and are unsure whether the carrier’s position is appropriate, you may request a consultation to review your claim and policy. An individualized evaluation can clarify whether partial replacement is sufficient or whether additional action may be warranted.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'insurance-company-denied-my-roof-claim-in-florida-now-what',
        title: 'Insurance Company Denied My Roof Claim in Florida: Now What?',
        metaTitle: 'Insurance Company Denied My Roof Claim in Florida: Now What?',
        metaDescription: 'Has your Florida roof insurance claim been denied? Learn what your options are and what you can do to appeal the decision.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'roof damage'],
        author: 'Shari Freeman', date: '2026-03-03',
        links: ['/denied-homeowners-insurance-claims', '/post/wear-and-tear-roof-claim-denial-florida'],
        body: [
          { type: 'para', text: 'Few things are more frustrating than opening a denial letter after a storm and learning that your Florida insurance company has denied your roof claim. You paid your premiums. You reported the damage. You cooperated with the inspection. Now the carrier says the loss is not covered.' },
          { type: 'para', text: 'If this just happened to you, take a breath. A denial is serious, but it is not necessarily the end of the claim. Many denied roof claims in Florida are later reversed, supplemented, or resolved after closer review.' },
          { type: 'para', text: 'If you are unsure whether your denial was handled properly, you may benefit from having the denial letter and policy reviewed by a Florida property insurance attorney. An early review can help clarify whether the carrier’s position is supported by the policy language.' },
          { type: 'heading', text: 'Why Roof Claims Get Denied in Florida' },
          { type: 'para', text: 'Roof claims are among the most disputed property insurance claims in Florida. Insurance companies frequently rely on a handful of recurring explanations when denying coverage.' },
          { type: 'para', text: 'One of the most common is “wear and tear.” The insurer may argue that your roof is old, deteriorated, or poorly maintained. Instead of attributing the damage to wind or a storm event, the carrier characterizes it as long-term aging.' },
          { type: 'para', text: 'Another frequent position is that the damage is “pre-existing,” meaning it existed before the reported date of loss. In some cases, this conclusion is based on limited photographs or a brief inspection.' },
          { type: 'para', text: 'Carriers may also cite improper installation or workmanship issues, attempting to shift responsibility away from storm damage. Late notice is another common defense, with the insurer claiming the loss was not reported promptly.' },
          { type: 'para', text: 'These conclusions are often supported by an engineer’s report or adjuster’s opinion. That does not automatically make them correct. It simply means the insurance company has taken a position.' },
          { type: 'para', text: 'If your denial relies on one of these common defenses, it may be worth asking whether the investigation was thorough and whether the policy was interpreted correctly.' },
          { type: 'heading', text: 'What a Denial Letter Actually Means' },
          { type: 'para', text: 'A denial letter is the insurance company’s formal explanation of why it believes coverage does not apply. It typically references specific policy provisions and exclusions. It may quote language related to deterioration, faulty workmanship, or other limitations.' },
          { type: 'para', text: 'However, a denial letter is not a court ruling. It is not a binding determination that your roof was not damaged by wind. It reflects the carrier’s interpretation of the policy and the facts as it sees them.' },
          { type: 'para', text: 'In many Florida roof disputes, the core issue is causation. Was the damage caused by a covered storm event, or by long-term wear and tear? That is often a factual dispute that can be examined more closely.' },
          { type: 'para', text: 'If you have questions about the reasoning in your denial letter, you can request a copy of your full policy and claim file and consider having them reviewed before deciding how to proceed.' },
          { type: 'heading', text: 'Steps to Consider After a Roof Claim Denial' },
          { type: 'para', text: 'Start by reading the denial letter carefully. Look at the exact reasons given and the policy language cited. Determine whether the letter addresses all the areas of damage or focuses narrowly on a single issue.' },
          { type: 'para', text: 'Next, evaluate your documentation. Do you have a detailed roofing estimate? Clear photographs of lifted, creased, or missing shingles? Weather data confirming significant wind in your area on the reported date of loss?' },
          { type: 'para', text: 'Independent documentation can be critical in disputed Florida roof claims. A thorough contractor inspection or second opinion may reveal storm-related damage that was overlooked or minimized.' },
          { type: 'para', text: 'If the dispute involves partial repair versus full replacement, matching may also become important. When shingles cannot be reasonably matched, the scope of repairs may expand beyond what the carrier initially proposed.' },
          { type: 'para', text: 'If you are unsure whether additional documentation could strengthen your position, speaking with an attorney experienced in Florida property insurance claims may help you evaluate your options.' },
          { type: 'heading', text: 'What Are Your Options?' },
          { type: 'para', text: 'Your next step depends on the nature of the denial.' },
          { type: 'para', text: 'If the insurer acknowledges some coverage but disputes the amount of loss, appraisal may be a consideration. If the claim is denied entirely, the dispute may involve coverage interpretation and causation.' },
          { type: 'para', text: 'Sometimes submitting additional documentation leads the carrier to reconsider. In other cases, the denial remains in place unless the dispute is escalated.' },
          { type: 'para', text: 'An attorney can review your policy, the denial letter, and the available evidence to determine whether the insurance company’s position appears consistent with the contract. That evaluation can help you make an informed decision about whether to pursue further action.' },
          { type: 'heading', text: 'When It May Be Time to Seek Legal Guidance' },
          { type: 'para', text: 'Not every denied claim requires litigation. However, certain circumstances suggest that a professional review may be appropriate.' },
          { type: 'para', text: 'If the denial relies heavily on “wear and tear” despite clear storm conditions, that may warrant closer examination. If the insurer retained an engineer whose report conflicts with visible damage, the basis for that opinion may need to be evaluated. If your contractor’s estimate is substantially higher than the insurance scope and key items appear omitted, that gap should be understood.' },
          { type: 'para', text: 'Florida property insurance claims are also subject to deadlines. Waiting too long after a denial can limit available remedies. If your roof claim was recently denied, it may be prudent to explore your options sooner rather than later.' },
          { type: 'heading', text: 'A Denial Is Not Always the Final Answer' },
          { type: 'para', text: 'It is common for homeowners to assume that once a roof claim is denied, the matter is closed. In reality, many denied Florida roof claims are resolved after further investigation, negotiation, appraisal, or formal legal action.' },
          { type: 'para', text: 'The key is understanding whether the denial reflects a reasonable interpretation of your policy or whether it can be challenged.' },
          { type: 'para', text: 'If your Florida insurance company denied your roof claim and you are unsure what to do next, you may request a consultation to review your situation. An experienced Florida property insurance attorney can evaluate your policy, the denial letter, and the available evidence and explain your options.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every claim is different, and outcomes depend on the specific policy language and facts involved.'
      },
      {
        slug: 'why-is-my-florida-insurance-claim-taking-too-long',
        title: 'Why Is My Florida Insurance Claim Taking So Long?',
        metaTitle: 'Why Is My Florida Insurance Claim Taking So Long?',
        metaDescription: 'Is your Florida insurance claim delayed? Learn why property claims take so long, what timelines apply, and what you can do if your insurer is stalling payment or a decision.',
        category: 'Insurance Dispute Advice', tags: ['delayed claims', 'claim process'],
        author: 'James Wilson', date: '2026-03-01',
        links: ['/delayed-insurance-claims-florida'],
        body: [
          { type: 'para', text: 'If you’ve filed a property insurance claim and weeks or even months have passed without resolution, you’re likely asking the same question many Florida homeowners ask: why is my insurance claim taking so long?' },
          { type: 'para', text: 'Delays are one of the most common frustrations in Florida property insurance claims, especially after hurricanes and major storm events. While some delay can be expected, prolonged or unexplained delay may signal deeper issues in how the claim is being handled.' },
          { type: 'para', text: 'Understanding the difference between a normal delay and a problematic one can help you decide what to do next.' },
          { type: 'heading', text: 'Common Reasons Florida Insurance Claims Are Delayed' },
          { type: 'para', text: 'There are legitimate reasons a property insurance claim might take time. After a major storm, carriers experience a surge in claims. Adjusters are reassigned throughout the state. Inspections may be scheduled weeks out. Engineering evaluations may be required before a coverage decision is made.' },
          { type: 'para', text: 'In those circumstances, some delay is not unusual.' },
          { type: 'para', text: 'Insurance companies may also be waiting on documentation. This could include repair estimates, photographs, proof of loss forms, receipts, or other requested materials. If you receive a request for information, responding promptly and keeping proof of submission can help reduce unnecessary delay.' },
          { type: 'para', text: 'Sometimes the carrier is conducting what it describes as an “ongoing investigation.” This might involve reinspections, hiring an engineer, reviewing weather data, or examining maintenance records. While insurers are permitted to investigate claims, investigations should not remain open indefinitely without meaningful updates.' },
          { type: 'para', text: 'Internal claim handling issues can also slow things down. Adjusters may change. Files can be reassigned. Supervisory review may be required before issuing payment or denial. What feels like silence to a homeowner may reflect internal movement within the insurance company.' },
          { type: 'para', text: 'That said, extended silence without explanation is not something you should ignore.' },
          { type: 'heading', text: 'How Long Should a Florida Insurance Claim Take?' },
          { type: 'para', text: 'Florida insurers are required to acknowledge communications and to pay or deny claims within certain timeframes, subject to reasonable investigation. While every claim is fact-specific, months of inactivity without a clear explanation can be concerning.' },
          { type: 'para', text: 'If your claim has been pending for an extended period, consider sending a written request for a status update. Ask whether additional documentation is needed and when you can reasonably expect a coverage decision.' },
          { type: 'para', text: 'Keeping a detailed record of all communications is important. Save emails. Keep notes of phone calls. Document when inspections occurred. A clear timeline can become critical if a delay later becomes part of a dispute.' },
          { type: 'heading', text: 'Signs the Delay May Be a Problem' },
          { type: 'para', text: 'Not every slow claim is mishandled. However, certain patterns may suggest the delay is more than routine.' },
          { type: 'para', text: 'Repeated reinspections without a clear explanation may indicate the carrier is attempting to support a predetermined outcome. Requests for the same documentation multiple times may reflect internal disorganization. Long gaps in communication despite follow-ups can suggest the claim is not being actively advanced.' },
          { type: 'para', text: 'If the insurance company has all requested documentation and still has not issued a coverage determination, that may warrant closer evaluation.' },
          { type: 'heading', text: 'What You Can Do If Your Claim Is Stalled' },
          { type: 'para', text: 'If your Florida property insurance claim is taking longer than expected, start by requesting a written status update. Confirm that you have complied with all post-loss obligations under your policy, including making the property available for inspection and submitting requested forms.' },
          { type: 'para', text: 'If you have done everything required and the claim still appears stalled, you may consider having the matter reviewed by a Florida property insurance attorney. A legal review can help determine whether the delay appears consistent with a reasonable investigation or whether it may constitute improper claim handling.' },
          { type: 'para', text: 'In some situations, formal communication from counsel can prompt movement on a delayed claim file.' },
          { type: 'heading', text: 'Hurricane Claims Often Move Slower, But Not Indefinitely' },
          { type: 'para', text: 'After major hurricanes or statewide storm events, delays frequently increase. Carriers may retain out-of-state adjusters unfamiliar with Florida-specific issues such as roof matching or ordinance and law coverage. Engineering firms may face significant backlogs.' },
          { type: 'para', text: 'While these factors can affect timing, they do not eliminate the insurer’s obligation to handle claims fairly and within reasonable timeframes.' },
          { type: 'para', text: 'If your hurricane claim has been pending without resolution, reviewing the timeline and documentation may help clarify whether the delay is justified.' },
          { type: 'heading', text: 'When to Consider Seeking Guidance' },
          { type: 'para', text: 'If your Florida insurance claim has been pending for an extended period without payment or denial, or if you are receiving inconsistent information from the carrier, it may be appropriate to seek guidance.' },
          { type: 'para', text: 'An experienced Florida property insurance attorney can review your policy, claim timeline, and communications to assess whether the delay appears reasonable. That evaluation can help you decide whether to continue working directly with the insurer or consider escalating the matter.' },
          { type: 'para', text: 'If you would like your delayed claim reviewed, you may request a consultation to discuss your specific situation. Every claim is different, and an individualized review can provide clarity about your available options.' }
        ],
        disclaimer: 'This article is for informational purposes only and does not constitute legal advice. Outcomes depend on the specific policy language and facts involved in each claim.'
      },
      {
        slug: 'flood-insurance-claims-in-florida-what-every-homeowner-needs-to-know',
        title: 'Flood Insurance Claims in Florida: What Every Homeowner Needs to Know',
        metaTitle: 'Flood Insurance Claims in Florida: What Every Homeowner Needs to Know',
        metaDescription: 'Learn how to file, document, and dispute a flood insurance claim in Florida. Protect your rights with help from the attorneys at propertyinsurance.law.',
        category: 'Property Damage Law', tags: ['flood', 'NFIP', 'coverage basics'],
        author: 'Shari Freeman', date: '2025-10-23',
        links: ['/water-damage-insurance-claims'],
        body: [
          { type: 'para', text: 'With hurricane season threatening homes across Florida every year, flood damage is one of the most devastating and expensive losses a homeowner can face. At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we represent Florida policyholders when their flood insurance claims are denied, delayed, or underpaid. This guide breaks down the key facts every Florida homeowner needs to know about flood insurance, claims, and policyholder rights.' },
          { type: 'heading', text: 'Who Provides Flood Insurance in Florida?' },
          { type: 'para', text: 'Most flood insurance policies in Florida are underwritten by the National Flood Insurance Program (NFIP), which is managed by FEMA. These policies may be issued directly by NFIP (NFIP Direct) or through the Write Your Own (WYO) program, where private insurers issue and service the policy but FEMA still pays the claims.' },
          { type: 'para', text: 'In addition to NFIP policies, many private flood insurance policies are now available through licensed Florida insurers. These may include standard, preferred, flexible, or supplemental flood coverage options.' },
          { type: 'heading', text: 'What Counts as a Flood Under My Policy?' },
          { type: 'para', text: 'Both NFIP and private market policies define a flood as a temporary condition of partial or complete inundation of at least two or more acres of normally dry land, or two or more properties, including the insured\'s.' },
          { type: 'para', text: 'Flooding must come from overflow of inland or tidal waters, rapid accumulation or runoff of surface waters, mudslides caused by flooding, or collapse of land near a body of water due to erosion.' },
          { type: 'para', text: 'Important: water damage from just one property or non-flood-related causes may not qualify under NFIP terms.' },
          { type: 'heading', text: 'Types of Flood Insurance Coverage' },
          { type: 'para', text: 'A standard NFIP policy offers building and contents coverage, which must be purchased separately, and is subject to FEMA rules and claim procedures.' },
          { type: 'para', text: 'Private market flood insurance may match or exceed NFIP coverage, and often includes additional benefits like additional living expenses, replacement cost for contents, coverage for water intrusion not strictly defined as flood, higher coverage limits, and supplemental protection for jewelry, art, or deductibles.' },
          { type: 'para', text: 'To find your best option, consult a licensed Florida agent.' },
          { type: 'heading', text: 'When Does Flood Coverage Begin?' },
          { type: 'para', text: 'There is usually a 30-day waiting period before flood insurance takes effect, unless the policy is purchased in connection with a loan or refinance, or the policy is transferred to a new property owner.' },
          { type: 'para', text: 'This is why you should never wait until a storm is approaching to purchase coverage.' },
          { type: 'heading', text: 'How to File a Flood Insurance Claim in Florida' },
          { type: 'para', text: 'Report the loss immediately, and document everything. Take photos of all damage, keep samples of damaged materials such as carpet or drywall, write an inventory of destroyed contents, and save receipts and contractor estimates.' },
          { type: 'para', text: 'An adjuster should contact you within 48 hours. They will inspect the property, take measurements, and provide a Proof of Loss form.' },
          { type: 'para', text: 'Submit your Proof of Loss within 60 days of the flood, and keep copies of everything you submit.' },
          { type: 'heading', text: 'Disputing a Flood Insurance Claim' },
          { type: 'para', text: 'If you disagree with the adjuster’s assessment, ask for a breakdown of how they calculated the damage, provide independent estimates or reports, and submit your disagreement in writing.' },
          { type: 'para', text: 'NFIP claims cannot be mediated through Florida’s Residential Property Mediation Program. However, you may file an appeal directly with FEMA.' },
          { type: 'para', text: 'If FEMA denies the appeal, you still have the right to sue. At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we evaluate and litigate denied flood insurance claims throughout Florida.' },
          { type: 'heading', text: 'Important Tips for Florida Homeowners' },
          { type: 'para', text: 'Do not delay filing, since the 60 day deadline goes by quickly after a major storm. Keep receipts and proof of ownership for major items. Create a digital home inventory before a disaster strikes. Review your flood zone using FEMA’s Flood Map Service Center.' },
          { type: 'para', text: 'If your flood insurance claim was denied, delayed, or underpaid in Florida, you do not have to fight FEMA or your insurance company alone. At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> we represent homeowners across Florida in flood claim disputes. Our attorneys are ready to step in and demand the full compensation you’re owed under your policy.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Each claim depends on its specific facts and policy language.'
      },
      {
        slug: 'florida-homeowners-insurance-faqs',
        title: 'Florida Homeowners Insurance FAQs',
        metaTitle: 'Florida Homeowners Insurance FAQs',
        metaDescription: 'Get answers to top Florida homeowners insurance questions: delayed claims, cancellations, refunds, premium hikes. Speak with an attorney at www.propertyinsurance.law today.',
        category: 'Insurance Dispute Advice', tags: ['policyholder rights', 'cancellation', 'claim process'],
        author: 'James Wilson', date: '2025-10-23',
        links: ['/delayed-insurance-claims-florida'],
        body: [
          { type: 'para', text: 'Dealing with a homeowners insurance claim in Florida can be frustrating, especially when the insurance company isn’t being clear or responsive. At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we help Florida homeowners understand their insurance rights and hold insurance companies accountable when they delay, deny, or underpay valid claims.' },
          { type: 'para', text: 'Below are the top five insurance questions we receive from homeowners and how Florida law applies to each one.' },
          { type: 'heading', text: 'Can My Insurance Company Refuse to Backdate a Cancellation After I Sell My Home?' },
          { type: 'para', text: 'Yes. Even after a home is sold, homeowners insurance policies may still provide certain coverages such as personal property protection or liability coverage at temporary residences. Some carriers will agree to backdate cancellation to the date of sale, but others will not, especially if they were not promptly notified.' },
          { type: 'para', text: 'Your policy should outline how cancellation works and when coverage ends. Always notify your insurance company as soon as the property is sold to avoid paying unnecessary premiums.' },
          { type: 'heading', text: 'My Insurance Claim Is Still Unpaid After 30 Days. Can They Do That?' },
          { type: 'para', text: 'Florida law requires insurance companies to pay or deny a property claim within 60 days of receiving notice, unless delays are caused by circumstances beyond their control.' },
          { type: 'para', text: 'If your insurer has gone silent or is stalling, it may be acting in bad faith. Delays beyond 60 days could violate Florida statutes and open the door for legal action.' },
          { type: 'heading', text: 'Why Did My Homeowners Insurance Premium Go Up So Much?' },
          { type: 'para', text: 'Florida insurers must file proposed rate increases with the Office of Insurance Regulation. If they submit actuarial data showing that higher rates are needed to stay solvent and pay claims, the office must approve the increase.' },
          { type: 'para', text: 'This means your premiums may spike even if you’ve never filed a claim, especially after hurricane seasons or widespread damage events.' },
          { type: 'heading', text: 'Can the Insurance Company Non-Renew My Policy Even If I Have an Open Claim?' },
          { type: 'para', text: 'In most situations, yes. Florida law only prevents non-renewal of a property insurance policy under very specific conditions, such as a declared emergency under Florida Statutes, damage from a hurricane or windstorm, or delayed repairs due to circumstances outside your control.' },
          { type: 'para', text: 'Even then, insurers must wait 90 days after repairs are completed to non-renew. However, they may still cancel the policy if you delay repairs unreasonably, commit fraud, or the full policy limits have been paid.' },
          { type: 'heading', text: 'My Policy Was Cancelled, But I Haven’t Received My Refund. How Long Should It Take?' },
          { type: 'para', text: 'When a Florida property insurance policy is cancelled, the unearned premium must be refunded within 15 working days of the cancellation date, unless the policy is under audit or the premium was financed.' },
          { type: 'para', text: 'If the refund goes to a premium finance company, they must return the appropriate portion to you. Failure to issue timely refunds may violate Florida law and entitle you to further compensation.' },
          { type: 'para', text: 'If you’re dealing with a delayed claim, denied payout, premium dispute, or wrongful cancellation, you don’t have to face the insurance company alone. At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we advocate for policyholders, forcing insurers to follow the law and pay what’s owed.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every policy and situation is different.'
      },
      {
        slug: 'rcv-vs-acv',
        title: 'Replacement Cost vs Actual Cash Value: What Florida Homeowners Need to Know',
        metaTitle: 'Replacement Cost vs Actual Cash Value: What Florida Homeowners Need to Know',
        metaDescription: 'Learn the difference between Replacement Cost and Actual Cash Value coverage. Florida homeowners: Don\'t settle your insurance claim until you understand your policy.',
        category: 'Property Damage Law', tags: ['coverage basics', 'depreciation', 'ACV'],
        author: 'Shari Freeman', date: '2025-10-23',
        links: ['/post/how-florida-insurance-companies-calculate-roof-depreciation'],
        body: [
          { type: 'para', text: 'If you’ve suffered property damage and filed a homeowners insurance claim, understanding the difference between Replacement Cost Value (RCV) and Actual Cash Value (ACV) coverage could make thousands of dollars\' difference in your recovery.' },
          { type: 'para', text: 'At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we help Florida homeowners navigate the fine print of their insurance policies to ensure they recover everything they’re owed after a loss. Here’s what you need to know about the two main types of homeowners insurance policies.' },
          { type: 'heading', text: 'What Is Replacement Cost Value (RCV) Coverage?' },
          { type: 'para', text: 'A Replacement Cost Value policy pays the full cost to repair or replace your damaged property, without deducting for depreciation. Under RCV coverage, your insurer should pay to restore your home to its pre-loss condition, less your deductible.' },
          { type: 'para', text: 'For example, if your roof was destroyed in a hurricane and costs $25,000.00 to replace, an RCV policy would cover the full amount, minus your deductible, even if your roof was ten years old.' },
          { type: 'para', text: 'This type of coverage provides more complete protection and is often preferred by homeowners who want peace of mind.' },
          { type: 'heading', text: 'What Is Actual Cash Value (ACV) Coverage?' },
          { type: 'para', text: 'Actual Cash Value coverage only pays for the depreciated value of the damaged property. Insurance companies calculate depreciation based on the item\'s age, condition, and lifespan.' },
          { type: 'para', text: 'For example, if your roof had a 20-year life expectancy but was 10 years old at the time of loss, your payout might be reduced by half. After applying that depreciation formula, your insurer will also subtract your deductible.' },
          { type: 'para', text: 'ACV policies usually result in lower payouts and may not cover the full cost of repairs. This often surprises policyholders after a major loss.' },
          { type: 'heading', text: 'RCV vs. ACV in Florida Homeowners Insurance Claims' },
          { type: 'para', text: 'For homeowners, the type of policy you have, whether it is RCV or ACV, can determine whether your home gets fully restored or whether you\'re left covering the shortfall.' },
          { type: 'para', text: 'At <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we analyze your policy as soon as we take your case. If you have an ACV policy, we explain exactly what that means for your recovery and help you decide whether any offer from the insurance company is fair under the circumstances.' },
          { type: 'heading', text: 'Which Is Better: RCV or ACV?' },
          { type: 'para', text: 'For most homeowners, RCV policies provide significantly better protection and minimize out-of-pocket expenses. However, RCV premiums are often higher, and some insurers only offer ACV options for certain types of properties or roofs.' },
          { type: 'para', text: 'If you’re shopping for a policy or trying to understand your current coverage, it\'s important to know what you\'re buying and what you\'re giving up.' },
          { type: 'heading', text: 'Need Help With Your Florida Insurance Claim?' },
          { type: 'para', text: 'Whether you have Actual Cash Value or Replacement Cost Value coverage, the team at <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> is here to fight for the full value of your homeowners insurance claim. We serve clients across the state of Florida and offer free consultations for property damage claims.' }
        ],
        disclaimer: 'This article is provided for informational purposes only and does not constitute legal advice. Every policy and situation is different.'
      }
    ]
  };

  // ---- Offices ----
  var offices = [
    {
      state: 'Florida',
      phone: '(407) 502-8068', tel: 'tel:14075028068',
      email: 'info@propertyinsurance.law',
      addressLines: ['941 W. Morse Boulevard', 'Ste. 100-585', 'Winter Park, FL 32789'],
      hours: 'Monday to Friday, 9:00 AM to 5:00 PM EST',
      appointment: 'By appointment only',
      retainHref: 'https://signnow.com/s/o1YccX4i'
    },
    {
      state: 'Illinois',
      phone: '618-440-3088', tel: 'tel:16184403088',
      email: 'info@propertyinsurance.law',
      addressLines: ['203 N LaSalle Street', 'Ste. 2100', 'Chicago, IL 60601'],
      hours: 'Monday to Friday, 8:00 AM to 4:00 PM CST',
      appointment: 'By appointment only',
      retainHref: '#'
    }
  ];

  // ---- Shared / home ----
  var stats = [
    { value: '$10M+', prefix: '$', end: 10, suffix: 'M+', label: 'recovered for policyholders' },
    { value: '3,500+', end: 3500, comma: true, suffix: '+', label: 'claims handled' },
    { value: '$0', prefix: '$', end: 0, start: 250, label: 'fee unless we win' }
  ];

  var testimonials = [
    { quote: 'Great experience with Zaf and all the staff at Property insurance law. The staff were friendly and professional. Zaf was easy to speak with. He was knowledgeable and explained the process in full answering all our questions in a way that was easily understood. His manner was such that it relieved the stress of the situation and gave us great confidence we were hiring the right people. I would highly recommend Property Insurance Law.', name: 'Jeff B.', claim: 'Hail' },
    { quote: 'I highly recommend Shari and her team! Filing a property insurance claim can be overwhelming, and the thought of hiring an attorney can make the process feel even more intimidating. From the moment you work with Shari, you\u2019ll know you\u2019re in excellent hands. [...] If you\u2019re looking for a property insurance attorney who will take great care of you and advocate for your best interests, I can\u2019t recommend Shari and her firm enough!!', name: 'Brittany E.' },
    { quote: 'The team at <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> are unmatched. Top notch service and undeniable expertise in their field. They advocated for me and achieved a more than favorable result after a water intrusion claim at my storage unit. I was kept informed along the way the whole team is great.', name: 'Travis A.', claim: 'Delayed Claim' },
    { quote: 'Having known Attorney Freeman for years, I can attest to her skill as a homeowner\u2019s insurance attorney. She has a wealth of experience in the area. She comes highly recommended; in fact, the entire firm she works at only has amazing lawyers in this area. Truly some of the best in the practice area!', name: 'Craig R.' },
    { quote: 'Sharon Freeman is an exceptional advocate for policyholders and a true professional in the property insurance industry. Her knowledge of underpaid insurance claims, attention to detail, and dedication to achieving fair outcomes for her clients are second to none. [...] If you\u2019re dealing with a property insurance dispute, you can feel confident knowing you\u2019re in experienced and capable hands. Highly recommend!', name: 'Michael C.' },
    { quote: 'Excellent service. They handled my claim quickly, communicated clearly, and got me a better result than expected. Very professional and responsive.', name: 'Ben D.' },
    { quote: 'Julian made the entire process so much easier for us! He was very detailed and had no issue with explaining anything I didn\u2019t understand while keeping me informed every step of the way. So thankful for him and this firm!', name: 'Ashley C.' },
    { quote: 'Great firm with clear goals and nothing that felt off. Erik knows his stuff and everything felt comfortable throughout the entire process.', name: 'Kevin K.' },
    { quote: 'Highly recommend their services!', name: 'RMH.' },
    { quote: 'I had an excellent experience working with Property Insurance.Law from the very beginning, their team was professional, knowledgeable, and truly committed to helping me navigate a stressful insurance claim process.', name: 'Rache' },
    { quote: 'Thank you my claim was handled successfully, and the process was far less overwhelming than I expected. I highly recommend this firm to anyone dealing with a property insurance issue and looking for honest, reliable, and compassionate legal representation.', name: 'Guy A.' },
    { quote: 'Great firm that is well organized and prompt to respond and help. You can tell they really care about their client. I got to work with Hilda during my claim process and she was amazing, helped me through and made sure I had all the information I needed! Would recommend this firm if you are in the market.', name: 'Alicia A.' },
    { quote: 'Highly recommend this firm for all your claims against insurance. Erik provides great customer service! Very competent.', name: 'Izack T.' },
    { quote: 'I am extremely thankful for the team at Property Insurance Law, and I really appreciate Erik & Zaf for all of their help. Their efficiency and fast communication made a stressful situation much easier to handle. Thank you & highly recommend!', name: 'Celine S.' },
    { quote: 'Erik Granillo was so great to work with! He made my experience so easy and stress free. 10/10.', name: 'Emily D.' },
    { quote: 'Sheri and Julian were so patient and explained the legal process with us. They fought for our case, appreciate it! They are amazing team!', name: 'Kelly K.', claim: 'Denied Claim' },
    { quote: 'Getting help from Eric Granillo to deal with the issues we had with our home was a great help. He is very professional and pleasant to work with. I really appreciate his courtesy and willingness to help.', name: 'Jose Z.', claim: 'Delayed Claim' },
    { quote: 'Julian was incredible! I couldn\u2019t recommend him more.', name: 'Emma B.' },
    { quote: 'Julian and Shari were great to work with. They are detailed, honest and knowledgeable about the entire claims process. Their invaluable support has made this haunting process so much easier. 10/10 highly recommended', name: 'Gabi S.' },
    { quote: 'After a major storm, we discovered water damage in our attic and kitchen walls caused by debris that struck our roof. Thankfully, we contacted Shari. She was incredibly responsive, answered every question and helped us reach a quick and smooth resolution. If you\u2019re dealing with property damage or insurance issues, I can\u2019t recommend Shari enough. She made a difficult situation manageable and exceeded every expectation.', name: 'Zack F.', claim: 'Wind' },
    { quote: 'I\u2019m so grateful for the team at property insurance! They went above and beyond to make sure everything with my case was handled smoothly. They were patient, honest, and always made me feel supported and informed throughout the process. I can\u2019t recommend them enough!', name: 'Khalood S.' }
  ];

  // Hero "recent recovery" boxes — pool the home page draws 2 from at random.
  // Illustrative only; see policies > Advertising & results.
  var caseResults = [
    { amt: '$165,000', cap: 'Denied roof claim, reversed' },
    { amt: '$350,000', cap: 'Under deductible decision to full payment' },
    { amt: '$115,000', cap: 'Under-deductible decision to full payment' },
    { amt: '$693,539', cap: 'Commercial claim denied, reversed' },
    { amt: '$100,035', cap: 'Underpaid residential claim to fully paid' },
    { amt: '$120,000', cap: 'Underpaid residential claim to fully paid' },
    { amt: '$144,574', cap: 'Under deductible decision to full payment' },
    { amt: '$90,000', cap: 'Under deductible decision to full payment' },
    { amt: '$120,000', cap: 'Delayed residential claim fully paid' }
  ];

  // Situation cards on the home page
  var problems = [
    { key: 'claim:denied', kicker: 'My claim was denied', desc: 'The denial letter is the carrier\u2019s opening position, not the final word. We review what they relied on and what they ignored.', cta: 'Denied Claims' },
    { key: 'claim:underpaid', kicker: 'My payment will not cover repairs', desc: 'When the check and your contractor\u2019s estimate show a large gap, we fight for fair claim payments based on facts.', cta: 'Underpaid Claims' },
    { key: 'claim:delayed', kicker: 'My claim has stalled', desc: 'Weeks or months of silence is part of their playbook. We aggressively pursue the benefits you are entitled to.', cta: 'Delayed Claims' }
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
    tagline: 'Important information about using this website and communicating with our firm.',
    updated: 'Last updated August 2026',
    intro: 'These policies apply when you use <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> or communicate with Property Insurance Law PLLC. They are intended to explain the relationship between this website, our firm, and its users in clear terms.',
    sections: [
      { id: 'legal-notice', toc: 'Legal information', heading: 'Legal Information and the Attorney\u2013Client Relationship', body: [
        'The information on this website, including articles, FAQs, checklists, practice-area pages, and other materials, is provided for general informational purposes only. It is not legal advice and should not be relied upon as a substitute for advice from an attorney about your particular circumstances.',
        'Viewing this website or contacting us through a form, email, telephone call, text message, social media, or other communication does not by itself create an attorney\u2013client relationship.',
        'An attorney\u2013client relationship is established only after the firm has completed any necessary conflict review and both you and the firm have entered into a written engagement agreement.',
        'Until representation has been confirmed in writing, please do not send information that you consider highly confidential or sensitive.'
      ]},
      { id: 'where-we-practice', toc: 'Where we practice', heading: 'Where We Practice', body: [
        'Our attorneys represent clients in Florida and Illinois. We may also participate in matters in other jurisdictions when permitted by applicable law, court rules, or pro hac vice admission.',
        'Nothing on this website is intended as a solicitation or offer of legal services in any jurisdiction where doing so would be inconsistent with applicable law or professional rules.'
      ]},
      { id: 'advertising', toc: 'Advertising, results & testimonials', heading: 'Attorney Advertising, Results, and Testimonials', body: [
        'This website may constitute attorney advertising.',
        'Any case results, recoveries, settlements, verdicts, or other outcomes described on this website are provided for informational purposes only. Prior results do not guarantee or predict a similar result in any future matter. Every case depends on its own facts, applicable law, available evidence, insurance coverage, and other circumstances.',
        'Testimonials and reviews reflect the experiences and opinions of the individuals who provided them. They should not be interpreted as a guarantee that another client will have the same experience or obtain the same result.',
        'If compensation, a discount, or another benefit is ever provided in connection with a testimonial or endorsement, any disclosure required by applicable law will be made.'
      ]},
      { id: 'free-review', toc: 'Free reviews & engagement', heading: 'Free Reviews, Conflicts, and Engagement', body: [
        'A free claim or case review is an initial evaluation of the information available to determine whether the firm may be able to assist.',
        'Before accepting a matter, we may need to conduct a conflict check and evaluate whether the matter falls within the firm\u2019s practice, resources, and ability to provide representation.',
        'We are not required to accept any matter submitted for review.',
        'If you and the firm decide to move forward, the scope of representation, fee arrangement, responsibility for costs, and other terms will be set out in a written engagement agreement.'
      ]},
      { id: 'fees', toc: 'Fees & costs', heading: 'Fees and Costs', body: [
        'Many of our property insurance and personal injury matters are handled on a contingency-fee basis. In those matters, attorney\u2019s fees are generally tied to a recovery obtained for the client.',
        'The specific fee arrangement for any representation is governed by the written engagement agreement and applicable law.',
        'Case costs may include filing fees, expert fees, inspections, records, depositions, travel, or other expenses depending on the matter. How those costs are handled will be explained before representation begins.',
        'No fee arrangement described on this website creates an attorney\u2013client relationship or modifies the terms of a signed engagement agreement.'
      ]},
      { id: 'communications', toc: 'Communications & confidentiality', heading: 'Communications, Confidentiality, and Security', body: [
        'Communications sent through this website, email, text message, social media, or other electronic means may not be secure.',
        'Until the firm has agreed to represent you, information submitted through these channels may not be protected by the attorney\u2013client privilege or other confidentiality rules that apply to existing clients.',
        'Once representation begins, the firm may provide or recommend appropriate methods for exchanging sensitive information and documents.',
        'Please do not use website forms or unsolicited email to send passwords, Social Security numbers, full financial account numbers, or other highly sensitive information unless specifically requested through an appropriate channel.'
      ]},
      { id: 'deadlines', toc: 'Deadlines', heading: 'Time-Sensitive Matters and Legal Deadlines', body: [
        'Legal rights can be affected by statutes of limitation, statutes of repose, policy requirements, notice provisions, contractual deadlines, pre-suit requirements, and other time-sensitive obligations.',
        'Deadlines vary depending on the type of matter, the state, the policy or contract involved, and the particular facts.',
        'Information on this website should not be used to calculate a legal deadline. If you believe you may have a claim or legal dispute, speak with a licensed attorney promptly about the deadlines that may apply.'
      ]},
      { id: 'ip', toc: 'Intellectual property', heading: 'Intellectual Property and Acceptable Use', body: [
        'All content on <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, including text, articles, practice-area content, attorney and staff biographies, graphics, photographs, videos, downloadable materials, page designs, logos, branding, and other original website materials, is owned by Property Insurance Law PLLC, d/b/a <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, unless expressly stated otherwise.',
        'The firm retains all applicable copyrights, trademark rights, and other intellectual property rights in that content.',
        'You may view, download, or print reasonable portions of the website for your own personal, non-commercial use.',
        'You may not copy, reproduce, republish, distribute, modify, scrape, harvest, frame, mirror, commercially exploit, or create derivative works from this website or its content without the firm\u2019s prior written permission.',
        'Use of automated tools to systematically collect, reproduce, republish, or extract content from this website is prohibited except to the extent such activity cannot lawfully be restricted.',
        'Nothing on this website grants any license or right to use the firm\u2019s name, trademarks, branding, logos, or other intellectual property without prior written consent.'
      ]},
      { id: 'third-party', toc: 'Third-party links', heading: 'Third-Party Links and Resources', body: [
        'This website may contain links to third-party websites, services, or resources for convenience or informational purposes.',
        'The firm does not control those third parties and is not responsible for their content, availability, security, privacy practices, accuracy, or policies.',
        'A link to a third-party resource does not necessarily constitute an endorsement of that third party or its content.'
      ]},
      { id: 'accessibility', toc: 'Accessibility', heading: 'Accessibility', body: [
        'We want <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> to be accessible and usable.',
        'If you experience difficulty accessing any part of this website, please contact us at <a href="mailto:info@propertyinsurance.law" style="color:var(--color-primary);font-weight:600;text-decoration:none">info@propertyinsurance.law</a> or <a href="tel:14075028068" style="color:var(--color-primary);font-weight:600;text-decoration:none">(407) 502-8068</a>. Tell us what content you are trying to access and the accessibility issue you encountered, and we will work with you to provide the information in an accessible format.'
      ]},
      { id: 'questions', toc: 'Questions', heading: 'Questions About These Policies', body: [
        'If you have questions about these policies, call <a href="tel:14075028068" style="color:var(--color-primary);font-weight:600;text-decoration:none">(407) 502-8068</a> or email <a href="mailto:info@propertyinsurance.law" style="color:var(--color-primary);font-weight:600;text-decoration:none">info@propertyinsurance.law</a>.'
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
    offices: offices,
    faq: faq,
    blog: blog,
    stats: stats,
    testimonials: testimonials,
    caseResults: caseResults,
    problems: problems,
    whyUs: whyUs,
    damageOrder: damageOrder,
    policies: policies,
    samplePost: samplePost
  };
})();

