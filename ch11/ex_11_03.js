function clearText(){
    document.getElementById("text").value = "";
    moveCountDisplay.innerHTML = 0;
}

// Register the event listener to parent element

const parent = document.getElementById("parent");
const moveCountDisplay = document.getElementById("moveCount");
const textArea = document.getElementById("text");

let moveCount = 0;
parent.onmousemove = function(event){
    console.log("Mouse move event");
    moveCount++;
    moveCountDisplay.innerHTML = moveCount;
}

// Mouse enter and leave events
parent.onmouseenter = function(event){
    console.log("Mouse enter event");
    textArea.value += `Mouse =ENTER=  event on target: ${event.target.id}\n`;
}

parent.onmouseleave = function(event){
    console.log("Mouse leave event");
    textArea.value += `Mouse =LEAVE= event on target: ${event.target.id}\n`;
}

// Mouse over and out events

parent.onmouseover = function(event){
    console.log("Mouse over event");
    textArea.value += `Mouse __OVER__ event: Enter ${event.target.id} from ${event.relatedTarget.id || null}\n`;
}

parent.onmouseout = function(event){
    console.log("Mouse out event");
    textArea.value += `Mouse __OUT__ event: Leave ${event.target.id} to ${event.relatedTarget.id || null}\n`;
}
