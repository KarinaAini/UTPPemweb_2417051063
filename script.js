document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.btn-nav, .arrow-link');
    
    elements.forEach(el => {
        el.style.transition = "all 0.3s ease";
        el.addEventListener('mouseenter', () => {
            el.style.backgroundColor = 'rgb(255, 255, 255)';
            el.style.color = 'rgb(0, 0, 0)';             
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
            el.style.color = 'rgb(255, 255, 255)';
        });
    });
});
