var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var period = document.querySelector(".period");
var amPMStatus = document.querySelector(".am-pm-status");
var icon = document.querySelector(".icon");

function updateClock() {
  const now = new Date();
  let hoursValue = now.getHours();
  const minutesValue = now.getMinutes().toString().padStart(2, 0);
  const secondsValue = now.getSeconds().toString().padStart(2, 0);;
  const amPm = hoursValue >= 12 ? "PM" : "AM";

  (function amPmMode() {
    var body = document.querySelector("body");
    var clockCon = document.querySelector(".clock-container");
    var timeUnit = document.querySelectorAll(".time-unit");
    var timeValue = document.querySelectorAll(".time-value");
    var label = document.querySelectorAll(".label");
    if (amPm == "PM") {
      body.style.backgroundColor = "#1a1a2e";
      clockCon.style.backgroundColor = "#16213e";
      timeUnit.forEach((item) => (item.style.backgroundColor = "#0f3460"));
      timeValue.forEach((item) => (item.style.color = "#e94560"));
      label.forEach((item) => (item.style.color = "#a3a3a3"));
      period.style.color = "#e94560";
      icon.textContent = "🌙";
    } else {
      body.style.backgroundColor = "#f0f8ff";
      clockCon.style.backgroundColor = "#ffffff";
      timeUnit.forEach((item) => (item.style.backgroundColor = "#e6f2ff"));
      timeValue.forEach((item) => (item.style.color = "#4a90e2"));
      label.forEach((item) => (item.style.color = "#7f8c8d"));
      period.style.color = "#f39c12";
      icon.textContent = "☀️";
    }
  })();

  hoursValue = hoursValue % 12;
  hoursValue = hoursValue ? hoursValue : 12;

  hours.textContent = hoursValue.toString().padStart(2, 0);
  minutes.textContent = minutesValue;
  seconds.textContent = secondsValue;
  amPMStatus.textContent = amPm;
}

setInterval(updateClock, 1000);

updateClock();
