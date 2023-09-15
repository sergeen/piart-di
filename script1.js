const machMedia = window.matchMedia('(prefers-color-scheme: dark)');

if (machMedia.matches) {
    document.getElementById('body').classList.add('dark')
} else {
    document.getElementById('body').classList.add('dark')
}
