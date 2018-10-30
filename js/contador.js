const year = (new Date().getFullYear()) + 1;
const fourthOfJuly = new Date('2018-12-07 17:00:00');

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>Dias</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>segundos</div> \
</div>";

}, 1000);