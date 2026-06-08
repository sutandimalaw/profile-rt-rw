(function () {
  const data = window.sriwijayaElectionData;
  const state = {
    filter: "all",
  };

  const selectors = {
    candidateGrid: document.querySelector("[data-candidate-grid]"),
    filterBar: document.querySelector("[data-filter-bar]"),
    faqList: document.querySelector("[data-faq-list]"),
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

  function renderFilters() {
    selectors.filterBar.innerHTML = data.filters
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
    const tagline = fallback(candidate.tagline, "Ringkasan profil kandidat sedang dilengkapi panitia.");

    return `
      <article class="candidate-card">
        <div class="candidate-photo-wrap">
          ${candidatePhoto(candidate)}
          <span>${escapeHtml(role)}</span>
        </div>
        <div class="candidate-body">
          <p class="candidate-area">${escapeHtml(area)}</p>
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(tagline)}</p>
          <div class="candidate-meta">
            <span class="status-pill">${escapeHtml(candidateStatus(candidate))}</span>
          </div>
          <button class="text-button" type="button" data-candidate-id="${escapeHtml(candidate.id)}">
            Lihat profil
          </button>
        </div>
      </article>
    `;
  }

  function renderCandidates() {
    const filteredCandidates =
      state.filter === "all"
        ? data.candidates
        : data.candidates.filter((candidate) => candidate.filter === state.filter);

    selectors.candidateGrid.innerHTML = filteredCandidates.map(candidateTemplate).join("");
  }

  function renderMiniCandidates() {
    selectors.miniCandidates.innerHTML = data.candidates
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
    const vision = fallback(candidate.vision, "Visi kandidat sedang dilengkapi panitia.");
    const quote = fallback(candidate.quote, "Pernyataan kandidat sedang dilengkapi panitia.");

    selectors.modalContent.innerHTML = `
      <div class="modal-media">
        ${candidatePhoto(candidate)}
      </div>
      <div class="modal-copy">
        <p class="candidate-area">${escapeHtml(role)} - ${escapeHtml(area)}</p>
        <h2 id="modal-title">${escapeHtml(name)}</h2>
        <div class="profile-status-row">
          <span class="status-pill">${escapeHtml(candidateStatus(candidate))}</span>
          <span>Sumber data: ${escapeHtml(candidateSource(candidate))}</span>
        </div>
        <p class="modal-summary">${escapeHtml(summary)}</p>

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
        </dl>

        <section>
          <h3>Visi</h3>
          <p>${escapeHtml(vision)}</p>
        </section>

        <section>
          <h3>Misi</h3>
          ${listTemplate(candidate.missions)}
        </section>

        <section>
          <h3>Program Prioritas</h3>
          ${listTemplate(candidate.programs)}
        </section>

        <section>
          <h3>Pengalaman</h3>
          ${listTemplate(candidate.experience)}
        </section>

        <blockquote>${escapeHtml(quote)}</blockquote>
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

  function renderFaqs() {
    selectors.faqList.innerHTML = data.faqs
      .map(
        (faq, index) => `
          <article class="faq-item">
            <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
              <span>${escapeHtml(faq.question)}</span>
              <strong>+</strong>
            </button>
            <p${index === 0 ? "" : " hidden"}>${escapeHtml(faq.answer)}</p>
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

    selectors.faqList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;

      const item = button.closest(".faq-item");
      const panel = item.querySelector("p");
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
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
    renderFaqs();
    bindEvents();
  }

  init();
})();
