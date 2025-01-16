import { decorateIcons, getMetadata } from '../../scripts/lib-franklin.js';
import { getSiteRoot } from '../../scripts/scripts.js';
/**
 * collapses all open nav sections
 * @param {Element} sections The container element
 */

function collapseAllNavSections(sections) {
  sections.querySelectorAll('.nav-sections > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', 'false');
  });
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : (window.wknd.demoConfig.demoBase || '/nav');

  let navURL = `${getSiteRoot()}${navPath}.plain.html`;
  let updatedNavUrl = navURL.replace(/about-us\/|faqs\/|magazine\/.+\/|adventures\/.+\//g, "/");

  const resp = await fetch(updatedNavUrl.replace("//", "/"), window.location.pathname.endsWith('/nav') ? { cache: 'reload' } : {});
  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.innerHTML = html;
    decorateIcons(nav);

    const classes = ['brand', 'sections', 'tools'];
    classes.forEach((e, j) => {
      const section = nav.children[j];
      if (section) section.classList.add(`nav-${e}`);
    });

    const navSections = [...nav.children][1];
    if (navSections) {
      navSections.querySelectorAll(':scope > ul > li').forEach((navSection) => {
        if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
        navSection.addEventListener('click', () => {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          collapseAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        });
      });
    }

    // hamburger for mobile
    const hamburger = document.createElement('div');
    hamburger.classList.add('nav-hamburger');
    hamburger.innerHTML = '<div class="nav-hamburger-icon"></div>';
    hamburger.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      document.body.style.overflowY = expanded ? '' : 'hidden';
      nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
    const topBar = document.createElement('div');
    topBar.classList.add('header-topbar');
    block.prepend(topBar);
    topBar.innerHTML = '<button onclick="doLogout(event)" style="display: none;" id="signOutButton">Sign Out</button><button id="signInButton">Sign In</button><div class="header-markets"><span class="icon icon-flag-us"></span>EN-US<span class="header-chevron-down"></span></div>';
    nav.prepend(hamburger);
    const signInModal = document.createElement('div');
    signInModal.classList.add('modal');
    signInModal.setAttribute('id', 'signInModal');
    signInModal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><form><div class="container"><label class="sign-in-input" for="email">Email</label><input type="text" placeholder="Enter email" name="email" id="userEmail" required><br/><label class="sign-in-input" for="psw">Password</label><input type="password" placeholder="Enter Password" name="psw" required><br/><button id="loginSubmitButton" type="button">Login</button></div></form></div>';
    document.body.prepend(signInModal);
    nav.setAttribute('aria-expanded', 'false');
    decorateIcons(block);
    block.append(nav);
  }
}
