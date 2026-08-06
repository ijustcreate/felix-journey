/* eslint-disable @next/next/no-img-element -- explicit public paths keep this portfolio portable across Sites and GitHub Pages. */

type WorkItem = {
  name: string;
  status: "Live" | "Desktop" | "Source" | "Document";
  area: string;
  summary: string;
  repo: string;
  live?: string;
};

const work: WorkItem[] = [
  {
    name: "Application Companion",
    status: "Live",
    area: "Human–AI workflow",
    summary: "Private application preparation with a deliberate human handoff.",
    repo: "https://github.com/ijustcreate/application-companion",
    live: "https://ijustcreate.github.io/application-companion/",
  },
  {
    name: "Facebook Comment Collector",
    status: "Source",
    area: "Privacy + data",
    summary: "Local collection of comments already visible to the signed-in user.",
    repo: "https://github.com/ijustcreate/facebook-comment-collector",
  },
  {
    name: "The Video Store Backrooms",
    status: "Live",
    area: "Editorial systems",
    summary: "601 reviewed film recommendations shaped into an explorable store.",
    repo: "https://github.com/ijustcreate/video-store-backrooms",
    live: "https://ijustcreate.github.io/video-store-backrooms/",
  },
  {
    name: "Recreate Space from Images",
    status: "Live",
    area: "Spatial interaction",
    summary: "An editable 3D interpretation built from reference photographs.",
    repo: "https://github.com/ijustcreate/recreate-space-from-images",
    live: "https://ijustcreate.github.io/recreate-space-from-images/",
  },
  {
    name: "Desktop Reality",
    status: "Desktop",
    area: "Creative systems",
    summary: "Live Windows geometry becomes navigable game space.",
    repo: "https://github.com/ijustcreate/desktop-reality",
  },
  {
    name: "Desktop Geometry Wars",
    status: "Desktop",
    area: "Creative systems",
    summary: "Native and Electron prototypes turn a fake window into a battlefield.",
    repo: "https://github.com/ijustcreate/desktop-geometry-wars",
  },
  {
    name: "Space Adventure",
    status: "Live",
    area: "Museum experience",
    summary: "A cooperative orbital cockpit organized around four crew roles.",
    repo: "https://github.com/ijustcreate/space-adventure",
    live: "https://ijustcreate.github.io/space-adventure/",
  },
  {
    name: "Museum Animation Studio",
    status: "Desktop",
    area: "Museum experience",
    summary: "A kid-first, local-first stop-motion exhibit workstation.",
    repo: "https://github.com/ijustcreate/museum-animation-studio",
  },
  {
    name: "Museum Newsroom",
    status: "Desktop",
    area: "Museum experience",
    summary: "A visitor newsroom with device mapping and virtual fallbacks.",
    repo: "https://github.com/ijustcreate/museum-newsroom",
  },
  {
    name: "Animal Audio Playground",
    status: "Desktop",
    area: "Museum experience",
    summary: "A privacy-first sound-wall workbench built around synthetic evidence.",
    repo: "https://github.com/ijustcreate/animal-audio-playground",
  },
  {
    name: "Emergent Complexity: Entity Life",
    status: "Live",
    area: "Simulation",
    summary: "Deterministic WebGPU particle-life experiments with honest scientific limits.",
    repo: "https://github.com/ijustcreate/emergent-complexity",
    live: "https://ijustcreate.github.io/emergent-complexity/",
  },
  {
    name: "Fish Pond",
    status: "Live",
    area: "Simulation",
    summary: "A calm procedural habitat with live editing and durable local saves.",
    repo: "https://github.com/ijustcreate/FishPond",
    live: "https://ijustcreate.github.io/FishPond/",
  },
  {
    name: "Quest Compass",
    status: "Live",
    area: "Mobile + sensors",
    summary: "GPS trails, camera glyphs, local data, and optional public-location sync.",
    repo: "https://github.com/ijustcreate/location-based-quest-guide-app",
    live: "https://ijustcreate.github.io/location-based-quest-guide-app/",
  },
  {
    name: "The Dream Cabin Chronicles",
    status: "Live",
    area: "Story systems",
    summary: "A campaign library, atlas, lore archive, and local-first tabletop.",
    repo: "https://github.com/ijustcreate/dream-cabin-chronicles",
    live: "https://ijustcreate.github.io/dream-cabin-chronicles/",
  },
  {
    name: "Portals Lab",
    status: "Live",
    area: "Spatial interaction",
    summary: "A first-person portal sandbox with an in-browser authoring workbench.",
    repo: "https://github.com/ijustcreate/portals",
    live: "https://ijustcreate.github.io/portals/",
  },
  {
    name: "Codex Mobile",
    status: "Live",
    area: "Experimental platform",
    summary: "A pocket lab containing One Pixel MMO and other tiny experiments.",
    repo: "https://github.com/ijustcreate/codex-mobile",
    live: "https://ijustcreate.github.io/codex-mobile/",
  },
  {
    name: "The Muses Library",
    status: "Live",
    area: "Knowledge system",
    summary: "A curated library of public tools for people and AI systems.",
    repo: "https://github.com/ijustcreate/the-muses-library",
    live: "https://ijustcreate.github.io/the-muses-library/",
  },
  {
    name: "Media Watcher",
    status: "Desktop",
    area: "Local utility",
    summary: "Authorized browser-media detection and metadata inspection.",
    repo: "https://github.com/ijustcreate/media-watcher",
  },
  {
    name: "Rollwright",
    status: "Source",
    area: "Professional tool",
    summary: "Deterministic flooring takeoff, roll planning, and decision support.",
    repo: "https://github.com/ijustcreate/rollwright",
  },
  {
    name: "ZenDeck",
    status: "Desktop",
    area: "Physical computing",
    summary: "A tactile WinUI cockpit for ScreenPad-style touch displays.",
    repo: "https://github.com/ijustcreate/zendeck",
  },
  {
    name: "Planet Smmith",
    status: "Document",
    area: "Game direction",
    summary: "A production design package for a finite spherical voxel world.",
    repo: "https://github.com/ijustcreate/planet-smmith-design",
  },
];

const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const projectAsset = (name: string) => `${assetBase}/projects/${name}`;

function ProjectLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a className={`action-link ${primary ? "action-link--primary" : ""}`} href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contribution">Skip to my contribution</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Felix portfolio, home">
          <span className="wordmark__pixel" />
          <span>Felix / work</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#contribution">Contribution</a>
          <a href="#case-studies">Case studies</a>
          <a href="#work">Work index</a>
          <a className="header-github" href="https://github.com/ijustcreate" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">Creative technologist · AI-native product builder</p>
            <h1 id="hero-title">I turn unusual ideas into <em>working products.</em></h1>
            <p className="hero__lede">I’m Felix. I find the product inside an unfinished idea, shape how it should feel and behave, direct AI-assisted implementation, and carry the result to an honest demo or public release.</p>
            <div className="hero__actions">
              <a className="button button--bright" href="#case-studies">Review case studies <span aria-hidden="true">↓</span></a>
              <a className="button" href="https://github.com/ijustcreate?tab=repositories" target="_blank" rel="noreferrer">Browse my GitHub ↗</a>
            </div>
            <p className="hero__disclosure">I lead the intent, direction, critique, constraints, and release judgment. AI materially accelerates implementation, debugging, testing, and documentation.</p>
          </div>

          <figure className="hero-proof">
            <div className="hero-proof__frame hero-proof__frame--main">
              <img src={projectAsset("application-companion.png")} alt="Application Companion dashboard with fictitious example data" />
              <span>Human–AI workflow</span>
            </div>
            <div className="hero-proof__frame hero-proof__frame--top">
              <img src={projectAsset("video-store-backrooms.png")} alt="The Video Store Backrooms interface" />
              <span>Community data → world</span>
            </div>
            <div className="hero-proof__frame hero-proof__frame--bottom">
              <img src={projectAsset("desktop-reality.png")} alt="Desktop Reality renderer" />
              <span>Desktop → game space</span>
            </div>
            <figcaption>Genuine project captures · privacy reviewed</figcaption>
          </figure>

          <dl className="proof-strip" aria-label="Portfolio evidence">
            <div><dt>Public repositories</dt><dd>21</dd></div>
            <div><dt>Live browser experiences</dt><dd>11</dd></div>
            <div><dt>Working range</dt><dd>Web · desktop · spatial · museum</dd></div>
            <div><dt>Build model</dt><dd>Human-directed · AI-accelerated</dd></div>
          </dl>
        </section>

        <section className="candidate-snapshot" aria-labelledby="snapshot-title">
          <div>
            <p className="eyebrow">Candidate snapshot</p>
            <h2 id="snapshot-title">Creative direction that survives contact with reality.</h2>
          </div>
          <div className="candidate-snapshot__body">
            <p>I work between product design, experience design, and implementation. My strength is turning a loose concept into a coherent object: a clear premise, a usable interaction, a distinct visual world, and something real enough to test.</p>
            <dl className="fit-list">
              <div><dt>Best fit</dt><dd>Creative technology · AI product exploration · experience prototyping</dd></div>
              <div><dt>Strongest phase</dt><dd>Ambiguous idea → credible prototype</dd></div>
              <div><dt>Recurring focus</dt><dd>Spatial interaction · playful systems · museums · privacy · humane tools</dd></div>
            </dl>
          </div>
        </section>

        <section className="contribution" id="contribution" aria-labelledby="contribution-title">
          <header className="section-heading">
            <p className="eyebrow">What I contribute</p>
            <h2 id="contribution-title">The connective tissue between a strange idea and a thing people can use.</h2>
            <p>I do more than prompt for output. I establish the premise, define the experience, direct the work, test the result, and decide what is honest enough to show.</p>
          </header>

          <ol className="contribution-list">
            <li>
              <span>01</span>
              <h3>Find the product</h3>
              <p>I turn loose ideas into audiences, environments, primary actions, constraints, and success criteria.</p>
              <small>Dream Cabin · Space Adventure · Planet Smmith</small>
            </li>
            <li>
              <span>02</span>
              <h3>Shape the experience</h3>
              <p>I direct hierarchy, interaction, language, visual tone, visible state, recovery, and the rhythm of use.</p>
              <small>Recreate Space · ZenDeck · Museum Animation</small>
            </li>
            <li>
              <span>03</span>
              <h3>Direct AI implementation</h3>
              <p>I break the work into decisions, provide context and constraints, inspect behavior, reject weak output, and steer integration.</p>
              <small>Web · Electron · WebGPU · Windows · C#</small>
            </li>
            <li>
              <span>04</span>
              <h3>Protect the human context</h3>
              <p>I make deliberate calls about privacy, consent, rights, hardware, destructive actions, and what should remain local.</p>
              <small>Comment Collector · Application Companion · Animal Audio</small>
            </li>
            <li>
              <span>05</span>
              <h3>Finish with evidence</h3>
              <p>I value real builds, tests, safe captures, documentation, working links, and visible limitations over polished claims.</p>
              <small>21 public repos · 11 live experiences · verified CI</small>
            </li>
          </ol>

          <aside className="responsibility-split" aria-labelledby="split-title">
            <div className="responsibility-split__title">
              <p className="eyebrow">My AI working agreement</p>
              <h3 id="split-title">Acceleration without surrendering authorship.</h3>
            </div>
            <div>
              <span>Felix owns</span>
              <p>Product premise, audience, experience direction, visual judgment, domain constraints, critical review, publication boundaries, and the final call.</p>
            </div>
            <div>
              <span>AI accelerates</span>
              <p>Implementation exploration, repetitive integration, debugging, test scaffolding, documentation, alternatives, and iteration speed.</p>
            </div>
            <p className="responsibility-split__note">The keystrokes are shared. The responsibility is not.</p>
          </aside>
        </section>

        <section className="case-studies" id="case-studies" aria-labelledby="case-studies-title">
          <header className="section-heading section-heading--compact">
            <p className="eyebrow">Selected evidence</p>
            <h2 id="case-studies-title">Three cases that show how I think.</h2>
            <p>Each one separates the product decision from the implementation help—and keeps the unfinished edge visible.</p>
          </header>

          <article className="case-study">
            <header className="case-study__header">
              <span className="case-study__number">01</span>
              <div><p>Human–AI workflow · Live prototype</p><h3>Application Companion</h3></div>
              <p className="case-study__thesis">A safer way to prepare an application with AI without surrendering user control.</p>
            </header>
            <div className="case-study__body">
              <figure className="case-study__visual">
                <img src={projectAsset("application-companion.png")} alt="Application Companion dashboard using explicitly fictitious examples" loading="lazy" />
                <figcaption>Genuine product capture · fictitious example data</figcaption>
              </figure>
              <div className="case-study__story">
                <div><span>What I saw</span><p>Most application automation asks for sensitive material too early or tries to complete a consequential action for the user.</p></div>
                <div><span>My contribution</span><p>I framed a guided preparation tool, directed the onboarding and handoff flow, and set the privacy boundary around accounts, documents, credentials, autofill, and submission.</p></div>
                <div><span>What shipped</span><p>A local-first prompt builder with sanitized import/export, a safe employer-page handoff, five tests, a privacy audit, and a live public build.</p></div>
                <blockquote><span>Important decision</span>No API-key field. No document upload. No automatic submission. The user stays in the loop.</blockquote>
                <div className="case-study__actions">
                  <ProjectLink href="https://ijustcreate.github.io/application-companion/" primary>Open live prototype</ProjectLink>
                  <ProjectLink href="https://github.com/ijustcreate/application-companion">Review source</ProjectLink>
                </div>
              </div>
            </div>
          </article>

          <article className="case-study case-study--community">
            <header className="case-study__header">
              <span className="case-study__number">02</span>
              <div><p>Community data · Privacy · Editorial systems</p><h3>Comment Collector → Video Store</h3></div>
              <p className="case-study__thesis">A Facebook conversation became a public world—without turning the people in it into content.</p>
            </header>
            <div className="transformation" aria-label="Comment-to-store transformation">
              <div><span>Input</span><strong>679 comments</strong><small>collected locally</small></div>
              <i aria-hidden="true">→</i>
              <div><span>Judgment</span><strong>Names removed</strong><small>raw discussion stays private</small></div>
              <i aria-hidden="true">→</i>
              <div><span>Outcome</span><strong>601 films</strong><small>in an explorable store</small></div>
            </div>
            <div className="case-study__body">
              <div className="dual-visual">
                <figure><img src={projectAsset("facebook-comment-collector.png")} alt="Facebook Comment Collector in an empty, privacy-safe state" loading="lazy" /><figcaption>Local collection</figcaption></figure>
                <figure><img src={projectAsset("video-store-backrooms.png")} alt="Video Store Backrooms interface built from reviewed recommendations" loading="lazy" /><figcaption>Public derivative</figcaption></figure>
              </div>
              <div className="case-study__story">
                <div><span>What I saw</span><p>Hundreds of film recommendations were trapped in an unwieldy social thread, alongside names, links, and personal context that should not become a public dataset.</p></div>
                <div><span>My contribution</span><p>I defined the path from privacy-first capture to reviewed output, set names off by default, directed the information architecture, and chose a video-store metaphor that made the result inviting rather than clinical.</p></div>
                <div><span>What shipped</span><p>A public browser extension and a separate live experience containing only the anonymized, reviewed derivative.</p></div>
                <div className="case-study__actions">
                  <ProjectLink href="https://ijustcreate.github.io/video-store-backrooms/" primary>Enter the store</ProjectLink>
                  <ProjectLink href="https://github.com/ijustcreate/facebook-comment-collector">Collector source</ProjectLink>
                  <ProjectLink href="https://github.com/ijustcreate/video-store-backrooms">Store source</ProjectLink>
                </div>
              </div>
            </div>
          </article>

          <article className="case-study">
            <header className="case-study__header">
              <span className="case-study__number">03</span>
              <div><p>Creative systems · Desktop integration</p><h3>Desktop Reality</h3></div>
              <p className="case-study__thesis">The desktop stopped being a container and became the stage.</p>
            </header>
            <div className="case-study__body">
              <figure className="case-study__visual">
                <img src={projectAsset("desktop-reality.png")} alt="Privacy-safe Desktop Reality renderer state" loading="lazy" />
                <figcaption>Genuine renderer capture · real desktop data excluded</figcaption>
              </figure>
              <div className="case-study__story">
                <div><span>What I saw</span><p>Operating-system geometry—windows, edges, icons, and chrome—could be material for play instead of furniture around the game.</p></div>
                <div><span>My contribution</span><p>I framed desktop geometry as a mechanic, directed the visual and interaction language, steered AI-assisted integration across Electron, PowerShell, and Canvas, and defined the privacy boundary around local window data.</p></div>
                <div><span>What shipped</span><p>A public Windows prototype with context-isolated integration, syntax and publication checks, and a multi-window smoke run. A related C#/Electron Geometry Wars project carries 24 core logic tests.</p></div>
                <blockquote><span>Why source, not a fake demo?</span>The real behavior depends on the Windows desktop. A static web mockup would misrepresent the work.</blockquote>
                <div className="case-study__actions">
                  <ProjectLink href="https://github.com/ijustcreate/desktop-reality" primary>Review Desktop Reality</ProjectLink>
                  <ProjectLink href="https://github.com/ijustcreate/desktop-geometry-wars">Related prototype</ProjectLink>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="public-space" aria-labelledby="public-space-title">
          <header className="section-heading">
            <p className="eyebrow">Designed for public spaces</p>
            <h2 id="public-space-title">I design the room, reset, staff workflow, and failure state—not just the screen.</h2>
            <p>Museum work changes the definition of “usable.” A first-time visitor, unusual hardware, the next group waiting, and an operator recovering the system are all part of the product.</p>
          </header>
          <div className="public-space__grid">
            <article><img src={projectAsset("space-adventure.png")} alt="Space Adventure four-role cockpit" loading="lazy" /><span>Four meaningful roles</span><h3>Space Adventure</h3><p>Crew coordination, staff tuning, session pacing, and idle return.</p><ProjectLink href="https://ijustcreate.github.io/space-adventure/">Open live</ProjectLink></article>
            <article><img src={projectAsset("museum-animation-studio.png")} alt="Museum Animation Studio kid mode" loading="lazy" /><span>One clear primary action</span><h3>Museum Animation Studio</h3><p>Capture-first hierarchy, recoverable projects, humane empty states.</p><ProjectLink href="https://github.com/ijustcreate/museum-animation-studio">Review source</ProjectLink></article>
            <article><img src={projectAsset("museum-newsroom.png")} alt="Museum Newsroom control room with virtual devices" loading="lazy" /><span>Visible operational state</span><h3>Museum Newsroom</h3><p>Physical device mapping, virtual fallbacks, visitor turnover.</p><ProjectLink href="https://github.com/ijustcreate/museum-newsroom">Review source</ProjectLink></article>
            <article><img src={projectAsset("animal-audio.png")} alt="Animal Audio Playground using its synthetic Signal Owl sample" loading="lazy" /><span>Consent-aware evidence</span><h3>Animal Audio Playground</h3><p>Touch, controllers, multilingual use, and synthetic public media.</p><ProjectLink href="https://github.com/ijustcreate/animal-audio-playground">Review source</ProjectLink></article>
          </div>
        </section>

        <section className="method" aria-labelledby="method-title">
          <header>
            <p className="eyebrow">How I work</p>
            <h2 id="method-title">Fast enough to learn.<br />Careful enough to trust.</h2>
          </header>
          <ol>
            <li><span>01</span><h3>Frame</h3><p>Name the actual person, environment, primary action, and risk.</p></li>
            <li><span>02</span><h3>Direct</h3><p>Give AI concrete context, examples, constraints, and a standard to meet.</p></li>
            <li><span>03</span><h3>Interrogate</h3><p>Use the thing. Find where the claim, interaction, or implementation breaks.</p></li>
            <li><span>04</span><h3>Refine</h3><p>Keep the useful weirdness. Remove noise. Make state and consequences visible.</p></li>
            <li><span>05</span><h3>Ship honestly</h3><p>Test, document, protect private material, and label unfinished work accurately.</p></li>
          </ol>
        </section>

        <section className="work-index" id="work" aria-labelledby="work-title">
          <header className="section-heading section-heading--compact">
            <p className="eyebrow">Complete public work index</p>
            <h2 id="work-title">Breadth after depth.</h2>
            <p>Every public repository has a real destination. “Live” means a reachable browser experience; desktop and source projects link to the implementation they actually require.</p>
          </header>
          <div className="work-index__header" aria-hidden="true"><span>Project</span><span>Contribution arena</span><span>Evidence</span></div>
          <ol className="work-index__list">
            {work.map((project, index) => (
              <li key={project.name}>
                <span className="work-index__number">{String(index + 1).padStart(2, "0")}</span>
                <div className="work-index__name"><strong>{project.name}</strong><p>{project.summary}</p></div>
                <div className="work-index__area"><span>{project.area}</span><i className={`status status--${project.status.toLowerCase()}`}>{project.status}</i></div>
                <div className="work-index__links">
                  {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a> : null}
                  <a href={project.repo} target="_blank" rel="noreferrer">Source ↗</a>
                </div>
              </li>
            ))}
          </ol>
          <p className="alias-note"><strong>Names inside other names:</strong> Watcher is Media Watcher. Life is part of Emergent Complexity. One Pixel MMO lives inside Codex Mobile. They are not inflated into separate products.</p>
        </section>

        <section className="honest-boundary" aria-labelledby="boundary-title">
          <div><p className="eyebrow">What the links prove</p><h2 id="boundary-title">I would rather leave a gap than manufacture a claim.</h2></div>
          <div>
            <p>These are working prototypes, public source projects, and design documents—not invented production services. Native products remain source-based when their behavior depends on Windows, Electron, permissions, hardware, or local data.</p>
            <p>Concept art is labeled. Personal interiors, desktop information, visitor media, applicant data, and client details were excluded from this presentation. Three remembered project names remain unpublished because the correct artifacts could not be identified safely.</p>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <p className="eyebrow">The next problem</p>
          <h2 id="closing-title">Bring me the idea that is still a little foggy.</h2>
          <p>I’m most useful where creative technology, AI interaction, spatial systems, playful tools, and real human environments overlap—when an idea has promise but still needs a form people can see, use, question, and improve.</p>
          <div className="hero__actions">
            <a className="button button--bright" href="https://github.com/ijustcreate?tab=repositories" target="_blank" rel="noreferrer">Review my GitHub ↗</a>
            <a className="button" href="#case-studies">Return to case studies ↑</a>
          </div>
          <blockquote>“The person with the knife gets the final vote.”<cite>— Rollwright, keeping software close to reality</cite></blockquote>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top"><span className="wordmark__pixel" /><span>Felix / work</span></a>
        <p>Felix set the direction. AI accelerated the build. The responsibility for what appears here is human.</p>
        <p>Portfolio evidence reviewed · August 2026</p>
      </footer>
    </>
  );
}
