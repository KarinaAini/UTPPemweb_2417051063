document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = "Ganti Tema";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "10px 20px";
    toggleBtn.style.borderRadius = "20px";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.zIndex = "1000";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    const elements = document.querySelectorAll('.btn-nav, h1, .arrow-link');
    
    elements.forEach(el => {
        el.style.transition = "all 0.3s ease";

        el.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('light-theme')) {
                el.style.backgroundColor = 'rgb(0, 0, 0)'; 
                el.style.color = 'rgb(255, 255, 255)';
            } else {
                el.style.backgroundColor = 'rgb(255, 255, 255)';
                el.style.color = 'rgb(0, 0, 0)';
            }
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            el.style.color = document.body.classList.contains('light-theme') ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
        });
    });
});
