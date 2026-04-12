document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    const elements = document.querySelectorAll('.btn-nav, h1, .arrow-link');

    const updateColors = () => {
        const isLight = document.body.classList.contains('light-theme');

        elements.forEach(el => {
            el.style.color = isLight ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';

            if (el.classList.contains('btn-nav')) {
                el.style.borderColor = isLight ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
            }
        });
    };

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    updateColors();

    elements.forEach(el => {
        el.style.transition = "all 0.3s ease";
        el.addEventListener('mouseenter', () => {
            const isLight = document.body.classList.contains('light-theme');

            el.style.backgroundColor = isLight ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
            el.style.color = isLight ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
        });

        el.addEventListener('mouseleave', () => {
            const isLight = document.body.classList.contains('light-theme');
            el.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            el.style.color = isLight ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
        });
    });
});

function changeTheme() {
    let theme = localStorage.getItem('theme');
    
    if (theme === 'light') {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }

    const elements = document.querySelectorAll('.btn-nav, h1, .arrow-link');
    const isLight = document.body.classList.contains('light-theme');
    elements.forEach(el => {
        el.style.color = isLight ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';

        if (el.classList.contains('btn-nav')) {
            el.style.borderColor = isLight ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
        }
    });
}
