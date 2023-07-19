img = "";
status2 = "";
objects = []; 

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video =  createCapture(VIDEO);
    video.size(380, 380)
    video.hide();
}
function modelLoaded(){
    console.log("Model Loaded!");
    status2 = true;
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function preload()
{
    img = loadImage('dog_cat.jpg');
}
function draw()
{   
    image(video, 0, 0, 380, 380);
    if (status2 != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objeto Detectado";
            document.getElementById("numberOfObjects").innerHTML = "Status : Quantidade de Objetos Detectados" + objects.length;
            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, obejcts[i].height);
        }
        fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 370, 320);
    }
}