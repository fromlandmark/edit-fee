// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Prevent F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+I (Windows/Linux) or Cmd+Shift+I (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
    }
    // Prevent Cmd+Option+I (Mac)
    if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+J (Windows/Linux) or Cmd+Option+J (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    // Prevent Ctrl+Shift+C (Windows/Linux) or Cmd+Option+C (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
    // Prevent Ctrl+U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
    }
});
