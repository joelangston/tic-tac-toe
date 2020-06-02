let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function checkForWin (winningCombination, playerSelection){
    for( let index = 0; index < winningCombination.length; index += 1 ){
        let matches = 0
        for (let jindex = 0; jindex < 3; jindex += 1){
            for (let playerindex = 0; playerindex < playerSelection.length; playerindex += 1){
                if (playerSelection[playerindex] == winningCombination[index][jindex]) {
                    matches += 1
                }
            }
        }
        if (matches == 3){
            return true
        }
    }
}
        
    



    






    
const cellElementArray = document.querySelectorAll('.grid-cell');

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    
  
    const currentCellElement = cellElementArray[elementIndex]
    
  
    currentCellElement.addEventListener('click', function (event) {
     
       
        const clickedCellElement = event.target;
     
        
         
        console.log("You clicked on cell number: " + clickedCellElement.id)

        if (currentPlayer === 'X'){
            currentPlayer = 'O'
            clickedCellElement.innerHTML = 'X'
            playerXSelections.push(clickedCellElement.id)
            if (checkForWin (winningCombinations, playerXSelections) == true)
            { alert ('Player X Wins!!!')}
            console.log(playerXSelections)
            
            
            
                
            
           
        }
        else {
            currentPlayer === 'O'
              currentPlayer = 'X'
              clickedCellElement.innerHTML = 'O'
              playerOSelections.push(clickedCellElement.id)
              if (checkForWin (winningCombinations, playerOSelections ) == true){ alert ('Player O Wins!!!')}
              console.log(playerOSelections)
              

            }

        }


        

    )
    }
   

                

            
        
    
 
    
   