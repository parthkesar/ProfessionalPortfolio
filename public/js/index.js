const list = '<span onclick="menuloadagain()" style="position: absolute; top: 1px; left: 1px; color: rgb(47, 0, 255); " id="show" > <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/> <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/> <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/> </svg> </span> ';
const resume = '<a href="" id="resume" target="_blank">RESUME</a>';
const tx = '<h1 style="text-align: center; margin-top: 10vh; width: 100%;">I am a <span style="color: rgb(47, 0, 255); border-right: 2px solid rgb(47, 0, 255); text-decoration: underline;" id="vartext"></span></h1>';
const arr = ["Software Engineer ", "FullStack Web Developer ", "System Designer ", "Database Administrator ", "Data Analysist ", "Data Scientist ", "Algorithmist "];
const resdetails = '<ul style="font-size: larger; list-style-position: inside; margin: 22px; width: 50%;"><li class="maindetails"><b>Name:- </b>Parth Kesar</li><li class="maindetails"><b>Date of Birth:- </b>5<sup>th</sup> November 2007</li><li class="maindetails"><b>Birth Place:- </b>Chandigarh, India</li><li class="maindetails"><b>Nationality:- </b>Indian</li></ul>';

function initial() {
    document.getElementById("main").innerHTML = list + resume + tx + resdetails;
    let sp = document.getElementById("vartext");
    let i = 0;
    let it = 0;
    console.log("about me clicked");
    setInterval(() => {
        if (it == arr.length) {
            it = 0;
        }

        if (i == arr[it].length) {
            it += 1;
            i = 0;
            sp.innerHTML = "";
        }

        sp.innerHTML += arr[it].charAt(i);
        i++;
    }, 200);

    setInterval(() => {
        if (sp.style.borderRight == "2px solid rgb(47, 0, 255)") {
            sp.style.borderRight = "2px solid white"
        } else {
            sp.style.borderRight = "2px solid rgb(47, 0, 255)";
        }
    }, 300);
}


initial();
function set() {
    const social = '<ul style="display: flex; justify-content: space-around; align-items: center; position: absolute; bottom:4vh; list-style-type: none;" id="contactkalink"><li class="socialMedia"><a href="" target="_blank"><img src="/images/facebook.png" alt="" style="height: 1cm; width: 1cm;"></a></li><li class="socialMedia"><a href="" target="_blank"><img src="/images/instagram.png" alt="" style="height: 1cm; width: 1cm;"></a></li><li class="socialMedia"><a href="" target="_blank"><img src="/images/linkedin.png" alt="" style="height: 1cm; width: 1cm;"></a></li><li class="socialMedia"><a href="" target="_blank"><img src="/images/twitter.png" alt="" style="height: 1cm; width: 1cm;"></a></li></ul>';
    const text = '<form action="/contact" method="post" id="contactform"> <label for="companyName">Organisation / Your Name:-</label> <br> <input type="text" name="companyName" id="companyName" placeholder="Organisation / Your Name:-" required> <br> <label for="email" style="margin-top: 1cm;">Email:-</label> <br> <input type="email" name="email" id="email" placeholder="Email" required> <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Message" style="margin-top: 1cm;"></textarea> <input type="submit" value="Submit"> <div style="width: 100%; position: relative; width: 100%; display: flex; margin-top: 0.5cm;"> <div class="text" style="border-top: 2px solid rgba(128, 128, 128, 0.589); border-right: 2px solid rgba(128, 128, 128, 0.589);"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16"> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" /> </svg> </div> <div class="text"> <div> <a href="mailto:parthkesar@official.com" style="width: 100%; display: inline-block; color: #087990;"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16"> <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" /> <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" /> </svg> </a> </div> </div> </form>';
    document.getElementById("main").innerHTML = list + resume + social + text;
    document.getElementById("contactMessager").style.backgroundColor = 'blue';
}

function menuload() {
    document.getElementById("manu").style.transform = "translateX(-100%)";
    document.getElementById("cross").style.display = "none";
    document.getElementById("show").style.display = "inline";
}

function menuloadagain() {
    document.getElementById("manu").style.transform = "none";
    document.getElementById("cross").style.display = "inline";
    document.getElementById("show").style.display = "none";
}

let bt = document.getElementsByClassName("menuListItems");

function changeColor(event) {
    const col = "rgb(47, 0, 255)";
    for (let y = 0; y < bt.length; y++) {
        bt[y].style.backgroundColor = col;
    }
    event.target.style.backgroundColor = 'blue';
}

for (var x = 0; x < bt.length; x++) {
    bt[x].addEventListener('click', changeColor);
}

bt[0].addEventListener("click", () => {

    document.getElementById("main").innerHTML = list + resume + tx + resdetails;
    // let arr = ["Software Engineer ", "FullStack Web Developer ", "System Designer ", "Database Administrator ", "Data Analysist ", "Data Scientist ", "Algorithmist "];
    let sp = document.getElementById("vartext");
    let i = 0;
    let it = 0;
    console.log("about me clicked");
    setInterval(() => {
        if (it == arr.length) {
            it = 0;
        }

        if (i == arr[it].length) {
            it += 1;
            i = 0;
            sp.innerHTML = "";
        }

        sp.innerHTML += arr[it].charAt(i);
        i++;
    }, 200);

    setInterval(() => {
        if (sp.style.borderRight == "2px solid rgb(47, 0, 255)") {
            sp.style.borderRight = "2px solid white"
        } else {
            sp.style.borderRight = "2px solid rgb(47, 0, 255)";
        }
    }, 300);
});