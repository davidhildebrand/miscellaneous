// ==UserScript==
// @name       harvardredirect
// @version    160510
// @description  Redirect journal pages through the Harvard proxy.
// @match      *://www.nature.com/*
// @match      *://www.sciencemag.org/*
// @match      *://www.pnas.org/*
// @match      *://www.cell.com/*
// @match      *://www.jneurosci.org/*
// @match      *://www.sciencedirect.com/*
// @match      *://onlinelibrary.wiley.com/*
// @match      *://link.springer.com/*
// @match      *://www.annualreviews.org/*
// ==/UserScript==

if((window.location.hostname.match(/\.com/i) != null) && (window.location.hostname.match(/\.ezp/i) == null)) {
  window.location.href = window.location.href.replace(/\.com/, '\.com\.ezp-prod1\.hul\.harvard\.edu');
} else if((window.location.hostname.match(/\.org/i) != null) && (window.location.hostname.match(/\.ezp/i) == null)) {
  window.location.href = window.location.href.replace(/\.org/, '\.org\.ezp-prod1\.hul\.harvard\.edu');
} else if((window.location.hostname.match(/\.net/i) != null) && (window.location.hostname.match(/\.ezp/i) == null)) {
  window.location.href = window.location.href.replace(/\.net/, '\.net\.ezp-prod1\.hul\.harvard\.edu');
} else {
  return;
}

// ==/UserScript==
