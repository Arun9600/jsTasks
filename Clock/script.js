let time = document.getElementById("time");
function Timer() {
  let d = new Date();
  let date = d.getDate();
  if (date.toString().length == 1) {
    date = "0" + date;
  }
  let month = d.getMonth() + 1;
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  let year = d.getFullYear();
  let dateFormat = `${date}/ ${month}/ ${year}`;
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length == 1) {
    seconds = "0" + seconds;
  }
  let t = `${hours}:${minutes}:${seconds}`;
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesaday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Day = day[d.getDay()];
  time.innerHTML = `<b>Date:</b>: ${dateFormat} <br>
  <b>Time:</b> ${t} <br> <b>Day:</b> ${Day}
  `;
}
setInterval(Timer, 1000);
