
function changeBg(){
    var headercolor = document.getElementById('header');
    var scrollValue = window.scrollY;
    if(scrollValue < 40){
        headercolor.classList.remove('headerColor');
    } else{
        headercolor.classList.add('headerColor');
    }
}
window.addEventListener('scroll', changeBg);



var menu = document.getElementById("menu");
function openmenu(){
    menu.style.left = "0";
}
function closemenu(){
    menu.style.left = "-35%";
}






// function calculate() {
//     var inp1 = parseFloat(document.getElementById('inp1').value);
//     var inp2 = parseFloat(document.getElementById('inp2').value);
//     var result1 = document.getElementById('result1');

//     if (operator === 'add') {
//         result1.value = inp1 + inp2;
//     } else if (operator === 'subtract') {
//         result1.value = inp1 - inp2;
//     } else if (operator === 'multiply') {
//         result1.value = inp1 * inp2;
//     } else if (operator === 'divide') {
//         if (inp2 === 0) {
//             result1.value = 'Cannot divide by zero';
//         } else {
//             result1.value = inp1 / inp2;
//         }
//     }
// }


// document.getElementById('inp1').addEventListener('input', calculate);
// document.getElementById('inp2').addEventListener('input', calculate);
// document.getElementById('operator').addEventListener('change', calculate);



function sumNumbers() {
    const numper1 = parseInt(document.getElementById("num1").value);
    const numper2 = parseInt(document.getElementById("num2").value);
    
    if (!isNaN(numper1) && !isNaN(numper2)) {
        const sum = numper1 + numper2;
        document.getElementById("tot1").value = sum;
    } else {
        document.getElementById("tot1").value = "";
    }
}


function checkNumber() {
    const num = parseInt(document.getElementById("total").value);
    if (num === 5000) {
        document.getElementById("total").style.borderColor = "green";
    } else {
        document.getElementById("total").style.borderColor = "red";
    }
}
