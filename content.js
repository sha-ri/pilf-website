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
        slug: 'pre-existing-damage-denial-florida',
        title: 'What "Pre-Existing Damage" Really Means on Your Claim',
        metaTitle: 'What "Pre-Existing Damage" Really Means on Your Claim',
        metaDescription: 'How carriers turn a storm loss into "wear and tear," and how the record answers back.',
        category: 'Property Damage Law', tags: ['denied claims', 'roof damage', 'storm damage'],
        author: 'Shari Freeman', date: '2025-10-08',
        links: [],
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
        ],
        disclaimer: 'This article provides general information and is not legal advice. Every claim depends on its own facts and policy language.'
      },
      {
        slug: 'cast-iron-pipe-insurance-claim-florida',
        title: 'Does Homeowners Insurance Cover Cast Iron Pipe Problems in Florida?',
        metaTitle: 'Cast Iron Pipe Claims in Florida: Are You Covered?',
        metaDescription: 'Florida homes built before 1975 often have failing cast iron pipes. Learn when insurance may cover the damage and why these claims get denied.',
        category: 'Property Damage Law', tags: ['water damage', 'plumbing', 'older homes'],
        author: 'Shari Freeman', date: '2025-10-15',
        links: ['/water-damage-insurance-claims', '/post/constant-repeated-seepage-exclusion-florida'],
        body: [
          { type: 'para', text: 'Thousands of Florida homes built before the mid-1970s still rely on original cast iron drain pipes. Those pipes are now well past their expected service life, and when they fail, the results can be serious: sewage backups, slab leaks, cracked flooring, and water damage throughout the home. Whether insurance covers any of it is one of the most disputed questions in Florida property claims.' },
          { type: 'heading', text: 'The Core Problem With Cast Iron' },
          { type: 'para', text: 'Cast iron corrodes from the inside out. Over decades, channeling and cracking develop along the bottom of the pipe where wastewater flows. Eventually the pipe collapses or leaks under the slab. Because the deterioration happens out of sight, homeowners typically discover the problem only after damage appears: backed-up drains, foul odors, damp flooring, or raised tile.' },
          { type: 'heading', text: 'How Insurers Respond to These Claims' },
          { type: 'para', text: 'Insurance companies frequently deny cast iron claims by pointing to exclusions for wear and tear, deterioration, and corrosion. Some also invoke the seepage exclusion for long-term leakage. The insurer\u2019s position is essentially that an old pipe failing is expected, not accidental.' },
          { type: 'heading', text: 'Why Coverage May Still Exist' },
          { type: 'para', text: 'The analysis rarely ends with the word \u201ccorrosion.\u201d Many policies cover the resulting water damage even when the pipe itself is excluded, and some cover the cost of tearing out and replacing the portion of the building necessary to access the failed pipe. If a section of pipe collapses suddenly, the loss may qualify as sudden and accidental despite the pipe\u2019s age. The precise policy form, the endorsements attached to it, and the physical evidence all drive the outcome, which is why two identical-looking claims can end differently.' },
          { type: 'heading', text: 'Building Your Claim the Right Way' },
          { type: 'para', text: 'A camera inspection by a licensed plumber is often the foundation of a cast iron claim, because it documents the pipe\u2019s condition with video evidence. Keep every plumbing invoice and report. Photograph the damage inside the home, including flooring, baseboards, and cabinetry. If the insurer sends an engineer, ask for a copy of the report, and consider an independent evaluation before accepting the conclusions.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Cast iron disputes are technical, and insurers know most homeowners will not push back on a corrosion denial. If your claim was denied or the payment does not come close to the real cost of access, tear-out, and repair, the attorneys at propertyinsurance.law offer a free case evaluation for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Coverage depends on your policy language and the facts of your loss.'
      },
      {
        slug: 'mortgage-company-on-insurance-check',
        title: 'Why Is My Mortgage Company on My Insurance Check?',
        metaTitle: 'Why Your Mortgage Company Is on the Insurance Check',
        metaDescription: 'Insurance claim checks often name your lender. Learn why, how the endorsement process works in Florida, and what to do when the lender slows repairs.',
        category: 'Insurance Dispute Advice', tags: ['claim payments', 'lenders', 'claim process'],
        author: 'Zaf Goss', date: '2025-10-22',
        links: ['/underpaid-insurance-claims', '/post/florida-insurance-claim-underpaid'],
        body: [
          { type: 'para', text: 'The claim finally pays, the check arrives, and there is a surprise on the payee line: your name and your mortgage company\u2019s. You cannot cash it alone. This catches most homeowners off guard, but it is standard practice, and understanding the process keeps it from derailing your repairs.' },
          { type: 'heading', text: 'Why the Lender Is on the Check' },
          { type: 'para', text: 'Your mortgage gives the lender a secured interest in the property, and your insurance policy contains a mortgagee clause naming the lender as a loss payee. The house is the lender\u2019s collateral, so the lender has a legal interest in making sure insurance proceeds actually restore it. When structural damage payments issue, insurers include the mortgagee on the check as a matter of routine.' },
          { type: 'heading', text: 'How Endorsement Usually Works' },
          { type: 'para', text: 'Each mortgage servicer has its own loss draft process. For smaller payments, many servicers endorse the check and return it with minimal friction. Larger payments typically go into an escrow-style arrangement where the servicer releases funds in stages tied to repair progress, often requiring a signed contract with your contractor, a W-9, lien waivers, and inspections before each disbursement. Call the servicer\u2019s loss draft department early, get the requirements in writing, and follow their checklist precisely, because missing paperwork is the most common cause of delay.' },
          { type: 'heading', text: 'When the Process Goes Wrong' },
          { type: 'para', text: 'Problems arise when servicers sit on funds, impose shifting requirements, or hold money while your home deteriorates and contractors walk away. Interest on your escrowed funds, communication in writing, and escalation within the servicer all help. Persistent misconduct by a servicer raises separate legal issues from your insurance claim, and both can be addressed.' },
          { type: 'heading', text: 'Do Not Confuse the Two Fights' },
          { type: 'para', text: 'The lender controls disbursement of what the insurer paid. The insurer controls how much gets paid in the first place. If the underlying payment is too low, no amount of loss draft paperwork fixes that. Evaluate the insurer\u2019s estimate independently before assuming the lender process is your only obstacle.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your claim was underpaid, or payment logistics have stalled your repairs for months, the attorneys at propertyinsurance.law can help identify where the real problem sits and pursue what you are owed. Case evaluations are free for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Servicer requirements and policy terms vary.'
      },
      {
        slug: 'condo-ho6-vs-master-policy-florida',
        title: 'Condo Damage in Florida: Your HO-6 Policy vs the Association\u2019s Master Policy',
        metaTitle: 'Condo Claims: HO-6 vs the Master Policy',
        metaDescription: 'Florida condo damage splits between the association\u2019s master policy and your HO-6. Learn where the line falls and how to handle a unit damage claim.',
        category: 'Property Damage Law', tags: ['condo claims', 'HO-6', 'water damage'],
        author: 'J. Alex Couture', date: '2025-10-28',
        links: ['/water-damage-insurance-claims', '/post/water-damage-claim-denied-florida'],
        body: [
          { type: 'para', text: 'Water pours through a condo ceiling, or a fire spreads from a neighboring unit, and the first dispute is not with any insurance company. It is over which insurance company: the association\u2019s master policy or your own HO-6 unit owner policy. Florida law draws the line, and knowing where it falls keeps unit owners from being bounced between carriers while damage sits unrepaired.' },
          { type: 'heading', text: 'The Statutory Dividing Line' },
          { type: 'para', text: 'Florida\u2019s condominium statute allocates insurance responsibility. In broad terms, the association\u2019s master policy covers the building itself: structure, roof, exterior, and common elements, along with portions of the units as the statute defines. The unit owner\u2019s policy covers what the statute carves out to the owner, which generally includes floor, wall, and ceiling coverings, cabinets and countertops, appliances, electrical fixtures, window treatments, and all personal property within the unit. Think of the master policy stopping at the unfinished surfaces and your HO-6 picking up the finishes and contents from there.' },
          { type: 'heading', text: 'Why Every Condo Owner Needs a Real HO-6' },
          { type: 'para', text: 'Owners sometimes assume the association covers everything and carry minimal coverage. A significant water loss corrects that assumption expensively, because flooring, cabinetry, and drywall finishes add up fast. Beyond dwelling and contents coverage, loss assessment coverage matters enormously in Florida: when the association\u2019s deductible or an uninsured common loss gets assessed to unit owners, loss assessment coverage responds, and the master policy deductibles on Florida buildings can be very large.' },
          { type: 'heading', text: 'The Finger-Pointing Problem' },
          { type: 'para', text: 'Multi-unit water losses invite each carrier to point at the other, and at the unit above, while nobody pays. Report to both your HO-6 carrier and the association promptly, in writing, and get the association\u2019s determination of responsibility documented. Your own policy\u2019s obligations to you do not evaporate because another policy also exists.' },
          { type: 'heading', text: 'Document Like Any Other Claim' },
          { type: 'para', text: 'Photograph the damage and the source, mitigate promptly, keep receipts, and obtain your own repair estimates for the finishes and contents on your side of the line.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Condo claims add a statute and an extra insurer to every ordinary claim problem. The attorneys at propertyinsurance.law represent Florida unit owners in disputes with their own carriers and in sorting responsibility with associations, and case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Responsibility allocation depends on the statute, the declarations, and the policies involved.'
      },
      {
        slug: 'emergency-tarping-water-removal-coverage',
        title: 'Are Emergency Tarping and Water Removal Covered by Insurance?',
        metaTitle: 'Are Tarping and Water Removal Covered by Insurance?',
        metaDescription: 'Emergency mitigation like tarping and water extraction is generally covered after a Florida loss. Learn how reimbursement works and common disputes.',
        category: 'Property Damage Law', tags: ['mitigation', 'claim process', 'storm claims'],
        author: 'Shari Freeman', date: '2025-11-04',
        links: ['/post/cleanup-before-adjuster-inspection-florida', '/hurricane-property-damage-lawyer'],
        body: [
          { type: 'para', text: 'After a storm rips shingles off the roof or a pipe floods the kitchen, the first invoices arrive fast: a tarping crew, a water extraction company, drying equipment running for days. Homeowners frequently ask whether insurance actually pays for these emergency services. In most covered losses, the answer is yes, though the process has traps worth knowing about.' },
          { type: 'heading', text: 'Why Mitigation Is Covered' },
          { type: 'para', text: 'Your policy requires you to protect the property from further damage after a loss. It would make little sense to impose that duty and then refuse to pay for it. Reasonable emergency measures taken to prevent additional damage from a covered peril are generally recoverable as part of the claim. Tarping, board-up, water extraction, and structural drying are the classic examples.' },
          { type: 'heading', text: 'Common Disputes Over Mitigation Bills' },
          { type: 'para', text: 'Coverage in principle does not always mean full payment in practice. Insurers frequently challenge mitigation invoices as excessive, cutting line items for equipment days, labor rates, or square footage. Some carriers pay a fraction of the drying company\u2019s bill and leave the homeowner caught between the vendor and the insurer. Another recurring dispute involves causation: if the insurer later denies the underlying claim, it may refuse the mitigation costs too, even though the homeowner acted responsibly and in good faith.' },
          { type: 'heading', text: 'Read Before You Sign' },
          { type: 'para', text: 'Emergency vendors often present paperwork on the spot, sometimes including direction of payment forms or contracts with significant obligations. Florida law changed in recent years regarding assignment of benefits agreements, and post-loss assignments are prohibited under most policies issued in 2023 and later. Take a moment to understand what you are signing, what the vendor will charge, and who is responsible if the insurer pays less than the invoice.' },
          { type: 'heading', text: 'Protecting Yourself' },
          { type: 'para', text: 'Get the scope and pricing in writing before work begins where the situation allows. Photograph conditions before and after mitigation. Keep drying logs and moisture readings if the vendor provides them, because that documentation supports both the mitigation bill and the underlying damage claim. Submit invoices to the insurer promptly.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your insurer refuses to pay reasonable emergency mitigation costs, or a mitigation dispute is holding your entire claim hostage, the attorneys at propertyinsurance.law can help. We represent Florida policyholders on contingency and offer free case evaluations.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Vendor contracts and policy terms vary.'
      },
      {
        slug: 'damage-below-deductible-florida',
        title: 'What If the Insurance Company Says My Damage Is Below the Deductible?',
        metaTitle: 'Insurer Says Your Damage Is Below the Deductible?',
        metaDescription: 'When a Florida insurer says your loss falls under the deductible, the estimate may be the real problem. Learn how to evaluate and challenge it.',
        category: 'Insurance Dispute Advice', tags: ['underpaid claims', 'deductibles', 'estimates'],
        author: 'J. Alex Couture', date: '2025-11-10',
        links: ['/underpaid-insurance-claims', '/post/contractor-estimate-higher-than-insurance-florida'],
        body: [
          { type: 'para', text: 'The claim decision arrives and it is technically not a denial: the insurer agrees a covered loss occurred but says the damage totals less than your deductible, so no payment is owed. For homeowners with hurricane deductibles running two percent or more of the home\u2019s insured value, this outcome is common. It is also frequently wrong.' },
          { type: 'heading', text: 'The Estimate Is Doing All the Work' },
          { type: 'para', text: 'A below-deductible determination is only as good as the estimate behind it. If the adjuster scoped three roof tiles, one water stain, and a section of fascia, the total will naturally land under a several-thousand-dollar deductible. The question is whether that scope captured the actual damage. Missed line items, patch-repair pricing where replacement is warranted, ignored code upgrade costs, and overlooked rooms routinely keep estimates artificially low.' },
          { type: 'heading', text: 'Hurricane Deductibles Raise the Stakes' },
          { type: 'para', text: 'Florida hurricane deductibles are typically calculated as a percentage of your dwelling coverage, commonly two, five, or ten percent. On a home insured for $400,000, a two percent deductible is $8,000 before the insurer pays anything. Carriers know that scoping a storm claim a few thousand dollars under that threshold ends the claim without a formal denial. That dynamic makes independent verification of the estimate essential after hurricanes.' },
          { type: 'heading', text: 'How to Test the Insurer\u2019s Number' },
          { type: 'para', text: 'Get a detailed written estimate from a licensed contractor or roofer who inspects thoroughly, including the attic, all elevations, and interior spaces. Compare it line by line with the insurer\u2019s estimate and note what is missing. Look at unit pricing too, because insurer estimates sometimes price labor and materials below what any local contractor actually charges. If hidden damage is suspected, moisture mapping or a more invasive inspection may be justified.' },
          { type: 'heading', text: 'Reopening the Conversation' },
          { type: 'para', text: 'A below-deductible finding is not a closed door. You can submit the contractor\u2019s estimate, additional photographs, and a written request for reinspection. Florida law requires insurers to respond to claim communications and to explain differences between their payments and their own detailed estimates. Supplemental information regularly moves claims from below the deductible to a meaningful payment.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If the gap between your contractor\u2019s estimate and the insurer\u2019s is significant, the dispute is really about scope and value, and that is exactly the kind of dispute we handle. The attorneys at propertyinsurance.law offer free case evaluations for Florida homeowners told their loss falls under the deductible.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Deductible amounts and application vary by policy.'
      },
      {
        slug: 'theft-vandalism-insurance-florida',
        title: 'Does Homeowners Insurance Cover Theft and Vandalism in Florida?',
        metaTitle: 'Theft and Vandalism Claims in Florida, Explained',
        metaDescription: 'Theft and vandalism are covered perils in most Florida policies. Learn what to document, how sublimits work, and why vacancy can void coverage.',
        category: 'Property Damage Law', tags: ['theft', 'vandalism', 'coverage basics'],
        author: 'James Wilson', date: '2025-11-17',
        links: ['/post/vacancy-exclusion-denial-florida', '/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'Coming home to a break-in or waking up to vandalized property is a violation before it is a claim. Standard Florida homeowners policies cover both theft and vandalism, including the property taken and the damage done getting to it: broken doors, shattered windows, pried frames, and destruction left behind. The claims themselves, though, come with rules and traps worth knowing in advance.' },
          { type: 'heading', text: 'Report to Police First' },
          { type: 'para', text: 'Insurers uniformly require prompt notice to law enforcement for theft losses, and the police report becomes the backbone of the claim. File it immediately, get the report number, and make the insurance report right after. Delay in either report invites questions you do not want to answer later.' },
          { type: 'heading', text: 'Sublimits Shape Theft Recoveries' },
          { type: 'para', text: 'Personal property coverage carries special limits for categories thieves target: jewelry, watches, firearms, cash, silverware, and collectibles commonly have theft sublimits far below their value, sometimes a few thousand dollars per category. If the loss includes valuables, check the special limits section of your policy, and going forward, consider scheduling high-value items, which insures them specifically and typically without a deductible.' },
          { type: 'heading', text: 'Proving What Was Taken' },
          { type: 'para', text: 'Theft claims live and die on proof of ownership. Photographs, receipts, credit card statements, appraisals, and serial numbers all substantiate the inventory. Reconstruct methodically, room by room, and expect the insurer to probe large or poorly documented items. Replacement cost coverage on contents, where your policy provides it, pays today\u2019s prices rather than depreciated values once items are replaced.' },
          { type: 'heading', text: 'The Vacancy Trap for Vandalism' },
          { type: 'para', text: 'Many policies exclude vandalism losses when the home has been vacant beyond a stated period, often 30 or 60 days. Rental turnovers, estates, and homes under renovation or listed for sale get caught by this provision regularly, and insurers apply the vacant label aggressively. The distinction between vacant and merely unoccupied is legally meaningful, and a vacancy-based denial deserves scrutiny rather than acceptance.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your theft or vandalism claim was denied, minimized through sublimits, or hit with a vacancy exclusion that does not fit the facts, the attorneys at propertyinsurance.law will review the claim for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Sublimits and vacancy provisions vary by policy.'
      },
      {
        slug: 'how-long-insurer-pay-claim-florida',
        title: 'How Long Does an Insurance Company Have to Pay a Claim in Florida?',
        metaTitle: 'Florida\u2019s Deadlines for Insurers to Pay Claims',
        metaDescription: 'Florida law gives insurers 60 days to pay or deny a property claim, with earlier deadlines along the way. Learn the timeline and what late means.',
        category: 'Insurance Dispute Advice', tags: ['delayed claims', 'claim process', 'policyholder rights'],
        author: 'J. Alex Couture', date: '2025-11-24',
        links: ['/delayed-insurance-claims-florida', '/post/adjuster-stopped-responding-florida'],
        body: [
          { type: 'para', text: 'Weeks pass, then months, and the insurance company keeps \u201creviewing\u201d your claim. Florida homeowners often assume they simply have to wait. They do not. Florida law imposes specific deadlines on property insurers, and knowing them changes the conversation.' },
          { type: 'heading', text: 'The Statutory Timeline' },
          { type: 'para', text: 'Florida Statute 627.70131 sets the framework for residential property claims. The insurer must review and acknowledge communications about your claim within 7 calendar days of receipt. Once you submit proof of loss statements, the insurer must begin its investigation promptly and, if it intends to physically inspect the property, conduct that inspection within 30 days. Most importantly, within 60 days after receiving notice of an initial, reopened, or supplemental claim, the insurer must pay or deny the claim, in whole or in part, unless factors beyond the insurer\u2019s control prevent it.' },
          { type: 'heading', text: 'Late Payment Has Consequences' },
          { type: 'para', text: 'A payment made after the 60 day deadline bears interest at the statutory rate from the date the insurer received notice of the claim. The law also requires the insurer to give you a reasonable written explanation of the basis for its payment, denial, or partial denial, and to explain any gap between its payment and its own detailed estimate. Silence, form letters, and rolling requests for documents already provided do not satisfy those duties.' },
          { type: 'heading', text: 'What Delay Tactics Look Like' },
          { type: 'para', text: 'Recognizable patterns include repeated reassignment of adjusters, serial document requests spaced weeks apart, inspections that never get scheduled, and vague status updates that reset expectations without deciding anything. Each contact you make restarts a 7 day acknowledgment obligation, so a written record of unanswered communications builds a compelling timeline.' },
          { type: 'heading', text: 'How to Use the Deadlines' },
          { type: 'para', text: 'Send claim communications in writing and keep proof of the dates. Note the 60 day mark from when you first gave notice. When the deadline passes without payment or a coverage decision, say so in writing and request the decision the statute requires. A documented record of statutory noncompliance strengthens every later stage of the dispute, including any bad faith remedies that may become available.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your claim has blown past the statutory deadlines with no decision or an unexplained lowball payment, the attorneys at propertyinsurance.law can demand compliance and pursue what you are owed. Free case evaluations are available for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Statutory deadlines contain exceptions that depend on claim facts.'
      },
      {
        slug: 'water-damage-claim-denied-florida',
        title: 'Why Was My Water Damage Claim Denied in Florida?',
        metaTitle: 'Why Was My Water Damage Claim Denied in Florida?',
        metaDescription: 'Was your Florida water damage claim denied? Learn the most common denial reasons, what the exclusions actually mean, and what you can do next.',
        category: 'Property Damage Law', tags: ['water damage', 'denied claims', 'exclusions'],
        author: 'Zaf Goss', date: '2025-11-30',
        links: ['/water-damage-insurance-claims', '/denied-homeowners-insurance-claims', '/post/pre-existing-damage-denial-florida'],
        body: [
          { type: 'para', text: 'Water damage claims are among the most frequently denied property insurance claims in Florida. If your insurer refused to pay, you are not alone, and a denial letter is not always the final word. Understanding why insurers deny these claims can help you evaluate whether your denial deserves a closer look.' },
          { type: 'heading', text: 'The Most Common Denial Reasons' },
          { type: 'para', text: 'Most water damage denials fall into a few categories. Insurers often argue the leak was gradual rather than sudden, pointing to policy language that excludes constant or repeated seepage over a period of weeks. They may claim the damage resulted from wear and tear, deferred maintenance, or deterioration. Some denials cite late notice, arguing the homeowner waited too long to report the loss. Others rely on exclusions for flood, surface water, or water that backed up through drains.' },
          { type: 'heading', text: 'Sudden Versus Gradual: Why It Matters' },
          { type: 'para', text: 'Florida homeowners policies generally cover sudden and accidental discharge of water, such as a pipe that bursts without warning. What they typically exclude is long-term leakage. The problem is that insurers and homeowners often disagree about which category applies. A pipe can fail suddenly even if the surrounding materials show older staining. An adjuster who spends twenty minutes in your home may not be in the best position to make that call.' },
          { type: 'heading', text: 'A Denial Is an Opinion, Not a Verdict' },
          { type: 'para', text: 'The denial letter reflects the insurance company\u2019s interpretation of your policy and your loss. That interpretation can be wrong. Plumbers, leak detection specialists, and engineers frequently reach different conclusions than the insurer\u2019s adjuster. Florida law also requires your insurer to give you a reasonable written explanation of the basis for the denial, tied to specific policy language. A vague or boilerplate denial deserves scrutiny.' },
          { type: 'heading', text: 'What You Can Do Next' },
          { type: 'para', text: 'Request a complete copy of your policy and read the exact exclusion the insurer cited. Preserve the evidence, including the failed pipe or component if repairs have been made. Take photographs and keep every receipt for cleanup and drying. Get your own opinion from a licensed plumber or contractor about what caused the loss and when. If the facts do not match the denial, you have options, including a supplemental review, appraisal in some cases, or legal action.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your water damage claim was denied and you believe the loss should be covered, an attorney who handles first-party property claims can review the denial against your policy and the evidence. The attorneys at propertyinsurance.law represent Florida policyholders on a contingency basis and offer a free case evaluation.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Every claim depends on its own facts and policy language.'
      },
      {
        slug: 'statute-of-limitations-florida-property-insurance',
        title: 'What Is the Statute of Limitations for a Florida Property Insurance Lawsuit?',
        metaTitle: 'Florida\u2019s Statute of Limitations for Insurance Suits',
        metaDescription: 'Florida currently allows five years from the date of loss to sue on a property insurance policy. Learn how the deadline works with other claim deadlines.',
        category: 'Insurance Dispute Advice', tags: ['deadlines', 'litigation', 'policyholder rights'],
        author: 'James Wilson', date: '2025-12-07',
        links: ['/post/how-long-florida-property-insurance-lawsuit', '/post/deadline-file-property-claim-florida'],
        body: [
          { type: 'para', text: 'Homeowners fighting an insurance company often spend months in back-and-forth before asking the critical question: how long do I actually have to sue? Florida\u2019s answer involves several overlapping deadlines, and confusing them is one of the costlier mistakes a policyholder can make.' },
          { type: 'heading', text: 'The Five Year Lawsuit Deadline' },
          { type: 'para', text: 'Florida law currently provides five years to bring an action for breach of a property insurance contract, and the period runs from the date of loss. Not from the denial, not from the last phone call with the adjuster, and not from when negotiations broke down. From the loss itself. A homeowner who spends three years politely disputing a hurricane claim has spent three-fifths of the litigation window before filing anything.' },
          { type: 'heading', text: 'Do Not Confuse It With the Claim Filing Deadline' },
          { type: 'para', text: 'The statute of limitations governs lawsuits. Separate and much shorter deadlines govern reporting the claim to your insurer in the first place: generally one year from the date of loss for new claims and 18 months for supplemental claims. Satisfying the reporting deadline preserves the claim; the statute of limitations then controls how long you have to enforce it in court. Both must be met.' },
          { type: 'heading', text: 'Pre-Suit Requirements Take Time Too' },
          { type: 'para', text: 'Florida law imposes conditions before a property insurance lawsuit can be filed, including a written notice of intent to initiate litigation served in advance of suit. Building the case takes time as well: expert inspections, estimates, and the claim record all need assembling. Treating the five year mark as a filing deadline rather than a completion deadline invites a last-minute scramble, or worse.' },
          { type: 'heading', text: 'Why Insurers Benefit From Your Delay' },
          { type: 'para', text: 'Every month of unproductive negotiation runs the clock, degrades evidence, and scatters witnesses. Some carriers string disputes along precisely because time favors them. A claim that has stalled for a year without meaningful movement is telling you something.' },
          { type: 'heading', text: 'Mark Your Dates' },
          { type: 'para', text: 'Write down the date of loss, the date you reported the claim, the date of any denial, and the five year anniversary of the loss. Those four dates frame every strategic decision in the dispute.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your dispute has dragged on, or you are unsure how much runway remains, get a definitive answer now rather than later. The attorneys at propertyinsurance.law provide free case evaluations and can tell you exactly where your deadlines stand.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Limitation periods can be affected by policy terms, loss dates, and legislative changes.'
      },
      {
        slug: 'cleanup-before-adjuster-inspection-florida',
        title: 'Can I Start Cleanup and Repairs Before the Adjuster Inspects?',
        metaTitle: 'Can I Clean Up Before the Insurance Adjuster Comes?',
        metaDescription: 'You can and should mitigate damage before the adjuster arrives. Learn what to do, what to save, and how to protect your Florida claim.',
        category: 'Insurance Dispute Advice', tags: ['claim process', 'mitigation', 'documentation'],
        author: 'Shari Freeman', date: '2025-12-13',
        links: ['/post/what-to-do-after-hurricane-damage-florida', '/water-damage-insurance-claims'],
        body: [
          { type: 'para', text: 'Water is spreading across the floor, or rain is coming through a hole in the roof, and the adjuster cannot come for days. Do you wait? The answer is no. You not only can act before the inspection, your policy requires you to take reasonable steps to prevent further damage. The key is doing it in a way that protects your claim.' },
          { type: 'heading', text: 'Your Duty to Mitigate' },
          { type: 'para', text: 'Every homeowners policy imposes duties after a loss, and one of them is protecting the property from additional damage. That means stopping the water source, tarping a damaged roof, extracting standing water, and drying the structure. If you let damage grow while waiting for the insurance company, the insurer can argue that the additional damage is your responsibility.' },
          { type: 'heading', text: 'Mitigation Is Not the Same as Permanent Repair' },
          { type: 'para', text: 'There is an important line between emergency measures and full repairs. Dry the home, remove soaked materials that pose health risks, and make temporary fixes. Hold off on permanent repairs, like installing a new roof or rebuilding walls, until the insurer has had a reasonable opportunity to inspect. Repairing everything before the inspection can give the insurer an argument that it never got to see the damage, and that argument shows up in denial letters.' },
          { type: 'heading', text: 'Document Before You Touch Anything' },
          { type: 'para', text: 'Photographs and video are your best protection. Capture every room, every damaged item, the water source, and the exterior before cleanup begins. Take wide shots for context and close-ups for detail. Save damaged materials where practical: the failed pipe section, sample flooring, shingles that came off the roof. Keep a simple log of what was done, when, and by whom.' },
          { type: 'heading', text: 'Keep Every Receipt' },
          { type: 'para', text: 'Emergency water removal, tarps, fans, dehumidifiers, plywood, hotel stays if the home is unlivable: all of it belongs in your claim file. Reasonable emergency mitigation expenses are generally recoverable under the policy, and organized receipts make payment harder to dispute.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Problems arise when insurers underpay mitigation invoices, blame homeowners for damage progression, or deny claims saying the evidence was disturbed. If your carrier is using your reasonable cleanup efforts against you, the attorneys at propertyinsurance.law offer a free case evaluation and can push back with the documentation you preserved.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Review your policy\u2019s duties after loss provisions.'
      },
      {
        slug: 'civil-remedy-notice-florida-explained',
        title: 'What Is a Civil Remedy Notice in a Florida Insurance Dispute?',
        metaTitle: 'The Civil Remedy Notice, Explained',
        metaDescription: 'A Civil Remedy Notice puts a Florida insurer on formal notice of bad faith conduct and starts a 60 day cure window. Learn how CRNs work and why they matter.',
        category: 'Insurance Dispute Advice', tags: ['bad faith', 'litigation', 'policyholder rights'],
        author: 'J. Alex Couture', date: '2025-12-20',
        links: ['/post/how-long-insurer-pay-claim-florida', '/delayed-insurance-claims-florida'],
        body: [
          { type: 'para', text: 'Florida law expects insurance companies to handle claims fairly and in good faith, and it gives policyholders a formal tool when they do not: the Civil Remedy Notice. If your insurer has delayed without reason, lowballed a documented loss, or ignored its obligations, the CRN is often the step that changes the conversation.' },
          { type: 'heading', text: 'What a CRN Is' },
          { type: 'para', text: 'A Civil Remedy Notice is a statutory notice, filed with the Florida Department of Financial Services and served on the insurer, identifying the specific conduct the policyholder contends violates Florida\u2019s insurance good faith requirements. The notice must set out the statutory provisions at issue and the facts and circumstances giving rise to the violation, with enough specificity that the insurer knows exactly what it must fix.' },
          { type: 'heading', text: 'The 60 Day Cure Window' },
          { type: 'para', text: 'Filing the CRN opens a cure period, generally 60 days, during which the insurer can resolve the identified conduct, typically by paying what the claim is worth. Payment within the window can extinguish the bad faith claim, which is precisely the point: the CRN gives the carrier one final, formal opportunity to do what it should have done already. When the insurer lets the window close without curing, the policyholder\u2019s potential bad faith remedies come into play, and those remedies can extend beyond the policy benefits themselves.' },
          { type: 'heading', text: 'Why Precision Matters' },
          { type: 'para', text: 'A CRN is a legal document with legal consequences, and courts scrutinize them. Vague notices, wrong statutory citations, or facts that do not match the record give insurers arguments to defeat the bad faith claim later. The underlying claim file, the timeline of insurer conduct, and the documentation of what was owed all need to support every statement in the notice.' },
          { type: 'heading', text: 'CRNs and Your Underlying Claim' },
          { type: 'para', text: 'A CRN supplements the contract dispute; it does not replace it. Deadlines on the underlying claim keep running, and Florida law layers additional requirements on bad faith actions. Sequencing these pieces correctly is part of the strategy.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Drafting and timing a CRN is attorney work, both because precision determines its power and because it signals the insurer that the dispute has escalated. The attorneys at propertyinsurance.law prepare Civil Remedy Notices as part of representing Florida policyholders, and case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Bad faith remedies involve detailed statutory requirements.'
      },
      {
        slug: 'hurricane-deductibles-florida-explained',
        title: 'How Do Hurricane Deductibles Work in Florida?',
        metaTitle: 'Florida Hurricane Deductibles, Explained',
        metaDescription: 'Florida hurricane deductibles are a percentage of your dwelling coverage. Learn how they apply, when they trigger, and the calendar year rule.',
        category: 'Property Damage Law', tags: ['hurricane claims', 'deductibles', 'coverage basics'],
        author: 'Shari Freeman', date: '2025-12-27',
        links: ['/hurricane-property-damage-lawyer', '/post/damage-below-deductible-florida'],
        body: [
          { type: 'para', text: 'Hurricane deductibles are the most misunderstood number in Florida homeowners insurance, and homeowners usually discover how they work at the worst possible moment: after a storm. Here is what every Florida policyholder should understand before the next landfall.' },
          { type: 'heading', text: 'A Percentage, Not a Dollar Amount' },
          { type: 'para', text: 'Unlike your standard all other perils deductible, which is a flat dollar figure, hurricane deductibles are typically calculated as a percentage of your dwelling coverage. Florida insurers commonly offer options of two, five, or ten percent, and some offer a $500 flat hurricane deductible. The math matters. On a home insured for $500,000, a two percent hurricane deductible is $10,000 out of pocket before the insurer owes a dollar, and a ten percent deductible is $50,000.' },
          { type: 'heading', text: 'When the Hurricane Deductible Applies' },
          { type: 'para', text: 'The hurricane deductible applies to losses caused by a hurricane during a defined window tied to official watches, warnings, and storm status. Damage from a storm that never reached hurricane status, or damage outside the defined period, falls under your ordinary deductible instead. That distinction can be worth thousands of dollars, and it is worth confirming which deductible the insurer applied to your claim.' },
          { type: 'heading', text: 'The Calendar Year Rule' },
          { type: 'para', text: 'Florida law provides that hurricane deductibles generally apply on a calendar year basis. If two hurricanes hit your home in the same calendar year, you do not start from zero on the second storm. Amounts you already absorbed toward the hurricane deductible on the first loss count, and for subsequent storms that year, the remaining hurricane deductible or the all perils deductible framework applies as the statute directs. Insurers do not always get this right on second-storm claims, so keep records of what you paid out of pocket on the first.' },
          { type: 'heading', text: 'Deductibles and Underpaid Claims' },
          { type: 'para', text: 'A large percentage deductible gives insurers room to scope storm damage just below the threshold and close the claim with no payment. Independent estimates matter most in exactly these situations, as we covered in our article on below-deductible determinations.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your insurer applied the wrong deductible, ignored the calendar year rule, or scoped your hurricane damage suspiciously close to the deductible line, the attorneys at propertyinsurance.law can review the claim at no cost.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Deductible options and application depend on your policy.'
      },
      {
        slug: 'cosmetic-roof-damage-denial-florida',
        title: 'Why Do Insurance Companies Call Roof Damage "Cosmetic"?',
        metaTitle: 'Insurer Says Your Roof Damage Is "Cosmetic"?',
        metaDescription: 'Florida insurers deny roof claims by calling hail and wind damage cosmetic. Learn what the label means and how to challenge a cosmetic damage denial.',
        category: 'Property Damage Law', tags: ['roof damage', 'hail', 'denied claims'],
        author: 'J. Alex Couture', date: '2026-01-02',
        links: ['/wind-and-hail-damage-insurance-claims', '/post/wear-and-tear-roof-claim-denial-florida'],
        body: [
          { type: 'para', text: 'The adjuster walks the roof, acknowledges the dents and marks, and then delivers the conclusion: the damage is only cosmetic, so the claim is denied or reduced to a token payment. Cosmetic damage arguments have become a standard tool in Florida roof claims, particularly after hail. Here is what the label really means and why it deserves pushback.' },
          { type: 'heading', text: 'The Theory Behind the Argument' },
          { type: 'para', text: 'Insurers distinguish between damage that affects a roof\u2019s function and damage that affects only its appearance. A dent in a metal panel that still sheds water, the argument goes, has not caused a functional loss. Some policies now contain explicit cosmetic damage exclusions, often added by endorsement for metal roofs. Other times, adjusters invoke the concept even when no such exclusion exists in the policy, which is a different and weaker position.' },
          { type: 'heading', text: 'Why "Cosmetic" Is Often the Wrong Call' },
          { type: 'para', text: 'Hail and wind damage that looks minor can compromise a roof in ways a quick inspection misses. Impacts can fracture shingle mats, dislodge protective granules, crack tile, and break seals, shortening roof life and inviting future leaks even when nothing is leaking today. Metal roof dents can damage coatings that prevent corrosion. Whether damage is truly cosmetic is an engineering and roofing question, not a label an adjuster gets to apply by eye from twenty feet away.' },
          { type: 'heading', text: 'Check Whether the Exclusion Actually Exists' },
          { type: 'para', text: 'Before accepting a cosmetic denial, read your policy. If there is no cosmetic damage exclusion or endorsement, the insurer is relying on an interpretation rather than policy language, and direct physical damage from a covered peril is generally what the policy insures. If an endorsement does exist, its scope matters: many are limited to specific roof types or specific perils.' },
          { type: 'heading', text: 'Building Your Response' },
          { type: 'para', text: 'Get an inspection from a licensed roofer or engineer who documents functional damage: mat fractures, granule loss, broken seals, cracked tiles, punctures. Photograph damage with scale references. Appearance matters too, because a roof\u2019s value includes its condition and marketability, and matching considerations can come into play when partial repairs would leave a patchwork.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Cosmetic damage denials often crumble when qualified experts examine the roof. If your Florida roof claim was denied or minimized with the cosmetic label, the attorneys at propertyinsurance.law will review the denial and your policy for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Policy endorsements and roof conditions vary.'
      },
      {
        slug: 'rcv-vs-acv-florida-property-claim',
        title: 'RCV vs ACV: What Is the Difference in a Florida Property Claim?',
        metaTitle: 'RCV vs ACV in Florida Property Claims, Explained',
        metaDescription: 'Replacement cost and actual cash value produce very different claim payments. Learn how each works in Florida and which one your policy provides.',
        category: 'Property Damage Law', tags: ['valuation', 'underpaid claims', 'coverage basics'],
        author: 'Shari Freeman', date: '2026-01-09',
        links: ['/post/recoverable-depreciation-florida-property-claim', '/post/how-florida-insurance-companies-calculate-roof-depreciation'],
        body: [
          { type: 'para', text: 'Two homes suffer identical roof damage, and one owner receives thousands of dollars more than the other. The difference often comes down to three letters on the declarations page: RCV or ACV. Understanding how each valuation method works is fundamental to knowing whether your Florida claim was paid correctly.' },
          { type: 'heading', text: 'Replacement Cost Value' },
          { type: 'para', text: 'RCV pays what it costs to repair or replace the damaged property with materials of like kind and quality at today\u2019s prices, without deducting for age. A fifteen-year-old roof destroyed by wind gets valued at the cost of a new comparable roof. Most Florida homeowners policies are written on a replacement cost basis for the dwelling, though the payment often arrives in stages, with depreciation held back until repairs are completed.' },
          { type: 'heading', text: 'Actual Cash Value' },
          { type: 'para', text: 'ACV starts with replacement cost and subtracts depreciation for age, wear, and condition. That same fifteen-year-old roof might be depreciated by half or more, leaving a payment that will not come close to funding a new roof. ACV appears in several places: policies written on an ACV basis, roof payment schedules some Florida insurers offer in exchange for lower premiums, personal property coverage without replacement cost endorsements, and the initial payment stage of an RCV claim.' },
          { type: 'heading', text: 'Where Homeowners Get Shortchanged' },
          { type: 'para', text: 'Disputes cluster around a few issues. Excessive depreciation is the big one, where the insurer assigns a short useful life or poor condition rating to drive the ACV number down. Depreciating labor, not just materials, is another recurring fight. Some carriers also fail to explain that withheld depreciation is recoverable once repairs are done, and homeowners leave that money unclaimed. Finally, roof-specific ACV endorsements sometimes surprise policyholders who believed they had full replacement coverage.' },
          { type: 'heading', text: 'Reading Your Own Policy' },
          { type: 'para', text: 'Check the declarations page and the loss settlement provisions for the dwelling and for personal property separately. Look for roof payment schedules or ACV roof endorsements added at renewal. If any of it is unclear, ask your agent in writing.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Valuation disputes are winnable because they run on documentation: contractor pricing, depreciation schedules, and policy language. If your payment reflects aggressive depreciation or an ACV basis you never agreed to, the attorneys at propertyinsurance.law will review the claim for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Loss settlement terms vary by policy and endorsement.'
      },
      {
        slug: 'insurance-engineer-inspection-florida',
        title: 'My Insurance Company Sent an Engineer. What Does That Mean?',
        metaTitle: 'Why Did the Insurance Company Send an Engineer?',
        metaDescription: 'An engineer inspection on a Florida property claim usually signals a causation dispute. Learn what to expect and how to protect your claim.',
        category: 'Insurance Dispute Advice', tags: ['investigations', 'claim process', 'roof damage'],
        author: 'James Wilson', date: '2026-01-15',
        links: ['/post/wear-and-tear-roof-claim-denial-florida', '/post/pre-existing-damage-denial-florida'],
        body: [
          { type: 'para', text: 'Your claim was moving along, and now the insurer wants to send an engineer to inspect the property. Homeowners often take this as a sign of thoroughness. Sometimes it is. More often, it signals that the insurance company is questioning what caused your damage and wants an expert report to support its position.' },
          { type: 'heading', text: 'Why Insurers Retain Engineers' },
          { type: 'para', text: 'Engineers get involved when causation is in play: whether roof damage came from wind or wear, whether cracks reflect sinkhole activity or settling, whether water intrusion was sudden or long-term, whether a structure failed from a storm or from construction defects. The engineer\u2019s report frequently becomes the centerpiece of a denial letter. Carriers use a rotating set of engineering firms, and some of those firms derive most of their business from insurance work, a relationship worth keeping in mind when reading their conclusions.' },
          { type: 'heading', text: 'What Happens at the Inspection' },
          { type: 'para', text: 'The engineer will examine the property, take photographs and measurements, and may perform tests or open small inspection areas. You are entitled to be present, and you should be. Take your own photographs of what the engineer examines and note how long the inspection lasts and what areas were and were not reviewed. A fifteen-minute walkthrough that produces a twelve-page causation report speaks for itself.' },
          { type: 'heading', text: 'Get the Report' },
          { type: 'para', text: 'Ask the insurer in writing for a complete copy of the engineer\u2019s report, including photographs and any attachments. Florida law requires insurers to explain the basis for claim decisions, and if a denial relies on the engineering opinion, you need the full document, not a summary in the denial letter. Review the report for factual errors, assumptions about the property\u2019s history, and conclusions that outrun the observations.' },
          { type: 'heading', text: 'Consider Your Own Expert' },
          { type: 'para', text: 'Engineering opinions are opinions. Independent engineers, roofers, and contractors regularly reach different conclusions after examining the same property more carefully. If the insurer\u2019s report contradicts what your own professionals have told you, a competing expert evaluation may be the most important investment in your claim.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'An engineer inspection usually means the insurer is building a file to support denial or a reduced payment. If the report arrives and the conclusions do not match the evidence, the attorneys at propertyinsurance.law can evaluate the claim, engage qualified experts, and respond. Case evaluations are free for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Expert disputes turn on the specific evidence in each claim.'
      },
      {
        slug: 'pool-cage-screen-enclosure-claim-florida',
        title: 'Are Pool Cages and Screen Enclosures Covered After a Storm?',
        metaTitle: 'Pool Cage and Screen Enclosure Claims in Florida',
        metaDescription: 'Screen enclosures and pool cages are often limited or excluded from Florida hurricane coverage. Learn how to check your policy and fight a denial.',
        category: 'Property Damage Law', tags: ['hurricane claims', 'screen enclosures', 'coverage basics'],
        author: 'J. Alex Couture', date: '2026-01-22',
        links: ['/hurricane-property-damage-lawyer', '/wind-and-hail-damage-insurance-claims'],
        body: [
          { type: 'para', text: 'Few structures announce hurricane damage like a mangled pool cage. Screen enclosures fail early in high winds, and rebuilding one can cost tens of thousands of dollars. Whether insurance pays is a question with a genuinely frustrating answer in Florida: it depends on language many homeowners have never read.' },
          { type: 'heading', text: 'Why Screen Enclosures Are Treated Differently' },
          { type: 'para', text: 'Screen enclosures, pool cages, and carports are damaged so predictably in windstorms that Florida insurers have carved them out of many policies. State law permits carriers to sell policies that exclude or limit coverage for screened enclosures and similar structures for hurricane losses, typically paired with an option to buy the coverage back for additional premium. The result is a patchwork: some homeowners have full coverage, some have a modest sublimit, and some have none for hurricane damage specifically, even though other perils remain covered.' },
          { type: 'heading', text: 'Finding Your Answer' },
          { type: 'para', text: 'Start with the declarations page, looking for a screened enclosure or hurricane coverage endorsement and any stated sublimit. Then check the policy\u2019s exclusions and any endorsement pages for language addressing screened enclosures, aluminum structures, or non-dwelling structures during hurricanes. If the documents are unclear, ask your agent in writing which coverage applies and at what limit. Doing this before storm season is worth an hour of anyone\u2019s time.' },
          { type: 'heading', text: 'When Claims Get Underpaid Anyway' },
          { type: 'para', text: 'Even with coverage in place, disputes follow familiar patterns. Insurers pay to rescreen when the frame is bent beyond reuse. They apply heavy depreciation to aluminum structures. They scope partial repairs on cages engineered as complete systems, where damaged members compromise the whole. Estimates from experienced enclosure contractors, engineering input where structural integrity is disputed, and photographs of every bent upright and torn panel all push back effectively.' },
          { type: 'heading', text: 'Do Not Forget the Rest of the Claim' },
          { type: 'para', text: 'A storm that destroyed the pool cage rarely stopped there. Roof, soffit, fascia, pool equipment, and fencing damage frequently accompany enclosure losses, and the enclosure debris itself often causes additional damage worth documenting.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your enclosure claim was denied on an exclusion you never knew existed, or the payment funds a fraction of the rebuild, the attorneys at propertyinsurance.law can review the policy language and the estimate for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Enclosure coverage varies significantly by policy and endorsement.'
      },
      {
        slug: 'notice-of-intent-litigation-florida',
        title: 'What Is a Notice of Intent to Initiate Litigation?',
        metaTitle: 'Florida\u2019s Notice of Intent to Litigate, Explained',
        metaDescription: 'Florida requires a pre-suit notice before most property insurance lawsuits. Learn what the NOI includes, the insurer\u2019s response options, and why it matters.',
        category: 'Insurance Dispute Advice', tags: ['litigation', 'claim process', 'policyholder rights'],
        author: 'Shari Freeman', date: '2026-01-29',
        links: ['/post/how-long-florida-property-insurance-lawsuit', '/post/statute-of-limitations-florida-property-insurance'],
        body: [
          { type: 'para', text: 'Suing a Florida property insurer is not as simple as filing a complaint. State law inserts a mandatory step first: a written Notice of Intent to Initiate Litigation, served on the insurer before suit. The NOI requirement shapes the endgame of nearly every Florida property dispute, and understanding it explains why the weeks before a lawsuit are often when claims finally get paid.' },
          { type: 'heading', text: 'What the NOI Requires' },
          { type: 'para', text: 'The notice must be served through the Department of Financial Services at least ten business days before filing suit, and it cannot be served before the insurer has made a coverage determination or the statutory time for one has run. The NOI states the alleged acts giving rise to the suit and, for disputes over amount, an estimate of the demand, along with supporting documentation. In substance, it lays the policyholder\u2019s litigation case on the table in advance.' },
          { type: 'heading', text: 'The Insurer\u2019s Response Options' },
          { type: 'para', text: 'The carrier must respond within the statutory window. For a denied claim, the insurer can accept coverage, continue the denial, or invoke a right it may have under the policy. For an underpayment dispute, it can respond with a settlement offer or a demand to invoke appraisal or another method of alternative dispute resolution. This structure is deliberate: the legislature built a final off-ramp before litigation, and insurers frequently use it, which means a well-supported NOI regularly produces payment or serious negotiation.' },
          { type: 'heading', text: 'Why Preparation Determines the Outcome' },
          { type: 'para', text: 'An NOI backed by a thorough estimate, expert reports, and a clean claim record presents the insurer with a clear picture of what trial would look like. A thin NOI invites a thin response. The demand figure matters too, since it frames every negotiation that follows and can affect fee and cost issues downstream.' },
          { type: 'heading', text: 'Timing Within Your Deadlines' },
          { type: 'para', text: 'The NOI adds lead time to any litigation plan, and it must fit inside the limitations period on the underlying claim. Waiting until the deadline is close to begin the pre-suit process compresses everything that follows.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'The NOI is a formal legal filing with strategic consequences, and it belongs in an attorney\u2019s hands. The attorneys at propertyinsurance.law prepare and serve notices of intent as part of litigating Florida property claims, and case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Pre-suit requirements contain detailed conditions and timelines.'
      },
      {
        slug: 'flood-vs-water-damage-florida',
        title: 'Flood Damage vs Water Damage: What Is the Difference in Florida?',
        metaTitle: 'Flood vs Water Damage: What Florida Policies Cover',
        metaDescription: 'Homeowners insurance and flood insurance cover different things. Learn where the line falls in Florida and why insurers blame flood after storms.',
        category: 'Property Damage Law', tags: ['flood', 'water damage', 'hurricane claims'],
        author: 'James Wilson', date: '2026-02-04',
        links: ['/hurricane-property-damage-lawyer', '/post/common-reasons-florida-hurricane-claims-denied'],
        body: [
          { type: 'para', text: 'After a major storm, Florida homeowners often learn a hard lesson: the word "flood" means something very specific in insurance, and it is excluded from standard homeowners policies. Understanding the difference between flood damage and water damage can determine whether your claim gets paid.' },
          { type: 'heading', text: 'The Basic Distinction' },
          { type: 'para', text: 'Homeowners insurance generally covers water that comes from above or from within the home. Rain driven through a wind-damaged roof, a burst pipe, an overflowing appliance: these fall on the homeowners side of the line. Flood insurance covers rising water from outside, such as storm surge, overflowing rivers and lakes, and surface water accumulating on normally dry land. Flood coverage comes from a separate policy, most commonly through the National Flood Insurance Program or a private flood carrier.' },
          { type: 'heading', text: 'Why the Line Matters After Hurricanes' },
          { type: 'para', text: 'Hurricanes produce both wind damage and flooding, often at the same property. That creates the classic dispute: the homeowners insurer says rising water caused the damage and denies the claim, while the flood carrier, if one exists, points at wind. Homeowners without flood coverage face the harshest version, where the homeowners insurer attributes as much damage as possible to excluded flood. Where wind and water each contributed, the outcome can depend on your policy\u2019s specific language and how Florida law treats losses with multiple causes, which is a fact-intensive question worth professional review.' },
          { type: 'heading', text: 'Evidence Decides These Disputes' },
          { type: 'para', text: 'Water lines on walls, the direction of debris, meteorological data, and the sequence of events all matter. Photographs taken during and immediately after the storm are extremely valuable. Wind damage to the roof or openings that preceded water intrusion supports coverage under the homeowners policy. Neighbors\u2019 observations and time-stamped video can establish when surge arrived versus when the roof failed.' },
          { type: 'heading', text: 'Practical Takeaways' },
          { type: 'para', text: 'If you live anywhere near water or in a low-lying area, look at flood coverage before you need it, because the gap between the two policy types is where uninsured losses live. After a storm, document everything early and report to every potentially applicable policy. Never accept a flood-based denial at face value when wind clearly played a role in the loss.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Wind versus flood disputes are some of the most heavily litigated issues in Florida property insurance. If your hurricane claim was denied on flood grounds, the attorneys at propertyinsurance.law can evaluate the evidence and your policy language for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Causation disputes depend on the facts of each loss.'
      },
      {
        slug: 'how-to-read-denial-letter-florida',
        title: 'How Do I Read My Insurance Claim Denial Letter?',
        metaTitle: 'How to Read Your Claim Denial Letter',
        metaDescription: 'A Florida denial letter must explain the basis for denial. Learn how to decode the letter, spot weak denials, and decide your next step.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'claim process', 'policyholder rights'],
        author: 'Shari Freeman', date: '2026-02-11',
        links: ['/denied-homeowners-insurance-claims', '/post/is-it-worth-hiring-attorney-florida-insurance-claim'],
        body: [
          { type: 'para', text: 'A denial letter lands with real weight, but it rewards careful reading. Florida law requires your insurer to provide a reasonable written explanation of the basis for a denial, tied to the policy and the facts. Once you know what to look for, the letter tells you a great deal about how strong, or how weak, the insurer\u2019s position actually is.' },
          { type: 'heading', text: 'Find the Cited Provisions' },
          { type: 'para', text: 'Every legitimate denial rests on specific policy language: an exclusion, a condition, a definition, or a coverage limitation. Locate each provision the letter cites, then pull your full policy and read that language in context, including any exceptions. Denials sometimes quote an exclusion while omitting the exception that follows it in the very next sentence of the policy.' },
          { type: 'heading', text: 'Match the Reason to Your Facts' },
          { type: 'para', text: 'Take each stated reason and test it against reality. If the letter says wear and tear, does your roofer\u2019s report document storm damage? If it says late notice, when did the loss actually occur and when did you report it? If it claims gradual leakage, what does the plumber say about the failure? A denial reciting boilerplate that does not fit your loss is vulnerable.' },
          { type: 'heading', text: 'Watch for Vague or Shifting Reasons' },
          { type: 'para', text: 'Weak denials share telltale signs: generic language that could apply to any claim, conclusions without supporting facts, reliance on an inspection report you were never given, or reasons that changed from earlier communications. You are entitled to ask for the documents behind the denial, including estimates and any engineer reports, and the insurer\u2019s willingness or reluctance to provide them is informative.' },
          { type: 'heading', text: 'Note Your Deadlines' },
          { type: 'para', text: 'A denial does not stop the clock. Florida law currently allows a lawsuit for breach of a property insurance policy within five years from the date of loss, and separate notice requirements apply before suit. Supplemental claim deadlines may also still be running. Mark the dates and do not let a slow back-and-forth with the carrier consume your window.' },
          { type: 'heading', text: 'What to Do Next' },
          { type: 'para', text: 'Gather your evidence, obtain independent expert opinions on the disputed issues, and put your position in writing. Many denials get reversed or renegotiated when confronted with documentation. Others require escalation.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If any part of the denial does not match your policy or your facts, have it reviewed. The attorneys at propertyinsurance.law read denial letters for Florida policyholders every day and offer free case evaluations.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Deadlines and remedies depend on your policy and loss date.'
      },
      {
        slug: 'vacancy-exclusion-denial-florida',
        title: 'Can My Claim Be Denied Because My Home Was Vacant?',
        metaTitle: 'Denied Because Your Home Was Vacant? What to Know',
        metaDescription: 'Vacancy provisions can limit or void Florida coverage. Learn the difference between vacant and unoccupied and when a vacancy denial may be wrong.',
        category: 'Insurance Dispute Advice', tags: ['exclusions', 'denied claims', 'coverage basics'],
        author: 'James Wilson', date: '2026-02-17',
        links: ['/denied-homeowners-insurance-claims', '/post/water-damage-claim-denied-florida'],
        body: [
          { type: 'para', text: 'A pipe bursts in a house between tenants, or storm damage hits a home while the owner is away for the season, and the insurance company denies the claim because the property was vacant. Vacancy provisions are common in Florida policies, and they trip up snowbirds, landlords, heirs handling estates, and anyone renovating or selling a home. The denial, however, is not always right.' },
          { type: 'heading', text: 'Vacant Is Not the Same as Unoccupied' },
          { type: 'para', text: 'Insurance law draws a meaningful line between these words. A home is generally unoccupied when the residents are temporarily away but their furnishings and belongings remain, the way a seasonal resident leaves a furnished Florida home for the summer. A home is generally vacant when it is substantially empty of furnishings and no one is living there. Policies treat the two very differently, and insurers sometimes label an unoccupied home vacant to reach a denial.' },
          { type: 'heading', text: 'What Vacancy Provisions Do' },
          { type: 'para', text: 'Some policies exclude specific perils, such as vandalism or water damage, after the home has been vacant for a stated period, often 30 or 60 days. Others reduce coverage or impose conditions. The details vary by policy form, which makes the exact language essential. A denial that recites "the home was vacant" without matching the facts to the policy\u2019s actual definition and time period deserves skepticism.' },
          { type: 'heading', text: 'Common Fights in Vacancy Denials' },
          { type: 'para', text: 'Disputes usually center on three questions. Was the home truly vacant under the policy\u2019s definition, or merely unoccupied? Had the vacancy lasted long enough to trigger the provision? And does the provision even apply to the peril that caused this loss? Furniture in the home, utilities on, regular visits by the owner or a property manager, and a home actively listed for sale with staging all cut against vacancy findings.' },
          { type: 'heading', text: 'Protecting Yourself Going Forward' },
          { type: 'para', text: 'If a home will sit empty, tell your agent and ask about vacancy or landlord coverage, because the right endorsement prevents this fight entirely. Keep utilities on, have someone check the property regularly, and document the home\u2019s furnished condition with dated photographs.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Vacancy denials frequently rest on assumptions rather than facts. If your Florida claim was denied on vacancy grounds, the attorneys at propertyinsurance.law can compare the policy language to the actual condition of your home and evaluate the denial for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Vacancy definitions and time periods differ across policies.'
      },
      {
        slug: 'additional-living-expense-ale-florida',
        title: 'What Is Additional Living Expense (ALE) Coverage in Florida?',
        metaTitle: 'ALE Coverage: Who Pays When You Can\'t Live at Home',
        metaDescription: 'When damage makes your Florida home unlivable, ALE coverage pays temporary living costs. Learn what qualifies, what to document, and common disputes.',
        category: 'Property Damage Law', tags: ['ALE', 'claim process', 'hurricane claims'],
        author: 'Shari Freeman', date: '2026-02-24',
        links: ['/hurricane-property-damage-lawyer', '/post/what-to-do-after-hurricane-damage-florida'],
        body: [
          { type: 'para', text: 'A covered loss that pushes your family out of the house creates two financial problems at once: repairing the home and paying to live somewhere else while it happens. Additional living expense coverage, sometimes labeled loss of use, exists for the second problem. Used correctly, it keeps a disaster from doubling.' },
          { type: 'heading', text: 'What ALE Pays For' },
          { type: 'para', text: 'ALE covers the increase in your living costs caused by a covered loss that makes the home uninhabitable. The word increase matters: the coverage pays the difference between your normal expenses and what you spend while displaced. Hotel bills, a short-term rental, restaurant meals beyond your normal grocery spending, laundry service, pet boarding, additional commuting mileage, and storage of belongings during repairs all commonly qualify. Your mortgage does not, because you owed that anyway.' },
          { type: 'heading', text: 'When the Home Qualifies as Uninhabitable' },
          { type: 'para', text: 'Total destruction obviously triggers ALE, but so do less dramatic conditions: no working kitchen or bathroom, no power or water, active roof leaks over living space, contamination from smoke or sewage, or repair work that makes occupancy unreasonable. Insurers sometimes push families to remain in partially damaged homes to limit ALE exposure. Whether a home is reasonably fit to live in is judged by common sense, not by the insurer\u2019s budget.' },
          { type: 'heading', text: 'Limits and Duration' },
          { type: 'para', text: 'Check your declarations page for the ALE limit, often expressed as a percentage of dwelling coverage or a stated dollar amount, and note any time limits in the policy. Payments continue while repairs proceed with reasonable diligence, which is one more reason insurer delays cost homeowners real money. Where the insurer\u2019s own slow adjusting extends your displacement, document that timeline carefully.' },
          { type: 'heading', text: 'Documentation Wins ALE Disputes' },
          { type: 'para', text: 'Keep every receipt from day one: lodging, meals, mileage, storage, and incidentals. Note your normal monthly costs for comparison, since the claim is measured against them. Get the insurer\u2019s ALE decisions in writing, including any daily or monthly caps it claims apply.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'ALE disputes typically involve insurers cutting off payments prematurely, disputing habitability, or nickel-and-diming receipts while a family lives in limbo. The attorneys at propertyinsurance.law handle ALE alongside the underlying property claim and offer free case evaluations for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. ALE limits and terms vary by policy.'
      },
      {
        slug: 'failure-to-mitigate-denial-florida',
        title: 'Can My Insurer Deny My Claim for Failure to Mitigate?',
        metaTitle: 'Denied for Failure to Mitigate? Know Your Rights',
        metaDescription: 'Florida insurers deny claims arguing homeowners failed to prevent further damage. Learn what the duty to mitigate really requires and how to respond.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'mitigation', 'policy duties'],
        author: 'James Wilson', date: '2026-03-03',
        links: ['/post/cleanup-before-adjuster-inspection-florida', '/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'Your policy requires you to take reasonable steps to protect your property from further damage after a loss. Insurers sometimes turn that duty into a weapon, denying claims or slashing payments on the theory that the homeowner let the damage get worse. If your denial letter mentions failure to mitigate, here is what you need to know.' },
          { type: 'heading', text: 'What the Duty Actually Requires' },
          { type: 'para', text: 'The mitigation duty calls for reasonable emergency measures: shutting off water, tarping a damaged roof, drying wet materials, boarding broken openings. Reasonable is the operative word. The law does not expect homeowners to perform miracles, spend unlimited money, or complete professional-grade repairs overnight. It expects sensible steps a prudent person would take under the circumstances.' },
          { type: 'heading', text: 'How Insurers Misuse the Argument' },
          { type: 'para', text: 'Failure to mitigate arguments show up in predictable ways. The insurer blames the homeowner for mold that developed while the carrier itself delayed the inspection. It attributes interior damage to a homeowner\u2019s slow tarp job rather than the storm that broke the roof. It refuses payment for damage progression during weeks the homeowner spent waiting for the insurer\u2019s own adjuster. In each scenario, the carrier shifts responsibility for its process onto the policyholder.' },
          { type: 'heading', text: 'The Insurer\u2019s Delay Cuts Against Its Own Argument' },
          { type: 'para', text: 'Florida law gives insurers specific obligations after a claim is reported, including acknowledging the claim within days and conducting a timely inspection. When damage worsens during a period of insurer delay, that timeline becomes powerful evidence. A carrier that took weeks to inspect is poorly positioned to blame the homeowner for conditions that developed in the meantime.' },
          { type: 'heading', text: 'How to Respond' },
          { type: 'para', text: 'Reconstruct your timeline in writing: date of loss, date reported, what you did and when, every call and email with the insurer, and the inspection date. Gather receipts for tarps, extraction, drying, and any emergency vendor. Photographs taken at different points establish what damage existed when. If the denial rests on speculation about what you should have done, an attorney can test that theory against the actual record.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Mitigation denials often collapse under scrutiny because the homeowner acted reasonably and the record proves it. If your Florida claim was denied or reduced on mitigation grounds, the attorneys at propertyinsurance.law will review your claim for free and explain your options.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Outcomes depend on the specific facts and policy language.'
      },
      {
        slug: 'business-interruption-coverage-florida',
        title: 'What Is Business Interruption Coverage in a Commercial Property Claim?',
        metaTitle: 'Business Interruption Coverage in Florida, Explained',
        metaDescription: 'Business interruption coverage replaces income lost when property damage shuts you down. Learn how it works in Florida and why these claims get disputed.',
        category: 'Property Damage Law', tags: ['commercial claims', 'business interruption', 'hurricane claims'],
        author: 'J. Alex Couture', date: '2026-03-09',
        links: ['/commercial-property-insurance-claims', '/hurricane-property-damage-lawyer'],
        body: [
          { type: 'para', text: 'A storm, fire, or water loss that closes a business inflicts two distinct wounds: the physical damage and the revenue that stops while the doors are shut. Business interruption coverage, often called business income coverage, addresses the second wound. For Florida business owners, it can matter more than the property damage itself, and it is among the most heavily disputed coverages in commercial claims.' },
          { type: 'heading', text: 'What the Coverage Does' },
          { type: 'para', text: 'Business interruption coverage typically replaces the net income the business would have earned during the shutdown, plus continuing normal operating expenses such as payroll, rent, and loan payments. Most forms require direct physical loss or damage to the insured property from a covered peril, and the interruption must result from that damage. Related coverages often ride along: extra expense coverage for costs incurred to keep operating, and in some policies, civil authority coverage when government orders block access after a covered event in the area.' },
          { type: 'heading', text: 'The Period of Restoration' },
          { type: 'para', text: 'Payments run through the period of restoration, generally the time reasonably required to repair the damage and resume operations. Fights over this period are constant. Insurers argue repairs should have taken four months; the contractor reality was ten. Supply chain delays, permitting, and Florida’s post-storm construction backlogs all belong in that analysis, and a business should document every cause of delay outside its control.' },
          { type: 'heading', text: 'Proving the Numbers' },
          { type: 'para', text: 'These claims are accounting-intensive. Expect to produce historical financials, tax returns, sales records, and projections, and expect the insurer’s forensic accountants to challenge them. Seasonality matters enormously for Florida businesses, since losing three months that include your peak season is not the same as losing three slow months. A well-supported claim models what the business would have done, not just what it averaged.' },
          { type: 'heading', text: 'Common Disputes' },
          { type: 'para', text: 'Recurring battlegrounds include whether physical damage actually caused the shutdown, how long restoration should reasonably take, which expenses count as continuing, and lowball income projections. Underpayment here compounds daily, because an underfunded business recovers slower, which insurers then use to question the projections.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Business interruption claims reward preparation and punish improvisation. The attorneys at propertyinsurance.law handle commercial property and business income disputes across Florida and offer free case evaluations for business owners facing a shutdown loss.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Commercial forms vary widely, and coverage depends on your specific policy.'
      },
      {
        slug: 'sworn-proof-of-loss-florida',
        title: 'What Is a Sworn Proof of Loss and Do I Have to Submit One?',
        metaTitle: 'Sworn Proof of Loss: What It Is and Why It Matters',
        metaDescription: 'A sworn proof of loss is a signed, notarized claim statement Florida insurers can require. Learn what it involves and the risks of getting it wrong.',
        category: 'Insurance Dispute Advice', tags: ['claim process', 'policy duties', 'documentation'],
        author: 'Zaf Goss', date: '2026-03-16',
        links: ['/post/examination-under-oath-florida-property-claim', '/post/insurance-misrepresentation-accusation-florida'],
        body: [
          { type: 'para', text: 'Among the documents an insurance company can demand after a loss, the sworn proof of loss carries the most weight and the most risk. It looks like a routine form. It is actually a sworn statement, signed under penalty of perjury, that the insurer can hold against you for the life of the claim. Treat it accordingly.' },
          { type: 'heading', text: 'What the Document Is' },
          { type: 'para', text: 'A proof of loss is a formal statement of your claim: the date, time, and cause of loss, your interest in the property, other insurance, and the amount you claim. When your policy or the insurer requires it to be sworn, you sign before a notary attesting the contents are true. Policies typically require submission within a stated period after the insurer requests it, and 60 days is a common window. Check your policy’s exact language, because the obligation usually triggers on the insurer’s demand.' },
          { type: 'heading', text: 'Why It Matters So Much' },
          { type: 'para', text: 'Compliance with the proof of loss requirement is a policy condition, and insurers raise noncompliance as a defense to payment. Submitting late, leaving sections blank, or refusing outright hands the carrier an argument. At the same time, the sworn contents become a fixed record. Insurers compare the proof of loss against your recorded statement, your examination under oath testimony, your estimates, and your eventual lawsuit, hunting for inconsistencies to recast as misrepresentation.' },
          { type: 'heading', text: 'The Amount Question' },
          { type: 'para', text: 'Homeowners agonize over the claimed amount, and reasonably so. Stating an amount before the full scope of damage is known is genuinely difficult, especially with hidden water damage or ongoing repairs. Supporting the figure with a detailed estimate, and being clear about what the number is based on, protects you far better than a guess. Amounts can generally be supplemented as damage is discovered, but a wildly unsupported figure invites trouble in both directions.' },
          { type: 'heading', text: 'Handling the Request' },
          { type: 'para', text: 'Calendar the deadline the moment the demand arrives. Gather your estimates and documentation before completing the form rather than after. Answer accurately, and where you genuinely do not know something, say so rather than guessing under oath. Keep a complete copy of what you submit and proof of when you sent it.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If a sworn proof of loss demand has arrived on a disputed claim, or the insurer is pairing it with an examination under oath, the attorneys at propertyinsurance.law can prepare the submission with you. Free case evaluations are available for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Proof of loss requirements vary by policy.'
      },
      {
        slug: 'sinkhole-coverage-florida',
        title: 'Does Florida Homeowners Insurance Cover Sinkholes?',
        metaTitle: 'Does Florida Insurance Cover Sinkholes?',
        metaDescription: 'Florida policies cover catastrophic ground cover collapse, but full sinkhole coverage is optional. Learn the difference and how these claims work.',
        category: 'Property Damage Law', tags: ['sinkholes', 'coverage basics', 'structural damage'],
        author: 'J. Alex Couture', date: '2026-03-22',
        links: ['/denied-homeowners-insurance-claims', '/post/pre-existing-damage-denial-florida'],
        body: [
          { type: 'para', text: 'Florida sits on limestone, and limestone dissolves. Sinkholes and ground settlement damage homes across the state every year, particularly in Central Florida. Whether insurance responds depends on a distinction in Florida law that many homeowners have never heard of until cracks appear in their walls.' },
          { type: 'heading', text: 'Two Different Coverages' },
          { type: 'para', text: 'Florida law requires homeowners policies to cover catastrophic ground cover collapse. That coverage applies when strict criteria are met, generally including an abrupt collapse of the ground cover, a visible depression, structural damage to the building including the foundation, and condemnation of the structure. It is real protection, but only for the most severe events.' },
          { type: 'para', text: 'Sinkhole loss coverage is broader and optional. Insurers must make it available for an additional premium, and it covers structural damage caused by sinkhole activity even without a catastrophic collapse. Many homeowners decline it or never realize it was offered, then discover the gap when settlement cracks spread through the home.' },
          { type: 'heading', text: 'Where These Claims Get Difficult' },
          { type: 'para', text: 'Cracking in walls, floors, and foundations has many possible causes: sinkhole activity, soil shrinkage, construction issues, or ordinary settling. Insurers deny sinkhole-related claims by attributing damage to excluded earth movement or settling rather than sinkhole activity. The disputes turn on subsurface investigation, which can involve geotechnical engineers, soil borings, and ground-penetrating testing. Florida law also provides a neutral evaluation process for sinkhole disputes, an option worth understanding before litigation.' },
          { type: 'heading', text: 'Signs Worth Taking Seriously' },
          { type: 'para', text: 'New or widening cracks in walls, stair-step cracking in block or stucco, doors and windows that no longer close, sloping floors, separation between walls and ceilings, and depressions in the yard all justify attention. Photograph and date everything, and monitor whether conditions progress.' },
          { type: 'heading', text: 'What to Do If You Suspect Sinkhole Activity' },
          { type: 'para', text: 'Report the concern to your insurer and request testing where the policy provides for it. Review your policy to determine whether you carry sinkhole loss coverage or only catastrophic ground cover collapse. Be cautious with quick denials that blame settling without meaningful subsurface investigation.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Sinkhole claims combine technical evidence with dense policy language, and denials are common. The attorneys at propertyinsurance.law represent Central Florida homeowners in these disputes and offer a free case evaluation.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Sinkhole coverage terms and statutory criteria are detailed and fact-specific.'
      },
      {
        slug: 'insurance-company-insolvent-figa-florida',
        title: 'What Happens If My Insurance Company Goes Insolvent?',
        metaTitle: 'When Your Florida Insurer Becomes Insolvent',
        metaDescription: 'If a Florida property insurer is liquidated, FIGA steps in on covered claims. Learn how the process works, the caps that apply, and how to protect a claim.',
        category: 'Insurance Dispute Advice', tags: ['FIGA', 'insolvency', 'claim process'],
        author: 'Zaf Goss', date: '2026-03-29',
        links: ['/delayed-insurance-claims-florida', '/post/how-to-read-denial-letter-florida'],
        body: [
          { type: 'para', text: 'Florida has watched multiple property insurers fail in recent years, sometimes with thousands of open claims on their books. Policyholders caught in a liquidation face an unsettling question: who pays my claim now? Florida built an answer into its insurance system, and while the process is slower and more constrained than dealing with a healthy carrier, claims do not simply vanish.' },
          { type: 'heading', text: 'FIGA Steps In' },
          { type: 'para', text: 'When a Florida court orders an insurer into liquidation, the Florida Insurance Guaranty Association assumes responsibility for the company’s covered claims. FIGA is a statutory safety net funded through assessments on the insurance industry, and it processes and pays eligible claims that the failed insurer left behind. Your claim file transfers into FIGA’s system, gets assigned to its adjusters, and proceeds under FIGA’s statutory framework.' },
          { type: 'heading', text: 'What Changes for Your Claim' },
          { type: 'para', text: 'FIGA is not a full substitute for your insurer. Statutory caps limit what FIGA pays on a covered claim, a small statutory deductible applies, and certain claim types and amounts fall outside its obligations entirely. Deadlines change too: the liquidation order sets a bar date for filing claims with the receiver and FIGA, and missing it can forfeit recovery. Expect slower processing as FIGA absorbs an entire company’s inventory, and expect its adjusters to evaluate the claim fresh.' },
          { type: 'heading', text: 'Your Policy Also Ends' },
          { type: 'para', text: 'Liquidation cancels the failed insurer’s policies on a schedule set in the order, which means finding replacement coverage immediately is part of the emergency. Going bare in Florida, even briefly, is a risk not worth taking, and lenders will force-place expensive coverage if you delay.' },
          { type: 'heading', text: 'Protecting Yourself in the Process' },
          { type: 'para', text: 'Watch for official notices from the receiver and FIGA and respond to every one by its deadline. Resubmit your complete claim documentation rather than assuming the file transferred intact. Keep pursuing the claim actively, since FIGA disputes get resolved the same way insurer disputes do: with documentation, persistence, and, where necessary, legal action.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Insolvency adds a layer of statutory procedure on top of an ordinary claim dispute, with deadlines that forgive nothing. The attorneys at propertyinsurance.law handle claims through FIGA and receiverships for Florida policyholders, and case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. FIGA’s caps, deadlines, and procedures are set by statute and court order.'
      },
      {
        slug: 'mold-damage-insurance-coverage-florida',
        title: 'Does Homeowners Insurance Cover Mold Damage in Florida?',
        metaTitle: 'Does Homeowners Insurance Cover Mold in Florida?',
        metaDescription: 'Mold coverage in Florida depends on what caused it. Learn when mold is covered, how policy sublimits work, and what to do if your claim is denied.',
        category: 'Property Damage Law', tags: ['mold', 'water damage', 'coverage basics'],
        author: 'James Wilson', date: '2026-04-05',
        links: ['/water-damage-insurance-claims', '/post/water-damage-claim-denied-florida'],
        body: [
          { type: 'para', text: 'Mold and Florida go together, unfortunately. High humidity, frequent storms, and hidden plumbing leaks create ideal conditions for mold growth. Whether your homeowners insurance pays for it comes down to two questions: what caused the mold, and what does your policy say about mold specifically.' },
          { type: 'heading', text: 'The Cause Determines Coverage' },
          { type: 'para', text: 'Mold is almost never covered as a standalone peril. Instead, coverage typically follows the water event that produced it. If mold grows because a pipe burst last week and the water damage is covered, the resulting mold remediation is often covered as part of that claim. If mold developed from long-term humidity, poor ventilation, or a leak that went unaddressed for months, insurers deny it as a maintenance issue or excluded gradual damage.' },
          { type: 'heading', text: 'Watch for Mold Sublimits' },
          { type: 'para', text: 'Even when mold is covered, most Florida policies cap what the insurer will pay for it. Many policies contain a mold sublimit, and $10,000 is a common figure, though your policy may set a different amount or offer optional higher limits. Remediation of a significant mold problem can cost far more than a standard sublimit, which makes it important to understand how the insurer is categorizing each part of the loss. Tear-out, drying, and repair of water-damaged materials are not necessarily “mold” costs, and lumping everything under the sublimit can shortchange a claim.' },
          { type: 'heading', text: 'How These Claims Go Wrong' },
          { type: 'para', text: 'Timing is the most common battlefield. The insurer argues the underlying leak was gradual, which pulls both the water damage and the mold outside coverage. Adjusters also sometimes attribute all visible damage to mold in order to apply the sublimit to the entire loss. Both positions can be challenged with proper documentation and expert support.' },
          { type: 'heading', text: 'Protecting Yourself' },
          { type: 'para', text: 'Address water intrusion immediately and document your response, because acting promptly both limits mold growth and defeats arguments that you sat on the problem. Photograph the water source, the damage, and any visible mold. Consider a licensed mold assessor for significant growth, since Florida licenses mold assessment and remediation professionals separately, and an independent assessment carries weight. Keep remediation and repair invoices itemized so covered water damage is not miscategorized as capped mold expense.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your mold claim was denied, or the insurer is forcing your entire loss under a small sublimit, the attorneys at propertyinsurance.law can review your policy and your claim at no cost and explain what you are actually owed.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Mold coverage varies significantly between policies.'
      },
      {
        slug: 'adjuster-stopped-responding-florida',
        title: 'What Should I Do If My Insurance Adjuster Stops Responding?',
        metaTitle: 'Adjuster Not Responding? Here’s What to Do',
        metaDescription: 'A silent adjuster does not pause your Florida claim deadlines. Learn the steps that create accountability when your insurer goes dark.',
        category: 'Insurance Dispute Advice', tags: ['delayed claims', 'claim process', 'policyholder rights'],
        author: 'Shari Freeman', date: '2026-04-11',
        links: ['/delayed-insurance-claims-florida', '/post/how-long-insurer-pay-claim-florida'],
        body: [
          { type: 'para', text: 'Calls go to voicemail. Emails vanish. The claim portal shows the same status it showed a month ago. An unresponsive adjuster is one of the most common complaints Florida policyholders raise, and it is more than an annoyance: silence delays repairs, extends displacement, and steadily runs down your deadlines. Here is how to respond in a way that creates accountability.' },
          { type: 'heading', text: 'Put Everything in Writing' },
          { type: 'para', text: 'Shift the relationship from phone tag to paper. Send a dated email or letter summarizing the claim status, the outstanding items, and the specific response you need, and keep copies. Florida law requires insurers to review and acknowledge claim communications within 7 calendar days, so every unanswered written message becomes a documented violation rather than a forgettable voicemail.' },
          { type: 'heading', text: 'Go Over the Adjuster’s Head' },
          { type: 'para', text: 'Adjusters have supervisors, and carriers have claim departments with escalation paths. Ask, in writing, for the adjuster’s supervisor and for confirmation of who currently has authority over the file. Reassignments happen constantly, and sometimes the silence simply means your adjuster left the company and nobody picked up the file, which is the carrier’s problem to fix, not yours.' },
          { type: 'heading', text: 'Invoke the Statutory Clock' },
          { type: 'para', text: 'Florida gives insurers 60 days after receiving notice of a claim to pay or deny it, along with a 30 day window for physical inspection after proof of loss statements are received. When those deadlines pass, say so specifically in writing and request the overdue decision. Late payments accrue statutory interest, and a documented timeline of missed deadlines strengthens every later remedy, from complaints to litigation.' },
          { type: 'heading', text: 'Use the State’s Consumer Tools' },
          { type: 'para', text: 'The Florida Department of Financial Services accepts consumer complaints against insurers and requires carriers to respond. A DFS complaint costs nothing, creates an official record, and has a way of producing the callback that six voicemails could not.' },
          { type: 'heading', text: 'Keep Your Own File Complete' },
          { type: 'para', text: 'Log every contact attempt with dates. Preserve photographs, estimates, invoices, and all correspondence. A complete file lets whoever eventually acts on the claim, whether a new adjuster or your attorney, move immediately.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Prolonged silence is a claims-handling failure, and it rarely fixes itself. The attorneys at propertyinsurance.law take over stalled Florida claims, enforce the deadlines, and pursue the payment. Case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Remedies for delay depend on your claim’s specific timeline.'
      },
      {
        slug: 'document-home-before-hurricane-season',
        title: 'How to Document Your Home Before Hurricane Season',
        metaTitle: 'Document Your Home Before Hurricane Season',
        metaDescription: 'Pre-storm documentation is the cheapest insurance claim tool that exists. A room-by-room guide for Florida homeowners before hurricane season.',
        category: 'Insurance Dispute Advice', tags: ['hurricane claims', 'documentation', 'preparation'],
        author: 'Zaf Goss', date: '2026-04-18',
        links: ['/post/what-to-do-after-hurricane-damage-florida', '/hurricane-property-damage-lawyer'],
        body: [
          { type: 'para', text: 'Every hurricane claim dispute eventually comes down to one question: what did the property look like before the storm? Insurers answer it with assumptions about wear, age, and pre-existing damage. Homeowners with documentation answer it with evidence. An afternoon of effort each spring builds the single most valuable file a Florida policyholder can own, and it costs nothing.' },
          { type: 'heading', text: 'Walk the Exterior on Video' },
          { type: 'para', text: 'Record slow video of the entire exterior: every elevation, the roof from the ground and from any safe vantage, gutters, soffit, fascia, screens, the pool cage, fencing, driveways, and landscaping. Narrate the date as you film. Photograph the roof up close if a roofer or drone inspection is available, because pre-storm roof condition is the most litigated fact in Florida hurricane claims, and a dated photo set of intact shingles or tiles dismantles a wear and tear denial before it starts.' },
          { type: 'heading', text: 'Inventory the Interior Room by Room' },
          { type: 'para', text: 'Open every closet and cabinet while filming. Capture furniture, electronics, appliances, artwork, and finishes, with close-ups of high-value items, model numbers, and serial numbers. A spreadsheet helps but is not required; comprehensive video alone reconstructs a contents claim remarkably well. Store receipts and appraisals for valuables with the file.' },
          { type: 'heading', text: 'Gather Your Papers' },
          { type: 'para', text: 'Keep a current copy of your full insurance policy, not just the declarations page, along with your agent’s contact information, recent roof or home inspection reports, and permits from any renovations. After a storm hits, carriers are slow and websites crash; having the policy in hand on day one matters.' },
          { type: 'heading', text: 'Store It Where the Storm Cannot Reach' },
          { type: 'para', text: 'Upload everything to cloud storage and email yourself a copy. Documentation that rides out the hurricane inside the house it was meant to protect has a design flaw.' },
          { type: 'heading', text: 'Refresh It Annually' },
          { type: 'para', text: 'Repeat the process each spring and after any renovation or major purchase. Five minutes of updated video beats an hour of arguing with an adjuster about when the kitchen was remodeled.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If a storm does come and the claim goes sideways, that file becomes the foundation of the fight. The attorneys at propertyinsurance.law put pre-storm documentation to work in Florida hurricane disputes every season, and case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice.'
      },
      {
        slug: 'supplemental-claim-florida-explained',
        title: 'What Is a Supplemental Claim in a Florida Property Insurance Case?',
        metaTitle: 'Supplemental Claims in Florida: How They Work',
        metaDescription: 'Found more damage after your Florida claim was paid? Learn how supplemental claims work, the 18 month deadline, and how to document additional damage.',
        category: 'Property Damage Law', tags: ['claim process', 'supplemental claims', 'deadlines'],
        author: 'James Wilson', date: '2026-04-25',
        links: ['/post/reopen-closed-florida-insurance-claim', '/post/late-notice-denial-florida-insurance-claim'],
        body: [
          { type: 'para', text: 'Repairs begin, walls open up, and the contractor finds damage nobody scoped: soaked insulation, rotted decking, hidden water migration two rooms over. The original payment will not cover it. Florida law anticipates this situation through supplemental claims, and knowing how they work protects you from eating costs the insurer owes.' },
          { type: 'heading', text: 'What Counts as a Supplemental Claim' },
          { type: 'para', text: 'A supplemental claim seeks payment for additional loss or damage from the same peril the insurer already adjusted, or for costs incurred while completing repairs under a timely reported claim. It is different from a reopened claim, which involves a closed claim revisited for additional costs on damage previously disclosed, and different from a brand new claim for a separate event. The categories matter because different deadlines attach to each.' },
          { type: 'heading', text: 'The Deadline Is Real' },
          { type: 'para', text: 'Under Florida law, notice of a supplemental claim must generally be given within 18 months after the date of loss. That clock runs from the loss itself, not from when repairs revealed the additional damage. Hurricane repairs in particular often stretch across a year or more due to contractor backlogs, and homeowners can drift past the supplemental window without realizing a deadline existed. Calendar the date of loss and work backward.' },
          { type: 'heading', text: 'Building a Supplemental Claim That Gets Paid' },
          { type: 'para', text: 'Documentation carries these claims. Photograph hidden damage as it is discovered, before it is repaired, with context showing where in the home it sits. Have the contractor prepare a written supplemental estimate itemizing the additional scope with pricing. Tie the new damage to the original peril, because the insurer’s first move is often to attribute it to something else: age, a different event, or the contractor’s own work. Submit everything in writing and request a reinspection where the damage is significant.' },
          { type: 'heading', text: 'Expect Pushback' },
          { type: 'para', text: 'Insurers scrutinize supplements harder than original claims. Common responses include partial payments, disputes over causation, and assertions that the damage was visible during the original inspection and is therefore closed. None of those positions is automatically correct.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your supplemental claim was denied, underpaid, or ignored, or you are approaching the 18 month mark with unresolved damage, the attorneys at propertyinsurance.law can step in. Case evaluations are free for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Deadlines depend on your date of loss and claim history.'
      },
      {
        slug: 'cost-property-insurance-attorney-florida',
        title: 'How Much Does It Cost to Hire a Property Insurance Attorney?',
        metaTitle: 'What a Property Insurance Attorney Costs in Florida',
        metaDescription: 'Most Florida policyholder attorneys work on contingency: no recovery, no fee. Learn how the fees work and what recent law changes mean for your claim.',
        category: 'Insurance Dispute Advice', tags: ['hiring an attorney', 'fees', 'policyholder rights'],
        author: 'Zaf Goss', date: '2026-05-01',
        links: ['/post/is-it-worth-hiring-attorney-florida-insurance-claim', '/post/public-adjuster-vs-attorney-florida'],
        body: [
          { type: 'para', text: 'The homeowner staring at a wrongful denial and a depleted savings account assumes a lawyer is a luxury. It is the most understandable misconception in this field, and the most costly, because the economics of policyholder representation are built precisely for people in that position.' },
          { type: 'heading', text: 'Contingency Is the Standard' },
          { type: 'para', text: 'Attorneys who represent Florida policyholders against insurance companies overwhelmingly work on contingency: the fee is a percentage of what the attorney recovers for you, and if there is no recovery, there is no fee. Consultations at reputable firms are free, and case costs, such as experts and filing fees, are typically advanced by the firm and reimbursed from the recovery. The practical result is that a homeowner can put an attorney against the insurer’s legal department without writing a check, which is the entire point of the model.' },
          { type: 'heading', text: 'What Changed in Florida Law' },
          { type: 'para', text: 'For decades, Florida statutes required insurers to pay a prevailing policyholder’s attorney fees, which shifted litigation costs onto carriers that wrongly denied claims. The sweeping reforms of 2022 and 2023 eliminated that one-way fee framework for property insurance suits, and today each side generally bears its own fees, with limited exceptions and with fee-shifting mechanisms like offers of judgment still in play. The legislature has continued revisiting this area, so the rules applicable to a given claim can depend on when the policy was issued and what the law provided at the time. What has not changed is the contingency model, which keeps representation accessible regardless of how the fee statutes read this year.' },
          { type: 'heading', text: 'How to Evaluate the Economics of Your Case' },
          { type: 'para', text: 'An honest firm evaluates whether pursuing your claim makes financial sense for you, not just for the firm: the gap between what was paid and what is owed, the strength of the coverage position, the cost of experts, and the realistic range of outcomes. Ask any attorney you interview to walk through exactly that math, and ask for the fee agreement in writing, including how costs are handled if the case does not succeed.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If cost has been the reason you have not had your denied or underpaid Florida claim reviewed, the barrier is lower than you think. The attorneys at propertyinsurance.law operate on a no recovery, no fee basis, and case evaluations are always free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Fee arrangements are governed by written agreement and Florida Bar rules.'
      },
      {
        slug: 'should-i-cash-insurance-check-florida',
        title: 'Should I Cash the Insurance Company’s Check?',
        metaTitle: 'Should You Cash the Insurance Company’s Check?',
        metaDescription: 'Worried that cashing a Florida claim check ends your claim? Learn when depositing payment is safe, what to check first, and the traps to avoid.',
        category: 'Insurance Dispute Advice', tags: ['claim payments', 'underpaid claims', 'settlements'],
        author: 'Shari Freeman', date: '2026-05-08',
        links: ['/post/florida-insurance-claim-underpaid', '/post/reopen-closed-florida-insurance-claim'],
        body: [
          { type: 'para', text: 'The check is smaller than expected, and now you are afraid to touch it. Homeowners regularly ask whether depositing an insurance payment waives the right to pursue more. In most Florida property claims, cashing an ordinary claim check does not end the claim, but the caution behind the question is healthy. A few checks deserve close inspection before they go anywhere near a bank.' },
          { type: 'heading', text: 'Ordinary Claim Payments' },
          { type: 'para', text: 'Most payments are simply the insurer’s calculation of what it owes so far under the policy: an initial payment on the dwelling, actual cash value with depreciation withheld, or payment for a portion of the loss. Accepting that money generally does not prevent you from submitting supplemental documentation, disputing the scope, recovering withheld depreciation after repairs, or pursuing the balance you believe is owed. Florida claims are routinely paid in multiple installments as disputes get resolved.' },
          { type: 'heading', text: 'Checks That Deserve Scrutiny' },
          { type: 'para', text: 'Look at the check itself and everything that came with it. Language on the check or an accompanying release stating that payment is full and final settlement of the claim changes the analysis, because endorsing a check under those terms can be argued as an accord and satisfaction. Releases asking for your signature in exchange for payment are contracts, and signing one can genuinely end your rights. Neither is standard for routine partial payments, which is exactly why their appearance is a signal to slow down.' },
          { type: 'heading', text: 'Practical Guidance' },
          { type: 'para', text: 'Read the check front and back, along with the letter that accompanied it. Keep copies of everything. If the payment is an undisputed partial amount with no release language, using the funds for repairs is generally the sensible course, since delay helps no one and your mitigation duties continue. If full and final language appears anywhere, or the insurer conditions payment on a signed release while you still dispute the amount, get advice before depositing or signing.' },
          { type: 'heading', text: 'Document Your Disagreement' },
          { type: 'para', text: 'When you believe the payment is short, say so in writing. A simple letter noting that you accept the payment as partial and continue to dispute the total preserves clarity and undercuts any later argument that you settled.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If a release arrived with your check, or the payment does not come close to your documented damages, the attorneys at propertyinsurance.law will review the paperwork and the claim for free before you sign or deposit anything questionable.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Release language and payment conditions require case-specific review.'
      },
      {
        slug: 'types-of-insurance-adjusters-florida',
        title: 'Who Is the Adjuster Handling My Claim?',
        metaTitle: 'Company, Independent, Desk: Know Your Adjuster',
        metaDescription: 'Staff, independent, field, and desk adjusters all serve the insurer. Learn who is actually handling your Florida claim and why it matters.',
        category: 'Insurance Dispute Advice', tags: ['claim process', 'adjusters', 'investigations'],
        author: 'J. Alex Couture', date: '2026-05-14',
        links: ['/post/public-adjuster-vs-attorney-florida', '/post/adjuster-stopped-responding-florida'],
        body: [
          { type: 'para', text: 'Over the life of one Florida property claim, a homeowner might deal with a field adjuster who inspected the roof, a desk adjuster who writes the emails, an independent adjuster from a firm nobody has heard of, and eventually a new name entirely after a mysterious reassignment. Understanding who these people are, and who they work for, explains a lot about how claims actually get decided.' },
          { type: 'heading', text: 'Staff Adjusters' },
          { type: 'para', text: 'Staff adjusters are direct employees of your insurance company. They investigate, evaluate, and make or recommend claim decisions within authority limits set by the carrier. Whatever their individual professionalism, their employer is the party that pays your claim, and their performance is measured by the company.' },
          { type: 'heading', text: 'Independent Adjusters' },
          { type: 'para', text: 'Despite the name, independent adjusters do not work for you. They are contractors hired by insurers, often through large adjusting firms, to handle inspections and claims during busy periods, especially after hurricanes when carriers face thousands of losses at once. Catastrophe deployments mean heavy caseloads, rapid inspections, and adjusters who may be unfamiliar with Florida construction and pricing. Their reports go to the insurer, which makes the actual decision.' },
          { type: 'heading', text: 'Field Versus Desk' },
          { type: 'para', text: 'The field adjuster physically inspects your property. The desk adjuster sits at the carrier or its vendor, managing the file, applying the estimate software, and issuing decisions, frequently without ever seeing the home. Many disputed claims trace to this handoff, where a desk adjuster trims a field report or an estimate loses line items in translation. When your payment does not match what the field adjuster saw, ask in writing for the field report and estimate.' },
          { type: 'heading', text: 'Why Reassignments Matter' },
          { type: 'para', text: 'Claims that pass through multiple adjusters lose institutional memory, and each new adjuster restarts the education process. Keep your own complete file, confirm each conversation by email, and do not assume the newest adjuster has read anything.' },
          { type: 'heading', text: 'The One Adjuster Who Works for You' },
          { type: 'para', text: 'A public adjuster, hired and paid by you, is the only adjuster in the process representing your interests. Everyone else on this page represents the insurer.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If the adjuster carousel has produced delay, a vanishing scope, or a decision that contradicts the inspection, the attorneys at propertyinsurance.law can cut through it. Free case evaluations are available for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Claim handling structures vary by carrier.'
      },
      {
        slug: 'burst-pipe-insurance-coverage-florida',
        title: 'Does Homeowners Insurance Cover a Burst Pipe in Florida?',
        metaTitle: 'Does Homeowners Insurance Cover a Burst Pipe in Florida?',
        metaDescription: 'Burst pipe in your Florida home? Learn what homeowners insurance typically covers, what it excludes, and how to protect your claim from day one.',
        category: 'Property Damage Law', tags: ['water damage', 'plumbing', 'coverage basics'],
        author: 'Zaf Goss', date: '2026-05-21',
        links: ['/water-damage-insurance-claims', '/post/water-damage-claim-denied-florida'],
        body: [
          { type: 'para', text: 'A burst pipe can flood a home in minutes and leave behind soaked drywall, buckled flooring, and ruined belongings. The good news is that most Florida homeowners policies cover this type of loss. The details, however, matter a great deal.' },
          { type: 'heading', text: 'What Is Typically Covered' },
          { type: 'para', text: 'Standard homeowners policies generally cover sudden and accidental water discharge from plumbing. That usually includes the resulting damage to your home: flooring, baseboards, drywall, cabinets, and personal property harmed by the water. If the home becomes unlivable during repairs, additional living expense coverage may pay for temporary housing.' },
          { type: 'heading', text: 'What Is Often Not Covered' },
          { type: 'para', text: 'Here is where homeowners get surprised. Many policies cover the water damage but not the cost of repairing the pipe itself. Access costs, meaning the tear-out required to reach the broken section, are frequently covered even when the pipe repair is not. Policies also exclude damage from gradual leaks, so an insurer may investigate whether the pipe truly failed suddenly or had been leaking for weeks.' },
          { type: 'heading', text: 'Why Insurers Push Back on Burst Pipe Claims' },
          { type: 'para', text: 'Insurance companies scrutinize these claims closely. Common defenses include arguing the leak was long-term, blaming corrosion or wear and tear, or asserting that the homeowner failed to maintain the plumbing. Some carriers send out leak detection vendors or engineers whose reports support a denial. None of those positions is automatically correct, and each can be challenged with the right evidence.' },
          { type: 'heading', text: 'Protecting Your Claim From Day One' },
          { type: 'para', text: 'Shut off the water and stop the source. Photograph everything before cleanup, including standing water, the failed pipe, and each damaged room. Keep the broken pipe section if a plumber replaces it, because that piece of pipe is often the single most important item of evidence in a disputed claim. Report the loss promptly, and document your mitigation efforts, such as water extraction and drying equipment.' },
          { type: 'heading', text: 'If Your Claim Is Underpaid or Denied' },
          { type: 'para', text: 'Payment disputes on pipe claims are common. The insurer’s estimate may cover patch repairs while your contractor says continuous flooring must be replaced throughout connected rooms. If the numbers do not add up, or if the claim is denied outright, a legal review can identify whether the insurer is meeting its obligations. The attorneys at propertyinsurance.law offer free case evaluations for Florida policyholders dealing with denied, delayed, or underpaid water claims.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Coverage depends on your specific policy.'
      },
      {
        slug: 'tile-roof-damage-claims-florida',
        title: 'Tile Roof Damage Claims: What Florida Homeowners Should Know',
        metaTitle: 'Tile Roof Claims in Florida: The Homeowner’s Guide',
        metaDescription: 'Tile roof claims raise unique issues: cracked tiles, discontinued styles, matching, and repair versus replacement. Learn how Florida claims play out.',
        category: 'Property Damage Law', tags: ['roof damage', 'tile roofs', 'storm claims'],
        author: 'J. Alex Couture', date: '2026-05-28',
        links: ['/post/florida-roof-matching-law-shingles', '/post/can-my-insurance-company-replace-only-half-my-roof-in-florida'],
        body: [
          { type: 'para', text: 'Tile roofs define Florida neighborhoods, and they create some of the most contested roof claims in the state. Tile behaves differently from shingle, ages differently, and gets repaired differently, and insurers exploit every one of those differences when adjusting a claim. If your tile roof took storm damage, here is the terrain.' },
          { type: 'heading', text: 'How Tile Damage Actually Presents' },
          { type: 'para', text: 'Wind lifts and displaces tiles, hail and debris crack them, and impacts fracture tiles in ways that admit water slowly rather than immediately. Cracks can be subtle, hairline, and invisible from the ground, which makes thorough on-roof inspection essential. A complicating wrinkle: tile cracks from foot traffic too, and adjusters walking a roof can create damage they later attribute to age. Photograph the roof before any inspection when possible, and have your own roofer document conditions independently.' },
          { type: 'heading', text: 'Repair, Matching, and Discontinued Tile' },
          { type: 'para', text: 'Concrete and clay tile profiles get discontinued constantly, and color blends weather over decades. When damaged tiles cannot be matched, spot repairs leave a visibly mismatched roof, and Florida’s claim settlement standards for replacement cost policies require reasonable uniformity between repaired and adjoining areas. The matching question, which we cover in depth in our shingle matching article, applies with particular force to tile, where a handful of unmatchable broken tiles can put full slope or full roof replacement on the table.' },
          { type: 'heading', text: 'Repair Percentage and Building Code Issues' },
          { type: 'para', text: 'Florida’s building code rules on when roof repairs trigger larger replacement obligations changed in 2022, and the answer now depends in part on when your roof was built and whether it complied with more recent code editions. Underlayment condition matters too, since tile is a water-shedding system over the underlayment that actually waterproofs the roof, and storm-damaged or aged underlayment can drive replacement scope regardless of how many tiles cracked. These are exactly the questions a qualified tile roofer or engineer should answer, not an adjuster with a clipboard.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Tile claims combine matching law, building code, and engineering, and insurers count on homeowners not knowing any of the three. If your tile roof claim was denied or scoped as a handful of tiles when the system is compromised, the attorneys at propertyinsurance.law will evaluate it for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Roof claim outcomes depend on policy language, code applicability, and roof condition.'
      },
      {
        slug: 'appraisal-clause-florida-homeowners',
        title: 'What Is the Appraisal Clause in a Florida Homeowners Policy?',
        metaTitle: 'The Appraisal Clause in Florida Policies, Explained',
        metaDescription: 'The appraisal clause resolves disputes over the amount of a Florida property loss. Learn how the process works, what it costs, and its limits.',
        category: 'Insurance Dispute Advice', tags: ['appraisal', 'disputes', 'claim process'],
        author: 'James Wilson', date: '2026-06-03',
        links: ['/post/florida-insurance-claim-underpaid', '/underpaid-insurance-claims'],
        body: [
          { type: 'para', text: 'Buried in the conditions section of most Florida homeowners policies sits a dispute resolution tool many policyholders never notice: the appraisal clause. When you and your insurer agree a loss is covered but disagree about how much it is worth, appraisal offers a path to a number without a lawsuit. It has real advantages and real limitations, and both deserve understanding before anyone invokes it.' },
          { type: 'heading', text: 'How Appraisal Works' },
          { type: 'para', text: 'Either side can demand appraisal under most policy forms. Each party then selects its own competent appraiser, and the two appraisers select a neutral umpire. The appraisers exchange their assessments of the loss, and where they disagree, the umpire weighs in. Agreement by any two of the three sets the amount of loss, and that award is generally binding on the amount. Each side pays its own appraiser, and the umpire’s fee is typically split.' },
          { type: 'heading', text: 'What Appraisal Can and Cannot Decide' },
          { type: 'para', text: 'Appraisal resolves the amount of loss: scope, pricing, and value. It does not decide coverage. If the insurer claims an exclusion applies or denies the claim outright, appraisal is generally not the vehicle for that fight, and coverage disputes stay in the legal arena. This boundary produces frequent skirmishes, because scope and causation blur together, and insurers sometimes try to relitigate coverage inside an appraisal or, conversely, use appraisal to shortcut a claim they should be paying.' },
          { type: 'heading', text: 'The Strategic Considerations' },
          { type: 'para', text: 'Appraisal can be faster and less expensive than litigation, and a strong appraiser with thorough documentation can move a badly underpaid claim significantly. It also has risks. The award can come in low, the process has limited discovery, and some policies make appraisal demands binding once invoked. Whether appraisal helps or hurts depends on the quality of your documentation, the nature of the dispute, and the specific policy language, including whether participation is mandatory when demanded.' },
          { type: 'heading', text: 'Before You Demand Appraisal' },
          { type: 'para', text: 'Get a complete, itemized contractor estimate first, because the appraisal is only as strong as the file behind it. Read your policy’s exact appraisal provision. Consider whether the real dispute is amount or coverage, since choosing the wrong forum wastes months.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Deciding whether to invoke appraisal, respond to the insurer’s demand, or head a different direction is a strategic call with lasting consequences. The attorneys at propertyinsurance.law advise Florida policyholders on appraisal strategy and offer free case evaluations.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Appraisal provisions vary by policy form.'
      },
      {
        slug: 'water-heater-leak-insurance-claim-florida',
        title: 'Does Homeowners Insurance Cover a Water Heater Leak?',
        metaTitle: 'Does Insurance Cover a Water Heater Leak in Florida?',
        metaDescription: 'A failed water heater can flood a Florida home. Learn what insurance covers, what it excludes, and how to handle the claim correctly.',
        category: 'Property Damage Law', tags: ['water damage', 'appliances', 'coverage basics'],
        author: 'Zaf Goss', date: '2026-06-10',
        links: ['/water-damage-insurance-claims', '/post/burst-pipe-insurance-coverage-florida'],
        body: [
          { type: 'para', text: 'Water heaters fail more often than almost any other appliance, and when a tank lets go it can release dozens of gallons in minutes, with the supply line feeding more behind it. If this happened in your home, here is how coverage usually works and where claims run into trouble.' },
          { type: 'heading', text: 'The Damage Is Usually Covered. The Appliance Usually Is Not.' },
          { type: 'para', text: 'Standard Florida homeowners policies treat a sudden water heater failure as a covered water discharge. The resulting damage to flooring, drywall, baseboards, cabinets, and personal property generally falls within coverage. The water heater itself is another story. Policies typically exclude the appliance when it fails from age, rust, or corrosion, so replacing the unit is usually an out-of-pocket cost while the damage it caused is claimable.' },
          { type: 'heading', text: 'The Sudden Versus Gradual Question Again' },
          { type: 'para', text: 'As with pipe claims, insurers examine whether the failure was sudden or whether the tank had been leaking slowly for weeks. Rust trails, mineral deposits, and long-term staining around the base invite gradual-leak denials. A tank can rust for years and still fail suddenly, and those two facts are not contradictory, but you may need a plumber’s opinion to make that point stick.' },
          { type: 'heading', text: 'Location Makes These Claims Bigger Than They Look' },
          { type: 'para', text: 'Many Florida water heaters sit in garages, but plenty live in interior closets, attics, and second floors. A failure upstairs can send water through ceilings, walls, and multiple rooms below. Insurers sometimes scope these claims narrowly, paying for the closet and ignoring migration into adjacent rooms. Moisture meters and thermal imaging can reveal damage the eye misses, so a thorough inspection matters.' },
          { type: 'heading', text: 'Handling the Claim Correctly' },
          { type: 'para', text: 'Shut off the water supply and the power or gas to the unit. Photograph the tank, the failure point, and every affected area before cleanup. Keep the failed water heater until the insurer has inspected it or confirmed in writing that it is not needed, because discarding it can complicate a disputed claim. Start drying promptly and save all mitigation receipts. Report the claim without delay.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your water heater claim was denied as a gradual leak, or the payment covers a fraction of the real damage, an independent review is worthwhile. The attorneys at propertyinsurance.law evaluate Florida water damage claims for free and represent policyholders on a contingency basis.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Coverage depends on your policy and the facts of the loss.'
      },
      {
        slug: 'faulty-workmanship-exclusion-florida',
        title: 'What Is the Faulty Workmanship Exclusion in Florida Property Claims?',
        metaTitle: 'The Faulty Workmanship Exclusion, Explained',
        metaDescription: 'Florida insurers deny claims citing faulty workmanship or defective construction. Learn what the exclusion covers and the key exception many miss.',
        category: 'Property Damage Law', tags: ['exclusions', 'denied claims', 'construction'],
        author: 'Shari Freeman', date: '2026-06-16',
        links: ['/post/repairs-fail-after-insurance-claim-florida', '/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'Your roof leaks, your stucco cracks, or water pours in around a window, and the insurance company’s answer is that a contractor did the work badly, so the loss is excluded. The faulty workmanship exclusion appears in nearly every Florida property policy, and insurers apply it broadly. The exclusion is real, but it has boundaries that matter.' },
          { type: 'heading', text: 'What the Exclusion Says' },
          { type: 'para', text: 'Most policies exclude loss caused by faulty, inadequate, or defective workmanship, construction, repair, or materials. The logic is that insurance covers accidents, not a contractor’s poor performance. If a roofer installed flashing incorrectly and the flashing itself must be redone, the insurer takes the position that the redo is between you and the roofer.' },
          { type: 'heading', text: 'The Ensuing Loss Exception' },
          { type: 'para', text: 'Here is the part many homeowners never hear about. Faulty workmanship exclusions commonly contain an exception for ensuing loss: if the defective work leads to a separate covered peril, the resulting damage from that peril can still be covered. Bad flashing may be excluded, but the water damage that ensued inside the home may not be. The distinction between the defective work itself and the damage flowing from it drives the outcome in these disputes, and adjusters frequently gloss over it, denying the entire claim in one sweep.' },
          { type: 'heading', text: 'Whose Opinion Counts' },
          { type: 'para', text: 'Faulty workmanship denials usually rest on an adjuster’s or engineer’s opinion that construction defects caused the loss. Those opinions are contestable. Independent contractors, engineers, and building consultants often identify storm damage, sudden failures, or other covered causes that the insurer’s inspection minimized. Where multiple causes contributed, the specific wording of your policy and how Florida law treats combined causes both come into play.' },
          { type: 'heading', text: 'What You Can Do' },
          { type: 'para', text: 'Get the denial in writing with the exact exclusion language cited. Obtain your own expert evaluation of what caused the damage and what damage ensued from it. Separate the claim into its components: the defective element, and everything that was damaged as a consequence. Preserve the defective materials where possible.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Faulty workmanship denials often overreach, sweeping covered ensuing damage into an exclusion that does not reach it. Our team includes attorneys with defense-side construction defect experience, which means we know how these arguments are built and where they break. The attorneys at propertyinsurance.law offer free case evaluations for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Exclusion language and exceptions vary by policy.'
      },
      {
        slug: 'deadline-file-property-claim-florida',
        title: 'What Is the Deadline to File a Property Insurance Claim in Florida?',
        metaTitle: 'Florida’s Deadline to File a Property Claim',
        metaDescription: 'Florida law generally bars property claims not reported within one year of the date of loss. Learn how the deadline works and the exceptions that matter.',
        category: 'Property Damage Law', tags: ['deadlines', 'claim process', 'hurricane claims'],
        author: 'James Wilson', date: '2026-06-23',
        links: ['/post/late-notice-denial-florida-insurance-claim', '/post/supplemental-claim-florida-explained'],
        body: [
          { type: 'para', text: 'Florida shortened its claim filing deadlines dramatically in recent years, and many homeowners are still working from outdated information. Miss the current deadline and the claim can be barred entirely, regardless of how legitimate the damage is. Here is the timeline that applies now.' },
          { type: 'heading', text: 'One Year From the Date of Loss' },
          { type: 'para', text: 'Under Florida Statute 627.70132, notice of a new or reopened property insurance claim must be given to the insurer within one year after the date of loss. Supplemental claims carry an 18 month deadline from the date of loss. These windows apply to claims across perils, from hurricanes to pipe breaks to fire, and they replaced the longer periods that existed before the 2022 reforms.' },
          { type: 'heading', text: 'When the Clock Starts' },
          { type: 'para', text: 'The date of loss is the event date, not the discovery date. For hurricanes, the clock generally runs from the date the storm made landfall, and for other weather events, from the date the event occurred as verified by official weather records. For a burst pipe or a fire, it is the date of the failure or the fire. Damage that reveals itself slowly, like hidden water intrusion after a storm, is dangerous under this rule, because homeowners can discover it with much of the year already gone.' },
          { type: 'heading', text: 'Your Policy May Demand Faster Notice' },
          { type: 'para', text: 'The statute is the outer boundary, not a safe harbor. Nearly every policy separately requires prompt notice of a loss, and insurers raise late notice defenses well inside the one year window. Reporting quickly protects you twice over: it satisfies the prompt notice condition, and it starts the statutory deadlines that require your insurer to act.' },
          { type: 'heading', text: 'Practical Rules to Live By' },
          { type: 'para', text: 'Report suspected damage as soon as you become aware of it, even if the full extent is unknown, because you can supplement later. After any major storm, get a professional inspection rather than assuming the home escaped harm, since roof and water damage frequently hide. Keep records establishing when the loss occurred and when you gave notice.' },
          { type: 'heading', text: 'If You Are Close to the Line' },
          { type: 'para', text: 'Being near a deadline is not the same as being past one, and even late notice situations involve legal questions about prejudice and the specific dates involved. Act immediately rather than assuming the claim is lost.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If a deadline question hangs over your claim, or your insurer denied a claim as untimely, the attorneys at propertyinsurance.law will evaluate the timeline for free and tell you where you actually stand.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Deadline analysis depends on your date of loss, policy, and claim history.'
      },
      {
        slug: 'constant-repeated-seepage-exclusion-florida',
        title: 'What Does “Constant or Repeated Seepage” Mean in a Water Damage Denial?',
        metaTitle: 'What Is the “Constant or Repeated Seepage” Exclusion?',
        metaDescription: 'Florida insurers deny water claims citing “constant or repeated seepage.” Learn what this exclusion means and when the denial may be wrong.',
        category: 'Insurance Dispute Advice', tags: ['water damage', 'exclusions', 'denied claims'],
        author: 'J. Alex Couture', date: '2026-06-30',
        links: ['/post/water-damage-claim-denied-florida', '/denied-homeowners-insurance-claims'],
        body: [
          { type: 'para', text: 'If your Florida water damage claim was denied, there is a good chance the denial letter quoted an exclusion for “constant or repeated seepage or leakage.” Many policies frame it as leakage occurring over a period of 14 or more days. Homeowners read that language and assume the fight is over. Often, it is not.' },
          { type: 'heading', text: 'What the Exclusion Says' },
          { type: 'para', text: 'The seepage exclusion targets long-term water intrusion. The idea is that homeowners insurance covers sudden accidents, not slow deterioration a homeowner could have caught and fixed. When a policy contains a 14-day version of the clause, the insurer takes the position that any leak lasting two weeks or longer falls outside coverage.' },
          { type: 'heading', text: 'Why Insurers Rely on It So Heavily' },
          { type: 'para', text: 'Proving how long a leak existed is difficult, and insurers know it. An adjuster sees dark staining, corrosion, or mold and concludes the leak must have been ongoing for weeks or months. That conclusion then becomes the basis for a denial. The insurer has effectively converted an ambiguous visual observation into a coverage decision.' },
          { type: 'heading', text: 'Why the Denial May Be Wrong' },
          { type: 'para', text: 'Several problems come up repeatedly in these denials. First, staining and corrosion do not reliably date a leak, and qualified experts often disagree with the adjuster’s timeline. Second, some water losses involve both a sudden failure and older cosmetic conditions, and the sudden portion may still be covered. Third, courts have wrestled with how this exclusion applies when a leak lasted more than 14 days but the homeowner could not reasonably have discovered it, and the specific wording of your policy matters. Interpretation can differ from one policy form to the next, which is exactly why these denials deserve independent review.' },
          { type: 'heading', text: 'What You Should Do' },
          { type: 'para', text: 'Do not throw anything away. Keep the failed component, whether it is a pipe, a valve, a supply line, or a shower pan. Get a licensed plumber or leak detection professional to document the cause and offer an opinion on duration. Request the insurer’s complete file basis for its timeline, including any engineer or lab reports. Compare what the denial letter claims with what the evidence actually shows.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Seepage denials are among the most contested water damage disputes in Florida, and they frequently come down to expert opinion and policy interpretation. If your claim was denied on this basis, the attorneys at propertyinsurance.law can review the denial at no cost and explain your options.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Policy language varies, and outcomes depend on specific facts.'
      },
      {
        slug: 'insurance-inspection-rights-florida',
        title: 'Do I Have to Let the Insurance Company Inspect My Home?',
        metaTitle: 'Do You Have to Allow the Insurer’s Inspection?',
        metaDescription: 'Florida policies require reasonable cooperation with insurer inspections. Learn what you must allow, what you can control, and how to protect yourself.',
        category: 'Insurance Dispute Advice', tags: ['claim process', 'investigations', 'policy duties'],
        author: 'James Wilson', date: '2026-07-06',
        links: ['/post/insurance-engineer-inspection-florida', '/post/cleanup-before-adjuster-inspection-florida'],
        body: [
          { type: 'para', text: 'The insurer wants to inspect. Then it wants to inspect again, this time with an engineer, and later with a different adjuster. Homeowners understandably start wondering where cooperation ends. The short answer: yes, you generally must allow reasonable inspections, and refusing can sink your claim. The longer answer is that you have more control over the process than most policyholders realize.' },
          { type: 'heading', text: 'Your Duty to Cooperate' },
          { type: 'para', text: 'Every property policy conditions coverage on the insured’s cooperation, and that includes showing the insurer the damaged property as often as reasonably required. Florida law also expects insurers to inspect promptly, generally within 30 days of receiving your proof of loss statements when a physical inspection is intended. Cooperation runs both directions: you provide access, and the carrier is supposed to move.' },
          { type: 'heading', text: 'Refusal Is a Gift to the Insurer' },
          { type: 'para', text: 'Denying access, canceling repeatedly, or stonewalling gives the insurer a failure to cooperate defense, which can justify denial regardless of how strong the underlying claim is. Even when a homeowner’s frustration is justified, the fight should happen on the merits of the damage, not on a procedural forfeit.' },
          { type: 'heading', text: 'What Reasonable Looks Like' },
          { type: 'para', text: 'Reasonable is the boundary. You can require inspections to be scheduled at mutually workable times rather than on unilateral demand. You can be present, and you should be, along with your contractor or representative if you choose. You can photograph what the inspector photographs and note what areas were examined and for how long. Serial reinspections without explanation, demands to destroy or remove materials, or inspections used to delay a decision past statutory deadlines all deserve pushback in writing.' },
          { type: 'heading', text: 'Document Every Inspection' },
          { type: 'para', text: 'Keep a log: date, attendees, duration, areas inspected, tests performed, and anything the inspector said about findings. Ask for copies of resulting reports. When a later denial claims the inspection revealed wear and tear, your contemporaneous record of a twelve-minute walkthrough becomes valuable evidence.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If inspections have multiplied while the claim decision never arrives, or the insurer is treating access disputes as a reason to deny, the attorneys at propertyinsurance.law can restore order to the process. Case evaluations are free for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Cooperation duties depend on your policy’s specific conditions.'
      },
      {
        slug: 'roof-leak-covered-by-insurance-florida',
        title: 'Is a Roof Leak Covered by Homeowners Insurance in Florida?',
        metaTitle: 'Is a Roof Leak Covered by Insurance in Florida?',
        metaDescription: 'Roof leaks may be covered when caused by storm damage. Learn how Florida insurers evaluate roof leak claims and why so many are denied.',
        category: 'Property Damage Law', tags: ['roof damage', 'water damage', 'storm claims'],
        author: 'Zaf Goss', date: '2026-07-13',
        links: ['/roof-damage-insurance-claims', '/post/wear-and-tear-roof-claim-denial-florida'],
        body: [
          { type: 'para', text: 'A brown stain spreads across the ceiling after a heavy storm, and the first question is always the same. Will insurance pay for this? In Florida, the answer usually depends on one issue: what caused the leak.' },
          { type: 'heading', text: 'Cause Is Everything' },
          { type: 'para', text: 'Homeowners insurance is designed to cover sudden, accidental damage from covered perils such as wind, hail, and falling objects. If a windstorm lifts shingles or a branch punctures the roof and water gets in, both the roof damage and the interior water damage are generally within the scope of coverage. If the roof simply wore out and started leaking due to age, insurers treat that as a maintenance issue and deny the claim under wear and tear exclusions.' },
          { type: 'heading', text: 'The Gray Area Where Most Disputes Live' },
          { type: 'para', text: 'Real roofs rarely fit neatly into either category. Florida roofs take a beating from sun, heat, and repeated storms, so almost every roof shows some age-related conditions. Insurers often seize on those conditions to deny storm claims, arguing the leak comes from deterioration rather than wind. Meanwhile, legitimate storm damage such as creased shingles, displaced tiles, or broken seals can be subtle and easy for a rushed inspection to miss. The result is a large gray area where the insurer says maintenance and the homeowner’s roofer says storm.' },
          { type: 'heading', text: 'Interior Damage Deserves Its Own Attention' },
          { type: 'para', text: 'Even in disputed roof claims, the interior damage matters. Stained ceilings, wet insulation, damaged drywall, and flooring affected by intrusion all belong in the claim. Document each affected room with photographs and keep the dates straight, because insurers compare reported damage against storm dates and weather data.' },
          { type: 'heading', text: 'Steps That Protect Your Claim' },
          { type: 'para', text: 'Report the leak promptly, since Florida law generally requires notice of a claim within one year of the date of loss and your policy may require faster reporting. Mitigate further damage with tarping or temporary repairs, and keep the receipts. Get an inspection from a licensed roofer who documents storm-related damage in writing with photographs. Do not authorize a full roof replacement before the insurer inspects unless safety requires it.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your roof leak claim was denied as wear and tear, or the payment covers a patch while your roofer says the roof system is compromised, an independent legal review can make a difference. The attorneys at propertyinsurance.law handle roof and water claims for Florida homeowners and offer a free case evaluation.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Every roof claim turns on its own evidence and policy terms.'
      },
      {
        slug: 'insurance-misrepresentation-accusation-florida',
        title: 'What Happens If My Insurance Company Accuses Me of Misrepresentation?',
        metaTitle: 'Insurer Accusing You of Misrepresentation? Read This',
        metaDescription: 'A misrepresentation accusation can void your Florida claim or policy. Learn what insurers must prove and why these accusations deserve a legal response.',
        category: 'Insurance Dispute Advice', tags: ['denied claims', 'fraud allegations', 'investigations'],
        author: 'Shari Freeman', date: '2026-07-19',
        links: ['/post/examination-under-oath-florida-property-claim', '/post/recorded-statement-florida-insurance-claim'],
        body: [
          { type: 'para', text: 'Few things alarm a policyholder more than a letter suggesting they misrepresented something. Insurers raise misrepresentation in two contexts: statements made when the policy was purchased, and statements made during the claim. Either accusation is serious, because a proven material misrepresentation can support denial of the claim or even voiding of the policy. Serious, however, does not mean correct.' },
          { type: 'heading', text: 'Application Misrepresentation' },
          { type: 'para', text: 'After a large loss, some carriers re-examine the original application looking for errors: the age of the roof, prior claims, occupancy, renovations, even the number of bathrooms. If the insurer finds a discrepancy, it may attempt to rescind the policy, arguing it would not have issued coverage on the true facts. Innocent mistakes, agent errors, and questions the applicant answered honestly based on available knowledge are frequently swept into these accusations, and Florida law places real limits on when a discrepancy actually justifies rescission.' },
          { type: 'heading', text: 'Claim Misrepresentation' },
          { type: 'para', text: 'During the claim, insurers scrutinize recorded statements, sworn proofs of loss, inventories, and testimony at examinations under oath. An inconsistency between your recollection in month one and your testimony in month six can be recast as concealment. Estimates the insurer considers inflated get characterized as fraud. Memory gaps become misstatements. The concealment or fraud condition in most policies requires the misrepresentation to be material and, under many forms, intentional, and honest imprecision is neither.' },
          { type: 'heading', text: 'Why You Should Take It Seriously Anyway' },
          { type: 'para', text: 'A misrepresentation defense lets the insurer avoid the entire claim, not just a disputed portion, so carriers pursue it aggressively when the numbers are large. These accusations also tend to surface around examinations under oath, where every word is transcribed. Anything you say can be compared against prior statements, documents, and public records.' },
          { type: 'heading', text: 'How to Respond' },
          { type: 'para', text: 'Stop guessing in your communications with the insurer. If you do not know an answer, say so rather than estimating. Gather the documents that support your statements: permits, receipts, dated photographs, prior inspection reports. Do not sit for an examination under oath after a misrepresentation accusation without speaking to an attorney first.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'The moment misrepresentation or fraud language appears in your claim, the dispute has changed character. The attorneys at propertyinsurance.law defend Florida policyholders against these accusations and offer a free, confidential case evaluation.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Accusations of misrepresentation involve fact-specific legal standards.'
      },
      {
        slug: 'assignment-of-benefits-florida-rules',
        title: 'Can I Still Use an Assignment of Benefits in Florida?',
        metaTitle: 'Are Assignments of Benefits Still Allowed in Florida?',
        metaDescription: 'Florida banned post-loss assignments of benefits for most policies issued since 2023. Learn what changed, what replaced AOBs, and what to sign instead.',
        category: 'Property Damage Law', tags: ['AOB', 'contractors', 'claim process'],
        author: 'Zaf Goss', date: '2026-07-26',
        links: ['/post/emergency-tarping-water-removal-coverage', '/post/do-i-have-to-use-insurance-preferred-contractor-florida'],
        body: [
          { type: 'para', text: 'For years, assignments of benefits were everywhere in Florida property claims. A homeowner with a burst pipe or a damaged roof would sign an AOB, and the water mitigation company or roofer would take over the insurance claim, billing the carrier directly and litigating in its own name if necessary. That era is largely over, and homeowners need to know what the current rules actually are before signing anything a vendor puts in front of them.' },
          { type: 'heading', text: 'What Changed' },
          { type: 'para', text: 'As part of the sweeping property insurance reforms passed in December 2022, Florida prohibited policyholders from assigning post-loss insurance benefits under residential and commercial property policies issued on or after January 1, 2023. For those policies, an assignment agreement is invalid. Because nearly all Florida policies have been issued or renewed since that date, the prohibition now covers the vast majority of claims. Older claims under earlier policies can still involve valid AOBs executed under the prior framework, which is why the paperwork’s date and the policy’s issue date both matter.' },
          { type: 'heading', text: 'What Vendors Use Instead' },
          { type: 'para', text: 'Contractors and mitigation companies have not stopped needing payment, so different documents have taken the AOB’s place. A direction to pay authorizes the insurer to issue payment to the contractor but leaves the claim, and control of it, with you. Standard service contracts obligate you to pay the vendor regardless of what insurance does. Read the document’s actual operative language rather than its title, because the obligations vary enormously, and a contract that leaves you personally responsible for a five-figure mitigation bill deserves a careful look before you sign it in a hallway full of drying fans.' },
          { type: 'heading', text: 'Practical Guidance for Homeowners' },
          { type: 'para', text: 'Get pricing in writing before work begins where circumstances allow. Ask directly who is responsible if the insurer pays less than the invoice. Keep control of your claim communications rather than routing everything through a vendor. And remember that the claim is yours: the insurer’s obligations run to you, and so do the remedies when it underpays.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If a vendor dispute has tangled your claim, or your insurer is underpaying invoices and leaving you exposed, the attorneys at propertyinsurance.law can sort out the contracts and pursue the coverage. Free case evaluations are available for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. The enforceability of assignment and payment documents depends on their terms and dates.'
      },
      {
        slug: 'fire-smoke-damage-claims-florida',
        title: 'Fire and Smoke Damage Claims in Florida: What Homeowners Should Know',
        metaTitle: 'Fire and Smoke Damage Claims in Florida',
        metaDescription: 'Fire claims involve hidden smoke damage, contents inventories, and Florida’s valued policy law. Learn how to protect a fire claim from day one.',
        category: 'Property Damage Law', tags: ['fire damage', 'smoke damage', 'total loss'],
        author: 'James Wilson', date: '2026-08-02',
        links: ['/fire-damage-insurance-claims', '/post/additional-living-expense-ale-florida'],
        body: [
          { type: 'para', text: 'A fire compresses everything difficult about property insurance into one claim: structural damage, contaminated contents, a displaced family, and an insurer evaluating all of it at once. Fire is a covered peril under every standard policy, so the fight is rarely about whether coverage exists. It is about how much, and the answer depends heavily on what happens in the first weeks.' },
          { type: 'heading', text: 'Smoke and Soot Travel Farther Than Flames' },
          { type: 'para', text: 'The burned rooms are only the visible loss. Smoke, soot, and corrosive residues migrate through HVAC systems into rooms the fire never touched, embedding in drywall, insulation, ductwork, textiles, and electronics. Odor and contamination that seem minor at first often prove impossible to remediate with surface cleaning. Insurers like to scope fire claims around the char line; a proper claim scopes the contamination, with industrial hygiene testing where warranted.' },
          { type: 'heading', text: 'The Contents Inventory Is a Project' },
          { type: 'para', text: 'Every damaged item belongs on an inventory with description, age, and replacement cost, and the insurer will require it. Photograph rooms and contents before anything is discarded, work from photos, receipts, and bank records to reconstruct what you owned, and do not rush. Underinventoried contents are among the most common ways fire victims leave money unclaimed.' },
          { type: 'heading', text: 'Total Losses and Florida’s Valued Policy Law' },
          { type: 'para', text: 'When a covered fire results in a total loss of the structure, Florida’s valued policy law generally requires the insurer to pay the face amount of the policy on the building rather than relitigating its value after the fact. Disputes over whether a loss is truly total, and what the law requires in partial loss situations, do arise, and they are worth professional review on any major fire.' },
          { type: 'heading', text: 'Practical Steps After a Fire' },
          { type: 'para', text: 'Secure the property and comply with the fire department’s process. Report the claim immediately and activate additional living expense coverage for housing. Keep every receipt. Be measured in recorded statements, particularly regarding the fire’s origin, and know that insurers investigate cause carefully on large fires.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'Fire claims are large, technical, and adversarial beneath the surface. The attorneys at propertyinsurance.law represent Florida families through fire and smoke claims from first inspection through resolution, and case evaluations are free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Fire claim outcomes depend on policy limits, endorsements, and the specific loss.'
      },
      {
        slug: 'reservation-of-rights-letter-florida',
        title: 'What Does a Reservation of Rights Letter Mean?',
        metaTitle: 'What a Reservation of Rights Letter Really Means',
        metaDescription: 'Received a reservation of rights letter on your Florida property claim? Learn what it signals, why insurers send them, and how to respond.',
        category: 'Insurance Dispute Advice', tags: ['claim process', 'investigations', 'denied claims'],
        author: 'J. Alex Couture', date: '2026-08-08',
        links: ['/post/examination-under-oath-florida-property-claim', '/delayed-insurance-claims-florida'],
        body: [
          { type: 'para', text: 'Somewhere in the stack of claim correspondence sits a letter with formal language stating that the insurer is investigating your claim under a reservation of rights. Most homeowners skim it and move on. That is a mistake. A reservation of rights letter is the insurer telling you, in advance, that it may deny your claim.' },
          { type: 'heading', text: 'What the Letter Does' },
          { type: 'para', text: 'By reserving its rights, the insurance company continues investigating and adjusting the claim without waiving any coverage defense. The letter typically cites policy provisions, exclusions, or conditions the insurer believes may apply, from late notice to seepage to misrepresentation. The carrier is building a record: if it later denies the claim, it will point to the letter as proof it flagged the issues early.' },
          { type: 'heading', text: 'Why Insurers Send Them' },
          { type: 'para', text: 'Insurance law generally holds that a carrier which adjusts a claim without raising a defense can waive that defense or be estopped from asserting it. The reservation of rights letter is the insurer’s protection against waiver. Its presence means someone at the company has already identified a path to denial and is preserving it.' },
          { type: 'heading', text: 'How to Read Yours' },
          { type: 'para', text: 'Find the specific provisions cited, because they tell you exactly where the insurer is heading. A letter reserving rights on late notice signals a timeline fight. One citing the concealment or fraud condition signals scrutiny of your statements and documentation, and often precedes a request for an examination under oath. Vague letters that reserve rights generally, without citing anything specific, are weaker but still a warning.' },
          { type: 'heading', text: 'Responding the Right Way' },
          { type: 'para', text: 'Continue cooperating with reasonable claim requests, since refusing cooperation creates its own defense for the insurer. Tighten your documentation: dates, photographs, receipts, and written communications. Be precise in everything you submit, because the insurer is comparing your statements against each other. If the reserved defenses are serious, involve an attorney before the next recorded statement, sworn proof of loss, or examination under oath rather than after the denial arrives.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'A reservation of rights letter means the insurer is preparing for a coverage fight while still smiling at you. Preparing on your side is just prudence. The attorneys at propertyinsurance.law review these letters and the claims behind them at no cost for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. The significance of a reservation depends on the defenses cited and your claim facts.'
      },
      {
        slug: 'lightning-damage-claim-florida',
        title: 'Is Lightning Damage to Appliances and Electronics Covered?',
        metaTitle: 'Lightning and Power Surge Claims in Florida',
        metaDescription: 'Lightning is a covered peril in Florida, but surge claims get disputed. Learn how to document a strike and recover for damaged electronics and systems.',
        category: 'Property Damage Law', tags: ['lightning', 'electronics', 'coverage basics'],
        author: 'Zaf Goss', date: '2026-08-15',
        links: ['/fire-damage-insurance-claims', '/post/how-to-read-denial-letter-florida'],
        body: [
          { type: 'para', text: 'Florida leads the nation in lightning strikes, and the damage rarely limits itself to a scorch mark. A single strike can destroy air conditioning systems, appliances, televisions, computers, pool equipment, and wiring throughout the home, sometimes without any visible point of impact. Lightning is a covered peril under essentially every homeowners policy, yet these claims get disputed constantly. Here is why, and how to build one that holds up.' },
          { type: 'heading', text: 'Direct Strike Versus Power Surge' },
          { type: 'para', text: 'Insurers distinguish between damage from lightning itself, including strikes to the home or near it, and damage from electrical surges arriving through utility lines. Lightning is broadly covered. Surge coverage varies: some policies cover sudden accidental damage from artificially generated electrical current with sublimits or with carve-outs for electronics and components like circuit boards. When a storm passes and half the electronics in the house die, the insurer’s first move is often to classify the event as an uncovered or sublimited surge rather than lightning. That classification is contestable, and evidence decides it.' },
          { type: 'heading', text: 'Proving the Strike' },
          { type: 'para', text: 'Documentation wins lightning claims. Note the exact date and time damage appeared and preserve any physical evidence: scorching, tripped breakers, damaged service equipment, a shattered tree nearby. Lightning detection data exists for the entire state, and reports mapping strikes near your address at the relevant time are obtainable and persuasive. A licensed electrician’s written findings connecting the failures to a strike event carry significant weight, as do HVAC and appliance technicians’ diagnoses identifying electrical causation.' },
          { type: 'heading', text: 'Scope the Whole Loss' },
          { type: 'para', text: 'Lightning damage reveals itself over days and weeks as components fail. Inventory everything: systems, appliances, electronics, wiring, and smart home equipment, with ages, models, and replacement pricing. Check whether your policy provides replacement cost on contents, and remember that damaged wiring inside walls belongs in the claim alongside the visible casualties.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'If your lightning claim was denied as a surge, buried under an electronics sublimit, or paid at a fraction of the real loss, the attorneys at propertyinsurance.law can evaluate the classification and the evidence for free.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Surge sublimits and contents valuation vary by policy.'
      },
      {
        slug: 'fence-damage-insurance-florida',
        title: 'Does Homeowners Insurance Cover Fence Damage in Florida?',
        metaTitle: 'Fence Damage Claims in Florida: What’s Covered',
        metaDescription: 'Fences fall under other structures coverage in Florida policies. Learn how fence claims are valued, why payments run low, and how to respond.',
        category: 'Property Damage Law', tags: ['storm claims', 'other structures', 'coverage basics'],
        author: 'Zaf Goss', date: '2026-08-28',
        links: ['/wind-and-hail-damage-insurance-claims', '/post/rcv-vs-acv-florida-property-claim'],
        body: [
          { type: 'para', text: 'After every Florida windstorm, fences lean, panels scatter across yards, and homeowners file what looks like the simplest claim imaginable. Then the payment arrives and covers half the contractor’s price, or the loss gets folded under a hurricane deductible and disappears entirely. Fence claims are small, but they teach big lessons about how policies actually work.' },
          { type: 'heading', text: 'Where Fences Live in Your Policy' },
          { type: 'para', text: 'Fences fall under other structures coverage, commonly labeled Coverage B, which protects structures on the property separate from the dwelling: fences, sheds, detached garages, gazebos. The limit is typically set at ten percent of your dwelling coverage, which is usually ample for a fence. Covered perils generally include windstorm, falling trees, vehicle impact, fire, and vandalism, subject to the policy’s exclusions.' },
          { type: 'heading', text: 'Why Fence Payments Run Low' },
          { type: 'para', text: 'Valuation is the usual culprit. Many policies settle fence losses at actual cash value, and insurers depreciate wood fencing aggressively based on age and Florida weathering, sometimes cutting replacement pricing by half or more. Scope is the second problem: adjusters pay to reset a few panels when posts have snapped below grade, or price standard pine when the fence was vinyl or aluminum. The deductible is the third, since fence-only losses often land near or under it, particularly when a hurricane deductible applies.' },
          { type: 'heading', text: 'Trees, Neighbors, and Whose Insurance Pays' },
          { type: 'para', text: 'When a neighbor’s tree lands on your fence, your own policy is ordinarily the one that responds, because insurance follows the damaged property, not the tree’s owner. Negligence by the neighbor, such as ignoring a visibly dead tree, can change the analysis, but the default surprises people. Debris removal for the fallen tree may also carry its own coverage terms and limits.' },
          { type: 'heading', text: 'Making a Small Claim Count' },
          { type: 'para', text: 'Photograph the full fence line, not just the worst section, and capture failed posts at ground level. Get a written repair or replacement estimate from a fencing contractor matching your actual materials. If a storm caused broader property damage, present the fence within that larger claim rather than in isolation.' },
          { type: 'heading', text: 'When to Get Legal Help' },
          { type: 'para', text: 'A fence dispute alone rarely justifies litigation, but fence underpayment is often one symptom of a broader underscoped storm claim. The attorneys at propertyinsurance.law review the whole claim, and evaluations are free for Florida policyholders.' }
        ],
        disclaimer: 'This article provides general information and is not legal advice. Other structures terms and valuation methods vary by policy.'
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

