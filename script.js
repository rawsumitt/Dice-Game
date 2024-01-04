const press = () => {
    var random = Math.floor(Math.random() * 6) + 1
    var image = document.querySelector("img")
    var head = document.getElementById("heading")
    switch (random) {
        case 1: image.setAttribute("src", "diceFaces/1.png")
            head.innerHTML = "don't worry!! try again"
            break
        case 2: image.setAttribute("src", "diceFaces/2.png")
            head.innerHTML = "do it again"
            break
        case 3: image.setAttribute("src", "diceFaces/3.png")
            head.innerHTML = "fair enough"
            break
        case 4: image.setAttribute("src", "diceFaces/4.png")
            head.innerHTML = "you can do better"
            break
        case 5: image.setAttribute("src", "diceFaces/5.png")
            head.innerHTML = "That's how you do it"
            break
        case 6: image.setAttribute("src", "diceFaces/6.png")
            head.innerHTML = "Hurreyy!! Jackpot"
            break
        default: head.innerHTML = "ERROR"
    }
}

