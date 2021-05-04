canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images = ["nasaimg1.jpg", "nasaimg2.jpg", "nasaimg3.jpg", "nasaimg4.jpg", "nasaimg5.jpg"];
random_number = Math.floor(Math.random()*5);
console.log(random_number);

rover_width = 100;
rover_height = 90;

rover_img = "rover.png";
background_img = mars_images[random_number];
console.log("Background Image =" + background_img);

rover_x = 10;
rover_y = 10;

function add() {
    background_image = new Image();
    background_image.onload = ubg;
    background_image.src = background_img;

    rover_image = new Image();
    rover_image.onload = gbu;
    rover_image.src = rover_img;
}
//ubg means upload background image and so does gbu just for the rover
function ubg() {
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}
 
function gbu() {
    ctx.drawImage(rover_image, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
}

function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x =" + rover_x + "/y = " + rover_y);
        ubg();
        gbu();
    }
}

function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x =" + rover_x + "/y = " + rover_y);
        ubg();
        gbu();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x =" + rover_x + "/y = " + rover_y);
        ubg();
        gbu();
    }
}

function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x =" + rover_x + "/y = " + rover_y);
        ubg();
        gbu();
    }
}


