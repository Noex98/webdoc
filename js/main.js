//Slider variables
const rangeSlider = document.getElementById("rangeSlider");
const leftImage = document.querySelector(".leftImage");
const sliderText = document.getElementById("sliderText");
//video
const video = document.getElementById("video");

//slider
rangeSlider.oninput = function(){
    document.getElementById("inputThumb").style.left = this.value + "%";
    leftImage.style.width = this.value + "%";
    //slider text box
    if (this.value < 50){
        sliderText.innerText = `
        Her er et eksempel på en virksomhed. Hvor man på billedet til venstre kan se deres udvikling på digital 
        markedsføring, på egen hånd gennem det sidste år. 
        `
    }else {
        sliderText.innerText = `
        Hvorefter billedet til er efter et års samarbejde med et markedsføringsbureau, hvor væksten er 
        steget markant. Ved hjælp af den korrekte digital markedsførings strategi.
        `
    }
}


//video autoplay
addEventListener('scroll', function(){
    if (video.getBoundingClientRect().bottom < 400 || video.getBoundingClientRect().top > 250){
    video.pause()
    } else {
    video.play()
    }
})