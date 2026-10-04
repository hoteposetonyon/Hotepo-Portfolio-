// Hotepo Portfolio - Main Script
// Edit the JSON files in the /content folder to update the site.

document.addEventListener('DOMContentLoaded', async () => {
  // Set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking a link
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // Helper to fetch JSON
  async function loadJSON(path) {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to load ${path}`);
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // ========== ABOUT / HERO ==========
  const about = await loadJSON('content/about.json');
  if (about) {
    document.getElementById('heroName').textContent = about.name || 'Hotepo';
    document.getElementById('tagline').textContent = about.tagline || '';
    document.getElementById('heroBio').textContent = about.bio || '';
    document.getElementById('aboutText').textContent = about.bio || '';
    document.getElementById('location').textContent = about.location ? `📍 ${about.location}` : '';
    document.getElementById('email').innerHTML = about.email ? `✉️ <a href="mailto:${about.email}" class="text-primary hover:underline">${about.email}</a>` : '';
    
    const pic = document.getElementById('profilePic');
    if (about.profileImage) {
      pic.src = about.profileImage;
    }
  }

  // ========== SOCIALS ==========
  const socials = await loadJSON('content/socials.json');
  const socialContainer = document.getElementById('socialLinks');
  if (socials && socialContainer) {
    const icons = {
      twitter: '𝕏',
      linkedin: 'in',
      github: 'GH',
      instagram: 'IG',
      youtube: 'YT',
      tiktok: 'TT',
      website: '🌐'
    };
    Object.entries(socials).forEach(([key, url]) => {
      if (url && url.trim() !== '') {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'px-4 py-2 bg-card border border-slate-700 rounded-lg text-sm hover:border-primary hover:text-primary transition';
        a.textContent = icons[key] || key;
        socialContainer.appendChild(a);
      }
    });
  }

  // ========== EDUCATION ==========
  const education = await loadJSON('content/education.json');
  const eduList = document.getElementById('educationList');
  if (education && eduList) {
    education.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3 class="text-xl font-semibold text-white">${item.school}</h3>
          <span class="text-primary text-sm">${item.year}</span>
        </div>
        <p class="text-slate-300 font-medium mb-2">${item.degree}</p>
        <p class="text-slate-400 text-sm">${item.description || ''}</p>
      `;
      eduList.appendChild(div);
    });
  }

  // ========== SKILLS ==========
  const skills = await loadJSON('content/skills.json');
  const skillsContainer = document.getElementById('skillsContainer');
  if (skills && skillsContainer) {
    Object.entries(skills).forEach(([category, list]) => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800';
      div.innerHTML = `
        <h3 class="text-lg font-semibold text-primary capitalize mb-4">${category}</h3>
        <div class="flex flex-wrap gap-2">
          ${list.map(skill => `<span class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">${skill}</span>`).join('')}
        </div>
      `;
      skillsContainer.appendChild(div);
    });
  }

  // ========== EXPERIENCE ==========
  const experience = await loadJSON('content/experience.json');
  const expList = document.getElementById('experienceList');
  if (experience && expList) {
    experience.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3 class="text-xl font-semibold text-white">${item.role}</h3>
          <span class="text-primary text-sm">${item.period}</span>
        </div>
        <p class="text-slate-300 font-medium mb-2">${item.company}</p>
        <p class="text-slate-400 text-sm">${item.description || ''}</p>
      `;
      expList.appendChild(div);
    });
  }

  // ========== CURRENT JOBS ==========
  const jobs = await loadJSON('content/jobs.json');
  const jobsList = document.getElementById('jobsList');
  if (jobs && jobsList) {
    jobs.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3 class="text-xl font-semibold text-white">${item.title}</h3>
          <span class="text-primary text-sm">${item.period}</span>
        </div>
        <p class="text-slate-300 font-medium mb-2">${item.company}</p>
        <p class="text-slate-400 text-sm">${item.description || ''}</p>
      `;
      jobsList.appendChild(div);
    });
  }

  // ========== PROJECTS ==========
  const projects = await loadJSON('content/projects.json');
  const projectsList = document.getElementById('projectsList');
  if (projects && projectsList) {
    projects.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex items-start justify-between mb-3">
          <h3 class="text-xl font-semibold text-white">${item.title}</h3>
          <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">${item.type}</span>
        </div>
        <p class="text-slate-400 text-sm mb-4">${item.description || ''}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${(item.tags || []).map(tag => `<span class="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">${tag}</span>`).join('')}
        </div>
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="text-primary text-sm hover:underline">View Project →</a>` : ''}
      `;
      projectsList.appendChild(div);
    });
  }

  // ========== STORIES ==========
  const stories = await loadJSON('content/stories.json');
  const storiesList = document.getElementById('storiesList');
  if (stories && storiesList) {
    stories.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-semibold text-white">${item.title}</h3>
          <span class="text-slate-500 text-sm">${item.date || ''}</span>
        </div>
        <p class="text-slate-400 text-sm mb-3">${item.excerpt || ''}</p>
        <div class="text-slate-300 text-sm leading-relaxed whitespace-pre-line">${item.content || ''}</div>
      `;
      storiesList.appendChild(div);
    });
  }

  // ========== ARTICLES ==========
  const articles = await loadJSON('content/articles.json');
  const articlesList = document.getElementById('articlesList');
  if (articles && articlesList) {
    articles.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-semibold text-white">${item.title}</h3>
          <span class="text-slate-500 text-sm">${item.date || ''}</span>
        </div>
        <p class="text-slate-400 text-sm mb-3">${item.excerpt || ''}</p>
        ${item.content ? `<div class="text-slate-300 text-sm leading-relaxed mb-3">${item.content}</div>` : ''}
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="text-primary text-sm hover:underline">Read full article →</a>` : ''}
      `;
      articlesList.appendChild(div);
    });
  }

  // ========== POEMS ==========
  const poems = await loadJSON('content/poems.json');
  const poemsList = document.getElementById('poemsList');
  if (poems && poemsList) {
    poems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'bg-card rounded-xl p-6 border border-slate-800 card-hover';
      div.innerHTML = `
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-white">${item.title}</h3>
          <span class="text-slate-500 text-sm">${item.date || ''}</span>
        </div>
        <div class="poem-content text-slate-300">${item.content || ''}</div>
      `;
      poemsList.appendChild(div);
    });
  }
});
