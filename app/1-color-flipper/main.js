/*
1. Trigger event when user clickon the button
2. Write a function to generate random color
3. Apply the generated random color to body tag
*/



let myButton = document.getElementById('color-generator');

myButton.addEventListener('click', function(){

    let randomColor = generateRandomColor(),
    bodyTag = document.getElementById('body-tag');
    h1Tag = document.getElementById('color');
    
    bodyTag.style.backgroundColor = randomColor;
    h1Tag.innerHTML = generateRandomColor();
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor(){

    // rgb(0-255 0-255 0-255)

    let red, green, blue, style,
        head = 'rgb(',
        seperator = ' ',
        tail = ')';

    red = getRandomInt(0,255);
    green = getRandomInt(0,255);
    blue = getRandomInt(0,255);

    console.log(red, green, blue);

    style = head + red + seperator + green + seperator + blue + tail;
    
    return style;

}