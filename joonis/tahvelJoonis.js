function ring() {
    //x,y - keskpunkt, R - raadius
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.arc(30, 30, 15, 0, 2 * Math.PI, true);
        t.strokeStyle = "skyblue";
        t.stroke(); //ümberjoon
        t.fillStyle = "black";
        t.fill(); // taust

    }
}

function kustuta(){
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0,0,45,45);
    }
}
//ristkylik
function ristkylik(){
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(20,40,60,80);
    }
}
//joon
function joon() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 7;
        t.moveTo(30,90); //alguspunkt
        t.lineTo(90,30);
        t.lineTo(150, 90);
        t.lineTo(30, 90) //lõppunkt
        t.strokeStyle = "red";
        t.stroke(); //ümberjoon


    }
}

function eesti() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let t = lipp.getContext("2d");
        t.fillStyle = "blue";
        t.fillRect(0, 0, 330, 70);
        t.fillStyle = "black";
        t.fillRect(0, 70, 330, 70);
        t.fillStyle = "white";
        t.fillRect(0, 140, 330, 70);
    }
}
function kustuta2(){
    const lipp = document.getElementById("lipp");
    if(lipp.getContext) {
        let t = lipp.getContext("2d");
        t.clearRect(0,0,330,330);
    }
}
function itaalia(){
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let t = lipp.getContext("2d");
        t.fillStyle = "green";
        t.fillRect(0, 0, 110, 210);
        t.fillStyle = "white";
        t.fillRect(110, 0, 110, 210);
        t.fillStyle = "red";
        t.fillRect(220, 0, 110, 210);
    }
}
function taani(){
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let t = lipp.getContext("2d");
        t.fillStyle = "red";
        t.fillRect(0, 0, 330, 210);
        t.fillStyle = "white";
        t.fillRect(110, 0, 40, 210);
        t.fillRect(0, 85, 330, 40);
    }
}
function sveits(){
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let t = lipp.getContext("2d");
        t.fillStyle = "red";
        t.fillRect(0, 0, 330, 210);
        t.fillStyle = "white";
        t.fillRect(120, 30, 30, 140);
        t.fillRect(70, 70, 140, 30);
    }
}