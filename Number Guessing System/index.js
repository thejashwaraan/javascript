// Number Guessing System

const minNum=1
const maxNum=100
const answer=Math.floor(Math.random()*(maxNum - minNum+1))+minNum

let attempts=0
let guess
let running=true

while(running==true){
    guess=window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess=Number(guess)
    
    if(isNaN(guess)){
        window.alert(`please enter a valid number`)
    }else if(guess<minNum ||guess>maxNum){
        window.alert(`please enter a number between ${minNum} - ${maxNum}`)
    }else{
        attempts++
        if(guess<answer){
            window.alert("Too Low! Try Again")
        }else if(guess>answer){
            window.alert("Too High! Try again")
        }else{
            window.alert(`CORRECT! THE ANSWER WAS ${answer}. It took you ${attempts}`)
            running=false
        }
    }
    
}