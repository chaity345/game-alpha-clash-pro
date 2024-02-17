function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
//get the score id
function getTextElementById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;

}
//set the score id

function setTextElementBYId(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;

}
//common function for getElement
function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
}
