const secondHand = document.querySelector(".secHand");
const minuteHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hrHand");
const hourDisplay = document.getElementById("hourDisplay");
const minDisplay = document.getElementById("minDisplay");
const secDisplay = document.getElementById("secDisplay");
let minConvert;
let hourConvert;
function ready(callbackFunc) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function() {
      if (document.readyState === "complete") {
        callbackFunc();
      }
    });
  }
}

ready(function() {
  function setDate() {
    const now = new Date();
    //====for second hand====//
    const seconds = now.getSeconds();
    const secondDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    const secConvert = seconds.toString();
    console.log(secConvert);
    secDisplay.innerHTML = secConvert;

    //====for minute hand====//
    const minutes = now.getMinutes();
    const minuteDegree = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    minConvert = minutes.toString();
    minDisplay.innerHTML = minutes;

    //====for hour hand====//
    const hours = now.getHours();
    const hourDegree = (hours / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    hourConvert = hours.toString();
    hourDisplay.innerHTML = hourConvert;
  }
  setInterval(setDate, 1000);
});
