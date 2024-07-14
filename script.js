let theme = document.querySelector('.theme')

let main = document.querySelector('main')

theme.addEventListener('click', transition)

function transition() {
    main.classList.toggle('active')

    let img = document.querySelector('.left-login img')
    if (main.classList.contains('active')) {
        img.setAttribute('src', 'animação/cat-astronaut-animate (2).svg')
    } else {
        img.setAttribute('src', 'animação/cat-astronaut.svg')
    }
}
