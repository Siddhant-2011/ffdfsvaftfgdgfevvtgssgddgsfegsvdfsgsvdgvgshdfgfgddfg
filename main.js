noseX=0;
noseY=0;
leftX=0;
rightX=0;
dif=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(440, 290);
    video.position(70,115);
    
    canvas=createCanvas(450,300);
    canvas.position(800,110);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
 }

 function draw(){
     textSize(dif)
    background('#969A97');
 text(noseX,noseY,dif);
    fill('#7FFFD4');
    document.getElementById('buoy').innerHTML='width and height of da sfont iz '+dif+'px';
    }
    
    
    function modelLoaded(){
        console.log('model is loaded');
    }
    
    function gotPoses(results){
        if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log('noseX = ' +noseX +'noseY = '+noseY);
    leftX=results[0].pose.leftWrist.x;
    rightX=results[0].pose.rightWrist.x;
    dif=floor(leftX-rightX);
    console.log('leftX  = '+leftX+'rightx =  '+rightX + 'dif = '+dif);
        }
        
    }

