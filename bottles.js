status="";

function preload(){
    img1=loadImage('bottle.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();

    ObjectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";

}

function modelLoaded(){
    console.log("Model loaded !");
    status=true;
    ObjectDetector.detect(img1, gotResults);

}

function draw(){
    image(img1, 0, 0, 640, 420);
    fill('red');
    text("Bottle", 170, 20);
    noFill();
    stroke('red');
    rect(160, 0, 470, 418);
}

function back(){
    window.location="index.html";
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}