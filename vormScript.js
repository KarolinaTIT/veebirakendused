function lugemine() {}
document.getElementById("vastus").innerHTML="Tere hommikust, "+ document.getElementById("nimi").value+""+document.getElementById("pnimi").value
//sama funktsioon koos muutujatega
function lugemine2() {}
let nimi=document.getElementById("nimi").value;
let pnimi=document.getElementById("pnimi").value;
let vastus=document.getElementById("vastus");
let varv=document.getElementById("varv");
vastus.innerHTML="Tere hommikust, mees "+nimi+" "+pnimi+"!";
vastus.style.color=varv.value;
//radio-nupud
let paev=document.getElementById("synnipaev").value;
let mees=document.getElementById("mees");
let naine=document.getElementById("naine");
if (mees.checked){
}
else if(naine.checked){
    vastus.innerHTML="Tere hommikust, mees "+nimi+" "+pnimi+"!"+"Sinu synnipaev on "+paev;
    vastus.style.color=varv.value;

} else {
   vastus.innerHTML="palun vali sugu";
}