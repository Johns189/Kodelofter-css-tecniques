function toggleTheme() {
    // Logic for toggeling the theme
    console.log("Theme button clicked")

    //Find the <html> elemant
    let htmlElement = document.querySelector("html")

    //read the current data-theme value
    let currentTheme = htmlElement.dataset.theme

    //if current theme ==="dark" then data-theme "light"
    if (currentTheme === "dark") {
        htmlElement.dataset.theme = "light"
    } else {
        //else else data-theme "dark"
        htmlElement.dataset.theme = "dark"
    }
}

//Find the button that should toggle the theme
let themeButton = document.getElementById("toggle-theme")
themeButton.addEventListener("click", toggleTheme)