/* Design Panel — theme & accent picker */
(function() {
    var accents = [
        { name: 'None', color: 'transparent' },
        { name: 'Gold', color: '#c9a96e' },
        { name: 'Bronze', color: '#b8976a' },
        { name: 'Copper', color: '#b07855' },
        { name: 'Warm White', color: '#e8ddd0' },
        { name: 'Rose', color: '#c4878a' },
        { name: 'Sage', color: '#a8b89a' },
        { name: 'Sand', color: '#c9b99a' },
        { name: 'Silver', color: '#b0b8b8' },
        { name: 'Cream', color: '#d4c9a8' }
    ];

    var savedTheme = localStorage.getItem('pines-theme') || 'menu';
    var savedAccent = localStorage.getItem('pines-accent') || 'transparent';
    var collapsed = localStorage.getItem('pines-dp-collapsed') === 'true';

    // Theme/accent already applied by inline <head> script to prevent flash.

    // Build panel HTML
    var panel = document.createElement('div');
    panel.className = 'design-panel' + (collapsed ? ' collapsed' : '');

    var accentSwatches = accents.map(function(a, i) {
        var isActive = (a.color === savedAccent) || (a.color === 'transparent' && savedAccent === 'transparent');
        if (i === 0) {
            return '<div class="dp-swatch-none' + (isActive ? ' active' : '') + '" data-accent="transparent" title="None">&#x2715;</div>';
        }
        return '<div class="dp-swatch' + (isActive ? ' active' : '') + '" style="background:' + a.color + '" data-accent="' + a.color + '" title="' + a.name + '"></div>';
    }).join('');

    panel.innerHTML =
        '<div class="dp-header" id="dpToggle">' +
            '<span>Design</span>' +
            '<span class="dp-arrow">&#x25BC;</span>' +
        '</div>' +
        '<div class="dp-body">' +
            '<div class="dp-section">' +
                '<div class="dp-label">Theme</div>' +
                '<div class="dp-row">' +
                    '<button class="dp-theme-btn' + (savedTheme === 'green' ? ' active' : '') + '" data-theme="green">Soft Green</button>' +
                    '<button class="dp-theme-btn' + (savedTheme === 'slate' ? ' active' : '') + '" data-theme="slate">Slate Blue</button>' +
                    '<button class="dp-theme-btn' + (savedTheme === 'menu' ? ' active' : '') + '" data-theme="menu">Menu Match</button>' +
                '</div>' +
            '</div>' +
            '<div class="dp-section">' +
                '<div class="dp-label">Accent</div>' +
                '<div class="dp-row">' + accentSwatches + '</div>' +
            '</div>' +
        '</div>';

    document.body.appendChild(panel);

    // Remove old theme-toggle button if present
    var old = document.querySelector('.theme-toggle');
    if (old) old.remove();

    // Toggle collapse
    document.getElementById('dpToggle').addEventListener('click', function() {
        panel.classList.toggle('collapsed');
        localStorage.setItem('pines-dp-collapsed', panel.classList.contains('collapsed'));
    });

    // Theme buttons
    var themeClasses = ['theme-green', 'theme-slate'];
    panel.querySelectorAll('.dp-theme-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var theme = btn.dataset.theme;
            panel.querySelectorAll('.dp-theme-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            // Remove all theme classes, then add the selected one
            themeClasses.forEach(function(c) { document.documentElement.classList.remove(c); });
            if (theme !== 'menu') document.documentElement.classList.add('theme-' + theme);
            localStorage.setItem('pines-theme', theme);
        });
    });

    // Accent swatches
    panel.querySelectorAll('.dp-swatch, .dp-swatch-none').forEach(function(sw) {
        sw.addEventListener('click', function() {
            var color = sw.dataset.accent;
            panel.querySelectorAll('.dp-swatch, .dp-swatch-none').forEach(function(s) { s.classList.remove('active'); });
            sw.classList.add('active');
            document.documentElement.style.setProperty('--accent', color);
            localStorage.setItem('pines-accent', color);
        });
    });
})();
