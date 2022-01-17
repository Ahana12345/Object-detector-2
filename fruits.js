img="";
status = "";
function setup(){
    canvas = createCanvas(550, 410);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function preload(){
img = loadImage("Fruit-basket.png");
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);

}
function draw(){
    image (img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fruits", 35, 45);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

}
function gotResult(error, results){
    if (error){
        console.log(error);
    } else{
    console.log(results);
}
}
