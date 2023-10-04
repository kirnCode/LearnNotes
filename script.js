var imgPlace = document.getElementById('imgPlace');

var musicNote = 0;
var validInput = [];

var GoodAnswer = 'Bonne Réponse !'
var badAnswer = 'Mauvaise Réponse.';

document.getElementById('result').addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        checkResult();
    }
})

function changeLanguage(e){
    if(e === 'french'){
        document.getElementById('result').placeholder = "De quel note s'agit t'il ?";
        GoodAnswer = 'Bonne Réponse !'
        badAnswer = 'Mauvaise Réponse.';
    }
    if(e === 'english'){
        document.getElementById('result').placeholder = "Which note it is ?";
        GoodAnswer = 'Good answer !'
        badAnswer = 'Bad Answer.';
    }
    
}

function checkResult(){
    var result = document.getElementById('result').value;

    if(validInput.includes(result)){
        alert(GoodAnswer);
        document.getElementById('result').value = ''; 
        randomNote()
        
    }else{
        alert(badAnswer);

    }
    
}



function randomNote(){
    musicNote = Math.random() * (14-1)+1;
    console.log(musicNote);
 
    if(musicNote >= 1 && musicNote < 2){
        imgPlace.innerHTML = '<img src="images/c4note.jpg" alt="" draggable="false">';
        validInput = ['do', 'DO', 'Do', 'c', 'C', 'c4', 'C4'];
         
    }

    if(musicNote >= 2 && musicNote < 3){
        imgPlace.innerHTML = '<img src="images/d4note.jpg" alt="" draggable="false">';
        validInput = ['re', 'Re', 'RE', 'ré', 'Ré', 'RÉ', 'd', 'D', 'd4', 'D4'];
    }

    if(musicNote >= 3 && musicNote < 4){
        imgPlace.innerHTML = '<img src="images/e4note.jpg" alt="" draggable="false">';
        validInput = ['mi', 'Mi', 'MI', 'e', 'E', 'e4', 'E4'];
    }

    if(musicNote >= 4 && musicNote < 5){
        imgPlace.innerHTML = '<img src="images/f4note.jpg" alt="" draggable="false">';
        validInput = ['fa', 'Fa', 'FA', 'f', 'F', 'f4', 'F4'];
    }

    if(musicNote >= 5 && musicNote < 6){
        imgPlace.innerHTML = '<img src="images/g4note.jpg" alt="" draggable="false">';
        validInput = ['sol', 'Sol', 'SOL', 'g', 'G', 'g4', 'G4'];
        
    }

    if(musicNote >= 6 && musicNote < 7){
        imgPlace.innerHTML = '<img src="images/a4note.jpg" alt="" draggable="false">';
        validInput = ['la', 'La', 'LA', 'a', 'A', 'a4', 'A4'];
        
    }

    if(musicNote >= 7 && musicNote < 8){
        imgPlace.innerHTML = '<img src="images/b4note.jpg" alt="" draggable="false">';
        validInput = ['si', 'Si', 'SI', 'b', 'B', 'b4', 'B4'];
    }

    if(musicNote >= 8 && musicNote < 9){
        imgPlace.innerHTML = '<img src="images/c5note.jpg" alt="" draggable="false">';
        validInput = ['do', 'DO', 'Do', 'c', 'c5', 'C5'];
        
    }

    if(musicNote >= 9 && musicNote < 10){
        imgPlace.innerHTML = '<img src="images/d5note.jpg" alt="" draggable="false">';
        validInput = ['re', 'Re', 'RE', 'ré', 'Ré', 'RÉ', 'd', 'D', 'd5', 'D5'];
        
    }

    if(musicNote >= 10 && musicNote < 11){
        imgPlace.innerHTML = '<img src="images/e5note.jpg" alt="" draggable="false">';
        validInput = ['mi', 'Mi', 'MI', 'e', 'E', 'e5', 'E5'];
        
    }

    if(musicNote >= 11 && musicNote < 12){
        imgPlace.innerHTML = '<img src="images/f5note.jpg" alt="" draggable="false">';
        validInput = ['fa', 'Fa', 'FA', 'f', 'F', 'f5', 'F5'];
        
    }

    if(musicNote >= 12 && musicNote < 13){
        imgPlace.innerHTML = '<img src="images/g5note.jpg" alt="" draggable="false">';
        validInput = ['sol', 'Sol', 'SOL', 'g', 'G', 'g5', 'G5'];
        
    }

    if(musicNote >= 13 && musicNote < 14){
        imgPlace.innerHTML = '<img src="images/a5note.jpg" alt="" draggable="false">';
        validInput = ['la', 'La', 'LA', 'a', 'A', 'a5', 'A5'];
        
    }

    if(musicNote >= 14 && musicNote < 15){
        imgPlace.innerHTML = '<img src="images/b5note.jpg" alt="" draggable="false">';
        validInput = ['si', 'Si', 'SI', 'b', 'B', 'b5', 'B5'];
        
    }

}

randomNote();