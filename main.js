Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ADIN35UI_/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The predicted gesture is - " + prediction;
    var utterThis = new SpeechSynthesisUtterance(prediction);
    synth.speak(utterThis);
}

