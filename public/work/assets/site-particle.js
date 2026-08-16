(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const toast = (message) => {
    let node = $('.toast');
    if (!node) {
      node = document.createElement('div');
      node.className = 'toast';
      node.setAttribute('role', 'status');
      node.setAttribute('aria-live', 'polite');
      document.body.append(node);
    }
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => node.classList.remove('show'), 2200);
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Deterministic particle specimen.
  const canvas = $('#particle-canvas');
  if (canvas) {
    const context = canvas.getContext('2d');
    const SCALE = 1024;
    let seed = 1337;
    let step = 0;
    let particles = [];
    let raf = null;
    let running = !reducedMotion;

    const randomGenerator = (initialSeed) => {
      let localSeed = initialSeed | 0;
      return () => {
        localSeed |= 0;
        localSeed = (localSeed + 0x6D2B79F5) | 0;
        let value = Math.imul(localSeed ^ (localSeed >>> 15), 1 | localSeed);
        value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
      };
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * ratio));
      canvas.height = Math.max(1, Math.round(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const initialize = () => {
      const random = randomGenerator(seed);
      step = 0;
      particles = Array.from({ length: 92 }, (_, id) => ({
        id,
        x: Math.floor(random() * 1000 * SCALE),
        y: Math.floor(random() * 620 * SCALE),
        vx: Math.floor((random() - 0.5) * 5000),
        vy: Math.floor((random() - 0.5) * 5000),
        species: Math.floor(random() * 5),
      }));
      updateReadout();
      draw();
    };

    const advance = (count = 1) => {
      for (let n = 0; n < count; n += 1) {
        for (const particle of particles) {
          particle.x = (particle.x + particle.vx + 1000 * SCALE) % (1000 * SCALE);
          particle.y = (particle.y + particle.vy + 620 * SCALE) % (620 * SCALE);
        }
        step += 1;
      }
      updateReadout();
      draw();
    };

    const checksum = () => {
      let hash = 2166136261;
      for (const particle of particles) {
        const values = [particle.id, particle.x, particle.y, particle.vx, particle.vy, particle.species];
        for (const value of values) {
          hash ^= value & 0xff;
          hash = Math.imul(hash, 16777619);
          hash ^= (value >>> 8) & 0xff;
          hash = Math.imul(hash, 16777619);
          hash ^= (value >>> 16) & 0xff;
          hash = Math.imul(hash, 16777619);
        }
      }
      return (hash >>> 0).toString(16).padStart(8, '0');
    };

    const palette = ['#c7ff4a', '#58d6ca', '#69a8ff', '#9c86ff', '#ff806c'];
    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#03060b';
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = 'lighter';
      for (const particle of particles) {
        const x = (particle.x / (1000 * SCALE)) * width;
        const y = (particle.y / (620 * SCALE)) * height;
        context.beginPath();
        context.fillStyle = palette[particle.species];
        context.globalAlpha = .72;
        context.arc(x, y, 2.8, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      context.globalCompositeOperation = 'source-over';
    };

    function updateReadout() {
      $('#particle-seed').textContent = String(seed);
      $('#particle-step').textContent = step.toLocaleString();
      $('#particle-checksum').textContent = checksum();
    }

    const tick = () => {
      if (running) advance(2);
      raf = requestAnimationFrame(tick);
    };

    $('#particle-toggle')?.addEventListener('click', (event) => {
      running = !running;
      event.currentTarget.textContent = running ? 'Pause' : 'Run';
    });
    $('#particle-advance')?.addEventListener('click', () => advance(120));
    $('#particle-reset')?.addEventListener('click', () => {
      initialize();
      toast('Reset to the same seed and initial checksum');
    });
    $('#particle-new-seed')?.addEventListener('click', () => {
      seed += 101;
      initialize();
      toast(`New deterministic seed: ${seed}`);
    });
    window.addEventListener('resize', () => { resizeCanvas(); draw(); });
    resizeCanvas();
    initialize();
    tick();
    window.addEventListener('pagehide', () => cancelAnimationFrame(raf));
  }
})();