(function () {
  const data = window.sriwijayaElectionData;
  const state = {
    filter: "all",
  };

  const selectors = {
    candidateGrid: document.querySelector("[data-candidate-grid]"),
    filterBar: document.querySelector("[data-filter-bar]"),
    timeline: document.querySelector("[data-timeline]"),
    voterGuide: document.querySelector("[data-voter-guide]"),
    miniCandidates: document.querySelector("[data-mini-candidates]"),
    modal: document.querySelector("[data-modal]"),
    modalContent: document.querySelector("[data-modal-content]"),
    nav: document.querySelector("[data-nav]"),
    navToggle: document.querySelector("[data-nav-toggle]"),
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function fallback(value, defaultValue) {
    const text = String(value || "").trim();
    return text || defaultValue;
  }

  function asList(items, defaultItem) {
    if (Array.isArray(items)) {
      const cleanItems = items.map((item) => String(item || "").trim()).filter(Boolean);
      return cleanItems.length ? cleanItems : [defaultItem];
    }

    const cleanItem = String(items || "").trim();
    return cleanItem ? [cleanItem] : [defaultItem];
  }

  function candidatePhoto(candidate) {
    const name = fallback(candidate.name, "Kandidat");
    if (!candidate.photo) {
      return `<div class="candidate-photo-placeholder" aria-label="Foto ${escapeHtml(name)} belum tersedia">Foto menyusul</div>`;
    }

    return `<img src="${escapeHtml(candidate.photo)}" alt="Foto ${escapeHtml(name)}" />`;
  }

  function candidateStatus(candidate) {
    return fallback(candidate.verificationStatus, "Belum diverifikasi");
  }

  function candidateSource(candidate) {
    return fallback(candidate.source, data.dataImport?.sourceLabel || "Sumber data panitia");
  }

  function whatsappUrl() {
    const number = data.site.whatsappNumber.replace(/\D/g, "");
    const message = encodeURIComponent(data.site.whatsappMessage);
    return `https://wa.me/${number}?text=${message}`;
  }

  function hydrateSiteText() {
    document.querySelectorAll("[data-site]").forEach((element) => {
      const key = element.getAttribute("data-site");
      if (data.site[key]) {
        element.textContent = data.site[key];
      }
    });

    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      link.setAttribute("href", whatsappUrl());
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  function visibleCandidates() {
    const hiddenCategories = new Set(data.publication?.hiddenCategories || []);

    return data.candidates.filter((candidate) => !hiddenCategories.has(candidate.category));
  }

  function renderFilters() {
    const visibleFilterValues = new Set(visibleCandidates().map((candidate) => candidate.filter));

    selectors.filterBar.innerHTML = data.filters
      .filter((filter) => filter.value === "all" || visibleFilterValues.has(filter.value))
      .map(
        (filter) => `
          <button
            class="filter-button${filter.value === state.filter ? " is-active" : ""}"
            type="button"
            data-filter="${escapeHtml(filter.value)}"
          >
            ${escapeHtml(filter.label)}
          </button>
        `
      )
      .join("");
  }

  function candidateTemplate(candidate) {
    const name = fallback(candidate.name, "Nama kandidat menyusul");
    const role = fallback(candidate.role, candidate.rtRw ? `Kandidat ${candidate.rtRw}` : "Kandidat");
    const area = fallback(candidate.area, "Wilayah menyusul");
    const tagline = fallback(candidate.tagline, "");
    const candidateNumber = String(candidate.candidateNumber || "").trim();

    return `
      <article class="candidate-card">
        <div class="candidate-photo-wrap">
          ${candidatePhoto(candidate)}
          <span>${escapeHtml(role)}</span>
        </div>
        <div class="candidate-body">
          <p class="candidate-area">${escapeHtml(area)}</p>
          <h3>${escapeHtml(name)}</h3>
          <div class="candidate-meta">
            ${candidateNumber ? `<span class="status-pill candidate-number-pill">Nomor ${escapeHtml(candidateNumber)}</span>` : ""}

          </div>
          <button class="text-button" type="button" data-candidate-id="${escapeHtml(candidate.id)}">
            Lihat profil
          </button>
        </div>
      </article>
    `;
  }

  function renderCandidates() {
    const candidates = visibleCandidates();
    const filteredCandidates =
      state.filter === "all"
        ? candidates
        : candidates.filter((candidate) => candidate.filter === state.filter);

    selectors.candidateGrid.innerHTML = filteredCandidates.map(candidateTemplate).join("");
  }

  function renderMiniCandidates() {
    selectors.miniCandidates.innerHTML = visibleCandidates()
      .map(
        (candidate) => `
          <button type="button" data-candidate-id="${escapeHtml(candidate.id)}">
            ${candidate.photo ? `<img src="${escapeHtml(candidate.photo)}" alt="" />` : `<div class="mini-photo-placeholder"></div>`}
            <span>${escapeHtml(fallback(candidate.role, "Kandidat").replace("Kandidat ", ""))}</span>
          </button>
        `
      )
      .join("");
  }

  function listTemplate(items) {
    const safeItems = asList(items, "Informasi sedang dilengkapi panitia.");

    return `
      <ul>
        ${safeItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function optionalTextSection(title, value) {
    const text = String(value || "").trim();
    if (!text) return "";

    return `
      <section>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
      </section>
    `;
  }

  function visionSection(vision, description) {
    const visionText = String(vision || "").trim();
    const descriptionText = String(description || "").trim();
    if (!visionText && !descriptionText) return "";

    return `
      <section>
        <h3>Visi</h3>
        ${visionText ? `<p>${escapeHtml(visionText)}</p>` : ""}
        ${descriptionText ? `<p>${escapeHtml(descriptionText)}</p>` : ""}
      </section>
    `;
  }

  function optionalListSection(title, items, className = "") {
    const cleanItems = Array.isArray(items)
      ? items.map((item) => String(item || "").trim()).filter(Boolean)
      : [];
    if (!cleanItems.length) return "";

    const sectionClass = className ? ` class="${escapeHtml(className)}"` : "";
    return `
      <section${sectionClass}>
        <h3>${escapeHtml(title)}</h3>
        ${listTemplate(cleanItems)}
      </section>
    `;
  }

  function profileListSection(title, items, optional = false) {
    if (optional) return optionalListSection(title, items);

    return `
      <section>
        <h3>${escapeHtml(title)}</h3>
        ${listTemplate(items)}
      </section>
    `;
  }

  function optionalTitledListSection(title, items) {
    const cleanItems = Array.isArray(items)
      ? items
          .map((item) => ({
            title: String(item?.title || "").trim(),
            description: String(item?.description || "").trim(),
          }))
          .filter((item) => item.title || item.description)
      : [];
    if (!cleanItems.length) return "";

    return `
      <section>
        <h3>${escapeHtml(title)}</h3>
        <ul class="profile-detail-list">
          ${cleanItems
            .map(
              (item) => `
                <li>
                  ${item.title ? `<strong>${escapeHtml(item.title)}</strong>` : ""}
                  ${item.description ? `<span>${escapeHtml(item.description)}</span>` : ""}
                </li>
              `
            )
            .join("")}
        </ul>
      </section>
    `;
  }

  function campaignThemeSection(theme) {
    const title = String(theme?.title || "").trim();
    const description = String(theme?.description || "").trim();
    if (!title && !description) return "";

    return `
      <section class="campaign-theme-section">
        <h3>Identitas Kampanye</h3>
        ${title ? `<strong class="campaign-theme-title">${escapeHtml(title)}</strong>` : ""}
        ${description ? `<p>${escapeHtml(description)}</p>` : ""}
      </section>
    `;
  }

  function compactListTemplate(items, defaultItem) {
    const safeItems = asList(items, defaultItem);

    return `
      <ul class="guide-list">
        ${safeItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function numberedStepsTemplate(items) {
    const safeItems = asList(items, "Langkah pemilihan menunggu keputusan panitia.");

    return `
      <ol class="guide-steps">
        ${safeItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    `;
  }

  function candidateVideo(candidate) {
    const video = String(candidate.video || "").trim();
    if (!video) return "";

    const title = fallback(candidate.name, "Kandidat");
    return `
      <section class="candidate-video-section">
        <h3>Video Perkenalan</h3>
        <div class="candidate-video-frame">
          <iframe
            src="${escapeHtml(video)}"
            title="Video perkenalan ${escapeHtml(title)}"
            allow="autoplay; encrypted-media"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    `;
  }

  function renderVoterGuide() {
    const guide = data.voterGuide || {};
    const statusLabel = fallback(guide.statusLabel, "Informasi sementara");
    const location = fallback(guide.location, "Menunggu keputusan panitia");
    const time = fallback(guide.time, "Menunggu keputusan panitia");

    selectors.voterGuide.innerHTML = `
      <div class="guide-summary-card">
        <span class="guide-status">${escapeHtml(statusLabel)}</span>
        <h3>Ringkasan hari pemilihan</h3>
        <dl>
          <div>
            <dt>Lokasi</dt>
            <dd>${escapeHtml(location)}</dd>
          </div>
          <div>
            <dt>Waktu</dt>
            <dd>${escapeHtml(time)}</dd>
          </div>
          <div>
            <dt>Sistem suara</dt>
            <dd>1 suara per KK</dd>
          </div>
        </dl>
        <p>Hasil voting dihitung dari suara terbanyak pemilih yang hadir.</p>
      </div>

      <div class="guide-detail-grid">
        <article class="guide-card guide-card-wide">
          <span>Aturan voting</span>
          <h3>Ketentuan utama</h3>
          ${compactListTemplate(guide.rules, "Aturan voting menunggu keputusan panitia.")}
        </article>
        <article class="guide-card">
          <span>Syarat pemilih</span>
          <h3>Yang berhak memilih</h3>
          ${compactListTemplate(guide.eligibility, "Syarat pemilih menunggu keputusan panitia.")}
        </article>
        <article class="guide-card">
          <span>Dokumen</span>
          <h3>Yang perlu disiapkan</h3>
          ${compactListTemplate(guide.documents, "Dokumen pemilih menunggu keputusan panitia.")}
        </article>
        <article class="guide-card guide-card-wide">
          <span>Alur di lokasi</span>
          <h3>Langkah memilih</h3>
          ${numberedStepsTemplate(guide.steps)}
        </article>
        <article class="guide-card guide-card-wide guide-note-card">
          <span>Catatan panitia</span>
          <h3>Informasi sementara</h3>
          ${compactListTemplate(guide.notes, "Catatan panitia menunggu keputusan final.")}
        </article>
      </div>
    `;
  }

  function openCandidateModal(candidateId) {
    const candidate = data.candidates.find((item) => item.id === candidateId);
    if (!candidate) return;

    const name = fallback(candidate.name, "Nama kandidat menyusul");
    const role = fallback(candidate.role, candidate.rtRw ? `Kandidat ${candidate.rtRw}` : "Kandidat");
    const area = fallback(candidate.area, "Wilayah menyusul");
    const house = fallback(candidate.house, "Alamat rumah belum diisi");
    const profession = fallback(candidate.profession, "Profesi belum diisi");
    const summary = fallback(candidate.summary, "Ringkasan profil kandidat sedang dilengkapi panitia.");
    const candidateNumber = String(candidate.candidateNumber || "").trim();
    const term = String(candidate.term || "").trim();
    const hasExtendedProfile = Boolean(
      candidateNumber ||
        term ||
        candidate.campaignTheme ||
        candidate.reasons?.length ||
        candidate.mainIdeas?.length ||
        candidate.focusAreas?.length ||
        candidate.purpose ||
        candidate.visionDescription ||
        candidate.values?.length ||
        candidate.commitments?.length ||
        candidate.commitmentDetails?.length ||
        candidate.valueDetails?.length ||
        candidate.mainMessage ||
        candidate.electionInfo?.length ||
        candidate.slogans?.length
    );
    const vision = hasExtendedProfile
      ? String(candidate.vision || "").trim()
      : fallback(candidate.vision, "Visi kandidat sedang dilengkapi panitia.");
    const quote = hasExtendedProfile
      ? String(candidate.quote || "").trim()
      : fallback(candidate.quote, "Pernyataan kandidat sedang dilengkapi panitia.");
    const isRtCandidate = String(candidate.category || "").trim().toUpperCase() === "RT";
    const extendedProfileContent = isRtCandidate
      ? ""
      : `
        ${campaignThemeSection(candidate.campaignTheme)}
        ${optionalTextSection("Tujuan Mencalonkan Diri", candidate.purpose)}
        ${optionalTitledListSection("Alasan Mencalonkan Diri", candidate.reasons)}
        ${optionalTitledListSection("Gagasan Utama", candidate.mainIdeas)}
        ${optionalListSection("Fokus Utama", candidate.focusAreas)}
        ${visionSection(vision, candidate.visionDescription)}

        ${candidateVideo(candidate)}

        ${profileListSection("Misi", candidate.missions, hasExtendedProfile)}
        ${profileListSection(
          hasExtendedProfile ? "Program & Rencana Kerja Utama" : "Program Prioritas",
          candidate.programs,
          hasExtendedProfile
        )}
        ${optionalListSection("Nilai yang Dipegang", candidate.values)}
        ${optionalListSection("Komitmen", candidate.commitments)}
        ${optionalTitledListSection("Komitmen Utama", candidate.commitmentDetails)}
        ${optionalTitledListSection("Nilai-Nilai yang Diusung", candidate.valueDetails)}
        ${optionalTitledListSection("Informasi Pemilihan", candidate.electionInfo)}
        ${optionalListSection("Slogan Kampanye", candidate.slogans, "campaign-slogans-section")}
        ${profileListSection("Pengalaman", candidate.experience, hasExtendedProfile)}
        ${optionalTextSection("Pesan Utama", candidate.mainMessage)}
        ${quote ? `<blockquote>${escapeHtml(quote)}</blockquote>` : ""}
      `;

    selectors.modalContent.innerHTML = `
      <div class="modal-media">
        ${candidatePhoto(candidate)}
      </div>
      <div class="modal-copy">
        <p class="candidate-area">${escapeHtml(role)} - ${escapeHtml(area)}</p>
        <h2 id="modal-title">${escapeHtml(name)}</h2>
        <dl class="profile-facts">
          <div>
            <dt>Domisili</dt>
            <dd>${escapeHtml(house)}</dd>
          </div>
          <div>
            <dt>Profesi</dt>
            <dd>${escapeHtml(profession)}</dd>
          </div>
          <div>
            <dt>Kategori</dt>
            <dd>${escapeHtml(fallback(candidate.category, "Belum diisi"))}</dd>
          </div>
          <div>
            <dt>RT/RW</dt>
            <dd>${escapeHtml(fallback(candidate.rtRw, "Belum diisi"))}</dd>
          </div>
          ${
            candidateNumber
              ? `
                <div>
                  <dt>Nomor Urut</dt>
                  <dd>${escapeHtml(candidateNumber)}</dd>
                </div>
              `
              : ""
          }
          ${
            term
              ? `
                <div>
                  <dt>Periode</dt>
                  <dd>${escapeHtml(term)}</dd>
                </div>
              `
              : ""
          }
        </dl>

        ${extendedProfileContent}
      </div>
    `;

    selectors.modal.hidden = false;
    document.body.classList.add("modal-open");
    selectors.modal.querySelector("[data-modal-close]").focus();
  }

  function closeModal() {
    selectors.modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function renderTimeline() {
    selectors.timeline.innerHTML = data.timeline
      .map(
        (item) => `
          <article class="timeline-item">
            <span>${escapeHtml(item.date)}</span>
            <h3>${escapeHtml(item.phase)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </article>
        `
      )
      .join("");
  }

  function bindEvents() {
    selectors.filterBar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      state.filter = button.getAttribute("data-filter");
      renderFilters();
      renderCandidates();
    });

    document.addEventListener("click", (event) => {
      const candidateButton = event.target.closest("[data-candidate-id]");
      if (candidateButton) {
        openCandidateModal(candidateButton.getAttribute("data-candidate-id"));
      }
    });

    selectors.modal.addEventListener("click", (event) => {
      if (event.target.closest("[data-modal-close]")) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !selectors.modal.hidden) {
        closeModal();
      }
    });

    selectors.navToggle.addEventListener("click", () => {
      const isOpen = selectors.navToggle.getAttribute("aria-expanded") === "true";
      selectors.navToggle.setAttribute("aria-expanded", String(!isOpen));
      selectors.nav.classList.toggle("is-open", !isOpen);
    });

    selectors.nav.addEventListener("click", (event) => {
      if (event.target.tagName !== "A") return;
      selectors.navToggle.setAttribute("aria-expanded", "false");
      selectors.nav.classList.remove("is-open");
    });
  }

  function init() {
    hydrateSiteText();
    renderFilters();
    renderCandidates();
    renderMiniCandidates();
    renderTimeline();
    renderVoterGuide();
    bindEvents();
  }

  init();
})();
