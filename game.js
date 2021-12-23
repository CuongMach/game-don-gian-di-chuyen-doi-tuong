let myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");
let dogimg = new Image();
dogimg.src="https://i.pinimg.com/474x/fd/da/a8/fddaa8942d440096e8cbe63ebb722f01.jpg"

function run(){
    context.drawImage(dogimg,nhanvat.x,nhanvat.y,100,100);
    requestAnimationFrame(run);

}


nhanvat = {
    x: 100, y: 500
}

setInterval(star, 100);

function star() {
    context.clearRect(0, 0, 1000, 1000);
}

document.addEventListener("keydown", key => {
    switch (key.keyCode) {
        case 37:
            nhanvat.x -= 5;
            break;
        case 38:
            nhanvat.y -= 5;
            break;
        case 39:
            nhanvat.x += 5;
            break;
        case  40:
            nhanvat.y += 5;
            break;
    }
});
run();
