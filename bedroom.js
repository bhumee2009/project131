status="";

function preload(){
    img=loadImage('bedroom1.jpg');
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
    ObjectDetector.detect(img, gotResults);

}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    text("Bed", 110, 160);
    noFill();
    stroke('red');
    rect(100, 140, 340, 250);
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