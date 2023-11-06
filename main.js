Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:90
})
Webcam.attach(document.getElementById("camera"))
function take_snapshot()
{
    Webcam.snap(function(img_src) {
        document.getElementById("result").innerHTML = "<img src= '" + img_src + "' id= 'image_preview'> ";
    })

}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yx4sMRV1-/model.json", modelLoaded)
function modelLoaded()
{
    console.log("MODEL IS LOADED SUCCESSFULLY");
}