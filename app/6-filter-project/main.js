let filterWrapper = document.getElementById('filter-1'),
    filterLinks = filterWrapper.querySelectorAll('.filter-link');

function hideAllCards(){
    let cards = filterWrapper.querySelectorAll('.card');
        cards.forEach(function(card){
            card.style.display = 'none';
        });
}


function showCards(cardType){
    console.log(cardType);
    if(cardType=="all"){
        cardType = '.card';
    }
   
    else{
        cardType = '.'+cardType;
    }
    
   
    console.log(cardType);

    let cardAll = filterWrapper.querySelectorAll(cardType);
    console.log(cardAll);
    cardAll.forEach(function(card){
        card.style.display = 'block';
    });
}



function printMe(filterLink){
    filterLink.addEventListener('click',function(){
        let currentElement = this,
            filterType = currentElement.classList[1];

        hideAllCards();
        showCards(filterType);


    });
}

filterLinks.forEach(printMe);