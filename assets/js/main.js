function abrirFicha(caminho) {
    window.open(caminho, '_blank');
}

// Animação scroll simples
const animarElementos = document.querySelectorAll('[data-animar]');
function animarScroll() {
    const topoPagina = window.pageYOffset + window.innerHeight * 0.85;
    animarElementos.forEach(el => {
        if (topoPagina > el.offsetTop) {
            el.classList.add('ativo');
        }
    });
}
window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

