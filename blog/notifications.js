document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('notification-btn');
    const popup = document.getElementById('notification-popup');

    btn.addEventListener('click', () => {
        popup.classList.toggle('visible');
        btn.setAttribute('aria-expanded', popup.classList.contains('visible'));
    });

    // Remember to check and test this part (note for myself Mazen)
    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target) && event.target !== btn) {
            popup.classList.remove('visible');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
    });
});
