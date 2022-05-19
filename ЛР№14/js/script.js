/* JavaScript код */
const white = document.getElementById("white");
const dark = document.getElementById("dark");
const texture = document.getElementById("texture");
const root = document.documentElement;
const card = document.getElementById("cards");
// Функции для смены темы
function whiteTheme() {
    if (dark.classList.contains('active')){
        dark.classList.remove("active");
        white.classList.add("active");
        root.removeAttribute("data-theme-name");
        root.setAttribute("data-theme-name","light");
    }
    if (texture.classList.contains("active")){
        texture.classList.remove("active");
        white.classList.add("active");
        root.removeAttribute("data-theme-name");
        root.setAttribute("data-theme-name","light");
    }
}
function darkTheme() {
    if (white.classList.contains('active')){
        white.classList.remove("active");
        dark.classList.add("active");
        root.removeAttribute("data-theme-name");
        root.setAttribute("data-theme-name","dark");
    }
    if (texture.classList.contains("active")){
        texture.classList.remove("active");
        dark.classList.add("active");
        root.removeAttribute("data-theme-name");
        root.setAttribute("data-theme-name","dark");
    }
}
function textureTheme() {
    if (white.classList.contains('active')){
        white.classList.remove("active");
        texture.classList.add("active");
        root.removeAttribute("data-theme-name");
        root.setAttribute("data-theme-name","texture");
    }
    if (dark.classList.contains("active")){
        dark.classList.remove("active");
        texture.classList.add("active");
        root.removeAttribute("data-theme-name");
        root.setAttribute("data-theme-name","texture");
    }
}
// Функции для отображения карточек
function tileStyle() {
    if (card.classList.contains('standard')){
        document.getElementById("standard").classList.remove("active");
        card.classList.remove("standard");
        card.classList.add("tile");
        document.getElementById("tile").classList.add("active");
    }
    if (card.classList.contains("compact")){
        document.getElementById("compact").classList.remove("active")
        card.classList.remove("compact");
        card.classList.add("tile");
        document.getElementById("tile").classList.add("active");
    }
}
function standardStyle() {
    if (card.classList.contains('tile')){
        document.getElementById("tile").classList.remove("active")
        card.classList.remove("tile");
        card.classList.add("standard");
        document.getElementById("standard").classList.add("active");
    }
    if (card.classList.contains("compact")){
        document.getElementById("compact").classList.remove("active")
        card.classList.remove("compact");
        card.classList.add("standard");
        document.getElementById("standard").classList.add("active");
    }
}
function compactStyle() {
    if (card.classList.contains('standard')){
        document.getElementById("standard").classList.remove("active")
        card.classList.remove("standard");
        card.classList.add("compact");
        document.getElementById("compact").classList.add("active");
    }
    if (card.classList.contains("tile")){
        document.getElementById("tile").classList.remove("active")
        card.classList.remove("tile");
        card.classList.add("compact");
        document.getElementById("compact").classList.add("active");
    }
}