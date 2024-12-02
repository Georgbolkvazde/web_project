document.addEventListener('DOMContentLoaded', () => {
    // Приветствие по времени суток
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hours = new Date().getHours();
        greetingElement.textContent = hours < 12 ? 'Labrīt!' :
                                      hours < 18 ? 'Labdien!' : 'Labvakar!';
    }

    // Кнопка "Наверх"
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});