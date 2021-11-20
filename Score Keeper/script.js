const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

const p1DisplayScore = document.querySelector('#p1DisplayScore');
const p2DisplayScore = document.querySelector('#p2DisplayScore');

const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

winningScoreSelect.addEventListener('change',function(){
    winningScore = winningScoreSelect.value;
    resetValues();
})


p1Button.addEventListener('click',function(){
    if(!gameOver){
        p1Score++;
        if(p1Score == winningScore){
            gameOver = true;
            p1DisplayScore.classList.add('winner');
            p2DisplayScore.classList.add('loser');
        }
        p1DisplayScore.textContent=p1Score;
    }
    
    
})

p2Button.addEventListener('click',function(){
    if(!gameOver){
        p2Score++;
        if(p2Score == winningScore){
            gameOver = true;
            p1DisplayScore.classList.add('loser');
            p2DisplayScore.classList.add('winner');
        }
        p2DisplayScore.textContent=p2Score;
    }
    
})

reset.addEventListener('click',resetValues)

function resetValues(){
    p1Score = 0;
    p2Score = 0;
    p1DisplayScore.textContent=p1Score;
    p2DisplayScore.textContent=p2Score;
    p1DisplayScore.className = '';
    p2DisplayScore.className = '';
    gameOver = false;
}