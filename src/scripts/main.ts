const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const one = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const all = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));
type Inertable = HTMLElement & { inert: boolean };

/* ── Révélation à l'entrée dans le viewport ── */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
  { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
);
all('[data-reveal],[data-clip],.step').forEach((el) => io.observe(el));

/* ── Manifeste : les mots s'allument au scroll ── */
const manifesto = one('.manifesto');
const words: HTMLElement[] = [];
if (manifesto) {
  const split = (node: Node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        (n.textContent ?? '').split(/(\s+)/).forEach((t) => {
          if (!t.trim()) { frag.append(t); return; }
          const s = document.createElement('span');
          s.className = 'w'; s.textContent = t; frag.append(s); words.push(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) split(n);
    });
  };
  split(manifesto);
}

/* ── Compteurs ── */
const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  cio.unobserve(e.target);
  const el = e.target as HTMLElement;
  const end = Number(el.dataset.count), suffix = el.dataset.suffix ?? '';
  if (reduce) { el.textContent = end + suffix; return; }
  const t0 = performance.now(), dur = 1600;
  const tick = (t: number) => {
    const p = clamp((t - t0) / dur);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}), { threshold: 0.6 });
all('[data-count]').forEach((c) => { if (!reduce) c.textContent = '0' + (c.dataset.suffix ?? ''); cio.observe(c); });

/* ── Scroll : en-tête, progression, parallaxe, manifeste ── */
const header = one('#header'), progress = one('#progress'), toTop = one('#toTop');
const para = all('[data-parallax]');
let ticking = false;
const onScroll = () => {
  const y = scrollY, vh = innerHeight;
  header?.classList.toggle('scrolled', y > 40);
  toTop?.classList.toggle('show', y > vh * 0.9);
  const max = document.documentElement.scrollHeight - vh;
  progress?.style.setProperty('--p', String(max > 0 ? y / max : 0));
  if (!reduce) {
    para.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const k = Number(el.dataset.parallax) || 0.08;
      const off = (r.top + r.height / 2 - vh / 2) * -k;
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0) scale(1.14)`;
    });
  }
  if (manifesto && words.length) {
    const r = manifesto.getBoundingClientRect();
    const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.25));
    const n = Math.floor(p * words.length * 1.05);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  }
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('resize', onScroll);
onScroll();
toTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

/* ── Lien actif dans la navigation ── */
const links = all<HTMLAnchorElement>('.nav a[data-nav]');
const sections = links.map((l) => document.getElementById(l.dataset.nav!)).filter(Boolean) as HTMLElement[];
if (sections.length) {
  const nio = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((l) => l.classList.toggle('active', l.dataset.nav === e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => nio.observe(s));
}

/* ── Tiroir mobile ── */
const burger = one('#burger'), drawer = one('#drawer') as Inertable | null;
const setMenu = (open: boolean) => {
  burger?.setAttribute('aria-expanded', String(open));
  burger?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  drawer?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (drawer) drawer.inert = !open;
};
if (drawer) drawer.inert = true;
burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
if (drawer) all('a', drawer).forEach((a) => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
matchMedia('(min-width: 1101px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

/* ── Inclinaison 3D de l'affiche B-OIL ── */
const fw = one('.flyer-wrap');
if (fw && !reduce && matchMedia('(hover: hover)').matches) {
  fw.addEventListener('pointermove', (e) => {
    const r = fw.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    fw.style.setProperty('--ry', `${x * 12}deg`);
    fw.style.setProperty('--rx', `${-y * 12}deg`);
  });
  fw.addEventListener('pointerleave', () => { fw.style.setProperty('--ry', '0deg'); fw.style.setProperty('--rx', '0deg'); });
}

/* ── Lightbox ── */
const lb = one<HTMLDialogElement>('#lightbox');
const shots = all<HTMLButtonElement>('.shot');
if (lb && shots.length) {
  const img = one<HTMLImageElement>('#lbImg', lb)!, cap = one('#lbCap', lb)!;
  let idx = 0;
  const show = (i: number) => {
    idx = (i + shots.length) % shots.length;
    const s = shots[idx];
    img.src = s.dataset.full!; img.alt = s.dataset.alt ?? ''; cap.textContent = s.dataset.alt ?? '';
    img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
  };
  shots.forEach((s, i) => s.addEventListener('click', () => { show(i); lb.showModal(); }));
  one('#lbClose', lb)!.addEventListener('click', () => lb.close());
  one('#lbPrev', lb)!.addEventListener('click', () => show(idx - 1));
  one('#lbNext', lb)!.addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t === lb || t.classList.contains('lb-inner')) lb.close();
  });
  lb.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
}

/* ── Formulaire (Netlify Forms, envoi sans rechargement) ── */
const form = one<HTMLFormElement>('#contactForm');
if (form) {
  const status = one('#formStatus')!;
  const btn = one<HTMLButtonElement>('button[type=submit]', form)!;
  const labelEl = one('.lbl', btn)!;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const label = labelEl.textContent;
    btn.disabled = true; labelEl.textContent = 'Envoi en cours…';
    status.className = 'form-status';
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.className = 'form-status ok';
      status.textContent = 'Merci ! Votre message est bien parti. Nous vous répondons sous 24 h ouvrées.';
    } catch {
      status.className = 'form-status err';
      status.innerHTML = 'L’envoi a échoué. Écrivez-nous directement à <a href="mailto:socoocapk@gmail.com">socoocapk@gmail.com</a> ou sur WhatsApp.';
    } finally {
      btn.disabled = false; labelEl.textContent = label;
    }
  });
}
