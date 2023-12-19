const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById('lamp');

function isLampadaBroken(){
      return lamp.src.indexOf('quebrada') > -1;
}


function LampOn(){
      if(!isLampadaBroken()){
            lamp.src = './img/ligada.jpg';
      }
      
}
function LampOff(){
     if(!isLampadaBroken()){
      lamp.src = './img/desligada.jpg';
     }
}
function lampBroken(){
      lamp.src = './img/quebrada.jpg';
}

turnOn .addEventListener('click', LampOn);
turnOff .addEventListener('click', LampOff);
lamp .addEventListener('mouseover', LampOn);
lamp.addEventListener('mouseleave', LampOff);
lamp.addEventListener('dblclick', lampBroken);