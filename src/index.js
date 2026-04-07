import Handlebars from "handlebars";

import dataSkipLinks from "../qgds-bootstrap5-release/sample-data/skiplinks/skipLinks.data.json";
import dataHeader from "../qgds-bootstrap5-release/sample-data/header/header.variant.masterBrand.data.json";
import dataNavbar from "../qgds-bootstrap5-release/sample-data/navbar/navbar.data.json";
import dataBreadcrumbs from "../qgds-bootstrap5-release/sample-data/breadcrumbs/breadcrumbs.data.json";
import dataFooter from "../qgds-bootstrap5-release/sample-data/footer/footer.data.json";

// Function to load Handlebars, its helpers and precompiled templates
async function loadHandlebars() {
    window.Handlebars = Handlebars;
    Handlebars.templates = Handlebars.templates || {};

    // Bundled of helpers and partials with init(Handlebars)
    await import("../qgds-bootstrap5-release/assets/node/handlebars.init.min.js");

    // Load precompiled templates
    await import("../qgds-bootstrap5-release-precompiled/skipLinks.precompiled.js");
    await import("../qgds-bootstrap5-release-precompiled/header.precompiled.js");
    await import("../qgds-bootstrap5-release-precompiled/navbar.precompiled.js");
    await import("../qgds-bootstrap5-release-precompiled/breadcrumbs.precompiled.js");
    await import("../qgds-bootstrap5-release-precompiled/footer.precompiled.js");
}

// Main function to render all templates with their respective sample data
async function initTemplates() {
    await loadHandlebars();

    initTemplate({
        componentName: 'skipLinks',
        data: dataSkipLinks,
        containerId: 'skiplinks-container'
    });
    initTemplate({
        componentName: 'header',
        data: dataHeader,
        containerId: 'header-container'
    });
    initTemplate({
        componentName: 'navbar',
        data: dataNavbar,
        containerId: 'navbar-container'
    });
    initTemplate({
        componentName: 'breadcrumbs',
        data: dataBreadcrumbs.default,
        containerId: 'breadcrumb-container'
    });

    initTemplate({
        componentName: 'footer',
        data: { ...dataFooter, variantClass: 'dark' },
        containerId: 'footer-container'
    });

}

// Helper function to get template html and render into the page (by containerId)
function initTemplate({ componentName, data, containerId }) {
    const template = Handlebars.templates[`${componentName}.hbs`];
    if (!template) {
        console.error(`Template ${componentName}.hbs not found`);
        return;
    }
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container #${containerId} not found`);
        return;
    }

    const html = template(data);
    if (html) {
        container.outerHTML = html;
    }
}

// Init all the required templates
initTemplates();