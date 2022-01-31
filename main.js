var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    if(content=="take my selfie"){
        speak()
    }
    
}
function speak(){
    var Synth=window.speechSynthesis
    var speak_data="taking your selfie in 5 seconds";
    var UtterThis=new SpeechSynthesisUtterance(speak_data);
    Synth.speak(UtterThis)
    Webcam.attach(camera)
    setTimeout(function(){
        take_snapshot()
    },5000)
        
    
}
Webcam.set({
  width:350,
  height:250,
  image_format:"png",
  png_quality:90

})
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+ " id='selfie_img'>"
    })
    save();

}
function save(){
    var link=document.getElementById("link");
    var img=document.getElementById("selfie_img").src;
    link.href=img
    link.click()
}

