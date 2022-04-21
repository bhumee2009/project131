function preload(){
    img3=loadImage('fruit.jpg');
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
    ObjectDetector.detect(img3, gotResults);

}

function draw(){
    image(img3, 0, 0, 640, 420);
    fill('red');
    text("Fruit Basket", 110, 20);
    noFill();
    stroke('red');
    rect(100, 0, 485, 418);
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