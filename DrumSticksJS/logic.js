window.addEventListener('keydown', function(e){
 //console.log(e.keyCode);
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //  console.log(audio);
  if(!audio) return; // stop the function from running all together
  audio.currentTime =0; // rewind to the start everytime they press
  audio.play();
});