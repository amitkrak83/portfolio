document.addEventListener("DOMContentLoaded", function() {
  const sidebarContainer = document.getElementById("project-sidebar");
  if (!sidebarContainer) return;

  // Determine path offset (if pages are inside a subfolder, relative pathing is needed)
  const isSubFolder = window.location.pathname.includes("/work/");
  const fetchPath = isSubFolder ? "sidebar.html" : "work/sidebar.html";

  fetch(fetchPath)
    .then(response => {
      if (!response.ok) throw new Error("Sidebar fetch failed");
      return response.text();
    })
    .then(html => {
      sidebarContainer.innerHTML = html;

      // Extract current filename (e.g. "qa-automation.html")
      const currentPath = window.location.pathname.split("/").pop();
      
      // Select the matching nav-item and add the active styling
      const activeLink = sidebarContainer.querySelector(`.nav-item[data-page="${currentPath}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    })
    .catch(error => {
      console.error("Error loading sidebar:", error);
    });
});
