
document.addEventListener('DOMContentLoaded', function() {
    const typingInput = document.getElementById('typingInput');
    const itemGame = document.getElementById('itemGame');
    const showtime = document.getElementById('showtime');
    const wordCorrect = document.getElementById('wordCorrect');
    const wordWrong = document.getElementById('wordWrong');

    let array = [
        "One", "beautiful","day", "I", "walked", "to" ,"the" ,"riverbank" ,"near" ,"my" ,"house", "with" ,"my" ,"fishing",
        "gear" ,"and" ,"found" ,"a" ,"nice" ,"place" ,"to" ,"fish." ,"However," ,"I" ,"caught" ,"a" ,"crocodile," ,"but" ,
        "instead" ,"of","panicking," ,"I" ,"grabbed" ,"a" ,"pan " ,"and" ,"hit" ,"it" ,"the" ,"crocodile" ,"head" ,"and" ,
        "turn", "it" ,"into" ,"an" ,"Eovi" ,"bag."
    ];
    
    let arrayTyping = [];
    let currentWord = 0;
    let time = 60;
    let countWordCorrect = 0;
    let countWordWrong = 0;
    let timeCount = false;
    let timer;


    function updateDisplay() {
        itemGame.innerHTML = '';
        array.forEach((word, index) => {
            let span = document.createElement('span');
            span.textContent = word + ' ';
            if (index === currentWord) {
                span.classList.add('highlight');
            }
            itemGame.appendChild(span);
        });
    }

    function handleStartTyping() {
        timer = setInterval(() => {
            time--;
            showTime.textContent = time;
            if (time === 0) {
                handleClearInterval();
                timeCount = false;
            }
        }, 1000);
    }

    function handleClearInterval() {
        clearInterval(timer);
        handleCompare();
    }

    function handleCompare() {
        arrayTyping.forEach((word, index) => {
            if (word === array[index]) {
                countWordCorrect++;
            } else {
                countWordWrong++;
            }
        });
        wordCorrect.textContent = countWordCorrect;
        wordWrong.textContent = countWordWrong;
    }

    typingInput.addEventListener('input', (event) => {
        let txtText = event.target.value;
        let results = txtText.trim().split(/\s+/);
        let valueTimeCount = (txtText.length === 1) ? true : false;
        
        if (valueTimeCount === true && !timeCount) {
            timeCount = true;
            handleStartTyping();
        }
        arrayTyping = results;
        currentWord = results.length - 1;
        updateDisplay();
    });
    updateDisplay();
});
