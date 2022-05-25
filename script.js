let lapCompleted = 0;
function increment() {
    lapCompleted += 1;
    document.getElementById("no-of-pp").innerText = lapCompleted;
}
// let showCountedLap = document.getElementById("no-of-pp");
// showCountedLap.innerText = lapCompleted;
// create save button
    

let welcomeEl = document.getElementById("welcome-el");
let myName = "Vy";
let greeting = "Welcome Back";
welcomeEl.innerText = greeting + ", " + myName + "!";
welcomeEl.innerText += "👋"

let saveEl = document.getElementById("save-el");
console.log(saveEl);
function save () {
    let PreEntry = " " + lapCompleted + " " + "-" + " ";
    saveEl.innerText += PreEntry;
    console.log(lapComplete);
}

