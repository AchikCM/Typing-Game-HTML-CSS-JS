function hideElementID(elementId) {
    const element = document.getElementById(elementId); // Notice the change here
    element.classList.add('hidden')
}
function ShowelementId(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    const ElementValue = element.innerText;
    const value = parseInt(ElementValue);
    return value;
}
function setTextElementbyID(elementId, value) {
    const element = document.getElementById(elementId); // Finds the HTML element with the specified ID
    element.innerText = value; // Sets the inner text of the found element to the provided value
}

function getbackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getelementTexr(elementId) {
    const element = document.getElementById(elementId);
    const Text = element.innerText;
    return Text;
}
