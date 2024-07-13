let theme = document.querySelector('.theme')

let main = document.querySelector('main')

theme.addEventListener('click', transition)

function transition() {
    main.classList.toggle('active')
}
