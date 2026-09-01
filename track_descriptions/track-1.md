# Track 1: IoT Vulnerability Detection

## Focus

Develop a vulnerability detection tool, dataset, or framework for consumer IoT products that continuously identifies security and privacy weaknesses in IoT specifications, firmware, software, protocols, configurations, mobile/cloud interfaces, and deployed systems. The tool should produce technically supported findings that can run within or contribute to the SafeIoT continuous security and privacy evaluation pipeline.

## Potential Categories

Potential categories include but are not limited to the following:

1. **Specification and Protocol Analysis** — identifies security and privacy weaknesses in IoT standards, protocol designs, and security requirements.
2. **Firmware and Software Vulnerability Detection** — analyzes firmware images, binaries, libraries, services, and dependencies for implementation flaws.
3. **Configuration and Deployment Analysis** — detects insecure defaults, exposed interfaces, weak permissions, credential problems, and unsafe deployment practices.
4. **Cross-Layer IoT Security Analysis** — examines interactions among devices, mobile applications, cloud services, hubs, and third-party integrations.
5. **Continuous Vulnerability Monitoring** — repeatedly evaluates IoT products as firmware, dependencies, configurations, standards, and vulnerability intelligence evolve.

## Submission Requirements

**Deadline: 11:59pm, November 30th, 2026 (Anywhere on Earth).** For how to submit, eligibility, prizes, and the rest of the hackathon details, see https://safe-iot.com/#hackathon.

### Scientific Paper (Up to 5 Pages)

- The main body of the paper must not exceed 5 pages. Including references and appendices, the complete submission must not exceed 7 pages. Submissions must be a PDF file in double-column ACM format, using the specified font size, margins, and bibliography style — see https://www.acm.org/publications/proceedings-template, with a simpler version at https://github.com/acmccs/format.
- Present the project as a research contribution in IoT vulnerability detection and security assurance.
- Clearly define the targeted vulnerability detection problem, including the relevant IoT layer, threat model, attacker capabilities, and expected security or privacy impact.
- Describe the proposed detection tool, dataset, or framework, including applicable components such as:
    - IoT artifact collection and preprocessing;
    - firmware unpacking and binary analysis;
    - protocol and specification analysis;
    - static, dynamic, or hybrid program analysis;
    - device, mobile application, and cloud-service interaction analysis;
    - configuration and credential inspection;
    - vulnerability intelligence correlation;
    - exploit validation or evidence generation;
    - structured vulnerability report generation;
    - integration with a continuous evaluation pipeline.
- Define the vulnerability taxonomy addressed by the tool, such as:
    - memory-safety vulnerabilities;
    - command injection;
    - authentication or authorization flaws;
    - hard-coded or default credentials;
    - insecure cryptographic use;
    - exposed services or debugging interfaces;
    - insecure firmware update mechanisms;
    - improper certificate validation;
    - sensitive-data exposure;
    - privacy leakage;
    - protocol state-machine flaws;
    - cross-device or cross-component trust violations;
    - mobile-to-device or cloud-to-device interface vulnerabilities;
    - insecure default configurations;
    - known vulnerable software dependencies;
    - specification–implementation inconsistencies;
    - denial-of-service vulnerabilities;
    - unsafe AI-enabled IoT behavior.
- Include an evaluation methodology with representative datasets, devices, firmware images, implementations, baselines, metrics, and error analysis.
- Where appropriate, validate findings through reproducible proof-of-concept demonstrations, controlled experiments, specification evidence, or manual expert analysis.
- Discuss limitations such as encrypted firmware, proprietary protocols, stripped binaries, unavailable cloud components, hardware dependencies, incomplete documentation, limited ground truth, and risks associated with exploit validation.
- To qualify for an award, the paper will be made public by the hackathon organizers.

### Pitch Video Presentation (Maximum 5 Minutes)

- Provide a concise presentation of the problem, the proposed vulnerability detection framework, the technical workflow, the evaluation, and the potential impact.
- Show an example workflow in which the tool analyzes an IoT product, implementation, protocol, configuration, or supporting service.
- Highlight representative findings, such as an authentication bypass, insecure configuration, vulnerable dependency, protocol flaw, privacy leak, or specification–implementation inconsistency.
- Explain how the tool can support continuous evaluation of consumer IoT products and improve security assurance throughout their lifecycle.
- You are required to use the slide template at https://docs.google.com/presentation/d/1Spw4jJY4EMfca-S9v5YgR1F6E7alMJ3g0vhYLiVTcyE/

### GitHub Repository

- Release the vulnerability detection tool or framework, scripts, rules, test cases, and documentation.
- Include representative IoT artifacts, synthetic examples, or instructions for obtaining public evaluation datasets where redistribution is restricted.
- Include clear setup, installation, and usage instructions.
- Provide reproducibility instructions for running the evaluation and reproducing representative findings.
- Include baseline tools, configurations, or scripts used for comparison.
- Document how new IoT products, firmware formats, protocols, vulnerability classes, detection rules, or test cases can be added.
- Clearly distinguish confirmed vulnerabilities, potential findings requiring manual validation, and unsupported or unverifiable cases.
- License: we recommend using permissive open-source licenses (e.g., MIT, Apache 2.0, or BSD).

## Judging Criteria

### Technical Innovation

- Emphasize the novelty of the proposed vulnerability detection techniques, system design, analysis methods, or continuous evaluation workflow.
- Show how the approach advances beyond existing firmware scanners, vulnerability databases, protocol analyzers, static or dynamic analysis tools, and manual security testing.
- Highlight capabilities such as cross-layer analysis, specification-aware detection, automated evidence generation, previously unsupported vulnerability classes, or continuous reassessment as IoT products evolve.
- Demonstrate how findings are supported by technical evidence from firmware, binaries, execution traces, network traffic, configurations, specifications, applications, cloud interfaces, or device behavior.

### Methodological Rigor

- Define a clear threat model, vulnerability taxonomy, detection rules, and ground-truth methodology.
- Use representative consumer IoT products, firmware images, protocol implementations, applications, cloud components, public datasets, or realistic synthetic benchmarks.
- Compare against existing IoT security scanners, firmware analysis frameworks, static or dynamic analysis tools, vulnerability databases, and manual expert review where applicable.
- Report quantitative metrics such as precision, recall, coverage, false-positive rate, false-negative rate, runtime, scalability, and resource consumption.
- Include qualitative case studies, vulnerability validation, error analysis, and discussion of ethical and responsible testing practices.

### Impact Potential

- Explain how the framework can help manufacturers, researchers, auditors, regulators, enterprise buyers, and consumers identify and mitigate IoT security and privacy risks.
- Connect the work to real-world needs in product security testing, vulnerability disclosure, cybersecurity labeling, procurement, compliance, incident response, and lifecycle risk management.
- Discuss scalability to diverse IoT domains such as routers, cameras, sensors, smart-home products, wearables, medical IoT, industrial IoT, connected vehicles, and edge-AI systems.
- Explain how the tool can run within or contribute to the SafeIoT continuous pipeline for repeatedly evaluating the security and privacy of consumer IoT products.
- Contribute reusable tools, datasets, rules, benchmarks, or test cases to the open-source IoT security ecosystem.

### Clarity and Presentation

- Present the work as a clear end-to-end pipeline:
    - collect IoT products and related artifacts;
    - extract and normalize relevant technical evidence;
    - analyze specifications, firmware, software, protocols, configurations, and interactions;
    - detect potential security or privacy weaknesses;
    - validate and prioritize findings;
    - generate actionable vulnerability reports;
    - support repeated evaluation as products and dependencies evolve.
- Use diagrams, tables, examples, and case studies to make the detection workflow and technical contributions easy to understand.
- Clearly distinguish automatically confirmed vulnerabilities, findings requiring manual review, suspected weaknesses, and conditions that remain unverifiable.
