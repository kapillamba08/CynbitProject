import { useMemo, useState } from 'react';

const internships = [
  {
    category: 'BUSINESS INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'HR & Talent Acquisition Intern',
    description: 'Help us architect the core team at Cynbit.',
  },
  {
    category: 'BUSINESS INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'Business Development Intern',
    description: 'Support our sales engine and client outreach initiatives.',
  },
  {
    category: 'MARKETING & GROWTH INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'Campus Ambassador / Campus Relations Intern',
    description: 'Bridge the gap between Cynbit and the next generation of engineers.',
  },
  {
    category: 'MARKETING & GROWTH INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'Social Media & Brand Intern',
    description: 'Build and manage our online community and brand identity.',
  },
  {
    category: 'TECH INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'UI/UX Design Intern',
    description: 'Transform complex workflows into intuitive and high-impact digital experiences.',
  },
  {
    category: 'TECH INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'Backend Developer Intern',
    description: 'Focus on building the high-performance core of our software architecture.',
  },
  {
    category: 'TECH INTERNSHIPS',
    location: 'REMOTE / JAIPUR',
    title: 'Full Stack Developer Intern',
    description: 'Join our engineering team to build scalable digital ecosystems using modern tech stacks.',
  },
];

const fullTimeRoles = [
  {
    category: 'GROWTH TEAM',
    location: 'REMOTE / JAIPUR',
    title: 'Business Development Executive',
    description: 'Experience: Sales/client acquisition.',
  },
  {
    category: 'MARKETING TEAM',
    location: 'REMOTE / JAIPUR',
    title: 'Marketing Executive',
    description: 'Experience: 1–2 Years. Driving brand presence.',
  },
  {
    category: 'CORE ENGINEERING',
    location: 'REMOTE / JAIPUR',
    title: 'DevOps / Cloud Engineer',
    description: 'Experience: AWS, Docker, deployment pipelines.',
  },
  {
    category: 'AI & DATA TEAM',
    location: 'REMOTE / JAIPUR',
    title: 'AI Engineer',
    description: 'Experience: 1–3 Years. Architecting scalable digital ecosystems.',
  },
];

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesTokens(haystack, query) {
  const tokens = normalize(query).split(' ').filter(Boolean);
  if (tokens.length === 0) return true;
  return tokens.every((token) => haystack.includes(token));
}

function matchesRole(role, titleQuery, locationQuery) {
  const searchable = normalize(
    `${role.title} ${role.category} ${role.description} ${role.location}`
  );
  const locationHaystack = normalize(role.location);
  return (
    matchesTokens(searchable, titleQuery) &&
    matchesTokens(locationHaystack, locationQuery)
  );
}

function JobCard({ role, onOpen }) {
  return (
    <article className="job-card">
      <div>
        <div className="job-top">
          <span className="job-category">{role.category}</span>
          <span className="job-location">{role.location}</span>
        </div>
        <h3>{role.title}</h3>
        <p>{role.description}</p>
      </div>
      <button type="button" className="details-btn" onClick={() => onOpen(role)}>
        VIEW DETAILS
      </button>
    </article>
  );
}

function Career() {
  const [titleInput, setTitleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [titleQuery, setTitleQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);

  const applySearch = (event) => {
    event?.preventDefault();
    setTitleQuery(titleInput);
    setLocationQuery(locationInput);
  };

  const clearSearch = () => {
    setTitleInput('');
    setLocationInput('');
    setTitleQuery('');
    setLocationQuery('');
  };

  const filteredInternships = useMemo(
    () => internships.filter((role) => matchesRole(role, titleQuery, locationQuery)),
    [titleQuery, locationQuery]
  );
  const filteredFullTime = useMemo(
    () => fullTimeRoles.filter((role) => matchesRole(role, titleQuery, locationQuery)),
    [titleQuery, locationQuery]
  );

  const totalResults = filteredInternships.length + filteredFullTime.length;
  const hasActiveSearch = Boolean(titleQuery || locationQuery);

  return (
    <main className="page" id="openings">
      <section className="search-panel">
        <h2>Search open roles</h2>
        <p>Find internships and full-time positions by title, team, skills, or location.</p>
        <form className="search-form" onSubmit={applySearch}>
          <label className="search-field">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              aria-label="Search by title, team, or skill"
              placeholder="Search by title, team, or skill (e.g. Developer, HR, Marketing)"
              value={titleInput}
              onChange={(e) => {
                setTitleInput(e.target.value);
                setTitleQuery(e.target.value);
              }}
            />
          </label>
          <label className="search-field">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <input
              type="search"
              aria-label="Search by location"
              placeholder="Location (e.g. Remote, Jaipur)"
              value={locationInput}
              onChange={(e) => {
                setLocationInput(e.target.value);
                setLocationQuery(e.target.value);
              }}
            />
          </label>
          <button className="search-submit" type="submit">
            Search
          </button>
          {(titleInput || locationInput) && (
            <button className="clear-btn" type="button" onClick={clearSearch}>
              Clear
            </button>
          )}
        </form>
        <div className="search-meta">
          {hasActiveSearch
            ? `${totalResults} role${totalResults === 1 ? '' : 's'} matching your search`
            : `${internships.length + fullTimeRoles.length} open roles available`}
        </div>
      </section>

      {totalResults === 0 ? (
        <div className="empty-state">
          <h3>No matching positions found</h3>
          <p>Try a different title, team, skill, or location keyword.</p>
        </div>
      ) : (
        <>
          {filteredInternships.length > 0 && (
            <section className="section">
              <div className="section-head">
                <h2 className="section-title">
                  Internship <span>Openings</span>
                </h2>
                <p>Nurturing the next generation of technical and strategic architects.</p>
              </div>
              <div className="cards">
                {filteredInternships.map((role) => (
                  <JobCard key={role.title} role={role} onOpen={setSelectedRole} />
                ))}
              </div>
            </section>
          )}

          {filteredFullTime.length > 0 && (
            <section className="section">
              <div className="section-head">
                <h2 className="section-title">
                  Full-Time <span>Roles</span>
                </h2>
                <p>Expanding our core engineering and growth infrastructure.</p>
              </div>
              <div className="cards">
                {filteredFullTime.map((role) => (
                  <JobCard key={role.title} role={role} onOpen={setSelectedRole} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {selectedRole && (
        <div className="overlay" onClick={() => setSelectedRole(null)}>
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="role-title"
          >
            <span className="job-category">{selectedRole.category}</span>
            <h3 id="role-title">{selectedRole.title}</h3>
            <p>
              {selectedRole.description} Location: {selectedRole.location}.
            </p>
            <div className="modal-actions">
              <a href={`mailto:opportunities@cynbit.in?subject=Application: ${selectedRole.title}`}>
                Apply now
              </a>
              <button type="button" onClick={() => setSelectedRole(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Career;
