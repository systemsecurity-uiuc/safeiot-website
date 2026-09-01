# Track 2: IoT SBOM, CBOM and AI-BOM Verification

## Focus

Develop a tool, dataset, or verification framework for IoT supply-chain transparency that checks whether an IoT device's SBOM, CBOM, and AI-BOM are complete, consistent, and supported by technical evidence from firmware, configuration files, cryptographic assets, model metadata, documentation, and vulnerability/security databases.

## Potential Categories

Potential categories include but are not limited to the following:

1. **Credible BOM Generation** — produces trustworthy SBOM, CBOM, and AI-BOM artifacts from IoT firmware, software packages, cryptographic assets, and AI components with evidence-backed component identification.
2. **BOM Verification** — checks whether declared BOM entries are complete, accurate, and supported by device-level evidence.
3. **BOM Compliance Check** — evaluates BOM artifacts against NIST, CISA, and relevant IoT industry standards or best practices.
4. **BOM Analysis** — uses BOM data to support vulnerability detection, risk triage, license review, cryptographic risk assessment, and AI component risk analysis.

## Submission Requirements

**Deadline: 11:59pm, November 30th, 2026 (Anywhere on Earth).** For how to submit, eligibility, prizes, and the rest of the hackathon details, see https://safe-iot.com/#hackathon.

### Scientific Paper (Up to 5 Pages)

- The main body of the paper must not exceed 5 pages. Including references and appendices, the complete submission must not exceed 7 pages. Submissions must be a PDF file in double-column ACM format, using the specified font size, margins, and bibliography style — see https://www.acm.org/publications/proceedings-template, with a simpler version at https://github.com/acmccs/format.
- Present the project as a research contribution in IoT supply-chain security verification.
- Clearly define the verification problem for SBOM, CBOM, and AI-BOM artifacts.
- Describe the proposed verification framework, including:
    - firmware unpacking and artifact extraction;
    - software component identification;
    - cryptographic asset and primitive discovery;
    - AI model/runtime detection;
    - cross-checking against declared BOM entries;
    - structured verification report generation.
- Define the verification taxonomy, such as:
    - missing software component;
    - incorrect component version;
    - undeclared dependency;
    - vulnerable component;
    - deprecated cryptographic primitive;
    - weak key size;
    - expired or self-signed certificate;
    - missing AI model metadata;
    - inconsistent AI model/runtime dependency;
    - unverifiable provenance claim;
    - wrong or missing license information.
- Include an evaluation methodology with datasets, baselines, metrics, and error analysis.
- Discuss limitations such as encrypted firmware, proprietary components, stripped binaries, incomplete documentation, and unverifiable claims.
- To qualify for an award, the paper will be made public by the hackathon organizers.

### Pitch Video Presentation (Maximum 5 Minutes)

- Provide a concise presentation of the problem, the proposed verification framework, the technical workflow, the evaluation, and the potential impact.
- Show an example workflow where an IoT device's SBOM, CBOM, and AI-BOM are checked against extracted device evidence.
- Highlight representative verification findings, such as missing components, incorrect versions, weak cryptography, or undocumented AI models.
- Explain why unified BOM verification improves IoT supply-chain transparency, security assurance, and compliance.
- You are required to use the slide template at https://docs.google.com/presentation/d/1Spw4jJY4EMfca-S9v5YgR1F6E7alMJ3g0vhYLiVTcyE/

### GitHub Repository

- Release the verification tool or framework, scripts, rules, test cases, and documentation.
- Include examples of SBOM, CBOM, and AI-BOM artifacts.
- Include clear setup, installation, and usage instructions.
- Provide reproducibility instructions for running the evaluation and reproducing representative findings.
- Include baseline tools, configurations, or scripts used for comparison.
- Document how new IoT devices, BOM formats, verification rules, or test cases can be added.
- License: we recommend using permissive open-source licenses (e.g., MIT, Apache 2.0, or BSD).

## Judging Criteria

### Technical Innovation

- Emphasize the novelty of unified verification across SBOM, CBOM, and AI-BOM artifacts.
- Highlight cross-BOM consistency checking between software, cryptographic, and AI components.
- Show how the framework verifies declared BOM claims against device-level evidence from firmware, binaries, configuration files, certificates, model files, and documentation.

### Methodological Rigor

- Define clear verification rules and ground-truth labels.
- Use representative IoT devices, firmware images, documentation, or synthetic benchmark artifacts.
- Compare against existing SBOM validators, firmware analysis tools, vulnerability scanners, crypto scanners, and manual expert review where applicable.
- Report quantitative metrics such as precision, recall, coverage, false-positive rate, false-negative rate, and runtime.
- Include qualitative case studies and error analysis.

### Impact Potential

- Explain how the framework can help manufacturers, auditors, regulators, and enterprise buyers assess IoT supply-chain risk.
- Connect the work to real-world needs in software transparency, cryptographic transparency, AI model transparency, compliance, and procurement security.
- Discuss scalability to diverse IoT domains such as routers, cameras, sensors, smart-home devices, medical IoT, industrial IoT, and edge-AI systems.
- Explain how the tool can run within or contribute to the SafeIoT continuous pipeline for repeatedly evaluating the security and privacy of consumer IoT products.
- Contribute reusable tools, datasets, rules, benchmarks, or test cases to the open-source IoT security ecosystem.

### Clarity and Presentation

- Present the work as a clear end-to-end pipeline:
    - collect IoT artifacts;
    - extract software, cryptographic, and AI evidence;
    - normalize BOM data;
    - compare declared claims with extracted evidence;
    - flag inconsistencies and risks;
    - generate verification results.
- Use diagrams, tables, examples, and case studies to make the verification workflow easy to understand.
- Clearly distinguish what is verified automatically, what requires manual review, and what remains unverifiable.
