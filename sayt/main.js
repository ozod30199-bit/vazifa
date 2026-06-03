let randomSon = Math.floor(Math.random() * 100);

document.getElementById("son").innerHTML = randomSon;
document.getElementById("tugma").addEventListener("click", function(){
    let name = prompt("Ismingizni kiriting")
    document.getElementById("prompt").innerText = " " + name
})
let btn = document.querySelector(".tugma")

btn.addEventListener("click", function(){
    let name = prompt("Ismingizni kiriting")
    document.getElementById("enter tex").innerText = " " + name
})


setInterval(function(){
    let vaqt = new Date()
    document.getElementById("vaqt").innerText = vaqt.toLocaleTimeString()
}, 1)


let plusBtn = document.getElementById("increment")
let minusBtn = document.getElementById("decrement")

plusBtn.addEventListener("click", function(){
    let countDisplay = document.querySelector(".count-display")
    let count = parseInt(countDisplay.innerText) || 0
    count++
    countDisplay.innerText = count
})

minusBtn.addEventListener("click", function(){
    let countDisplay = document.querySelector(".count-display")
    let count = parseInt(countDisplay.innerText) || 0
    count--
    countDisplay.innerText = count
})

let colorpanel = document.getElementById("colorpanel")
let kvadrat2 = document.getElementById("kvadrat2")
console.log(colorpanel.children[0].id);
console.log(colorpanel.children);
let ozod = colorpanel.children;

for(let i=0; i<ozod.length; i++){
  ozod[i].addEventListener("click", function(){
  kvadrat2.style.backgroundColor=ozod[i].id
})
}
