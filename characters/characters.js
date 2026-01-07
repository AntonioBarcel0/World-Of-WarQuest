const classBanners = document.querySelectorAll('.class-banner');

classBanners.forEach(banner => {
    banner.addEventListener('click', () => {
        const selectedClass = banner.getAttribute('data-class');
        
        localStorage.setItem('selectedClass', selectedClass);
        
        window.location.href = '../quests/quests.html';
    });
});
