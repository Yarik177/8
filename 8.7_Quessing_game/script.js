let close_box = document.getElementById('btn');
let close_box2 = document.getElementById('btn2');
let close_box3 = document.getElementById('btn3');
let close_box4 = document.getElementById('btn4');
let box = document.getElementById('box');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let text4 = document.getElementById('box_txt4');
let minValue;
let maxValue;

const arrayNumber1_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const arrayNumber20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const arrayNumber100_900 = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

close_box.onclick = function() { 
        box.classList.add('box_vis');
        box2.classList.add('box_vis2');
}  

close_box2.onclick = function(event) {
        event.preventDefault();
        minValue = parseInt(document.getElementById("minValue").value) || 0;
        minValue = (minValue < -999 || minValue > 999) ? -999 : minValue;
        box2.classList.remove('box_vis2'); 
        box3.classList.add('box_vis3');
        
}   

close_box3.onclick = function(event) {
    event.preventDefault();
    maxValue = parseInt(document.getElementById("maxValue").value) || 100;
    maxValue = (maxValue > 999 || maxValue < -999) ? 999 : maxValue;
    text4.textContent = `Guess any integer from ${minValue} to ${maxValue}, and I'll guess it`;
    box3.classList.remove('box_vis3'); 
    box4.classList.add('box_vis4');
} 

close_box4.onclick = function() {
    box4.classList.remove('box_vis4');
        game();   
}

function game () {
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let textOfNumber;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function textNumber() {
    let textCount = Math.abs(answerNumber);
    if (textCount < 20) {
        textOfNumber = arrayNumber1_19[textCount];
        }
        else if (textCount < 100) {
            let ost1 = textCount%10;
            textCount = parseInt(textCount/10);
            textOfNumber = arrayNumber20_90[textCount] + " " + arrayNumber1_19[ost1];
            }
            else if (textCount < 1000) {
                ost1 = textCount%100;
                if(ost1 < 20) {
                    textCount = parseInt(textCount/100);
                    textOfNumber = arrayNumber100_900[textCount] + " " + arrayNumber1_19[ost1];
                }
                else {
                    let ost2 = ost1%10;
                    ost1 = parseInt(ost1/10);
                    textCount = parseInt(textCount/100);
                    textOfNumber = arrayNumber100_900[textCount] + " " + arrayNumber20_90[ost1] + " " + arrayNumber1_19[ost2];
                }    
        }

    if (answerNumber == 0) {textOfNumber = "null"}
    if (textOfNumber.length > 20) {
        textOfNumber =  answerNumber.toString();
    }
        else if (answerNumber < 0) {
            textOfNumber = 'minus ' + textOfNumber;
        }
    
    return textOfNumber;
}

textNumber();

orderNumberField.innerText = orderNumber;
answerField.innerText = `You have made a number ${textOfNumber }?`;


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `You have guessed the wrong number!\n\u{1F914}` :
                `I give up..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            textNumber();
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom1 = Math.round( Math.random()*3);
            switch (phraseRandom1){
                case 0:
                    answerField.innerText = `You have made a number ${textOfNumber }?`; 
                    break;
                case 1:
                    answerField.innerText = `Let it ${textOfNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `May be ${textOfNumber }?`;
                    break;
                case 3:
                    answerField.innerText = `Your mom here told me ${textOfNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
            `You have guessed the wrong number!\n\u{1F914}` :
            `I give up..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            textNumber();
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom2 = Math.round( Math.random()*3);
            switch (phraseRandom2){
                case 0:
                    answerField.innerText = `You have made a number ${textOfNumber }?`; 
                    break;
                case 1:
                    answerField.innerText = `Let it ${textOfNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `May be ${textOfNumber }?`;
                    break;
                case 3:
                    answerField.innerText = `Your mom here told me ${textOfNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom3 = Math.round( Math.random()*2);
        switch (phraseRandom3){
            case 0:
                answerField.innerText = `Nice!\n\u{1F60E}` ; 
                break;
            case 1:
                answerField.innerText = `One more time!\n\u{1F60E}`;
                break;
            case 2:
                answerField.innerText = `Just years of practice!\n\u{1F60E}`;
                break;
        }
        gameRun = false;
    }
})
}