var h1 = document.createElement("h1");

h1.appendChild(document.createTextNode("Ovo je tekst unutar h1"));

var bodyElem = document.querySelector("body");

bodyElem.prepend(h1);

var divInfo = document.createElement("div");
divInfo.classList.add("info");

var footElement = document.querySelector("#footer");

bodyElem.insertBefore(divInfo, footElement);


/* u ul trebamo dodati 3 li-a */

var ul = document.querySelector("ul");


for(let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
}