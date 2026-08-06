/* eslint-disable @next/next/no-img-element -- explicit public paths keep the same markup portable across Sites and GitHub Pages. */

type Project = {
  name: string;
  status: "Live" | "Desktop" | "Source" | "Document";
  description: string;
  note: string;
  repo: string;
  live?: string;
  image?: string;
  imageKind?: "screenshot" | "concept" | "artwork";
  tags: string[];
  feature?: boolean;
};

type Chapter = {
  number: string;
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  projects: Project[];
};

const chapters: Chapter[] = [
  {
    number: "01",
    id: "worlds",
    eyebrow: "Make a doorway",
    title: "Worlds you can enter",
    copy: "The early instinct was spatial: do not just describe an idea. Give it a room, a horizon, a pond, or a trail—and let somebody step inside.",
    projects: [
      {
        name: "Recreate Space from Images",
        status: "Live",
        description: "Reference photographs become a walkable, editable 3D room.",
        note: "A hand-built interpretation—not photogrammetry or a measured scan. Saves stay in the browser.",
        repo: "https://github.com/ijustcreate/recreate-space-from-images",
        live: "https://ijustcreate.github.io/recreate-space-from-images/",
        tags: ["3D", "spatial editor", "local-first"],
        feature: true,
      },
      {
        name: "The Dream Cabin Chronicles",
        status: "Live",
        description: "An illustrated campaign library, atlas, lore archive, and local-first virtual tabletop.",
        note: "Session state is local. Room names coordinate play; they are not secure passwords.",
        repo: "https://github.com/ijustcreate/dream-cabin-chronicles",
        live: "https://ijustcreate.github.io/dream-cabin-chronicles/",
        image: "dream-cabin.png",
        tags: ["TTRPG", "story world", "local-first"],
      },
      {
        name: "Fish Pond",
        status: "Live",
        description: "A living procedural pond where people can shape koi and watch a stylized habitat evolve.",
        note: "A small ecology toy, not animal-care guidance. Saves are device-local.",
        repo: "https://github.com/ijustcreate/FishPond",
        live: "https://ijustcreate.github.io/FishPond/",
        image: "fish-pond.png",
        tags: ["simulation", "procedural", "calm"],
      },
      {
        name: "Quest Compass",
        status: "Live",
        description: "A mobile location-adventure guide built around GPS trails and physical glyph discovery.",
        note: "Location publishing can send precise coordinates to Supabase; local passwords are prototype-only.",
        repo: "https://github.com/ijustcreate/location-based-quest-guide-app",
        live: "https://ijustcreate.github.io/location-based-quest-guide-app/",
        image: "quest-compass.png",
        tags: ["mobile", "GPS", "quests"],
      },
      {
        name: "Space Adventure",
        status: "Live",
        description: "A cinematic cooperative orbital-flight prototype with four distinct crew roles.",
        note: "A playable museum prototype; real controllers, displays, audio, and image rights still need venue review.",
        repo: "https://github.com/ijustcreate/space-adventure",
        live: "https://ijustcreate.github.io/space-adventure/",
        image: "space-adventure.png",
        tags: ["museum", "cockpit", "co-op"],
        feature: true,
      },
      {
        name: "Portals Lab",
        status: "Live",
        description: "A tactile first-person portal sandbox with an in-browser world-authoring workbench.",
        note: "GPU and controller behavior remain experimental; authored changes are not complete serialized levels yet.",
        repo: "https://github.com/ijustcreate/portals",
        live: "https://ijustcreate.github.io/portals/",
        image: "portals.png",
        tags: ["WebGL", "portals", "authoring"],
      },
    ],
  },
  {
    number: "02",
    id: "rules",
    eyebrow: "Give the world rules",
    title: "Small universes, big behavior",
    copy: "A single pixel can imply a society. A few forces can grow an ecosystem. These experiments make complexity visible without making the surface feel complicated.",
    projects: [
      {
        name: "Emergent Complexity: Entity Life",
        status: "Live",
        description: "A WebGPU particle-life laboratory for deterministic experiments and emergent entity research.",
        note: "WebGPU support varies; Particle Life 3D is experimental. Fork-derived work retains upstream AGPL obligations.",
        repo: "https://github.com/ijustcreate/emergent-complexity",
        live: "https://ijustcreate.github.io/emergent-complexity/",
        image: "emergent-complexity.png",
        imageKind: "artwork",
        tags: ["WebGPU", "simulation", "Life module"],
        feature: true,
      },
      {
        name: "Codex Mobile",
        status: "Live",
        description: "A pocket-sized browser lab for One Pixel MMO, Three Room, stop-motion, and tiny quests.",
        note: "The Pages edition has no true server multiplayer; identity and optional Supabase policy remain prototype-grade.",
        repo: "https://github.com/ijustcreate/codex-mobile",
        live: "https://ijustcreate.github.io/codex-mobile/",
        image: "codex-mobile.png",
        tags: ["mobile", "One Pixel MMO", "experiments"],
      },
      {
        name: "Planet Smmith",
        status: "Document",
        description: "A production game-design document for a finite spherical voxel-world survival RPG.",
        note: "The recovered artifact is a design package. Its concept art is not presented as gameplay.",
        repo: "https://github.com/ijustcreate/planet-smmith-design",
        image: "planet-smmith-concept.png",
        imageKind: "concept",
        tags: ["voxel world", "game design", "concept"],
      },
    ],
  },
  {
    number: "03",
    id: "culture",
    eyebrow: "Listen, then shape",
    title: "Culture, memory, and community",
    copy: "Some projects begin with other people’s voices. The useful move is not to hoard the raw material—it is to protect it, find the shape inside it, and make the result generous.",
    projects: [
      {
        name: "Facebook Comment Collector",
        status: "Source",
        description: "A privacy-first browser extension that exports comments already visible to the signed-in user as JSON or CSV.",
        note: "Names default off. Raw exports can still contain sensitive discussion and remain local unless deliberately shared.",
        repo: "https://github.com/ijustcreate/facebook-comment-collector",
        image: "facebook-comment-collector.png",
        tags: ["browser extension", "privacy", "structured data"],
      },
      {
        name: "The Video Store Backrooms",
        status: "Live",
        description: "A searchable video-store world containing 601 community-recommended films distilled from 679 comments.",
        note: "Only the reviewed, anonymized derivative is public. Raw comments, names, links, cookies, and sessions are excluded.",
        repo: "https://github.com/ijustcreate/video-store-backrooms",
        live: "https://ijustcreate.github.io/video-store-backrooms/",
        image: "video-store-backrooms.png",
        tags: ["worked example", "film archive", "anonymized"],
        feature: true,
      },
      {
        name: "The Muses Library",
        status: "Live",
        description: "A curated library of open-source and public-domain tools for people and AI systems.",
        note: "An editorial seed catalogue, not a guarantee; linked projects and licenses can change.",
        repo: "https://github.com/ijustcreate/the-muses-library",
        live: "https://ijustcreate.github.io/the-muses-library/",
        image: "muses-library.png",
        imageKind: "artwork",
        tags: ["library", "open source", "discovery"],
      },
      {
        name: "Animal Audio Playground",
        status: "Desktop",
        description: "A privacy-first museum sound-wall workbench with a synthetic public sample and local exhibit tools.",
        note: "Real voices and visitor archives stay private; consent, rights, retention, and moderation remain operator work.",
        repo: "https://github.com/ijustcreate/animal-audio-playground",
        image: "animal-audio.png",
        tags: ["museum", "audio", "privacy"],
      },
      {
        name: "Museum Newsroom",
        status: "Desktop",
        description: "An Electron newsroom studio guiding museum visitors from reporting through production and live presentation.",
        note: "Real cameras, microphones, kiosk recovery, soak testing, and visitor-media governance remain site work.",
        repo: "https://github.com/ijustcreate/museum-newsroom",
        image: "museum-newsroom.png",
        tags: ["museum", "Electron", "production"],
      },
      {
        name: "Museum Animation Studio",
        status: "Desktop",
        description: "A kid-first, local-first stop-motion workstation scaffold for museum exhibits.",
        note: "Not yet a packaged kiosk; hardware, consent, security, signing, and long-run recovery need deployment work.",
        repo: "https://github.com/ijustcreate/museum-animation-studio",
        image: "museum-animation-studio.png",
        tags: ["stop motion", "museum", "local-first"],
      },
    ],
  },
  {
    number: "04",
    id: "tools",
    eyebrow: "Make work gentler",
    title: "Tools that know when to stop",
    copy: "The calmest tools are clear about their boundary. They prepare, inspect, estimate, or reveal—then hand control back to the person doing the work.",
    projects: [
      {
        name: "Media Watcher",
        status: "Desktop",
        description: "A local browser-media detector, metadata inspector, and authorized download helper.",
        note: "It does not bypass DRM, encryption, paywalls, or access controls. Local browser metadata can be sensitive.",
        repo: "https://github.com/ijustcreate/media-watcher",
        tags: ["Electron", "media", "Watcher alias"],
      },
      {
        name: "Application Companion",
        status: "Live",
        description: "A private local assistant for preparing applications and making a safe handoff to AI or an employer site.",
        note: "It deliberately does not connect accounts, upload documents, autofill forms, or submit applications.",
        repo: "https://github.com/ijustcreate/application-companion",
        live: "https://ijustcreate.github.io/application-companion/",
        image: "application-companion.png",
        tags: ["guided workflow", "privacy", "human handoff"],
        feature: true,
      },
      {
        name: "Rollwright",
        status: "Source",
        description: "A deterministic flooring takeoff, roll-planning, and FieldSense review workbench.",
        note: "An estimating aid, not a field guarantee. Customer plans and bids should never enter Git.",
        repo: "https://github.com/ijustcreate/rollwright",
        tags: ["estimating", "flooring", "local data"],
      },
      {
        name: "ZenDeck",
        status: "Desktop",
        description: "A tactile WinUI touch cockpit for ASUS Zenbook ScreenPad-style displays.",
        note: "Both builds pass, but missing Windows App Runtime activation blocked an honest runtime capture on the audited machine.",
        repo: "https://github.com/ijustcreate/zendeck",
        tags: ["WinUI", "touch surface", "hardware"],
      },
    ],
  },
  {
    number: "05",
    id: "desktop",
    eyebrow: "Break the frame",
    title: "When the desktop becomes the stage",
    copy: "Eventually the window stopped being a container and became part of the fiction. Borders became walls. Icons became landmarks. The operating system became scenery.",
    projects: [
      {
        name: "Desktop Reality",
        status: "Desktop",
        description: "A vector spaceship overlay that turns live Windows desktop geometry into navigable game space.",
        note: "Windows-only. Local probes can expose window titles, processes, labels, and paths even though the code sends no telemetry.",
        repo: "https://github.com/ijustcreate/desktop-reality",
        image: "desktop-reality.png",
        tags: ["Windows", "overlay", "spatial desktop"],
        feature: true,
      },
      {
        name: "Desktop Geometry Wars",
        status: "Desktop",
        description: "Two neon twin-stick prototypes where the fake application window becomes the battlefield.",
        note: "C# and Electron implementations are public; desktop-escape and online ideas remain prototype work.",
        repo: "https://github.com/ijustcreate/desktop-geometry-wars",
        image: "desktop-geometry-wars.png",
        tags: ["C#", "Electron", "desktop play"],
      },
    ],
  },
];

const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (name: string) => `${assetBase}/projects/${name}`;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

function ProjectCard({ project, chapter }: { project: Project; chapter: string }) {
  const kind = project.imageKind === "concept"
    ? "Concept art · not gameplay"
    : project.imageKind === "artwork"
      ? "Project artwork"
      : "Project capture";
  return (
    <article className={`project-card ${project.feature ? "project-card--feature" : ""}`}>
      <div className="project-card__visual">
        {project.image ? (
          // Plain img keeps the GitHub Pages build portable and avoids remote-image machinery.
          <img src={asset(project.image)} alt={`${project.name} ${kind.toLowerCase()}`} loading="lazy" />
        ) : (
          <div className="project-card__fallback" aria-hidden="true">
            <span>{project.name.slice(0, 1)}</span>
            <i />
          </div>
        )}
        <span className="project-card__capture">{kind}</span>
        <span className={`status status--${project.status.toLowerCase()}`}>{project.status}</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__chapter">{chapter}</p>
        <h3>{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} topics`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <p className="project-card__note"><span>Reality check</span>{project.note}</p>
        <div className="project-card__actions">
          {project.live ? (
            <a className="action action--primary" href={project.live} target="_blank" rel="noreferrer">
              Open live world <ArrowIcon />
            </a>
          ) : null}
          <a className="action" href={project.repo} target="_blank" rel="noreferrer">
            View repository <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#journey">Skip to the journey</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Felix’s Journey with AI, home">
          <span className="wordmark__pixel" />
          <span>felix / ai</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#journey">Journey</a>
          <a href="#ledger">Ledger</a>
          <a className="header-github" href="https://github.com/ijustcreate" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span>Field notes · 21 public repositories</span></p>
            <h1 id="hero-title">Felix’s<br /><em>Journey with AI</em></h1>
            <p className="hero__lede">A trail of experiments where rooms, tools, museums, desktops, and tiny universes became tangible.</p>
            <div className="hero__actions">
              <a className="button button--bright" href="#journey">Enter the journey <ArrowIcon /></a>
              <a className="button" href="https://github.com/ijustcreate?tab=repositories" target="_blank" rel="noreferrer">Browse the code</a>
            </div>
            <p className="hero__truth">Built in public. Kept local when privacy mattered. Left unnamed when the evidence ran out.</p>
          </div>

          <figure className="hero__visual">
            <img src={`${assetBase}/og.png`} alt="An abstract map connecting a fish pond, portal, voxel planet, space cockpit, and museum workbench" />
            <figcaption><span>Generated journey map</span> Real project captures begin below.</figcaption>
            <div className="hero__coordinate" aria-hidden="true">34.0522° N<br />118.2437° W</div>
          </figure>

          <dl className="scoreboard" aria-label="Verified portfolio totals">
            <div><dt>Public repos</dt><dd>21</dd></div>
            <div><dt>Live worlds</dt><dd>11</dd></div>
            <div><dt>Mapped ideas</dt><dd>27</dd></div>
            <div><dt>Honest mysteries</dt><dd>3</dd></div>
          </dl>
        </section>

        <section className="working-loop" aria-label="The working loop">
          <p>The working loop</p>
          <ol>
            <li><span>01</span> Notice the strange idea</li>
            <li><span>02</span> Give it a surface</li>
            <li><span>03</span> Test what is real</li>
            <li><span>04</span> Publish the honest version</li>
          </ol>
        </section>

        <section className="journey" id="journey" aria-labelledby="journey-title">
          <div className="section-intro">
            <p className="eyebrow"><span>The presentation</span></p>
            <h2 id="journey-title">Five chapters.<br />No victory lap.</h2>
            <p>This is a thematic route, not a fake chronology. Each stop links to the thing itself, shows what works, and keeps one clear boundary in view.</p>
          </div>

          <nav className="chapter-rail" aria-label="Journey chapters">
            {chapters.map((chapter) => (
              <a href={`#${chapter.id}`} key={chapter.id}>
                <span>{chapter.number}</span>{chapter.eyebrow}
              </a>
            ))}
          </nav>

          {chapters.map((chapter) => (
            <section className="chapter" id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
              <header className="chapter__header">
                <span className="chapter__number">{chapter.number}</span>
                <div>
                  <p>{chapter.eyebrow}</p>
                  <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
                </div>
                <p className="chapter__copy">{chapter.copy}</p>
              </header>

              {chapter.id === "culture" ? (
                <aside className="bridge-story" aria-label="Collector to video store worked example">
                  <div><span>Input</span><strong>679 public comments</strong><small>collected locally</small></div>
                  <i aria-hidden="true"><ArrowIcon /></i>
                  <div><span>Review</span><strong>Names removed</strong><small>raw discussion kept private</small></div>
                  <i aria-hidden="true"><ArrowIcon /></i>
                  <div><span>Outcome</span><strong>601 films</strong><small>in one explorable store</small></div>
                </aside>
              ) : null}

              <div className="project-grid">
                {chapter.projects.map((project) => (
                  <ProjectCard project={project} chapter={`${chapter.number} / ${chapter.eyebrow}`} key={project.name} />
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="ledger" id="ledger" aria-labelledby="ledger-title">
          <div className="ledger__intro">
            <p className="eyebrow"><span>The honest ledger</span></p>
            <h2 id="ledger-title">Names inside names.<br />And three open doors.</h2>
            <p>Not every remembered title should become another repository. Some are modules. Some are aliases. Three still need a folder—or a better clue—before anything can be published safely.</p>
          </div>

          <div className="ledger__columns">
            <div>
              <h3>Confirmed inside other projects</h3>
              <ul className="ledger-list ledger-list--confirmed">
                <li><span>Watcher</span><p>Alias for <a href="https://github.com/ijustcreate/media-watcher">Media Watcher</a>.</p></li>
                <li><span>Life</span><p>The Entity Life family inside <a href="https://github.com/ijustcreate/emergent-complexity">Emergent Complexity</a>.</p></li>
                <li><span>One Pixel MMO</span><p>A playable mini-project inside <a href="https://github.com/ijustcreate/codex-mobile">Codex Mobile</a>.</p></li>
              </ul>
            </div>
            <div>
              <h3>Still waiting for the right evidence</h3>
              <ul className="ledger-list ledger-list--open">
                <li><span>Builder</span><p>Only an unidentified campaign PDF was found. It stays private.</p></li>
                <li><span>Pixel 3D World</span><p>No authoritative folder or repository match yet.</p></li>
                <li><span>Open Human</span><p>No matching artifact or repository recovered yet.</p></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <p>What changed through the journey?</p>
          <h2 id="closing-title">Ideas stopped waiting<br />for permission to look real.</h2>
          <a className="button button--bright" href="https://github.com/ijustcreate?tab=repositories" target="_blank" rel="noreferrer">Continue on GitHub <ArrowIcon /></a>
          <blockquote>“The person with the knife gets the final vote.”<cite>— Rollwright, with unusually practical wisdom</cite></blockquote>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top"><span className="wordmark__pixel" /><span>felix / ai</span></a>
        <p>Built with AI. Edited with judgment. Verified before publication.</p>
        <p>Portfolio audit · August 2026</p>
      </footer>
    </>
  );
}
