export const packageDesigns = [
  {
    id: 'PKG-2026-001', name: 'HBM3E Base Die Package', type: 'WLP', status: 'approved',
    designer: 'Kim J.H.', designerKr: '김준혁', modified: '2026-02-15',
    specs: { dimensions: '12×8×1.2mm', pinCount: 1024, pitch: '0.4mm', material: 'Organic Substrate', dieSize: '8×6mm', wireBond: 'Copper Pillar', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-002', name: 'DDR5 FBGA Package', type: 'BGA', status: 'review',
    designer: 'Park S.Y.', designerKr: '박서연', modified: '2026-02-14',
    specs: { dimensions: '14×10×1.0mm', pinCount: 256, pitch: '0.8mm', material: 'BT Substrate', dieSize: '10×7mm', wireBond: 'Gold Wire', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-003', name: 'NAND TSV Stack Package', type: 'CSP', status: 'draft',
    designer: 'Lee M.K.', designerKr: '이민경', modified: '2026-02-13',
    specs: { dimensions: '11×9×1.4mm', pinCount: 512, pitch: '0.5mm', material: 'Silicon Interposer', dieSize: '9×7mm', wireBond: 'TSV Cu Pillar', encapsulation: 'Underfill + EMC' }
  },
  {
    id: 'PKG-2026-004', name: 'LPDDR5X Module', type: 'PoP', status: 'approved',
    designer: 'Choi H.W.', designerKr: '최현우', modified: '2026-02-12',
    specs: { dimensions: '15×15×1.3mm', pinCount: 640, pitch: '0.4mm', material: 'Organic Substrate', dieSize: '12×10mm', wireBond: 'Copper Pillar', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-005', name: 'CIS Sensor Package', type: 'CSP', status: 'review',
    designer: 'Jung Y.J.', designerKr: '정유진', modified: '2026-02-11',
    specs: { dimensions: '8×6×0.8mm', pinCount: 128, pitch: '0.35mm', material: 'Glass Substrate', dieSize: '6×4mm', wireBond: 'Flip Chip', encapsulation: 'Transparent Mold' }
  },
  {
    id: 'PKG-2026-006', name: 'HBM3E Top Die', type: 'WLP', status: 'draft',
    designer: 'Kim J.H.', designerKr: '김준혁', modified: '2026-02-10',
    specs: { dimensions: '12×8×0.6mm', pinCount: 1024, pitch: '0.4mm', material: 'Silicon', dieSize: '8×6mm', wireBond: 'Micro Bump', encapsulation: 'Thin Film' }
  },
  {
    id: 'PKG-2026-007', name: 'DDR5 QFP Package', type: 'QFP', status: 'rejected',
    designer: 'Yoon D.H.', designerKr: '윤동현', modified: '2026-02-09',
    specs: { dimensions: '28×28×3.4mm', pinCount: 208, pitch: '0.5mm', material: 'Lead Frame', dieSize: '10×10mm', wireBond: 'Gold Wire', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-008', name: 'NAND SOP Flash', type: 'SOP', status: 'approved',
    designer: 'Shin E.J.', designerKr: '신은지', modified: '2026-02-08',
    specs: { dimensions: '20×8×2.0mm', pinCount: 48, pitch: '1.27mm', material: 'Lead Frame', dieSize: '8×5mm', wireBond: 'Gold Wire', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-009', name: 'AI Accelerator Fan-Out', type: 'Fan-Out WLP', status: 'review',
    designer: 'Han S.M.', designerKr: '한성민', modified: '2026-02-07',
    specs: { dimensions: '25×25×0.5mm', pinCount: 2048, pitch: '0.3mm', material: 'RDL', dieSize: '20×20mm', wireBond: 'Cu RDL', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-010', name: 'Mobile SiP Module', type: 'SiP', status: 'approved',
    designer: 'Park S.Y.', designerKr: '박서연', modified: '2026-02-06',
    specs: { dimensions: '10×10×0.9mm', pinCount: 320, pitch: '0.4mm', material: 'Organic Substrate', dieSize: '7×7mm', wireBond: 'Flip Chip + Wire Bond', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-011', name: 'Server DDR5 RDIMM', type: 'BGA', status: 'draft',
    designer: 'Lee M.K.', designerKr: '이민경', modified: '2026-02-05',
    specs: { dimensions: '16×12×1.2mm', pinCount: 384, pitch: '0.65mm', material: 'BT Substrate', dieSize: '12×8mm', wireBond: 'Gold Wire', encapsulation: 'Epoxy Molding Compound' }
  },
  {
    id: 'PKG-2026-012', name: 'Automotive NAND BGA', type: 'BGA', status: 'approved',
    designer: 'Choi H.W.', designerKr: '최현우', modified: '2026-02-04',
    specs: { dimensions: '12×16×1.4mm', pinCount: 200, pitch: '0.8mm', material: 'BT Substrate', dieSize: '9×11mm', wireBond: 'Gold Wire', encapsulation: 'Epoxy Molding Compound' }
  },
]

export const projects = [
  {
    id: 'PRJ-001', name: 'HBM3E Development', progress: 78, status: 'on-track',
    startDate: '2025-09-01', endDate: '2026-06-30', lead: 'Director Park',
    members: 8, description: 'Next-gen HBM3E package design for AI/ML applications',
    milestones: [
      { name: 'Design Spec Complete', date: '2025-11-15', done: true },
      { name: 'Prototype Fabrication', date: '2026-01-30', done: true },
      { name: 'Thermal Validation', date: '2026-03-15', done: false },
      { name: 'Mass Production Ready', date: '2026-06-30', done: false },
    ],
    tasks: [
      { name: 'Base Die Design', start: 1, end: 3, status: 'completed' },
      { name: 'Top Die Design', start: 2, end: 4, status: 'in-progress' },
      { name: 'TSV Integration', start: 3, end: 5, status: 'in-progress' },
      { name: 'Thermal Simulation', start: 4, end: 6, status: 'pending' },
      { name: 'Signal Integrity', start: 5, end: 7, status: 'pending' },
      { name: 'Reliability Test', start: 7, end: 9, status: 'pending' },
    ]
  },
  {
    id: 'PRJ-002', name: 'DDR5 Next Gen', progress: 45, status: 'at-risk',
    startDate: '2025-11-01', endDate: '2026-08-31', lead: 'Manager Kim',
    members: 6, description: 'DDR5 package redesign for improved signal integrity',
    milestones: [
      { name: 'Requirements Analysis', date: '2025-12-15', done: true },
      { name: 'Design Draft', date: '2026-02-28', done: false },
      { name: 'Prototype Review', date: '2026-05-15', done: false },
      { name: 'Final Approval', date: '2026-08-31', done: false },
    ],
    tasks: [
      { name: 'Market Analysis', start: 1, end: 2, status: 'completed' },
      { name: 'Spec Definition', start: 2, end: 3, status: 'completed' },
      { name: 'Package Design', start: 3, end: 6, status: 'in-progress' },
      { name: 'SI/PI Analysis', start: 5, end: 7, status: 'pending' },
      { name: 'Prototype Build', start: 7, end: 9, status: 'pending' },
    ]
  },
  {
    id: 'PRJ-003', name: 'NAND 3D Stack V2', progress: 92, status: 'on-track',
    startDate: '2025-06-01', endDate: '2026-03-31', lead: 'Director Lee',
    members: 10, description: 'Advanced 3D NAND package with 232-layer stacking',
    milestones: [
      { name: 'Architecture Review', date: '2025-08-01', done: true },
      { name: 'Design Complete', date: '2025-11-30', done: true },
      { name: 'Validation Complete', date: '2026-02-15', done: true },
      { name: 'Production Release', date: '2026-03-31', done: false },
    ],
    tasks: [
      { name: 'Stack Architecture', start: 1, end: 2, status: 'completed' },
      { name: 'Die Thinning Process', start: 2, end: 4, status: 'completed' },
      { name: 'TSV Formation', start: 3, end: 5, status: 'completed' },
      { name: 'Warpage Control', start: 5, end: 7, status: 'completed' },
      { name: 'Final Qualification', start: 8, end: 10, status: 'in-progress' },
    ]
  },
  {
    id: 'PRJ-004', name: 'AI Accelerator PKG', progress: 25, status: 'on-track',
    startDate: '2026-01-01', endDate: '2026-12-31', lead: 'Manager Han',
    members: 12, description: 'Fan-Out WLP for next-gen AI accelerator chips',
    milestones: [
      { name: 'Feasibility Study', date: '2026-03-01', done: false },
      { name: 'Design Phase 1', date: '2026-06-30', done: false },
      { name: 'Prototype', date: '2026-09-30', done: false },
      { name: 'Production', date: '2026-12-31', done: false },
    ],
    tasks: [
      { name: 'Technology Survey', start: 1, end: 2, status: 'completed' },
      { name: 'RDL Design', start: 2, end: 5, status: 'in-progress' },
      { name: 'Thermal Management', start: 4, end: 7, status: 'pending' },
      { name: 'Power Delivery', start: 5, end: 8, status: 'pending' },
      { name: 'Integration Test', start: 9, end: 12, status: 'pending' },
    ]
  },
]

export const teamMembers = [
  { id: 'EMP-001', name: 'Kim J.H.', nameKr: '김준혁', role: 'Senior Designer', department: 'PKG Design Team 1', projects: 3, email: 'jh.kim@skhynix.com' },
  { id: 'EMP-002', name: 'Park S.Y.', nameKr: '박서연', role: 'Lead Designer', department: 'PKG Design Team 1', projects: 2, email: 'sy.park@skhynix.com' },
  { id: 'EMP-003', name: 'Lee M.K.', nameKr: '이민경', role: 'Designer', department: 'PKG Design Team 2', projects: 2, email: 'mk.lee@skhynix.com' },
  { id: 'EMP-004', name: 'Choi H.W.', nameKr: '최현우', role: 'Senior Designer', department: 'PKG Design Team 1', projects: 2, email: 'hw.choi@skhynix.com' },
  { id: 'EMP-005', name: 'Jung Y.J.', nameKr: '정유진', role: 'Design Reviewer', department: 'Quality Assurance', projects: 4, email: 'yj.jung@skhynix.com' },
  { id: 'EMP-006', name: 'Yoon D.H.', nameKr: '윤동현', role: 'Designer', department: 'PKG Design Team 2', projects: 1, email: 'dh.yoon@skhynix.com' },
  { id: 'EMP-007', name: 'Shin E.J.', nameKr: '신은지', role: 'Simulation Engineer', department: 'Simulation Team', projects: 3, email: 'ej.shin@skhynix.com' },
  { id: 'EMP-008', name: 'Han S.M.', nameKr: '한성민', role: 'Lead Designer', department: 'Advanced PKG Team', projects: 2, email: 'sm.han@skhynix.com' },
  { id: 'EMP-009', name: 'Kang T.Y.', nameKr: '강태영', role: 'Manager', department: 'PKG Design Team 1', projects: 5, email: 'ty.kang@skhynix.com' },
  { id: 'EMP-010', name: 'Oh J.S.', nameKr: '오지수', role: 'Director', department: 'PKG Design Division', projects: 8, email: 'js.oh@skhynix.com' },
  { id: 'EMP-011', name: 'Seo H.A.', nameKr: '서하은', role: 'Designer', department: 'PKG Design Team 2', projects: 2, email: 'ha.seo@skhynix.com' },
  { id: 'EMP-012', name: 'Lim W.J.', nameKr: '임우진', role: 'Simulation Engineer', department: 'Simulation Team', projects: 3, email: 'wj.lim@skhynix.com' },
]

export const simulationResults = {
  thermal: {
    status: 'pass',
    maxTemp: 85.3,
    minTemp: 42.1,
    junctionTemp: 78.6,
    ambientTemp: 25.0,
    threshold: 95.0,
    data: [
      { point: 'Corner 1', temp: 72.3 }, { point: 'Corner 2', temp: 74.1 },
      { point: 'Corner 3', temp: 71.8 }, { point: 'Corner 4', temp: 73.5 },
      { point: 'Center', temp: 85.3 }, { point: 'Edge N', temp: 68.2 },
      { point: 'Edge S', temp: 67.9 }, { point: 'Edge E', temp: 69.1 },
      { point: 'Edge W', temp: 68.7 }, { point: 'Die Surface', temp: 82.1 },
    ]
  },
  signalIntegrity: {
    status: 'pass',
    riseTime: '45ps',
    fallTime: '42ps',
    jitter: '12ps',
    crosstalk: '-42dB',
    data: [
      { freq: 0.1, loss: -0.2 }, { freq: 0.5, loss: -0.8 },
      { freq: 1.0, loss: -1.5 }, { freq: 2.0, loss: -3.2 },
      { freq: 3.0, loss: -5.1 }, { freq: 4.0, loss: -7.8 },
      { freq: 5.0, loss: -11.2 }, { freq: 6.0, loss: -15.5 },
      { freq: 7.0, loss: -20.1 }, { freq: 8.0, loss: -26.3 },
    ]
  },
  stress: {
    status: 'pass',
    maxVonMises: 145.2,
    safetyFactor: 2.1,
    threshold: 300,
    data: [
      { location: 'Solder Ball', stress: 145.2, limit: 300 },
      { location: 'Die Corner', stress: 98.7, limit: 250 },
      { location: 'Substrate Edge', stress: 67.3, limit: 200 },
      { location: 'Wire Bond', stress: 112.4, limit: 280 },
      { location: 'Underfill', stress: 55.8, limit: 180 },
      { location: 'Mold Cap', stress: 42.1, limit: 150 },
    ]
  },
  warpage: {
    status: 'warning',
    maxWarpage: 78.5,
    tolerance: 80.0,
    data: [
      { position: -5, warpage: 12 }, { position: -4, warpage: 28 },
      { position: -3, warpage: 45 }, { position: -2, warpage: 62 },
      { position: -1, warpage: 73 }, { position: 0, warpage: 78.5 },
      { position: 1, warpage: 75 }, { position: 2, warpage: 64 },
      { position: 3, warpage: 48 }, { position: 4, warpage: 30 },
      { position: 5, warpage: 14 },
    ]
  }
}

export const activityLog = [
  { id: 1, user: 'Kim J.H.', action: 'submitted for review', target: 'HBM3E Base Die Package', time: '10 minutes ago', type: 'review' },
  { id: 2, user: 'Jung Y.J.', action: 'approved', target: 'Mobile SiP Module', time: '25 minutes ago', type: 'approval' },
  { id: 3, user: 'Park S.Y.', action: 'uploaded simulation results', target: 'DDR5 FBGA Package', time: '1 hour ago', type: 'simulation' },
  { id: 4, user: 'Lee M.K.', action: 'created new design', target: 'NAND TSV Stack Package', time: '2 hours ago', type: 'design' },
  { id: 5, user: 'Shin E.J.', action: 'completed thermal analysis', target: 'CIS Sensor Package', time: '3 hours ago', type: 'simulation' },
  { id: 6, user: 'Choi H.W.', action: 'commented on', target: 'LPDDR5X Module', time: '4 hours ago', type: 'comment' },
  { id: 7, user: 'Han S.M.', action: 'updated design specs', target: 'AI Accelerator Fan-Out', time: '5 hours ago', type: 'design' },
  { id: 8, user: 'Yoon D.H.', action: 'revision rejected', target: 'DDR5 QFP Package', time: '6 hours ago', type: 'rejection' },
  { id: 9, user: 'Kang T.Y.', action: 'assigned reviewer for', target: 'Server DDR5 RDIMM', time: '1 day ago', type: 'assignment' },
  { id: 10, user: 'Oh J.S.', action: 'approved project milestone', target: 'NAND 3D Stack V2', time: '1 day ago', type: 'approval' },
]

export const notifications = [
  { id: 1, type: 'review', message: 'Design review requested for DDR5 FBGA Package', time: '5 min ago', read: false },
  { id: 2, type: 'approved', message: 'Your design "Mobile SiP Module" has been approved', time: '30 min ago', read: false },
  { id: 3, type: 'comment', message: 'New comment on LPDDR5X Module design', time: '1 hour ago', read: false },
  { id: 4, type: 'simulation', message: 'Thermal simulation completed for CIS Sensor Package', time: '3 hours ago', read: true },
  { id: 5, type: 'deadline', message: 'Deadline approaching: HBM3E Thermal Validation (Mar 15)', time: '1 day ago', read: true },
]

export const kpiData = {
  activeProjects: 12,
  pendingReviews: 5,
  passRate: 94.2,
  teamSize: 28,
  activeChange: 8.3,
  reviewChange: -12.5,
  passRateChange: 2.1,
  teamChange: 3.7,
}

export const chartData = {
  monthlyProgress: [
    { month: 'Sep', completed: 8, submitted: 12 },
    { month: 'Oct', completed: 15, submitted: 18 },
    { month: 'Nov', completed: 12, submitted: 20 },
    { month: 'Dec', completed: 22, submitted: 25 },
    { month: 'Jan', completed: 18, submitted: 22 },
    { month: 'Feb', completed: 14, submitted: 16 },
  ],
  packageDistribution: [
    { name: 'BGA', value: 32 },
    { name: 'WLP', value: 24 },
    { name: 'CSP', value: 18 },
    { name: 'QFP', value: 10 },
    { name: 'Fan-Out WLP', value: 8 },
    { name: 'SiP', value: 5 },
    { name: 'Others', value: 3 },
  ]
}

export const designRevisions = [
  { version: 'v3.2', author: 'Kim J.H.', date: '2026-02-15', changes: 'Updated pin assignment for improved SI' },
  { version: 'v3.1', author: 'Kim J.H.', date: '2026-02-10', changes: 'Adjusted die placement coordinates' },
  { version: 'v3.0', author: 'Park S.Y.', date: '2026-01-28', changes: 'Major redesign - new substrate layout' },
  { version: 'v2.1', author: 'Kim J.H.', date: '2026-01-15', changes: 'Thermal via optimization' },
  { version: 'v2.0', author: 'Kim J.H.', date: '2025-12-20', changes: 'Second iteration with EMC changes' },
  { version: 'v1.0', author: 'Kim J.H.', date: '2025-11-01', changes: 'Initial design release' },
]

export const designComments = [
  { id: 1, author: 'Jung Y.J.', role: 'Design Reviewer', date: '2026-02-15', content: 'Pin assignment changes look good. Thermal path should be verified before approval.' },
  { id: 2, author: 'Shin E.J.', role: 'Simulation Engineer', date: '2026-02-14', content: 'Thermal simulation results within spec. Max junction temp at 78.6°C, well below 95°C threshold.' },
  { id: 3, author: 'Kang T.Y.', role: 'Manager', date: '2026-02-12', content: 'Please ensure compatibility with existing test fixtures before finalizing.' },
  { id: 4, author: 'Kim J.H.', role: 'Senior Designer', date: '2026-02-10', content: 'Updated die placement per review feedback. Adjusted keepout zones accordingly.' },
]

export const designAttachments = [
  { id: 1, name: 'HBM3E_Layout_v3.2.gds', size: '24.5 MB', date: '2026-02-15', type: 'layout' },
  { id: 2, name: 'Thermal_Report_v3.pdf', size: '8.2 MB', date: '2026-02-14', type: 'report' },
  { id: 3, name: 'SI_Analysis_Results.xlsx', size: '3.1 MB', date: '2026-02-13', type: 'data' },
  { id: 4, name: 'Pin_Assignment_v3.2.csv', size: '156 KB', date: '2026-02-15', type: 'data' },
  { id: 5, name: 'Package_Drawing_v3.2.pdf', size: '5.8 MB', date: '2026-02-15', type: 'drawing' },
]
