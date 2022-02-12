let message=new SpeechSynthesisUtterance();
function set(){
    console.log(window.speechSynthesis.getVoices());
}
set();
speechSynthesis.addEventListener('voiceschanged',set);