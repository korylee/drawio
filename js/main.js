/**
 * Copyright (c) 2020-2025, JGraph Holdings Ltd
 * Copyright (c) 2020-2025, draw.io AG
 */
/**
 * URL Parameters and protocol description are here:
 *
 * https://www.drawio.com/doc/faq/supported-url-parameters
 *
 * Parameters for developers:
 *
 * - dev=1: For developers only
 * - test=1: For developers only
 * - export=URL for export: For developers only
 * - ignoremime=1: For developers only (see DriveClient.js). Use Cmd-S to override mime.
 * - createindex=1: For developers only (see etc/build/README)
 * - filesupport=0: For developers only (see Editor.js in core)
 * - savesidebar=1: For developers only (see Sidebar.js)
 * - pages=1: For developers only (see Pages.js)
 * - lic=email: For developers only (see LicenseServlet.java)
 * --
 * - networkshapes=1: For testing network shapes (temporary)
 */

import Bootstrap from "./diagramly/bootstrap";

// Parses URL parameters
window.urlParams = (function () {
  var result = new Object();
  var params = window.location.search.slice(1).split("&");

  for (var i = 0; i < params.length; i++) {
    var idx = params[i].indexOf("=");

    if (idx > 0) {
      result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
    }
  }

  return result;
})();

// Forces CDN caches by passing URL parameters via URL hash
if (window.location.hash != null && window.location.hash.substring(0, 2) == "#P") {
  try {
    var params = urlParams;
    urlParams = JSON.parse(decodeURIComponent(window.location.hash.substring(2)));

    if (urlParams.hash != null) {
      window.location.hash = urlParams.hash;
      delete urlparams.hash;
    }

    for (var key in params) {
      if (urlParams[key] == null) {
        urlParams[key] = params[key];
      }
    }
  } catch (e) {
    // ignore
  }
}

// Global variable for desktop
window.mxIsElectron = navigator.userAgent != null && navigator.userAgent.toLowerCase().indexOf(" electron/") > -1 && navigator.userAgent.indexOf(" draw.io/") > -1;

/**
 * Adds meta tag to the page.
 */
window.mxmeta = function mxmeta(name, content, httpEquiv) {
  try {
    var s = document.createElement("meta");

    if (name != null) {
      s.setAttribute("name", name);
    }

    s.setAttribute("content", content);
    s.setAttribute("defer", "true");

    if (httpEquiv != null) {
      s.setAttribute("http-equiv", httpEquiv);
    }

    var t = document.getElementsByTagName("meta")[0];
    t.parentNode.insertBefore(s, t);
  } catch (e) {
    // ignore
  }
};

/**
 * Synchronously adds scripts to the page.
 */
var mxscript = (window.mxscript = function mxscript(src, onLoad, id, dataAppKey, noWrite, onError) {
  var _resolve;
  var _reject;
  var promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });
  var s = document.createElement("script");
  // s.setAttribute("type", "module");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", src);

  if (id != null) {
    s.setAttribute("id", id);
  }

  if (dataAppKey != null) {
    s.setAttribute("data-app-key", dataAppKey);
  }

  var r = false;
  s.onload = s.onreadystatechange = function () {
    if (!r && (!this.readyState || this.readyState == "complete")) {
      r = true;
      onLoad && onLoad();
      _resolve();
    }
  };

  s.onerror = function (e) {
    onError && onError("Failed to load " + src, e);
    _reject("Failed to load " + src, e);
  };

  document.head.appendChild(s);

  var t = document.getElementsByTagName("script")[0];

  if (t != null) {
    // t.parentNode.insertBefore(s, t);
    // t.parentNode.appendChild(s);
  }
  return promise;
});

/**
 * Asynchronously adds scripts to the page.
 */
window.mxinclude = function mxinclude(src) {
  var g = document.createElement("script");
  g.type = "text/javascript";
  g.async = true;
  g.src = src;

  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(g, s);
};

/**
 * Adds meta tags with application name (depends on offline URL parameter)
 */
(function () {
  var name = "diagrams.net";
  mxmeta("apple-mobile-web-app-title", name);
  mxmeta("application-name", name);

  if (mxIsElectron) {
    mxmeta(
      null,
      "default-src 'self'; script-src 'self' 'sha256-6g514VrT/cZFZltSaKxIVNFF46+MFaTSDTPB8WfYK+c=' " +
        (urlParams["dev"] != "1" ? "" : " 'unsafe-eval'") +
        "; " +
        "connect-src 'self' https://*.draw.io https://*.diagrams.net https://fonts.googleapis.com https://fonts.gstatic.com; " +
        "img-src * data:; media-src *; font-src * data:; frame-src 'none'; style-src 'self' 'unsafe-inline' " +
        "https://fonts.googleapis.com; base-uri 'none';child-src 'self';object-src 'none';",
      "Content-Security-Policy",
    );
  }
})();

// Checks for local storage
window.isLocalStorage = false;

try {
  isLocalStorage = urlParams["local"] != "1" && typeof localStorage != "undefined";
} catch (e) {
  // ignored
}

window.mxScriptsLoaded = false;
window.mxWinLoaded = false;

function checkAllLoaded() {
  if (mxScriptsLoaded && mxWinLoaded) {
    App.main();
  }
}

var t0 = new Date();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Changes paths for local development environment
(async function () {
  // Used to request grapheditor/mxgraph sources in dev mode
  window.mxDevUrl = "";

  // Used to request draw.io sources in dev mode
  window.drawDevUrl = "";
  window.geBasePath = "js/grapheditor";
  window.mxBasePath = "mxgraph/src";

  await import('./PreConfig');
  await import('./diagramly/Init')
  await import('./grapheditor/Init');
  // mxClient
  await import('../mxgraph/src/index.js');
  await sleep(1200);

  await Bootstrap();

  // Electron
  if (mxIsElectron) {
    mxscript("js/desktop/DesktopLibrary.js");
    mxscript("js/desktop/ElectronApp.js");
  }

  await import('./PostConfig');

  await sleep(3200);
  typeof AJS === "undefined" && App.main();
})();

// Adds basic error handling
window.onerror = function () {
  var status = document.getElementById("geStatus");

  if (status != null) {
    status.innerHTML = "Page could not be loaded. Please try refreshing.";
  }
};
