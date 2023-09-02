
const gameBoard = () => {
    let gameControl = () => {
        let clickCount = 0;
        let choiceBtnX = document.querySelector(".x-choice > button")
        let choiceBtnO = document.querySelector(".o-choice > button")
        let btnContainerX = document.querySelector(".x-choice")
        let btnContainerO = document.querySelector(".o-choice")
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
                                clickCount++
                                resultDiv(clickCount)
                                console.log(clickCount);
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
                                }, {once : true})
                            }
                        })
            
        choiceBtnO.addEventListener("click", () => {

                btnContainerX.innerHTML = ""
                btnContainerO.innerHTML = ""
                    
                    
                for(let i = 0 ; i <boxClick.length; i++){
                            boxClick[i].addEventListener("click", () => {
                                clickCount++
                                resultDiv(clickCount)
                                console.log(clickCount);
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
                                    
                                }, {once : true})
                            }
                        })
    }

    function gameWin(turn, playerVal){

        let resultDiv = document.querySelector(".result-div")
            
        if( turn[1].style.display === "block" && turn[4].style.display === "block" && turn[7].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[3].style.display==="block" && turn[4].style.display === "block" && turn[5].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[0].style.display === "block" && turn[4].style.display === "block" && turn[8].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[2].style.display === "block" && turn[4].style.display === "block" && turn[6].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[0].style.display === "block" && turn[3].style.display === "block" && turn[6].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[2].style.display === "block" && turn[5].style.display === "block" && turn[8].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[0].style.display === "block" && turn[1].style.display === "block" && turn[2].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
        else if( turn[6].style.display === "block" && turn[7].style.display === "block" && turn[8].style.display === "block"){
            resultDiv.style.display = "flex"
            resultDiv.innerHTML = `<h1>PLAYER ${playerVal} WON ! 🎊 </h1>
            <button onClick="window.location.reload();" class="resetButton">Reset</button>`
            }
    }

    function resultDiv(clickCount){
        let resultDiv = document.querySelector(".result-div")
        if (clickCount == 9){
            resultDiv.style.display = "flex"
        }
    }
    
    let  players = () => {

        function PlayerXWin(){
            let playerVal = "- X";
            let boxClick = document.querySelectorAll(".game-box > button")
            let turn = document.querySelectorAll(".choice-box1")
            
            CheckWin(boxClick,turn,playerVal)
        }
        PlayerXWin()
        
        function PlayerOWin (){
            let playerVal = "- O";
            let boxClick = document.querySelectorAll(".game-box > button")
            let turn = document.querySelectorAll(".choice-box2")
            CheckWin(boxClick,turn,playerVal)
        }
        PlayerOWin()
    
    
    
        function CheckWin(boxClick,turn,playerVal){
            for(let i = 0 ; i < boxClick.length; i++){
                boxClick[i].addEventListener("click", () => {
                    gameWin(turn,playerVal)
    
                })
            }
        }
    }
    

    return {gameControl,players};

}

let play = gameBoard();
play.gameControl();


function WinfuncX(){
    play.players()
}
let TimeSetX = setTimeout(WinfuncX, 3000);






