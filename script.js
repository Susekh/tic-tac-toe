
let Gameboard = () => {
    let gameboard = []

    

}



function gameControl(){
    let btnChoice;
    let choiceBtnX = document.querySelector(".x-choice > button")
    let choiceBtnO = document.querySelector(".o-choice > button")
    choiceBtnX.addEventListener("click", () => {players(1).choice})
    choiceBtnO.addEventListener("click", () => {players(0).choice})
    console.log(btnChoice)
    let  players = (btnChoice) => {
        const choice = () => {if(btnChoice == 1){
                let boxClick = document.querySelector(".game-box > div")
                let displayChoice = document.querySelector(".choice-box1")
                boxClick.addEventListener("click", () => {displayChoice.style.display = "block"})
                console.log("hello")
            } else if(btnChoice == 0){
                let boxClick = document.querySelector(".game-box > div")
                let displayChoice = document.querySelector(".choice-box2")
                boxClick.addEventListener("click", () => {displayChoice.style.display = "block"})
            }
        }
        
        return{choice};
    
    }
    

    let player = players(btnChoice);
    player.choice()
}

gameControl()


