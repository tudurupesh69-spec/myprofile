document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".nav-links a");

    function setActiveMenu() {
        const currentHash = window.location.hash || "#hero";

        menuLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === currentHash
            );
        });
    }

    // Update when a menu is clicked or the URL hash changes
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            menuLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    window.addEventListener("hashchange", setActiveMenu);

    // Set the active menu on page load
    setActiveMenu();
});
