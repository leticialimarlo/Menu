document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('li').forEach(li => li.classList.remove('menu-click'));
            this.classList.add('menu-click');
            setTimeout(() => this.classList.remove('menu-click'), 300);
        });
    });

    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;

    function toggleTheme() {
        body.classList.toggle('light');
        if (body.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '🌙 Mudar tema';
        } else {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '☀️ Mudar tema';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
        toggleBtn.textContent = '🌙 Mudar tema';
    } else {
        toggleBtn.textContent = '☀️ Mudar tema';
    }

    toggleBtn.addEventListener('click', toggleTheme);
});