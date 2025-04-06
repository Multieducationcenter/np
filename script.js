// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Right-click is disabled on this page.");
});

// Disable F12 (Developer Tools) and Ctrl+Shift+I (Inspect Element)
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
        alert("Developer tools are disabled on this page.");
    }
});
