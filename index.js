const shuffleButton = document.querySelector('.shuffle');


const ancients = document.querySelectorAll(".ancients-img");
const levels = document.querySelectorAll(".button-level")

function changeActiveItem(event){
    let el = event.target;
    Array.from(el.parentElement.children).forEach(elem => elem.classList.remove("active"))
    el.classList.add("active");
    shuffleButton.classList.remove("nonvisible");    
}

ancients.forEach(el => {
    el.addEventListener("click", changeActiveItem);    
})
levels.forEach(el => {
    el.addEventListener("click", changeActiveItem);    
})

const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
    //cardFace: Ancients.azathoth,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
    //cardFace: Ancients.cthulhu,
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
    //cardFace: Ancients.iogSothoth,
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
    //cardFace: Ancients.shubNiggurath,
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]

  const cardsGreen = [
    {
      id: 'green1',
      //cardFace: greenCardsAssets.green1,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      //cardFace: greenCardsAssets.green2,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      //cardFace: greenCardsAssets.green3,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      //cardFace: greenCardsAssets.green4,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      //cardFace: greenCardsAssets.green5,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      //cardFace: greenCardsAssets.green6,
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      //cardFace: greenCardsAssets.green7,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      //cardFace: greenCardsAssets.green8,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      //cardFace: greenCardsAssets.green9,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      //cardFace: greenCardsAssets.green10,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      //cardFace: greenCardsAssets.green11,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      //cardFace: greenCardsAssets.green12,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      //cardFace: greenCardsAssets.green13,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      //cardFace: greenCardsAssets.green14,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      //cardFace: greenCardsAssets.green15,
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      //cardFace: greenCardsAssets.green16,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      //cardFace: greenCardsAssets.green17,
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      //cardFace: greenCardsAssets.green18,
      difficulty: 'easy',
      color:'green'
    },
  ]
  const cardsBlue = [
    {
      id: 'blue1',
     //cardFace blueCardsAssets.blue1,
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
     //cardFace blueCardsAssets.blue2,
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
     //cardFace blueCardsAssets.blue3,
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
     //cardFace blueCardsAssets.blue4,
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
     //cardFace blueCardsAssets.blue5,
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
     //cardFace blueCardsAssets.blue6,
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
     //cardFace blueCardsAssets.blue7,
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
     //cardFace blueCardsAssets.blue8,
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
     //cardFace blueCardsAssets.blue9,
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
     //cardFace blueCardsAssets.blue10,
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
     //cardFace blueCardsAssets.blue11,
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
     //cardFace blueCardsAssets.blue12,
      difficulty: 'normal',
      color:'blue'
    },
  ]
  const cardsBrown = [
    {
      id: 'brown1',
     //cardFace brownCardsAssets.brown1,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
     //cardFace brownCardsAssets.brown2,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
     //cardFace brownCardsAssets.brown3,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
     //cardFace brownCardsAssets.brown4,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
     //cardFace brownCardsAssets.brown5,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
     //cardFace brownCardsAssets.brown6,
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
     //cardFace brownCardsAssets.brown7,
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
     //cardFace brownCardsAssets.brown8,
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
     //cardFace brownCardsAssets.brown9,
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
     //cardFace brownCardsAssets.brown10,
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
     //cardFace brownCardsAssets.brown11,
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
     //cardFace brownCardsAssets.brown12,
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
     //cardFace brownCardsAssets.brown13,
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
     //cardFace brownCardsAssets.brown14,
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
     //cardFace brownCardsAssets.brown15,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
     //cardFace brownCardsAssets.brown16,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
     //cardFace brownCardsAssets.brown17,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
     //cardFace brownCardsAssets.brown18,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
     //cardFace brownCardsAssets.brown19,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
     //cardFace brownCardsAssets.brown20,
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
     //cardFace brownCardsAssets.brown21,
      difficulty: 'easy',
      color:'brown'
    },
  ]
  let cardsBlockCardId = [
    [],
    [],
    []
]

function shuffleCards(){
    cardsBlockCardId[0] = [];
    cardsBlockCardId[1] = [];
    cardsBlockCardId[2] = [];
    document.querySelector(".nextCard").classList.add("nonvisible")
    const ancientActiveId = document.querySelector(".ancients-img.active").getAttribute("id");
    let ancientActiveData = ancientsData.filter(el => el.id === ancientActiveId);
    let cardsBlockNumbers = [
        Object.values(ancientActiveData[0].firstStage),
        Object.values(ancientActiveData[0].secondStage),
        Object.values(ancientActiveData[0].thirdStage)
    ]
    
    if(document.querySelector(".button-level").getAttribute("id")==="veryEasy"){     
        
        let greenNumbers = cardsBlockNumbers[0][0]+cardsBlockNumbers[1][0]+cardsBlockNumbers[2][0];
        let blueNumbers = cardsBlockNumbers[0][1]+cardsBlockNumbers[1][1]+cardsBlockNumbers[2][1]; 
        let brownNumbers = cardsBlockNumbers[0][2]+cardsBlockNumbers[1][2]+cardsBlockNumbers[2][2]; 
        let green = formCardsIdColor(cardsGreen, greenNumbers);
        let blue = formCardsIdColor(cardsBlue, blueNumbers);
        let brown = formCardsIdColor(cardsBrown, brownNumbers);

        
      
        function formCardsIdColor(src, elemNumbers){
            let arr = [];
            let cardsEasy = src.filter(element =>element.difficulty === "easy");
            let cardsNormal = src.filter(element =>element.difficulty === "normal");
            for(let i=0; i<elemNumbers; i++){                
                let randomEasy = Math.floor(Math.random()*cardsEasy.length);
                let randomNormal = Math.floor(Math.random()*cardsNormal.length);                
                cardsEasy.length?arr.push(cardsEasy[randomEasy]):arr.push(cardsNormal[randomNormal]);
                cardsEasy = cardsEasy.filter(element => element != cardsEasy[randomEasy]);
                cardsNormal = cardsNormal.filter(element => element != cardsNormal[randomNormal]);
            }
            return arr
        }
        
        
        let greenRest = green;
        let blueRest = blue;
        let brownRest = brown;                        

        for(let el = 0; el<3; el++){
            cardsBlockNumbers[el].forEach((element,index)=>{
                for (let i= 0; i<element; i++){
                    if(index ===0){
                        let random = Math.floor(Math.random()*greenRest.length);                        
                        cardsBlockCardId[el].push(greenRest[random]);
                        greenRest = greenRest.filter(elem => elem != greenRest[random])                        
                    }
                    if(index ===1){
                        let random = Math.floor(Math.random()*blueRest.length);                        
                        cardsBlockCardId[el].push(blueRest[random]);
                        blueRest = blueRest.filter(elem=> elem != blueRest[random]);                        
                    }
                    if(index ===2){
                        let random = Math.floor(Math.random()*brownRest.length);                        
                        cardsBlockCardId[el].push(brownRest[random]);
                        brownRest = brownRest.filter(elem=> elem != brownRest[random]);                        
                    }                
                    
                }
            })        
           

        }        
    }   
    document.querySelector('.cardBackground').classList.remove('nonvisible');
    fillCounter()

}

function fillCounter(){
 let copy = cardsBlockCardId;
 for(let i =0; i<3;i++){
    ["green", "brown", "blue"].forEach(el => {
        document.querySelector(`.stage${i+1} > .${el}Cards`).textContent = copy[i].filter(elem => elem.color === el).length.toString()
    })
 }
 
    

}
function showNextCard(){
    function showCardsFromStage(stageIndex){
        let random = Math.floor(Math.random()*cardsBlockCardId[stageIndex].length)
        let cardId = cardsBlockCardId[stageIndex][random].id;
        let cardColor = cardsBlockCardId[stageIndex][random].color;
        document.querySelector(".nextCard").setAttribute("src", "./assets/MythicCards/"+cardColor+"/"+cardId+".png")
        document.querySelector(".nextCard").classList.remove("nonvisible");
        cardsBlockCardId[stageIndex]= cardsBlockCardId[stageIndex].filter(el => el != cardsBlockCardId[stageIndex][random])
    }
    
    if(cardsBlockCardId[0].length){
        showCardsFromStage(0)
    }else if(cardsBlockCardId[1].length){
        showCardsFromStage(1)
    }else if(cardsBlockCardId[2].length){
        showCardsFromStage(2)
    }else if(!cardsBlockCardId[2].length){
        document.querySelector(".cardsDeck").classList.add("nonvisible")
    }
    fillCounter()
    
   
    
}

shuffleButton.addEventListener("click", shuffleCards)

document.querySelector(".cardsDeck").addEventListener("click", showNextCard)


