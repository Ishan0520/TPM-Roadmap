# TPM Role & Skill Map (2026)

## 1. Automotive

### 1.1 Vehicle Software

#### 1.1.1 Charging Systems

- TPM Responsibilities:
  - Own end-to-end delivery of EV charging software (onboard + backend integration)
  - Align vehicle firmware, BMS, and charging infrastructure teams
  - Define roadmap for charging performance (speed, reliability, compatibility)
  - Manage interoperability with charging standards (CCS, NACS, ISO 15118)
  - Drive issue resolution for field failures (charging drops, thermal issues)
  - Coordinate OTA updates for charging improvements
  - Track regulatory compliance (regional charging protocols)

- Skills Hiring Managers Look For (2026):

  - Technical:
    - EV charging protocols (CCS, NACS, ISO 15118)
    - Battery Management Systems (BMS)
    - Embedded systems + firmware lifecycle
    - Power electronics basics
    - Cloud-connected vehicle architecture

  - Program Management:
    - Cross-functional roadmap planning (HW + SW + infra)
    - Risk management in safety-critical systems
    - Release planning for OTA updates
    - Dependency management across suppliers

  - Tools:
    - JIRA / ADO for execution tracking
    - Vector tools (CANoe, CANalyzer)
    - MATLAB/Simulink (nice to have)
    - Data dashboards (Tableau, Power BI)

  - Metrics Ownership:
    - Charging success rate (%)
    - Time-to-charge (performance KPI)
    - Field failure rate
    - OTA update success rate
    - Energy efficiency metrics

  - Cross-functional Interfaces:
    - Battery engineering
    - Embedded software teams
    - Charging infrastructure partners
    - Suppliers (Tier 1s)
    - Regulatory/compliance teams

- Example TPM Projects:
  - Launch OTA update improving charging speed by 15%
  - Integrate vehicle with new charging standard (NACS transition)
  - Reduce charging session failures across 3 markets

- Common Challenges:
  - Hardware-software dependency delays
  - Regional standard fragmentation
  - Field failures with unclear root cause
  - Supplier coordination complexity

---

#### 1.1.2 Infotainment

- TPM Responsibilities:
  - Own infotainment system delivery (UI, apps, connectivity)
  - Coordinate Android Automotive / Linux-based platforms
  - Manage integration of third-party apps (maps, media, voice)
  - Drive latency, responsiveness, and UX improvements
  - Oversee OTA releases for infotainment stack
  - Align UX, software, and hardware timelines

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Embedded Linux / Android Automotive
    - UI/UX system architecture
    - Connectivity (Bluetooth, Wi-Fi, 5G)
    - Middleware and API integration

  - Program Management:
    - Agile execution at scale
    - Release train management
    - Vendor coordination (Google, Apple, Tier 1s)
    - Customer experience prioritization

  - Tools:
    - JIRA / Confluence
    - ADB, logcat (debugging familiarity)
    - UX analytics tools
    - CI/CD pipelines

  - Metrics Ownership:
    - System boot time
    - UI latency
    - Crash rate
    - User engagement metrics
    - OTA success rate

  - Cross-functional Interfaces:
    - UX/UI teams
    - Mobile app teams
    - Embedded engineers
    - Cloud services teams
    - External partners (Google/Apple)

- Example TPM Projects:
  - Launch next-gen infotainment system with app ecosystem
  - Reduce system boot time by 30%
  - Integrate voice assistant with vehicle controls

- Common Challenges:
  - High customer expectations (consumer-grade UX)
  - Frequent OTA updates with risk
  - Vendor dependency (Google ecosystem)
  - Hardware limitations vs UX demands

---

### 1.2 Hardware

#### 1.2.1 Powertrain

- TPM Responsibilities:
  - Lead development of electric powertrain systems (motor, inverter, battery integration)
  - Coordinate design → validation → production lifecycle
  - Manage supplier timelines for critical components
  - Drive cost, performance, and efficiency trade-offs
  - Oversee validation testing (thermal, durability, efficiency)

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Electric motors & inverters
    - Power electronics
    - Battery systems integration
    - Thermal management systems

  - Program Management:
    - Hardware lifecycle management (V-cycle)
    - Supplier program coordination
    - Risk mitigation in production ramp
    - Cost optimization strategies

  - Tools:
    - PLM tools (Teamcenter, Windchill)
    - MS Project / Smartsheet
    - Simulation tools (basic understanding)

  - Metrics Ownership:
    - Power efficiency (%)
    - Cost per unit
    - Defect rates
    - Production yield
    - Time-to-production (SOP readiness)

  - Cross-functional Interfaces:
    - Mechanical engineering
    - Electrical engineering
    - Manufacturing teams
    - Suppliers (Tier 1 & Tier 2)
    - Quality & validation teams

- Example TPM Projects:
  - Launch new inverter system improving efficiency by 10%
  - Coordinate global supplier ramp for battery packs
  - Reduce production defects in motor assembly

- Common Challenges:
  - Long hardware development cycles
  - Supplier delays impacting timelines
  - High cost-pressure vs performance
  - Testing bottlenecks before production

---
### 1.3 ADAS & Autonomous Systems

#### 1.3.1 Perception Systems (Computer Vision, Sensors)

- TPM Responsibilities:
  - Lead development of perception stack (camera, radar, LiDAR integration)
  - Coordinate ML, sensor hardware, and data engineering teams
  - Define roadmap for perception accuracy and safety improvements
  - Manage large-scale data collection, labeling, and model training pipelines
  - Drive validation for real-world edge cases (weather, lighting, traffic scenarios)
  - Ensure compliance with safety standards (ISO 26262, SOTIF)

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Computer vision fundamentals
    - Sensor fusion (camera, radar, LiDAR)
    - Machine learning lifecycle (training → deployment)
    - Edge AI systems
    - Autonomous driving stacks (L2–L4)

  - Program Management:
    - Managing AI/ML programs with iterative releases
    - Handling uncertainty in model performance
    - Data-driven prioritization
    - Safety-critical program execution

  - Tools:
    - Python (basic understanding)
    - Data pipelines (Spark, Airflow exposure)
    - ML tracking tools (MLflow, Weights & Biases)
    - Simulation environments (CARLA, NVIDIA DRIVE Sim)

  - Metrics Ownership:
    - Object detection accuracy (precision/recall)
    - False positive / false negative rates
    - Edge case coverage
    - Model latency
    - Safety incident rates

  - Cross-functional Interfaces:
    - ML engineers
    - Data engineering teams
    - Sensor hardware teams
    - Safety & validation teams
    - Regulatory bodies

- Example TPM Projects:
  - Improve pedestrian detection accuracy in low-light conditions
  - Scale data labeling pipeline for autonomous driving datasets
  - Launch perception system for highway autopilot feature

- Common Challenges:
  - Data dependency (need massive labeled datasets)
  - Edge case unpredictability
  - Real-world vs simulation gaps
  - Safety validation complexity

---

#### 1.3.2 Planning & Control Systems

- TPM Responsibilities:
  - Own motion planning and vehicle control system delivery
  - Coordinate between perception outputs and vehicle actuation
  - Ensure smooth, safe, and predictable vehicle behavior
  - Drive real-time system performance improvements
  - Oversee integration with vehicle hardware (steering, braking)

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Control systems (PID, MPC basics)
    - Robotics fundamentals
    - Real-time systems
    - Path planning algorithms

  - Program Management:
    - Managing tightly coupled real-time systems
    - Integration-heavy program execution
    - Safety and validation planning
    - Scenario-based testing strategy

  - Tools:
    - MATLAB/Simulink
    - ROS (Robot Operating System)
    - Simulation tools
    - Logging & telemetry systems

  - Metrics Ownership:
    - Path smoothness
    - Latency (ms-level performance)
    - Intervention rate
    - Passenger comfort metrics

  - Cross-functional Interfaces:
    - Perception teams
    - Vehicle dynamics teams
    - Embedded systems teams
    - Validation & test engineers

- Example TPM Projects:
  - Reduce harsh braking events by optimizing control algorithms
  - Improve lane change smoothness in highway autopilot
  - Integrate planning system with new sensor stack

- Common Challenges:
  - Real-time constraints
  - Complex system dependencies
  - Safety-critical failures
  - Hardware-software synchronization

---

### 1.4 Connectivity & Cloud Integration

#### 1.4.1 Telematics & Connected Vehicle Platforms

- TPM Responsibilities:
  - Lead development of connected vehicle platform (vehicle ↔ cloud)
  - Manage APIs for vehicle data ingestion and remote commands
  - Coordinate backend services, mobile apps, and vehicle firmware
  - Ensure scalability for millions of connected vehicles
  - Drive cybersecurity and data privacy compliance

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Cloud platforms (AWS, Azure, GCP)
    - IoT architectures
    - API design & microservices
    - Vehicle telematics systems
    - Cybersecurity fundamentals

  - Program Management:
    - Large-scale distributed system delivery
    - Platform roadmap planning
    - Incident management (production systems)
    - SLA/SLO ownership

  - Tools:
    - Kubernetes / Docker
    - API gateways
    - Monitoring tools (Datadog, Prometheus)
    - Postman / Swagger

  - Metrics Ownership:
    - API latency
    - System uptime (SLA)
    - Data ingestion rate
    - Error rates
    - Active connected vehicles

  - Cross-functional Interfaces:
    - Cloud engineering teams
    - Mobile app teams
    - Embedded vehicle teams
    - Cybersecurity teams
    - Product management

- Example TPM Projects:
  - Launch remote vehicle control features (lock/unlock, climate)
  - Scale platform to support 1M+ connected vehicles
  - Improve system uptime from 99.5% → 99.9%

- Common Challenges:
  - Scalability issues
  - Security vulnerabilities
  - Integration across heterogeneous systems
  - Real-time data reliability

---
## 2. EV Industry

### 2.1 Battery Systems

#### 2.1.1 Battery Management Systems (BMS)

- TPM Responsibilities:
  - Own end-to-end BMS software + hardware integration
  - Coordinate cell chemistry, firmware, and vehicle integration teams
  - Define roadmap for battery safety, performance, and longevity
  - Drive validation for thermal runaway, degradation, and safety scenarios
  - Manage OTA updates for battery optimization algorithms
  - Ensure compliance with safety standards (ISO 26262, UN 38.3)

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Battery chemistry (Li-ion, LFP, solid-state basics)
    - State of Charge (SoC) / State of Health (SoH) algorithms
    - Embedded systems & firmware
    - Thermal management systems
    - High-voltage systems

  - Program Management:
    - Safety-critical program execution
    - Hardware-software co-development
    - Risk management in battery failures
    - Supplier coordination (cell manufacturers)

  - Tools:
    - CAN tools (CANoe, CANalyzer)
    - MATLAB/Simulink
    - Data analysis tools (Python, Excel)
    - PLM tools

  - Metrics Ownership:
    - Battery degradation rate
    - Range accuracy
    - Thermal stability metrics
    - Field failure rate
    - Charging cycle efficiency

  - Cross-functional Interfaces:
    - Cell suppliers (CATL, Panasonic, LG)
    - Embedded software teams
    - Vehicle integration teams
    - Safety & compliance teams

- Example TPM Projects:
  - Improve battery life by optimizing charging algorithms
  - Reduce thermal incidents through improved monitoring
  - Launch OTA update improving range estimation accuracy

- Common Challenges:
  - Safety risks (thermal runaway)
  - Cell variability across suppliers
  - Complex degradation modeling
  - Hardware limitations vs software optimization

---

#### 2.1.2 Battery Pack & Thermal Systems

- TPM Responsibilities:
  - Lead battery pack design integration (mechanical + electrical + thermal)
  - Coordinate cooling systems (liquid/air) with battery modules
  - Manage validation testing (crash, thermal, durability)
  - Drive cost optimization and packaging efficiency
  - Oversee production readiness and scaling

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Thermal systems (liquid cooling, heat transfer basics)
    - Mechanical packaging
    - Electrical integration (high voltage systems)
    - Manufacturing processes for battery packs

  - Program Management:
    - Hardware lifecycle execution (design → validation → production)
    - Supplier program management
    - Cost vs performance trade-offs
    - Production ramp planning

  - Tools:
    - CAD/CAE exposure
    - PLM tools
    - MS Project / Smartsheet

  - Metrics Ownership:
    - Energy density (Wh/kg)
    - Thermal efficiency
    - Pack cost ($/kWh)
    - Production yield
    - Defect rates

  - Cross-functional Interfaces:
    - Mechanical engineering
    - Thermal engineering
    - Manufacturing teams
    - Suppliers

- Example TPM Projects:
  - Reduce battery pack cost by 20% through design optimization
  - Improve cooling efficiency for high-performance EVs
  - Launch new battery pack platform for next-gen vehicle

- Common Challenges:
  - Thermal constraints
  - Cost pressure
  - Manufacturing complexity
  - Supply chain risks

---

### 2.2 Charging Infrastructure

#### 2.2.1 Fast Charging Networks

- TPM Responsibilities:
  - Lead deployment of fast-charging infrastructure (hardware + software)
  - Coordinate site selection, grid integration, and installation
  - Manage backend systems for payments, availability, and monitoring
  - Drive reliability and uptime of charging stations
  - Align with utilities and regulatory bodies

- Skills Hiring Managers Look For (2026):

  - Technical:
    - EV charging systems (DC fast charging)
    - Grid integration basics
    - IoT systems
    - Backend platforms

  - Program Management:
    - Infrastructure deployment programs
    - Vendor & contractor management
    - Regulatory coordination
    - Multi-site rollout planning

  - Tools:
    - GIS tools (site planning)
    - Project management tools
    - Monitoring dashboards

  - Metrics Ownership:
    - Charger uptime (%)
    - Utilization rate
    - Energy throughput
    - Installation cycle time

  - Cross-functional Interfaces:
    - Utilities
    - Construction teams
    - Hardware vendors
    - Government/regulators

- Example TPM Projects:
  - Deploy 500+ fast chargers across multiple states
  - Improve uptime from 92% → 98%
  - Integrate payment systems across networks

- Common Challenges:
  - Grid constraints
  - High capital costs
  - Regulatory delays
  - Maintenance & uptime issues

---

#### 2.2.2 Vehicle-to-Grid (V2G) Systems

- TPM Responsibilities:
  - Lead development of bidirectional charging systems
  - Coordinate vehicle, charger, and grid interaction
  - Define use cases (energy storage, grid balancing)
  - Manage pilot programs with utilities
  - Ensure cybersecurity and regulatory compliance

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Power systems & grid fundamentals
    - Bidirectional charging technology
    - Energy management systems
    - IoT + cloud integration

  - Program Management:
    - Pilot program execution
    - Stakeholder alignment (utilities, regulators)
    - Business case development

  - Tools:
    - Energy simulation tools
    - Cloud platforms
    - Data analytics tools

  - Metrics Ownership:
    - Energy flow efficiency
    - Grid impact metrics
    - Revenue from V2G programs
    - System reliability

  - Cross-functional Interfaces:
    - Utilities
    - Vehicle engineering teams
    - Charging infrastructure teams
    - Regulators

- Example TPM Projects:
  - Launch V2G pilot with utility partner
  - Enable EV fleet to provide grid backup power
  - Optimize energy dispatch algorithms

- Common Challenges:
  - Regulatory uncertainty
  - Grid compatibility
  - Economic viability
  - Cybersecurity risks

---
## 3. Semiconductor

### 3.1 Chip Design

#### 3.1.1 Frontend Design (RTL, Architecture)

- TPM Responsibilities:
  - Drive end-to-end SoC architecture and RTL development programs
  - Align IP teams (CPU, GPU, accelerators) with product requirements
  - Manage design milestones (spec → RTL freeze → tape-in)
  - Coordinate cross-site/global design teams
  - Track PPA (Power, Performance, Area) targets vs roadmap
  - Ensure design readiness for verification and physical design

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Digital design fundamentals (RTL, Verilog/SystemVerilog)
    - SoC architecture (CPU, GPU, AI accelerators)
    - IP integration concepts
    - PPA trade-offs

  - Program Management:
    - Complex multi-team program execution
    - Milestone-driven execution (tape-out schedules)
    - Dependency management across IP blocks
    - Risk mitigation in design cycles

  - Tools:
    - JIRA / Confluence
    - Design tracking dashboards
    - Basic EDA flow understanding

  - Metrics Ownership:
    - PPA targets (Power, Performance, Area)
    - RTL bug rate
    - Schedule adherence to tape-out
    - Design re-spin rate

  - Cross-functional Interfaces:
    - Architecture teams
    - RTL design engineers
    - Verification teams
    - Physical design teams
    - Product teams

- Example TPM Projects:
  - Deliver next-gen AI accelerator SoC architecture
  - Align multi-IP integration for mobile SoC launch
  - Reduce re-spin risk through early design validation

- Common Challenges:
  - High design complexity
  - Tight tape-out deadlines
  - Cross-team dependencies
  - Late-stage design changes

---

#### 3.1.2 Verification & Validation

- TPM Responsibilities:
  - Own verification strategy (simulation, emulation, formal)
  - Coordinate testbench development and coverage closure
  - Drive bug triage and resolution cycles
  - Ensure design meets functional and performance requirements
  - Align verification timelines with tape-out deadlines

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Verification methodologies (UVM)
    - Simulation & emulation flows
    - Functional coverage concepts
    - Debugging complex silicon issues

  - Program Management:
    - Managing long verification cycles
    - Prioritizing critical bugs
    - Coverage-driven execution
    - Cross-team coordination

  - Tools:
    - EDA tools (Synopsys, Cadence, Mentor)
    - Bug tracking systems
    - Regression dashboards

  - Metrics Ownership:
    - Coverage metrics (%)
    - Bug closure rate
    - Regression pass rate
    - Pre-silicon quality metrics

  - Cross-functional Interfaces:
    - RTL design teams
    - Emulation teams
    - Physical design teams
    - Silicon validation teams

- Example TPM Projects:
  - Achieve 100% functional coverage before tape-out
  - Reduce critical bugs by 40% before silicon validation
  - Scale verification infrastructure for large SoCs

- Common Challenges:
  - Long cycles with late bug discovery
  - High compute resource requirements
  - Debugging complexity
  - Alignment with aggressive schedules

---

### 3.2 Physical Design & Manufacturing

#### 3.2.1 Physical Design (Backend)

- TPM Responsibilities:
  - Drive backend implementation (floorplanning → routing → timing closure)
  - Coordinate with frontend teams for design handoff
  - Ensure timing, power, and area closure before tape-out
  - Manage design iterations and ECO cycles
  - Track readiness for fabrication

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Physical design flow (place & route, timing closure)
    - STA (Static Timing Analysis)
    - Power optimization techniques
    - Design for manufacturability (DFM)

  - Program Management:
    - Iterative execution under tight timelines
    - Managing ECO cycles
    - Risk mitigation for timing failures

  - Tools:
    - Cadence Innovus, Synopsys ICC2
    - Timing analysis tools
    - Design dashboards

  - Metrics Ownership:
    - Timing closure (setup/hold violations)
    - Power consumption
    - Area utilization
    - Tape-out readiness

  - Cross-functional Interfaces:
    - RTL teams
    - Foundries (TSMC, Samsung)
    - Verification teams
    - Packaging teams

- Example TPM Projects:
  - Achieve timing closure for 5nm chip design
  - Reduce power consumption by optimizing backend design
  - Deliver tape-out on schedule

- Common Challenges:
  - Tight timing constraints
  - Multiple design iterations
  - Foundry-specific requirements
  - Late-stage ECO changes

---

#### 3.2.2 Semiconductor Manufacturing (Fab)

- TPM Responsibilities:
  - Lead fab process development and production ramp
  - Coordinate with foundries for yield improvement
  - Manage process nodes (5nm, 3nm, etc.)
  - Drive defect reduction and yield optimization
  - Align supply chain for wafer production

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Semiconductor fabrication processes (lithography, etching, deposition)
    - Yield engineering
    - Process nodes and scaling challenges
    - Equipment basics (EUV lithography)

  - Program Management:
    - Production ramp planning
    - Yield improvement programs
    - Supplier/foundry coordination
    - Risk management in high-cost environments

  - Tools:
    - MES systems
    - Yield dashboards
    - Statistical analysis tools

  - Metrics Ownership:
    - Yield (%)
    - Defect density
    - Cost per wafer
    - Throughput

  - Cross-functional Interfaces:
    - Foundries
    - Equipment vendors (ASML, Applied Materials)
    - Design teams
    - Supply chain teams

- Example TPM Projects:
  - Improve yield from 70% → 90% for new node
  - Ramp production for new chip generation
  - Reduce defect density through process optimization

- Common Challenges:
  - Extremely high capital costs
  - Yield variability
  - Process complexity
  - Supply chain dependencies

---

### 3.3 Packaging & Testing

#### 3.3.1 Advanced Packaging (Chiplets, 3D IC)

- TPM Responsibilities:
  - Lead advanced packaging programs (chiplets, 2.5D/3D integration)
  - Coordinate die-to-die interconnect design
  - Manage thermal and mechanical constraints
  - Align packaging with system-level performance goals
  - Drive innovation in heterogeneous integration

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Chiplet architectures
    - Interconnect technologies (HBM, TSV)
    - Thermal/mechanical design basics
    - System-level performance optimization

  - Program Management:
    - Multi-die integration programs
    - Cross-company collaboration
    - Innovation roadmap planning

  - Tools:
    - Packaging design tools
    - Simulation tools

  - Metrics Ownership:
    - Bandwidth performance
    - Thermal efficiency
    - Yield of packaged units
    - Cost per package

  - Cross-functional Interfaces:
    - Design teams
    - Foundries
    - Packaging vendors
    - System architects

- Example TPM Projects:
  - Launch chiplet-based AI accelerator
  - Integrate HBM memory with compute die
  - Improve thermal performance of 3D IC

- Common Challenges:
  - Thermal constraints
  - Integration complexity
  - Cost of advanced packaging
  - Supply chain coordination

---
## 3. Semiconductor

### 3.1 Chip Design

#### 3.1.1 Frontend Design (RTL, Architecture)

- TPM Responsibilities:
  - Drive end-to-end SoC architecture and RTL development programs
  - Align IP teams (CPU, GPU, accelerators) with product requirements
  - Manage design milestones (spec → RTL freeze → tape-in)
  - Coordinate cross-site/global design teams
  - Track PPA (Power, Performance, Area) targets vs roadmap
  - Ensure design readiness for verification and physical design

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Digital design fundamentals (RTL, Verilog/SystemVerilog)
    - SoC architecture (CPU, GPU, AI accelerators)
    - IP integration concepts
    - PPA trade-offs

  - Program Management:
    - Complex multi-team program execution
    - Milestone-driven execution (tape-out schedules)
    - Dependency management across IP blocks
    - Risk mitigation in design cycles

  - Tools:
    - JIRA / Confluence
    - Design tracking dashboards
    - Basic EDA flow understanding

  - Metrics Ownership:
    - PPA targets (Power, Performance, Area)
    - RTL bug rate
    - Schedule adherence to tape-out
    - Design re-spin rate

  - Cross-functional Interfaces:
    - Architecture teams
    - RTL design engineers
    - Verification teams
    - Physical design teams
    - Product teams

- Example TPM Projects:
  - Deliver next-gen AI accelerator SoC architecture
  - Align multi-IP integration for mobile SoC launch
  - Reduce re-spin risk through early design validation

- Common Challenges:
  - High design complexity
  - Tight tape-out deadlines
  - Cross-team dependencies
  - Late-stage design changes

---

#### 3.1.2 Verification & Validation

- TPM Responsibilities:
  - Own verification strategy (simulation, emulation, formal)
  - Coordinate testbench development and coverage closure
  - Drive bug triage and resolution cycles
  - Ensure design meets functional and performance requirements
  - Align verification timelines with tape-out deadlines

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Verification methodologies (UVM)
    - Simulation & emulation flows
    - Functional coverage concepts
    - Debugging complex silicon issues

  - Program Management:
    - Managing long verification cycles
    - Prioritizing critical bugs
    - Coverage-driven execution
    - Cross-team coordination

  - Tools:
    - EDA tools (Synopsys, Cadence, Mentor)
    - Bug tracking systems
    - Regression dashboards

  - Metrics Ownership:
    - Coverage metrics (%)
    - Bug closure rate
    - Regression pass rate
    - Pre-silicon quality metrics

  - Cross-functional Interfaces:
    - RTL design teams
    - Emulation teams
    - Physical design teams
    - Silicon validation teams

- Example TPM Projects:
  - Achieve 100% functional coverage before tape-out
  - Reduce critical bugs by 40% before silicon validation
  - Scale verification infrastructure for large SoCs

- Common Challenges:
  - Long cycles with late bug discovery
  - High compute resource requirements
  - Debugging complexity
  - Alignment with aggressive schedules

---

### 3.2 Physical Design & Manufacturing

#### 3.2.1 Physical Design (Backend)

- TPM Responsibilities:
  - Drive backend implementation (floorplanning → routing → timing closure)
  - Coordinate with frontend teams for design handoff
  - Ensure timing, power, and area closure before tape-out
  - Manage design iterations and ECO cycles
  - Track readiness for fabrication

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Physical design flow (place & route, timing closure)
    - STA (Static Timing Analysis)
    - Power optimization techniques
    - Design for manufacturability (DFM)

  - Program Management:
    - Iterative execution under tight timelines
    - Managing ECO cycles
    - Risk mitigation for timing failures

  - Tools:
    - Cadence Innovus, Synopsys ICC2
    - Timing analysis tools
    - Design dashboards

  - Metrics Ownership:
    - Timing closure (setup/hold violations)
    - Power consumption
    - Area utilization
    - Tape-out readiness

  - Cross-functional Interfaces:
    - RTL teams
    - Foundries (TSMC, Samsung)
    - Verification teams
    - Packaging teams

- Example TPM Projects:
  - Achieve timing closure for 5nm chip design
  - Reduce power consumption by optimizing backend design
  - Deliver tape-out on schedule

- Common Challenges:
  - Tight timing constraints
  - Multiple design iterations
  - Foundry-specific requirements
  - Late-stage ECO changes

---

#### 3.2.2 Semiconductor Manufacturing (Fab)

- TPM Responsibilities:
  - Lead fab process development and production ramp
  - Coordinate with foundries for yield improvement
  - Manage process nodes (5nm, 3nm, etc.)
  - Drive defect reduction and yield optimization
  - Align supply chain for wafer production

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Semiconductor fabrication processes (lithography, etching, deposition)
    - Yield engineering
    - Process nodes and scaling challenges
    - Equipment basics (EUV lithography)

  - Program Management:
    - Production ramp planning
    - Yield improvement programs
    - Supplier/foundry coordination
    - Risk management in high-cost environments

  - Tools:
    - MES systems
    - Yield dashboards
    - Statistical analysis tools

  - Metrics Ownership:
    - Yield (%)
    - Defect density
    - Cost per wafer
    - Throughput

  - Cross-functional Interfaces:
    - Foundries
    - Equipment vendors (ASML, Applied Materials)
    - Design teams
    - Supply chain teams

- Example TPM Projects:
  - Improve yield from 70% → 90% for new node
  - Ramp production for new chip generation
  - Reduce defect density through process optimization

- Common Challenges:
  - Extremely high capital costs
  - Yield variability
  - Process complexity
  - Supply chain dependencies

---

### 3.3 Packaging & Testing

#### 3.3.1 Advanced Packaging (Chiplets, 3D IC)

- TPM Responsibilities:
  - Lead advanced packaging programs (chiplets, 2.5D/3D integration)
  - Coordinate die-to-die interconnect design
  - Manage thermal and mechanical constraints
  - Align packaging with system-level performance goals
  - Drive innovation in heterogeneous integration

- Skills Hiring Managers Look For (2026):

  - Technical:
    - Chiplet architectures
    - Interconnect technologies (HBM, TSV)
    - Thermal/mechanical design basics
    - System-level performance optimization

  - Program Management:
    - Multi-die integration programs
    - Cross-company collaboration
    - Innovation roadmap planning

  - Tools:
    - Packaging design tools
    - Simulation tools

  - Metrics Ownership:
    - Bandwidth performance
    - Thermal efficiency
    - Yield of packaged units
    - Cost per package

  - Cross-functional Interfaces:
    - Design teams
    - Foundries
    - Packaging vendors
    - System architects

- Example TPM Projects:
  - Launch chiplet-based AI accelerator
  - Integrate HBM memory with compute die
  - Improve thermal performance of 3D IC

- Common Challenges:
  - Thermal constraints
  - Integration complexity
  - Cost of advanced packaging
  - Supply chain coordination

---
