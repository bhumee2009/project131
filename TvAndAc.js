status="";

function preload(){
    img4=loadImage('ac and tv.jpg');
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
    ObjectDetector.detect(img4, gotResults);

}

function draw(){
    image(img4, 0, 0, 640, 420);
    fill('red');
    text("Tv", 100, 120);
    noFill();
    stroke('red');
    rect(90, 105, 150, 160);
    fill('red');
    text("Tv", 100, 120);
    noFill();
    stroke('red');
    rect(90, 105, 150, 160);
    text("AC", 110, 30);
    rect(100, 10, 130, 100);

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