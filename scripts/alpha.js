function continueGame(){
    const alphabet=getRandomAlphabet();
    //console.log('your random alphabet',alphabet)

    //set randomly generated alphabet to the screen(show it)
    const curnetAlphabet=document. getElementById('current-alphabet');
    curnetAlphabet.innerText=alphabet;
    //call the bg colour set function
    setBackgroundColorById(alphabet);


 } 


 //handle keyboard on computer

 function handleKeyboardButtonPress(event){
    //now we can get when i pressed by event key
    const playerPressed=event.key;
    console.log("player pressed",playerPressed)

    //stop the game if player pressed escape
    if(playerPressed=='Escape'){
        gameOver();
    }


    //get the expected to press
    const curnetAlphabetElement=document.getElementById('current-alphabet');
    const curnetAlphabet=curnetAlphabetElement.innerText;
    const expectedAlphabet=curnetAlphabet.toLowerCase();
    console.log(playerPressed,curnetAlphabet)

    //check match or not
    if(playerPressed == expectedAlphabet){
        console.log("you got a point")
        const currentScore=getTextElementById('current-score');
       const updatedScore=currentScore + 1;
       setTextElementBYId('current-score',updatedScore);

        //........................................
        //update score
        //step1:get the current score
        /* const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore)


        //step2:increase the score by 1
        const newScore=currentScore +1;
        //step3:show the update score
        currentScoreElement.innerText=newScore;
         
 */
        //stat a new round
        //now we have to remove bg when pressed correctly the button
        setRemoveBackground(expectedAlphabet);

        continueGame();

    }
    else{
        console.log('you missed.you lost a life')
        const currentLife=getTextElementById('current-life');
        const updatedScore=currentLife - 1;
        setTextElementBYId('current-life',updatedScore);
        

        //....................................
        //get the life score
        /* const currentLifeScore=document.getElementById('current-life');
        const currentLifeScoreText=currentLifeScore.innerText;
        const currentScore=parseInt(currentLifeScoreText);


        //reduced the life score
        const newLife=currentScore - 1;
        //display the life score
        currentLifeScore.innerText=newLife; */


        //go to the score page

        if(updatedScore==0){
           gameOver();
        }
        
    }



    
 }



 //capture keyboard keypress

 document.addEventListener('keyup',handleKeyboardButtonPress)
 
 
 
 function play(){
//     //step 1:hide the home screen: to hide the home screen use hidden class to the home section
//     //show the playground
//     const homeSection=document.getElementById('home-screen');
//     //now we have to hidden home screen
//     //step 1: get all classlist 
//     //step 2:then add hidden class
//     homeSection.classList.add('hidden');

//     //now we have to unhide the playground section
//     const playgroundSection=document.getElementById('play-ground');
//     console.log(playgroundSection)
//     playgroundSection.classList.remove('hidden');


//hide everything show only the playground
hideElementById('home-screen');

hideElementById('final-score');
showElementById('play-ground');
//reset score and life
setTextElementBYId('current-life',5);
setTextElementBYId('current-score',0);


continueGame();
 }

//set background colour function
 function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');


 }
 function setRemoveBackground(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
 }

 

 //get random alphabet

 function getRandomAlphabet(){
    //get or create an alphabet array
    const alphabetString='abcdefghijklmnopqwrstuvwxyz';
    const alphabets=alphabetString.split('');
    //console.log(alphabets)

    //get a random index between 0 to 25 because we have alphabet 26
    //idea of generate a random number
    /* 1 get the number o to 1 with math.random 
    2 as if we have to get between 25 number so we have to multiply by 25
    3 then we have to get integer value so have to get into random value to round function*/


    const randomNum=Math.random()*25;
    const index=Math.round(randomNum);
    //console.log(index)
    //get the index value
    const alphabet=alphabets[index];
    //console.log(index,alphabet)
    return alphabet;
    

 }
 function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //get the final score
    const lastScore=getTextElementById('current-score')
    //set the final score
    setTextElementBYId('last-score',lastScore);

    //clear the last alphabet highlight
    const currentAlphabet= getElementTextById('current-alphabet');
    console.log('current-alphabet')
    setRemoveBackground(currentAlphabet)





 }
