const btnDarkMode = document.querySelector(".dark-mode-btn");

// проверка на включение темного режима //
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} 

// проверка на включение темного режима на винде//

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
}

// включение ночного режима кнопкой //
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');
    }
           
}



$(window).on('load', function(){
    
     // video
     $('#header').vide('./video/covver', {
        bgColor: '#f6f6f6'
    
    });

        });


/* ---------------------------------------------------------------- */

  