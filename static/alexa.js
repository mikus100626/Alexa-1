window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//tworzymy stala
const alexa = new SpeechRecognition();

// dodaje event do okna przegladarki i spr czy go nie kliknelismy,
// po kliknieciu uruchamia alexe i zmienia htmla strony na alexa start
window.addEventListener('click', () => {
    document.body.innerHTML = "Alexa start";
    return alexa.start() ;
});

alexa.addEventListener('result', (event)=>{
    console.dir(event);
    console.log(event.results[0][0].transcript)
});

alexa.addEventListener('end', ()=>{
    document.body.innerHTML = "Alexa end";
});

