// ============================================
// CryptoClass – Application Logic
// ============================================

(function () {
  'use strict';

  // ---- State ----
  let currentClassId = null;
  let completedClasses = new Set();
  let sidebarOpen = false;

  // Load saved progress
  try {
    const saved = localStorage.getItem('cryptoclass_progress');
    if (saved) completedClasses = new Set(JSON.parse(saved));
  } catch (e) { /* ignore */ }

  // ---- DOM Elements ----
  const sidebar = document.getElementById('sidebar');
  const sidebarNav = document.getElementById('sidebarNav');
  const menuBtn = document.getElementById('menuBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const welcomeScreen = document.getElementById('welcomeScreen');
  const classContent = document.getElementById('classContent');
  const classHeader = document.getElementById('classHeader');
  const classTopics = document.getElementById('classTopics');
  const classNav = document.getElementById('classNav');
  const breadcrumb = document.getElementById('breadcrumb');
  const progressFill = document.getElementById('progressFill');
  const progressPercent = document.getElementById('progressPercent');
  const startBtn = document.getElementById('startBtn');
  const themeBtn = document.getElementById('themeBtn');

  // ---- Build Sidebar Navigation ----
  function buildSidebar() {
    let html = '';
    const totalClasses = getTotalClasses();

    COURSE_DATA.forEach((week, wi) => {
      html += `<div class="nav-week" data-week="${week.week}">`;
      html += `<div class="nav-week-header" onclick="toggleWeek(${week.week})">
        <span class="week-dot" style="background:${week.weekColor}"></span>
        <span>Week ${week.week} – ${week.weekTitle.split('–')[0].trim()}</span>
        <span class="chevron">▼</span>
      </div>`;
      html += `<div class="nav-classes">`;

      week.classes.forEach(cls => {
        const isActive = cls.id === currentClassId;
        const isCompleted = completedClasses.has(cls.id);
        html += `<div class="nav-class-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                      data-class-id="${cls.id}" onclick="navigateToClass(${cls.id})">
          <span class="class-icon">${cls.icon}</span>
          <span class="class-title">Class ${cls.id}: ${cls.title}</span>
          <span class="check-mark">✓</span>
        </div>`;
      });

      html += `</div></div>`;
    });

    // Bonus section
    html += `<div class="nav-week" data-week="bonus">`;
    html += `<div class="nav-week-header" onclick="toggleWeek('bonus')">
      <span class="week-dot" style="background:#627eea"></span>
      <span>Bonus Sessions</span>
      <span class="chevron">▼</span>
    </div>`;
    html += `<div class="nav-classes">`;
    html += `<div class="nav-class-item ${currentClassId === 'bonus' ? 'active' : ''}" 
                  data-class-id="bonus" onclick="navigateToClass('bonus')">
        <span class="class-icon">⭐</span>
        <span class="class-title">Bonus: Q&A & Practice</span>
        <span class="check-mark">✓</span>
      </div>`;
    html += `</div></div>`;

    sidebarNav.innerHTML = html;
  }

  // ---- Toggle Week Collapse ----
  window.toggleWeek = function (week) {
    const weekEl = document.querySelector(`.nav-week[data-week="${week}"]`);
    if (weekEl) weekEl.classList.toggle('collapsed');
  };

  // ---- Navigate to Class ----
  window.navigateToClass = function (classId) {
    if (classId === 'bonus') {
      showBonusContent();
    } else {
      showClassContent(classId);
    }
    closeSidebar();
  };

  // ---- Show Class Content ----
  function showClassContent(classId) {
    const cls = findClass(classId);
    if (!cls) return;

    currentClassId = classId;
    const week = findWeekForClass(classId);

    // Update breadcrumb
    breadcrumb.innerHTML = `
      <span class="breadcrumb-week">Week ${week.week}</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-class">Class ${cls.id}: ${cls.title}</span>
    `;

    // Build header
    classHeader.innerHTML = `
      <div class="class-badge">${cls.icon} CLASS ${cls.id} • WEEK ${week.week}</div>
      <h2>${cls.title}</h2>
      <p class="class-desc">${cls.description}</p>
    `;

    // Build topics
    let topicsHtml = '';
    cls.topics.forEach((topic, idx) => {
      topicsHtml += `
        <div class="topic-card ${idx === 0 ? 'expanded' : ''}" style="animation-delay: ${idx * 0.1}s" data-topic="${idx}">
          <div class="topic-header" onclick="toggleTopic(this)">
            <div class="topic-number">${idx + 1}</div>
            <div class="topic-title">${topic.title}</div>
            <div class="topic-toggle">▼</div>
          </div>
          <div class="topic-body">
            <div class="topic-content">
              ${topic.content}
            </div>
          </div>
        </div>
      `;
    });
    classTopics.innerHTML = topicsHtml;

    // Build navigation
    const allClasses = getAllClasses();
    const currentIdx = allClasses.findIndex(c => c.id === classId);
    const prevClass = currentIdx > 0 ? allClasses[currentIdx - 1] : null;
    const nextClass = currentIdx < allClasses.length - 1 ? allClasses[currentIdx + 1] : null;

    classNav.innerHTML = `
      <button class="nav-btn" ${prevClass ? `onclick="navigateToClass(${prevClass.id})"` : 'disabled'}>
        ← ${prevClass ? `Class ${prevClass.id}` : 'Start'}
      </button>
      <button class="nav-btn primary" onclick="markComplete(${classId}); ${nextClass ? `navigateToClass(${nextClass.id})` : `navigateToClass('bonus')`}">
        ${nextClass ? `Next: Class ${nextClass.id}` : 'Bonus'} →
      </button>
    `;

    // Show content, hide welcome
    welcomeScreen.style.display = 'none';
    classContent.style.display = 'block';

    // Mark as complete
    markComplete(classId);

    // Update sidebar
    buildSidebar();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Show Bonus Content ----
  function showBonusContent() {
    currentClassId = 'bonus';

    breadcrumb.innerHTML = `
      <span class="breadcrumb-week">Bonus</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-class">Q&A, Review & Practice</span>
    `;

    classHeader.innerHTML = `
      <div class="class-badge">⭐ BONUS SESSIONS</div>
      <h2>${BONUS_DATA.title}</h2>
      <p class="class-desc">${BONUS_DATA.description}</p>
    `;

    let topicsHtml = '';
    BONUS_DATA.topics.forEach((topic, idx) => {
      topicsHtml += `
        <div class="topic-card ${idx === 0 ? 'expanded' : ''}" style="animation-delay: ${idx * 0.1}s">
          <div class="topic-header" onclick="toggleTopic(this)">
            <div class="topic-number" style="background: var(--gradient-secondary);">${idx + 1}</div>
            <div class="topic-title">${topic.title}</div>
            <div class="topic-toggle">▼</div>
          </div>
          <div class="topic-body">
            <div class="topic-content">
              ${topic.content}
            </div>
          </div>
        </div>
      `;
    });
    classTopics.innerHTML = topicsHtml;

    classNav.innerHTML = `
      <button class="nav-btn" onclick="navigateToClass(16)">
        ← Class 16
      </button>
      <button class="nav-btn primary" onclick="showWelcome()">
        🏠 Back to Home
      </button>
    `;

    welcomeScreen.style.display = 'none';
    classContent.style.display = 'block';
    buildSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Show Welcome Screen ----
  window.showWelcome = function () {
    currentClassId = null;
    welcomeScreen.style.display = 'block';
    classContent.style.display = 'none';
    breadcrumb.innerHTML = `
      <span class="breadcrumb-week">Home</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-class">Welcome</span>
    `;
    buildSidebar();
  };

  // ---- Toggle Topic Expand/Collapse ----
  window.toggleTopic = function (header) {
    const card = header.closest('.topic-card');
    card.classList.toggle('expanded');
  };

  // ---- Mark Class as Complete ----
  function markComplete(classId) {
    completedClasses.add(classId);
    try {
      localStorage.setItem('cryptoclass_progress', JSON.stringify([...completedClasses]));
    } catch (e) { /* ignore */ }
    updateProgress();
  }

  // ---- Update Progress Bar ----
  function updateProgress() {
    const total = getTotalClasses();
    const completed = completedClasses.size;
    const percent = Math.round((completed / total) * 100);
    progressFill.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
  }

  // ---- Helper Functions ----
  function findClass(id) {
    for (const week of COURSE_DATA) {
      for (const cls of week.classes) {
        if (cls.id === id) return cls;
      }
    }
    return null;
  }

  function findWeekForClass(id) {
    for (const week of COURSE_DATA) {
      for (const cls of week.classes) {
        if (cls.id === id) return week;
      }
    }
    return null;
  }

  function getAllClasses() {
    const all = [];
    COURSE_DATA.forEach(week => week.classes.forEach(cls => all.push(cls)));
    return all;
  }

  function getTotalClasses() {
    let count = 0;
    COURSE_DATA.forEach(week => count += week.classes.length);
    return count;
  }

  // ---- Mobile Sidebar ----
  function openSidebar() {
    sidebar.classList.add('open');
    mobileOverlay.classList.add('active');
    mobileOverlay.style.display = 'block';
    sidebarOpen = true;
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    mobileOverlay.classList.remove('active');
    setTimeout(() => {
      if (!sidebarOpen) mobileOverlay.style.display = 'none';
    }, 300);
    sidebarOpen = false;
  }

  menuBtn.addEventListener('click', () => {
    if (sidebarOpen) closeSidebar();
    else openSidebar();
  });

  mobileOverlay.addEventListener('click', closeSidebar);

  // ---- Theme Toggle ----
  let isDark = true;
  try {
    const savedTheme = localStorage.getItem('cryptoclass_theme');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      isDark = false;
    }
  } catch (e) { /* ignore */ }

  themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('cryptoclass_theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('cryptoclass_theme', 'light');
    }
  });

  // ---- Start Button ----
  startBtn.addEventListener('click', () => {
    navigateToClass(1);
  });

  // ---- Week Preview Cards ----
  document.querySelectorAll('.week-preview').forEach(card => {
    card.addEventListener('click', () => {
      const weekType = card.dataset.week;
      const weekMap = { beginner: 1, intermediate: 5, advanced: 9, pro: 13 };
      const classId = weekMap[weekType];
      if (classId) navigateToClass(classId);
    });
  });

  // ---- Initialize ----
  buildSidebar();
  updateProgress();

  // ---- Lightbox for Chart Images ----
  document.addEventListener('click', function (e) {
    const wrapper = e.target.closest('.chart-image-wrapper');
    if (wrapper) {
      const img = wrapper.querySelector('img');
      if (!img) return;
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close">✕</button>
        <img src="${img.src}" alt="${img.alt || 'Chart'}">
      `;
      document.body.appendChild(overlay);
      overlay.addEventListener('click', function (ev) {
        if (ev.target === overlay || ev.target.classList.contains('lightbox-close')) {
          overlay.remove();
        }
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const lb = document.querySelector('.lightbox-overlay');
      if (lb) lb.remove();
    }
  });

})();
