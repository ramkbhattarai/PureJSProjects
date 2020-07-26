// window.addEventListener('keydown', function(e){
//  //console.log(e.keyCode);
//  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   //  console.log(audio);
//     const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if(!audio) return; // stop the function from running all together
//   audio.currentTime =0; // rewind to the start everytime they presscom
//   audio.play();
//   key.classList.add('playing');
//   //  key.classList.add('playing');

// });

function playSound(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //  console.log(audio);
    const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start everytime they presscom
    audio.play();
    key.classList.add('playing');
    //  key.classList.add('playing');

}
function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip if its not a transform
    //console.log(e.propertyName);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);