// Components script to hydrate shared elements (Header, Footer, Pricing Cards, FAQs)

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});

function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const currentPath = window.location.pathname;
  
  const navLinksHTML = window.siteData.navigation.map(link => {
    const isActive = currentPath.includes(link.href) || (currentPath === "/" && link.href === "/index.html");
    return `
      <li>
        <a href="${link.href}" 
           class="nav-link ${isActive ? 'active' : ''}" 
           ${isActive ? 'aria-current="page"' : ''}>
           ${link.label}
        </a>
      </li>
    `;
  }).join('');

  header.innerHTML = `
    <div class="container header-container">
      <a href="/index.html" class="logo" aria-label="Ledger Loop Home">${window.siteData.company.name}</a>
      
      <nav class="main-nav" aria-label="Main Navigation">
        <ul class="nav-list">
          ${navLinksHTML}
        </ul>
        <div class="nav-cta">
          <a href="/contact.html" class="btn btn-outline">Log In</a>
          <a href="/contact.html" class="btn btn-primary">Start Trial</a>
        </div>
      </nav>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const data = window.siteData.footer;

  footer.innerHTML = `
    <div class="container" style="display: flex; justify-content: space-between; font-family: var(--font-data); font-size: 0.8rem; text-transform: uppercase;">
      <span>&copy; ${new Date().getFullYear()} ${window.siteData.company.name}</span>
      <a href="${data.credit.url}" target="_blank" rel="noopener noreferrer" style="color: var(--color-ink);">${data.credit.text}</a>
    </div>
  `;
}
