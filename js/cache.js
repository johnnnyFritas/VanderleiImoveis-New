function addVersionToResources() {
    const version = new Date().getTime(); // Using timestamp as version
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    const scripts = document.querySelectorAll('script');

    stylesheets.forEach(sheet => {
        const href = sheet.getAttribute('href');
        sheet.setAttribute('href', `${href}?v=${version}`);
    });

    scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src) {
            script.setAttribute('src', `${src}?v=${version}`);
        }
    });
}

// Function to check for a new version of the site
function checkForNewVersion() {
    const currentVersion = localStorage.getItem('siteVersion') || '1.0.0';
    const newVersion = '1.0.1'; // This should be updated with the actual new version

    if (currentVersion !== newVersion) {
        localStorage.setItem('siteVersion', newVersion);
        addVersionToResources(); // Update resources with new version
        window.location.reload(true); // Force reload
    }
}

// Function to update stylesheets and scripts dynamically
function updateResources() {
    const version = new Date().getTime();
    
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(sheet => {
        const href = sheet.getAttribute('href');
        sheet.setAttribute('href', `${href}?v=${version}`);
    });

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src) {
            script.setAttribute('src', `${src}?v=${version}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    checkForNewVersion(); // Check for new version on page load
    updateResources(); // Update resources with current timestamp
});