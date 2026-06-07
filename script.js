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
    return `
      <article class="candidate-card">
        <div class="candidate-photo-wrap">
          <img src="${escapeHtml(candidate.photo)}" alt="Foto ${escapeHtml(candidate.name)}" />
          <span>${escapeHtml(candidate.role)}</span>
        </div>
        <div class="candidate-body">
          <p class="candidate-area">${escapeHtml(candidate.area)}</p>
          <h3>${escapeHtml(candidate.name)}</h3>
          <p>${escapeHtml(candidate.tagline)}</p>
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
            <img src="${escapeHtml(candidate.photo)}" alt="" />
            <span>${escapeHtml(candidate.role.replace("Kandidat ", ""))}</span>
          </button>
        `
      )
      .join("");
  }

  function listTemplate(items) {
    return `
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function openCandidateModal(candidateId) {
    const candidate = data.candidates.find((item) => item.id === candidateId);
    if (!candidate) return;

    selectors.modalContent.innerHTML = `
      <div class="modal-media">
        <img src="${escapeHtml(candidate.photo)}" alt="Foto ${escapeHtml(candidate.name)}" />
      </div>
      <div class="modal-copy">
        <p class="candidate-area">${escapeHtml(candidate.role)} - ${escapeHtml(candidate.area)}</p>
        <h2 id="modal-title">${escapeHtml(candidate.name)}</h2>
        <p class="modal-summary">${escapeHtml(candidate.summary)}</p>

        <dl class="profile-facts">
          <div>
            <dt>Domisili</dt>
            <dd>${escapeHtml(candidate.house)}</dd>
          </div>
          <div>
            <dt>Profesi</dt>
            <dd>${escapeHtml(candidate.profession)}</dd>
          </div>
        </dl>

        <section>
          <h3>Visi</h3>
          <p>${escapeHtml(candidate.vision)}</p>
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

        <blockquote>${escapeHtml(candidate.quote)}</blockquote>
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
    renderFaqs();
    bindEvents();
  }

  init();
})();
