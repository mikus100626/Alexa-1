window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const BUTTON = document.querySelector('input');
const RESULT = document.querySelector('#result');
const CONFIDENCE = document.querySelector('#confidence');
const STAN = document.querySelector('#stan');

const ALEXA = new SpeechRecognition();
ALEXA.lang = 'pl-PL';

ALEXA.addEventListener('start', function() {
    STAN.innerHTML = 'Nasłuchuje'
})

ALEXA.addEventListener('result', function(event) {
    const text = event.results[0][0].transcript;
    RESULT.innerHTML= text;
    CONFIDENCE.innerHTML=event.results[0][0].confidence * 100 + '%';
    execute(text.toLowerCase())
})


ALEXA.addEventListener('end', function() {
    STAN.innerHTML = 'Koniec nasłuchiwania'
})

BUTTON.addEventListener('click', function() {
    ALEXA.start();    
})