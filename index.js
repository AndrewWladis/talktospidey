var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

let greathonortomeetyousir = new Audio('audio/greathonortomeetyousir.mp3');
let theadsaid = new Audio('audio/100buckstheadsaid3000.mp3');
let outofyourmind = new Audio('audio/outofyourmind.mp3');
let stayingawayafromyou = new Audio('audio/stayingawayafromyou.mp3');
let yeahgreat = new Audio('audio/yeahgreat.mp3');
let beatanoldladywithastick = new Audio('audio/beatanoldladywithastick.mp3');
let ididnotstartthatfight = new Audio('audio/ididnotstartthatfight.mp3');
let ifyourealisethosbutihavebeenyourneighbor = new Audio('audio/ifyourealisethosbutihavebeenyourneighbor.mp3');
let ihadafather = new Audio('audio/ihadafather.mp3');
let wecantalklater = new Audio('audio/wecantalklater.mp3');
let ishinedmyshoespressedmypants = new Audio('audio/ishinedmyshoespressedmypants.mp3');
let pizzatime = new Audio('audio/pizzatime.mp3');
let tryingtodobetter = new Audio('audio/tryingtodobetter.mp3');
let didyouseethatone = new Audio('audio/didyouseethatone.mp3');
let iknowexactlyhowyoufeelmonologue = new Audio('audio/iknowexactlyhowyoufeelmonologue.mp3');
let iloveyou = new Audio('audio/iloveyou.mp3');
let jigsuppal = new Audio('audio/jigsuppal.mp3');
let ohdoctorconnors = new Audio('audio/ohdoctorconnors.mp3');
let whatareyoutalkingabout = new Audio('audio/whatareyoutalkingabout.mp3');
let yournotdoingyourjobmonologue = new Audio('audio/yournotdoingyourjobmonologue.mp3');

const button = document.getElementById('button');
const buttonB = document.getElementById('buttonB');


var recognition = new SpeechRecognition();
    
function speechRecord() {
    recognition.start();
    recognition.onstart = function () {
        console.log("We are listening. Try speaking into the microphone.");
    };

    recognition.onspeechend = function () {
        // when user is done speaking
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        console.log(transcript)
        response(transcript);
    };
    
}
function random(a, b) {
    let randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
        a.play()
    } else if (randomNum === 1) {
        b.play()
    }
}

function response(i) {
    if (i.toLowerCase().includes('hello') || i.toLowerCase().includes('hi')) {
        greathonortomeetyousir.play()
    } else if (i.toLowerCase().includes('100') || i.toLowerCase().includes('hundred') || i.toLowerCase().includes('bucks') || i.toLowerCase().includes(' ad ')) {
        theadsaid.play()
    } else if (i.toLowerCase().includes('what are you doing')) {
        stayingawayafromyou.play()
    } else if (i.toLowerCase().includes('out of your mind') || i.toLowerCase().includes("out")) {
        outofyourmind.play()
    } else if (i.toLowerCase().includes('lego') || i.toLowerCase().includes('book of boba fett') || i.toLowerCase().includes('daredevil')) {
        yeahgreat.play()
    } else if (i.toLowerCase().includes('grandma') || i.toLowerCase().includes('old lady')) {
        beatanoldladywithastick.play()
    } else if (i.toLowerCase().includes('fight') || i.toLowerCase().includes('final battle') || i.toLowerCase().includes('lawsuit')) {
        ididnotstartthatfight.play()
    } else if (i.toLowerCase().includes('do i know you')) {
        ifyourealisethosbutihavebeenyourneighbor.play()
    } else if (i.toLowerCase().includes('father') || i.toLowerCase().includes('dad')) {
        ihadafather.play()
    } else if (i.toLowerCase().includes('how did you prepare') || i.toLowerCase().includes('what did you do for your return') || i.toLowerCase().includes('first date')) {
        ishinedmyshoespressedmypants.play()
    } else if (i.toLowerCase().includes('pizza') || i.toLowerCase().includes('aziz') || i.toLowerCase().includes('your late parker')) {
        pizzatime.play()
    } else if (i.toLowerCase().includes('but lazy') || i.toLowerCase().includes('how are you')) {
        tryingtodobetter.play()
    } else if (i.toLowerCase().includes('no way home')) {
        didyouseethatone.play()
    } else if (i.toLowerCase().includes('i am scared') || i.toLowerCase().includes('feelings')) {
        iknowexactlyhowyoufeelmonologue.play()
    } else if (i.toLowerCase().includes('you are the best spider-man') || i.toLowerCase().includes('spider-man 2')) {
        iloveyou.play()
    } else if (i.toLowerCase().includes('say to tom') || i.toLowerCase().includes('say to andrew') || i.toLowerCase().includes('tell to tom') || i.toLowerCase().includes('tell to andrew')) {
        random(yournotdoingyourjobmonologue, jigsuppal)
    } else if (i.toLowerCase().includes('the lizard') || i.toLowerCase().includes('amazing spider-man 1')) {
        ohdoctorconnors.play()
    } else if (i.toLowerCase().includes('tom is better') || i.toLowerCase().includes('andrew is better')) {
        whatareyoutalkingabout.play()
    } else if (i.toLowerCase().includes('but lazy') || i.toLowerCase().includes('how are you')) {
        tryingtodobetter.play()
    } else if (i.toLowerCase().includes('but lazy') || i.toLowerCase().includes('how are you')) {
        tryingtodobetter.play()
    } else if (i.toLowerCase().includes('but lazy') || i.toLowerCase().includes('how are you')) {
        tryingtodobetter.play()
    } else {
        random(wecantalklater, iknowexactlyhowyoufeelmonologue)
    }
}

button.addEventListener('click', speechRecord);