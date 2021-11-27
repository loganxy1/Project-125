noseX = 0;
noseY = 0;

leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.position(100, 175);
    video.size(550, 500);

    canvas = createCanvas(600, 500);
    canvas.position(800, 175);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('white');
    fill('cadetblue');
    textSize(difference);
    text('unicorns', noseX, noseY);

    document.getElementById("change").innerHTML = "The text size is "+difference;
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("Values for nose's x and y position are "+noseX, noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;

        difference = Math.floor(leftWrist - rightWrist);

        console.log("Values of left and right wrist are "+leftWrist, rightWrist);
        console.log(difference);
    }
}