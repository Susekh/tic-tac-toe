
let Gameboard = () => {
    let gameboard = []

    

}



const gameControl = () => {
    let gamePlay = () => {
        let choiceBtnX = document.querySelector(".x-choice > button")
        let choiceBtnO = document.querySelector(".o-choice > button")
        let btnContainerX = document.querySelector(".x-choice")
        let btnContainerO = document.querySelector(".o-choice")
        let gameOver = document.querySelector(".game-over")
        let boxClick = document.querySelectorAll(".game-box > button")
        let displayChoice1 = document.querySelectorAll(".choice-box1")
        let displayChoice2 = document.querySelectorAll(".choice-box2")
        
            let turn = displayChoice1
            let turnX = displayChoice2
            choiceBtnX.addEventListener("click", () => {

                btnContainerX.innerHTML = ""
                btnContainerO.innerHTML = ""
                    
                    
                for(let i = 0 ; i <boxClick.length; i++){
                            boxClick[i].addEventListener("click", () => {
                                
                                    if(turnX == displayChoice2){
                                        if(turnX[i].style.display !== "block"){
                                            turnX = displayChoice1
                                            turnX[i].style.display = "block"
                                        }
                                        
                                    }
                                    else if(turnX == displayChoice1) {
                                        if(turnX[i].style.display !== "block"){
                                            turnX = displayChoice2
                                            turnX[i].style.display = "block"
                                        }
                                    }
                                })
                            }
                        })
            



            choiceBtnO.addEventListener("click", () => {

                btnContainerX.innerHTML = ""
                btnContainerO.innerHTML = ""
                    
                    
                for(let i = 0 ; i <boxClick.length; i++){
                            boxClick[i].addEventListener("click", () => {
                                
                                    if(turn == displayChoice1){
                                        if(turn[i].style.display !== "block"){
                                            turn = displayChoice2
                                            turn[i].style.display = "block"
                                            
                                        }
                                    }
                                    else if(turn == displayChoice2) {
                                        if(turn[i].style.display !== "block"){
                                            turn = displayChoice1
                                            turn[i].style.display = "block"
                                            
                                        }
                                    }
                                })
                            }
                        })
            
        
            /*let varOver = 1;
            
            for(let i = 0; i < turn.length; i++){
                if(turn[i].style.display == "none" && turnX[i].style.display == "none"){
                    
                    varOver = 0;

                }
                else {
                    console.log("working")
                    varOver = 1 ;
                }
                


            }

            console.log(varOver)
            if (varOver == 1){
                gameOver.style.display = "block";
            }*/

        
        
        
                    
    }

    


    
    
    let  players = () => {
        
    
    }
    

    return {gamePlay};

}

let play = gameControl();
play.gamePlay();



