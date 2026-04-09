document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.btn-nav, h1, .arrow-link');
    
    elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.backgroundColor = 'transparent';
            el.style.color = 'white';
        });
    });
