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

let intervalID;

const startChangingColor = function(){
  intervalID = setInterval(changebg ,100);
   function changebg(){
    body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function(){
  clearInterval(intervalID);
};

 

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);

