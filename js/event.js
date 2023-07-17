console.log('Js dom Event');
//make back color
//option-1
/* 
this is enable in html file
<button onclick="document.body.style.backgroundColor = 'pink'">Make pink</button>
*/
//option-2 (importent)
function makeGold() {
    document.body.style.backgroundColor = 'gold';
}

//option-3
const blueBotton = document.getElementById('make-blue');
blueBotton.onclick = makeBlue
function makeBlue() {
    document.body.style.backgroundColor = 'royalblue';
}
//option-3 another
const grayBotton = document.getElementById('make-gray');
grayBotton.onclick = function makeGray() {
    document.body.style.backgroundColor = 'gray';
}

//option-4
const MediumSeaGreen = document.getElementById('make-seaGreen');
MediumSeaGreen.addEventListener('click', makeSeaGreen)
function makeSeaGreen() {
    document.body.style.backgroundColor = 'MediumSeaGreen';
}

//option-4 another
const makeTomato = document.getElementById('make-tomato');
makeTomato.addEventListener('click', function tomatoButton() {
    document.body.style.backgroundColor = 'Tomato';
})

//option-4 final (importent)
document.getElementById('make-violet').addEventListener('click', function () {
    document.body.style.backgroundColor = 'Violet';
})
