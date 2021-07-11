function preload(){

}

function setup(){
    canvas = createCanvas(450, 450); 
    canvas.position(800, 125);

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded); 
}

function draw(){
    background("#b4ede3");
}

function modelLoaded(){
    console.log("PoseNet is initialised"); 
}