/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Tab switcher (How it works) ── */
function switchTab(btn, id) {
  document.querySelectorAll('.hiw-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  ['tab-c','tab-s','tab-b'].forEach(x => {
    document.getElementById(x).style.display = x === id ? 'grid' : 'none';
  });
}

/* ── Modal system ── */
const forms = {
  cliente: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="María"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="González"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="maria@email.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Barcelona"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  peluquero: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Lucía"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Herrera"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre del salón</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Salón Lucía"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email profesional</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="lucia@salon.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Sevilla"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  marca: `
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre de la marca</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Mi Marca Pro"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email corporativo</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="contacto@mimarca.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Categoría de productos</label>
      <select style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" style="appearance:none;cursor:pointer;">
        <option>Tratamientos capilares</option>
        <option>Tintes y colorantes</option>
        <option>Champús y acondicionadores</option>
        <option>Herramientas profesionales</option>
        <option>Varios</option>
      </select>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`
};

const tabLabels = { cliente:'Soy cliente', peluquero:'Soy peluquero/a', marca:'Soy una marca' };

function buildRegisterModal(activeTab) {
  return `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-title">Crear cuenta</div>
    <div class="modal-sub">Regístrate gratis — sin tarjeta de crédito.</div>
    <div class="form-tabs" id="form-tabs">
      ${['cliente','peluquero','marca'].map(t =>
        `<button class="form-tab${t===activeTab?' active':''}" onclick="switchFormTab('${t}')">${tabLabels[t]}</button>`
      ).join('')}
    </div>
    <div id="form-fields">${forms[activeTab]}</div>
    <button style="width:100%;padding:0.9rem;background:#111009;color:#FDFAF5;border:none;font-family:'DM Sans',sans-serif;font-size:0.88rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;margin-top:0.5rem;" onclick="submitForm()">Crear cuenta gratuita →</button>
    <div style="font-size:0.72rem;color:#7A7268;text-align:center;margin-top:0.8rem;">Al registrarte aceptas los <a href="#">Términos de uso</a> y la <a href="#">Política de privacidad</a></div>`;
}

function buildLoginModal() {
  return `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-title">Iniciar sesión</div>
    <div class="modal-sub">Bienvenido de nuevo a StyleHub.</div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;" style="margin-top:0.5rem"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="tu@email.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>
    <button style="width:100%;padding:0.9rem;background:#111009;color:#FDFAF5;border:none;font-family:'DM Sans',sans-serif;font-size:0.88rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;margin-top:0.5rem;" onclick="submitForm()">Entrar →</button>
    <div style="font-size:0.72rem;color:#7A7268;text-align:center;margin-top:0.8rem;" style="margin-top:0.8rem">
      <a href="#">¿Olvidaste tu contraseña?</a> &nbsp;·&nbsp;
      <a href="#" onclick="openModal('register','cliente')">Crear cuenta gratis</a>
    </div>`;
}

function openModal(type, tab) {
  const box = document.getElementById('modal-box');
  box.innerHTML = type === 'login' ? buildLoginModal() : buildRegisterModal(tab || 'cliente');
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function switchFormTab(tab) {
  document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('form-fields').innerHTML = forms[tab];
}

function submitForm() {
  document.getElementById('modal-box').innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="success-box">
      <div class="icon">🎉</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:1.8rem;letter-spacing:0.04em;margin-bottom:0.5rem;">¡Cuenta creada!</div>
      <p>Bienvenido/a a StyleHub. Hemos enviado un email de verificación a tu correo. En breve podrás completar tu perfil.</p>
      <button style="width:100%;padding:0.9rem;background:#111009;color:#FDFAF5;border:none;font-family:'DM Sans',sans-serif;font-size:0.88rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;margin-top:0.5rem;" style="margin-top:1.5rem;" onclick="closeModal()">Ir a mi panel →</button>
    </div>`;
}


/* ── Counter animation (Bloque A) ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    const display = target >= 1000
      ? Math.round(current).toLocaleString('es-ES')
      : Math.round(current);
    el.textContent = prefix + display + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.benefits-grid').forEach(el => counterObs.observe(el));

/* ── Story carousel (Bloque B) ── */
let currentStory = 0;
const totalStories = 3;
function goStory(idx) {
  document.getElementById('story-' + currentStory).classList.remove('active');
  document.querySelectorAll('.story-dot')[currentStory].classList.remove('active');
  currentStory = (idx + totalStories) % totalStories;
  document.getElementById('story-' + currentStory).classList.add('active');
  document.querySelectorAll('.story-dot')[currentStory].classList.add('active');
}
function nextStory() { goStory(currentStory + 1); }
function prevStory() { goStory(currentStory - 1); }
// Auto-advance every 7s
setInterval(() => requestAnimationFrame(() => nextStory()), 7000);


/* ── Inline register form (Bloque registro) ── */
const riForms = {
  cliente: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="María"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="González"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="maria@email.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Barcelona"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  peluquero: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Lucía"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Herrera"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre del salón</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Salón Lucía"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email profesional</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="lucia@salon.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Sevilla"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  marca: `
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre de la marca</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Mi Marca Pro"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email corporativo</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="contacto@mimarca.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Categoría de productos</label>
      <select style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" style="appearance:none;cursor:pointer;">
        <option>Tratamientos capilares</option>
        <option>Tintes y colorantes</option>
        <option>Champús y acondicionadores</option>
        <option>Herramientas profesionales</option>
        <option>Varios</option>
      </select>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`
};
const riLabels = {
  cliente: '💇 Soy cliente',
  peluquero: '✂️ Soy peluquero/a',
  marca: '🏷️ Marcas profesionales'
};

function riSelectCat(cat) {
  document.getElementById('ri-step1').style.display = 'none';
  document.getElementById('ri-step2').style.display = 'block';
  document.getElementById('ri-step3').style.display = 'none';
  document.getElementById('ri-fields').innerHTML = riForms[cat];
  document.getElementById('ri-selected-label').textContent = riLabels[cat];
  document.getElementById('ri-selected-label').dataset.cat = cat;
}

function riBack() {
  document.getElementById('ri-step1').style.display = 'block';
  document.getElementById('ri-step2').style.display = 'none';
  document.getElementById('ri-step3').style.display = 'none';
}

function riSubmit() {
  document.getElementById('ri-step2').style.display = 'none';
  document.getElementById('ri-step3').style.display = 'block';
}

/* Override openModal hero buttons to scroll to #registro instead */
function scrollToRegister(cat) {
  requestAnimationFrame(() => { document.getElementById('registro').scrollIntoView({behavior:'smooth'}); });
  setTimeout(() => riSelectCat(cat), 600);
}


/* ── Register mid form ── */
const rmForms = {
  cliente: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="María"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="González"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="maria@email.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Barcelona"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  peluquero: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Lucía"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Herrera"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre del salón</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Salón Lucía"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email profesional</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="lucia@salon.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Sevilla"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  marca: `
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre de la marca</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Mi Marca Pro"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email corporativo</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="contacto@mimarca.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Categoría de productos</label>
      <select style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" style="appearance:none;cursor:pointer;">
        <option>Tratamientos capilares</option>
        <option>Tintes y colorantes</option>
        <option>Champús y acondicionadores</option>
        <option>Herramientas profesionales</option>
        <option>Varios</option>
      </select>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`
};
const rmLabels = {
  cliente: '💇 Soy cliente',
  peluquero: '✂️ Soy peluquero/a',
  marca: '🏷️ Marcas profesionales'
};
function rmSelectCat(cat) {
  document.getElementById('rm-step1').style.display = 'none';
  document.getElementById('rm-step2').style.display = 'block';
  document.getElementById('rm-step3').style.display = 'none';
  document.getElementById('rm-fields').innerHTML = rmForms[cat];
  document.getElementById('rm-selected-label').textContent = rmLabels[cat];
}
function rmBack() {
  document.getElementById('rm-step1').style.display = 'block';
  document.getElementById('rm-step2').style.display = 'none';
  document.getElementById('rm-step3').style.display = 'none';
}
function rmSubmit() {
  document.getElementById('rm-step2').style.display = 'none';
  document.getElementById('rm-step3').style.display = 'block';
}


/* ── Register strip (golden block) ── */
const rsForms = {
  cliente: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="María"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="González"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="maria@email.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Barcelona"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  peluquero: `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;">
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Lucía"></div>
      <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Apellidos</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Herrera"></div>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre del salón</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Salón Lucía"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email profesional</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="lucia@salon.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Ciudad</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Sevilla"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`,
  marca: `
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Nombre de la marca</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="text" placeholder="Mi Marca Pro"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Email corporativo</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="email" placeholder="contacto@mimarca.com"></div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Categoría de productos</label>
      <select style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" style="appearance:none;cursor:pointer;">
        <option>Tratamientos capilares</option>
        <option>Tintes y colorantes</option>
        <option>Champús y acondicionadores</option>
        <option>Herramientas profesionales</option>
        <option>Varios</option>
      </select>
    </div>
    <div style="display:flex;flex-direction:column;margin-bottom:1rem;"><label style="display:block;font-size:0.68rem;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;color:#3D342E;margin-bottom:0.35rem;">Contraseña</label><input style="display:block;width:100%;padding:0.75rem 1rem;border:1.5px solid rgba(200,168,74,0.25);font-family:'DM Sans',sans-serif;font-size:0.88rem;background:white;outline:none;box-sizing:border-box;" type="password" placeholder="••••••••"></div>`
};
const rsLabels = {
  cliente: '💇 Soy cliente',
  peluquero: '✂️ Soy peluquero/a',
  marca: '🏷️ Marcas profesionales'
};
function rsSelect(cat) {
  document.getElementById('rs-step1').style.display = 'none';
  document.getElementById('rs-step2').style.display = 'flex';
  document.getElementById('rs-step3').style.display = 'none';
  document.getElementById('rs-fields').innerHTML = rsForms[cat];
  document.getElementById('rs-form-tag').textContent = rsLabels[cat];
}
function rsBack() {
  document.getElementById('rs-step1').style.display = 'flex';
  document.getElementById('rs-step2').style.display = 'none';
  document.getElementById('rs-step3').style.display = 'none';
}
function rsSubmit() {
  document.getElementById('rs-step2').style.display = 'none';
  document.getElementById('rs-step3').style.display = 'flex';
}
/* Update scrollToRegister to also trigger rs form */
function scrollToRegister(cat) {
  requestAnimationFrame(() => { document.getElementById('registro').scrollIntoView({behavior:'smooth'}); });
  setTimeout(() => rsSelect(cat), 650);
}


/* ── Mobile menu ── */
function toggleMenu() {
  const ham = document.getElementById('nav-hamburger');
  const mob = document.getElementById('nav-mobile');
  ham.classList.toggle('open');
  mob.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('nav-hamburger').classList.remove('open');
  document.getElementById('nav-mobile').classList.remove('open');
}
// Close menu on outside click
document.addEventListener('click', function(e) {
  const ham = document.getElementById('nav-hamburger');
  const mob = document.getElementById('nav-mobile');
  if (mob.classList.contains('open') &&
      !ham.contains(e.target) && !mob.contains(e.target)) {
    closeMenu();
  }
});



/* ── Escape key to close modal ── */
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
