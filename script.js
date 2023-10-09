let mainHeading = document.querySelector(".main_heading");
let name = "I am Kaleem Sipra";
let index = 1
function typeWriter(){
    let newMainHeading = name.slice(0, index);
    mainHeading.innerHTML = newMainHeading;
    index>name.length ? index=1 : index++;
}
setInterval( function(){
        typeWriter();
    }, 300)