function changeMode(size, weight, transform, background, color) {
    return function () {
        document.documentElement.style["font-size"] = size;
        document.documentElement.style["font-weight"] = weight;
        document.documentElement.style["text-transform"] = transform;
        document.documentElement.style["background-color"] = background;
        document.documentElement.style["color"] = color;
    }

}

function main() {

    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!"
    document.body.appendChild(paragraph);

    const buttonSpooky = document.createElement("button");
    buttonSpooky.innerHTML = "Spooky";
    buttonSpooky.onclick = function () { spooky(); };
    document.body.appendChild(buttonSpooky);

    const buttonDark = document.createElement("button");
    buttonDark.innerHTML = "Dark mode";
    buttonDark.onclick = function () { darkMode(); };
    document.body.appendChild(buttonDark);

    const buttonScream = document.createElement("button");
    buttonScream.innerHTML = "Scream mode";
    buttonScream.onclick = function () { screamMode();; }
    document.body.appendChild(buttonScream);

}

main();