const div =document.querySelector('div');
const p = document.querySelector('p');

const colors = ["Indigo", "Plum", "Aqua", "Crimson", "SeaGreen", "Coral", "Violet", "Lime", "Lemon", "Red", "Brown", "Navy"];


for (let i = 0; i < colors.length; i++) {
    div.innerHTML+=`<button class="btn" onclick="print(${[i]})">${colors[i]}</button>`
    
}


function print(i) {
 p.innerHTML+= colors[i] + ',  ';
 }

const colorBtn = document.getElementById("button-container");
const para = document.getElementById('output');

colorBtn.style.display = "flex";
colorBtn.style.flexWrap = "nowrap";
colorBtn.style.justifyContent = "space-around";
colorBtn.style.alignItems = "center";

para.style.fontSize = "1.5rem";
para.style.fontWeight = '700' ;
