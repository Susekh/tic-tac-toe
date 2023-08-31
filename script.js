
let Gameboard = () => {
    let gameboard = []

    

}



const gameControl = () => {
    let gamePlay = () => {
        let choiceBtnX = document.querySelector(".x-choice > button")
        let choiceBtnO = document.querySelector(".o-choice > button")
        
        
        
        choiceBtnX.addEventListener("click", () => {
                    let boxClick = document.querySelectorAll(".game-box > div")
                    let displayChoice = document.querySelectorAll(".choice-box1")
                    
                    for(let i = 0; i <boxClick.length; i++){
                        boxClick[i].addEventListener("click", () => {displayChoice[i].style.display = "block"})
                    }
    
        })
        choiceBtnO.addEventListener("click", () => {
                    let boxClick = document.querySelectorAll(".game-box > div")
                    let displayChoice = document.querySelectorAll(".choice-box2")
                    for(let i = 0; i <boxClick.length; i++){
                        boxClick[i].addEventListener("click", () => {displayChoice[i].style.display = "block"})
                    }
        })


    }
    
    let  players = () => {
        
    
    }
    

    return {gamePlay};

}

let play = gameControl();
play.gamePlay();



