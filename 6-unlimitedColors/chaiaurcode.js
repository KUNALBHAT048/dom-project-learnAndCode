const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#';
  for(let i = 0 ; i < 6 ; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  console.log(color);
}
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body =

start.addEventListener('click',function(){
randomColor();
})