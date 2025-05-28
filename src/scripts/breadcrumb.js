/* filepath: c:\Users\maxim\OneDrive\Documenten\1. Artevelde\Jaar 1\Semester 2\IT Portfolio\portfolio\portfolio-ClaeysMaxim\src\scripts\breadcrumb.js */
export function setupBreadcrumb() {
  // Don't show breadcrumb on homepage
  if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    return;
  }

  const main = document.querySelector('main');
  if (!main) return;

  // Page mapping
  const pageNames = {
    'projects.html': 'Projects',
    'about.html': 'About',
    'contact.html': 'Contact'
  };

  // Get current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const currentPageName = pageNames[currentPage];

  if (!currentPageName) return;

  // Create breadcrumb HTML
  const breadcrumbHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb navigation">
      <ol class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a href="index.html" class="breadcrumb__link">Home</a>
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__separator">›</span>
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__current" aria-current="page">${currentPageName}</span>
        </li>
      </ol>
    </nav>
  `;

  // Insert breadcrumb at the beginning of main
  main.insertAdjacentHTML('afterbegin', breadcrumbHTML);
}