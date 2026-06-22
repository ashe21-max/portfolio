const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

const PROJECTS_FILE = path.join(__dirname, 'projects.json');

async function loadProjects() {
    try {
        const data = await fs.readFile(PROJECTS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return null;
    }
}

async function saveProjects(projects) {
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2), 'utf8');
}

// Ensure initial projects file exists with default projects
(async () => {
    const existing = await loadProjects();
    if (!existing) {
        const initial = [
            {
                "title": "Housing Allocation Portal",
                "description": "A university housing allocation portal built using PostgreSQL with Drizzle ORM and Tailwind CSS frontend.",
                "link": "https://github.com/ashe21-max/HousingAllocationPortal_UOG"
            },
            {
                "title": "File Uploading System",
                "description": "File management and storage system built with PHP backend and HTML/CSS frontend, focused on secure uploading and file handling.",
                "link": "https://github.com/ashe21-max/ONLINE-SHOPPING-"
            },
            {
                "title": "Online Shopping System",
                "description": "Java desktop application with MySQL database integration, demonstrating inventory management and purchase workflows.",
                "link": "https://github.com/ashe21-max/3rd-year-project"
            }
        ];
        await saveProjects(initial);
        console.log('Created initial projects.json');
    }
})();

app.post('/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Contact submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    return res.json({ status: 'success', message: 'Thank you for reaching out. I will contact you shortly.' });
});

// Projects API
app.get('/api/projects', async (req, res) => {
    const projects = await loadProjects();
    return res.json(projects || []);
});

app.post('/api/projects', async (req, res) => {
    const { title, description, link } = req.body;
    if (!title || !description || !link) return res.status(400).json({ error: 'Missing required fields' });
    const projects = (await loadProjects()) || [];
    const newProject = { title, description, link };
    projects.unshift(newProject);
    try {
        await saveProjects(projects);
        return res.status(201).json({ status: 'success', project: newProject });
    } catch (err) {
        console.error('Failed to save project', err);
        return res.status(500).json({ error: 'Failed to save project' });
    }
});

// Handle invalid JSON bodies gracefully (avoid crashing on parse errors)
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.warn('Invalid JSON received');
        return res.status(400).json({ error: 'Invalid JSON' });
    }
    next(err);
});

// Catch-all: if the request doesn't look like a static file, serve index.html (SPA)
app.get('*', (req, res, next) => {
    if (path.extname(req.path)) return next();
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Portfolio server running at http://localhost:${port}`);
});
