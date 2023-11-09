let carddisplay = [
    { id: '01',
      cardtitle: 'Try on Coach styles for free',
      cardtext: 'shop Coach with prime Try before you buy',
      image: "./images/cardSection-bag1.jpg"
    }, 
        
    { id: '02',
      cardtitle: 'Explore sports gifts for kids',
      cardtext: 'shop-kids sports with free 2-day shipping',
      image: "./images/cardSection-bag1.jpg"
    },
];


// function carddisplayshow(cardData){
//     let cardElement = document.createElement('div');
//     cardElement.setAttribute('class', 'container cardimage');
//     let cardElement1 = document.createElement('div');
//     cardElement1.setAttribute('class', 'row');
//     let cardElement2 = document.createElement('div');
//     cardElement2.setAttribute('class','col-4');

//     cardElement.innerHTML = `
//         <div class="card w-75 shadow-lg p-2 mb-2 bg-body-tertiary">
//             <div class="card-body">
//                 <h5 class="card-title">${cardData.cardtitle}</h5>
//                 <img src="${cardData.image}" class="card-img-bottom w-100" alt="${cardData.cardtitle}">
//             </div>
//             <p class="card-text">${cardData.cardtext}</p>
//         </div>
//     `;
//     return cardElement;
// }

// function addCardsToDisplay() {
//     let cardDisplayElement = document.querySelector('.cardimage');
    
//     carddisplay.forEach((cardData) => {
//         let cardElement = carddisplayshow(cardData);
//         cardDisplayElement.appendChild(cardElement);
//     });
// }


// window.onload = addCardsToDisplay;

