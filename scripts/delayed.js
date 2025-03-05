// eslint-disable-next-line import/no-cycle
import { fetchPlaceholders, sampleRUM } from './lib-franklin.js';
import loadCookieConsent from './cookie-consent/lib-cookie-consent.js';
import { analyticsSetConsent } from './analytics/lib-analytics.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

// CMP consent
try {
  await fetchPlaceholders();
} catch (e) { /* ignore */ }
loadCookieConsent();

// also check consent stored in localstorage used while developing
const analyticsConsent = localStorage.getItem('consent_status_ANALYTICS');
if (analyticsConsent) {
  await analyticsSetConsent(analyticsConsent === 'ALLOW');
}

// Adding logic to Sign In Modal
function addSignInModalLogic() {
  // Get the modal
  var signInModal = document.getElementById("signInModal");
  // Get the button that opens the modal
  var signInButton = document.getElementById("signInButton");
  // Get the <span> element that closes the modal
  var signInCloseSpan = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  if (signInButton) {
    signInButton.onclick = function() {
      signInModal.style.display = "block";
    }
  }
  // When the user clicks on <span> (x), close the modal
  if (signInCloseSpan) {
    signInCloseSpan.onclick = function() {
      signInModal.style.display = "none";
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == signInModal) {
      signInModal.style.display = "none";
    }
  }
}

addSignInModalLogic();

document.getElementById("loginSubmitButton").onclick = function () {
  let emailValue = document.getElementById("userEmail").value;
  localStorage.setItem("email", emailValue);
  document.getElementById("signInButton").style.display = "none";
  document.getElementById("signOutButton").style.display = "block";
  signInModal.style.display = "none";
  location.href=location.href;
}

document.getElementById("signOutButton").onclick = function () {
  localStorage.removeItem("email");
  document.getElementById("signOutButton").style.display = "none";
  document.getElementById("signInButton").style.display = "block";
  location.href=location.href;
}
