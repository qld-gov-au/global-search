import Handlebars from "handlebars";
import QGDSBundle from "@qld-gov-au/qgds-bootstrap5/dist/assets/node/handlebars.init.min.js";

import dataSkipLinks from "@qld-gov-au/qgds-bootstrap5/dist/sample-data/skiplinks/skipLinks.data.json";
import dataHeader from "@qld-gov-au/qgds-bootstrap5/dist/sample-data/header/header.variant.masterBrand.data.json";
import dataNavbar from "@qld-gov-au/qgds-bootstrap5/dist/sample-data/navbar/navbar.data.json";
import dataBreadcrumbs from "@qld-gov-au/qgds-bootstrap5/dist/sample-data/breadcrumbs/breadcrumbs.data.json";
import dataFooter from "@qld-gov-au/qgds-bootstrap5/dist/sample-data/footer/footer.data.json";

// Function to load Handlebars, its helpers and precompiled templates
async function loadHandlebars() {
    window.Handlebars = Handlebars;
    Handlebars.templates = Handlebars.templates || {};

    // Bundled of helpers and partials with init(Handlebars)
    QGDSBundle.init(Handlebars);

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