const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#';
  for(let i = 0 ; i < 6 ; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

let startval = false;
let intervalID;

const startChangingColor = function(){
  if(!intervalID && !startval){
    startval = true;
  intervalID = setInterval(changebg ,1000);}

  function changebg(){
    body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function(){
  if(startval){
  clearInterval(intervalID);
  intervalID = null;
  startval = false
  }
};

 
start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);

