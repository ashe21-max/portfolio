const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-education': 'Education',
        'nav-contact': 'Contact',
        'hero-intro': "Hello, I'm",
        'hero-copy': 'Experienced Computer Science student from University of Gondar with strong backend and frontend skills.',
        'hero-download': 'Download CV',
        'hero-contact': 'Contact Me',
        'about-title': 'About Me',
        'projects-title': 'Projects',
        'form-submit': 'Send Message'
    },
    am: {
        'nav-home': 'ቤት',
        'nav-about': 'ስለእኔ',
        'nav-skills': 'ክህሎቶች',
        'nav-projects': 'ፕሮጀክቶች',
        'nav-education': 'ትምህርት',
        'nav-contact': 'አገናኝ',
        'hero-intro': 'ሰላም',
        'hero-copy': 'ከጎንደር ዩኒቨርሲቲ የኮምፒተር ሳይንስ ተማሪ።',
        'hero-download': 'CV ያውርዱ',
        'hero-contact': 'አግኙኝ',
        'about-title': 'ስለእኔ',
        'projects-title': 'ፕሮጀክቶች',
        'form-submit': 'መልእክት ላክ'
    }
};

function setTextByKey(key, value) {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => el.textContent = value);
}

function initLanguage() {
    const lang = localStorage.getItem('portfolioLang') || 'en';
    Object.keys(translations[lang] || translations.en).forEach(k => setTextByKey(k, translations[lang][k] || translations.en[k]));
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('portfolioLang', lang);
    initLanguage();
}

function updateThemeIcon() {
    const icon = document.querySelector('.theme-toggle i');
    if (!icon) return;
    icon.className = document.body.classList.contains('light-theme') ? 'ri-sun-line' : 'ri-moon-line';
}

function initTheme() {
    const stored = localStorage.getItem('portfolioTheme');
    if (stored === 'light') document.body.classList.add('light-theme');
    updateThemeIcon();
}

function calculateAgeFromBirthdate(birthdate) {
    const [year, month, day] = birthdate.split('-').map(Number);
    const today = new Date();
    let age = today.getFullYear() - year;
    const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
    if (today < birthdayThisYear) age -= 1;
    return age;
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form || !status) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        status.textContent = '';

        if (!form.checkValidity()) {
            status.textContent = 'Please complete all fields before sending.';
            return;
        }

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            subject: form.subject.value.trim(),
            message: form.message.value.trim()
        };

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                status.textContent = result.message || 'Message sent successfully!';
                status.style.color = '#81e6d9';
                form.reset();
            } else {
                status.textContent = result.error || 'Failed to send message. Please try again.';
                status.style.color = '#ef4444';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            status.textContent = 'Network error. Please try again later.';
            status.style.color = '#ef4444';
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) AOS.init({ duration: 800, once: true });
    if (window.Typed) new Typed('.typing', { strings: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer'], typeSpeed: 70, backSpeed: 45, loop: true });

    initLanguage();
    initTheme();
    initContactForm();

    document.querySelectorAll('.lang-toggle').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));

    const PROFILE_SECRET = 'Ashu@3610';
    const profilePhotoInput = document.getElementById('profile-photo-input');
    const profilePhotoAction = document.getElementById('profile-photo-action');
    const profilePhoto = document.getElementById('profile-photo');
    const aboutPhoto = document.querySelector('.about-image img');

    function initProfilePhoto() {
        const saved = localStorage.getItem('profilePhotoDataUrl');
        if (saved) { if (profilePhoto) profilePhoto.src = saved; if (aboutPhoto) aboutPhoto.src = saved; }
    }

    function loadProfilePhoto(file) {
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            if (profilePhoto) profilePhoto.src = dataUrl;
            if (aboutPhoto) aboutPhoto.src = dataUrl;
            localStorage.setItem('profilePhotoDataUrl', dataUrl);
            alert('Profile photo updated successfully.');
        };
        reader.readAsDataURL(file);
    }

    if (profilePhotoAction && profilePhotoInput) {
        profilePhotoAction.addEventListener('click', () => {
            const entered = prompt('Enter secret key to change profile photo:');
            if (entered === PROFILE_SECRET) { profilePhotoInput.setAttribute('capture', 'environment'); profilePhotoInput.click(); }
            else if (entered !== null) alert('Secret key incorrect.');
        });
    }

    if (profilePhotoInput) profilePhotoInput.addEventListener('change', (e) => { const f = e.target.files[0]; if (f && f.type.startsWith('image/')) loadProfilePhoto(f); profilePhotoInput.value = ''; });

    const GALLERY_STORAGE_KEY = 'secretGalleryPhotos';
    const galleryBtn = document.getElementById('gallery-btn');
    const galleryPanel = document.getElementById('gallery-panel');
    const galleryClose = document.getElementById('gallery-close');
    const galleryAddBtn = document.getElementById('gallery-add-btn');
    const galleryClearBtn = document.getElementById('gallery-clear-btn');
    const galleryPhotoInput = document.getElementById('gallery-photo-input');
    const galleryThumbnails = document.getElementById('gallery-thumbnails');
    const galleryEmpty = document.getElementById('gallery-empty');

    function getGalleryPhotos() { const s = localStorage.getItem(GALLERY_STORAGE_KEY); return s ? JSON.parse(s) : []; }
    function saveGalleryPhotos(p) { localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(p)); }

    function renderGallery() {
        if (!galleryThumbnails || !galleryEmpty) return;
        const photos = getGalleryPhotos();
        galleryThumbnails.innerHTML = '';
        if (photos.length === 0) { galleryEmpty.classList.remove('hidden'); return; }
        galleryEmpty.classList.add('hidden');
        photos.forEach((photo, i) => {
            const card = document.createElement('div');
            card.className = 'gallery-photo-card';
            card.innerHTML = `<img src="${photo}" alt="Saved photo ${i+1}"><button class="gallery-delete-btn" data-index="${i}" aria-label="Delete photo"><i class="ri-delete-bin-2-line"></i></button>`;
            galleryThumbnails.appendChild(card);
        });
    }

    if (galleryBtn) galleryBtn.addEventListener('click', () => { const entered = prompt('Enter secret key to open gallery:'); if (entered === PROFILE_SECRET) openGalleryPanel(); else if (entered !== null) alert('Secret key incorrect.'); });
    function openGalleryPanel() { if (!galleryPanel) return; galleryPanel.classList.remove('hidden'); galleryPanel.setAttribute('aria-hidden', 'false'); renderGallery(); }
    function closeGalleryPanel() { if (!galleryPanel) return; galleryPanel.classList.add('hidden'); galleryPanel.setAttribute('aria-hidden', 'true'); }
    if (galleryClose) galleryClose.addEventListener('click', closeGalleryPanel);
    if (galleryAddBtn && galleryPhotoInput) galleryAddBtn.addEventListener('click', () => { galleryPhotoInput.setAttribute('capture', 'environment'); galleryPhotoInput.click(); });
    if (galleryClearBtn) galleryClearBtn.addEventListener('click', () => { if (!confirm('Clear all saved gallery photos?')) return; localStorage.removeItem(GALLERY_STORAGE_KEY); renderGallery(); });
    if (galleryPhotoInput) galleryPhotoInput.addEventListener('change', (e) => { const f = e.target.files[0]; if (f && f.type.startsWith('image/')) { const r = new FileReader(); r.onload = () => { const photos = getGalleryPhotos(); photos.unshift(r.result); saveGalleryPhotos(photos); renderGallery(); }; r.readAsDataURL(f); } galleryPhotoInput.value = ''; });
    if (galleryThumbnails) galleryThumbnails.addEventListener('click', (e) => { const btn = e.target.closest('.gallery-delete-btn'); if (!btn) return; const idx = Number(btn.dataset.index); const photos = getGalleryPhotos(); if (idx < 0 || idx >= photos.length) return; photos.splice(idx,1); saveGalleryPhotos(photos); renderGallery(); });

    // brightness
    function updateBrightness(v) { document.body.style.filter = `brightness(${v})`; localStorage.setItem('portfolioBrightness', v); }
    function initBrightness() { const stored = localStorage.getItem('portfolioBrightness'); const b = stored ? parseFloat(stored) : 1; const range = document.querySelector('.brightness-range'); if (range) { range.value = b; updateBrightness(b); } }
    const brightnessRange = document.querySelector('.brightness-range'); if (brightnessRange) brightnessRange.addEventListener('input', (e) => updateBrightness(e.target.value));
    document.querySelectorAll('.brightness-btn').forEach(btn => btn.addEventListener('click', () => { const range = document.querySelector('.brightness-range'); if (!range) return; let v = parseFloat(range.value); v = btn.dataset.action === 'increase' ? Math.min(1.3, v + 0.05) : Math.max(0.7, v - 0.05); range.value = v.toFixed(2); updateBrightness(v); }));
    initBrightness();

    // theme toggle
    const themeToggle = document.querySelector('.theme-toggle'); if (themeToggle) themeToggle.addEventListener('click', () => { document.body.classList.toggle('light-theme'); localStorage.setItem('portfolioTheme', document.body.classList.contains('light-theme') ? 'light' : 'dark'); updateThemeIcon(); });

    // projects
    const projectsContainer = document.querySelector('.projects-container');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addProjectModal = document.getElementById('add-project-modal');
    const addProjectClose = document.getElementById('add-project-close');
    const addProjectForm = document.getElementById('add-project-form');

    async function fetchProjects() {
        try { const res = await fetch('/api/projects'); if (res.ok) { const list = await res.json(); renderProjects(list); } }
        catch (err) { console.error('Failed to load projects', err); }
    }

    function renderProjects(list) {
        if (!projectsContainer) return;
        projectsContainer.innerHTML = '';
        if (!list || list.length === 0) { projectsContainer.innerHTML = '<p>No projects yet.</p>'; return; }
        list.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p><a class="project-link" href="${p.link}" target="_blank" rel="noreferrer">View Repository</a>`;
            projectsContainer.appendChild(card);
        });
    }

    if (addProjectBtn) addProjectBtn.addEventListener('click', () => { const entered = prompt('Enter secret key to add a project:'); if (entered === PROFILE_SECRET) { if (addProjectModal) { addProjectModal.classList.remove('hidden'); addProjectModal.setAttribute('aria-hidden','false'); } } else if (entered !== null) alert('Secret key incorrect.'); });
    if (addProjectClose) addProjectClose.addEventListener('click', () => { if (addProjectModal) { addProjectModal.classList.add('hidden'); addProjectModal.setAttribute('aria-hidden','true'); } });
    if (addProjectForm) addProjectForm.addEventListener('submit', async (e) => { e.preventDefault(); const fd = new FormData(addProjectForm); const payload = { title: fd.get('title').toString().trim(), description: fd.get('description').toString().trim(), link: fd.get('link').toString().trim() }; if (!payload.title || !payload.description || !payload.link) { alert('Please complete all fields'); return; } try { const res = await fetch('/api/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); if (!res.ok) throw new Error('Failed to add project'); await res.json(); alert('Project added'); addProjectForm.reset(); if (addProjectModal) { addProjectModal.classList.add('hidden'); addProjectModal.setAttribute('aria-hidden','true'); } fetchProjects(); } catch (err) { console.error(err); alert('Failed to add project'); } });

    fetchProjects();

    // update age display
    const ageEl = document.getElementById('age-value'); if (ageEl && ageEl.dataset.birthdate) ageEl.textContent = calculateAgeFromBirthdate(ageEl.dataset.birthdate);

});
