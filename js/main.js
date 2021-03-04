//slider
const rangeSlider = document.getElementById("rangeSlider");
const leftImage = document.querySelector(".leftImage");
const sliderText = document.getElementById("sliderText");

rangeSlider.oninput = function(){
    document.getElementById("inputThumb").style.left = this.value + "%";
    leftImage.style.width = this.value + "%";
    //slider text box
    if (this.value < 50){
        sliderText.innerText = 
        `Her er et eksempel på en virksomhed. Hvor man på billedet til venstre kan se deres udvikling på digital 
        markedsføring, på egen hånd gennem det sidste år. 
        `
    }else {
        sliderText.innerText = 
        `Hvorefter billedet til er efter et års samarbejde med et markedsføringsbureau, hvor væksten er 
        steget markant. Ved hjælp af den korrekte digital markedsførings strategi.
        `
    }
}

//video autoplay
const video = document.getElementById("video");

addEventListener('scroll', function(){
    if (video.getBoundingClientRect().bottom < 400 || video.getBoundingClientRect().top > 250){
    video.pause()
    } else {
    video.play()
    }
})

//effect on the intro text
var viewportHeader = document.querySelector(".main__intro");

document.addEventListener("scroll", function() {
  var opacity = (document.body.offsetHeight - pageYOffset) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - pageYOffset) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});

//fixed icons fade in/out
const sliderRect = document.getElementById("sliderCont").getBoundingClientRect();
const someCont = document.getElementById("someCont");
document.addEventListener("scroll", function() {
    if (window.scrollY > sliderRect.top){
        someCont.style.opacity ="1";
    } else {
        someCont.style.opacity ="0";
    }
});