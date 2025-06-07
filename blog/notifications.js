document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('notification-btn');
    const popup = document.getElementById('notification-popup');

    btn.addEventListener('click', () => {
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });
});
