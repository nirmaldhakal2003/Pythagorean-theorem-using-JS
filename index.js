let a;
let b;
let c;

// a = window.prompt("Enter the value of A:");
// a = Number(a);
// b = window.prompt("Enter the value of B:");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side c: ",c,"cm"); 

document.getElementById("submit").onclick = function(){
    a = document.getElementById("a1").value;
    a = Number(a);
    b = document.getElementById("b1").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("p1").innerHTML = "Side C: " + c +"cm";

}