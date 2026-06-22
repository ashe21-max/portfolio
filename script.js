const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-education': 'Education',
        'nav-contact': 'Contact',
        'hero-intro': 'Hello, I\'m',
        'hero-copy': 'Experienced Computer Science student from University of Gondar with strong backend and frontend skills using PHP, Java, PostgreSQL, HTML/CSS, and Tailwind CSS.',
        'hero-download': 'Download CV',
        'hero-contact': 'Contact Me',
        'about-title': 'About Me',
        'about-copy': 'I am a Computer Science student at University of Gondar, building reliable backend systems with PHP, Java, PostgreSQL, and professional interfaces with HTML/CSS and Tailwind CSS.',
        'label-name': 'Name',
        'label-sex': 'Sex',
        'label-age': 'Age',
        'label-dob': 'Date of birth',
        'label-place': 'Place of birth',
        'label-current-address': 'Current address',
        'label-email': 'Email',
        'label-phone': 'Phone',
        'label-github': 'Github',
        'label-nationality': 'Nationality',
        'label-health': 'Health',
        'label-marital': 'Marital Status',
        'label-location': 'Location',
        'label-degree': 'Qualification',
        'label-status': 'Status',
        'card-projects': 'Projects',
        'card-role': 'Developer',
        'card-internship': 'Experience',
        'card-education': 'Student',
        'skills-title': 'Technical Skills',
        'projects-title': 'Projects',
        'project-housing': 'A university housing allocation portal built using PostgreSQL with Drizzle ORM and Tailwind CSS frontend.',
        'project-upload': 'File management and storage system built with PHP backend and HTML/CSS frontend, focused on secure uploading and file handling.',
        'project-shopping': 'Java desktop application with MySQL database integration, demonstrating inventory management and purchase workflows.',
        'details-title': 'CV Details',
        'achievement-title': 'Academic Achievement',
        'achievement-copy': 'Expected B.Sc. Degree in Computer Science from University of Gondar on June 28, 2026 G.C. with GPA 3.54. Internship in Adama Tseday Bank.',
        'volunteer-title': 'Volunteer Experience',
        'volunteer-1': 'Student union',
        'volunteer-2': 'Programming Club',
        'volunteer-3': 'Charity Club',
        'volunteer-4': 'Library Club',
        'volunteer-5': 'Mini Media Club',
        'security-title': 'Security Clearance',
        'security-copy': 'I confirm I have never been convicted of any crime, do not have any serious illness or physical disability, and am not involved in drug use or drug-related activities.',
        'hobbies-title': 'Hobbies & Interests',
        'hobbies-copy': 'I enjoy software development, reading the Holy Bible and educational technology materials, solving technical problems, practicing coding, and participating in voluntary community work.',
        'reference-title': 'Reference',
        'reference-copy': 'Student Bandaraw Woretaw, University of Gondar CS department representative.',
        'reference-contact': 'Mob: +251954568588 · Email: bandis1922@gmial.com',
        'education-title': 'Education',
        'education-university': 'BSc Degree in Computer Science',
        'education-place': 'University of Gondar',
        'education-details': 'Expected June 28, 2026 · GPA 3.54',
        'education-prep': 'Preparatory School',
        'education-high': 'High School',
        'contact-title': 'Contact Me',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'contact-location-title': 'Location',
        'form-name': 'Full Name',
        'form-email': 'Email Address',
        'form-phone': 'Phone',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message'
    },
    am: {
        'nav-home': 'ቤት',
        'nav-about': 'ስለእኔ',
        'nav-skills': 'ክህሎቶች',
        'nav-projects': 'ፕሮጀክቶች',
        'nav-education': 'ትምህርት',
        'nav-contact': 'አገናኝ',
        'hero-intro': 'ሰላም እኔ እኔ ነኝ',
        'hero-copy': 'ከጎንደር ዩኒቨርሲቲ የኮምፒተር ሳይንስ ተማሪ ሆኜ PHP, Java, PostgreSQL, HTML/CSS እና Tailwind CSS ጋር ታማኝ ስርዓት እገነባለሁ።',
        'hero-download': 'CV ያውርዱ',
        'hero-contact': 'አግኙኝ',
        'about-title': 'ስለእኔ',
        'about-copy': 'እኔ ከጎንደር ዩኒቨርሲቲ የኮምፒተር ሳይንስ ተማሪ ሆኜ PHP, Java, PostgreSQL እና HTML/CSS ጋር የታማኝ ድር ስርዓት እገነባለሁ።',
        'label-name': 'ስም',
        'label-sex': 'ፆታ',
        'label-age': 'እድሜ',
        'label-dob': 'የልደት ቀን',
        'label-place': 'የልደት ቦታ',
        'label-current-address': 'አሁን እየቀመጥሁበት የሚገኝ አድራሻ',
        'label-email': 'ኢሜይል',
        'label-phone': 'ስልክ',
        'label-github': 'GitHub',
        'label-nationality': 'ብሔር',
        'label-health': 'ጤና',
        'label-marital': 'የወለድነት ሁኔታ',
        'label-location': 'አድራሻ',
        'label-degree': 'ማረጋገጫ',
        'label-status': 'ሁኔታ',
        'card-projects': 'ፕሮጀክቶች',
        'card-role': 'አዋቂ',
        'card-internship': 'ተሞክሮ',
        'card-education': 'ተማሪ',
        'skills-title': 'ቴክኒካዊ ክህሎቶች',
        'projects-title': 'ፕሮጀክቶች',
        'project-housing': 'የዩኒቨርሲቲ የመኖሪያ ቦታ ፕሮጅክት በPostgreSQL እና Drizzle ORM ፣ Tailwind CSS ጋር የተዘጋጅቷል።',
        'project-upload': 'የፋይል አስገባት ስርዓት በPHP እና HTML/CSS ተከናወኗል፣ የፋይል አንቀሳቃሽና የቋት እንቅስቃሴ ይሰጣል።',
        'project-shopping': 'የJava ዴስክቶፕ መተግበሪያ ከMySQL ዳታበዝ ጋር የታሸገ እቃ ቁጥጥርና የግዢ ሂደት የሚያሳይ።',
        'details-title': 'የCV ዝርዝሮች',
        'achievement-title': 'የትምህርት ውጤቶች',
        'achievement-copy': 'ከጎንደር ዩኒቨርሲቲ እ.ኤ.አ. 28 ጁን 2026 ዓ.ም. የኮምፒተር ሳይንስ ዲግሪን በGPA 3.54 የምምጣለሁ። በአዳማ ፀዳይ ባንክ ኢንተርንሺፕ አገኘሁ።',
        'volunteer-title': 'የበኩላት ልምድ',
        'volunteer-1': 'የተማሪዎች ሕብረት',
        'volunteer-2': 'የፕሮግራሚንግ ክለብ',
        'volunteer-3': 'የተስፋ ክለብ',
        'volunteer-4': 'የቤተ መጻህፍት ክለብ',
        'volunteer-5': 'የሚኒ ሚዲያ ክለብ',
        'security-title': 'የደህንነት ንግግር',
        'security-copy': 'በማንኛውም ወቅት ታላቅ ወንጀል አልተወሰደኝም፣ ጉዳተኛ ሕመም ወይም ከእጅግ እጅግ ከሆነ እጅግ የተፈረጀ ጤና አልኖረኝም፣ እና ከከብት መጠጥ ወይም የከብት ተግባር ጋር አልተዳለሁም።',
        'hobbies-title': 'ስምና ፍላጎቶች',
        'hobbies-copy': 'ሶፍትዌር ለማቅረብ እና የብስክሌት ቅርጸ ትንታኔ የማደርግ ማብራሪያ እትገባለሁ። ሐዲስ የማንበብ እና የምርምር ጽሁፍ እውቀትን እወዳለሁ።',
        'reference-title': 'ምንጭ',
        'reference-copy': 'የተማሪ ባንዳራው ወረታው፣ የጎንደር ዩኒቨርሲቲ የCS ክፍል ተወካይ።',
        'reference-contact': 'ሞባይል: +251954568588 · ኢሜይል: bandis1922@gmial.com',
        'education-title': 'ትምህርት',
        'education-university': 'በኮምፒተር ሳይንስ ዲግሪ',
        'education-place': 'ዩኒቨርሲቲ ኦፍ ጎንደር',
        'education-details': 'ተፈጻሚ ነገ 28, 2026 · GPA 3.54',
        'education-prep': 'የዕድገት ትምህርት',
        'education-high': 'ከፍተኛ ደረጃ ትምህርት',
        'contact-title': 'አገናኝ',
        'contact-email-title': 'ኢሜይል',
        'contact-phone-title': 'ስልክ',
        'contact-location-title': 'አድራሻ',
        'form-name': 'ሙሉ ስም',
        'form-email': 'ኢሜይል አድራሻ',
        'form-phone': 'ስልክ',
        'form-subject': 'ርዕስ',
        'form-message': 'መልእክት',
        'form-submit': 'መልእክት ላክ'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-toggle').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
    localStorage.setItem('portfolioLanguage', lang);
}

function initLanguage() {
    const saved = localStorage.getItem('portfolioLanguage') || 'en';
    setLanguage(saved);
}

function updateThemeIcon() {
    const icon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('light-theme')) {
        icon.className = 'ri-sun-line';
    } else {
        icon.className = 'ri-moon-line';
    }
}

function initTheme() {
    const stored = localStorage.getItem('portfolioTheme');
    if (stored === 'light') {
        document.body.classList.add('light-theme');
    }
    updateThemeIcon();
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

<<<<<<< HEAD
    if (!form || !status) return;

    form.addEventListener('submit', async (event) => {
=======
    form.addEventListener('submit', (event) => {
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
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

<<<<<<< HEAD
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
=======
        const mailto = `mailto:ashenafih774@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0A${formData.message}`)}`;
        window.location.href = mailto;
        status.textContent = 'Opening email client so you can send your message directly.';
        form.reset();
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
    });
}

window.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    new Typed('.typing', {
        strings: ['Full Stack Developer', 'Computer Science Graduate', 'Backend Developer', 'Frontend Developer'],
        typeSpeed: 70,
        backSpeed: 45,
        loop: true
    });

    initLanguage();
    initTheme();
    initContactForm();

    document.querySelectorAll('.lang-toggle').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    const PROFILE_SECRET = 'Ashu@3610';
    const profilePhotoInput = document.getElementById('profile-photo-input');
    const profilePhotoAction = document.getElementById('profile-photo-action');
    const profilePhoto = document.getElementById('profile-photo');
    const aboutPhoto = document.querySelector('.about-image img');
    const galleryBtn = document.getElementById('gallery-btn');
    const galleryPanel = document.getElementById('gallery-panel');
    const galleryClose = document.getElementById('gallery-close');
    const galleryAddBtn = document.getElementById('gallery-add-btn');
    const galleryClearBtn = document.getElementById('gallery-clear-btn');
    const galleryPhotoInput = document.getElementById('gallery-photo-input');
    const galleryThumbnails = document.getElementById('gallery-thumbnails');
    const galleryEmpty = document.getElementById('gallery-empty');
    const GALLERY_STORAGE_KEY = 'secretGalleryPhotos';
<<<<<<< HEAD

    if (!profilePhotoInput || !profilePhotoAction || !profilePhoto) {
        console.error('Profile photo elements not found');
    }

    if (!galleryBtn || !galleryPanel || !galleryClose || !galleryAddBtn || !galleryClearBtn || !galleryPhotoInput || !galleryThumbnails || !galleryEmpty) {
        console.error('Gallery elements not found');
    }
=======
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
    
    function calculateAgeFromBirthdate(birthdate) {
        const [year, month, day] = birthdate.split('-').map(Number);
        const today = new Date();
        let age = today.getFullYear() - year;
        const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
        if (today < birthdayThisYear) {
            age -= 1;
        }
        return age;
    }

    function updateAgeValue() {
        const ageElement = document.getElementById('age-value');
        if (!ageElement) return;
        const birthdate = ageElement.dataset.birthdate;
        if (!birthdate) return;
        ageElement.textContent = calculateAgeFromBirthdate(birthdate);
    }

<<<<<<< HEAD
=======
    updateAgeValue();
    initProfilePhoto();

>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
    function initProfilePhoto() {
        const savedPhoto = localStorage.getItem('profilePhotoDataUrl');
        if (savedPhoto) {
            profilePhoto.src = savedPhoto;
            if (aboutPhoto) aboutPhoto.src = savedPhoto;
        }
    }

<<<<<<< HEAD
    updateAgeValue();
    initProfilePhoto();

    if (profilePhotoAction && profilePhotoInput) {
        profilePhotoAction.addEventListener('click', () => {
            const entered = window.prompt('Enter secret key to change profile photo:');
            if (entered === PROFILE_SECRET) {
                profilePhotoInput.setAttribute('capture', 'environment');
                profilePhotoInput.click();
            } else if (entered !== null) {
                window.alert('Secret key incorrect.');
            }
        });
    }
=======
    profilePhotoAction.addEventListener('click', () => {
        const entered = window.prompt('Enter secret key to change profile photo:');
        if (entered === PROFILE_SECRET) {
            profilePhotoInput.setAttribute('capture', 'environment');
            profilePhotoInput.click();
        } else if (entered !== null) {
            window.alert('Secret key incorrect.');
        }
    });
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897

    function loadProfilePhoto(file) {
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
<<<<<<< HEAD
            if (profilePhoto) profilePhoto.src = dataUrl;
=======
            profilePhoto.src = dataUrl;
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
            if (aboutPhoto) aboutPhoto.src = dataUrl;
            localStorage.setItem('profilePhotoDataUrl', dataUrl);
            window.alert('Profile photo updated successfully.');
        };
        reader.readAsDataURL(file);
    }

<<<<<<< HEAD
    if (profilePhotoInput) {
        profilePhotoInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                loadProfilePhoto(file);
            }
            profilePhotoInput.value = '';
        });
    }

    if (galleryBtn) {
        galleryBtn.addEventListener('click', () => {
            const entered = window.prompt('Enter secret key to open gallery:');
            if (entered === PROFILE_SECRET) {
                openGalleryPanel();
            } else if (entered !== null) {
                window.alert('Secret key incorrect.');
            }
        });
    }

    if (galleryClose) galleryClose.addEventListener('click', closeGalleryPanel);
    if (galleryAddBtn) {
        galleryAddBtn.addEventListener('click', () => {
            if (galleryPhotoInput) {
                galleryPhotoInput.setAttribute('capture', 'environment');
                galleryPhotoInput.click();
            }
        });
    }

    if (galleryClearBtn) {
        galleryClearBtn.addEventListener('click', () => {
            if (!window.confirm('Clear all saved gallery photos?')) return;
            localStorage.removeItem(GALLERY_STORAGE_KEY);
            renderGallery();
        });
    }

    if (galleryPhotoInput) {
        galleryPhotoInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    const photos = getGalleryPhotos();
                    photos.unshift(reader.result);
                    saveGalleryPhotos(photos);
                    renderGallery();
                };
                reader.readAsDataURL(file);
            }
            galleryPhotoInput.value = '';
        });
    }

    if (galleryThumbnails) {
        galleryThumbnails.addEventListener('click', (event) => {
            const deleteButton = event.target.closest('.gallery-delete-btn');
            if (!deleteButton) return;
            const index = Number(deleteButton.dataset.index);
            deleteGalleryPhoto(index);
        });
    }
=======
    profilePhotoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            loadProfilePhoto(file);
        }
        profilePhotoInput.value = '';
    });

    galleryBtn.addEventListener('click', () => {
        const entered = window.prompt('Enter secret key to open gallery:');
        if (entered === PROFILE_SECRET) {
            openGalleryPanel();
        } else if (entered !== null) {
            window.alert('Secret key incorrect.');
        }
    });

    galleryClose.addEventListener('click', closeGalleryPanel);
    galleryAddBtn.addEventListener('click', () => {
        galleryPhotoInput.setAttribute('capture', 'environment');
        galleryPhotoInput.click();
    });

    galleryClearBtn.addEventListener('click', () => {
        if (!window.confirm('Clear all saved gallery photos?')) return;
        localStorage.removeItem(GALLERY_STORAGE_KEY);
        renderGallery();
    });

    galleryPhotoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                const photos = getGalleryPhotos();
                photos.unshift(reader.result);
                saveGalleryPhotos(photos);
                renderGallery();
            };
            reader.readAsDataURL(file);
        }
        galleryPhotoInput.value = '';
    });

    galleryThumbnails.addEventListener('click', (event) => {
        const deleteButton = event.target.closest('.gallery-delete-btn');
        if (!deleteButton) return;
        const index = Number(deleteButton.dataset.index);
        deleteGalleryPhoto(index);
    });
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897

    function getGalleryPhotos() {
        const stored = localStorage.getItem(GALLERY_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    function saveGalleryPhotos(photos) {
        localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(photos));
    }

    function renderGallery() {
<<<<<<< HEAD
        if (!galleryThumbnails || !galleryEmpty) return;
=======
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
        const photos = getGalleryPhotos();
        galleryThumbnails.innerHTML = '';
        if (photos.length === 0) {
            galleryEmpty.classList.remove('hidden');
            return;
        }
        galleryEmpty.classList.add('hidden');
        photos.forEach((photo, index) => {
            const card = document.createElement('div');
            card.className = 'gallery-photo-card';
            card.innerHTML = `
                <img src="${photo}" alt="Saved photo ${index + 1}">
                <button class="gallery-delete-btn" data-index="${index}" aria-label="Delete photo">
                    <i class="ri-delete-bin-2-line"></i>
                </button>
            `;
            galleryThumbnails.appendChild(card);
        });
    }

    function openGalleryPanel() {
<<<<<<< HEAD
        if (!galleryPanel) return;
=======
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
        galleryPanel.classList.remove('hidden');
        galleryPanel.setAttribute('aria-hidden', 'false');
        renderGallery();
    }

    function closeGalleryPanel() {
<<<<<<< HEAD
        if (!galleryPanel) return;
=======
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
        galleryPanel.classList.add('hidden');
        galleryPanel.setAttribute('aria-hidden', 'true');
    }

    function deleteGalleryPhoto(index) {
        const photos = getGalleryPhotos();
        if (index < 0 || index >= photos.length) return;
        photos.splice(index, 1);
        saveGalleryPhotos(photos);
        renderGallery();
    }

    const computerBadge = document.getElementById('computer-badge');
    const badgeSplash = document.getElementById('badge-splash');

    if (computerBadge && badgeSplash) {
        computerBadge.addEventListener('click', () => {
            const isActive = computerBadge.classList.toggle('active');
            if (isActive) {
                badgeSplash.classList.remove('hidden');
                setTimeout(() => badgeSplash.classList.add('visible'), 20);
            } else {
                badgeSplash.classList.remove('visible');
                setTimeout(() => badgeSplash.classList.add('hidden'), 270);
            }
        });
    }

    function updateBrightness(value) {
        document.body.style.filter = `brightness(${value})`;
        localStorage.setItem('portfolioBrightness', value);
    }

    function initBrightness() {
        const stored = localStorage.getItem('portfolioBrightness');
        const brightness = stored ? parseFloat(stored) : 1;
        const range = document.querySelector('.brightness-range');
        if (range) {
            range.value = brightness;
            updateBrightness(brightness);
        }
    }

<<<<<<< HEAD
    const brightnessRange = document.querySelector('.brightness-range');
    if (brightnessRange) {
        brightnessRange.addEventListener('input', (event) => {
            updateBrightness(event.target.value);
        });
    }
=======
    document.querySelector('.brightness-range').addEventListener('input', (event) => {
        updateBrightness(event.target.value);
    });
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897

    document.querySelectorAll('.brightness-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const range = document.querySelector('.brightness-range');
<<<<<<< HEAD
            if (!range) return;
=======
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
            let value = parseFloat(range.value);
            value = button.dataset.action === 'increase' ? Math.min(1.3, value + 0.05) : Math.max(0.7, value - 0.05);
            range.value = value.toFixed(2);
            updateBrightness(value);
        });
    });

    initBrightness();

<<<<<<< HEAD
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            localStorage.setItem('portfolioTheme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
            updateThemeIcon();
        });
    }

    // Projects: fetch, render, and add-new-project UI
    const projectsContainer = document.querySelector('.projects-container');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addProjectModal = document.getElementById('add-project-modal');
    const addProjectClose = document.getElementById('add-project-close');
    const addProjectForm = document.getElementById('add-project-form');

    async function fetchProjects() {
        try {
            const res = await fetch('/api/projects');
            const list = await res.json();
            renderProjects(list);
        } catch (err) {
            console.error('Failed to load projects', err);
        }
    }

    function renderProjects(list) {
        if (!projectsContainer) return;
        projectsContainer.innerHTML = '';
        if (!list || list.length === 0) {
            projectsContainer.innerHTML = '<p>No projects yet.</p>';
            return;
        }
        list.forEach((p) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <a class="project-link" href="${p.link}" target="_blank" rel="noreferrer">View Repository</a>
            `;
            projectsContainer.appendChild(card);
        });
    }

    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', () => {
            const entered = window.prompt('Enter secret key to add a project:');
            if (entered === PROFILE_SECRET) {
                if (addProjectModal) {
                    addProjectModal.classList.remove('hidden');
                    addProjectModal.setAttribute('aria-hidden', 'false');
                }
            } else if (entered !== null) {
                window.alert('Secret key incorrect.');
            }
        });
    }

    if (addProjectClose) addProjectClose.addEventListener('click', () => {
        if (addProjectModal) {
            addProjectModal.classList.add('hidden');
            addProjectModal.setAttribute('aria-hidden', 'true');
        }
    });

    if (addProjectForm) {
        addProjectForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const fd = new FormData(addProjectForm);
            const payload = {
                title: fd.get('title').toString().trim(),
                description: fd.get('description').toString().trim(),
                link: fd.get('link').toString().trim()
            };
            if (!payload.title || !payload.description || !payload.link) {
                window.alert('Please complete all fields');
                return;
            }
            try {
                const res = await fetch('/api/projects', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error('Failed to add project');
                const json = await res.json();
                window.alert('Project added');
                addProjectForm.reset();
                if (addProjectModal) {
                    addProjectModal.classList.add('hidden');
                    addProjectModal.setAttribute('aria-hidden', 'true');
                }
                fetchProjects();
            } catch (err) {
                console.error(err);
                window.alert('Failed to add project');
            }
        });
    }

    // initial load
    fetchProjects();
=======
    document.querySelector('.theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('portfolioTheme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        updateThemeIcon();
    });
>>>>>>> 91678e13a772ac58d0ac572432dd0a285e357897
});
