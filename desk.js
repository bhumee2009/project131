status="";

function preload(){
    img2=loadImage('desk1.jpg');
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
    ObjectDetector.detect(img2, gotResults);

}

function draw(){
    image(img2, 0, 0, 640, 420);
    fill('red');
    text("Desk", 20, 108);
    noFill();
    stroke('red');
    rect(10, 90, 620, 320);
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