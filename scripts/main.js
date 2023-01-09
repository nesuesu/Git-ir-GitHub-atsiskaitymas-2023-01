

// INTRO BUTTON
document.querySelector("#buttonIntro").addEventListener("click", e=>{
    console.log("Paspaudėte Intro mygtuką")
    document.querySelector("#intro").style.display = "block";
    document.querySelector("#home").style.display = "none";
})

// WORK BUTTON
document.querySelector("#buttonWork").addEventListener("click", e=>{
    console.log("Paspaudėte Work mygtuką")
    document.querySelector("#work").style.display = "block";
    document.querySelector("#home").style.display = "none";
})

// ABOUT BUTTON
document.querySelector("#buttonAbout").addEventListener("click", e=>{
    console.log("Paspaudėte About mygtuką")
    document.querySelector("#about").style.display = "block";
    document.querySelector("#home").style.display = "none";
})

// CONTACT BUTTON
document.querySelector("#buttonContact").addEventListener("click", e=>{
    console.log("Paspaudėte Contact mygtuką")
    document.querySelector("#contact").style.display = "block";
    document.querySelector("#home").style.display = "none";
})

function show_home(){
    document.querySelector("#home").style.display = "block";
    document.querySelector("#intro").style.display = "none";
    document.querySelector("#work").style.display = "none";
    document.querySelector("#about").style.display = "none";
    document.querySelector("#contact").style.display = "none";
}

// INTRO CLOSE BUTTON
document.querySelectorAll(".close")[0].addEventListener("click", e=>{
    console.log("Paspaudėte Close mygtuką");
    show_home();
})

// WORK CLOSE BUTTON
document.querySelectorAll(".close")[1].addEventListener("click", e=>{
    console.log("Paspaudėte Close mygtuką");
    show_home();
})

// ABOUT CLOSE BUTTON
document.querySelectorAll(".close")[2].addEventListener("click", e=>{
    console.log("Paspaudėte Close mygtuką");
    show_home();
})

// CONTACT CLOSE BUTTON
document.querySelectorAll(".close")[3].addEventListener("click", e=>{
    console.log("Paspaudėte Close mygtuką");
    show_home();
})