function darkmode() {
    const nav_bar = document.querySelector(".nav-bar")
    const index_win = document.querySelector('.index-window')
    const body = document.body
    const main_btn = document.querySelector(".main-btn")
    const wasDarkmode = localStorage.getItem('darkmode') == 'true'
    const def_btn = document.querySelector('.default-btn')

    localStorage.setItem('darkmode', !wasDarkmode)
    nav_bar.classList.toggle('dark-mode-nav', !wasDarkmode)
    index_win.classList.toggle('dark-mode-index', !wasDarkmode)
    body.classList.toggle('dark-mode-body', !wasDarkmode)
}

document.querySelector('.theme-btn').addEventListener('click', darkmode)