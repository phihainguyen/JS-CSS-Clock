const secondHand = document.querySelector(".secHand");
const minuteHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hrHand");
function setDate() {
  const now = new Date();
  //====for second hand====//
  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  //====for minute hand====//
  const minutes = now.getMinutes();
  const minuteDegree = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  //====for hour hand====//
  const hours = now.getHours();
  const hourDegree = (hours / 60) * 360;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
