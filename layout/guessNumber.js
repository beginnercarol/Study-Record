$(document).ready(function(){
	var secNum = Math.floor(Math.random()*100+1);

var guesses = document.querySelector(".guesses");

var guessSubmit = document.querySelector('.guessSubmit');

var guessField = document.querySelector(".guessField");

var lastResult = document.querySelector(".lastResult");

var lowOrHi = document.querySelector(".lowOrHi");

var guessCount = 1;
var resetButton;// = document.querySelector('.resetGame');

console.log("secNum "+secNum);

guessSubmit.addEventListener('click',checkGuess);
/*for(var i=0;i<guessSubmit.length;i++){
	console.log("??");
	guessSubmit[i].addEventListener('click',checkGuess);
}*/

//resetButton.addEventListener("click",setGameOver);

function checkGuess(){
	console.log("checkGuess");
	var userGuess = Number(guessField.value);
	if(guessCount==1){
		guesses.textContent = "Previous guess: "
	}
	guesses.textContent += userGuess + " ";
	
	if(userGuess == secNum){
		lastResult.textContent = "Congratulations!";
		setGameOver();
	}else if(guessCount==10){
		 lastResult.textContent = 'Failed. ';
		 setGameOver();
	}else{
		lastResult.textContent = "Wrong! ";
		if(userGuess < secNum){
			lowOrHi.textContent = 'low';
		}else if(userGuess > secNum){
			lowOrHi.textContent = 'high';
		}
	}
	
	
	guessCount++;
	guessField.value='';
	guessField.focus();
		
}

function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton  = document.createElement('button');
	resetButton.textContent = 'Reset a game. ';
	document.body.appendChild(resetButton);
	resetButton.addEventListener("click",resetGame);
}

function resetGame(){
	guessCount = 1;
	var resetParas = document.querySelectorAll('.resultParas p');
	for(var i=0;i<resetParas.length;i++){
		resetParas[i].textContent = ' ';
	}
	resetButton.parentNode.removeChild(resetButton);
	guessField.disabled = false;
	guessSubmit.disabled = false;

	secNum = Math.floor(Math.random()*100+1);
}

});