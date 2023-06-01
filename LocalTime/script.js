let s = () => {
  let timestamp = document.getElementById("timestamp");
  let d = new Date();
  timestamp.innerHTML = d.toLocaleTimeString();
};
setInterval(s, 1000);
