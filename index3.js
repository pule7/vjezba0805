var h1 = document.createElement("h1");

h1.appendChild(document.createTextNode("Karlovac"));

var bodyElem = document.querySelector("body");

bodyElem.prepend(h1);

var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Karlovačko"];

var dDescr = document.querySelector(".description");

dDescr.innerHTML = "Grad na <h3>5 rijeka</h3>";

var h3 = document.querySelector("h3");

h3.style.display = "inline";

var divInfo = document.createElement("div");

divInfo.classList.add("info");

divInfo.textContent = "Peta rijeka je piva";

var footElement = document.getElementById("footer");

bodyElem.insertBefore(divInfo, footElement);


/*rijeke dodajemo u ul, svako ime dodajemo u li */

var ul = document.querySelector("ul");

console.log(ul.childElementCount);

//debugger;

for( let i = ul.childElementCount; i > 0; i--) {
    let child = ul.children[i - 1];
    ul.removeChild[child];
}


for( let i = 0; i < 5; i++){
    let li = document.createElement("li");
    li.textContent = rijeke[i];
    ul.appendChild(li);
}