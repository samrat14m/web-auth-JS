
function stringToHash(string) {                 
    var hash = 0;     
    if (string.length == 0) return hash;     
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }      
    return hash;
}
const data = 1141037245;
const form = document.querySelector("#home");
const input = document.querySelector("#name");
const list = document.querySelector("#link");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const q =(`@#$${input.value}$^&`);
    const hash = stringToHash(q);
    console.log(hash);
    if(data===hash){ 
        alert("Hurray!! Correct PassCode!! Enter using the link below");
        document.querySelector("#link").href="./home.html";
        document.querySelector("#link").innerHTML="./home.html";
        document.querySelector("#link").innerText="Click Me";
        }
        else
        {alert("Wrong PassCode :-( Try again");}
    input.value = "";    
})
