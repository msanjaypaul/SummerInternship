const internships = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Bengaluru, India',
    mode: 'Hybrid',
    type: 'Full-time',
    domain: 'Software',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-03-31',
    description: 'Work on scalable systems, collaborate with engineering teams, and contribute to production features.',
    tags: ['C++', 'Java', 'Backend'],
    applyLink: 'https://careers.google.com/students/',
    sourceLink: 'https://careers.google.com/students/'
  },
  {
    title: 'Data Science Summer Intern',
    company: 'Microsoft',
    location: 'Hyderabad, India',
    mode: 'On-site',
    type: 'Full-time',
    domain: 'Data Science',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-04-10',
    description: 'Analyze product datasets and build ML models with guidance from senior data scientists.',
    tags: ['Python', 'ML', 'Statistics'],
    applyLink: 'https://careers.microsoft.com/v2/global/en/students',
    sourceLink: 'https://careers.microsoft.com/v2/global/en/students'
  },
  {
    title: 'Product Management Intern',
    company: 'Atlassian',
    location: 'Remote',
    mode: 'Remote',
    type: 'Flexible',
    domain: 'Product',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-03-15',
    description: 'Support product roadmap planning and user research for collaboration products.',
    tags: ['Roadmap', 'Research', 'Agile'],
    applyLink: 'https://www.atlassian.com/company/careers/students',
    sourceLink: 'https://www.atlassian.com/company/careers/students'
  },
  {
    title: 'UI/UX Design Intern',
    company: 'Adobe',
    location: 'Noida, India',
    mode: 'Hybrid',
    type: 'Full-time',
    domain: 'Design',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-04-05',
    description: 'Design intuitive user interfaces, prototype workflows, and test usability with product teams.',
    tags: ['Figma', 'Prototyping', 'UX Research'],
    applyLink: 'https://careers.adobe.com/us/en/search-results?keywords=intern',
    sourceLink: 'https://careers.adobe.com/us/en/search-results?keywords=intern'
  },
  {
    title: 'Cybersecurity Analyst Intern',
    company: 'Cisco',
    location: 'Pune, India',
    mode: 'On-site',
    type: 'Full-time',
    domain: 'Cybersecurity',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-03-20',
    description: 'Assist in vulnerability assessment and improve security monitoring across enterprise systems.',
    tags: ['SIEM', 'Network Security', 'SOC'],
    applyLink: 'https://jobs.cisco.com/jobs/SearchJobs/?21178=%5B169476%5D&21178_format=6020&listFilterMode=1&keyword=intern',
    sourceLink: 'https://jobs.cisco.com/jobs/SearchJobs/?21178=%5B169476%5D&21178_format=6020&listFilterMode=1&keyword=intern'
  },
  {
    title: 'Finance & Operations Intern',
    company: 'Unilever',
    location: 'Mumbai, India',
    mode: 'On-site',
    type: 'Part-time',
    domain: 'Finance',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-04-18',
    description: 'Support budgeting, reporting, and process optimization for business units.',
    tags: ['Excel', 'Business Analysis', 'Reporting'],
    applyLink: 'https://careers.unilever.com/search-jobs?keyword=intern',
    sourceLink: 'https://careers.unilever.com/search-jobs?keyword=intern'
  },
  {
    title: 'Marketing Intern (Summer)',
    company: 'HubSpot',
    location: 'Remote',
    mode: 'Remote',
    type: 'Flexible',
    domain: 'Marketing',
    source: 'Aggregator',
    paid: 'Paid',
    deadline: '2026-03-08',
    description: 'Contribute to digital campaigns, content strategy, and performance reporting.',
    tags: ['SEO', 'Content', 'Analytics'],
    applyLink: 'https://www.linkedin.com/jobs/internship-jobs/?keywords=marketing%20intern',
    sourceLink: 'https://www.linkedin.com/jobs/internship-jobs/?keywords=marketing%20intern'
  },
  {
    title: 'Research Intern - AI',
    company: 'Research Labs (curated)',
    location: 'San Francisco, USA',
    mode: 'Hybrid',
    type: 'Full-time',
    domain: 'Research',
    source: 'Aggregator',
    paid: 'Paid',
    deadline: '2026-03-28',
    description: 'Assist applied research teams with experiments, evaluation, and model analysis.',
    tags: ['NLP', 'Python', 'Experiments'],
    applyLink: 'https://www.indeed.com/jobs?q=ai+research+intern',
    sourceLink: 'https://www.indeed.com/jobs?q=ai+research+intern'
  },
  {
    title: 'Web Development Intern',
    company: 'Startup Roles (curated)',
    location: 'Delhi, India',
    mode: 'Hybrid',
    type: 'Part-time',
    domain: 'Software',
    source: 'Aggregator',
    paid: 'Unpaid',
    deadline: '2026-03-12',
    description: 'Build and maintain UI components and APIs in a fast-paced startup environment.',
    tags: ['JavaScript', 'React', 'Node.js'],
    applyLink: 'https://internshala.com/internships/web-development-internship',
    sourceLink: 'https://internshala.com/internships/web-development-internship'
  },
  {
    title: 'Business Analyst Intern',
    company: 'Consulting Opportunities (curated)',
    location: 'Gurugram, India',
    mode: 'On-site',
    type: 'Full-time',
    domain: 'Business',
    source: 'Aggregator',
    paid: 'Paid',
    deadline: '2026-04-02',
    description: 'Gather insights, prepare decks, and support consulting teams on client projects.',
    tags: ['SQL', 'PowerPoint', 'Problem-solving'],
    applyLink: 'https://www.glassdoor.com/Job/business-analyst-intern-jobs-SRCH_KO0,23.htm',
    sourceLink: 'https://www.glassdoor.com/Job/business-analyst-intern-jobs-SRCH_KO0,23.htm'
  },
  {
    title: 'Cloud Engineering Intern',
    company: 'Amazon',
    location: 'Chennai, India',
    mode: 'On-site',
    type: 'Full-time',
    domain: 'Cloud',
    source: 'Official',
    paid: 'Paid',
    deadline: '2026-03-25',
    description: 'Work with cloud infrastructure teams to automate deployments and improve observability.',
    tags: ['AWS', 'DevOps', 'Automation'],
    applyLink: 'https://www.amazon.jobs/content/en/teams/university-recruiting',
    sourceLink: 'https://www.amazon.jobs/content/en/teams/university-recruiting'
  },
  {
    title: 'Human Resources Intern',
    company: 'Talent Ops Program (curated)',
    location: 'Remote',
    mode: 'Remote',
    type: 'Part-time',
    domain: 'HR',
    source: 'Aggregator',
    paid: 'Paid',
    deadline: '2026-03-05',
    description: 'Support hiring coordination, onboarding operations, and employer branding.',
    tags: ['Recruitment', 'Coordination', 'Communication'],
    applyLink: 'https://wellfound.com/jobs?title=hr%20intern',
    sourceLink: 'https://wellfound.com/jobs?title=hr%20intern'
  }
];

const el = {
  cards: document.getElementById('cards'),
  resultCount: document.getElementById('resultCount'),
  emptyState: document.getElementById('emptyState'),
  heroStats: document.getElementById('heroStats'),
  template: document.getElementById('cardTemplate'),
  resetBtn: document.getElementById('resetBtn'),
  searchInput: document.getElementById('searchInput'),
  domainFilter: document.getElementById('domainFilter'),
  locationFilter: document.getElementById('locationFilter'),
  modeFilter: document.getElementById('modeFilter'),
  typeFilter: document.getElementById('typeFilter'),
  sourceFilter: document.getElementById('sourceFilter'),
  paidFilter: document.getElementById('paidFilter'),
  deadlineFilter: document.getElementById('deadlineFilter')
};

const uniqueValues = (key) => [...new Set(internships.map((item) => item[key]))].sort();

function populateSelect(selectEl, values) {
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectEl.append(option);
  });
}

function daysUntil(dateText) {
  const now = new Date();
  const target = new Date(dateText);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function renderHeroStats() {
  const officialCount = internships.filter((job) => job.source === 'Official').length;
  const aggregatorCount = internships.length - officialCount;

  el.heroStats.innerHTML = `
    <span class="stat"><strong>${internships.length}</strong> active listings</span>
    <span class="stat"><strong>${officialCount}</strong> from official websites</span>
    <span class="stat"><strong>${aggregatorCount}</strong> from aggregators</span>
  `;
}

function renderCards(list) {
  el.cards.innerHTML = '';

  list.forEach((job) => {
    const node = el.template.content.cloneNode(true);
    node.querySelector('.card__title').textContent = job.title;
    node.querySelector('.card__company').textContent = job.company;

    const sourceBadge = node.querySelector('.badge--source');
    sourceBadge.textContent = job.source === 'Official' ? 'Official website' : 'Aggregator';
    sourceBadge.dataset.source = job.source;

    const meta = node.querySelector('.meta');
    meta.innerHTML = `<span>${job.location}</span><span>• ${job.mode}</span><span>• ${job.type}</span><span>• ${job.paid}</span>`;

    node.querySelector('.card__description').textContent = job.description;

    const chips = node.querySelector('.chips');
    [job.domain, ...job.tags].forEach((tag) => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = tag;
      chips.append(chip);
    });

    const daysLeft = daysUntil(job.deadline);
    const deadlineChip = document.createElement('span');
    deadlineChip.className = 'chip';
    deadlineChip.textContent = daysLeft >= 0 ? `${daysLeft} days left` : 'Deadline passed';
    chips.append(deadlineChip);

    node.querySelector('.apply-link').href = job.applyLink;
    node.querySelector('.source-link').href = job.sourceLink;
    el.cards.append(node);
  });

  el.emptyState.classList.toggle('hidden', list.length > 0);
  el.resultCount.textContent = `${list.length} internship${list.length === 1 ? '' : 's'} found`;
}

function getFilteredInternships() {
  const searchText = el.searchInput.value.trim().toLowerCase();
  const filters = {
    domain: el.domainFilter.value,
    location: el.locationFilter.value,
    mode: el.modeFilter.value,
    type: el.typeFilter.value,
    source: el.sourceFilter.value,
    paid: el.paidFilter.value,
    deadline: el.deadlineFilter.value
  };

  return internships.filter((job) => {
    const searchable = `${job.title} ${job.company} ${job.domain} ${job.tags.join(' ')}`.toLowerCase();
    const inSearch = !searchText || searchable.includes(searchText);
    const inDomain = !filters.domain || job.domain === filters.domain;
    const inLocation = !filters.location || job.location === filters.location;
    const inMode = !filters.mode || job.mode === filters.mode;
    const inType = !filters.type || job.type === filters.type;
    const inSource = !filters.source || job.source === filters.source;
    const inPaid = !filters.paid || job.paid === filters.paid;

    let inDeadline = true;
    if (filters.deadline === 'Open') inDeadline = daysUntil(job.deadline) >= 0;
    if (filters.deadline === 'ClosingSoon') {
      const days = daysUntil(job.deadline);
      inDeadline = days >= 0 && days <= 14;
    }

    return inSearch && inDomain && inLocation && inMode && inType && inSource && inPaid && inDeadline;
  });
}

function applyFilters() {
  renderCards(getFilteredInternships());
}

function resetFilters() {
  [
    el.searchInput,
    el.domainFilter,
    el.locationFilter,
    el.modeFilter,
    el.typeFilter,
    el.sourceFilter,
    el.paidFilter,
    el.deadlineFilter
  ].forEach((input) => {
    input.value = '';
  });
  applyFilters();
}

populateSelect(el.domainFilter, uniqueValues('domain'));
populateSelect(el.locationFilter, uniqueValues('location'));
renderHeroStats();
applyFilters();

[
  el.searchInput,
  el.domainFilter,
  el.locationFilter,
  el.modeFilter,
  el.typeFilter,
  el.sourceFilter,
  el.paidFilter,
  el.deadlineFilter
].forEach((input) => {
  input.addEventListener('input', applyFilters);
  input.addEventListener('change', applyFilters);
});

el.resetBtn.addEventListener('click', resetFilters);
