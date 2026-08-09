"use client";

/* eslint-disable @next/next/no-img-element -- explicit public paths keep this portfolio portable across Sites and GitHub Pages. */

import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

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
    name: "Project Lantern",
    status: "Live",
    area: "Public-space systems",
    summary: "A museum donor board becomes a staff-ready control room for displays, schedules, broadcasts, and feedback.",
    repo: "https://github.com/ijustcreate/project-lantern",
    live: "https://ijustcreate.github.io/project-lantern/",
  },
  {
    name: "Behind Closed Doors Karaoke",
    status: "Live",
    area: "Venue interaction",
    summary: "A tactile karaoke and menu system designed for a low-light room, live roles, and multilingual use.",
    repo: "https://github.com/ijustcreate/behind-closed-doors-karaoke",
    live: "https://ijustcreate.github.io/behind-closed-doors-karaoke/",
  },
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

const portfolioTabs = [
  { id: "start", label: "Start", detail: "The short read" },
  { id: "thinking", label: "How I think", detail: "The method" },
  { id: "lantern", label: "Project Lantern", detail: "Museum control room" },
  { id: "bcd", label: "BCD Karaoke", detail: "Venue interaction" },
  { id: "proof", label: "More proof", detail: "Three related builds" },
  { id: "archive", label: "All work", detail: "Complete public index" },
] as const;

type TabId = (typeof portfolioTabs)[number]["id"];

function ProjectLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <a className={`action-link ${primary ? "action-link--primary" : ""}`} href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

function EvidenceDetails({ title, question, children }: { title: string; question: string; children: ReactNode }) {
  return (
    <details className="evidence-details">
      <summary>
        <span>{title}</span>
        <strong>{question}</strong>
        <i aria-hidden="true">+</i>
      </summary>
      <div className="evidence-details__body">{children}</div>
    </details>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("start");
  const activeTabIndex = portfolioTabs.findIndex((tab) => tab.id === activeTab);

  useEffect(() => {
    const syncTabFromHash = () => {
      const tabFromHash = window.location.hash.replace("#", "") as TabId;
      if (portfolioTabs.some((tab) => tab.id === tabFromHash)) {
        setActiveTab(tabFromHash);
      }
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);
    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  const selectTab = (tabId: TabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  const moveTabFocus = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyMap: Record<string, number> = {
      ArrowLeft: index === 0 ? portfolioTabs.length - 1 : index - 1,
      ArrowRight: index === portfolioTabs.length - 1 ? 0 : index + 1,
      Home: 0,
      End: portfolioTabs.length - 1,
    };
    const nextIndex = keyMap[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    const nextTab = portfolioTabs[nextIndex];
    selectTab(nextTab.id);
    requestAnimationFrame(() => document.getElementById(`portfolio-tab-${nextTab.id}`)?.focus());
  };

  return (
    <>
      <a className="skip-link" href="#portfolio-tabs">Skip to portfolio sections</a>

      <header className="site-header">
        <a className="wordmark" href="#start" aria-label="Felix portfolio, home" onClick={() => selectTab("start")}>
          <span className="wordmark__pixel" />
          <span>Felix / field notes</span>
        </a>
        <nav aria-label="External profiles">
          <a className="header-github" href="https://github.com/ijustcreate" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <main id="top" className="portfolio-main">
        <div className="portfolio-tabs-shell">
          <nav className="portfolio-tabs" id="portfolio-tabs" role="tablist" aria-label="Portfolio sections">
            {portfolioTabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`portfolio-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`portfolio-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={() => selectTab(tab.id)}
                onKeyDown={(event) => moveTabFocus(event, index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {tab.label}
              </button>
            ))}
          </nav>
          <p className="portfolio-tabs-state" aria-live="polite">
            <span>Current focus</span>
            <strong>{portfolioTabs[activeTabIndex].detail}</strong>
            <i>{String(activeTabIndex + 1).padStart(2, "0")} / {String(portfolioTabs.length).padStart(2, "0")}</i>
          </p>
        </div>

        <section id="portfolio-panel-start" className="hero tab-panel tab-panel--start" role="tabpanel" aria-labelledby="portfolio-tab-start" hidden={activeTab !== "start"}>
          <div className="hero__copy">
            <p className="eyebrow">Felix Embree · creative technologist · AI-native product builder</p>
            <h1 id="hero-title">I make systems people can <em>feel their way through.</em></h1>
            <p className="hero__lede">My work starts with a real situation: a museum staffer beside a TV wall, a singer holding a phone in a dark room, a community thread that needs care. I find the pressure in the moment, shape the interaction around it, and use AI to accelerate the build without giving away the judgment.</p>
            <div className="hero__actions">
              <button className="button button--bright" type="button" onClick={() => selectTab("thinking")}>See how I think <span aria-hidden="true">→</span></button>
              <a className="button" href="https://ijustcreate.github.io/project-lantern/" target="_blank" rel="noreferrer">Open Project Lantern ↗</a>
            </div>
            <p className="hero__disclosure">Felix directs the product premise, experience, constraints, critique, and release decision. AI accelerates implementation, integration, debugging, testing, and documentation.</p>
          </div>

          <figure className="hero-stage" aria-label="Two featured interaction systems">
            <div className="hero-stage__grid" aria-hidden="true" />
            <div className="hero-stage__lantern">
              <img src={projectAsset("project-lantern-board-editor.png")} alt="Project Lantern donor board editor with a portrait display preview" />
              <span>Project Lantern / museum control room</span>
            </div>
            <div className="hero-stage__bcd">
              <img src={projectAsset("bcd-the-buzz-cocktail.png")} alt="The Buzz cocktail from Behind Closed Doors Karaoke" />
              <div>
                <small>BCD Karaoke</small>
                <strong>Tap the drink.<br />Keep the night moving.</strong>
              </div>
            </div>
            <figcaption>Two new product stories · real projects · real constraints</figcaption>
          </figure>

          <dl className="proof-strip" aria-label="Portfolio evidence">
            <div><dt>Public repositories</dt><dd>23</dd></div>
            <div><dt>Live browser builds</dt><dd>13</dd></div>
            <div><dt>New evidence</dt><dd>Museum control · venue interaction</dd></div>
            <div><dt>Working model</dt><dd>Human-directed · AI-accelerated</dd></div>
          </dl>
        </section>

        <section id="portfolio-panel-thinking" className="thinking tab-panel" role="tabpanel" aria-labelledby="portfolio-tab-thinking" hidden={activeTab !== "thinking"}>
          <header className="section-heading">
            <p className="eyebrow">The thread behind the projects</p>
            <h2 id="thinking-title">I do not begin with a screen. I begin with the moment the screen has to survive.</h2>
            <p>Across the project conversations, the same pattern appears: notice the pressure, name it plainly, make the state visible, then keep refining until the interaction belongs to its environment.</p>
          </header>

          <ol className="thinking__steps">
            <li>
              <span>01</span>
              <h3>Watch the real context</h3>
              <p>Who is holding the device? Who is waiting? What happens when the room gets loud, the screen gets small, or the system goes offline?</p>
              <small>Museum staff · visitors · singers · hosts · displays</small>
            </li>
            <li>
              <span>02</span>
              <h3>Find the pressure point</h3>
              <p>I look for the part that is frustrating, ambiguous, too fragile, or quietly asking the user to do the system’s work.</p>
              <small>“The menu overlaps” · “the canvas is unusable on phone” · “what is live?”</small>
            </li>
            <li>
              <span>03</span>
              <h3>Make the action physical</h3>
              <p>Controls should manipulate the thing they describe. A board moves on the board. A drink opens from its name. A schedule has a real timeline.</p>
              <small>Direct manipulation · touch targets · visible consequences</small>
            </li>
            <li>
              <span>04</span>
              <h3>Show the state, protect the person</h3>
              <p>Live, offline, saved, queued, private, admin-only, and recoverable should never be a mystery. The interface carries that responsibility.</p>
              <small>Muted offline events · role-bound controls · draft-safe saves</small>
            </li>
            <li>
              <span>05</span>
              <h3>Use AI as a fast studio</h3>
              <p>I direct the constraints, inspect behavior, reject weak output, and keep iterating. The code may be shared; the product call stays human.</p>
              <small>Context → critique → revision → verification</small>
            </li>
          </ol>

          <aside className="thinking__agreement" aria-labelledby="agreement-title">
            <div>
              <p className="eyebrow">My AI working agreement</p>
              <h3 id="agreement-title">The keystrokes can be shared. The responsibility is not.</h3>
            </div>
            <p><strong>Felix owns</strong> the observation, product premise, interaction direction, safety boundary, taste, critique, and final decision to ship.</p>
            <p><strong>AI accelerates</strong> implementation exploration, integration, debugging, test scaffolding, documentation, and iteration speed.</p>
          </aside>
        </section>

        <section id="portfolio-panel-lantern" className="cases tab-panel" role="tabpanel" aria-labelledby="portfolio-tab-lantern" hidden={activeTab !== "lantern"}>
          <header className="section-heading section-heading--compact">
            <p className="eyebrow">Two new evidence packets</p>
            <h2 id="cases-title">Same instincts. Very different rooms.</h2>
            <p>These are not just finished interfaces. They are records of how a loose prompt became a usable object through concrete product decisions.</p>
          </header>

          <article className="case-story case-story--lantern">
            <header className="case-story__header">
              <span className="case-story__number">01</span>
              <div>
                <p>Public-space interaction · staff systems · live display</p>
                <h3>Project Lantern</h3>
              </div>
              <p className="case-story__thesis">A donor board is not a poster. It is a living public surface with staff, schedules, screens, content, and consequences.</p>
            </header>

            <div className="case-story__layout">
              <div className="lantern-gallery">
                <figure className="lantern-gallery__main">
                  <img src={projectAsset("project-lantern-board-editor.png")} alt="Project Lantern board editor showing an editable portrait donor display" loading="lazy" />
                  <figcaption>Board Editor · display composition is directly editable</figcaption>
                </figure>
                <figure>
                  <img src={projectAsset("project-lantern-schedule.png")} alt="Project Lantern schedule showing boards, announcements, and broadcast events" loading="lazy" />
                  <figcaption>Schedule · staff can see what is next, live, or conflicted</figcaption>
                </figure>
                <figure>
                  <img src={projectAsset("project-lantern-broadcast.png")} alt="Project Lantern broadcast studio with a movable live composition" loading="lazy" />
                  <figcaption>Broadcast · the preview is a manipulable composition</figcaption>
                </figure>
              </div>

              <div className="case-story__evidence">
                <div className="case-facts">
                  <p><span>Context</span> Children’s Museum of Stockton prototype</p>
                  <p><span>Product question</span> How does a public display stay practical for the person running it?</p>
                  <p><span>What changed</span> A donor wall became a control center for boards, displays, schedules, announcements, broadcast, and feedback.</p>
                  <p><span>Evidence</span> Live prototype, source, production checks, fictional demo data, and multi-viewport verification.</p>
                </div>

                <div className="decision-stack">
                  <p className="eyebrow">Decisions I directed</p>
                  <EvidenceDetails title="Design for the room, not the mockup" question="What happens when there are staff, multiple displays, and a waiting group?">
                    <p>One coherent workspace made the actual operating loop visible: build the board, assign it to a display, schedule it, preview it, then publish. The important unit is the room and its people—not a single pretty screen.</p>
                  </EvidenceDetails>
                  <EvidenceDetails title="Let the output obey the editor" question="Why should an operator trust a drag handle?">
                    <p>The board geometry and live display renderer were treated as one contract. A change to position, crop, frame, or composition must carry through to the real output instead of becoming a misleading preview.</p>
                  </EvidenceDetails>
                  <EvidenceDetails title="Turn invisible conditions into state" question="How should an offline display or a schedule conflict feel?">
                    <p>Offline targets visibly mute their scheduled material while preserving type cues. The schedule distinguishes board, announcement, and broadcast layers, with live and next-up information designed for operational clarity.</p>
                  </EvidenceDetails>
                </div>

                <div className="case-story__actions">
                  <ProjectLink href="https://ijustcreate.github.io/project-lantern/" primary>Open live control room</ProjectLink>
                  <ProjectLink href="https://github.com/ijustcreate/project-lantern">Review source</ProjectLink>
                </div>
              </div>
            </div>
          </article>

        </section>

        <section id="portfolio-panel-bcd" className="cases tab-panel" role="tabpanel" aria-labelledby="portfolio-tab-bcd" hidden={activeTab !== "bcd"}>
          <header className="section-heading section-heading--compact">
            <p className="eyebrow">A different room, same attention</p>
            <h2>Interaction that works after the lights go down.</h2>
            <p>Behind Closed Doors Karaoke is a real-world test of small screens, messy attention, shared state, and playful details that do not get in the way.</p>
          </header>

          <article className="case-story case-story--bcd">
            <header className="case-story__header">
              <span className="case-story__number">02</span>
              <div>
                <p>Venue interaction · touch systems · role-aware behavior</p>
                <h3>Behind Closed Doors Karaoke</h3>
              </div>
              <p className="case-story__thesis">A menu and songbook have to feel right in a dark, busy room—while quietly handling real permissions, live changes, and human mistakes.</p>
            </header>

            <div className="case-story__layout case-story__layout--bcd">
              <div className="bcd-stage">
                <figure className="bcd-stage__photo">
                  <img src={projectAsset("bcd-back-bar-bottles.png")} alt="Behind Closed Doors Karaoke back-bar visual" loading="lazy" />
                  <figcaption>Venue atmosphere is part of the interface, not decoration</figcaption>
                </figure>
                <div className="bcd-stage__menu" aria-label="A stylized excerpt of the Behind Closed Doors menu interface">
                  <p>Behind Closed Doors</p>
                  <span>Specialty drink menu</span>
                  <div><strong>The Buzz</strong><em>$12</em><small>Botanical · bright · just strange enough</small></div>
                  <div><strong>Midnight Signal</strong><em>$13</em><small>Dark fruit · smoke · low light</small></div>
                  <div><strong>After Hours</strong><em>$11</em><small>Warm spice · citrus · keep singing</small></div>
                  <footer>Tap a drink to see it · Saved locally · Draft safe</footer>
                </div>
                <figure className="bcd-stage__cocktail">
                  <img src={projectAsset("bcd-the-buzz-cocktail.png")} alt="The Buzz sample cocktail artwork from Behind Closed Doors Karaoke" loading="lazy" />
                </figure>
              </div>

              <div className="case-story__evidence">
                <div className="case-facts">
                  <p><span>Context</span> A real karaoke venue with phones, hosts, drinks, low light, and interrupted attention.</p>
                  <p><span>Product question</span> How does a playful night-of tool stay understandable while the venue is moving?</p>
                  <p><span>Working surface</span> 4,196-song catalogue, shared queue, singer history, menu editing, chat, and venue settings.</p>
                  <p><span>Evidence</span> Live prototype, source, mobile checks, translation behavior, and admin-only shared menu state.</p>
                </div>

                <div className="decision-stack">
                  <p className="eyebrow">Decisions I directed</p>
                  <EvidenceDetails title="Touch the thing, not a proxy" question="What should happen when someone wants to see a drink?">
                    <p>The drink name itself opens the photo and the popup remains open until the person dismisses it. Interaction is attached to the object, not hidden in a tiny icon or allowed to accidentally flip the menu away.</p>
                  </EvidenceDetails>
                  <EvidenceDetails title="Make permission part of the product" question="Who gets to change the night’s visible menu?">
                    <p>Menu selection is an admin action and the chosen menu is shared with everyone. Editing becomes a real save flow with a name and protection against leaving unsaved work behind.</p>
                  </EvidenceDetails>
                  <EvidenceDetails title="Treat language and state as live behavior" question="What changes when the user changes language or reconnects?">
                    <p>Current built-in menus, achievements, account controls, and virtualized song-list actions were made to translate in context with an English fallback. Background syncing stays quiet instead of frightening a singer with a toast after every message.</p>
                  </EvidenceDetails>
                </div>

                <div className="case-story__actions">
                  <ProjectLink href="https://ijustcreate.github.io/behind-closed-doors-karaoke/" primary>Open live venue prototype</ProjectLink>
                  <ProjectLink href="https://github.com/ijustcreate/behind-closed-doors-karaoke">Review source</ProjectLink>
                </div>
              </div>
            </div>
          </article>
        </section>

        <div id="portfolio-panel-proof" className="tab-panel" role="tabpanel" aria-labelledby="portfolio-tab-proof" hidden={activeTab !== "proof"}>
        <section className="transfer" aria-labelledby="transfer-title">
          <header className="section-heading">
            <p className="eyebrow">The pattern transfers</p>
            <h2 id="transfer-title">Different products. Same standards of care.</h2>
            <p>These three projects show the same direction at another scale: protect the person, make the system legible, and ship only what the evidence can support.</p>
          </header>
          <div className="transfer__grid">
            <article>
              <img src={projectAsset("application-companion.png")} alt="Application Companion dashboard with fictitious example data" loading="lazy" />
              <span>Human–AI workflow</span>
              <h3>Application Companion</h3>
              <p>Keep a consequential task human-led: no document upload, no API key, no automatic submission.</p>
              <ProjectLink href="https://ijustcreate.github.io/application-companion/">Open live</ProjectLink>
            </article>
            <article>
              <img src={projectAsset("video-store-backrooms.png")} alt="The Video Store Backrooms interface" loading="lazy" />
              <span>Privacy → public artifact</span>
              <h3>Comment Collector → Video Store</h3>
              <p>679 private-context comments became 601 reviewed film recommendations without publishing the people inside the thread.</p>
              <ProjectLink href="https://ijustcreate.github.io/video-store-backrooms/">Enter the store</ProjectLink>
            </article>
            <article>
              <img src={projectAsset("desktop-reality.png")} alt="Desktop Reality renderer" loading="lazy" />
              <span>Creative systems</span>
              <h3>Desktop Reality</h3>
              <p>Make the desktop a stage while keeping the local-world boundary explicit instead of faking a web demo.</p>
              <ProjectLink href="https://github.com/ijustcreate/desktop-reality">Review source</ProjectLink>
            </article>
          </div>
        </section>

        </div>

        <div id="portfolio-panel-archive" className="tab-panel tab-panel--archive" role="tabpanel" aria-labelledby="portfolio-tab-archive" hidden={activeTab !== "archive"}>
        <section className="work-index" aria-labelledby="work-title">
          <header className="section-heading section-heading--compact">
            <p className="eyebrow">Complete public work index</p>
            <h2 id="work-title">Breadth after proof.</h2>
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
          <div><p className="eyebrow">Proof, not theatre</p><h2 id="boundary-title">I call a prototype a prototype—and make the next test obvious.</h2></div>
          <div>
            <p>These links are working prototypes, public source projects, and design documents. I do not invent adoption, revenue, or production claims. Native work remains source-based when its behavior depends on Windows, hardware, permissions, or local data.</p>
            <p>Concept art is labeled. Personal interiors, private conversations, applicant material, visitor media, donor records, and client details stay out of this portfolio. The point is to show the judgment, not expose the people around it.</p>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <p className="eyebrow">The next problem</p>
          <h2 id="closing-title">Bring me the idea that is still a little foggy.</h2>
          <p>I’m most useful where creative technology, AI interaction, spatial systems, playful tools, and real human environments overlap—when an idea has promise but still needs a form people can see, use, question, and improve.</p>
          <div className="hero__actions">
            <a className="button button--bright" href="https://github.com/ijustcreate?tab=repositories" target="_blank" rel="noreferrer">Review my GitHub ↗</a>
            <button className="button" type="button" onClick={() => selectTab("thinking")}>Return to the method ↑</button>
          </div>
          <blockquote>“The person with the knife gets the final vote.”<cite>— Rollwright, keeping software close to reality</cite></blockquote>
        </section>
        </div>
      </main>

      <footer>
        <a className="wordmark" href="#start" onClick={() => selectTab("start")}><span className="wordmark__pixel" /><span>Felix / field notes</span></a>
        <p>Felix sets the direction. AI accelerates the build. The responsibility for what appears here is human.</p>
        <p>Portfolio evidence reviewed · August 2026</p>
      </footer>
    </>
  );
}
