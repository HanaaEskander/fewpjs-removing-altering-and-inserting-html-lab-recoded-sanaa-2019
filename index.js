// Write your code here!
document.querySelector('main#main').remove();
let header = document.createElement('h1');
header.setAttribute("id","victory");
header.innerHTML = "Wow I Rock";
document.body.appendChild(header);