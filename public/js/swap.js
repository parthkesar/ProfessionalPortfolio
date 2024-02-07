let arr = ["Software Engineer ", "FullStack Web Developer ", "System Designer ", "Database Administrator ", "Data Analysist ", "Data Scientist ", "Algorithmist "];
let sp = document.getElementById("vartext");
let i = 0;
let it = 0;


setInterval(()=>{
    if (it == arr.length) {
        it = 0;
    }

    if(i == arr[it].length){
        it += 1;
        i = 0;
        sp.innerHTML = "";
    }

    sp.innerHTML += arr[it].charAt(i);
    i++;

    
}, 350);

setInterval(()=>{
    if (sp.style.borderRight == "2px solid rgb(47, 0, 255)") {
        sp.style.borderRight = "2px solid white"
    }else{
        sp.style.borderRight = "2px solid rgb(47, 0, 255)";
    }
    
}, 300);