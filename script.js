// ═══════════════════════════════════════════
// UI & PREFERENCES
// ═══════════════════════════════════════════
function toggleDarkMode(checkbox) {
  if (checkbox.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent scroll when menu is open
  } else {
    menu.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function toggleDropdown(id) {
  if (event) event.stopPropagation();
  const el = document.getElementById(id);
  const isHidden = el.classList.contains("hidden");
  document
    .querySelectorAll(".dropdown-menu")
    .forEach((d) => d.classList.add("hidden"));
  if (isHidden) el.classList.remove("hidden");
}

// Close dropdowns on outside click
document.addEventListener("click", () => {
  document
    .querySelectorAll(".dropdown-menu")
    .forEach((d) => d.classList.add("hidden"));
});

// ═══════════════════════════════════════════
// STUDENT ROSTER
// ═══════════════════════════════════════════
const STUDENTS = [
  { id: "SIT24SC017", name: "Aadhithya VS" },
  { id: "SIT24SC026", name: "Aashir Prajan A" },
  { id: "SIT24SC021", name: "Akilan K" },
  { id: "SIT24SC060", name: "Al Amaan H" },
  { id: "SIT24SC013", name: "Alamu Sridevi H" },
  { id: "SIT24SC051", name: "Anikasri B" },
  { id: "SIT24SC019", name: "Arshini Supritha S" },
  { id: "SIT24SC057", name: "Ashwin Perumal S R" },
  { id: "SIT24SC033", name: "Balavanitha R" },
  { id: "SIT24SC045", name: "Bharanidharan S" },
  { id: "SIT24SC047", name: "Bharath Kumar K" },
  { id: "SIT24SC006", name: "Deepanraj P" },
  { id: "SIT24SC043", name: "Devashri S" },
  { id: "SIT24SC003", name: "Devitha R" },
  { id: "SIT24SC032", name: "Dharani Sree M" },
  { id: "SIT24SC039", name: "Dhivyashri S" },
  { id: "SIT24SC014", name: "Hari Kumar E" },
  { id: "SIT24SC010", name: "Haswinth S" },
  { id: "SIT24SC011", name: "Isaki Ganesh M" },
  { id: "SIT24SC035", name: "Jagadeeshwaran S" },
  { id: "SIT24SC048", name: "Kamalesh K" },
  { id: "SIT24SC034", name: "Karthikeyan K" },
  { id: "SIT24SC028", name: "Kaviya A" },
  { id: "SIT24SC053", name: "Keshika K" },
  { id: "SIT24SC055", name: "Kirubalan M" },
  { id: "SIT24SC038", name: "Kirubavathy B" },
  { id: "SIT24SC058", name: "Kishore P" },
  { id: "SIT24SC036", name: "Kowsalya M" },
  { id: "SIT24SC002", name: "Manusri M V" },
  { id: "SIT24SC042", name: "Meena M" },
  { id: "SIT24SC007", name: "Mohamed Maajed M" },
  { id: "SIT24SC049", name: "Mohana Priya A" },
  { id: "SIT24SC015", name: "Mokshaya Durgai N" },
  { id: "SIT24SC027", name: "Naveen Adhithya M" },
  { id: "SIT24SC044", name: "Naveen P" },
  { id: "SIT24SC012", name: "Nithiswar S G" },
  { id: "SIT24SC022", name: "Piramanayagam P" },
  { id: "SIT24SC025", name: "Pooja Chettur S" },
  { id: "SIT24SC030", name: "Priyankha G" },
  { id: "SIT24SC037", name: "Punitha P" },
  { id: "SIT24SC031", name: "Raja Rajeswari A" },
  { id: "SIT24SC018", name: "Rakshita Pradhan" },
  { id: "SIT24SC052", name: "Rithika Shree J" },
  { id: "SIT24SC009", name: "Robin S" },
  { id: "SIT24SC050", name: "Sakravarthi R" },
  { id: "SIT24SC016", name: "Samarjeeth R" },
  { id: "SIT24SC024", name: "Sanjai S" },
  { id: "SIT24SC059", name: "Sanjeev Raj K" },
  { id: "SIT24SC041", name: "Santhosh K" },
  { id: "SIT24SC008", name: "Sreenidhi K" },
  { id: "SIT24SC001", name: "Srikanth R J" },
  { id: "SIT24SC056", name: "Srinidhi S" },
  { id: "SIT24SC023", name: "Sujitha J" },
  { id: "SIT24SC029", name: "Sulaka B" },
  { id: "SIT24SC004", name: "Surya D" },
  { id: "SIT24SC054", name: "Suryanarayanan D" },
  { id: "SIT24SC020", name: "Vishnuvarshan A" },
  { id: "SIT24SC046", name: "Yazhini G A" },
  { id: "SIT24SC005", name: "Yuvan Shankar B" },
  { id: "SIT24SC040", name: "Yuvasree P" },
  { id: "SITL25SC01", name: "Harish Gandhi" },
  { id: "SITL25SC02", name: "Arvind" },
];

let currentRoster = [...STUDENTS];
let uploadedRoster = null;
let activeRosterTab = "default";
let autoDone = [],
  manual = [],
  missing = [],
  unknowns = [];

// ═══════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════
function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLORS = [
  "bg-secondary-container text-on-secondary-container",
  "bg-primary-fixed text-on-primary-fixed-variant",
  "bg-tertiary-fixed text-on-tertiary-fixed",
  "bg-surface-container-highest text-on-surface",
  "bg-error-container text-on-error-container",
  "bg-secondary-fixed text-on-secondary-fixed-variant",
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

// ═══════════════════════════════════════════
// CUSTOM ROSTER & DATE HANDLING
// ═══════════════════════════════════════════
function handleRosterUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) {
    currentRoster = [...STUDENTS];
    updateUIForRosterChange();
    return;
  }

  let newRoster = [];
  let filesRead = 0;

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      const lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 0);
      lines.forEach((line, idx) => {
        const parts = line.split(",");
        if (parts.length >= 2) {
          newRoster.push({ id: parts[0].trim(), name: parts[1].trim() });
        } else {
          const match = line.match(/^([A-Z0-9]+)\s+(.+)$/i);
          if (match) {
            newRoster.push({ id: match[1].trim(), name: match[2].trim() });
          } else {
            newRoster.push({
              id: `UPL${String(newRoster.length + 1).padStart(3, "0")}`,
              name: line,
            });
          }
        }
      });

      filesRead++;
      if (filesRead === files.length) {
        if (newRoster.length > 0) {
          uploadedRoster = newRoster;
          currentRoster = newRoster;
          activeRosterTab = "uploaded";
          updateUIForRosterChange();
        } else {
          alert("No valid students found in the provided files.");
          uploadedRoster = null;
          currentRoster = [...STUDENTS];
          activeRosterTab = "default";
          document.getElementById("rosterFile").value = "";
          updateUIForRosterChange();
        }
      }
    };
    reader.readAsText(files[i]);
  }
}

function updateUIForRosterChange() {
  autoDone = [];
  manual = [];
  missing = [];
  unknowns = [];
  document.getElementById("listDone").innerHTML =
    '<div class="flex items-center justify-center p-8 border-2 border-dashed border-outline-variant/30 rounded-xl opacity-40"><span class="font-label text-[10px] uppercase tracking-widest">Run analysis first</span></div>';
  document.getElementById("listMiss").innerHTML =
    '<div class="flex items-center justify-center p-8 border-2 border-dashed border-outline-variant/30 rounded-xl opacity-40"><span class="font-label text-[10px] uppercase tracking-widest">Run analysis first</span></div>';
  document.getElementById("listManual").innerHTML = "";

  const mp = document.getElementById("manualPanel");
  if (mp) mp.classList.add("hidden");
  const ss = document.getElementById("statsSection");
  if (ss) ss.classList.add("hidden");
  const res = document.getElementById("results");
  if (res) res.classList.add("hidden");
  const noData = document.getElementById("analyticsNoData");
  if (noData) noData.classList.remove("hidden");

  document.getElementById("sTotal").textContent = currentRoster.length;
  document.getElementById("sDone").textContent = "0";
  document.getElementById("sManual").textContent = "00";
  document.getElementById("sMiss").textContent = "0";
  document.getElementById("pctLabel").textContent = "0%";
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("sentCount").textContent = "0";
  document.getElementById("missCount").textContent = "0";
  document.getElementById("manualCount").textContent = "0";

  buildRosterStrip();
  renderRosterPage();
}

function setToday() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  document.getElementById("filterDate").value = `${yyyy}-${mm}-${dd}`;
}

window.onload = function () {
  setToday();
  buildRosterStrip();
  renderRosterPage();
};

// ═══════════════════════════════════════════
// ROSTER STRIP
// ═══════════════════════════════════════════
function buildRosterStrip() {
  const strip = document.getElementById("rosterStrip");
  let html = "";
  currentRoster.forEach((s) => {
    const colorClass = getAvatarColor(s.name);
    const initials = getInitials(s.name);
    html += `
      <div class="flex-none w-44 bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-md">
        <div class="w-10 h-10 rounded-full ${colorClass} mb-3 flex items-center justify-center text-xs font-bold font-editorial">${initials}</div>
        <p class="font-body font-bold text-sm text-on-surface truncate">${s.name}</p>
        <p class="font-mono text-[10px] text-outline">${s.id}</p>
      </div>
    `;
  });
  strip.innerHTML = html;
}

// ═══════════════════════════════════════════
// MAIN ANALYSIS
// ═══════════════════════════════════════════
function run() {
  const chat = document.getElementById("chatText").value;
  if (!chat.trim()) {
    alert("Please paste the WhatsApp chat export first!");
    return;
  }

  const dateVal = document.getElementById("filterDate").value;
  let filteredChat = chat;

  if (dateVal) {
    const [yyyy, mm, dd] = dateVal.split("-");
    const yy = yyyy.slice(-2);
    const datePattern1 = `${dd}/${mm}/${yy}`;
    const datePattern2 = `${dd}/${mm}/${yyyy}`;
    const d = parseInt(dd),
      mo = parseInt(mm);
    const datePattern3 = `${d}/${mo}/${yy}`;
    const datePattern4 = `${d}/${mo}/${yyyy}`;

    const lines = chat.split("\n");
    const todayLines = lines.filter(
      (line) =>
        line.includes(datePattern1) ||
        line.includes(datePattern2) ||
        line.includes(datePattern3) ||
        line.includes(datePattern4),
    );
    filteredChat = todayLines.join("\n");

    if (!filteredChat.trim()) {
      alert(
        `No messages found for ${dd}/${mm}/${yyyy}.\n\nMake sure the date matches the chat export format, or clear the date to check all messages.`,
      );
      return;
    }
  }

  autoDone = [];
  manual = [];
  missing = [];
  unknowns = [];

  const re =
    /\[\d{1,2}\/\d{1,2}\/\d{2,4},\s*\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM)?\] ([^:]+):/gi;
  const senders = new Set();
  let m;
  while ((m = re.exec(filteredChat)) !== null) senders.add(m[1].trim());
  senders.forEach((s) => {
    if (/^[\+\d][\d\s\-\(\)]{5,}$/.test(s)) unknowns.push(s);
  });

  currentRoster.forEach((s) => {
    const parts = s.name
      .toLowerCase()
      .split(" ")
      .filter((p) => p.length > 2);
    const chatLow = filteredChat.toLowerCase();
    const found = parts.some((p) => chatLow.includes(p));
    (found ? autoDone : missing).push(s);
  });

  updateStats();

  // Show sections
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("statsSection").classList.remove("hidden");
  document.getElementById("searchBar").value = "";

  // Unknown contacts
  if (unknowns.length) {
    const box = document.getElementById("unknownBox");
    box.classList.remove("hidden");
    box.classList.add("flex");
    document.getElementById("unknownPills").innerHTML = unknowns
      .map(
        (n) =>
          `<span class="bg-surface-container-lowest px-3 py-1 rounded-full text-xs font-mono text-on-tertiary-fixed shadow-sm cursor-pointer hover:bg-tertiary-fixed transition-colors">${n}</span>`,
      )
      .join("");
  } else {
    const box = document.getElementById("unknownBox");
    box.classList.add("hidden");
    box.classList.remove("flex");
  }

  render();
  setTimeout(
    () =>
      document
        .getElementById("results")
        .scrollIntoView({ behavior: "smooth", block: "start" }),
    100,
  );
}

// ═══════════════════════════════════════════
// STATS UPDATE
// ═══════════════════════════════════════════
function updateStats() {
  const total = currentRoster.length;
  const done = autoDone.length + manual.length;
  document.getElementById("sTotal").textContent = total;
  document.getElementById("sDone").textContent = autoDone.length;
  document.getElementById("sManual").textContent = String(
    manual.length,
  ).padStart(2, "0");
  document.getElementById("sMiss").textContent = missing.length;

  const pct = Math.round((done / total) * 100);
  document.getElementById("pctLabel").textContent = pct + "%";
  document.getElementById("progressFill").style.width = pct + "%";

  // Column counts
  document.getElementById("sentCount").textContent = autoDone.length;
  document.getElementById("missCount").textContent = missing.length;
  document.getElementById("manualCount").textContent = manual.length;

  // Show/hide manual panel
  const mp = document.getElementById("manualPanel");
  if (manual.length > 0) {
    mp.classList.remove("hidden");
  } else {
    mp.classList.add("hidden");
  }
}

// ═══════════════════════════════════════════
// RENDER LISTS
// ═══════════════════════════════════════════
function render() {
  const q = document.getElementById("searchBar").value.toLowerCase();
  const fDone = autoDone.filter(
    (s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q),
  );
  const fMiss = missing.filter(
    (s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q),
  );
  const fManual = manual.filter(
    (s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q),
  );

  // Sent list
  document.getElementById("listDone").innerHTML = fDone.length
    ? fDone
        .map((s) => {
          const colorClass = getAvatarColor(s.name);
          return `
          <div class="group flex items-center justify-between p-3 bg-secondary-container/60 rounded-xl border border-secondary-container/30 hover:shadow-md transition-all">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full ${colorClass} flex items-center justify-center text-[10px] font-bold font-editorial flex-shrink-0">${getInitials(s.name)}</div>
              <div class="flex flex-col min-w-0">
                <span class="font-body font-semibold text-sm text-on-secondary-container truncate">${s.name}</span>
                <span class="font-mono text-[10px] text-on-secondary-container/60">${s.id}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-secondary text-sm opacity-0 group-hover:opacity-60 transition-opacity">check_circle</span>
          </div>`;
        })
        .join("")
    : '<div class="flex items-center justify-center p-8 border-2 border-dashed border-outline-variant/30 rounded-xl opacity-40"><span class="font-label text-[10px] uppercase tracking-widest">None yet</span></div>';

  // Missing list
  document.getElementById("listMiss").innerHTML = fMiss.length
    ? fMiss
        .map((s) => {
          const ri = missing.indexOf(s);
          const colorClass = getAvatarColor(s.name);
          return `
          <div class="name-row-miss group flex items-center justify-between p-3 bg-error-container/60 rounded-xl border border-error-container/30 hover:bg-error-container/80 hover:shadow-md transition-all cursor-pointer" onclick="markDone(${ri})" title="Click to mark as done">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full ${colorClass} flex items-center justify-center text-[10px] font-bold font-editorial flex-shrink-0">${getInitials(s.name)}</div>
              <div class="flex flex-col min-w-0">
                <span class="font-body font-semibold text-sm text-on-error-container truncate">${s.name}</span>
                <span class="font-mono text-[10px] text-on-error-container/60">${s.id}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-error text-sm opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
          </div>`;
        })
        .join("")
    : '<div class="flex items-center justify-center p-8 border-2 border-dashed border-secondary/20 rounded-xl"><span class="font-label text-[10px] uppercase tracking-widest text-secondary">🎉 All done!</span></div>';

  // Manual list
  document.getElementById("listManual").innerHTML = fManual.length
    ? fManual
        .map((s) => {
          const ri = manual.indexOf(s);
          const colorClass = getAvatarColor(s.name);
          return `
          <div class="name-row-manual group flex items-center justify-between p-3 bg-primary-fixed/60 rounded-xl border border-on-primary-fixed-variant/15 hover:bg-primary-fixed/80 hover:shadow-md transition-all cursor-pointer" onclick="unmark(${ri})" title="Click to undo">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full ${colorClass} flex items-center justify-center text-[10px] font-bold font-editorial flex-shrink-0">${getInitials(s.name)}</div>
              <div class="flex flex-col min-w-0">
                <span class="font-body font-semibold text-sm text-on-primary-fixed-variant truncate">${s.name}</span>
                <span class="font-mono text-[10px] text-on-primary-fixed-variant/60">${s.id}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-on-primary-fixed-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">remove_circle</span>
          </div>`;
        })
        .join("")
    : "";
}

// ═══════════════════════════════════════════
// MARK / UNMARK
// ═══════════════════════════════════════════
function markDone(i) {
  manual.push(missing[i]);
  missing.splice(i, 1);
  updateStats();
  render();
}
function unmark(i) {
  missing.push(manual[i]);
  manual.splice(i, 1);
  updateStats();
  render();
}

// ═══════════════════════════════════════════
// COPY LIST
// ═══════════════════════════════════════════
function copyList(type) {
  const list =
    type === "done"
      ? [...autoDone, ...manual]
      : type === "miss"
        ? missing
        : manual;
  const txt = list.map((s, i) => `${i + 1}. ${s.name} (${s.id})`).join("\n");
  navigator.clipboard.writeText(txt).then(() => {
    const btnId =
      type === "done"
        ? "copyDone"
        : type === "miss"
          ? "copyMiss"
          : "copyManual";
    const btn = document.getElementById(btnId);
    const icon = btn.querySelector(".material-symbols-outlined");
    icon.textContent = "done";
    btn.classList.add("bg-secondary/10");
    setTimeout(() => {
      icon.textContent = "content_copy";
      btn.classList.remove("bg-secondary/10");
    }, 2000);
  });
}

// ═══════════════════════════════════════════
// TAB NAVIGATION
// ═══════════════════════════════════════════
function switchTab(tab) {
  // Hide all tab pages
  document
    .querySelectorAll(".tab-page")
    .forEach((p) => p.classList.add("hidden"));
  // Show selected
  document.getElementById("tab-" + tab).classList.remove("hidden");

  // Update nav styling
  document.querySelectorAll(".nav-tab").forEach((a) => {
    if (a.dataset.tab === tab) {
      a.classList.remove("text-on-surface/60", "border-transparent");
      a.classList.add("text-on-surface", "border-on-surface");
    } else {
      a.classList.remove("text-on-surface", "border-on-surface");
      a.classList.add("text-on-surface/60", "border-transparent");
    }
  });

  // If analytics, refresh data
  if (tab === "analytics") refreshAnalytics();
  // If roster, refresh
  if (tab === "roster") renderRosterPage();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ═══════════════════════════════════════════
// ROSTER PAGE (full grid)
// ═══════════════════════════════════════════
function setRosterView(view) {
  activeRosterTab = view;
  renderRosterPage();
}

function renderRosterPage() {
  const btnDef = document.getElementById("btnRosterDefault");
  const btnUpl = document.getElementById("btnRosterUploaded");
  if (btnDef && btnUpl) {
    if (activeRosterTab === "default") {
      btnDef.className =
        "px-5 py-2 rounded-lg font-label text-xs uppercase tracking-widest text-on-primary bg-primary shadow-sm transition-all";
      btnUpl.className =
        "px-5 py-2 rounded-lg font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all";
    } else {
      btnUpl.className =
        "px-5 py-2 rounded-lg font-label text-xs uppercase tracking-widest text-on-primary bg-primary shadow-sm transition-all";
      btnDef.className =
        "px-5 py-2 rounded-lg font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all";
    }
  }

  let listToRender =
    activeRosterTab === "default" ? STUDENTS : uploadedRoster || [];
  const grid = document.getElementById("rosterGrid");
  if (!grid) return;

  if (
    activeRosterTab === "uploaded" &&
    (!uploadedRoster || uploadedRoster.length === 0)
  ) {
    grid.innerHTML =
      '<div class="col-span-full flex flex-col items-center justify-center p-12 opacity-50"><span class="material-symbols-outlined text-4xl mb-3">upload_file</span><span class="font-label text-xs uppercase tracking-widest">No custom roster uploaded</span></div>';
    return;
  }

  const searchEl = document.getElementById("rosterSearch");
  const q = searchEl ? searchEl.value.toLowerCase() : "";
  const filtered = listToRender.filter(
    (s) => s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q),
  );

  grid.innerHTML = filtered
    .map((s) => {
      const colorClass = getAvatarColor(s.name);
      const initials = getInitials(s.name);
      // Determine status
      let statusBadge = "";
      let borderExtra = "border-outline-variant/10";
      if (autoDone.find((x) => x.id === s.id)) {
        statusBadge =
          '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label uppercase tracking-widest"><span class="material-symbols-outlined text-xs">check</span>Sent</span>';
        borderExtra = "border-secondary/30";
      } else if (manual.find((x) => x.id === s.id)) {
        statusBadge =
          '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-label uppercase tracking-widest"><span class="material-symbols-outlined text-xs">edit</span>Marked</span>';
        borderExtra = "border-on-primary-fixed-variant/30";
      } else if (missing.find((x) => x.id === s.id)) {
        statusBadge =
          '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-label uppercase tracking-widest"><span class="material-symbols-outlined text-xs">close</span>Missing</span>';
        borderExtra = "border-error/20";
      }
      return `
      <div class="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border ${borderExtra} hover:shadow-md hover:-translate-y-0.5 transition-all">
        <div class="flex items-start justify-between mb-3">
          <div class="w-12 h-12 rounded-full ${colorClass} flex items-center justify-center text-sm font-bold font-editorial">${initials}</div>
          ${statusBadge}
        </div>
        <p class="font-body font-bold text-sm text-on-surface truncate">${s.name}</p>
        <p class="font-mono text-[10px] text-outline mt-0.5">${s.id}</p>
      </div>
    `;
    })
    .join("");

  if (!filtered.length) {
    grid.innerHTML =
      '<div class="col-span-full flex items-center justify-center p-12 opacity-40"><span class="font-label text-xs uppercase tracking-widest">No students match your search</span></div>';
  }
}

// ═══════════════════════════════════════════
// ANALYTICS REFRESH
// ═══════════════════════════════════════════
function refreshAnalytics() {
  const total = currentRoster.length;
  const hasData =
    autoDone.length > 0 || manual.length > 0 || missing.length > 0;

  // Toggle no-data state
  document
    .getElementById("analyticsNoData")
    .classList.toggle("hidden", hasData);

  if (!hasData) {
    document.getElementById("aResponded").textContent = "—";
    document.getElementById("aManual").textContent = "—";
    document.getElementById("aMissing").textContent = "—";
    document.getElementById("aRateBig").textContent = "—%";
    document.getElementById("aRateBar").style.width = "0%";
    return;
  }

  const responded = autoDone.length + manual.length;
  const pct = Math.round((responded / total) * 100);

  document.getElementById("aResponded").textContent = responded;
  document.getElementById("aManual").textContent = String(
    manual.length,
  ).padStart(2, "0");
  document.getElementById("aMissing").textContent = missing.length;
  document.getElementById("aRateBig").textContent = pct + "%";
  setTimeout(() => {
    document.getElementById("aRateBar").style.width = pct + "%";
  }, 100);

  // Breakdown bars
  document.getElementById("aAutoBar").textContent = autoDone.length;
  document.getElementById("aManBar").textContent = manual.length;
  document.getElementById("aMisBar").textContent = missing.length;
  setTimeout(() => {
    document.getElementById("aAutoFill").style.width =
      (autoDone.length / total) * 100 + "%";
    document.getElementById("aManFill").style.width =
      (manual.length / total) * 100 + "%";
    document.getElementById("aMisFill").style.width =
      (missing.length / total) * 100 + "%";
  }, 100);

  // Missing students list
  const ml = document.getElementById("aMissingList");
  if (missing.length) {
    ml.innerHTML = missing
      .map((s) => {
        const colorClass = getAvatarColor(s.name);
        return `
        <div class="flex items-center gap-3 p-2.5 bg-error-container/40 rounded-xl">
          <div class="w-7 h-7 rounded-full ${colorClass} flex items-center justify-center text-[9px] font-bold font-editorial flex-shrink-0">${getInitials(s.name)}</div>
          <div class="flex flex-col min-w-0">
            <span class="font-body font-semibold text-sm text-on-error-container truncate">${s.name}</span>
            <span class="font-mono text-[10px] text-on-error-container/60">${s.id}</span>
          </div>
        </div>`;
      })
      .join("");
  } else {
    ml.innerHTML =
      '<div class="flex items-center justify-center p-8"><span class="font-label text-[10px] uppercase tracking-widest text-secondary">🎉 All students responded!</span></div>';
  }
}
